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
            <p style="font-size:1.1rem">Watch our short video to learn how to utilize the Requesting Documents function on SOWerk.</p>
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
        <div style="position:relative;border-radius:1%;">
          <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:900px;height:450px;margin-left:22%;border-radius:3%;">
          </iframe>
        </div>
      </v-card>
    </transition>
    <!--VENDOR'S BUSINESS SEARCH BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 99%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logo-174-174.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px; word-break: break-word; white-space: pre-wrap;">Manage Requesting Documents</v-card-title>
            <v-card-text style="font-size: 18px; word-break: break-word; white-space: pre-wrap;">Vendors can utilize the Requesting Documents page for uploading specific forms that businesses require in order to do business with vendors. By uploading your Requested Documents to SOWerk, this allows business to already have what they need to start vetting you for their jobs and projects moving forward.</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loading">
        <v-data-table
          :items="vendorDocuments"
          :headers="vendorHeaders"
          :items-per-page="5"
        >
          <template v-slot:item.documentName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <v-btn :href="item.documentUrl" text download color="#9A9A9A" class="my-1" style="width: 100%; height: 100%; color: #A61C00; background-color: lightgrey; text-align: left !important; align-self: flex-start">
              {{item.documentName}}</v-btn>
          </template>
          <template v-slot:item.created="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <v-btn color="#9A9A9A" class="my-1" style="width: 100%; height: 100%; color: #A61C00; background-color: lightgrey; text-align: left !important; align-self: flex-start">{{item.created.slice(0,4)}}</v-btn>
          </template>
          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
            <v-btn @click="openUploadModel(item)" color="primary" class="my-1" style="width: 80%; color: white;">Send Back To Business</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-row v-if="openUploadModelLoad" class="mt-8">
        <v-card style="background-color: white; height: 50vh; width: 100%;">
          <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Add New Documents</v-card-title>
          <v-card-text class="pt-16 ml-4">Upload any company document or template that you will use to share with vendors to download, complete, and upload to SOWerk. Common items include master service agreements, independent contractor agreements, nondisclosure agreements, and tax examples.</v-card-text>
          <v-btn @click="clickCompanyDocumentsImageUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4">Upload <v-icon>mdi-plus</v-icon></v-btn>
          <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : companyDocument.documentUrl}" v-model="companyDocument.documentUrl" v-on:change.native="selectCompanyDocumentsImage" id="companyDocumentImage" style="display: none;"></v-file-input>
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
        vendorDocuments: [],
        vendorHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Upload Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
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
      await this.getVendorProvidedDocuments();
    },
    methods: {
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
      async getVendorProvidedDocuments() {
        await this.$http.get('https://www.sowerkbackend.com/api/vendordocuments/byVendorVendorId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'response for vendor docs')
            this.vendorDocuments = response.data
          })
          .catch(err => {
            console.log(err, 'err in getting list')
          })

        this.loading = true;
      },
      async clickCompanyDocumentsImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyDocumentImage').click();
      },
      async selectCompanyDocumentsImage(e) {
        this.companyDocument.documentUrl = e.target.files[0];
        this.companyDocument.documentName = e.target.files[0].name;
        this.companyDocument.required = true;
        this.companyDocument.vendor_channelsId = this.chosenUploadFirstDocument.vendor_channelsId;
        this.companyDocument.vendor_companiesId = this.chosenUploadFirstDocument.vendor_companiesId;
        this.companyDocument.companies_id = this.chosenUploadFirstDocument.companies_id;
        console.log(this.companyDocumentImageFile);
        this.companyDocumentImageUrl = URL.createObjectURL(this.companyDocument.documentUrl);
        console.log(this.companyDocumentImageUrl);
        setTimeout(() => {
          let formData = new FormData();
          formData.append('file', this.companyDocument.documentUrl);
          console.log(formData, 'formdata');
          this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
            .then(async (response) => {
              console.log(response, 'response.data for company document upload')
              this.companyDocument.documentUrl = response.data.data.Location;
              console.log(this.companyDocument, 'THIS.COMPANY DOCUMENT')
              await this.$http.post('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.chosenUploadFirstDocument.companies_id, this.companyDocument)
                .then(response => {
                  console.log(response, 'response.data for on submitcompanydocumentimage')
                  // this.getCompanyDocuments()
                  this.successuploaddoc = true;
                })
                .catch(err => {
                  console.log('err in posting new company document')
                  this.successuploaddoc = false;
                })
            })
            .catch(err => {
              console.log('error in uploading location image', err)
            })
        }, 250)
      },
      async openUploadModel(item) {
        console.log(item)
        this.chosenUploadFirstDocument = item;
        this.openUploadModelLoad = true;
      },
      async closeUploadModel() {
        this.openUploadModelLoad = false;
      },
    }
  }
</script>

<style scoped>

</style>
