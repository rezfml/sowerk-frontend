<template>
  <v-form class="mx-auto">
    <v-container>
      <v-row>
        <v-col cols="12" lg="5" xl="4">
          <v-row fill-height class="pl-2">
            <client-only>
              <v-image-input
                v-model="image"
                image-quality="0.85"
                clearable
                image-format="png"
                uploadIcon="person"
                fullWidth
                overlayPadding="10px"
                scalingSliderColor="red"
                :readonly="false"
              />
            </client-only>
          </v-row>
        </v-col>

        <v-col cols="12" lg="7" xl="8">
          <v-text-field
            id="name"
            label="Company Name*"
            type="text"
            v-model="name"
            validate-on-blur
            :rules="rules.requiredRules"
          ></v-text-field>

          <v-text-field
            id="email"
            label="Email Address*"
            type="email"
            class="card__input black--text"
            v-model="email"
            validate-on-blur
            :rules="rules.emailRules"
          ></v-text-field>

          <v-text-field
            label="Phone Number*"
            type="number"
            class="card__input black--text"
            v-model="phone"
            validate-on-blur
            :rules="rules.phoneRules"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="Username*"
            type="text"
            v-model="username"
            validate-on-blur
            :rules="rules.usernameRules"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="password"
            label="Password*"
            type="password"
            v-model="password"
            validate-on-blur
            :rules="rules.passwordRules"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="confirm"
            label="Confirm Password*"
            type="password"
            v-model="confirm"
            :rules="rules.confirmRules"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <div class="v-input theme--light v-text-field v-text-field--is-booted">
            <div class="v-input__control">
              <div class="v-input__slot" style="width: 100%;">
                <label for="company_address" class="v-label theme--light form__label--address" style="left: 0px; right: auto; position: absolute;">Company Address*</label>
                <client-only>
                  <vue-google-autocomplete
                    id="company-address"
                    name="company_address"
                    classname="form-control"
                    v-on:placechanged="getAddressData"
                    placeholder=""
                    style="width: 100%;"
                    v-on:focus.native="animateAddressFieldOnFocus"
                    v-on:blur.native="animateAddressFieldOnFocus"
                    v-on:input.native="animateAddressFieldOnFilled"
                    validate-on-blur
                    :rules="rules.requiredRules"
                  >
                  </vue-google-autocomplete>
                </client-only>
              </div>
              <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="first_name"
            label="First Name*"
            type="text"
            v-on:change.native="formatFullName"
            validate-on-blur
            :rules="rules.requiredRules"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="last_name"
            label="Last Name*"
            type="text"
            v-model="lastName"
            v-on:change.native="formatFullName"
            validate-on-blur
            :rules="rules.requiredRules"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            id="description"
            label="Business Description*"
            v-model="description"
            validate-on-blur
            :rules="rules.requiredRules"
          ></v-textarea>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'

  import Vue from 'vue';

  export default {
    name: 'CompanyForm',
    props: {
    },
    components: {
      VImageInput
    },
    data() {
      return {
        image: null,
        name: null,
        email: null,
        phone: null,
        username: null,
        password: null,
        confirm: null,
        address: null,
        city: null,
        state: null,
        zipcode: null,
        firstName: null,
        lastName: null,
        description: null,
        fullAddress: null,
        focused: null,
        blurred: null,
        fullName: null,
        rules: {
          requiredRules: [
            v => !!v || v === 0 || 'Field is required',
          ],
          usernameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 100) || 'Name must be less than 100 characters'
          ],
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
            v => (v && v.length <= 100) || 'Email must be less than 100 characters'
          ],
          emailNotRequiredRules: [
            v => /.+@.+/.test(v) || v === "" || v === null || 'E-mail must be valid',
            v => (v && v.length <= 100) || v === "" || v === null || 'Email must be less than 100 characters'
          ],
          phoneRules: [
            v => !!v || 'Phone Number is required',
            v => (v && v.length === 10) || 'Phone Number must be 10 digits',
          ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => /[*@!?#%&()^~{}]+/.test(v) || 'Password must contain 1 special character',
            v => /[A-Z]+/.test(v) || 'Password must contain at least 1 Uppercase character',
            v => /[a-z]+/.test(v) || 'Password must contain at least 1 Lowercase character',
            v => /[0-9]+/.test(v) || 'Password must contain at least 1 Number ',
            v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            v => (v && v.length <= 255) || 'Password must be less than 255 characters'
          ],
          confirmRules: [
            v => v === this.password || 'Must match password',
            v => /[*@!?#%&()^~{}]+/.test(v) || 'Password must contain 1 special character',
          ],
          addressRules: [
            v => !!(this.form.address && this.form.city && this.form.state && this.form.zip) || 'Invalid Address'
          ],
        }
      }
    },
    methods: {
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
        this.address = addressData.street_number + ' ' + addressData.route;
        this.city = addressData.locality;
        this.state = addressData.administrative_area_level_1;
        this.zipcode = addressData.postal_code;
        this.formatFullAddress();
      },

      // This method formats the address components into a readable string for display purposes
      formatFullAddress() {
        this.fullAddress = this.address + ', ' + this.city + ', ' + this.state + ' ' + this.zipcode;
      },

      // This method formats the first and last name as a whole name for display purposes
      formatFullName() {
        this.fullName = this.firstName + ' ' + this.lastName;
      },
    },
  }
</script>

<style scoped>
  .form__address::v-deep input {
    border: 2px solid red!important;
    width: 600px;
  }

  .v-input__slot:before {
    border-color: rgba(0,0,0,0.42);
    border-style: solid;
    border-width: thin 0 0 0;
    bottom: -2px;
    content: "";
    left: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
  }

  .form-control {
    padding: 2px 0;
    position: relative;
    z-index: 3;
  }

  .v-label {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    top: 0
  }

  .v-label--focus {
    top: -1.5em;
    color: #a61c00;
    font-size: 0.75em;
  }

  .v-label--filled {
    top: -1.5em;
    font-size: 0.75em;
  }
</style>
