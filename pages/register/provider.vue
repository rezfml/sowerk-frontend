 <template>
  <v-container
    style="max-width:none !important; width: 100%; background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/building-1080602.jpg') ; background-size: cover; background-position: center;"
  >
    <v-row
      align="center"
      justify="center"
      style="max-width: 1440px;"
      class="mx-auto py-12"
    >
      <v-col
        cols="12"
        style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;"
        v-if="loading"
      >
        <v-progress-circular
          indeterminate
          color="primary"
          :size="50"
        ></v-progress-circular>
      </v-col>

      <v-col cols="12" class="pt-12 mt-12">
        <v-card class="elevation-12 card--has-floating" light>
          <v-card-title
            class="justify-center headline font-weight-bold"
            xl-10
            lg-10
            md-10
            sm-10
            xs-10
            style=""
            ><img
              class="serviceProviderIcon"
              style="height:10vh; margin-right: 10px;"
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
              alt="service Provider Icon"
            />
            <span class="primary--text ml-2 py-6"
              >Vendor Information</span
            ></v-card-title
          >

          <v-tabs
            v-model="tab"
            background-color="grey lighten-2"
            color="black"
            grow
            active-class="primary white--text elevation-10"
            hide-slider
            style="position: relative;"
            :vertical="$vuetify.breakpoint.mobile"
          >
            <v-tab
              v-for="(item, index) in items"
              :key="index"
              style="opacity: 1!important;"
              v-on:click.native="setTab(index)"
            >
              {{ item }}
            </v-tab>
          </v-tabs>

          <!-- ALL 3 TABS OF COMPANY, DOCUMENTS, AND REVIEW -->
          <v-tabs-items
            v-model="tab"
            class="white"
            light
            eager
          >

            <!-- VENDOR INFORMATION TAB -->
            <v-tab-item eager>
              <v-container style="max-width: 80%;" mx-auto>
                <v-card-text class="pa-0">
                  <v-form class="mx-auto register-form" ref="companyDetails">
                    <v-container>
                      <v-row>

                        <!-- IMAGE SELECT AND UPLOAD -->
                        <v-col cols="12" sm="5" md="6" class="mb-12 px-12">
                          <v-row fill-height class="pl-2 fill-height">
                            <v-col
                              cols="12"
                              class="d-flex justify-center align-center px-12"
                            >
                              <v-img
                                :src="companyImageUrl"
                                :aspect-ratio="1"
                                class="my-8 rounded-circle"
                                style="max-height: 300px; width: 100%; max-width: 300px;"
                                v-if="companyImageFile"
                              ></v-img>
                              <!-- <v-icon v-else :size="100">person</v-icon> -->
                              <img
                                src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png"
                                alt="SoWerk rounded icon"
                                style="width: 90px"
                                v-if="this.companyImageFile === null"
                              />
                            </v-col>
                            <v-col
                              cols="12"
                              class="d-flex flex-column justify-center"
                            >
                              <v-file-input
                                class="company-image-upload ma-0 pa-0"
                                :class="{
                                  'company-image-upload--selected': companyImageFile
                                }"
                                v-model="companyImageFile"
                                v-on:change.native="selectCompanyImage"
                                id="companyImage"
                                style="visibility: hidden; height: 0; max-height: 0;"
                              ></v-file-input>
                              <v-btn
                                @click="clickCompanyImageUpload"
                                color="primary"
                                outlined
                                rounded
                                class="flex-grow-0"
                                >Upload Logo</v-btn
                              >
                              <p style="text-align:center;">Image will be cropped to circle, 400x400 pixels</p>
                              <!--                            <p class="text-center mb-0">Or</p>-->

                              <!--                            <v-checkbox class="mt-0">-->
                              <!--                              <template v-slot:label>-->
                              <!--                                <p class="mb-0 font-weight-medium" style="line-height: 1.3em;">Don't have a logo? Use Company Name</p>-->
                              <!--                              </template>-->
                              <!--                            </v-checkbox>-->
                            </v-col>
                            <!--                            <v-file-input-->
                            <!--                              clearable-->
                            <!--                              full-width-->
                            <!--                              v-on:input.native="selectCompanyImage"-->
                            <!--                            />-->
                          </v-row>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="7"
                          md="6"
                          class="d-flex flex-column justify-space-between"
                        >
                          <v-text-field
                            label="First Name (Your SOWerk Admin Account)*"
                            type="text"
                            placeholder=" "
                            v-model="user.first_name"
                            :rules="rules.requiredRules"
                            class="mb-6"
                          ></v-text-field>

                          <v-text-field
                            label="Last Name*"
                            type="text"
                            placeholder=" "
                            v-model="user.last_name"
                            :rules="rules.requiredRules"
                            class="mb-6"
                          ></v-text-field>

                          <v-text-field
                            label="Email Address*"
                            type="email"
                            placeholder=" "
                            class="card__input black--text mb-6"
                            v-model="user.email"
                            :rules="rules.emailRules"
                            validate-on-blur
                          ></v-text-field>

                          <v-text-field
                            label="Phone*"
                            type="tel"
                            class="card__input black--text"
                            v-model="user.phone"
                            placeholder=" "
                            :rules="rules.requiredRules"
                            v-mask="'(###) ###-####'"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Password*"
                            type="password"
                            placeholder=" "
                            v-model="user.password"
                            :rules="rules.passwordRules"
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Confirm Password*"
                            type="password"
                            placeholder=" "
                            v-model="confirmPassword"
                            :rules="confirmPasswordRules"
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <p class="font-weight-bold text-h6">
                            Company Details
                          </p>
                        </v-col>

                        <!-- OWNER OR FRANCHISEE? -->
                        <v-col cols="12">
                          <v-select
                            id="company-best"
                            label="What Best Describes You*"
                            placeholder=" "
                            item-text="text"
                            item-value="value"
                            :items="bestSelection"
                            v-model="company.isFranchise"
                          ></v-select>
                        </v-col>

                        <!-- ACCOUNT NAME -->
                        <v-col cols="12">
                          <v-text-field
                            id="account-name"
                            label="Account Name*"
                            placeholder=" "
                            v-model="company.account_name"
                            :rules="rules.requiredRules"
                            v-if="!company.isFranchise"
                          ></v-text-field>
                        </v-col>

                        <!-- BRAND NAME -->
                        <v-col cols="12" md="6">
                          <v-text-field
                            id="brand-name"
                            label="Franchise Brand Name*"
                            type="text"
                            placeholder=" "
                            v-model="company.brand_name"
                            :rules="rules.requiredRules"
                            v-if="company.isFranchise"
                            hint=" "
                            persistent-hint
                            class="py-4"
                          ></v-text-field>
                        </v-col>

                        <!-- REGISTERED COMPANY LLC -->
                        <v-col cols="12" md="6" v-if="company.isFranchise">
                          <v-text-field
                            id="company-llc"
                            label="Registered Company Name"
                            type="text"
                            placeholder=" "
                            v-model="company.llcName"
                            :rules="rules.requiredRules"
                            hint="Cannot be your Franchise Brand Name"
                            persistent-hint
                            class="py-4"
                          ></v-text-field>
                        </v-col>

                        <!-- ADDRESS - FILL FROM GOOGLE -->
                        <v-col cols="12">
                          <div class="v-input__control">
                            <div class="v-input__slot">
                              <div
                                class="v-text-field__slot"
                                style="width: 100%;"
                              >
                                <label
                                  ><p
                                    class="grey--text text--darken-4 font-weight-bold mb-0"
                                    style="font-size: 15px"
                                  >
                                    Address*
                                  </p></label
                                >
                                <client-only>
                                  <!--                                  <form autocomplete="off">-->
                                  <!--                                    <vue-google-autocomplete-->
                                  <!--                                      id="company-address"-->
                                  <!--                                      classname="form-control"-->
                                  <!--                                      v-on:placechanged="getAddressData"-->
                                  <!--                                      placeholder=""-->
                                  <!--                                      style="width: 100%; font-size: 16px; padding: 2px 0"-->
                                  <!--                                      v-on:focus.native="animateAddressFieldOnFocus"-->
                                  <!--                                      v-on:blur.native="animateAddressFieldOnFocus"-->
                                  <!--                                      v-on:input.native="animateAddressFieldOnFilled"-->
                                  <!--                                      v-model="fullAddress"-->
                                  <!--                                      :rules="rules.requiredRules"-->
                                  <!--                                      required-->
                                  <!--                                    >-->
                                  <!--                                      -->
                                  <!--                                    </vue-google-autocomplete>-->
                                  <vue-google-autocomplete
                                    id="company-address"
                                    classname="form-control"
                                    v-on:placechanged="getAddressData"
                                    placeholder=""
                                    style="width: 100%; font-size: 16px; padding: 2px 0"
                                    :rules="rules.requiredRules"
                                    v-on:focus="focusAddressField"
                                    v-on:input="focusAddressField"
                                    v-model="fullAddress"
                                    onfocus="this.setAttribute('autocomplete', 'new-password');"
                                  >
                                  </vue-google-autocomplete>
                                  <!--                                  </form>-->
                                </client-only>
                              </div>
                            </div>
                          </div>
                        </v-col>

                        <!-- SERVICE OPTIONS -->
                        <!-- <v-col cols="12" md="6">
                          <v-select
                            :items="serviceOptions"
                            v-model="company.servicesOffered"
                            multiple
                            chips
                            label="What Services Do You Offer?"
                            placeholder=" "
                            :rules="rules.requiredRules"
                          ></v-select> -->
                          <!-- <v-combobox
                            :items="serviceOptions"
                            v-model="company.servicesOffered"
                            multiple
                            chips
                            label="What Services Do You Offer? (Select or Add Your Specific Industry) "
                            placeholder=" "
                            :rules="rules.requiredRules"
                          ></v-combobox> -->
                        <!-- </v-col> -->

                        <!-- YEAR FOUNDED -->
                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Year Business Was Founded*"
                            type="text"
                            placeholder=" "
                            :rules="rules.requiredRules"
                            v-model="company.year_founded"
                          ></v-text-field>
                        </v-col>

                        <!-- DESCRIPTION -->
                        <v-col cols="12">
                          <v-textarea
                            id="description"
                            label="Describe Your Business* (A Short Sales Pitch Used In Your Profile)"
                            v-model="company.description"
                            placeholder=" "
                            :rules="rules.requiredRules"
                          ></v-textarea>
                        </v-col>

                        <!-- SERVICE OPTIONS -->
                        <!-- <v-col cols="12">
                          <p class="font-weight-bold text-h5">Services</p>
                          <v-divider class="mb-12"></v-divider>
                          <v-list>
                            <v-list-item v-for="(service, index) in servicesProvided"></v-list-item>
                          </v-list>
                          <v-select
                            :items="sectors"
                            label="First, select your sector."
                            placeholder=" "
                            item-text="title"
                            item-value="code"
                            @change="getSectorChildren"
                          ></v-select>
                          <template v-if="companySector">
                            <v-select
                              :items="industryLevel1"
                              placeholder=" "
                              item-text="title"
                              item-value="code"
                              v-model="companyLevel1"
                              @change="getLevel1Children"
                            ></v-select>
                          </template>
                          <template v-if="companyLevel1">
                            <v-select
                              :items="industryLevel2"
                              placeholder=" "
                              item-text="title"
                              item-value="code"
                              v-model="companyLevel2"
                              @change="getLevel2Children"
                            ></v-select>
                          </template> -->
                        <!--                          <template v-if="companyLevel2">-->
                        <!--                            <v-select-->
                        <!--                              :items="industryLevel3"-->
                        <!--                              placeholder=" "-->
                        <!--                              item-text="title"-->
                        <!--                              item-value="code"-->
                        <!--                              v-model="companyLevel3"-->
                        <!--                              @change="getLevel3Children"-->
                        <!--                            ></v-select>-->
                        <!--                          </template>-->
                        <!-- </v-col> -->

                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-container>
            </v-tab-item>

            <!-- VENDOR DOCUMENT UPLOAD TAB -->
            <v-tab-item eager>
              <v-container style="max-width: 100%;" class="mx-auto mb-12">
                <v-card-text class="pa-0">
                  <v-row>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="12">
                          <v-card-title
                            class="justify-center headline font-weight-bold"
                            ><span class="primary--text ml-2 py-6 mr-2"
                              >Optional -
                            </span>
                            SOWerk Highly Encourages You To Upload Company
                            Documents</v-card-title
                          >
                          <v-card-subtitle
                            class="justify-center headline font-weight-bold text-center"
                            >These optional documents are important to businesses on SOWerk as they evaluate Vendors.</v-card-subtitle
                          >
                          <v-card-subtitle
                            class="justify-center headline text-center text-body-1"
                            >*Note: These documents are not public and will only
                            be included when you apply to be an approved
                            vendor.</v-card-subtitle
                          >
                          <div
                            class="text-with-lines d-flex justify-center align-center mx-auto"
                            style="width: 90%;"
                          >
                            <p
                              class="primary--text text-h6 font-weight-bold text-center mb-0 px-6 white"
                            >
                              Company Insurance
                            </p>
                          </div>
                          <v-list>
                            <template v-for="(insurance, index) in insurances">
                              <InsuranceForm
                                :insurance="insurance"
                                :backgroundColor="
                                  (index + 1) % 2 == 0
                                    ? 'grey lighten-4'
                                    : 'white'
                                "
                                :key="index"
                                v-on:selectFile="selectInsuranceFile"
                                :index="index"
                              ></InsuranceForm>
                            </template>
                          </v-list>
                        </v-col>
                      </v-row>
                      <v-row justify="center" class="mt-6">
                        <v-btn color="primary" outlined @click="addInsurance"
                          >+ Add Another Document</v-btn
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row class="mt-12 pt-12">
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="12">
                          <div
                            class="text-with-lines d-flex justify-center align-center mx-auto"
                            style="width: 90%;"
                          >
                            <p
                              class="primary--text text-h6 font-weight-bold text-center mb-0 px-6 white"
                            >
                              Licenses & Certifications
                            </p>
                          </div>
                          <v-list>
                            <template v-for="(license, index) in licenses">
                              <LicenseForm
                                :license="license"
                                :backgroundColor="
                                  (index + 1) % 2 == 0
                                    ? 'grey lighten-4'
                                    : 'white'
                                "
                                :key="index"
                                v-on:selectFile="selectLicenseFile"
                                :index="index"
                                :locations="locations"
                              ></LicenseForm>
                            </template>
                          </v-list>
                        </v-col>
                      </v-row>
                      <v-row justify="center" class="mt-6">
                        <v-btn color="primary" outlined @click="addLicense"
                          >+ Add Another License</v-btn
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-container>
            </v-tab-item>

            <!-- REVIEW INFORMATION TAB - READ ONLY -->
            <v-tab-item eager>
              <v-container style="max-width: 80%;" mx-auto>
                <v-card-text class="pa-0">
                  <p
                    class="title font-weight-regular text-center my-12 grey--text text--darken-2"
                  >
                    Review Company Information
                  </p>
                  <v-col cols="12" class="align-center text-center mx-auto">
                    <!--                  <v-img :src="company.image" max-height="300px" max-width="300px" aspect-ratio="1" v-if="company.image && company.image != ''"></v-img>-->
                    <v-img
                      :src="companyImageUrl"
                      :aspect-ratio="1"
                      class="my-8 rounded-circle"
                      style="max-height: 200px; width: 100%; max-width: 200px; margin-left:40%"
                      v-if="companyImageFile"
                    ></v-img>
                    <v-icon
                      color="grey"
                      style="font-size: 100px; text-align: center"
                      class="mx-auto"
                      v-if="this.companyImageFile === null"
                      >person</v-icon
                    >
                    <p class="headline font-weight-bold">
                      {{ company.company_name }}
                    </p>
                  </v-col>

                  <v-col
                    cols="12"
                    style="max-width: 720px;"
                    class="mx-auto d-flex flex-column align-center"
                  >
                    <v-form class="mx-auto">
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="6">
                            <p
                              class="grey--text text--darken-4 font-weight-bold mb-0"
                            >
                              First Name*
                            </p>
                            <v-text-field
                              placeholder=" "
                              readonly
                              v-model="user.first_name"
                            >
                            </v-text-field>
                          </v-col>

                          <v-col cols="12" md="6">
                            <p
                              class="grey--text text--darken-4 font-weight-bold mb-0"
                            >
                              Last Name*
                            </p>
                            <v-text-field
                              placeholder=" "
                              readonly
                              v-model="user.last_name"
                            >
                            </v-text-field>
                          </v-col>

                          <v-col cols="12" md="6">
                            <p
                              class="grey--text text--darken-4 font-weight-bold mb-0"
                            >
                              Email*
                            </p>
                            <v-text-field
                              placeholder=" "
                              readonly
                              v-model="user.email"
                            >
                            </v-text-field>
                          </v-col>
                          <v-col cols="12" md="6">
                            <p
                              class="grey--text text--darken-4 font-weight-bold mb-0"
                            >
                              Phone*
                            </p>
                            <v-text-field
                              placeholder=" "
                              readonly
                              v-model="user.phone"
                            >
                            </v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <p
                              class="grey--text text--darken-4 font-weight-bold mb-0"
                            >
                              Account Address*
                            </p>
                            <v-text-field
                              v-model="fullAddress"
                              placeholder=" "
                              readonly
                            >
                            </v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <p
                              class="grey--text text--darken-4 font-weight-bold mb-0"
                              style="font-size: 14px;"
                            >
                              Account Description*
                            </p>
                            <p
                              class="mb-1"
                              style="font-size: 16px; min-height: 48px;"
                            >
                              {{
                                company.description ? company.description : '\n'
                              }}
                            </p>
                            <v-divider
                              style="border-width: thin 0 0 0; border-color: rgba(0,0,0,0.5);"
                            ></v-divider>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                    <v-btn
                      class="mx-auto mt-4"
                      color="primary"
                      outlined
                      rounded
                      @click="setPage(0)"
                      >Edit Information</v-btn
                    >
                  </v-col>

                </v-card-text>
              </v-container>
            </v-tab-item>

          </v-tabs-items>

          <!-- BOTTOM NAVIGATION BUTTONS -->
          <v-card-actions class="py-10 mx-auto d-flex " style="max-width: 80%;">
            <v-col xs="12" sm="12" class="bottomNav d-flex justify-end">
              <v-btn
                color="primary"
                class="px-8"
                text
                @click="prevPageIfNotFirst"
                v-show="tab !== 0"
              >
                < Back</v-btn
              >
              <v-spacer v-if="tab !== 1"></v-spacer>
              <v-btn
                color="primary"
                class="px-8 d-flex "
                @click="nextPageIfNotLast"
                v-if="tab === 0"
                >Next >
              </v-btn>
              <v-btn
                color="primary"
                class="px-8 d-flex justify-end"
                @click="nextPageIfNotLast"
                v-if="tab === 1"
                >Next >
              </v-btn>
              <v-checkbox
                v-model="userTerms"
                v-if="tab === 2"
              >
                <template v-slot:label>
                    <span style="font-weight:bold">You Agree to SOWerk <a target="_blank" href="https://www.sowerk.com/UserTerms" class="px-2" @click.stop>User Terms</a> & <a target="_blank" href="https://www.sowerk.com/CustomerTerms" class="mx-2" @click.stop>Customer Terms</a></span>
                </template>
              </v-checkbox>

              <v-btn
                color="gray"
                class="px-8"
                @click="needToCheckTermsBox"
                v-if="tab === 2 && userTerms !== true"
                >Submit</v-btn
              >

              <v-btn
                color="primary"
                class="px-8"
                @click="register"
                v-if="tab === 2 && userTerms === true"
                >Submit</v-btn
              >
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- FACEBOOK PIXEL CODE -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '296647381768376');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=296647381768376&ev=PageView&noscript=1"
    /></noscript>

  </v-container>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  // import * as VueGoogleMaps from '~/node_modules/gmap-vue'
  import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'


  import Vue from 'vue';
  import FormLocation from '~/components/FormLocation'
  import LocationForm from '@/components/register/provider/LocationForm'
  import InsuranceForm from '~/components/InsuranceForm'
  import LicenseForm from '@/components/website/LicenseForm'
  import { VueMaskDirective } from 'v-mask'
  Vue.directive('mask', VueMaskDirective);

  const naics = require("naics");

  // Vue.use(VueGoogleMaps, {
  //   load: {
  //     key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
  //   },
  //   installComponents: true
  // })

  export default {
    name: 'provider',
    layout: 'fullwidth',
    components: {
      FormLocation,
      VImageInput,
      GmapCluster,
      InsuranceForm,
      LicenseForm,
      LocationForm
    },
    data() {
      return {
        userTerms: false,
        show1: false,
        loading: false,
        tab: 0,
        items: [
          'Company',
          'Documents',
          'Review'
        ],
        company: {
          public_name: '',
          account_name: '',
          brand_name: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          description: '',
          year_founded: '',
          company_type: false,
          isFranchise: false,
          servicesOffered: [],
          imgUrl: null,
        },
        companySector: null,
        companyLevel1: null,
        companyLevel2: null,
        companyLevel3: null,
        confirmPassword: null,
        bestSelection: [
          {
            text: "- I own this brand",
            value: false
          },
          {
            text: "- I am a franchisee of this brand",
            value: true
          }
        ],
        user: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          is_superuser: false,
          phone: '',
          companies_id: null
        },
        insurances: [],
        insurance: {
          name: '',
          insuranceCompany: '',
          type: '',
          policyNumber: '',
          expirationDateVal: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        },
        insuranceFiles: [],
        licenses: [],
        license: {
          licenseNumber: '',
          licenseLocation: '',
          expirationDate: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        },
        licenseFiles: [],
        companyImageFile: null,
        companyImageUrl: null,
        options: {
          adminLevel: [
            {
              text: 'Super User',
              value: 'superuser',
            },
            {
              text: 'Staff Account',
              value: 'staff'
            }
          ]
        },
        servicesProvided: [],
        serviceOptions: [
          'HVAC',
          'Roofing',
          'General Contractor',
          'Plumbing',
          'Window/Glass Repair',
          'Electrician',
          'Landscaper',
          'Painting',
          'Paving',
          'Excavation',
          'Pest Control',
          'Waste Management',
          'Engineering',
          'Water Damage Repair'
        ],
        fullAddress: null,
        locations: [],
        formattedServicesProvided: [],
        editingIndex: 0,
        editingIndexInsurance: 0,
        editingIndexLicense: 0,
        imageUrlLocation: '',
        autocomplete: null,
        markers: [],
        editingInsurance: true,
        editingLicense: true,
        sectors: [],
        industryLevel1: [],
        industryLevel2: [],
        industryLevel3: [],
        industryLevel4: [],
        validateDetails: false,
        headers: [
          { text: 'Location Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Contact Name', value: 'full_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: '', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
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
            v => /.+@.+/.test(v) || 'E-mail must be valid',
            v => (v && v.length <= 100) || 'Email must be less than 100 characters'
          ],
          phoneRules: [
            (v) => (v && v.length === 10) || 'Phone Number must be 10 digits',
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
        },
        headerInsurance: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
          },
          { text: "Insurance Company", value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: "Policy Number", value: 'policyNumber', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Expiration Date', value: 'expirationDate', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
        ]
      }
    },
    mounted() {
      vueGoogleMapsInit();
      let codes = naics.Industry.sectors();
      for(const code of codes) {
        this.sectors.push(code);
      }

      // Add missing Manufacturing sector group
      let manufacturingSector = naics.Industry.from('31-33');
      this.sectors.splice(5, 0, manufacturingSector);

      // Add missing Retail Trade sector group
      let retailSector = naics.Industry.from('44-45');
      this.sectors.splice(7, 0, retailSector);

      // Add missing Transportation and Warehousing sector group
      let transportationSector = naics.Industry.from('48-49');
      this.sectors.splice(8, 0, transportationSector);
    },
    computed: {
      confirmPasswordRules() {
        return [
          () => (this.user.password === this.confirmPassword) || 'Password must match',
          v => !!v || 'Confirmation Password is required'
        ];
      }
    },
    methods: {
      needToCheckTermsBox() {
        alert("Please accept SOWerk Terms")
      },
      getSectorChildren(e) {
        console.log(e);
        if (this.companySector) {
          this.companySector = null;
          this.companyLevel1 = null;
          this.companyLevel2 = null;
          this.companyLevel3 = null;
        }
        this.industryLevel1 = [];
        this.industryLevel2 = [];
        this.companySector = e;
        let industry = naics.Industry.from(this.companySector);
        let categories = industry.children();
        for (const category of categories) {
          this.industryLevel1.push(category);
        }
      },
      getLevel1Children() {
        console.log(this.companyLevel1);
        let industry = naics.Industry.from(this.companyLevel1);
        let categories = industry.children();
        this.industryLevel2 = [];
        for (const category of categories) {
          this.industryLevel2.push(category);
        }
      },
      getLevel2Children() {
        console.log(this.companyLevel2);
        let industry = naics.Industry.from(this.companyLevel2);
        let categories = industry.children();
        this.industryLevel3 = [];
        for (const category of categories) {
          this.industryLevel3.push(category);
        }
      },
      focusAddressField() {
        console.log('focus');
      },
      selectInsuranceFile(file, index) {
        this.insuranceFiles[index] = file;
      },
      selectLicenseFile(file, index) {
        this.licenseFiles[index] = file;
      },
      selectCompanyImage(e) {
        this.companyImageFile = e.target.files[0];
        this.companyImageUrl = URL.createObjectURL(this.companyImageFile);
      },
      clickCompanyImageUpload() {
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyImage').click();
      },
      validate(tab) {
        if (tab == 0) {
          if (!this.$refs.companyDetails.validate()) {
            this.$nextTick(() => {
              this.$vuetify.goTo('.error--text');
            });
            return false;
          }
          return true;
        }
        return true;
      },
      nextPageIfNotLast() {
        console.log(this.tab);
        if (this.tab === 3) return;
        if (!this.validate(this.tab)) return;
        this.tab += 1
        console.log(this.locations)
      },
      prevPageIfNotFirst() {
        if (this.tab === 0) return;
        this.tab -= 1;
      },
      setTab(tabIndex) {
        console.log(tabIndex)
      },
      finishEditingInsuranceLicense() {
        this.editingInsurance = false;
        this.editingLicense = false;
        this.insurances[this.editingIndexInsurance] = this.insurance;
        this.licenses[this.editingIndexLicense] = this.license;
        this.editingIndexInsurance = null;
        this.editingIndexInsurance = null;
      },
      editInsurance(index) {
        console.log(index);
        this.editingIndexInsurance = index;
        this.insurance = this.insurances[index];
        console.log(this.insurance);
        this.editingInsurance = true;
      },
      getAddressData(addressData) {
        console.log(addressData);
        this.company.address = addressData.street_number + ' ' + addressData.route;
        this.company.city = addressData.locality;
        this.company.state = addressData.administrative_area_level_1;
        this.company.zipcode = Number(addressData.postal_code);
        this.formatFullAddress();
      },
      formatFullAddress() {
        if (!this.company.address) return;
        this.fullAddress = this.company.address + ', ' + this.company.city + ', ' + this.company.state + ' ' + this.company.zipcode.toString();
        console.log(this.fullAddress);
      },
      animateAddressFieldOnFocus(e) {
        let addressLabel = e.target.previousElementSibling
        addressLabel.classList.toggle('v-label--focus')
      },
      animateAddressFieldOnFilled(e) {
        if (e.target !== '') {
          if (
            e.target.previousElementSibling.classList.contains('v-label--filled')
          ) {
          } else {
            e.target.previousElementSibling.classList.add('v-label--filled')
          }
        } else {
          e.target.previousElementSibling.classList.remove('v-label--filled')
        }
      },
      convertMilesToMeters(miles) {
        return miles * 1609.34
      },
      addInsurance() {
        this.editingInsurance = true
        let newInsurance = {
          name: '',
          insuranceCompany: '',
          type: '',
          policyNumber: '',
          expirationDateVal: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        }
        this.insurances.push(newInsurance)

        let newInsuranceFile = {
          file: null,
        }

        this.insuranceFiles.push(newInsuranceFile)
      },
      addLicense() {
        this.editingLicense = true
        let newLicense = {
          licenseNumber: '',
          licenseLocation: '',
          expirationDate: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        }
        this.licenses.push(newLicense)

        let newLicenseFile = {
          file: null
        }

        this.licenseFiles.push(newLicenseFile);
      },
      saveCompanyAddress(addressObj) {
        this.company.address = addressObj.street_number + ' ' + addressObj.route
        this.company.city = addressObj.locality
        this.company.state = addressObj.administrative_area_level_1
        this.company.zipcode = addressObj.postal_code
      },
      async register() {
        this.loading = true

        this.company.servicesOffered = this.company.servicesOffered.join();
        await this.uploadCompanyImage()
        if (this.insuranceFiles.length > 0) {
          this.loopInsuranceFilesForUpload()
        }
        if (this.licenseFiles.length > 0) {
          this.loopLicenseFilesForUpload()
        }
        console.log(this.company, 'this.company');

        this.company.public_name = this.company.account_name.replace(/[^0-9a-z]/gi, '')

        this.company.zipcode = Number(this.company.zipcode)
        this.company.year_founded = Number(this.company.year_founded)
        this.company.company_type = this.company.company_type.toString()

        await this.$http.post('https://www.sowerkbackend.com/api/companies', this.company)
          .then(response => {
            console.log('post company:', response)

            this.user.companies_id = response.data.companies.id;
            this.registerUser(response.data.companies.id);

            this.postLocationInsideRegister()

            this.postLicenses(response.data.companies.id);
            this.postInsurances(response.data.companies.id);

            setTimeout(() => {
              this.$router.push('/register/verify')
            }, 4000)
          })
          .catch(err => {
            console.log('error in posting companies registering', err)
          })
      },
      async postLocationInsideRegister() {

        let admin = 0;

        if(this.user.is_superuser === true) {
          admin = 1
        } else if (this.user.is_superuser === false) {
          admin = 0
        }

        let locationPost = {
          name: this.company.account_name,
          email: this.user.email,
          address: this.company.address,
          state: this.company.state,
          city: this.company.city,
          zipcode: this.company.zipcode,
          year_founded: this.company.year_founded,
          radius: 0,
          longitude: this.long,
          latitude: this.lat,
          contact_first_name: this.user.first_name,
          contact_last_name: this.user.last_name,
          phone: this.user.phone,
          adminLevel: admin,
          pfLogoCheckbox: false,
          description: this.company.description,
          imageUrl: this.company.imgUrl,
        }

        console.log(locationPost, 'locationPost')

        await this.$http.post('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.user.companies_id, locationPost)
          .then(response => {
            console.log(response, 'location posted YAYYYYYYYYYYYYYYYYYYYYYY!')
            this.loading = false;
            this.successPopup = true;
            // setTimeout(() => {
            //   this.$router.push('/login');
            // }, 2000)
          })
          .catch(err => {
            console.log(err, 'err in posting location')
          })
      },
      async postLicenses(companyId) {
        for (const license of this.licenses) {
          license.companies_id = companyId;
          let { data, status } = await this.$http.post('https://www.sowerkbackend.com/api/license/byCompanyId/' + companyId, license).catch(e => e);
          console.log(data);
        }
      },
      async postInsurances(companyId) {
        for (const insurance of this.insurances) {
          insurance.companies_id = companyId;
          insurance.policyNumber = insurance.policyNumber.toString()
          console.log(insurance, "test ggggggggggggg")
          let { data, status } = await this.$http.post('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + companyId, insurance).catch(e => e);
          console.log(data);
        }
      },
      async uploadCompanyImage() {
        const formData = new FormData();
        formData.append('file', this.companyImageFile);
        await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log('success in uploading company image', response)
            this.company.imgUrl = response.data.data.Location;
          })
          .catch(err => {
            console.log('error in uploading company image', err);
          })
      },
      loopInsuranceFilesForUpload() {
        this.insuranceFiles.forEach((insuranceFile, index) => {
          this.uploadInsuranceFile(insuranceFile, index);
        })
      },
      async uploadInsuranceFile(insuranceFile, index) {
        let formData = new FormData();
        formData.append('file', insuranceFile.file);
        await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log('success in uploading insurance file', response)
            this.insurances[index].documentUrl = response.data.data.Location;
            this.loading = false;
            console.log(this.insurances);
            return this.insurances;
          })
          .catch(err => {
            console.log('error in uploading insurance file', err);
          })
      },
      loopLicenseFilesForUpload() {
        this.licenseFiles.forEach((licenseFile, index) => {
          this.uploadLicenseFile(licenseFile, index);
        })
      },
      async uploadLicenseFile(licenseFile, index) {
        let formData = new FormData();
        formData.append('file', licenseFile.file);
        await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log('success in uploading license file', response)
            this.licenses[index].documentUrl = response.data.data.Location;
            this.loading = false;
            console.log(this.licenses);
            return this.licenses;
          })
          .catch(err => {
            console.log('error in uploading license file', err);
          })
      },
      async registerUser(company_id) {
        this.user.companies_id = company_id
        this.user.email = this.user.email.toLowerCase()
        let { data, status } = await this.$http
          .post('https://www.sowerkbackend.com/api/auth/register', this.user)
          .catch((e) => e)
      },
      async getUserLocations(userId) {
        let { data, status } = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + userId).catch(e => e);
        console.log('get companys locations: ', data)
        await this.postServicesPerLocation(data);
      },
      async postServicesPerLocation(locations) {
        for (const location of locations) {
          for (const service of this.servicesProvided) {
            let serviceObject = {
              name: service,
            }
            let { data, status } = await this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + location.id, serviceObject).catch(e => e);
            console.log(data);
          }
          let { data, status } = await this.$http
            .post(
              'https://www.sowerkbackend.com/api/services/byLocationId/' +
              location.id,
              serviceObject
            )
            .catch((e) => e)
          console.log(data)
        }
        this.loading = false;
        await this.$router.push('/register/verify')
      },
      formatServices() {
        console.log(this.servicesProvided)
        this.servicesProvided.forEach((serviceProvided, index) => {
          let serviceObject = {
            name: serviceProvided,
            description: serviceProvided,
          }

          this.formattedServicesProvided.push(serviceObject)
        })

        console.log(this.formattedServicesProvided)
      },
      setPage(tab) {
        this.tab = tab;
      },
    }
}
</script>

