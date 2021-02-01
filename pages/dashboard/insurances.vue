<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>
    <v-row style="width: 100%;" class="d-flex flex-column" v-if="!loading">
      <v-col cols="12" class="mx-2 my-2">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, actions"
          min-height="30vh"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" class="mx-2 my-2">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, actions"
          min-height="30vh"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" class="mx-2 my-2">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, actions"
          min-height="30vh"
        ></v-skeleton-loader>
      </v-col>
    </v-row>

    <transition name="slide-fade">
      <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="loading">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">
          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>
          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn how to utilize Insurances on SOWerk.</p>
          </v-col>
          <!-- VENDOR CHANNELS VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;">
            <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
              <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">WATCH NOW</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card style="height:450px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true">
        <iframe src="https://player.vimeo.com/video/505426676" allowfullscreen frameborder="0" style="width:100%;height:450px;"></iframe>
      </v-card>
    </transition>

    <!--VENDOR'S INSURANCE BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 99%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logo-175.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px">Manage Insurance Documents</v-card-title>
            <v-card-text style="font-size: 18px;">Customers want to know you have insurance and can be trusted, and at SOWerk we want to make that easy for you to demonstrate and/or provide. We also understand that some information should remain limited to what others can view through SOWerk. </v-card-text>
            <v-card-text style="font-size: 18px;">Therefore, we give you the option to make any insurance document uploaded Public (visible to any business reviewing your profile) or Unpublished where only businesses that you are connected to (Approved Vendor) as well as the businesses you are applying for can view your insurance documents. Please note, when you select Unpublished SOWerk will still indicate that an insurance document exists on your profile and the insurance coverage type, but no other details will be provided.</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-8 d-flex flex-column align-center" v-if="loading">
        <v-btn @click="openUploadModel(item)" color="primary" class="my-1 py-6" style="width: 50%; color: white;">Add Insurance</v-btn>
        <v-data-table
          :items="insuranceDocuments"
          :headers="insuranceHeaders"
          :items-per-page="5"
          style="width: 100%;"
        >
          <template v-slot:item.documentVisible="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <v-select
              v-model="item.documentVisible"
              :placeholder="item.documentVisible"
              :items="documentVisibleOptions"
              @change="documentVisibleActive(item)"
            >
              <template slot="selection" slot-scope="data">
                <p @click="documentVisibleActive(item)" style="width: 100%;">{{ data.item }}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p @click="documentVisibleActive(item)" style="width: 100%;">{{ data.item }}</p>
              </template>
            </v-select>
          </template>
          <template v-slot:item.expirationDateVal="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <v-card-text>{{item.expirationDateVal.slice(0,4)}}</v-card-text>
          </template>
          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
            <v-btn :href="item.documentUrl" download color="#7C7C7C" class="my-1" style="width: 90%; color: white;">Download</v-btn>
            <v-btn @click='removeInsurance(item)' color="primary" class="my-1" style="width: 90%; color: white;">Remove Insurance</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-row v-if="openUploadModelLoad" class="mt-8 mb-4 d-flex flex-column align-center" style="width: 100%;">
        <v-card style="background-color: white; height: auto; width: 100%;" class="d-flex flex-column align-center">
          <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Add New Insurance Documents</v-card-title>
          <v-card-text class="pt-16 ml-4" style="text-align: center">Upload any insurance document or template that you have, or is required of you here.</v-card-text>
          <v-text-field
            label="Insurance Name"
            style="width: 80%;"
            outlined
            v-model="insurance.name"
          ></v-text-field>
          <v-text-field
            label="Insurance Company"
            style="width: 80%;"
            outlined
            v-model="insurance.insuranceCompany"
          ></v-text-field>
          <v-text-field
            label="Insurance Type"
            style="width: 80%;"
            outlined
            v-model="insurance.type"
          ></v-text-field>
          <v-text-field
            label="Policy Number"
            style="width: 80%;"
            outlined
            v-model="insurance.policyNumber"
          ></v-text-field>
          <v-row style="width: 100%;" class="d-flex justify-center mb-4">
            <v-card-title class="my-2" style="text-align: center; width: 20%;">Expiration Date</v-card-title>
            <v-date-picker
              label="Expiration Date"
              outlined
              v-model="insurance.expirationDateVal"
            ></v-date-picker>
          </v-row>
          <v-img
            :src="insurance.documentUrl"
            :aspect-ratio="1"
            class="my-8 rounded-circle flex-grow-1"
            style="width: 100%; max-width: 300px;"
            v-if="insurance.documentUrl"
          ></v-img>
          <img
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png"
            alt="SoWerk rounded icon"
            style="width: 150px;"
            v-else
          />
          <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : insuranceFileFile}" v-model="insuranceFileFile" v-on:change.native="selectInsuranceFile" id="companyDocumentImage" style="display: none;"></v-file-input>
          <v-btn @click="clickInsuranceFileUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4 mt-8">Upload <v-icon>mdi-plus</v-icon></v-btn>
          <v-btn @click="submitInsurance" style="width: 40%; color: white; border-radius: 10px;" class="py-8 mb-4" color="#707070">Submit Insurance</v-btn>
          <v-card-title v-if="successuploaddoc !== null && successuploaddoc === false">Error with adding this document. Please retry.</v-card-title>
          <v-card-title v-if="successuploaddoc">Successfully added this document!</v-card-title>
          <v-btn @click="closeUploadModel" style="position: absolute; top: 10px; right: 10px; font-size: 25px;" color="primary">X</v-btn>
        </v-card>
      </v-row>
    </transition>
  </v-app>
