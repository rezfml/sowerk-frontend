<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0" style="max-width: 95%;">
      <v-row style="height: 100%;" v-if="success === false && failure === false">
        <v-col cols="4">
          <v-card class="mt-16 d-flex flex-column align-center">
            <v-img class="my-4" aspect-ratio="1" style="border: 1px solid #7C7C7C; box-shadow: 1px 1px 1px 1px #7C7C7C; width: 175px; height: 175px; border-radius: 200px; background-color: white" :src="spcompany.imgUrl"></v-img>
            <v-card-title style="color: #A61c00; font-size: 48px; text-align: center; line-height: 1.25em; word-break: break-word; white-space: pre-wrap;">{{spcompany.account_name}}</v-card-title>
            <v-card-text style="text-align: center; font-size: 18px;">{{location.description}}</v-card-text>
            <v-card-text style="color:#A61C00; text-align: center; font-size: 18px;">Radius Provider ({{location.radius}}mi)</v-card-text>
            <v-row class="py-8 d-flex flex-column align-center justify-center" style="border-top: 1px solid #7C7C7C; border-bottom: 1px solid #7C7C7C; width: 90%;">
              <v-row class="d-flex justify-center" style="width: 100%;">
                <v-card-title style="color: #A61C00; font-size: 108px;" v-if="connections.length > 0">{{connections.length}}</v-card-title>
                <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
                <div class="d-flex flex-column align-center" style="width: 60%;">
                  <v-card-title style="font-size: 24px; word-break: break-word; white-space: pre-wrap; text-align: center">Approved Connections</v-card-title>
                </div>
              </v-row>
            </v-row>
            <v-row class="py-8 d-flex justify-center" style="width: 90%;">
              <v-card-title style="font-size: 24px; text-align: left;">SOWerk Channels</v-card-title>
              <v-card-title style="color: #A61C00; font-size: 108px;" v-if="spcompany.locations">{{spcompany.locations.length}}</v-card-title>
              <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
            </v-row>
            <v-btn v-if="currentUser.companies_id === pmcompany.id" :to="'/dashboard/vendors/' + location.id" outlined color="primary" rounded md class="">View Profile</v-btn>
            <v-divider class="mx-auto mt-10" style="width: 90%;"></v-divider>
            <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Headquarters</v-card-title>
            <v-card-text style="font-size: 24px; text-align: left;">{{spcompany.address}}</v-card-text>
            <v-card-text style="font-size: 24px; text-align: left;">{{spcompany.city}}, {{spcompany.state}} {{spcompany.zipcode}}</v-card-text>
            <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Joined SOWerk</v-card-title>
            <v-card-text style="font-size: 24px; text-align: left;" v-if="spcompany.creationDate">{{spcompany.creationDate.slice(0,4)}}</v-card-text>
            <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Founded</v-card-title>
            <v-card-text style="font-size: 24px; text-align: left;">{{spcompany.year_founded}}</v-card-text>
            <a :href="'https://' + spcompany.website" target="_blank" class="my-8 py-6" style="text-decoration: none; text-align: center; width: 90%; font-size: 24px; border-radius: 50px; border: 1px solid #A61C00;">Company Website</a>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-img width="350px" height="70px" src="\SoWork Logo-175.png"></v-img>
            <template v-for="(insurance, index) in insurances">
              <v-card-title class="my-1" style="color: #A61c00; font-size: 48px;" v-if="insurances.length > 0">{{insurances.length}}</v-card-title>
              <v-card-title class="my-1" style="color: #A61c00; font-size: 48px;" v-else>0</v-card-title>
              <v-card-text class="my-1" style="color: #A61c00; font-size: 48px; text-align: center; word-break: break-word; white-space: pre-wrap;" v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>
            </template>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-img width="350px" height="70px" src="\SoWork Logo-176.png"></v-img>
            <template v-for="(license, index) in licenses">
              <v-card-title class="my-1" style="color: #A61c00; font-size: 48px;" v-if="licenses.length > 0">{{licenses.length}}</v-card-title>
              <v-card-title class="my-1" style="color: #A61c00; font-size: 48px;" v-else>0</v-card-title>
              <v-card-text class="my-1" style="color: #A61c00; font-size: 48px; text-align: center; word-break: break-word; white-space: pre-wrap;" v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>
            </template>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card class="flex-column d-flex mt-16">
            <v-btn @click="generateReport" style="position: absolute; top: 10px; right: 10px;" outlined color="primary" rounded md>Download Application</v-btn>
            <div class="d-flex justify-center align-center" style="background: #A61C00; width: 5%; height: 50px; position: absolute; left: 10px; top: -20px;">
              <v-icon color="white">mdi-account</v-icon>
            </div>
            <v-row style="width: 100%;" class="mt-8">
              <v-col cols="6">
                <v-card-text style="width: 100%; font-size: 14px;">Application Name: <span style="color: #A61C00;">{{ userform.name }}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">Associated Channel: <span style="color: #A61C00;">{{ pmlocation.name }}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">Application Submitted: <span v-if="application.created" style="color: #A61C00;">{{application.created}}</span></v-card-text>
              </v-col>
              <v-col cols="6">
                <v-card-text style="width: 100%; font-size: 14px;">Applicant Name: <span style="color: #A61C00;">{{spcompany.account_name}}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">Applicant Channel: <span style="color: #A61C00;">{{location.name}}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">Application Approved: <span v-if="application.modified" style="color: #A61C00;">{{application.modified}}</span></v-card-text>
              </v-col>
            </v-row>
            <v-row class="px-12">
              <v-col cols="12" v-for="(formfield, index) in userform.formfields" style="margin: auto;">
                <p style="color: #151515; font-size: 14px;" class="mb-n1 mt-1">Question #{{index + 1}} - {{formfield.name}}</p>
                <v-text-field
                  placeholder=" "
                  class="my-2"
                  :value="application.subData[index].value"
                  :name="formfield.name"
                  v-if="formfield.type ==='text' && application.subData[index]"
                  outlined
                  readonly
                >
                </v-text-field>
                <v-checkbox
                  placeholder=" "
                  class="my-2"
                  v-model="application.subData[index].value"
                  :name="formfield.name"
                  v-if="formfield.type ==='checkbox' && application.subData[index]"
                  readonly
                >
                </v-checkbox>
                <v-select
                  placeholder=""
                  class="my-2"
                  v-model="application.subData[index].value"
                  :items="formfield.options.split(', ')"
                  v-if="formfield.type ==='select' && application.subData[index]"
                  outlined
                  readonly
                ></v-select>
              </v-col>
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
                <v-row style="width: 100%;" slot="pdf-content">
                  <v-col cols="6">
                    <v-card-text style="width: 100%; font-size: 14px;">Application Name: <span style="color: #A61C00;">{{ userform.name }}</span></v-card-text>
                    <v-card-text style="width: 100%; font-size: 14px;">Associated Channel: <span style="color: #A61C00;">{{ pmlocation.name }}</span></v-card-text>
                    <v-card-text style="width: 100%; font-size: 14px;">Application Submitted: <span v-if="application.created" style="color: #A61C00;">{{application.created}}</span></v-card-text>
                  </v-col>
                  <v-col cols="6">
                    <v-card-text style="width: 100%; font-size: 14px;">Applicant Name: <span style="color: #A61C00;">{{spcompany.account_name}}</span></v-card-text>
                    <v-card-text style="width: 100%; font-size: 14px;">Applicant Channel: <span style="color: #A61C00;">{{location.name}}</span></v-card-text>
                    <v-card-text style="width: 100%; font-size: 14px;">Application Approved: <span v-if="application.modified" style="color: #A61C00;">{{application.modified}}</span></v-card-text>
                  </v-col>
                  <v-col cols="12" v-for="(formfield, index) in userform.formfields" style="">
                    <p style="color: #151515; font-size: 14px; padding-bottom: 20px;" class="mb-4 mt-1">Question #{{index + 1}} - {{formfield.name}}</p>
                    <v-text-field
                      placeholder=" "
                      class="mt-4"
                      :value="application.subData[index].value"
                      :name="formfield.name"
                      v-if="formfield.type ==='text' && application.subData[index]"
                      outlined
                      readonly
                    >
                    </v-text-field>
                    <v-checkbox
                      placeholder=" "
                      class="mt-4"
                      v-model="application.subData[index].value"
                      :name="formfield.name"
                      v-if="formfield.type ==='checkbox' && application.subData[index]"
                      readonly
                    >
                    </v-checkbox>
                    <v-select
                      placeholder=""
                      class="mt-4"
                      v-model="application.subData[index].value"
                      :items="formfield.options.split(', ')"
                      v-if="formfield.type ==='select' && application.subData[index]"
                      outlined
                      readonly
                    ></v-select>
                  </v-col>
                </v-row>
            </vue-html2pdf>
          </v-card>
        </v-col>
      </v-row>

      <v-progress-circular
        indeterminate
        color="primary"
        :size="75"
        v-if="failure === true"
      ></v-progress-circular>
    </v-container>
  </v-app>
