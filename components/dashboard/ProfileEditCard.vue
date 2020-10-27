<template>
  <v-card class="white pt-0 mt-9">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px;border-radius: 3px;" class="primary body-2" ><v-icon>mdi-account</v-icon></v-card-title>
      <template v-if="location">
        <v-card-text class="py-0">
          <v-form>
            <v-row>

              <v-col cols="12" class="pb-0 mt-3">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Property Details</v-subheader>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="Bass Pro Shops"
                  v-model="locationEdit.name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Property Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  light
                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"
                  v-model="locationEdit.address"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Property Address</p>
                  </template>
                </v-text-field>
<!--                  <template v-slot:label>-->
<!--                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Property Address</p>-->
<!--                  </template>-->
<!--                </v-text-field>-->
<!--                <div class="v-input theme&#45;&#45;light v-text-field v-text-field&#45;&#45;is-booted">-->
<!--                  <div class="v-input__control">-->
<!--                    <div class="v-input__slot" style="width: 100%;">-->
<!--                      <label for="company_address" class="v-label theme&#45;&#45;light form__label&#45;&#45;address" style="left: 0px; right: auto; position: absolute;">Company Address*</label>-->
<!--                      <client-only>-->
<!--                        <vue-google-autocomplete-->
<!--                          id="company-address"-->
<!--                          classname="form-control"-->
<!--                          v-on:placechanged="getAddressData"-->
<!--                          placeholder=""-->
<!--                          style="width: 100%;"-->
<!--                          v-on:focus.native="animateAddressFieldOnFocus"-->
<!--                          v-on:blur.native="animateAddressFieldOnFocus"-->
<!--                          v-on:input.native="animateAddressFieldOnFilled"-->
<!--                          validate-on-blur-->
<!--                          v-model="fullAddress"-->
<!--                        >-->
<!--                        </vue-google-autocomplete>-->
<!--                      </client-only>-->
<!--                    </div>-->
<!--                    <div class="v-text-field__details"><div class="v-messages theme&#45;&#45;light"><div class="v-messages__wrapper"></div></div></div>-->
<!--                  </div>-->
<!--                </div>-->
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  light
                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"
                  v-model="locationEdit.city"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Property City</p>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  light
                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"
                  v-model="locationEdit.state"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Property State</p>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="1">
                <v-text-field
                  light
                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"
                  v-model="locationEdit.zipcode"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Property Zipcode</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder="1971"
                  v-model="locationEdit.year_founded"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Property Opened</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="9" class="py-0">
                <v-text-field
                  light
                  placeholder="BPS Direct, LLC is an American privately held…"
                  v-model="locationEdit.description"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Property Description</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>

<!--            <v-row>-->

<!--              <v-col cols="12" class="py-0 mt-0">-->
<!--                <v-subheader class="px-0 headline font-weight-bold primary&#45;&#45;text" light>Edit Property Manager</v-subheader>-->
<!--              </v-col>-->

<!--              <v-col cols="12" md="6" class="pt-0">-->
<!--                <v-text-field-->
<!--                  label="First Name"-->
<!--                  light-->
<!--                  placeholder="John"-->
<!--                  v-model="locationEdit.contact_first_name"-->
<!--                >-->
<!--                  <template v-slot:label>-->
<!--                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">First Name</p>-->
<!--                  </template>-->
<!--                </v-text-field>-->
<!--              </v-col>-->

<!--              <v-col cols="12" md="6" class="pt-0">-->
<!--                <v-text-field-->
<!--                  label="Last Name"-->
<!--                  light-->
<!--                  placeholder="Smith"-->
<!--                  v-model="locationEdit.contact_last_name"-->
<!--                >-->
<!--                  <template v-slot:label>-->
<!--                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Last Name</p>-->
<!--                  </template>-->
<!--                </v-text-field>-->
<!--              </v-col>-->

<!--              <v-col cols="12" md="6" class="py-0">-->
<!--                <v-text-field-->
<!--                  light-->
<!--                  placeholder="johnsmith@example.com"-->
<!--                  v-model="locationEdit.email"-->
<!--                >-->
<!--                  <template v-slot:label>-->
<!--                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Email</p>-->
<!--                  </template>-->
<!--                </v-text-field>-->
<!--              </v-col>-->

<!--              <v-col cols="12" md="6" class="py-0">-->
<!--                <v-text-field-->
<!--                  light-->
<!--                  placeholder="(123) 456-7890"-->
<!--                  v-model="locationEdit.phone"-->
<!--                ><template v-slot:label>-->
<!--                  <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Phone</p>-->
<!--                </template></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col cols="12" md="6" class="py-0">-->
<!--                <v-select id="location-Admin"-->
<!--                          label="Admin Level"-->
<!--                          :items="adminLevels"-->
<!--                          v-model="location.adminLevel">-->

