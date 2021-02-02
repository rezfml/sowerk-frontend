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
    <!-- NOT SUPER USER -->
    <transition name="slide-fade">
      <!-- VENDOR USER -->
      <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="loading">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">
          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>
          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn how to utilize Licenses and Certificates on SOWerk.</p>
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
    <!-- VENDOR USER -->
    <transition name="slide-fade">
      <v-card style="height:450px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true">
        <iframe src="https://player.vimeo.com/video/505426676" allowfullscreen frameborder="0" style="width:100%;height:450px;"></iframe>
      </v-card>
    </transition>
    <!--VENDOR'S BUSINESS SEARCH BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 99%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logo-176.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px; text-align: center; word-break: break-word; white-space: pre-wrap;">Manage Licenses and Certificates</v-card-title>
            <v-card-text v-if="company.company_type === 'false'" style="font-size: 18px;">Besides demonstrating that you have other companies who trust you as their approved vendor (SOWerk connections) the next best way to earn new business is your licenses and certifications. Show your credentials by uploading them here. We also understand that some information should remain limited to what others can view through SOWerk. </v-card-text>
            <v-card-text v-if="company.company_type === 'false'" style="font-size: 18px;">Therefore, we give you the option to make any license/certification document uploaded Public (visible to any business reviewing your profile) or Unpublished where only businesses that you are connected to (Approved Vendor) as well as the businesses you are applying for can view your licenses and certifications. Please note, when you select Unpublished SOWerk will still indicate that a license/certification exists on your profile. We will also provide the license/certificate name publicly to users on SOWerk, but no other details will be shared unless you approve.</v-card-text>
            <v-card-text v-if="company.company_type === 'true'" style="font-size: 18px;">Besides demonstrating that you have other companies who trust you as their approved vendor (SOWerk connections) the next best way to earn new business is your licenses and certifications. Show your credentials by uploading them here. We also understand that some information should remain limited to what others can view through SOWerk. </v-card-text>
            <v-card-text v-if="company.company_type === 'true'" style="font-size: 18px;">Therefore, we give you the option to make any license/certification document uploaded Public (visible to any vendor reviewing your profile) or Unpublished where only vendors that you are connected to (Approved Vendor) as well as the vendors applying to be approved can view your licenses and certifications. Please note, when you select Unpublished SOWerk will still indicate that a license/certification exists on your profile. We will also provide the license/certificate name publicly to users on SOWerk, but no other details will be shared unless you approve.</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-8 d-flex flex-column align-center" v-if="loading">
        <v-btn @click="openUploadModel(item)" color="primary" class="my-1 py-6" style="width: 50%; color: white;">Add License Or Certificate</v-btn>
        <v-data-table
          :items="licenseDocuments"
          :headers="licenseHeaders"
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
          <template v-slot:item.expirationDate="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <v-card-text>{{item.expirationDate.slice(0,4)}}</v-card-text>
          </template>
          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
            <v-btn :href="item.documentUrl" download color="#7C7C7C" class="my-1" style="width: 90%; color: white;">Download</v-btn>
            <v-btn @click='removeLicense(item)' color="primary" class="my-1" style="width: 90%; color: white;">Remove License</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-row v-if="openUploadModelLoad" class="mt-8 mb-4 d-flex flex-column align-center" style="width: 100%;">
        <v-card style="background-color: white; height: auto; width: 100%;" class="d-flex flex-column align-center">
          <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Add New License/Certificate Documents</v-card-title>
          <v-card-text class="pt-16 ml-4" style="text-align: center">Upload any license, certificate, or template that you have, or is required of you here.</v-card-text>
          <v-text-field
            label="License Name"
            style="width: 80%;"
            outlined
            v-model="license.name"
          ></v-text-field>
          <v-text-field
            label="License Number"
            style="width: 80%;"
            outlined
            v-model="license.licenseNumber"
          ></v-text-field>
          <v-text-field
            label="License Location"
            style="width: 80%;"
            outlined
            v-model="license.licenseLocation"
          ></v-text-field>
            <v-card-title class="my-2" style="text-align: center;">Expiration Date</v-card-title>
            <v-date-picker
              style="width: 80%;"
              width="80%"
              label="Expiration Date"
              outlined
              v-model="license.expirationDate"
            ></v-date-picker>
          <v-img
            :src="license.documentUrl"
            :aspect-ratio="1"
            class="my-8 rounded-circle flex-grow-1"
            style="width: 100%; max-width: 300px;"
            v-if="license.documentUrl"
          ></v-img>
          <img
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png"
            alt="SoWerk rounded icon"
            style="width: 150px;"
            v-else
          />
          <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : licenseFileFile}" v-model="licenseFileFile" v-on:change.native="selectLicenseFile" id="companyDocumentImage" style="display: none;"></v-file-input>
          <v-btn @click="clickLicenseFileUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4 mt-8">Upload <v-icon>mdi-plus</v-icon></v-btn>
          <v-btn @click="submitLicense" style="width: 40%; color: white; border-radius: 10px;" class="py-8 mb-4" color="#707070">Submit License</v-btn>
          <v-title v-if="successuploaddoc !== null && successuploaddoc === false">Error with adding this document. Please retry.</v-title>
          <v-title v-if="successuploaddoc">Successfully added this document!</v-title>
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
        licenseDocuments: [],
        licenseHeaders: [
          { text: 'Document Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'License Number', value: 'licenseNumber', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'License Location', value: 'licenseLocation', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Expiration Date', value: 'expirationDate', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
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
        licenseFileFile: null,
        license: {
          name: '',
          licenseNumber: '',
          licenseLocation: '',
          documentUrl: '',
          documentVisible: false,
          expirationDate: '',
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
      await this.getLicenseDocuments();
    },
    methods: {
      async documentVisibleActive(license) {
        console.log(license, 'license')
        const changes = {
          documentVisible: Boolean,
        }
        if(license.documentVisible === 'Unpublished') {
          changes.documentVisible = false
        }
        if (license.documentVisible === 'Published') {
          changes.documentVisible = true
        }
        await this.$http.put('https://www.sowerkbackend.com/api/license/' + license.id, changes)
          .then(response => {
            console.log(response, 'success, license is now active changed')
          })
          .catch(err => {
            console.log(err, 'err in changing license', changes)
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
      async getLicenseDocuments() {
        await this.$http.get('https://www.sowerkbackend.com/api/license/byCompanyId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'response for license docs')
            if(response.data.length > 0) {
              for(let i=0; i<response.data.length; i++) {
                let newLicense = {
                  id: response.data[i].id,
                  companies_id: response.data[i].companies_id,
                  name: response.data[i].name,
                  licenseNumber: response.data[i].licenseNumber,
                  licenseLocation: response.data[i].licenseLocation,
                  documentUrl: response.data[i].documentUrl,
                  documentVisible: response.data[i].documentVisible,
                  expirationDate: response.data[i].expirationDate,
                }
                if(response.data[i].documentVisible === false) {
                  newLicense.documentVisible = 'Unpublished'
                }
                if (response.data[i].documentVisible === true) {
                  newLicense.documentVisible = 'Published'
                }
                this.licenseDocuments.push(newLicense)
              }
            }
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
      //   this.companyDocument.documentUrl = e.target.files[0];
      //   this.companyDocument.documentName = e.target.files[0].name;
      //   this.companyDocument.required = true;
      //   this.companyDocument.license_channelsId = this.chosenUploadFirstDocument.license_channelsId;
      //   this.companyDocument.license_companiesId = this.chosenUploadFirstDocument.license_companiesId;
      //   this.companyDocument.companies_id = this.chosenUploadFirstDocument.companies_id;
      //   console.log(this.companyDocumentImageFile);
      //   this.companyDocumentImageUrl = URL.createObjectURL(this.companyDocument.documentUrl);
      //   console.log(this.companyDocumentImageUrl);
      //   setTimeout(() => {
      //     let formData = new FormData();
      //     formData.append('file', this.companyDocument.documentUrl);
      //     console.log(formData, 'formdata');
      //     this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
      //       .then(async (response) => {
      //         console.log(response, 'response.data for company document upload')
      //         this.companyDocument.documentUrl = response.data.data.Location;
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
      async submitLicense() {
        let formData = new FormData();
        let file = this.licenseFileFile;
        formData.append('file', file);
        console.log(formData, 'formdata');
        this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then((response) => {
            console.log(response, 'response.data for license document upload')
            this.license.documentUrl = response.data.data.Location;
          })
          .catch(err => {
            console.log('error in uploading location image', err)
          })
        setTimeout(() => {
          this.$http.post('https://www.sowerkbackend.com/api/license/byCompanyId/' + this.currentUser.companies_id, this.license)
            .then(response => {
              console.log(response.data, 'license submission success!!!!')
              if(response.data.license.documentVisible === false) {
                response.data.license.documentVisible = 'Unpublished'
              } else if (response.data.license.documentVisible === true) {
                response.data.license.documentVisible = 'Published'
              }
              this.licenseDocuments.push(response.data.license)
              this.successuploaddoc = true;
              this.license = {
                name: '',
                licenseNumber: '',
                licenseLocation: '',
                documentUrl: '',
                documentVisible: false,
                expirationDate: '',
              }
            })
            .catch(err => {
              console.log(err, 'err in submitting license', this.license)
              this.successuploaddoc = false;
            })
        }, 1000)
      },
      clickLicenseFileUpload() {
        console.log(this)
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyDocumentImage').click()
      },
      selectLicenseFile(e) {
        this.licenseFileFile = e.target.files[0]
        console.log(this.licenseFileFile)
        this.license.documentUrl = URL.createObjectURL(e.target.files[0])
        console.log(this.license.documentUrl, 'fileUrl')
        // this.selectFile(this.licenseFileFile);
        // this.selectNotesUrl( this.license.fileUrl);
      },
      readFile(e) {
        this.selectedFile = e.target.files[0]
        this.url = URL.createObjectURL(this.selectedFile)
        console.log(this.url, 'this.url')
        //this.selectFile(this.selectedFile)
      },
      selectFile(file) {
        this.licenseFileFile = file;
        console.log(this.licenseFileFile);
      },
      selectLicenseUrl(url) {
        this.license.documentUrl = url;
        console.log(this.license.documentUrl);
      },
      async openUploadModel(item) {
        console.log(item)
        this.chosenUploadFirstDocument = item;
        this.openUploadModelLoad = true;
      },
      async closeUploadModel() {
        this.openUploadModelLoad = false;
      },
      async removeLicense(licenseVal) {
        console.log(licenseVal, 'license to remove')
        await this.$http.delete('https://www.sowerkbackend.com/api/license/' + licenseVal.id)
          .then(response => {
            console.log('success in deleting license', response)
            this.licenseDocuments = this.licenseDocuments.filter(license => license.id !== licenseVal.id)
          })
          .catch(err => {
            console.log(err, 'issue in deleting license')
          })
      }
    }
  }
</script>

<style scoped>
</style>
