<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row>
        <v-col class="mt-16 d-flex flex-column align-center;" style="font-weight:bold;font-size:1.2rem">
          <p v-if="this.verification" >Thanks for verifying your invite status! You can now continue with registering below. To help speed things up, we have pre-filled some data points using the information provided to us when you were invited!</p>
          <p v-else >This confirmation link has expired or the user doesn't exist. Please click here to resend a confirmation email.</p>
        </v-col>
      </v-row>
      <template v-if="this.verification">
        <v-row
          align="center"
          justify="center"
          style="max-width: 1440px;"
          class="mx-auto py-12"
        >
          <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="50"
            ></v-progress-circular>
          </v-col>

          <v-col
            cols="12"
            class="pt-12 mt-12"
          >
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
                <span class="primary--text ml-2 py-6">Vendor Information</span>
              </v-card-title>
              
              <!-- NAVIGATION TABS -->
              <v-tabs
                v-model="tab"
                background-color="grey lighten-2"
                color="black"
                grow
                active-class="primary white--text elevation-10"
                hide-slider
                style="position: relative;"
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
                      <v-form class="mx-auto register-form">
                        <v-container>
                          <v-row>
                            
                            <v-col cols="12" sm="5" md="6">
                              <v-row fill-height class="pl-2 fill-height">
                                <v-col cols="12" md="6" class="d-flex justify-center align-center">
                                  <v-img :src="companyImageUrl" :aspect-ratio="1" class="my-8 rounded-circle" v-if="companyImageFile"></v-img>
                                  <v-icon v-else :size="100">person</v-icon>
                                </v-col>
                                <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
                                  <v-file-input 
                                    class="company-image-upload ma-0 pa-0" 
                                    :class="{'company-image-upload--selected' 
                                    :companyImageFile}" v-model="companyImageFile" 
                                    v-on:change.native="selectCompanyImage" 
                                    id="companyImage" 
                                    style="visibility: hidden; height: 0; max-height: 0;">
                                  </v-file-input>
                                  <v-btn 
                                    @click="clickCompanyImageUpload"
                                    color="primary"
                                    outlined
                                    rounded
                                    block
                                    class="flex-grow-0">Upload Logo</v-btn>
                                  <p class="text-center mb-0">Or</p>

                                  <v-checkbox class="mt-0">
                                    <template v-slot:label>
                                      <p class="mb-0 font-weight-medium" style="line-height: 1.3em;">Don't have a logo? Use Company Name</p>
                                    </template>
                                  </v-checkbox>
                                </v-col>
                                <!--                            <v-file-input-->
                                <!--                              clearable-->
                                <!--                              full-width-->
                                <!--                              v-on:input.native="selectCompanyImage"-->
                                <!--                            />-->

                              </v-row>
                            </v-col>

                            <!-- AUTOFILL FROM INVITE, READ ONLY -->
                            <v-col cols="12" sm="7" md="6">
                              <v-text-field
                                label="First Name (Your SOWerk Admin Account)*"
                                type="text"
                                placeholder=" "
                                v-model="user.first_name"
                                readonly
                              ></v-text-field>

                              <v-text-field
                                label="Last Name*"
                                type="text"
                                placeholder=" "
                                v-model="user.last_name"
                                readonly
                              ></v-text-field>

                              <v-text-field
                                label="Email Address*"
                                type="email"
                                placeholder=" "
                                class="card__input black--text"
                                v-model="user.email"
                                readonly
                              ></v-text-field>

                              <v-text-field
                                label="Phone*"
                                type="text"
                                placeholder=" "
                                class="card__input black--text"
                                v-model="user.phone"
                                readonly
                              ></v-text-field>
                            </v-col>

                            <!-- PASSWORD AND CONFIRM PASSWORD -->
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

                            <!-- START OF COMPANY DETAILS FORM -->
                            <v-col cols="12">
                              <p class="font-weight-bold text-h6">Company Details</p>
                            </v-col>

                            <!-- OWNER OR FRANCHISEE? -->
                            <v-col cols="12;">
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

                            <!-- ACCOUNT NAME = IF NOT FRANCHISE CONDITION -->
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

                            <!-- BRAND NAME = IF FRANCHISE CONDITION -->
                            <v-col cols="12" sm="6" v-if="company.isFranchise">
                              <v-text-field
                                id="brand-name"
                                label="Franchise Brand Name*"
                                type="text"
                                placeholder=" "
                                v-model="company.brand_name"
                                :rules="rules.requiredRules"
                                hint=" "
                                persistent-hint
                                class="py-4"
                              ></v-text-field>
                            </v-col>
                            
                            <!-- REGISTERED COMPANY LLC = IF FRANCHISE CONDITION -->
                            <v-col cols="12" sm="6" v-if="company.isFranchise">
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
                            <v-col cols="12" >
                              <div class="v-input__control" style="border-bottom: 1px solid black;">
                                <div class="v-input__slot">
                                  <div class="v-text-field__slot" style="width: 100%;">
                                    <label>
                                      <p class="grey--text text--darken-4 font-weight-bold mb-0" style="font-size: 15px">
                                        Address*
                                      </p>
                                    </label>
                                    <client-only>
                                      <vue-google-autocomplete
                                        id="company-address"
                                        classname="form-control"
                                        v-on:placechanged="getAddressData"
                                        placeholder=""
                                        style="width: 100%; font-size: 16px; padding: 2px 0"
                                        :rules="rules.requiredRules"
                                        v-on:focus.native="animateAddressFieldOnFocus"
                                        v-on:input.native="animateAddressFieldOnFilled"
                                        v-model="fullAddress"
                                        onfocus="this.setAttribute('autocomplete', 'new-password');"
                                      >
                                      </vue-google-autocomplete>
                                    </client-only>
                                  </div>
                                </div>
                              </div>
                            </v-col>

                            <!-- SERVICE OPTIONS -->
                            <v-col cols="12" md="6">
                              <v-select
                                :items="serviceOptions"
                                v-model="company.servicesOffered"
                                multiple
                                chips
                                label="What Services Do You Offer?"
                                placeholder=" "
                                :rules="rules.requiredRules"
                              ></v-select>
                            </v-col>

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

                            <!-- COMPANY WEBSITE -->
                            <v-col cols="12" sm="6">
                              <v-text-field
                                id="website"
                                label="Company Website*"
                                placeholder=" "
                                v-model="company.website"
                                :rules="rules.requiredRules"
                                ></v-text-field>
                            </v-col>

                            <!-- SERVICE OPTIONS -->
                            <v-col cols="12">
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
                              </template>
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
                            </v-col>

                          </v-row>
                        </v-container>
                      </v-form>
                    </v-card-text>
                  </v-container>
                </v-tab-item>

                <!-- LOCATION UPLOAD TAB -->
                <!-- <v-tab-item eager>
                  <v-container style="max-width: 80%;" mx-auto>
                    <v-card-text class="pa-0 pt-12">
                      <template v-if="editingLocation">
                        <span class="title font-weight-regular text-center my-12 grey--text text--darken-2">Now tell us about your first location</span>
                        <v-form class="mx-auto">
                          <v-container>
                            <LocationForm
                              :location="location"
                              :index="editingIndex"
                              :user="user"
                            />
                          </v-container>
                        </v-form>
                      </template>
                      <template v-else>
                        <v-data-table
                          :headers="headers"
                          :items="locations"
                          :items-per-page="10"
                        >
                          <template v-slot:item.id="{ item }">{{ locations.indexOf(item) + 1 }}</template>
                          <template v-slot:item.full_name="{ item }">{{ item.contact_first_name }} {{ item.contact_last_name }}</template>
                          <template v-slot:item.actions="{ item }">
                            <v-btn icon @click="editLocation(locations.indexOf(item))">
                              <v-icon
                                small
                                class="mr-2"
                              >
                                mdi-pencil
                              </v-icon>
                            </v-btn>
                            <v-icon
                              small
                              @click="deleteItem(item)"
                            >
                              mdi-delete
                            </v-icon>
                          </template>
                        </v-data-table>
                      </template>
                    </v-card-text>
                  </v-container>
                </v-tab-item> -->

                <!-- DOCUMENT UPLOAD TAB -->
                <v-tab-item eager>
                  <v-container style="max-width: 100%;" class="mx-auto mb-12">
                    <v-card-text class="pa-0">
                      <v-row>
                        <v-col cols="12">
                          <v-row>
                            <v-col cols="12">
                              <v-card-title class="justify-center headline font-weight-bold"><span class="primary--text ml-2 py-6 mr-2">Optional - </span> SOWerk highly encourages you to upload Company Documents</v-card-title>
                              <v-card-subtitle class="justify-center headline font-weight-bold text-center">Valid documents are important to a Property and Facility Manager when vetting service vendors.</v-card-subtitle>
                              <v-card-subtitle class="justify-center headline text-center text-body-1">*Note: These documents are not public and will only be included when you apply to be an approved vendor.</v-card-subtitle>
                              <div class="text-with-lines d-flex justify-center align-center mx-auto" style="width: 90%;">
                                <p class="primary--text text-h6 font-weight-bold text-center mb-0 px-6 white">Company Insurance</p>
                              </div>
                              <v-list>
                                <template v-for="(insurance, index) in insurances">
                                  <InsuranceForm :insurance="insurance" :backgroundColor="(index + 1) % 2 == 0 ? 'grey lighten-4' : 'white'" :key="index" v-on:selectFile="selectInsuranceFile" :index="index"></InsuranceForm>
                                </template>
                              </v-list>
                            </v-col>
                          </v-row>
                          <v-row justify="center" class="mt-6">
                            <v-btn color="primary" outlined @click="addInsurance">+ Add Another Document</v-btn>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-12 pt-12">
                        <v-col cols="12">
                          <v-row>
                            <v-col cols="12">
                              <div class="text-with-lines d-flex justify-center align-center mx-auto" style="width: 90%;">
                                <p class="primary--text text-h6 font-weight-bold text-center mb-0 px-6 white">Company Licenses</p>
                              </div>
                              <v-list>
                                <template v-for="(license, index) in licenses">
                                  <LicenseForm :license="license" :backgroundColor="(index + 1) % 2 == 0 ? 'grey lighten-4' : 'white'" :key="index" v-on:selectFile="selectLicenseFile" :index="index" :locations="locations"></LicenseForm>
                                </template>
                              </v-list>
                            </v-col>
                          </v-row>
                          <v-row justify="center" class="mt-6">
                            <v-btn color="primary" outlined @click="addLicense">+ Add Another License</v-btn>
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
                      <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Review Company Information</p>
                      <v-col cols="12" class="align-center text-center mx-auto">
                        <!--                  <v-img :src="company.image" max-height="300px" max-width="300px" aspect-ratio="1" v-if="company.image && company.image != ''"></v-img>-->
                        <v-icon color="grey" style="font-size: 100px; text-align: center" class="mx-auto">person</v-icon>
                        <p class="headline font-weight-bold">{{ company.company_name }}</p>
                      </v-col>

                      <v-col cols="12" style="max-width: 720px;" class="mx-auto d-flex flex-column align-center">
                        <v-form class="mx-auto">
                          <v-container>
                            <v-row>
                              <v-col cols="12" md="6">
                                <p class="grey--text text--darken-4 font-weight-bold mb-0">First Name*</p>
                                <v-text-field
                                  placeholder=" "
                                  readonly
                                  v-model="user.first_name"
                                >
                                </v-text-field>
                              </v-col>

                              <v-col cols="12" md="6">
                                <p class="grey--text text--darken-4 font-weight-bold mb-0">Last Name*</p>
                                <v-text-field
                                  placeholder=" "
                                  readonly
                                  v-model="user.last_name"
                                >
                                </v-text-field>
                              </v-col>

                              <v-col cols="12" md="6">
                                <p class="grey--text text--darken-4 font-weight-bold mb-0">Email*</p>
                                <v-text-field
                                  placeholder=" "
                                  readonly
                                  v-model="user.email"
                                >
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" md="6">
                                <p class="grey--text text--darken-4 font-weight-bold mb-0">Phone*</p>
                                <v-text-field
                                  placeholder=" "
                                  readonly
                                  v-model="user.phone"
                                >
                                </v-text-field>
                              </v-col>

                              <v-col cols="12">
                                <p class="grey--text text--darken-4 font-weight-bold mb-0">Corporate Address*</p>
                                <v-text-field
                                  v-model="fullAddress"
                                  placeholder=" "
                                  readonly
                                >
                                </v-text-field>
                              </v-col>

                              <v-col cols="12">
                                <p class="grey--text text--darken-4 font-weight-bold mb-0" style="font-size: 14px;">Corporate Description*</p>
                                <p class="mb-1" style="font-size: 16px; min-height: 48px;">{{ company.description ? company.description : '\n' }}</p>
                                <v-divider style="border-width: thin 0 0 0; border-color: rgba(0,0,0,0.5);"></v-divider>
                              </v-col>

                            </v-row>
                          </v-container>
                        </v-form>
                        <v-btn class="mx-auto mt-4" color="primary" outlined rounded @click="setPage(0)">Edit Information</v-btn>
                      </v-col>

                      <!--                <v-divider color="red" class="mt-8 mb-4"></v-divider>-->

                      <!--                <v-col cols="12" class="mt-2">-->
                      <!--                  <h2 class="mb-4 mx-auto font-weight-bold text-center">Review Company Locations</h2>-->
                      <!--                  <v-data-table-->
                      <!--                    :headers="headers"-->
                      <!--                    :items.sync="locations"-->
                      <!--                    :items-per-page="10"-->
                      <!--                  >-->
                      <!--                    <template v-slot:item.id="{ item }">{{ locations.indexOf(item) + 1 }}</template>-->
                      <!--                    <template v-slot:item.full_name="{ item }">{{ item.contact_first_name }} {{ item.contact_last_name }}</template>-->
                      <!--                  </v-data-table>-->
                      <!--                </v-col>-->

                      <!--                <v-col cols="12">-->
                      <!--                  <v-checkbox-->
                      <!--                    label="I agree to the Terms of Service"-->
                      <!--                    v-on:change="getTosDate"-->
                      <!--                  >-->
                      <!--                  </v-checkbox>-->
                      <!--                </v-col>-->

                    </v-card-text>
                  </v-container>
                </v-tab-item>
              </v-tabs-items>

              <!-- BOTTOM NAVIGATION BUTTONS -->
              <v-card-actions class="py-10 mx-auto" style="max-width: 80%;">
                <v-btn color="primary" class="px-8" text @click="prevPageIfNotFirst" v-show="tab !== 0 && !editingLocation"> < Back</v-btn>

                <v-spacer v-if="editingLocation || tab !== 1"></v-spacer>

                <v-btn color="primary" class="px-8" @click="nextPageIfNotLast" v-if="tab === 0 || tab === 1">Next > </v-btn>

                <v-btn color="primary" class="px-8" @click="register" v-if="tab === 2">Submit</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
      </template>
    </v-container>
  </v-app>