<!--                </v-select>-->
<!--              </v-col>-->

<!--&lt;!&ndash;              <v-col cols="12" md="4" class="py-0">&ndash;&gt;-->
<!--&lt;!&ndash;                <v-select&ndash;&gt;-->
<!--&lt;!&ndash;                  light&ndash;&gt;-->
<!--&lt;!&ndash;                  placeholder="Staff Account"&ndash;&gt;-->
<!--&lt;!&ndash;                  v-model="location.admin_level"&ndash;&gt;-->
<!--&lt;!&ndash;                ><template v-slot:label>&ndash;&gt;-->
<!--&lt;!&ndash;                  <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Admin Level*</p>&ndash;&gt;-->
<!--&lt;!&ndash;                </template></v-select>&ndash;&gt;-->
<!--&lt;!&ndash;              </v-col>&ndash;&gt;-->

<!--            </v-row>-->

          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4">
          <v-btn color="primary" class="px-8" @click="updateLocation()">Update Location Profile</v-btn>
        </v-card-actions>
      </template>
      <template v-else-if="company">
        <v-card-text class="py-0">
          <v-form>
            <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loadCompany != true">
              <v-progress-circular
                indeterminate
                color="primary"
                :size="50"
              ></v-progress-circular>
            </div>
            <v-row v-if="loadCompany">
              <v-col cols="12" class="pb-0 mt-3">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Profile</v-subheader>
              </v-col>

              <v-col cols="12" md="4" class="pt-0" v-if="company.isFranchise">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.account_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Account Name</p>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="12" class="pt-0" v-else>
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.account_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Account Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="4" class="pt-0" v-if="company.isFranchise">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.brand_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Brand Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="4" class="pt-0" v-if="company.isFranchise">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.llcName"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company LLC Name</p>
                  </template>
                </v-text-field>
              </v-col>

<!--              <v-col cols="12" class="pt-0">-->
<!--                <v-text-field-->
<!--                  light-->
<!--                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"-->
<!--                  v-model="fullAddress"-->
<!--                >-->
<!--                  <template v-slot:label>-->
<!--                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Company HQ Address</p>-->
<!--                  </template>-->
<!--                </v-text-field>-->
<!--              </v-col>-->

              <v-col cols="12" md="4" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.address"
                  clearable
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Address</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.city"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company City</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.state"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company State</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="2" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.zipcode"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Zipcode</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="12" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.website"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Website</p>
                  </template>
                </v-text-field>
              </v-col>

<!--              <v-col cols="12" md="6" class="py-0">-->
<!--                <v-text-field-->
<!--                  light-->
<!--                  placeholder=""-->
<!--                  v-model="company.phone"-->
<!--                ><template v-slot:label>-->
<!--                  <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Phone</p>-->
<!--                </template></v-text-field>-->
<!--              </v-col>-->

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.year_founded"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Founded</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="9" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="company.description"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Description</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>

            <v-row v-if="loadCompany">

              <v-col cols="12" class="py-0 mt-0">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Profile Current User</v-subheader>
              </v-col>

              <v-col cols="12" md="6" class="pt-0">
                <v-text-field
                  label="First Name"
                  light
                  placeholder=""
                  v-model="currentUserVal.first_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">First Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="pt-0">
                <v-text-field
                  label="Last Name"
                  light
                  placeholder=""
                  v-model="currentUserVal.last_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Last Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="currentUserVal.email"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  light
                  placeholder=""
                  v-model="currentUserVal.phone"
                ><template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                </template></v-text-field>
              </v-col>
            </v-row>

          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4">
          <v-btn v-if="location" color="primary" class="px-8" @click="updateLocation()">Update Location Profile</v-btn>
          <v-btn v-else color="primary" class="px-8" @click="updateCompany()">Update Company Profile</v-btn>
          <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loadUpdateCompany != true">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="20"
            ></v-progress-circular>
          </div>
        </v-card-actions>
      </template>
    </v-container>
  </v-card>
</template>

