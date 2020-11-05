<template>
  <v-tab-item
    eager
  >
   <!--    This is for the property company tab-->
    <v-container style="max-width: 80%;" mx-auto>
      <v-card-text class="pa-0">
        <v-form class="mx-auto register-form" ref="register">
          <v-container>
            <v-col cols="12">
              <h2 class="mt-8 mb-4">Your Information</h2>
              <v-divider></v-divider>
            </v-col>
            <v-row>
              <v-col cols="12" sm="5" md="6">
                <v-row fill-height class="pl-2 fill-height">
                  <v-col cols="12" class="d-flex flex-column justify-space-between align-center">
                    <v-img :src="companyImageUrl" :aspect-ratio="1" class="my-8 rounded-circle flex-grow-1" style="width: 100%; max-width: 300px;" v-if="companyImageUrl"></v-img>
                     <v-img :aspect-ratio="1" class="my-8 rounded-circle" v-else style="max-height: 300px; width: 100%; max-width: 300px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Icon-160.svg"></v-img>
                    <v-file-input class="company-image-upload ma-0 pa-0" :class="{'company-image-upload--selected' : companyImageFile}" v-model="companyImageFile" v-on:change.native="selectCompanyImage" id="companyImage" style="visibility: hidden; height: 0; max-height: 0;"></v-file-input>
                    <v-btn @click="clickCompanyImageUpload" color="primary" outlined rounded class="flex-grow-0 px-6">Account Photo</v-btn>
                  </v-col>
<!--                  <v-col cols="12" md="6" class="d-flex flex-column justify-center">-->
<!--                    <v-file-input class="company-image-upload ma-0 pa-0" :class="{'company-image-upload&#45;&#45;selected' : companyImageFile}" v-model="companyImageFile" v-on:change.native="selectCompanyImage" id="companyImage" style="visibility: hidden; height: 0; max-height: 0;"></v-file-input>-->
<!--                    <v-btn @click="clickCompanyImageUpload" color="primary" outlined rounded block class="flex-grow-0">Upload Logo</v-btn>-->
<!--                  </v-col>-->
                  <!--                            <v-file-input-->
                  <!--                              clearable-->
                  <!--                              full-width-->
                  <!--                              v-on:input.native="selectCompanyImage"-->
                  <!--                            />-->

                </v-row>
              </v-col>

              <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
                <v-text-field
                  id="first_name"
                  label="First Name*"
                  type="text"
                  v-model="user.first_name"
                  placeholder=" "
                  :rules="rules.requiredRules"
                ></v-text-field>

                <v-text-field
                  id="last_name"
                  label="Last Name*"
                  type="text"
                  v-model="user.last_name"
                  placeholder=" "
                  :rules="rules.requiredRules"
                ></v-text-field>

                <v-text-field
                  label="Email Address*"
                  type="email"
                  class="card__input black--text"
                  v-model="user.email"
                  placeholder=" "
                  :rules="rules.emailRules"
                ></v-text-field>

                <v-text-field
                  label="Phone*"
                  type="text"
                  class="card__input black--text"
                  v-model="user.phone"
                  placeholder=""
                  :rules="rules.phoneRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  id="password"
                  label="Password*"
                  type="password"
                  v-model="user.password"
                  placeholder=" "
                  :rules="rules.passwordRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  id="confirm"
                  label="Confirm Password*"
                  type="password"
                  placeholder=" "
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <h2 class="mt-8 mb-4">Company Information</h2>
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  id="company-best"
                  label="What Best Describes You*"
                  item-text="text"
                  item-value="value"
                  placeholder=" "
                  :items="bestSelection"
                  v-model="company.isFranchise"></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  id="company-name"
                  label="Account Name*"
                  type="text"
                  v-model="company.account_name"
                  placeholder="The name shown publicly to vendors and platform users"
                  :rules="rules.requiredRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" v-if="company.isFranchise === 1">
                <v-text-field
                  id="company-brand"
                  label="Brand Name*"
                  type="text"
                  v-model="company.brand_name"
                  placeholder=" "
                  :rules="rules.requiredRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" v-if="company.isFranchise === 1">
                <v-text-field
                  id="company-llc"
                  label="List your LLC Name (If Applicable)"
                  type="text"
                  v-model="company.llcName"
                  placeholder=" "
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="8">
                <v-text-field
                  id="company-website"
                  label="Company Website*"
                  type="url"
                  v-model="company.website"
                  placeholder=" "
                  :rules="rules.urlRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  id="company-founded"
                  label="Company Year Founded*"
                  type="number"
                  v-model="company.year_founded"
                  placeholder=" "
                >
                </v-text-field>
              </v-col>