</template>

<script>
  import FormLocation from '~/components/FormLocation'
  import VImageInput from 'vuetify-image-input'
  import GmapCluster from 'gmap-vue/dist/components/cluster'
  import InsuranceForm from '~/components/InsuranceForm'
  import LicenseForm from '~/components/website/LicenseForm'
  import LocationForm from '~/components/register/provider/LocationForm'

  export default {
    name: 'inviteverify',
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
        show1: false,
        verificationId: null,
        verification: null,
        specialRegistration: null,
        loading: false,
        tab: 0,
        items: [
          'Company',
          'Documents',
          'Review'
        ],
        company: {
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
          website: null,
          llcName: ''
        },
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
          is_superuser: true,
          phone: '',
          companies_id: null
        },
        insurances: [
          {
            name: '',
            policyNumber: '',
            expirationDateVal: '',
            documentUrl: '',
            documentVisible: false,
            companies_id: null
          }
        ],
        insurance: {
          name: '',
          insuranceCompany: '',
          policyNumber: '',
          expirationDateVal: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        },
        insuranceFiles: [
          {
            file: null
          }
        ],
        licenses: [
          {
            type: '',
            licenseNumber: '',
            licenseLocation: '',
            expirationDate: '',
            documentUrl: '',
            documentVisible: false,
            companies_id: null
          }
        ],
        license: {
          type: '',
          licenseNumber: '',
          licenseLocation: '',
          expirationDate: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        },
        licenseFiles: [
          {
            file: null
          }
        ],
        companyImageFile: null,
        companyImageUrl: null,
        confirmPassword: null,
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
        // location: {
        //   name: null,
        //   address: null,
        //   city: null,
        //   state: null,
        //   zipcode: null,
        //   contact_first_name: null,
        //   contact_last_name: null,
        //   phone: null,
        //   email: null,
        //   latitude: null,
        //   longitude: null,
        //   radius: 0,
        //   year_founded: '',
        //   pfLogoCheckbox: false,
        //   imageUrl: null,
        //   companies_id: null
        // },
        formattedServicesProvided: [],
        editingIndex: 0,
        editingIndexInsurance: 0,
        editingIndexLicense: 0,
        imageUrlLocation: '',
        autocomplete: null,
        markers: [],
        editingLocation: true,
        editingInsurance: true,
        editingLicense: true,
        headers: [
          { text: 'Location Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Contact Name', value: 'full_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: '', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
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
        ],
        invitation: {},
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
      }
    },
    created() {
      console.log(this.$route.params.id);
      this.verificationId = this.$route.params.id;
      this.getVerification()
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
      async getVerification() {
        await this.$http.get('https://www.sowerkbackend.com/api/preapproved/uuid/' + this.verificationId)
        .then(response => {
          console.log(response, 'wow');
          if(response.data.invitation.length) {
            this.verification = true;
          }
          this.company.account_name = response.data.invitation[0].companyName;
          this.company.brand_name = response.data.invitation[0].companyName;
          this.company.servicesOffered.push(response.data.invitation[0].service);
          // this.company.phone = response.data.invitation[0].phone;
          // this.company.email = response.data.invitation[0].email;
          this.user.phone = response.data.invitation[0].phone;
          this.user.email = response.data.invitation[0].email;
          this.user.first_name = response.data.invitation[0].first_name;
          this.user.last_name = response.data.invitation[0].last_name;
          this.invitation = response.data.invitation[0];
          console.log(response.data.invitation, 'response.data', this);
        })
        .catch(err => {
          console.log(err, 'error in getting invitee based on this id')
        })
      },
      selectInsuranceFile(file, index) {
        this.insuranceFiles[index].file = file;
      },
      selectLicenseFile(file, index) {
        this.licenseFiles[index].file = file;
      },
      selectCompanyImage(e) {
        this.companyImageFile = e.target.files[0];
        console.log(this.companyImageFile, "company image file");
        this.companyImageUrl = URL.createObjectURL(this.companyImageFile);
        console.log(this.companyImageUrl, "company image URL");
      },
      clickCompanyImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyImage').click();
      },
      nextPageIfNotLast() {
        if(this.tab === 3) return;
        this.tab += 1;
        console.log(this.locations);
      },
      prevPageIfNotFirst() {
        if(this.tab === 0) return;
        this.tab -= 1;
      },
      setTab(tabIndex) {
        console.log(tabIndex)
      },
      finishEditing() {
        this.editingLocation = false;
        console.log(this.location);
        this.locations[this.editingIndex] = this.location;
        this.editingIndex = null;
      },
      finishEditingInsuranceLicense() {
        this.editingInsurance = false;
        this.editingLicense = false;
        this.insurances[this.editingIndexInsurance] = this.insurance;
        this.licenses[this.editingIndexLicense] = this.license;
        this.editingIndexInsurance = null;
        this.editingIndexInsurance = null;
      },
      editLocation(index) {
        console.log(index);
        this.editingIndex = index;
        this.location = this.locations[index];
        console.log(this.location);
        this.editingLocation = true;
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
        this.company.zipcode = addressData.postal_code;
        this.formatFullAddress();
      },
      formatFullAddress() {
        if(!this.company.address) return;
        this.fullAddress = this.company.address + ', ' + this.company.city + ', ' + this.company.state + ' ' + this.company.zipcode;
        console.log(this.fullAddress);
      },
      onRadiusSlide(value, index) {

      },
      animateAddressFieldOnFocus(e) {
        let addressLabel = e.target.previousElementSibling;
        addressLabel.classList.toggle('v-label--focus');
      },
      animateAddressFieldOnFilled(e) {
        if(e.target !== "") {
          if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
          } else {
            e.target.previousElementSibling.classList.add('v-label--filled');
          }
        } else {
          e.target.previousElementSibling.classList.remove('v-label--filled');
        }
      },
      convertMilesToMeters(miles) {
        return miles * 1609.34;
      },
      addLocation() {
        let newLocation = {
          name: null,
          address: null,
          city: null,
          state: null,
          zipcode: null,
          contact_first_name: null,
          contact_last_name: null,
          phone: null,
          email: null,
          latitude: null,
          longitude: null,
          radius: 0,
          year_founded: '',
          companies_id: null
        };
        this.locations.push(newLocation);
        this.location = this.locations[this.locations.length - 1];
        this.editingIndex = this.locations.length - 1;
        this.editingLocation = true;
      },
      addInsurance() {
        this.editingInsurance = true;
        let newInsurance = {
          name: '',
          insuranceCompany: '',
          policyNumber: '',
          expirationDateVal: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        };
        this.insurances.push(newInsurance);

        let newInsuranceFile = {
          file: null
        }

        this.insuranceFiles.push(newInsuranceFile);
      },
      addLicense() {
        this.editingLicense = true;
        let newLicense = {
          name: '',
          insuranceCompany: '',
          policyNumber: '',
          expirationDate: '',
          documentUrl: '',
          documentVisible: false,
          companies_id: null
        };
        this.licenses.push(newLicense);
      },
      saveCompanyAddress(addressObj) {
        this.company.address = addressObj.street_number + ' ' + addressObj.route;
        this.company.city = addressObj.locality;
        this.company.state = addressObj.administrative_area_level_1;
        this.company.zipcode = addressObj.postal_code;
      },
      async register() {
        this.loading = true;

        await this.uploadCompanyImage();
        this.loopInsuranceFilesForUpload();
        this.loopLicenseFilesForUpload();

        // await this.loopLocationImages();

        console.log(this.company, 'this.company');
        // console.log(this.locations, 'this.locations');
        this.company.servicesOffered = this.company.servicesOffered.join(", ")
        this.company.zipcode = Number(this.company.zipcode)
        this.company.year_founded = Number(this.company.year_founded)
        this.company.company_type = this.company.company_type.toString()

        console.log(this.company, "THIS DOT COMPANY")
        await this.$http.post('https://www.sowerkbackend.com/api/companies', this.company)
          .then(response => {
            console.log('register button post company:', response, "HEYYYYYYYYYYYYYYYYYYYYYY")
            console.log(response.data.companies.id)
            this.user.companies_id = response.data.companies.id;
            this.registerUser(response.data.companies.id);
            this.postLocationInsideRegister(response.data.companies.id)
            this.postLicenses(response.data.companies.id);
            this.postInsurances(response.data.companies.id);
            // this.postLocations(response.data.user.id);

            this.$router.push('/login');
          })
          .catch(err => {
            console.log('error in posting companies registering', err)
          })

        // await this.$http.post('/locations/byCompaniesId/:id')

        // await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form )
        //   .then(response => {
        //     console.log(response);
        //   })
      },
      async postLocationInsideRegister(companyId) {
        let newLocation = {
          companies_id: this.user.companies_id,
          name: this.company.account_name,
          email: this.user.email,
          address: this.company.address,
          state: this.company.state,
          city: this.company.zipcode,
          zipcode: this.company.zipcode,
          year_founded: this.company.year_founded,
          contact_first_name: this.user.first_name,
          contact_last_name: this.user.last_name,
          phone: this.user.phone,
          adminLevel: this.company.company_type,
          description: this.company.description
        }

        await this.$http.post('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + companyId, newLocation)
        .then(res => {
          console.log('success in posting location', res)
        })
        .catch(err => {
          console.log('error in posting company location after successful registration', err)
        })
      },
      async postLicenses(companyId) {
        for (const license of this.licenses) {
          license.companies_id = companyId;
          let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/license/byCompanyId/' + companyId, license).catch(e => e);
          console.log(data);
        }
      },
      async postInsurances(companyId) {
        for (const insurance of this.insurances) {
          insurance.companies_id = companyId;
          let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + companyId, insurance).catch(e => e);
          console.log(data);
        }
      },
      async uploadCompanyImage() {
      let formData = new FormData();
      let file = this.companyImageFile;
      console.log('this.companyImageFile: ', file)
      formData.append('file', file);
      console.log(formData);
      await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
        .then(response => {
          console.log('success in uploading company image', response)
          this.company.imgUrl = response.data.data.Location;
          console.log(this.company);
        })
        .catch(err => {
          console.log('error in uploading company image', err);
          return;
        })
      },
      loopInsuranceFilesForUpload() {
        this.insuranceFiles.forEach((insuranceFile, index) =>{
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
        this.licenseFiles.forEach((licenseFile, index) =>{
          this.uploadLicenseFile(licenseFile, index);
        })

      },
      async uploadLicenseFile(licenseFile, index) {
        let formData = new FormData();
        formData.append('file', licenseFile.file);
        await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log('successfully uploaded license file', response)
            this.licenses[index].documentUrl = response.data.data.Location;
            this.loading = false;
            console.log(this.licenses);
            return this.licenses;
          })
          .catch(err => {
            console.log(err, 'error in uploading license files')
          })
      },
      async registerUser(company_id) {
        this.user.companies_id = company_id;
        let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/auth/register', this.user)
        .catch(e => e);
        // await this.postLocations(data.user.companies_id);
        if(this.invitation.pre_approved === true) {
          await this.postConnectionTable(this.invitation.companies_id, data.user.companies_id);
          await this.postCompanyUptick(data.user.companies_id);
          await this.postCompanyUptick(this.invitation.companies_id);
        }
        await this.deleteInviteTable(this.invitation.id);
      },
      async postConnectionTable(PmId, SpId) {
        await this.$http.post('https://www.sowerkbackend.com/api/approvedproviderconnection', {
          propertymanager_id: PmId,
          serviceprovider_id: SpId
        })
          .then(response => {
            console.log(response, 'Success in adding connection table')
          })
          .catch(err => {
            console.log(err, 'error in adding connection table')
          })
      },
      async deleteInviteTable(id) {
        await this.$http.delete('https://www.sowerkbackend.com/api/preapproved/' + id)
          .then(response => {
            console.log('successfully deleteted invitee table', response);
          })
          .catch(err => {
            console.log('error in deleting invitee table', err);
          })
      },
      async postCompanyUptick(id) {
        const connection = {
          currentConnections: 0,
          maxConnections: 0
        }
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log('success in getting company', response)
            connection.currentConnections = response.data.currentConnections + 1;
            connection.maxConnections = response.data.maxConnections + 1;
          })
          .catch(err => {
            console.log('error in getting company', err);
          })
        await this.$http.put('https://www.sowerkbackend.com/api/companies/' + id, connection)
          .then(response => {
            console.log('successfully updated company #', id, response)
          })
          .catch(err => {
            console.log('error in updating company')
          })
      },
      async loopLocationImages() {
        this.locations.forEach((location, index) => {
          const formData = new FormData();
          console.log(location);
          formData.append('file', location.imageUrl);
          this.uploadLocationImage(formData, index);
        });
        console.log(this.locations);
      },
      async uploadLocationImage(formData, index) {
        let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log(response, 'success in uploading location image')
            console.log(response.data.Location);
            this.locations[index].imageUrl = response.data.data.Location;
          })
          .catch(err => {
            console.log('error in uploading location image', err)
          })
      },
      async postLocations(userId) {
        for(let i = 0; i < this.locations.length; i++) {
          this.locations[i].companies_id = userId;
          this.locations[i].zipcode = Number(this.locations[i].zipcode)
        }
        await this.$http.post('https://www.sowerkbackend.com/api/group-locations/byCompaniesId/' + userId, this.locations)
          .then(response => {
            console.log('success in posting group locations', response)
          })
          .catch(err => {
            console.log('error in posting group locations', err, this.locations)
          })
        // this.loading = false;
        // if (this.$error(status, message, errors)) return;
        await this.getUserLocations(userId);
      },
      async getUserLocations(userId) {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + userId).catch(e => e);
        console.log('get companys locations: ', data)
        await this.postServicesPerLocation(data.location);
      },
      async postServicesPerLocation(locations) {
        for (const location of locations) {
          for (const service of this.servicesProvided) {
            let serviceObject = {
              name: service,
              locations_id: location.id
            }
            let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + location.id, serviceObject).catch(e => e);
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
        await this.$router.push('/register/verify');
      },
      formatServices() {
        console.log(this.servicesProvided);
        this.servicesProvided.forEach((serviceProvided, index) => {
          let serviceObject = {
            name: serviceProvided,
            description: serviceProvided
          }

          this.formattedServicesProvided.push(serviceObject);
        });

        console.log(this.formattedServicesProvided);
      },
      // getTosDate(e) {
      //   if(e) {
      //     let today = new Date();
      //     let dateString;
      //     let timeString;
      //     let dd = String(today.getUTCDate()).padStart(2, '0');
      //     let mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
      //     let yyyy = today.getUTCFullYear();
      //     let HH = String(today.getUTCHours()).padStart(2, '0');
      //     let MM = String(today.getUTCMinutes()).padStart(2, '0');
      //     let SS = String(today.getUTCSeconds()).padStart(2, '0');
      //
      //     dateString = [yyyy, mm, dd].join('-');
      //     timeString = [HH, MM, SS].join(':');
      //     today = dateString + ' ' + timeString;
      //     // this.company.tos_date = today;
      //   }
      // },
      setPage(tab) {
        this.tab = tab;
      }
    }
  }
</script>

<style scoped>

</style>