</template>

<script>
  export default {
    name: "home",
    layout: "app",
    data() {
      return {
        documentVisibleOptions: [
          'Published',
          'Unpublished'
        ],
        insuranceDocuments: [],
        insuranceHeaders: [
          { text: 'Document Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Insurance Company', value: 'insuranceCompany', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Insurance Type', value: 'type', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Policy Number', value: 'policyNumber', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Expiration Date', value: 'expirationDateVal', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Document Visibility', value: 'documentVisible', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        chosenUploadFirstDocument: {},
        companyDocument: {},
        companyDocumentImageUrl: null,
        companyDocumentImageFile: null,
        successuploaddoc: null,
        openUploadModelLoad: false,
        showVideo: false,
        company: {},
        loading: false,
        insuranceFileFile: null,
        insurance: {
          name: '',
          insuranceCompany: '',
          policyNumber: '',
          documentUrl: '',
          documentVisible: false,
          expirationDateVal: '',
          type: '',
        },
      }
    },
    watch: {
      loading: function() {
        if(this.loading){
          console.log(document);
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      }
    },
    async mounted() {
      await this.getCompany();
      await this.getInsuranceDocuments();
    },
    methods: {
      async documentVisibleActive(insurance) {
        console.log(insurance, 'insurance')
        const changes = {
          documentVisible: Boolean,
        }
        if(insurance.documentVisible === 'Unpublished') {
          changes.documentVisible = false
        }
        if (insurance.documentVisible === 'Published') {
          changes.documentVisible = true
        }
        await this.$http.put('https://www.sowerkbackend.com/api/insurance/' + insurance.id, changes)
          .then(response => {
            console.log(response, 'success, insurance is now active changed')
          })
          .catch(err => {
            console.log(err, 'err in changing insurance', changes)
          })
      },
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        console.log('company from business/index: ', data.company_type);
        this.company = data;
      },
      showVideoCard(){
        if(this.showVideo === false){
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      },
      async getInsuranceDocuments() {
        await this.$http.get('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.currentUser.companies_id)
          .then(response => {
            if(response.data.length > 0) {
              for(let i=0; i<response.data.length; i++) {
                let newInsurance = {
                  id: response.data[i].id,
                  companies_id: response.data[i].companies_id,
                  name: response.data[i].name,
                  insuranceCompany: response.data[i].insuranceCompany,
                  policyNumber: response.data[i].policyNumber,
                  documentUrl: response.data[i].documentUrl,
                  documentVisible: response.data[i].documentVisible,
                  expirationDateVal: response.data[i].expirationDateVal,
                  type: response.data[i].type,
                }
                if(response.data[i].documentVisible === false) {
                  newInsurance.documentVisible = 'Unpublished'
                }
                if (response.data[i].documentVisible === true) {
                  newInsurance.documentVisible = 'Published'
                }
                this.insuranceDocuments.push(newInsurance)
              }
            }
            console.log( this.insuranceDocuments, 'response for insurance docs')
          })
          .catch(err => {
            console.log(err, 'err in getting list')
          })
        this.loading = true;
      },
      // async clickCompanyDocumentsImageUpload() {
      //   console.log(this);
      //   // let imageInput = this.$refs.companyImage;
      //   // console.log(imageInput);
      //   // imageInput.$el.click();
      //   document.getElementById('companyDocumentImage').click();
      // },
      // async selectCompanyDocumentsImage(e) {
      //   this.insuranceFileFile = e.target.files[0];
      //   this.companyDocument.documentName = e.target.files[0].name;
      //   this.companyDocument.required = true;
      //   this.companyDocument.insurance_channelsId = this.chosenUploadFirstDocument.insurance_channelsId;
      //   this.companyDocument.insurance_companiesId = this.chosenUploadFirstDocument.insurance_companiesId;
      //   this.companyDocument.companies_id = this.chosenUploadFirstDocument.companies_id;
      //   console.log(this.companyDocumentImageFile);
      //   this.companyDocumentImageUrl = URL.createObjectURL(this.insuranceFileFile);
      //   console.log(this.companyDocumentImageUrl);
      //   setTimeout(() => {
      //     let formData = new FormData();
      //     formData.append('file', this.insuranceFileFile);
      //     console.log(formData, 'formdata');
      //     this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
      //       .then(async (response) => {
      //         console.log(response, 'response.data for company document upload')
      //         this.insuranceFileFile = response.data.data.Location;
      //         console.log(this.companyDocument, 'THIS.COMPANY DOCUMENT')
      //         await this.$http.post('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.chosenUploadFirstDocument.companies_id, this.companyDocument)
      //           .then(response => {
      //             console.log(response, 'response.data for on submitcompanydocumentimage')
      //             // this.getCompanyDocuments()
      //             this.successuploaddoc = true;
      //           })
      //           .catch(err => {
      //             console.log('err in posting new company document')
      //             this.successuploaddoc = false;
      //           })
      //       })
      //       .catch(err => {
      //         console.log('error in uploading location image', err)
      //       })
      //   }, 250)
      // },
      async submitInsurance() {
        let formData = new FormData();
        let file = this.insuranceFileFile;
        formData.append('file', file);
        console.log(formData, 'formdata');
        this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then((response) => {
            console.log(response, 'response.data for insurance document upload')
            this.insurance.documentUrl = response.data.data.Location;
          })
          .catch(err => {
            console.log('error in uploading location image', err)
          })
        setTimeout(() => {
          this.$http.post('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.currentUser.companies_id, this.insurance)
            .then(response => {
              console.log(response.data, 'insurance submission success!!!!')
              if(response.data.insurance.documentVisible === false) {
                response.data.insurance.documentVisible = 'Unpublished'
              } else if (response.data.insurance.documentVisible === true) {
                response.data.insurance.documentVisible = 'Published'
              }
              this.insuranceDocuments.push(response.data.insurance)
              this.successuploaddoc = true;
              this.insurance = {
                name: '',
                insuranceCompany: '',
                policyNumber: '',
                documentUrl: '',
                documentVisible: false,
                expirationDateVal: '',
                type: '',
              }
            })
            .catch(err => {
              console.log(err, 'err in submitting insurance', this.insurance)
              this.successuploaddoc = false;
            })
        }, 1000)
      },
      clickInsuranceFileUpload() {
        console.log(this)
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyDocumentImage').click()
      },
      selectInsuranceFile(e) {
        this.insuranceFileFile = e.target.files[0]
        console.log(this.insuranceFileFile)
        this.insurance.documentUrl = URL.createObjectURL(e.target.files[0])
        console.log(this.insurance.documentUrl, 'fileUrl')
        // this.selectFile(this.insuranceFileFile);
        // this.selectNotesUrl( this.insurance.fileUrl);
      },
      readFile(e) {
        this.selectedFile = e.target.files[0]
        this.url = URL.createObjectURL(this.selectedFile)
        console.log(this.url, 'this.url')
        //this.selectFile(this.selectedFile)
      },
      selectFile(file) {
        this.insuranceFileFile = file;
        console.log(this.insuranceFileFile);
      },
      selectInsuranceUrl(url) {
        this.insurance.documentUrl = url;
        console.log(this.insurance.documentUrl);
      },
      async openUploadModel(item) {
        console.log(item)
        this.chosenUploadFirstDocument = item;
        this.openUploadModelLoad = true;
      },
      async closeUploadModel() {
        this.openUploadModelLoad = false;
      },
      async removeInsurance(insuranceVal) {
        console.log(insuranceVal, 'insurance to remove')
        await this.$http.delete('https://www.sowerkbackend.com/api/insurance/' + insuranceVal.id)
          .then(response => {
            console.log('success in deleting insurance', response)
            this.insuranceDocuments = this.insuranceDocuments.filter(insurance => insurance.id !== insuranceVal.id)
          })
          .catch(err => {
            console.log(err, 'issue in deleting insurance')
          })
      }
    }
  }
</script>

<style scoped>
</style>
