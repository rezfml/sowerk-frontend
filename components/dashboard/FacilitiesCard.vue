<template>
  <div style="width: 100%">
    <div v-if="locationApproved" style="width: 100%" class="d-flex">
      <v-col cols="3" class="ml-n6">
        <FilterCard
          title="Filter"
          :filters="filters"
          :locationApproved="locationApproved"
          :loadModal="loadModal"
        ></FilterCard>
      </v-col>
      <v-col cols="9" class="ml-n4">
        <v-card class="white pt-0 mt-12 mb-4">
          <v-progress-circular
            v-if="loading != true"
            indeterminate
            color="primary"
            :size="20"
          ></v-progress-circular>
          <v-container class="pt-0" fluid v-if="loading === true">
            <v-card-title
              style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;"
              class="primary white--text font-weight-regular red-gradient"
            >{{ title }}</v-card-title>
            <v-card-actions class="d-flex justify-end px-4 py-0">
              <v-row class="py-0">
                <v-spacer></v-spacer>
                <v-col cols="4" class="py-0">
                  <v-text-field label="Search" light></v-text-field>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-text class="pt-0 pb-2">
              <v-data-table
                :headers="tableProperties"
                :items="items"
                :items-per-page="10"
              >
                <template v-slot:item.address="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <v-col>
                      <p>{{item.address}}</p>
                      <p>{{item.city}}, {{item.state}} {{item.zipcode}}</p>
                    </v-col>
                  </v-row>
                </template>
                <template v-slot:item.addressCityState="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.city}}, {{item.state}}</p>
                  </v-row>
                </template>
                <template v-slot:item.service="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p v-if="company.company_type != 'false'">{{item.services[0]}}</p>
                    <p v-else>{{item.servicesOffered[0]}}</p>
                  </v-row>
                </template>
                <template v-slot:item.services="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.services[0]}}</p>
                  </v-row>
                </template>
                <template v-slot:item.companyName="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p v-if="item.name && item.imageUrl"><v-img style="width: 40px; height: 40px;" :src="item.imageUrl" /> {{item.name}}</p>
                    <p v-else>
                      <v-progress-circular
                        indeterminate
                        color="primary"
                        :size="20"
                      ></v-progress-circular>
                    </p>
                  </v-row>
                </template>
                <template v-slot:item.name="{ item }">
                  <v-row class="d-flex" cols="12" md="6">
                    <v-col>
                      <v-img :src="item.imageUrl" :aspect-ratio="1" max-height="40" max-width="40" style="border-radius: 50%;" class="mr-4"/>
                      <p>{{item.name}}</p>
                    </v-col>
                  </v-row>
                </template>

                <template class="d-flex" v-slot:item.full_name="{ item }">
                  <v-icon color="primary">mdi-account</v-icon>
                  <p>{{ item.contact_first_name }} {{ item.contact_last_name }}</p>
                </template>

                <template class="d-flex" v-slot:item.fullname="{ item }">
                  <div>
                    <v-icon color="primary">mdi-account</v-icon>
                    <p v-if="company.company_type != 'false'">{{item.fullname}}</p>
                    <p v-else>{{ item.name }}</p>
                  </div>
                </template>

                <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
                  <v-btn block color="primary" :to="slug + item.application_id"
                  >Review</v-btn
                  >
                </template>
                <template
                  v-slot:item.actions="{ item }"
                  v-else-if="action === 'Apply'"
                >
                  <v-btn
                    block
                    color="primary"
                    :to="slug + item.location_id + '/application-form/' + item.id"
                  >Apply</v-btn
                  >
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="action === 'View'">
                  <v-btn class="my-1" style="width: 90%;" color="green" outlined @click="submit(item.companies_id, item)">Message</v-btn>
                  <v-btn style="width: 90%;" outlined color="primary" :to="'/dashboard/vendors/' + item.id">View</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="action === 'ViewApproved'">
                  <v-btn class="my-1" style="width: 90%;" color="green" outlined :to="'/dashboard/vendors/' + item.id">View</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="viewLocation === true">
                  <v-btn @click="assignUserToLocation(item)" style="width: 90%;" outlined color="primary">Assign User To Location</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else>
                  <nuxt-link :to="slug + item.id" append>
                    <v-btn class="my-1" style="width: 90%;" color="green" outlined>
                      View
                    </v-btn>
                  </nuxt-link>
                  <!--            <v-icon small @click="deleteItem(item)">-->
                  <!--              mdi-delete-->
                  <!--            </v-icon>-->
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
              <v-btn
                color="primary"
                class="px-8"
                rounded
                outlined
                small
                style="font-size: 12px"
              >View All</v-btn
              >
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
    </div>
    <v-card v-else class="white pt-0 mt-12 mb-4" style="width: 100%">
      <v-progress-circular
        v-if="loading != true"
        indeterminate
        color="primary"
        :size="20"
      ></v-progress-circular>
      <v-container class="pt-0" fluid v-if="loading === true">
        <v-card-title
          style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
          class="primary white--text font-weight-regular red-gradient"
        >{{ title }}</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0">
            <v-spacer></v-spacer>
            <v-col cols="4" class="py-0">
              <v-text-field label="Search" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-card-text class="pt-0 pb-2">
          <v-data-table
            :headers="tableProperties"
            :items="items"
            :items-per-page="10"
          >
            <template v-slot:item.address="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <v-col>
                  <p>{{item.address}}</p>
                  <p>{{item.city}}, {{item.state}}  {{item.zipcode}}</p>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.addressCityState="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p>{{item.city}}, {{item.state}}</p>
              </v-row>
            </template>
            <template v-slot:item.service="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p v-if="company.company_type != 'false'">{{item.services[0]}}</p>
                <p v-else>{{item.servicesOffered[0]}}</p>
              </v-row>
            </template>
            <template v-slot:item.services="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p>{{item.services[0]}}</p>
              </v-row>
            </template>
            <template v-slot:item.companyName="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p v-if="item.name && item.imageUrl"><v-img style="width: 40px; height: 40px;" :src="item.imageUrl" /> {{item.name}}</p>
                <p v-else>
                  <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="20"
                  ></v-progress-circular>
                </p>
              </v-row>
            </template>
            <template v-slot:item.name="{ item }">
              <v-row class="d-flex" cols="12" md="6">
                <v-col>
                  <v-img :src="item.imageUrl" :aspect-ratio="1" max-height="40" max-width="40" style="border-radius: 50%;" class="mr-4"/>
                  <p>{{item.name}}</p>
                </v-col>
              </v-row>
            </template>

            <template class="d-flex" v-slot:item.full_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              <p>{{ item.contact_first_name }} {{ item.contact_last_name }}</p>
            </template>

            <template class="d-flex" v-slot:item.fullname="{ item }">
              <div>
                <v-icon color="primary">mdi-account</v-icon>
                <p v-if="company.company_type != 'false'">{{item.fullname}}</p>
                <p v-else>{{ item.name }}</p>
              </div>
            </template>

            <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
              <v-btn block color="primary" :to="slug + item.application_id"
              >Review</v-btn
              >
            </template>
            <template
              v-slot:item.actions="{ item }"
              v-else-if="action === 'Apply'"
            >
              <v-btn
                block
                color="primary"
                :to="slug + item.location_id + '/application-form/' + item.id"
              >Apply</v-btn
              >
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action === 'View'">
              <v-btn class="my-1" style="width: 90%;" color="#D15959" outlined @click="submit(item.companies_id, item)">Message</v-btn>
              <v-btn style="width: 90%;background-color:#707070;" outlined color="white" :to="'/dashboard/vendors/' + item.id">View</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action === 'ViewApproved'">
              <v-btn class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined :to="'/dashboard/vendors/' + item.id">View</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="viewLocation === true">
              <v-btn @click="assignUserToLocation(item)" style="width: 90%;" outlined color="primary">Assign User To Location</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else>
              <nuxt-link :to="slug + item.id" append>
                <v-btn class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined>
                  View
                </v-btn>
              </nuxt-link>
              <!--            <v-icon small @click="deleteItem(item)">-->
              <!--              mdi-delete-->
              <!--            </v-icon>-->
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
          <v-btn
            color="primary"
            class="px-8"
            rounded
            outlined
            small
            style="font-size: 12px"
          >View All</v-btn
          >
        </v-card-actions>
      </v-container>
    </v-card>
    <v-card class="d-flex flex-column align-center" v-if="loadModal === true" style="width: 70vw; height: 70vh; z-index: 25; position: absolute; top: 50px; left: 80px; text-align: center;"
    >
      <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-card-title>Please fill in the <span style="color: #A61C00; padding: 0px 5px 0px 5px;">message field</span> below and click send message to send message</v-card-title>
      <v-form style="width: 80%;">
        <v-text-field style="width: 100%; font-size: 18px;" v-model="messageForm.message"></v-text-field>
        <v-btn @click="closeModal">Exit Message</v-btn>
        <v-btn @click="message(idForMessage, locationForMessage)">Send Message</v-btn>
      </v-form>
      <v-btn @click="closeModal" style="position: absolute; top: 10px; right: 10px; font-size: 30px;" text>X</v-btn>
      <v-card-title class="my-4" style="color: #A61C00;" v-if="successMessage === true">{{successText}}</v-card-title>
    </v-card>
  </div>
