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
export default {
  name: "CompanyDetails",
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  methods: {
    animateAddressFieldOnFilled(e) {
      if(e.target != "") {
        if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
          return;
        } else {
          e.target.previousElementSibling.classList.add('v-label--filled');
        }
      } else {
        e.target.previousElementSibling.classList.remove('v-label--filled');
      }
    },
  }

}
</script>

<style scoped>

</style>