<style scoped>
/*.company-image-upload {*/
/*  height: 100vh;*/
/*  max-height: 300px;*/
/*  width: 100%;*/
/*}*/

/*.company-image-upload >>> .v-input__control {*/
/*  height: 100%;*/
/*  position: relative;*/
/*}*/

/*.company-image-upload >>> .v-input__control:before {*/
/*  position: absolute;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  content: '+';*/
/*  font-weight: bold;*/
/*  color: white;*/
/*  font-size: 100px;*/
/*  z-index: 1;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  pointer-events: none;*/
/*}*/

/*.company-image-upload--selected >>> .v-input__control:before {*/
/*  content: '';*/
/*}*/

/*.company-image-upload--selected >>> .v-input__icon.v-input__icon--clear {*/
/*  z-index: 10;*/
/*  background-color: white;*/
/*  border-radius: 0!important;*/
/*}*/

/*.company-image-upload >>> .v-input__append-inner {*/
/*  margin-top: 0!important;*/
/*}*/

/*.company-image-upload >>> .v-input__icon.v-input__icon--clear > button {*/
/*  color: #333;*/

/*}*/

/*.company-image-upload >>> .v-input__slot {*/
/*  height: 100%;*/
/*  background-color: transparent;*/
/*  border-radius: 10px;*/
/*  border: 2px dotted grey;*/
/*}*/

