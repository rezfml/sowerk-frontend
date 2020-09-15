<template>
  <v-card class="white pt-0 mt-9">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px;border-radius: 3px;" class="primary body-2" ><v-icon>mdi-account</v-icon></v-card-title>
      <template v-if="location">
        <v-card-text class="py-0">
          <v-form>
            <v-row>

              <v-col cols="12" class="pb-0 mt-3">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Facility</v-subheader>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="Bass Pro Shops"
                  v-model="locationEdit.name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Facility Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" class="pt-0">
<!--                <v-text-field-->
<!--                  light-->
<!--                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"-->
<!--                  v-model="locationEdit.address"-->
<!--                >-->
<!--                  <template v-slot:label>-->
<!--                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Facility Address</p>-->
<!--                  </template>-->
<!--                </v-text-field>-->
                <div class="v-input theme--light v-text-field v-text-field--is-booted">
                  <div class="v-input__control">
                    <div class="v-input__slot" style="width: 100%;">
                      <label for="company_address" class="v-label theme--light form__label--address" style="left: 0px; right: auto; position: absolute;">Company Address*</label>
                      <client-only>
                        <vue-google-autocomplete
                          id="company-address"
                          classname="form-control"
                          v-on:placechanged="getAddressData"
                          placeholder=""
                          style="width: 100%;"
                          v-on:focus.native="animateAddressFieldOnFocus"
                          v-on:blur.native="animateAddressFieldOnFocus"
                          v-on:input.native="animateAddressFieldOnFilled"
                          validate-on-blur
                          v-model="fullAddress"
                        >
                        </vue-google-autocomplete>
                      </client-only>
                    </div>
                    <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder="1971"
                  v-model="locationEdit.year_founded"
                  type="number"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Facility Opened</p>
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
                    <p class="grey--text text--darken-4 font-weight-bold">Facility Description</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>

              <v-col cols="12" class="py-0 mt-0">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Facility Manager</v-subheader>
              </v-col>

              <v-col cols="12" md="6" class="pt-0">
                <v-text-field
                  label="First Name"
                  light
                  placeholder="John"
                  v-model="locationEdit.contact_first_name"
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
                  placeholder="Smith"
                  v-model="locationEdit.contact_last_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Last Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  light
                  placeholder="johnsmith@example.com"
                  v-model="locationEdit.email"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  light
                  placeholder="(123) 456-7890"
                  v-model="locationEdit.phone"
                ><template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                </template></v-text-field>
              </v-col>

<!--              <v-col cols="12" md="4" class="py-0">-->
<!--                <v-select-->
<!--                  light-->
<!--                  placeholder="Staff Account"-->
<!--                  v-model="location.admin_level"-->
<!--                ><template v-slot:label>-->
<!--                  <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Admin Level*</p>-->
<!--                </template></v-select>-->
<!--              </v-col>-->

            </v-row>

          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4">
          <v-btn color="primary" class="px-8" @click="updateLocation">Update Profile</v-btn>
        </v-card-actions>
      </template>
      <template v-else-if="company">
        <v-card-text class="py-0">
          <v-form>
            <v-row>

              <v-col cols="12" class="pb-0 mt-3">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Profile</v-subheader>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="Bass Pro Shops"
                  v-model="company.company_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"
                  v-model="fullAddress"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company HQ Address</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder="1971"
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
                  placeholder="BPS Direct, LLC is an American privately held…"
                  v-model="company.description"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Description</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>

              <v-col cols="12" class="py-0 mt-0">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Profile Contact</v-subheader>
              </v-col>

              <v-col cols="12" md="6" class="pt-0">
                <v-text-field
                  label="First Name"
                  light
                  placeholder="John"
                  v-model="company.first_name"
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
                  placeholder="Smith"
                  v-model="company.last_name"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Last Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  light
                  placeholder="johnsmith@example.com"
                  v-model="company.email"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  light
                  placeholder="(123) 456-7890"
                  v-model="company.phone"
                ><template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                </template></v-text-field>
              </v-col>

            </v-row>

          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4">
          <v-btn color="primary" class="px-8" @click="updateLocation()">Update Profile</v-btn>
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
      'company'
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
          year_founded: null
        }
      }
    },
    mounted() {
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
        this.formatFullAddress(this.locationEdit);
      } else if(this.company) {
        this.formatFullAddress(this.company);
      }
    },
    methods: {
      async updateLocation() {
        let {data, status} = await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/' + this.location.id, this.locationEdit).catch(e => e);

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