</template>
<script>
  import FilterCard from '~/components/dashboard/FilterCard'
export default {
  name: 'HomeCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', 'viewLocation', 'locationAssignUser', 'assignUserToLocation', 'locationApproved'],
  components: {
    FilterCard
  },
  data() {
    return {
      locations: null,
      users: [

      ],
      filters: [
        {
          name: 'Proximity',
          items: [
            'State',
            'National',
            'Under 10 Miles',
            'Under 25 Miles',
            'Under 50 Miles',
            'Under 100 Miles',
            'Under 150 Miles',
            'Under 200 Miles',
            '200+ Miles',
          ]
        },
        {
          name: 'State',
          items: [
            "Alaska",
            "Alabama",
            "Arkansas",
            "American Samoa",
            "Arizona",
            "California",
            "Colorado",
            "Connecticut",
            "District of Columbia",
            "Delaware",
            "Florida",
            "Georgia",
            "Guam",
            "Hawaii",
            "Iowa",
            "Idaho",
            "Illinois",
            "Indiana",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Massachusetts",
            "Maryland",
            "Maine",
            "Michigan",
            "Minnesota",
            "Missouri",
            "Mississippi",
            "Montana",
            "North Carolina",
            " North Dakota",
            "Nebraska",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "Nevada",
            "New York",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Puerto Rico",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Virginia",
            "Virgin Islands",
            "Vermont",
            "Washington",
            "Wisconsin",
            "West Virginia",
            "Wyoming"
          ]
        },
        {
          name: 'Service Needs',
          items: [
            'HVAC',
            'Electrical',
            'Plumbing',
            'Cleaning',
            'Landscaping'
          ]
        },
        {
          name: 'Years in Business',
          items: [
            'Less Than 1 Year',
            '1 - 3 Years',
            '3 - 5 Years',
            '5 - 10 Years',
            '10+ Years',
          ]
        },
        {
          name: 'Approved Applications',
          items: [
            'Less than 5',
            '6 - 15',
            '16 - 24',
            '25+',
          ]
        }
      ],
      loading: false,
      messageForm: {
        service: '',
        company: '',
        primary_contact_first_name: this.$store.state.user.user.user.first_name,
        primary_contact_last_name: this.$store.state.user.user.user.last_name,
        message: '',
        location: '',
        userprofiles_id: this.$store.state.user.user.user.id,
      },
      sendToId: Number,
      loadModal: false,
      idForMessage: Number,
      locationForMessage: {},
      successAssign: false,
      bkClass: 'bk',
      blurClass: 'blur',
      successMessage: false,
      successText: '',
    }
  },
  async created() {
    console.log(this.items, 'yayyy FACILITIES CARD');
    console.log(this.locationAssignUser, 'user for location assign')
    this.loadingFunc(this.items);
  },
  methods: {
    async loadingFunc(val) {
      if(val) {
        this.loading = true
      }
    },
    async submit(businessId, location) {
      this.loadModal = true;
      this.idForMessage = businessId;
      this.locationForMessage = location;
    },
    async message(businessId, location) {
      this.sendToId = businessId;
      console.log(this.messageForm)
      console.log(businessId, location, 'messageVals', location.services.join(', '));
      // get company for message
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.$store.state.user.user.user.companies_id)
        .then(async (response) => {
          console.log('get company message', response.data)
          this.messageForm.company = response.data.account_name;
          this.messageForm.service = location.services.join(', ');
          this.messageForm.location = `${location.name} - ${location.address} ${location.city}, ${location.state} ${location.zipcode}`
          await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.sendToId, this.messageForm)
            .then(res => {
              console.log('SUCCESS', res)
              this.successText = 'Successfully sent message to ' + res.data.messageVal.location
              this.successMessage = true;
            })
            .catch(err => {
              console.log(err);
            })
        })
      await setTimeout(() => {
        this.loadModal = false;
      }, 3500)
    },
    async closeModal() {
      this.loadModal = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.red-gradient {
  background: rgb(166, 28, 0);
  background: linear-gradient(
      90deg,
      rgba(166, 28, 0, 1) 0%,
      rgba(116, 21, 2, 1) 100%
  );
}
</style>