/*.company-image-upload >>> .v-input__slot:hover {*/
/*  cursor: pointer;*/
/*}*/

/*.company-image-upload >>> .v-input__prepend-outer {*/
/*  display: none;*/
/*}*/

/*.company-image-upload >>> .v-input__slot:before {*/
/*  height: 100%;*/
/*  border-width: 0;*/
/*}*/

/*.company-image-upload >>> .v-text-field__slot {*/
/*  height: 100%;*/
/*  width: 100%;*/
/*}*/

/*.company-image-upload >>> .v-input__slot:after {*/
/*  display: none;*/
/*}*/

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

.text-with-lines {
  position: relative;
  width: 100%;
}

.text-with-lines p {
  position: relative;
  z-index: 1;
}

.text-with-lines:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  top: calc(50%);
  left: 0;
  background-color: #a61c00;
}

.register-form >>> .v-label {
  color: black;
  font-weight: bold;
  font-size: 1.25em;
  top: 0;
}
/*.serviceProviderIcon{*/
/*  width:10%;*/
/*  top:-20px;*/
/*}*/
@media (max-width: 790px) {
  .saveBtn {
    margin-left: 0 !important;
    margin-top: 1%;
    margin-bottom: 1%;
  }
  /*.serviceProviderIcon{*/
  /*  width:15%;*/
  /*  top:-20px;*/
  /*}*/
}
@media (max-width: 680px) {
  /*.serviceProviderIcon{*/
  /*  width:20% !important;*/
  /*  top:-40px;*/
  /*  margin-bottom:-50px;*/
  /*  margin-top: 50px;*/
  /*  margin-left: 7%;*/
  /*}*/
}
</style>