<!--              <v-col cols="12" sm="6">-->
<!--                <v-text-field-->
<!--                  id="company-phone"-->
<!--                  label="Company Phone*"-->
<!--                  type="number"-->
<!--                  v-model="company.phone"-->
<!--                  placeholder=" "-->
<!--                  :rules="rules.phoneRules"-->
<!--                ></v-text-field>-->
<!--              </v-col>-->

              <v-col cols="12" class="v-input address">
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <div class="v-text-field__slot" style="width: 100%;">
                      <label><p class="grey--text text--darken-4 font-weight-bold mb-0" style="font-size: 15px">Company Address*</p></label>
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
                          v-model="fullAddress"
                        >
                        </vue-google-autocomplete>
                      </client-only>
                    </div>
                  </div>
                </div>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  id="company-description"
                  label="Company Profile Description*"
                  v-model="company.description"
                  placeholder="Provide SOWerk users and vendors text about your company's business, company history, and relationship with vendors."
                  :rules="rules.requiredRules"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-container>
  </v-tab-item>
</template>

<script>
import VImageInput from 'vuetify-image-input'
import * as VueGoogleMaps from '~/node_modules/gmap-vue'
import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'

export default {
  name: 'CompanyDetails',
  components: {
    VImageInput,
    GmapCluster,
    VueGoogleMaps
  },
  data() {
    return {
      companyImageUrl: null,
      companyImageFile: null,
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
          v => /.+@.[A-Z]+/.test(v) || 'E-mail must be valid',
          v => (v && v.length <= 100) || 'Email must be less than 100 characters'
        ],
        emailNotRequiredRules: [
          v => /.+@.+/.test(v) || 'E-mail must be valid',
          v => (v && v.length <= 100) || 'Email must be less than 100 characters'
        ],
        phoneRules: [
          v => (v && v.length === 10) || 'Phone Number must be 11 digits',
        ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => /[*@!?#%&()^~{}]+/.test(v) || 'Password must contain 1 special character',
            v => /[A-Z]+/.test(v) || 'Password must contain at least 1 Uppercase character',
            v => /[a-z]+/.test(v) || 'Password must contain at least 1 Lowercase character',
            v => /[0-9]+/.test(v) || 'Password must contain at least 1 Number ',
            v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            v => (v && v.length <= 255) || 'Password must be less than 255 characters'
          ]
          ,
          urlRules: [
            v => !!v || 'A website is required',
            v => /.+([A-Z0-9a-z]+)\.([a-z]+)+/.test(v) || 'A valid URL is required',/*[a-z]:\/\/www.*/
            v => (v && v.length >= 4) || 'URL must be at least 4 characters',
            v => (v && v.length <= 250) || 'URL must be less than 250 characters'
          ]
      },
      confirmPassword: null
    }
  },
  computed: {
    confirmPasswordRules() {
      return [
        () => (this.user.password === this.confirmPassword) || 'Password must match',
        v => !!v || 'Confirmation Password is required'
      ];
    }
  },
  props: {
    company: {
      type: Object,
      return: true,
    },
    user: {
      type: Object,
      return: true,
    },
    bestSelection: {
      type: Array,
      return: true,
    },
    fullAddress: {
      type: String,
      return: true,
    },
    getAddressData: {
      type: Function
    },
  },
  methods: {
    selectCompanyImage(e) {
      this.companyImageFile = e.target.files[0];
      console.log(this.companyImageFile);
      this.companyImageUrl = URL.createObjectURL(this.companyImageFile);
      console.log(this.companyImageUrl);
      this.$emit('selectFile', this.companyImageFile);
    },

    readFile(e) {
      this.selectedFile = e.target.files[0];

      this.url = URL.createObjectURL(this.selectedFile);
      console.log(this.url);

      this.$emit('selectFile', this.selectedFile, this.index);
    },
    clickCompanyImageUpload() {
      console.log(this);
      // let imageInput = this.$refs.companyImage;
      // console.log(imageInput);
      // imageInput.$el.click();
      document.getElementById('companyImage').click();
    },
    animateAddressFieldOnFocus(e) {
      let addressLabel = e.target.previousElementSibling
      addressLabel.classList.toggle('v-label--focus')
    },
    animateAddressFieldOnFilled(e) {
      if (e.target != '') {
        if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
          return
        } else {
          e.target.previousElementSibling.classList.add('v-label--filled')
        }
      } else {
        e.target.previousElementSibling.classList.remove('v-label--filled')
      }
    },
    validate() {
      if (!this.$refs.register.validate()) {
        this.$nextTick(() => {
          this.$vuetify.goTo('.error--text');
        });
        return false;
      }
      return true;
    },
  }
}
</script>

<style scoped>
.form__address::v-deep input {
  border: 2px solid red !important;
  width: 600px;
}

.form-control {
  padding: 2px 0;
  position: relative;
  z-index: 3;
}

.v-label {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  top: 0;
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

/* TRANSITIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.register-form >>> .v-label {
  color: black;
  font-weight: bold;
  font-size: 1.25em;
  top: 0;
}

.address .v-input__slot:before {
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

</style>