<script>
  import VImageInput from 'vuetify-image-input'

  export default {
    name: "ProfileEditCard",
    components: {
      VImageInput
    },
    props: [
      'location',
      'user',
      'adminLevels'
    ],
    data() {
      return {
        firstName: null,
        lastName: null,
        title: null,
        address: null,
        year: null,
        industry: null,
        website: null,
        email: null,
        phone: null,
        description: null,
        image: null,
        fullAddress: null,
        adminLevel: null,
        locationEdit: {
          name: null,
          address: null,
          state: null,
          city: null,
          zipcode: null,
          description: null,
          radius: null,
          longitude: null,
          latitude: null,
          contact_first_name: null,
          contact_last_name: null,
          phone: null,
          email: null,
          year_founded: null,
          adminLevel: null,
        },
        company: {},
        user: {},
        loadCompany: false,
        currentUserVal: {},
        loadUpdateCompany: true,
      }
    },
    async mounted() {
      if(this.location) {
        this.locationEdit.name = this.location.name;
        this.locationEdit.address = this.location.address;
        this.locationEdit.state = this.location.state;
        this.locationEdit.city = this.location.city;
        this.locationEdit.zipcode = this.location.zipcode;
        this.locationEdit.description = this.location.description;
        this.locationEdit.radius = this.location.radius;
        this.locationEdit.longitude = this.location.longitude;
        this.locationEdit.latitude = this.location.latitude;
        this.locationEdit.contact_first_name = this.location.contact_first_name;
        this.locationEdit.contact_last_name = this.location.contact_last_name;
        this.locationEdit.phone = this.location.phone;
        this.locationEdit.email = this.location.email;
        this.locationEdit.year_founded = this.location.year_founded;
        this.locationEdit.adminLevel = this.location.adminLevel;
        this.formatFullAddress(this.locationEdit);
      } else if(this.company) {
        await this.getCompany(this.user.companies_id);
        // this.formatFullAddress(this.company);
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getCompany(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company');
            this.getUser(this.currentUser.id);
            this.company = response.data;
            this.loadCompany = true;
          })
          .catch(err => {
            console.log('err company', err)
          })
      },
      async getUser(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/' + id)
          .then(response => {
            this.currentUserVal = response.data;
            console.log(response.data, 'user');
          })
          .catch(err => {
            console.log(err, 'err');
          })
      },
      async updateLocation() {
        await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/' + this.location.id, this.locationEdit)
          .then(response => {
            console.log(response, 'SUCCESS IN UPDATING LOCATION')
            this.$router.go();
          })
          .catch(err => {
            console.log(err, 'ERR IN UPDATING LOCATION')
          })

        // this.$nextTick(function() {
        //   this.locationEdit = data;
        // })
      },

      // Since vue-google-autocomplete is not a vuetify input field, we need this method to add a class to the address label to animate it on focus
      animateAddressFieldOnFocus(e) {
        let addressLabel = e.target.previousElementSibling;
        addressLabel.classList.toggle('v-label--focus');
      },

      // Since vue-google-autocomplete is not a vuetify-input-field, we need this method to add a class to the label when filled
      animateAddressFieldOnFilled(e) {
        // checks if e.target exists
        if(e.target != "") {
          // checks if targets previous element contains a class, if so quit function else add class to previous element
          if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
            return;
          } else {
            e.target.previousElementSibling.classList.add('v-label--filled');
          }
        } else {
          e.target.previousElementSibling.classList.remove('v-label--filled');
        }
      },

      // This method gets the necessary props from the address object returned by vue-google-autocomplete and saves to data
      getAddressData(addressData) {
        this.locationEdit.address = addressData.street_number + ' ' + addressData.route;
        this.locationEdit.city = addressData.locality;
        this.locationEdit.state = addressData.administrative_area_level_1;
        this.locationEdit.zipcode = addressData.postal_code;
        // this.formatFullAddress();
      },

      // This method formats the address components into a readable string for display purposes
      formatFullAddress(location) {
        this.fullAddress = location.address + ', ' + location.city + ', ' + location.state + ' ' + location.zipcode;
      },
      async updateCompany() {
        this.loadUpdateCompany = false;
        console.log(this.currentUserVal, 'currentUser', this.company, 'current Company');
        const userChanges = {
          first_name: this.currentUserVal.first_name,
          last_name: this.currentUserVal.last_name,
          email: this.currentUserVal.email,
          phone: this.currentUserVal.phone
        }
        const companyChanges = {
          account_name: this.company.account_name,
          brand_name: this.company.brand_name,
          llcName: this.company.llcName,
          address: this.company.address,
          city: this.company.city,
          state: this.company.state,
          zipcode: this.company.zipcode,
          website: this.company.website,
          year_founded: this.company.year_founded,
          description: this.company.description
        }
        await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/' + this.currentUserVal.id, userChanges)
          .then(response => {
            console.log(response, 'SUCCESS IN EDITING USER')
          })
          .catch(err => {
            console.log(err, 'ERROR IN EDITING USER')
          })
        await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + this.company.id, companyChanges)
          .then(response => {
            console.log(response, 'SUCCESS IN EDITING COMPANY')
            this.loadUpdateCompany = true;
            this.$router.go();
          })
          .catch(err => {
            console.log(err, 'ERROR IN EDITING COMPANY')
          })
      }
    }
  };
</script>

<style scoped>
  .v-label {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    top: -1.5em;
    font-size: 0.75em;
    color: #333!important;
    font-weight: bold;
  }
</style>
