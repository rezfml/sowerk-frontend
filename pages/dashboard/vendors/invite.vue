<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container style="width: 100%; margin: 0px; max-width: 100vw;">
      <v-skeleton-loader
        v-if="!loading"
        type="card-avatar, article, article, actions"
        min-height="50vh"
        min-width="50vw"
      ></v-skeleton-loader>
      <transition name="slide-fade">
        <v-card v-if="loading && !success">
          <v-container class="px-12">
            <v-row>
              <v-col cols="12">
                <v-img
                  src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png"
                  aspect-ratio="1"
                  style="height: 25vh; max-height: 25vh;"
                ></v-img>
                <p class="primary--text text-center font-weight-bold text-h5">
                  Invite a Vendor to join SOWerk And Connect For Free
                </p>
                <p class="text-center text-h6">
                  Enter the Vendor's information below, add another line, and
                  invite multiple vendors at once.
                </p>
                <p class="text-body-1 text-center">
                  (Note: By selecting NO under Pre-Approved, the vendor will
                  still be invited to join SOWerk, but will still have to submit
                  an application to your business and not recieve a free
                  connection.)
                </p>
              </v-col>
              <v-col cols="12">
                <v-form ref="form">
                  <v-data-table
                    :headers="headers"
                    :items="vendors"
                    class="text-caption table--bordered"
                    disable-pagination
                    hide-default-footer
                  >
                    <template v-slot:item.service="{ item }">
                      <v-autocomplete
                        v-model="item.service"
                        :items="naicsList"
                        item-text="name"
                        item-value="name"
                        label="Select A Category That Describes What This Application Provides"
                        solo
                        clearable
                        hint="This is generated from the NAICS directory."
                        :rules="rules.requiredRules"
                      >
                        <template slot="selection" slot-scope="data">
                          <p>{{ data.item.name }}</p>
                        </template>
                        <template slot="item" slot-scope="data">
                          <p>{{ data.item.name }}</p>
                        </template>
                      </v-autocomplete>
                    </template>
                    <template v-slot:item.companyName="{ item }">
                      <v-text-field
                        class="text-caption"
                        placeholder="Outdoor Solutions"
                        v-model="item.companyName"
                        :rules="rules.requiredRules"
                      ></v-text-field>
                    </template>
                    <template v-slot:item.firstName="{ item }">
                      <v-text-field
                        class="text-caption"
                        placeholder="John"
                        v-model="item.firstName"
                        :rules="rules.requiredRules"
                      ></v-text-field>
                    </template>
                    <template v-slot:item.lastName="{ item }">
                      <v-text-field
                        class="text-caption"
                        placeholder="Smith"
                        v-model="item.lastName"
                        :rules="rules.requiredRules"
                      ></v-text-field>
                    </template>
                    <template v-slot:item.email="{ item }">
                      <v-text-field
                        class="text-caption"
                        placeholder="johnsmith@email.com"
                        v-model="item.email"
                        :rules="rules.emailRules"
                      ></v-text-field>
                    </template>
                    <template v-slot:item.phone="{ item }">
                      <v-text-field
                        label="Phone*"
                        type="tel"
                        class="card__input black--text"
                        v-model="item.phone"
                        placeholder=" "
                        :rules="rules.requiredRules"
                      ></v-text-field>
                    </template>
                    <template v-slot:item.preapproved="{ item }">
                      <v-select
                        :items="preapprovedOptions"
                        v-model="item.preapproved"
                        item-text="text"
                        item-value="value"
                        class="text-caption"
                        placeholder="Branson Store - 1234 S New St"
                        :rules="rules.requiredRules"
                      >
                      </v-select>
                    </template>
                    <template v-slot:item.property="{ item }">
                      <v-select
                        :items="properties"
                        item-text="name"
                        v-model="item.property"
                        class="text-caption"
                        :rules="rules.requiredRules"
                      >
                        <template slot="selection" slot-scope="data">
                          {{ data.item.name }} - {{ data.item.address }}
                          {{ data.item.city }}, {{ data.item.state }}
                          {{ data.item.zipcode }}
                        </template>
                        <template slot="item" slot-scope="data">
                          {{ data.item.name }} - {{ data.item.address }}
                          {{ data.item.city }}, {{ data.item.state }}
                          {{ data.item.zipcode }}
                        </template>
                      </v-select>
                    </template>
                  </v-data-table>
                </v-form>
              </v-col>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn color="primary" text @click="addInvitee"
                  >+ Add Another Line</v-btn
                >
              </v-col>
              <v-col class="d-flex justify-space-between my-12">
                <v-btn
                  outlined
                  color="primary"
                  rounded
                  class="px-6"
                  to="/dashboard/vendors"
                  exact
                  >Cancel and Go Back To Dashboard</v-btn
                >
                <v-btn
                  color="primary"
                  rounded
                  class="px-12"
                  @click="inviteProviders"
                  >Invite Vendors</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </transition>
      <transition name="slide-fade">
        <v-card
          v-if="success"
          style="height: auto;"
          class="d-flex flex-column align-center"
        >
          <v-img
            style="max-height: 250px;"
            class="mt-10"
            :src="
              'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'
            "
          ></v-img>
          <v-card-title class="mt-n16" color="primary"
            >Your SOWerk Invite Has Been Sent!</v-card-title
          >
          <v-btn
            color="primary"
            :href="'../../dashboard/vendors/invite'"
            class="mb-4"
            rounded
            >Return To SOWerk Request Dashboard</v-btn
          >
        </v-card>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import HomeCard from '~/components/dashboard/HomeCard'
