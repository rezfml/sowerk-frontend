<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>
    <template v-if="loading">
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
      <v-row style="width: 95%; margin-left: 2.5%;">
        <v-col cols="4" class="">
          <v-card light class="d-flex flex-column mt-16">
            <v-avatar size="100" class="text-center mx-auto mt-4 rounded-circle elevation-5" color="white">
              <v-img v-if="location.imageUrl !== ''" :src="location.imageUrl" ></v-img>
              <v-img v-else-if="company.imgUrl !== ''" :src="company.imgUrl" ></v-img>
              <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" ></v-img>
            </v-avatar>
            <v-card-text class="mx-auto text-center primary--text mb-0" style="color:#A61C00; font-size: 24px; text-align: center; word-break: break-word; white-space: pre-wrap;">{{ location.name }}</v-card-text>
            <v-card-text v-if="this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl" style="font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
            <v-card-text v-else style="font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.address}}<br/> {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
            <v-card-text style=" font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.description}}</v-card-text>
            <v-row class="d-flex justify-center" style="width: 100%;">
              <v-card-text class="mx-auto text-center" style="width: 50%; font-size: 16px !important; text-align: center; word-break: break-word; white-space: pre-wrap">Founded: <span style="color: #A61C00">{{location.year_founded}}</span></v-card-text>
              <v-card-text class="mx-auto text-center" style="width: 50%; font-size: 16px !important; text-align: center; word-break: break-word; white-space: pre-wrap">Joined SOWerk: <span style="color: #A61C00">{{location.created.slice(0,10)}}</span></v-card-text>
            </v-row>
            <v-select
              style="text-align: center;"
              readonly
              :items="vendorTypes"
              v-model="vendorTypes"
              label="Type"
              item-text="vendorType"
              item-value="vendorType"
              multiple
              outlined
              chips
              v-if="vendorTypes.length > 0"
            ></v-select>
            <v-card-text style=" font-size: 18px; text-align: center;" v-if="vendorTypes.length === 0">There are no types for this channel</v-card-text>
            <v-select
              style="text-align: center;"
              readonly
              chips
              :items="location.services"
              v-model="location.services"
              item-text="name"
              item-value="name"
              label="Category"
              v-if="location.services[0] !== 'There are no services'"
              multiple
              outlined
            ></v-select>
            <v-card-text style=" font-size: 18px; text-align: center;" v-if="location.services[0] === 'There are no services'">There are no categories for this channel</v-card-text>
            <v-select
              style="text-align: center;"
              readonly
              :items="location.locationtags"
              v-model="location.locationtags"
              label="Tags"
              chips
              item-text="name"
              item-value="name"
              multiple
              outlined
              v-if="location.locationtags[0] !== 'There are no location tags'"
            ></v-select>
            <v-card-text style="text-align: center; font-size: 18px;" v-if="location.locationtags[0] === 'There are no location tags'">There are no location tags for this channel</v-card-text>
            <v-card-text style="text-align: center; font-size: 48px; color: #A61C00; word-break: break-word; white-space: pre-wrap; line-height: 1.2em;">{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
            <v-card-text style="text-align: center; font-size: 18px;"><v-icon class="" style="color: #A61C00">phone</v-icon>{{location.phone}}</v-card-text>
            <v-card-text style="text-align: center; font-size: 18px;"><v-icon class="" style="color: #A61C00">mail</v-icon>{{location.email}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8" class="d-flex flex-column justify-space-between">
          <v-card class="flex-column d-flex mt-16">
            <v-btn @click="generateReport" style="position: absolute; top: 10px; right: 10px;" outlined color="primary" rounded md>Download Application</v-btn>
            <div class="d-flex justify-center align-center" style="background: #A61C00; width: 5%; height: 50px; position: absolute; left: 10px; top: -20px;">
              <v-icon color="white">mdi-account</v-icon>
            </div>
            <v-row style="width: 95%;" class="mt-8 mx-auto">
              <v-col cols="6">
                <v-card-text style="width: 100%; font-size: 14px;">Application Name: <span style="color: #A61C00;">{{ userform.name }}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">Associated Channel: <span style="color: #A61C00;">{{ location.name }}</span></v-card-text>
              </v-col>
              <v-col cols="6">
                <v-card-text style="width: 100%; font-size: 14px;">Applicant Name: <span style="color: #A61C00;">{{company.account_name}}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">
                  Applicant Channel:
                  <v-autocomplete
                    return-object
                    :items="userLocations"
                    v-model="chosenLocation"
                    outlined
                    item-text="name"
                    label="Choose your channel associated with application"
                    clearable
                    class="mt-1"
                  >
                  </v-autocomplete>
                </v-card-text>
              </v-col>
              <v-form v-if="userform" ref="applicationForm" style="width: 100%;">
                <v-col cols="12" v-for="(formfield, index) in userform.formfields" style="margin: auto;">
                <!-- VENDOR'S NAME 1 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="vendorName"
                  v-if="formfield.name === 'Vendor Name' "
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- VENDOR'S TYPE 2 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="vendorType"
                  v-if="formfield.name === 'Vendor Type'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- VENDOR CATEGORY 3 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="vendorCategory"
                  v-if="formfield.name === 'Vendor Category'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- VENDORS ADDRESS OF APPLICATION 4 -->
                <!-- <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="vendorName"
                  v-if="formfield.name === 'Vendor Name'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field> -->

                <!-- COMPANY FOUNDED 5 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="companyFounded"
                  v-if="formfield.name === 'Company Founded'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- CONTACT PERSON PHONE 6 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="contactPersonPhone"
                  v-if="formfield.name === 'Contact Person Phone'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- CONTACT PERSON EMAIL 7 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="contactPersonEmail"
                  v-if="formfield.name === 'Contact Person Email'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- CONTACT PERSON NAME 8 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="contactPersonName"
                  v-if="formfield.name === 'Contact Person Name'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- CONTACT WEBSITE 9 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="contactWebsite"
                  v-if="formfield.name === 'Company Website'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- NUMBER OF EMPLOYEES 10 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="numberOfEmployees"
                  v-if="formfield.name === 'Number of Employees'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- SOWERK CONNECTIONS 11 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="sowerkConnections"
                  v-if="formfield.name === 'SOWerk Connections'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- APPLICANTS SERVICE RANGE 12 -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  :value="applicantServiceRange"
                  v-if="formfield.name === 'Applicants Service Radius'"
                  outlined >
                  <template v-slot:label>
                    <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                  </template>
                </v-text-field>

                <!-- START OF CUSTOM FORM FIELDS -->
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :rules="rules.requiredRules"
                  v-model="formfield.value"
                  v-if="formfield.type === 'text' && formfield.name !== 'Vendor Name' && formfield.name !== 'Vendor Type' && formfield.name !== 'Vendor Category' && formfield.name !== 'Company Founded' && formfield.name !== 'Contact Person Phone' && formfield.name !== 'Contact Person Email' && formfield.name !== 'Contact Person Name' && formfield.name !== 'Contact Website' && formfield.name !== 'Number of Employees' && formfield.name !== 'SOWerk Connections' && formfield.name !== 'Applicants Service Radius'"
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
              </v-col>
              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="cancelApply" color="primary" outlined class="px-8">Cancel</v-btn>
                <v-btn @click="submit" color="primary" class="px-8">Submit</v-btn>
              </v-card-actions>
            </v-row>
            <vue-html2pdf
              :show-layout="false"
              :float-layout="true"
              :enable-download="true"
              :preview-modal="false"
              :paginate-elements-by-height="2000"
              :filename="controlValue.filename"
              :pdf-quality="2"
              :manual-pagination="false"
              pdf-format="a4"
              pdf-orientation="landscape"
              pdf-content-width="1000px"
              ref="html2Pdf"
            >
              <v-row slot="pdf-content" style="width: 100%;" class="mt-8">
                <v-col cols="6">
                  <v-card-text style="width: 100%; font-size: 14px;">Application Name: <span style="color: #A61C00;">{{ userform.name }}</span></v-card-text>
                  <v-card-text style="width: 100%; font-size: 14px;">Associated Channel: <span style="color: #A61C00;">{{ location.name }}</span></v-card-text>
                </v-col>
                <v-col cols="6">
                  <v-card-text style="width: 100%; font-size: 14px;">Applicant Name: <span style="color: #A61C00;">{{company.account_name}}</span></v-card-text>
                  <v-card-text style="width: 100%; font-size: 14px;">
                    Applicant Channel:
                    <v-autocomplete
                      return-object
                      :items="userLocations"
                      v-model="chosenLocation"
                      outlined
                      item-text="name"
                      label="Choose your channel associated with application"
                      clearable
                    >
                      <template slot="selection" slot-scope="data">
                        <v-card-text style="width: 100%;" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                      </template>
                    </v-autocomplete>
                  </v-card-text>
                </v-col>
                <v-col cols="12" v-for="(formfield, index) in userform.formfields" style="margin: auto;">
                  <!-- VENDOR'S NAME 1 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="vendorName"
                    v-if="formfield.name === 'Vendor Name' "
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- VENDOR'S TYPE 2 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="vendorType"
                    v-if="formfield.name === 'Vendor Type'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- VENDOR CATEGORY 3 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="vendorCategory"
                    v-if="formfield.name === 'Vendor Category'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- VENDORS ADDRESS OF APPLICATION 4 -->
                  <!-- <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="vendorName"
                    v-if="formfield.name === 'Vendor Name'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field> -->

                  <!-- COMPANY FOUNDED 5 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="companyFounded"
                    v-if="formfield.name === 'Company Founded'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- CONTACT PERSON PHONE 6 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="contactPersonPhone"
                    v-if="formfield.name === 'Contact Person Phone'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- CONTACT PERSON EMAIL 7 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="contactPersonEmail"
                    v-if="formfield.name === 'Contact Person Email'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- CONTACT PERSON NAME 8 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="contactPersonName"
                    v-if="formfield.name === 'Contact Person Name'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- CONTACT WEBSITE 9 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="contactWebsite"
                    v-if="formfield.name === 'Company Website'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- NUMBER OF EMPLOYEES 10 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="numberOfEmployees"
                    v-if="formfield.name === 'Number of Employees'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- SOWERK CONNECTIONS 11 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="sowerkConnections"
                    v-if="formfield.name === 'SOWerk Connections'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- APPLICANTS SERVICE RANGE 12 -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    :value="applicantServiceRange"
                    v-if="formfield.name === 'Applicants Service Radius'"
                    outlined >
                    <template v-slot:label>
                      <p class="font-weight-bold text-body-1 black--text">{{ formfield.name }}</p>
                    </template>
                  </v-text-field>

                  <!-- START OF CUSTOM FORM FIELDS -->
                  <v-text-field
                    placeholder=" "
                    class="my-2"
                    :rules="rules.requiredRules"
                    v-model="formfield.value"
                    v-if="formfield.type === 'text' && formfield.name !== 'Vendor Name' && formfield.name !== 'Vendor Type' && formfield.name !== 'Vendor Category' && formfield.name !== 'Company Founded' && formfield.name !== 'Contact Person Phone' && formfield.name !== 'Contact Person Email' && formfield.name !== 'Contact Person Name' && formfield.name !== 'Contact Website' && formfield.name !== 'Number of Employees' && formfield.name !== 'SOWerk Connections' && formfield.name !== 'Applicants Service Radius'"
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
                </v-col>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="cancelApply" color="primary" outlined class="px-8">Cancel</v-btn>
                  <v-btn @click="submit" color="primary" class="px-8">Submit</v-btn>
                </v-card-actions>
              </v-row>
            </vue-html2pdf>
          </v-card>
        </v-col>
      </v-row>
    </template>
    <v-overlay
      :absolute="absolute"
      :value="overlay"
    >
      <template v-if="confirmModal">
        <v-card light style="width: 80%;" class="d-flex flex-column align-center justify-center mx-auto">
          <v-card-title style="color: #A61c00; font-size: 48px;" class="my-8">Please Confirm</v-card-title>
          <v-card-text style="width: 80%; word-break: break-word; white-space: pre-wrap;">You are submitting an application for approved Vendor status. If approved by the Business a SOWerk Connection will be made. Depending on your account level this may or may not impact the fees you are charged. Upon approval by the Business you will have 48 hours to remove/manage this SOWerk Connection before any fees are incurred.  </v-card-text>
          <v-row style="width: 95%;" class="mx-auto d-flex justify-space-between my-8">
            <v-btn @click="backToApplicationEdit" style="width: 25%;" outlined color="primary">Not Yet</v-btn>
            <v-btn @click="confirmedSubmit" style="width: 25%;" color='#7c7c7c'>Confirm</v-btn>
          </v-row>
        </v-card>
      </template>
    </v-overlay>
  </v-app>
</template>

<script>

  import ProfileCard from "~/components/dashboard/ProfileCard";
  import VueHtml2pdf from 'vue-html2pdf'

  export default {
    layout: 'app',
    name: 'application',
    components: {
      ProfileCard,
      VueHtml2pdf,
    },
    data() {
      return {
        rules: {
          requiredRules: [
            v => !!v || v === 0 || 'Field is required',
          ],
        },
        absolute: true,
        overlay: false,
        company: {},
        userLocations: [],
        chosenLocation: {},
        location: {},
        vendorTypes: [],
        userform: {},
        locationId: 0,
        applicationId: 0,
        loading: true,
        success: false,
        failure: false,
        controlValue: {
          filename: '',
        },
        vendorName: null,
        vendorType: null,
        vendorCategory: null,
        vendorAppAddress: null,
        companyFounded: null,
        contactPersonPhone: null,
        contactPersonEmail: null,
        contactPersonName: null,
        contactWebsite: null,
        numberOfEmployees: null,
        sowerkConnections: null,
        applicantServiceRange: null,
        confirmModal: false,
      }
    },
    async mounted() {
      console.log(window.location.href.split('/'), 'HELLO')
      this.locationId = window.location.href.split('/')[5]
      this.applicationId = window.location.href.split('/')[7]
      this.getCompany(this.currentUser.companies_id)
      this.getLocation(this.locationId);
      this.getVendorTypes(this.locationId);
      this.getUserform(this.applicationId);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      generateReport () {
        this.$refs.html2Pdf.generatePdf()
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'COMPANY')
            this.company = response.data;
            this.userLocations = response.data.locations;
            this.vendorName = response.data.account_name
            this.vendorType = response.data.company_type
            this.vendorAppAddress = response.data.address
            this.companyFounded = response.data.year_founded
            this.contactWebsite = response.data.website
            this.applicantServiceRange = response.data
          })
          .catch(err => {
            console.log(err, 'ERR IN GETTING COMPANY')
          })
      },
      async getLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(response => {
            console.log(response.data, 'LOCATION')
            this.location = response.data;
          })
          .catch(err => {
            console.log(err, 'ERR IN GETTING LOCATION')
          })
      },
      async getVendorTypes() {
        await this.$http.get('https://www.sowerkbackend.com/api/vendortypes/byLocationId/' + this.locationId)
          .then(response => {
            console.log(response.data, 'vendor types!!!!!!!')
            if(response.data[0] !== 'There are no vendor types') {
              this.vendorTypes = response.data
            }
          })
          .catch(err => {
            console.log(err, 'err in getting location type')
          })
      },
      async getUserform(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(response => {
            console.log(response.data, 'USERFORM')
            this.userform = response.data;
            this.loading = false;
          })
          .catch(err => {
            console.log(err, 'ERR IN GETTING USERFORM')
          })
      },
      cancelApply() {
        // go back by one record, the same as history.back()
        this.$router.go(-1)
      },
      validate() {
        if (!this.$refs.applicationForm.validate()) {
          this.$nextTick(() => {
            this.$vuetify.goTo('.error--text');
          });
          return false;
        }
        return true;
      },
      async confirmedSubmit() {
        // let currentApplication = this.currentApplication;
        // console.log(currentApplication.formfields, 'HELLOOOOOO');
        // let arrayString = JSON.stringify(currentApplication.formfields);
        // console.log(arrayString);
        // this.applicationFormData.pmuserforms_id = currentApplication.id;
        // this.applicationFormData.pmlocations_id = this.location.id;
        // this.applicationFormData.pmcompanies_id = this.location.companies_id;
        // this.applicationFormData.spuserprofiles_id = this.currentUser.id;
        // this.applicationFormData.splocations_id = this.company.locations[0].id;
        // this.applicationFormData.spcompanies_id = this.company.id;
        // this.applicationFormData.subData = arrayString;
        // console.log(this.applicationFormData, 'applicationFormData!!!!');
        // console.log(arrayString);
        // await this.$http.post('https://www.sowerkbackend.com/api/applications/byUserformId/' + this.currentApplication.id, this.applicationFormData)
        //   .then(response => {
        //     console.log(response.data);
        //     this.$router.go();
        //   })
        //   .catch(err => {
        //     console.log('err company', err)
        //     alert('Error in submitting this application')
        //   })
      },
      async backToApplicationEdit() {
        this.confirmModal = false;
        this.overlay = !this.overlay
      },
      async submit() {
        if(!this.validate()) return;
        // let currentApplication = this.currentApplication;
        // console.log(currentApplication.formfields, 'HELLOOOOOO');
        // let arrayString = JSON.stringify(currentApplication.formfields);
        // console.log(arrayString);
        // this.applicationFormData.pmuserforms_id = currentApplication.id;
        // this.applicationFormData.pmlocations_id = this.location.id;
        // this.applicationFormData.pmcompanies_id = this.location.companies_id;
        // this.applicationFormData.spuserprofiles_id = this.currentUser.id;
        // this.applicationFormData.splocations_id = this.company.locations[0].id;
        // this.applicationFormData.spcompanies_id = this.company.id;
        // this.applicationFormData.subData = arrayString;
        // console.log(this.applicationFormData, 'applicationFormData!!!!');
        // console.log(arrayString);
        // await this.$http.post('https://www.sowerkbackend.com/api/applications/byUserformId/' + this.currentApplication.id, this.applicationFormData)
        //   .then(response => {
        //     console.log(response.data);
        //     this.$router.go();
        //   })
        //   .catch(err => {
        //     console.log('err company', err)
        //     alert('Error in submitting this application')
        //   })
        console.log(this.chosenLocation, 'HEY LOCATION CHOSEN')
      },
    }
  }
</script>

<style scoped>

</style>
