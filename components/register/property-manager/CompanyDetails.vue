<template>
  <v-tab-item
    eager
  >
    <v-container style="max-width: 80%;" mx-auto>
      <v-card-text class="pa-0">
        <v-form class="mx-auto">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-row fill-height class="pl-2">
                  <client-only>
                    <v-image-input
                      v-model="company.imgUrl"
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

              <v-col cols="12" md="6">
                <v-text-field
                  id="first_name"
                  label="First Name*"
                  type="text"
                  v-model="user.first_name"
                ></v-text-field>

                <v-text-field
                  id="last_name"
                  label="Last Name*"
                  type="text"
                  v-model="user.last_name"
                ></v-text-field>

                <v-text-field
                  label="Email Address*"
                  type="email"
                  class="card__input black--text"
                  v-model="user.email"
                ></v-text-field>

                <v-text-field
                  label="Phone*"
                  type="text"
                  class="card__input black--text"
                  v-model="user.phone"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  id="password"
                  label="Password*"
                  type="password"
                  v-model="user.password"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  id="confirm"
                  label="Confirm Password*"
                  type="password"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <h2 class="mt-8 mb-4">Company Information</h2>
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  id="company-name"
                  label="Account Name*"
                  type="text"
                  v-model="company.account_name"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  id="company-brand"
                  label="Brand Name*"
                  type="text"
                  v-model="company.brand_name"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  id="company-best"
                  label="What Best Describes You*"
                  :item-text="bestSelection.text"
                  :item-value="bestSelection.value"
                  :items="bestSelection"
                  v-model="company.bestDescription"></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  id="company-llc"
                  label="List your LLC Name (If Applicable)"
                  type="text"
                  v-model="company.llcName"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  id="company-email"
                  label="Company Email*"
                  type="text"
                  v-model="company.email"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  id="company-phone"
                  label="Company Phone*"
                  type="number"
                  v-model="company.phone"
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="v-input">
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <div class="v-text-field__slot" style="width: 100%;">
                      <label class="v-label theme--light form__label--address" style="left: 0px; right: auto; position: absolute;">Company Address*</label>
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
                  label="Company Description*"
                  v-model="company.description"
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
    animateAddressFieldOnFocus(e) {
      let addressLabel = e.target.previousElementSibling
      addressLabel.classList.toggle('v-label--focus')
    },
    animateAddressFieldOnFilled(e) {
      if (e.target != '') {
        if (
          e.target.previousElementSibling.classList.contains('v-label--filled')
        ) {
          return
        } else {
          e.target.previousElementSibling.classList.add('v-label--filled')
        }
      } else {
        e.target.previousElementSibling.classList.remove('v-label--filled')
      }
    },
  }
}
</script>

<style>
.form__address::v-deep input {
  border: 2px solid red !important;
  width: 600px;
}

.v-input__slot:before {
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: thin 0 0 0;
  bottom: -2px;
  content: '';
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
</style>