import FilterCard from '~/components/dashboard/FilterCard'

export default {
  name: 'invite',
  layout: 'app',
  components: {
    HomeCard,
    FilterCard
  },
  data() {
    return {
      loading: false,
      preapprovedOptions: [
        {
          text: 'Yes',
          value: true
        },
        {
          text: 'No',
          value: false
        }
      ],
      vendors: [
        {
          service: '',
          companyName: '',
          firstName: '',
          lastName: '',
          email: '',
          preapproved: true,
          property: ''
        }
      ],
      properties: [],
      company: {},
      services: [],
      headers: [
        {
          text: 'Vendor',
          value: 'service',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        },
        {
          text: 'Company',
          value: 'companyName',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        },
        {
          text: 'First Name',
          value: 'firstName',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        },
        {
          text: 'Last Name',
          value: 'lastName',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        },
        {
          text: 'Email',
          value: 'email',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        },
        {
          text: 'Phone',
          value: 'phone',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        },
        {
          text: 'Pre-Approved',
          value: 'preapproved',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        },
        {
          text: 'Channel',
          value: 'property',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
        }
      ],
      businesses: null,
      success: false,
      naicsList: [],
      rules: {
        requiredRules: [(v) => !!v || v === 0 || 'Field is required'],
        usernameRules: [
          (v) => !!v || 'Name is required',
          (v) =>
            (v && v.length <= 100) || 'Name must be less than 100 characters',
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
          // v => /.+@.[A-Z]+/.test(v)  'E-mail must be valid',
          v => (v && v.length <= 100) || 'Email must be less than 100 characters'
        ],
        emailNotRequiredRules: [
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
          (v) =>
            (v && v.length <= 100) || 'Email must be less than 100 characters',
        ],
        phoneRules: [
          (v) => (v && v.length === 10) || 'Phone Number must be 10 digits',
        ],
      },
    }
  },
  watch: {
    loading: function() {
      if (this.loading) {
        console.log(document)
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  async mounted() {
    await this.getCompany()
    await this.getBusinesses()
    await this.getNaicsList()
  },
  computed: {
    currentUser() {
      return this.$store.state.user.user.user
    }
  },
  methods: {
    async getNaicsList() {
      await this.$http.get('https://www.sowerkbackend.com/api/naicslist')
        .then(response => {
          console.log('naicslist', response)
          this.naicsList = response.data
        })
        .catch(err => {
          console.log(err, 'err on getting naicslist')
        })
    },
    async getCompany() {
      this.loading = true
      let { data, status } = await this.$http
        .get(
          'https://www.sowerkbackend.com/api/companies/' +
            this.$store.state.user.user.user.companies_id
        )
        .catch((e) => e)
      this.company = data
      this.properties = data.locations
      console.log(this.company, 'company')
    },
    async getBusinesses() {
      this.loading = true
      this.locations = []
      let { data, status } = await this.$http
        .get('https://www.sowerkbackend.com/api/companies/type/1')
        .catch((e) => e)
      // this.businesses = data.users.filter(function(user) {
      //   return user.user_type == 1;
      // })
      // console.log(this.businesses);
      await this.getLocations(data)
    },
    async getLocations(companies) {
      for (const company of companies) {
        let { data, status } = await this.$http
          .get('https://www.sowerkbackend.com/api/companies/' + company.id)
          .catch((e) => e)
        if (this.$error(status, data.message, data.errors)) return
        if (data.locations[0] !== 'There are no locations') {
          for (const location of data.locations) {
            this.$nextTick(function() {
              this.locations.push(location)
            })
          }
        } else {
        }
      }
      await this.getServices()
    },
    async inviteProviders() {
      this.$refs.form.validate();
      if(this.$refs.form.validate()) {
        let providersObject = {
          companies_id: this.$store.state.user.user.user.companies_id,
          service: [],
          companyName: [],
          first_name: [],
          last_name: [],
          phone: [],
          toEmail: [],
          pre_approved: [],
          property: [],
          usersCompanyName: this.company.account_name,
          usersFirstName: this.$store.state.user.user.user.first_name,
          usersLastName: this.$store.state.user.user.user.last_name,
          companyImg: this.company.imgUrl
        }
        for (let i = 0; i < this.vendors.length; i++) {
          providersObject.service.push(this.vendors[i].service)
          providersObject.companyName.push(this.vendors[i].companyName)
          providersObject.first_name.push(this.vendors[i].firstName)
          providersObject.last_name.push(this.vendors[i].lastName)
          providersObject.phone.push(this.vendors[i].phone)
          providersObject.toEmail.push(this.vendors[i].email)
          providersObject.pre_approved.push(this.vendors[i].preapproved)
          providersObject.property.push(this.vendors[i].property)
        }
        console.log(providersObject, 'yay')
        await this.$http
          .post('https://www.sowerkbackend.com/api/invite', providersObject)
          .then((response) => {
            console.log(response, 'success')
            this.success = true
          })
          .catch((err) => {
            console.log('err', err)
            alert('error in inviting service providers to our platform')
          })
      }
    },
    async getServices() {
      for (const location of this.locations) {
        let { data, status } = await this.$http
          .get(
            'https://www.sowerkbackend.com/api/services/bylocationid/' +
              location.id
          )
          .catch((e) => e)
        if (data) {
          if (data.message) continue
          for (const service of data) {
            let serviceObj = {
              id: service.id,
              location_id: location.id,
              service: service.name,
              name: location.name,
              address:
                location.address +
                ' ' +
                location.city +
                ', ' +
                location.state +
                ' ' +
                location.zipcode,
              primary_contact:
                location.contact_first_name + ' ' + location.contact_last_name,
              phone: location.phone
            }

            this.services.push(serviceObj)
          }
        }
      }
      this.loading = true
    },
    addInvitee() {
      let newVendor = {
        companies_id: this.$store.state.user.user.user.companies_id,
        service: '',
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preapproved: true,
        property: ''
      }
      this.vendors.push(newVendor)
    }
  }
}
</script>

<style scoped>
.table--bordered,
.table--bordered >>> tr {
  border: 1px solid lightgrey !important;
  border-collapse: collapse;
}

.table--bordered >>> th:not(:first-child) {
  min-width: 150px;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