</template>

<script>
  import * as moment from 'moment'
  import VueHtml2pdf from 'vue-html2pdf'

  export default {
    name: 'activeapplicant',
    layout: 'app',
    components: {
      VueHtml2pdf,
    },
    data() {
      return {
        application: {},
        location: {},
        pmlocation: {},
        pmcompany: {},
        spcompany: {},
        licenses: [],
        insurances: [],
        connections: [],
        userform: {},
        service: {},
        success: false,
        failure: false,
        controlValue: {
          filename: '',
        }
      }
    },
    async mounted() {
      await this.getApplication(this.$route.params.id)
      console.log(this.messageForm, 'messageForm');
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
      async selectVendor(document) {
        console.log(document, 'document');
        this.documentToSend = document
        await this.$http.post('https://www.sowerkbackend.com/api/vendordocuments/byCompaniesId/' + this.currentUser.companies_id, {
          // companies_id: this.currentUser.companies_id,
          documentName: this.documentToSend.documentName,
          documentUrl: this.documentToSend.documentUrl,
          required: true,
          vendor_companiesId: this.application.spcompanies_id,
          vendor_channelsId: this.application.splocations_id
        })
          .then(response => {
            console.log(response, 'success in added vendor docs')
            alert(`Successfully sent ${this.documentToSend.documentName} to Vendor!`)
          })
          .catch(err => {
            console.log(err, 'err in adding vendor docs')
          })
      },
      async getApplication(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/' + id)
          .then(response => {
            console.log(response.data, 'response application');
            this.application = response.data;
            this.application.created = moment(response.data).format('lll');
            this.application.modified = moment(response.data).format('lll');
            this.application.subData = JSON.parse(response.data.subData);
            this.sendToId = this.application.spcompanies_id;
            if (this.application.required === 'required') {
              this.application.required = true
            }
            console.log(this.application, 'this.application!!!!!!!!!!!!!!');
            this.getSPLocation(response.data.splocations_id);
            this.getPMLocation(response.data.pmlocations_id);
            this.getPMUserForm(response.data.pmuserforms_id);
            //this.getPMService(response.data.pmservices_id);
            this.getPMCompany(response.data.pmcompanies_id);
            this.getSPCompany(response.data.spcompanies_id);
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getSPLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(async (response) => {
            console.log(response.data, 'response sp location');
            this.location = response.data;
            await this.getInsurances();
            await this.getLicenses();
            await this.getConnections(this.location);
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(async (response) => {
            await console.log(response.data, 'response pm location');
            this.pmlocation = response.data;
            console.log(this.pmlocation, 'pm location');
            this.messageForm.location = `${response.data.name} - ${response.data.address} ${response.data.city}, ${response.data.state} ${response.data.zipcode}`
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(async (response) => {
            console.log(response.data, 'response pm company');
            this.pmcompany = response.data;
            this.messageForm.company = response.data.account_name;
            console.log(this.messageForm, 'this.messageForm');
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getSPCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(async (response) => {
            console.log(response.data, 'response sp company');
            this.spcompany = response.data;
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMUserForm(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(async (response) => {
            console.log(response.data, 'response pm userform');
            this.userform = response.data;
            this.controlValue.filename = response.data.name;
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMService(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/services/' + id)
          .then(async (response) => {
            console.log(response.data.service, 'response pm service');
            this.service = response.data.service;
            this.messageForm.service = response.data.service.name
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getInsurances() {
        await this.$http.get('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data insurances');
            for(let i = 0; i<response.data.length; i++) {
              this.insurances.push(response.data[0]);
            }
            console.log(this.insurances, 'this.insurances')
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getLicenses() {
        await this.$http.get('https://www.sowerkbackend.com/api/license/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data licenses');
            for(let i = 0; i<response.data.length; i++) {
              this.licenses.push(response.data[i]);
            }
            console.log(this.licenses, 'this.licenses')
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getConnections(location) {
        await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/bySpId/' + location.companies_id)
          .then(response => {
            console.log(response.data, 'connections');
            for(let i=0; i<response.data.length; i++) {
              this.connections.push(response.data[i]);
            }
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      validate() {
        if (!this.$refs.denialSelect.validate()) {
          this.$nextTick(() => {
            this.$vuetify.goTo('.error--text');
          });
          return false;
        }
        return true;
      },
      async getCompanyDocuments() {
        this.companyDocuments = [];
        await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'companyDocuments response.data')
            this.companyDocuments=response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting company documents for this company')
          })
      },
      async Approve() {
        const approvalChanges = {
          approval_status: 1
        };
        const approvedproviderconnection = {
          propertymanager_id: this.application.pmcompanies_id,
          serviceprovider_id: this.application.spcompanies_id
        }
        await this.$http.put('https://www.sowerkbackend.com/api/applications/' + this.application.id, approvalChanges)
          .then(response => {
            console.log('success in changes', response)
          })
          .catch(err => {
            console.log('err', err);
          })
        await this.$http.post('https://www.sowerkbackend.com/api/approvedproviderconnection', approvedproviderconnection)
          .then(response => {
            console.log('success', response);
            this.success = true;
            this.getCompanyDocuments();
          })
          .catch(err => {
            console.log('err', err)
          })

        await this.messageVendorAboutApproval();

        // setTimeout(() => {
        //   this.$router.push('/dashboard/vendors/applicants');
        // }, 1000)
      },
      async messageVendorAboutApproval() {
        console.log(this.application);

        let pmLocation;
        let applicationName;
        let companyName;
        let spCompanyName;

        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + this.application.pmuserforms_id)
          .then(response => {
            console.log('SUCCESS userform', response)
            applicationName = response.data.name
          })
          .catch(err => {
            console.log(err);
          })

        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.pmcompanies_id)
          .then(response => {
            console.log('SUCCESS company', response)
            companyName = response.data.account_name
          })
          .catch(err => {
            console.log(err);
          })


        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.spcompanies_id)
          .then(response => {
            console.log('SUCCESS company', response)
            spCompanyName = response.data.account_name
          })
          .catch(err => {
            console.log(err);
          })

        // No longer needed as part of the message
        // await this.$http.get('https://www.sowerkbackend.com/api/services/' + this.application.pmservices_id)
        //   .then(response => {
        //     console.log('SUCCESS', response)
        //     this.denialMessage.service = response.data.service.name;
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   })

        // Get Property Manager Location that application was sent to
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.application.pmlocations_id)
          .then(response => {
            console.log('SUCCESS', response)
            pmLocation = response.data.name;
            this.approvalMessage.location = response.data.name + ' - ' + response.data.address + ' '+ response.data.city + ' ' + response.data.state + ' ' + response.data.zipcode.toString()
            this.approvalMessage.service = response.data.services[0].name
            this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.pmcompanies_id)
              .then(responseVal => {
                console.log(responseVal.data)
                this.approvalMessage.company = responseVal.data.account_name
              })
          })
          .catch(err => {
            console.log(err);
          })

        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.application.splocations_id)
          .then(response => {
            console.log('SUCCESS', response)
            this.approvalMessage.spLocationId = response.data.id
            this.approvalMessage.spLocationName = response.data.name
          })
          .catch(err => {
            console.log(err);
          })

        // Congratulations __vendor account name__, the approved Vendor application that your company applied for (__application name__)  has been reviewed. __business account name__ has approved your application and you are now connected to __business channel name__, a channel of __account name__. We will automatically update your profile details so others on SOWerk know you are a trusted solution for __business account name__. You will also be able to view and maintain your relationship details with __business account name__ by viewing their profile. This can be found in the Customer section of your navigation.
        this.approvalMessage.message = `Congratulations ${spCompanyName}, the approved Vendor application that your company applied for ${applicationName} has been reviewed. ${companyName} has approved your application and you are now connected to ${pmLocation}, a channel of ${companyName}. We will automatically update your profile details so others on SOWerk know you are a trusted solution for ${pmLocation}. You will also be able to view and maintain your relationship details with ${companyName} by viewing their profile. This can be found in the Customer section of your navigation.`
        console.log(this.approvalMessage, this.application, 'wow submit this.approvalMessage and application')
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.application.spcompanies_id, this.approvalMessage)
          .then(response => {
            console.log('SUCCESS', response)
          })
          .catch(err => {
            console.log(err);
          })
      },
      async Deny() {
        console.log('hello world, you have been denied');
        this.isDenying = true;

      },
      async submitDenial() {
        if(!this.validate()) return;
        const denialChanges = {
          approval_status: 2,
          denial_reason: this.denial_reason
        }

        this.application.approval_status = 2;
        this.application.denial_reason = this.denial_reason;

        console.log(denialChanges);

        await this.$http.put('https://www.sowerkbackend.com/api/applications/' + this.application.id, denialChanges)
          .then(response => {
            console.log('success in changes', response)
            this.failure = true;
          })
          .catch(err => {
            console.log('err', err);
          })

        await this.messageVendorAboutDenial();

        setTimeout(() => {
          this.$router.push('/dashboard/vendors/applicants');
        }, 1000)
      },
      async messageVendorAboutDenial() {
        console.log(this.application);

        let pmLocation;
        let applicationName;
        let companyName;
        let spCompanyName;

        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + this.application.pmuserforms_id)
          .then(response => {
            console.log('SUCCESS userform', response)
            applicationName = response.data.name
          })
          .catch(err => {
            console.log(err);
          })

        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.pmcompanies_id)
          .then(response => {
            console.log('SUCCESS company', response)
            companyName = response.data.account_name
          })
          .catch(err => {
            console.log(err);
          })


        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.spcompanies_id)
          .then(response => {
            console.log('SUCCESS company', response)
            spCompanyName = response.data.account_name
          })
          .catch(err => {
            console.log(err);
          })

        // No longer needed as part of the message
        // await this.$http.get('https://www.sowerkbackend.com/api/services/' + this.application.pmservices_id)
        //   .then(response => {
        //     console.log('SUCCESS', response)
        //     this.denialMessage.service = response.data.service.name;
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   })

        // Get Property Manager Location that application was sent to
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.application.pmlocations_id)
          .then(response => {
            console.log('SUCCESS', response)
            pmLocation = response.data.name;
            this.denialMessage.location = response.data.name + ' - ' + response.data.address + ' '+ response.data.city + ' ' + response.data.state + ' ' + response.data.zipcode.toString()
            this.denialMessage.service = response.data.services[0].name
            this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.pmcompanies_id)
              .then(responseVal => {
                console.log(responseVal.data)
                this.denialMessage.company = responseVal.data.account_name
              })
          })
          .catch(err => {
            console.log(err);
          })

        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.application.splocations_id)
          .then(response => {
            console.log('SUCCESS', response)
            this.denialMessage.spLocationId = response.data.id
            this.denialMessage.spLocationName = response.data.name
          })
          .catch(err => {
            console.log(err);
          })

        // Dear __vendor account name__, the application you submitted (__application name__) to __business channel name__, a channel of __business account name__, was not approved at  this time.
        this.denialMessage.message = "Dear " + spCompanyName + ", the application you submitted, " + applicationName + ", to " + pmLocation + ", a channel of " + companyName + ", was not approved at this time. \n\n If the denial reason was provided it will be listed below. Please keep in mind there are many ways to connect to businesses and their channels here on SOWerk including ones where you may have been denied before.\n\n" + this.application.denial_reason;
        console.log(this.denialMessage, this.application, 'wow submit denial and application')
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.application.spcompanies_id, this.denialMessage)
          .then(response => {
            console.log('SUCCESS', response)
          })
          .catch(err => {
            console.log(err);
          })
      },
      async cancelDeny() {
        this.isDenying = false;
        this.denial_reason = null;
      },
      async submit() {
        console.log(this.messageForm)
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.sendToId, this.messageForm)
          .then(response => {
            console.log('SUCCESS', response)
          })
          .catch(err => {
            console.log(err);
          })
        setTimeout(() => {
          this.$router.push('/dashboard/vendors/applicants');
        }, 1000)
      },
    }
  }

</script>

<style scoped>
</style>
