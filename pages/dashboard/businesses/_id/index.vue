<template>
  <v-app class="grey lighten-3">
    <template v-if="loading || !company">
      <v-container class="px-0 fill-height" style="max-width: 95%;">
        <v-row style="height: 100%;">
          <v-col cols="4" class="py-12">
            <v-card height="300" class="d-flex justify-center align-center">
              <v-progress-circular
                indeterminate
                color="primary"
                :size="50"
              ></v-progress-circular>
            </v-card>
          </v-col>
          <v-col cols="8" class="py-12 d-flex flex-column justify-space-between">
            <v-card height="300" class="d-flex justify-center align-center">
              <v-progress-circular
                indeterminate
                color="primary"
                :size="50"
              ></v-progress-circular>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-else>
      <v-container class="px-0 fill-height" style="max-width: 95%;" v-if="company && company.company_type === 'true'">
        <v-row style="height: 100%;">
          <v-col cols="4" class="py-12">
            <ProfileCard :location="location" v-if="location"></ProfileCard>
          </v-col>
          <v-col cols="8" class="pb-12 d-flex flex-column justify-space-between">
            <ProfileEditCard :location="location" v-if="location"></ProfileEditCard>
            <CustomFormCard></CustomFormCard>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="px-0 fill-height" style="max-width: 95%;" v-else-if="company && company.company_type === 'false'">
        <v-row style="height: 100%;">
          <v-col cols="4" class="py-12">
            <v-card width="100%" height="100%">
              <v-img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" max-height="150px"></v-img>
              <v-row>
                <v-col cols="12" align="center">
                  <v-avatar size="100" class="text-center mx-auto mt-n16 rounded-circle elevation-5" color="white">
                    <v-img :src="location.imageUrl" v-if="location.imageUrl !== '{}'"></v-img>
                    <v-icon v-else size="60">person</v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="12" class="px-10">
                  <p class="text-center primary--text font-weight-bold text-h6">{{location.name}}</p>
                  <v-divider style="width: 90%" class="mx-auto mb-6"></v-divider>
                  <p class="text-center primary--text font-weight-bold">About</p>
                  <p>Address: {{ location.address }} {{ location.city }}, {{ location.state }} {{ location.zipcode }}</p>
                  <p>Founded: {{ location.year_founded }}</p>
                  <p>Joined SOWerk: {{ year_joined }}</p>
                  <v-divider style="width: 90%" class="mx-auto mb-6"></v-divider>
                  <p class="text-center primary--text font-weight-bold">Main Contact</p>
                  <p>Address: {{ location.contact_first_name }} {{ location.contact_last_name }}</p>
                  <p>Founded: {{ location.year_founded }}</p>
                  <p>Joined SOWerk: {{ year_joined }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="8" class="py-12 d-flex flex-column justify-space-between">


            <!--      Show Application is isApplying      -->
            <template v-if="isApplying">
              <v-card class="pa-6">
                <v-card-title class="mb-2">
                  <p class="mb-0 primary--text" v-if="currentApplication">{{ currentApplication.name }} Application</p>
                  <p class="mb-0 primary--text" v-else>Service Provider Application</p>
                </v-card-title>
                <v-card-subtitle>
                  <p class="mb-0 text-body-1">Application Facility: <span class="primary--text">{{ location.name }}</span></p>
                </v-card-subtitle>
                <v-card-text class="mt-8">
                  <v-form v-if="currentApplication" ref="applicationForm">
                    <template v-for="(formfield, index) in currentApplication.formfields">
                      <v-text-field
                        placeholder=" "
                        class="my-2"
                        :rules="rules.requiredRules"
                        v-model="formfield.value"
                        v-if="formfield.type ==='text'"
                        outlined
                      >
                        <template v-slot:label>
                          <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                        </template>
                      </v-text-field>
                      <v-checkbox
                        placeholder=" "
                        class="my-2"
                        :rules="rules.requiredRules"
                        v-model="formfield.value"
                        v-if="formfield.type ==='checkbox'"
                      >
                        <template v-slot:label>
                          <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                        </template>
                      </v-checkbox>
                      <v-select
                        placeholder=""
                        class="my-2"
                        :rules="rules.requiredRules"
                        v-model="formfield.value"
                        :items="formfield.options.split(', ')"
                        v-if="formfield.type ==='select'"
                        outlined
                      >
                        <template v-slot:label>
                          <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                        </template>
                      </v-select>
                    </template>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="cancelApply" color="primary" outlined class="px-8">Cancel</v-btn>
                  <v-btn @click="submit" color="primary" class="px-8">Submit</v-btn>
                </v-card-actions>
                <v-btn absolute top right text class="px-0 rounded-circle" min-width="32px" @click="cancelApply">x</v-btn>
              </v-card>
            </template>
            <!--      Else show other cards      -->
            <template v-else>
              <v-card>
                <v-card-title class="text-center mb-4">
                  <p class="text-center mx-auto mb-0 primary--text">Accepting Applications</p>
                </v-card-title>
                <v-card-subtitle>
                  <p class="mb-0 text-center" v-if="myActiveUserforms.length === 0">This business location is accepting applications for <span class="primary--text font-weight-bold">0</span> categories:</p>
                  <p class="mb-0 text-center" v-else>This business location is accepting applications for <span class="primary--text font-weight-bold">{{ myActiveUserforms.length }}</span> categories:</p>
                </v-card-subtitle>
                <v-card-text>
                  <v-data-table
                    :items="myActiveUserforms"
                    :headers="applicationHeaders"
                    hide-default-footer
                    hide-default-header
                  >
                    <template v-slot:item.actions="{ item }" class="text-right">
                      <div style="width: 100%;" class="d-flex justify-end">
                        <v-btn color="primary" @click="apply(item.id)">Apply</v-btn>
                      </div>
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-card>

            </template>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'
  import ProfileCard from "~/components/dashboard/ProfileCard";
  import ProfileEditCard from "~/components/dashboard/ProfileEditCard";
  import CustomFormCard from "~/components/dashboard/CustomFormCard";

  export default {
    name: 'business',
    layout: 'app',
    components: {
      HomeCard,
      FilterCard,
      ProfileCard,
      ProfileEditCard,
      CustomFormCard
    },
    data() {
      return {
        loading: false,
        locations: [
          {
            id: 1,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 2,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 3,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 4,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 5,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 6,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 7,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 8,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 9,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 10,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 11,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 12,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 13,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 14,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 15,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 16,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 17,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          }
        ],
        locationId: null,
        location: null,
        company: null,
        company_type: null,
        year_joined: '...',
        myActiveUserforms: [],
        applicationHeaders: [
          { text: '', value: 'name' },
          { text: '', value: 'actions', align: 'end' },
        ],
        isApplying: false,
        currentApplication: null,
        applicationLocationPropertyManager: null,
        rules: {
          requiredRules: [
            v => !!v || v === 0 || 'Field is required',
          ],
        },
        applicationFormData: {}
      }
    },
    watch: {
      loading: function() {
        if(this.loading){
          console.log(document);
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    mounted() {
      this.locationId = this.$route.params.id;
      this.getMyCompany();
      this.getLocation();
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getMyCompany() {
        this.loading = true;
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
          .then(response => {
            this.company = response.data;
            this.company_type = this.company.company_type;

            this.getLocation();

            // //  If Property Manager
            // if(this.company_type === 'true') {
            //   this.getLocation();
            // } else if(this.company_type === 'false') {
            //   console.log('hello');
            // }
          })
          .catch(err => {
            console.log('err company', err)
          })
      },
      async getLocation() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.locationId).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        console.log(data);
        this.$nextTick(function() {
          this.location = data;
          console.log(this.location, 'location value')
          this.year_joined = this.getYearFromCreated(this.location.created);
            this.getActiveUserforms(this.location);
            this.$http.get('https://www.sowerkbackend.com/api/auth/users/email/' + this.location.email)
            .then(response => {
              console.log(response.data, 'user for location!!!!!!!!')
              this.applicationFormData.pmuserprofiles_id = response.data.users[0].id
            })
            .catch(err => {
              console.log(err, 'err for user for location')
            })
        })
        this.loading = false;
      },
      getYearFromCreated(dateJoined) {
        let date = new Date(dateJoined);
        return date.getFullYear();
      },
      async getActiveUserforms(location) {
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/byLocationId/' + location.id)
          .then(response => {
            let activeUserforms = response.data;
            this.myActiveUserforms = [];
            activeUserforms.forEach(userform => {
              this.getWholeForm(userform.id);
            })
            console.log(response.data, 'activeuserforms!!!!!!!!!')
          })
          .catch(err => {
            console.log('err company', err)
          })
        console.log(this.myActiveUserforms, 'my active userforms!!!!!!');
      },
      async apply(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(response => {
            this.isApplying = true;
            console.log(response.data);
            if(!response.data.formfields) return;
            this.currentApplication = response.data;
            // this.getServiceForUserform(response.data);
          })
          .catch(err => {
            console.log('err company', err)
          })
      },
      cancelApply() {
        this.isApplying = false;
        this.currentApplication = null;
      },
      async submit() {
        if(!this.validate()) return;
        let currentApplication = this.currentApplication;
        console.log(currentApplication.formfields, 'HELLOOOOOO');
        let arrayString = JSON.stringify(currentApplication.formfields);
        console.log(arrayString);
        this.applicationFormData.pmuserforms_id = currentApplication.id;
        this.applicationFormData.pmlocations_id = this.location.id;
        this.applicationFormData.pmcompanies_id = this.location.companies_id;
        this.applicationFormData.spuserprofiles_id = this.currentUser.id;
        this.applicationFormData.splocations_id = this.company.locations[0].id;
        this.applicationFormData.spcompanies_id = this.company.id;
        this.applicationFormData.subData = arrayString;

        console.log(this.applicationFormData, 'applicationFormData!!!!');

        console.log(arrayString);

        await this.$http.post('https://www.sowerkbackend.com/api/applications/byUserformId/' + this.currentApplication.id, this.applicationFormData)
          .then(response => {
            console.log(response.data);
            this.$router.go();
          })
          .catch(err => {
            console.log('err company', err)
            alert('Error in submitting this application')
          })
      },
      // async submit() {
      //   let arrayString = JSON.stringify(this.formfields);
      //   this.application.userforms_id = this.form_id;
      //   this.application.userprofiles_id = this.currentUser.id;
      //   this.application.subData = arrayString;
      //   let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/applications/byUserformid/' + this.form_id, this.application).catch(e => e);
      // }
      // active: true
      // applications: Array(1)
      // formfields: Array(15)
      // id: 95
      // name: "Landscaping"
      // service_id: 85
      validate() {
        if (!this.$refs.applicationForm.validate()) {
          this.$nextTick(() => {
            this.$vuetify.goTo('.error--text');
          });
          return false;
        }
        return true;
      },
      async getWholeForm(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(response => {
            if(response.data.formfields[0] === 'There are no formfields') {
              return;
            } else {
              console.log(response.data, 'userforms response!!!!!!!!!!!!!!!!');
              this.myActiveUserforms.push(response.data);
            }
          })
          .catch(err => {
            console.log('err company', err)
          })
      }
      // async getServiceForUserform(userform) {
      //   await this.$http.get('https://www.sowerkbackend.com/api/services/' + userform.service_id)
      //     .then(response => {
      //       console.log(response.data);
      //       this.getPMLocationForService(response.data);
      //     })
      //     .catch(err => {
      //       console.log('err company', err)
      //     })
      // },
      // async getPMLocationForService(service) {
      //   await this.$http.get('https://www.sowerkbackend.com/api/services/' + service.locations_id)
      //     .then(response => {
      //
      //     })
      //     .catch(err => {
      //       console.log('err company', err)
      //     })
      // }
    }
  }
</script>

<style scoped>

</style>
