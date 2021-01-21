<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0" style="max-width: 95%;">
      <v-row style="height: 100%;" v-if="success === false && failure === false">
        <v-col cols="4">
          <v-card class="mt-16 d-flex flex-column align-center">
            <v-row>
              <v-col cols="12" align="center">
                <v-avatar size="100" class="text-center mx-auto mt-n16 rounded-circle elevation-5" color="white">
                  <v-img :src="location.imageUrl" v-if="location.imageUrl && location.imageUrl !== '{}'"></v-img>
                  <v-icon v-else size="60">person</v-icon>
                </v-avatar>
              </v-col>
            </v-row>
            <!--            <v-img :src="location.imageUrl" v-if="location" style="width: 40%; margin-top: -70px; border-radius: 50%; border: 1px solid #707070; box-shadow: 3px 6px 10px #707070;"></v-img>-->
            <v-card-title style="color:#A61C00;">{{spcompany.account_name}}</v-card-title>
            <v-card-title style="color:#A61C00;">{{location.name}}</v-card-title>
            <v-card-text style="text-align: center">Approved at <span style="color:#A61C00;">{{connections.length}}</span> Properties</v-card-text>
            <v-card-text style="color:#A61C00; text-align: center">Radius Provider ({{location.radius}}mi)</v-card-text>
            <v-row>
              <v-col cols="6" align="center">
                <v-btn :to="'/dashboard/vendors/' + location.id" outlined color="primary" rounded md>View Profile</v-btn>
              </v-col>
              <v-col cols="6" align="center">
                <v-btn outlined color="primary" rounded md>Download Application</v-btn>
              </v-col>
            </v-row>
            <v-divider class="mx-auto mt-10" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">About</v-card-title>
            <v-card-text>Address: {{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
            <v-card-text>Founded: {{location.year_founded}}</v-card-text>
            <v-card-text v-if="location.created">Joined SOWerk: {{location.created.slice(0,4)}}</v-card-text>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Main Contact</v-card-title>
            <v-card-text>{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
            <v-card-text>{{location.email}}</v-card-text>
            <v-card-text>{{location.phone}}</v-card-text>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Insurances</v-card-title>
            <template v-for="(insurance, index) in insurances">
              <v-card-text>{{insurance.name}} - {{insurance.insuranceCompany}}</v-card-text>
              <v-card-text v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>
            </template>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Licenses</v-card-title>
            <template v-for="(license, index) in licenses">
              <v-card-text>{{license.name}} - {{license.licenseLocation}}</v-card-text>
              <v-card-text v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>
            </template>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card class="flex-column d-flex mt-16">
            <div class="d-flex justify-center align-center" style="background: #A61C00; width: 5%; height: 50px; position: absolute; left: 10px; top: -20px;">
              <v-icon color="white">mdi-account</v-icon>
            </div>
            <v-row style="width: 100%;" class="mt-8">
              <v-col cols="6">
                <v-card-text style="width: 100%; font-size: 14px;">Application Name: <span style="color: #A61C00;">{{ userform.name }}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">Associated Channel: <span style="color: #A61C00;">{{ pmlocation.name }}</span></v-card-text>
              </v-col>
              <v-col cols="6">
                <v-card-text style="width: 100%; font-size: 14px;">Applicant Name: <span style="color: #A61C00;">{{spcompany.account_name}}</span></v-card-text>
                <v-card-text style="width: 100%; font-size: 14px;">Applicant Channel: <span style="color: #A61C00;">{{location.name}}</span></v-card-text>
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
<!--            <v-row class="d-flex justify-space-between my-10" style="width: 90%; margin: auto;" v-if="!isDenying">-->
<!--              <v-btn @click="Deny" large>Deny</v-btn>-->
<!--              <v-btn @click="Approve" color="primary" large>Approve</v-btn>-->
<!--            </v-row>-->
            <v-row v-if="isDenying" class="px-12 mt-8">
              <v-col cols="12">
                <p class="text-h5 mb-2">Reason For Denial</p>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12">
                <v-row class="px-3 my-6">
                  <v-select
                    :items="denialOptions"
                    placeholder="Select Denial Reason"
                    v-model="denial_reason"
                    :rules="rules.requiredRules"
                    ref="denialSelect"
                    required
                  ></v-select>
                </v-row>
                <v-row class="px-3 mb-4">
                  <v-btn @click="cancelDeny" large>Cancel</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn @click="submitDenial" color="primary" large>Submit</v-btn>
                </v-row>
              </v-col>
            </v-row>
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

  export default {
    name: 'activeapplicant',
    layout: 'app',
    components: {
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
      async selectVendor(document) {
        console.log(document, 'document');
        this.documentToSend = document
        this.$http.post('https://www.sowerkbackend.com/api/vendordocuments/byCompaniesId/' + this.currentUser.companies_id, {
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
            this.application.subData = JSON.parse(response.data.subData);
            this.sendToId = this.application.spcompanies_id;
            if (this.application.required === 'required') {
              this.application.required = true
            }
            console.log(this.application, 'this.application!!!!!!!!!!!!!!');
            this.getSPLocation(response.data.splocations_id);
            this.getPMLocation(response.data.pmlocations_id);
            this.getPMUserForm(response.data.pmuserforms_id);
            this.getPMService(response.data.pmservices_id);
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
            console.log(response.data, 'response pm location');
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
