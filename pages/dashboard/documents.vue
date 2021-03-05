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

    <!-- VIMEO VIDEO -->
    <transition name="slide-fade">
      <v-card style="height:450px;width:100%;background-color:#404040;border-radius:10px;" v-if="showVideo === true">
        <div style="border-radius:10px;">
          <iframe src="https://player.vimeo.com/video/505426973" allowfullscreen frameborder="0" style="width:100%;height:450px;border-radius:10px;">
          </iframe>
        </div>
      </v-card>
    </transition>

    <!--VENDOR'S BUSINESS SEARCH BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 99%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/files-documents-SoWork-Logo-174.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px; word-break: break-word; white-space: pre-wrap;" v-if="company.company_type === 'false'">Manage Requesting Documents</v-card-title>
            <v-card-title style="color:darkred; font-size: 24px; word-break: break-word; white-space: pre-wrap;" v-else>Manage Requested Documents</v-card-title>
            <v-card-text style="font-size: 18px; word-break: break-word; white-space: pre-wrap;" v-if="company.company_type === 'false'">Vendors can utilize the Requesting Documents page for uploading specific forms that businesses require in order to do business with vendors. By uploading your Requested Documents to SOWerk, this allows business to already have what they need to start vetting you for their jobs and projects moving forward.</v-card-text>
            <v-card-text style="font-size: 18px; word-break: break-word; white-space: pre-wrap;" v-else>Businesses can utilize the Requested Documents page for uploading specific forms that businesses require in order to do business with vendors. By uploading your Requested Documents to SOWerk, this allows business to already have what they need to start vetting you for their jobs and projects moving forward.</v-card-text>
            <v-row class="d-flex flex-wrap justify-center align-center">
              <v-btn @click="requestDocumentsModalLoad" style="width: 45%; border-radius: 5px;" class="mx-2 my-2 py-8" color="primary" outlined v-if="company.company_type === 'false'">Requesting Documents</v-btn>
              <v-btn @click="requestDocumentsModalLoad" style="width: 45%; border-radius: 5px;" class="mx-2 my-2 py-8" color="primary" outlined v-else>Pending Documents</v-btn>
              <v-btn @click="allDocumentsModalLoad" style="width: 45%; border-radius: 5px;" class="mx-2 my-2 py-8" color="primary">All Documents</v-btn>
              <v-btn @click="requestingDocumentsModalLoad" style="width: 45%; border-radius: 5px;" class="mx-2 my-2 py-8" color="#7C7C7C" v-if="company.company_type === 'true'" outlined>Request A Document</v-btn>
              <v-btn @click="uploadDocumentsModalLoad" style="width: 45%; border-radius: 5px; color: white;" class="mx-2 my-2 py-8" color="#7C7C7C" v-if="company.company_type === 'true'">Upload</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loading && requestDocumentsModalLoading">
        <v-card-title v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm && company.company_type==='false'" style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Requesting Documents</v-card-title>
        <v-card-title v-else-if="company.company_type==='false'" style="position: absolute; top: -30px; left: 0px; width: 100%; border-radius: 3px; font-size: .95rem;" class="primary white--text font-weight-regular red-gradient">Requesting Documents</v-card-title>
        <v-card-title v-else-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm && company.company_type==='true'" style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Pending Documents</v-card-title>
        <v-card-title v-else-if="company.company_type==='true'" style="position: absolute; top: -30px; left: 0px; width: 100%; border-radius: 3px; font-size: .95rem;" class="primary white--text font-weight-regular red-gradient">Pending Documents</v-card-title>
        <v-text-field clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Document Name" v-model="searchDocument" light></v-text-field>
        <p style="font-size:.8rem;text-align:center;width:100%;margin-top:-15px;">A list of documents a Business account has requested of their approved Vendor(s) that are open and not returned.</p>
        <p style="font-size:.8rem;text-align:center;width:100%;margin-top:-12px;">Upon being returned items once listed here are removed automatically and will appear in All Documents</p>
        <v-data-table
          :items="vendorDocuments"
          :headers="vendorBusinessHeaders"
          :items-per-page="5"
          class="mt-12"
          :search="searchDocument"
          v-if="company.company_type === 'true'"
        >
          <template v-slot:item.documentName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.documentName}}</p>
          </template>
          <template v-slot:item.created="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.created.slice(0,10)}}</P>
          </template>
          <template v-slot:item.vendorCompanyName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.vendorCompanyName}}</p>
            <p>{{item.vendorChannelName}}</p>
          </template>
          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
            <v-btn :href="item.documentUrl" download color="primary" outlined class="my-1" style="width: 80%; color: white;">Download + View</v-btn>
            <v-btn @click="resend(item)" color="white" outlined class="my-1" style="width: 80%; background-color: #7C7C7C;">Resend</v-btn>
          </template>
        </v-data-table>
        <v-data-table
          :items="vendorDocuments"
          :headers="vendorHeaders"
          :items-per-page="5"
          class="mt-12"
          :search="searchDocument"
          v-else
        >
          <template v-slot:item.documentName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.documentName}}</p>
          </template>
          <template v-slot:item.created="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.created.slice(0,10)}}</P>
          </template>
          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
            <v-btn :href="item.documentUrl" download color="primary" outlined class="my-1" style="width: 80%; color: white;">Download + View</v-btn>
            <v-btn @click="openUploadModel(item)" color="primary" class="my-1" style="width: 80%; color: white;">Send Back To Business</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loading && allDocumentsModalLoading">
        <v-card-title v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">All Documents</v-card-title>
        <v-card-title v-else style="position: absolute; top: -30px; left: 0px; width: 100%; border-radius: 3px; font-size: .95rem;" class="primary white--text font-weight-regular red-gradient">All Documents</v-card-title>
        <v-text-field clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Document Name" v-model="searchDocument" light></v-text-field>
        <v-data-table
          :search="searchDocument"
          :items="companyDocuments"
          :headers="vendorHeaders"
          :items-per-page="5"
          class="mt-12"
        >
          <template v-slot:item.documentName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.documentName}}</p>
          </template>
          <template v-slot:item.created="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.created.slice(0,4)}}</P>
          </template>
          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
            <v-btn :href="item.documentUrl" download color="primary" outlined class="my-1" style="width: 80%; color: white;">Download + View</v-btn>
            <v-btn @click="deleteDocument(item)" color="primary" class="my-1" style="width: 80%; color: white;">Delete Document</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loading && requestingDocumentsModalLoading">
        <v-card-title v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Request A Document</v-card-title>
        <v-card-title v-else style="position: absolute; top: -30px; left: 0px; width: 100%; border-radius: 3px; font-size: .95rem;" class="primary white--text font-weight-regular red-gradient">Request A Document</v-card-title>
        <v-data-table
          :items-per-page="5"
          class="mt-12"
          :items="companyTemplateDocuments"
          :headers="vendorApprovedHeaders"
        >
          <template v-slot:item.documentName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.documentName}}</p>
          </template>
          <template v-slot:item.created="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
            <p>{{item.created.slice(0,4)}}</P>
          </template>
          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
            <v-btn @click="deleteCompanyDocument(item, index)" color="primary" class="my-1" style="width: 80%;" v-if="currentUser.is_superuser">Remove</v-btn>
            <v-btn :href="item.documentUrl" download color="#707070" class="my-1" style="width: 80%; color: white;">View</v-btn>
            <v-btn @click="selectVendor(item)" color="primary" class="my-1" style="width: 80%;">Send To Vendor</v-btn>
          </template>
        </v-data-table>
<!--        THIS WAS THE ORIGINAL FEATURE FOR A BUSINESS TO REQUEST A DOCUMENT FROM A VENDOR AND THE VENDORS LIST OF DOCUMENTS. NEW FEATURE IS BUSINESS SENDING THEIR DOCUMENT TO A VENDOR-->
<!--        <v-select-->
<!--          class="mt-12"-->
<!--          label="Please Select A Vendor From Your Approved Vendors List To Request One of Their Documents"-->
<!--          :items="approvedVendors"-->
<!--          style="width: 80%;"-->
<!--        >-->
<!--          <template slot="selection" slot-scope="data">-->
<!--            <p @click="seeListOfCompanyDocuments(data.item)" style="width: 100%;">{{ data.item.account_name }}</p>-->
<!--          </template>-->
<!--          <template slot="item" slot-scope="data">-->
<!--            <p @click="seeListOfCompanyDocuments(data.item)" style="width: 100%;">{{ data.item.account_name }}</p>-->
<!--          </template>-->
<!--        </v-select>-->
<!--        <v-text-field clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Document Name" v-model="searchDocument" light></v-text-field>-->
<!--        <v-data-table-->
<!--          :items="approvedCompanyDocuments"-->
<!--          :headers="vendorApprovedHeaders"-->
<!--          :search="searchDocument"-->
<!--          :items-per-page="5"-->
<!--          class="mt-12"-->
<!--          style="width: 80%;"-->
<!--        >-->
<!--          <template v-slot:item.documentName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">-->
<!--            <p>{{item.documentName}}</p>-->
<!--          </template>-->
<!--          <template v-slot:item.created="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">-->
<!--            <p>{{item.created.slice(0,4)}}</P>-->
<!--          </template>-->
<!--          <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">-->
<!--            <v-btn @click="requestDocument(item)" color="primary" class="my-1" style="width: 80%; color: white;">Request Document</v-btn>-->
<!--          </template>-->
<!--        </v-data-table>-->
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loading && uploadDocumentsModalLoading">
        <v-card-title v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Upload</v-card-title>
        <v-card-title v-else style="position: absolute; top: -30px; left: 0px; width: 100%; border-radius: 3px; font-size: .95rem;" class="primary white--text font-weight-regular red-gradient">Upload</v-card-title>
        <v-row class="mt-8">
          <v-col cols="12">
              <v-card-text class="pt-16 ml-4">Upload any company document or template that you will use to share with vendors to download, complete, and upload to SOWerk. Common items include master service agreements, independent contractor agreements, nondisclosure agreements, and tax examples.</v-card-text>
              <v-btn @click="clickUploadCompanyDocumentsImageUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4">Upload <v-icon>mdi-plus</v-icon></v-btn>
              <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : companyUploadDocument.documentUrl}" v-model="companyUploadDocument.documentUrl" v-on:change.native="selectUploadCompanyDocumentsImage" id="companyDocumentImage" style="display: none;"></v-file-input>
          </v-col>
        </v-row>
        <v-title style="text-align: center; font-size: 24px; color: #A61c00;" class="my-2" v-if="successuploaddocument !== null && successuploaddocument === false">Error with adding this document. Please retry.</v-title>
        <v-title style="text-align: center; font-size: 24px; color: #A61c00;" class="my-2" v-if="successuploaddocument">Successfully added this document!</v-title>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-row v-if="openUploadModelLoad" class="mt-8">
        <v-card class="d-flex flex-column align-center" style="background-color: white; height: 50vh; width: 100%;">
          <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Add New Documents</v-card-title>
          <v-card-text class="pt-16 ml-4" v-if="company.company_type==='true'">Upload any company document or template that you will use to share with vendors to download, complete, and upload to SOWerk. Common items include master service agreements, independent contractor agreements, nondisclosure agreements, and tax examples.</v-card-text>
          <v-card-text class="pt-16 ml-4" v-else>Upload any company document or template that you will use to share with businesses to download, complete, and upload to SOWerk. Common items include master service agreements, independent contractor agreements, nondisclosure agreements, and tax examples.</v-card-text>
          <v-btn @click="clickCompanyDocumentsImageUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4">Upload <v-icon>mdi-plus</v-icon></v-btn>
          <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : companyDocument.documentUrl}" v-model="companyDocument.documentUrl" v-on:change.native="selectCompanyDocumentsImage" id="companyDocumentImage" style="display: none;"></v-file-input>
          <v-title style="text-align: center; font-size: 24px; color: #A61c00;" class="my-2" v-if="successuploaddoc !== null && successuploaddoc === false">Error with adding this document. Please retry.</v-title>
          <v-title style="text-align: center; font-size: 24px; color: #A61c00;" class="my-2" v-if="successuploaddoc">Successfully added this document!</v-title>
          <v-btn @click="closeUploadModel" style="position: absolute; top: 10px; right: 10px; font-size: 25px;" color="primary">X</v-btn>
        </v-card>
      </v-row>
    </transition>

    <v-overlay
      :absolute="absolute"
      :value="openRequestDocLoad"
    >
      <transition name="slide-fade">
          <v-card class="d-flex flex-column align-center" light v-if="openRequestDocLoad" style="height: 50vh; width: 80vw;">
            <v-autocomplete
              class="mt-12"
              label="Please Select A Category That Goes With Your Message"
              v-model="messageService"
              :items="naicsList"
              item-text="name"
              style="width: 80%;"
              return-object
            >
            </v-autocomplete>
            <v-autocomplete
              class="mt-12"
              label="Please Select A Vendor Channel That Goes With Your Message"
              v-model="messageVendorLocationChosen"
              :items="messageVendorLocations"
              item-text="name"
              style="width: 80%;"
              return-object
            >
            </v-autocomplete>
            <v-autocomplete
              class="mt-12"
              label="Please Select A Business Channel That Goes With Your Message"
              v-model="messageBusinessLocationChosen"
              :items="company.locations"
              item-text="name"
              style="width: 80%;"
              return-object
            >
            </v-autocomplete>
            <v-btn @click="requestSend" style="font-size: 25px;" color="primary">Request</v-btn>
            <v-title style="text-align: center; font-size: 24px; color: #A61c00;" class="my-2" v-if="successrequestdoc !== null && successrequestdoc === false">Error with requesting this document. Please retry.</v-title>
            <v-title style="text-align: center; font-size: 24px; color: #A61c00;" class="my-2" v-if="successrequestdoc">Successfully requested this document!</v-title>
            <v-btn @click="closeRequestDocLoad" style="position: absolute; top: 10px; right: 10px; font-size: 25px;" color="primary">X</v-btn>
          </v-card>
      </transition>
    </v-overlay>
  </v-app>
</template>

<script>
  export default {
    name: "home",
    layout: "app",
    data() {
      return {
        searchDocument: '',
        successrequestdoc: null,
        messageVendorLocations: [],
        messageVendorLocationChosen: {},
        messageBusinessLocationChosen: {},
        message: {},
        absolute: true,
        openRequestDocLoad: false,
        filteredList: [],
        approvedCompanyDocuments: [],
        approvedVendors: [],
        companyUploadDocument: {

        },
        companyTemplateDocuments: [],
        successuploaddocument: null,
        requestDocumentsModalLoading: true,
        allDocumentsModalLoading: false,
        requestingDocumentsModalLoading: false,
        uploadDocumentsModalLoading: false,
        vendorDocuments: [],
        vendorHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Sent Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Recipient', value: 'vendorCompanyName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        vendorBusinessHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Sent Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Recipient', value: 'vendorCompanyName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        vendorApprovedHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Upload Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
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
        companyDocuments: [],
        companyUploadDocumentImageUrl: null,
        companyUploadDocumentImageFile: null,
        naicsList: [],
        messageService: {},
        chosenDoc: {},
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
      if(this.company.company_type==='true') {
        await this.getApprovedVendors();
        await this.getNaicsList();
      }
    },
    methods: {
      async getNaicsList() {
        await this.$http.get('https://www.sowerkbackend.com/api/naicslist')
          .then(response => {
            console.log('naicslist', response)
            this.naicsList = response.data.sort((a,b) => {
              return b.timesUsed-a.timesUsed;
            })
          })
          .catch(err => {
            console.log(err, 'err on getting naicslist')
          })
      },
      async requestSend() {
        let messageObj = {
          message: `Hello, ${this.company.account_name} is requesting you send them the company document titled ${this.chosenDoc.documentName}`,
          spLocationName: this.messageVendorLocationChosen.name,
          spLocationId: this.messageVendorLocationChosen.id,
          spMessageRead: false,
          pmMessageRead: false,
          location: `${this.messageBusinessLocationChosen.name} - ${this.messageBusinessLocationChosen.address} ${this.messageBusinessLocationChosen.city}, ${this.messageBusinessLocationChosen.state} ${this.messageBusinessLocationChosen.zipcode}`,
          primary_contact_first_name: this.currentUser.first_name,
          primary_contact_last_name: this.currentUser.last_name,
          company: this.company.account_name,
          service: this.messageService.name,
          userprofiles_id: this.currentUser.id,
          recieversId: this.messageVendorLocationChosen.companies_id,
        }
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.messageVendorLocationChosen.companies_id, messageObj)
          .then(response => {
            console.log('HELLO', response.data)
            this.successrequestdoc = true;
          })
          .catch(err => {
            console.log(err, messageObj)
            this.successrequestdoc = false;
          })
      },
      async closeRequestDocLoad() {
        this.openRequestDocLoad = false
        this.searchDocument = '';
      },
      async requestDocument(item) {
        console.log(item, 'hey!')
        this.chosenDoc = item
        this.openRequestDocLoad = true
        this.searchDocument = '';
        this.successrequestdoc = null;
        await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + item.companies_id)
          .then(response => {
            console.log('HELLO', response.data)
            this.messageVendorLocations = response.data.location
          })
          .catch(err => {
            console.log(err)
          })
      },
      async seeListOfCompanyDocuments(item) {
        console.log(item, "HEY")
        this.approvedCompanyDocuments = [];
        this.searchDocument = '';
        await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + item.id)
          .then(response => {
            console.log(response.data, 'response for company docs')
            if(response.data.length > 0 && response.data[0] !== 'There are no company documents') {
              for(let i=0; i<response.data.length; i++) {
                this.approvedCompanyDocuments.push(response.data[i])
              }
            }
          })
          .catch(err => {
            console.log(err, 'err in getting list')
          })
      },
      async getApprovedVendors() {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'APPROVED')
              let setObj = new Set();
            this.filteredList = response.data.filter(item => item.pmcompanies_id === this.currentUser.companies_id)
            this.filteredList = this.filteredList.filter(el => {
              const duplicateVal = setObj.has(el.pmcompanies_id);
              setObj.add(el.pmcompanies_id);
              return !duplicateVal;
            })
            this.getCompanyList();
          })
          .catch(err => {
            console.log(err, 'err in getting list')
          })
      },
      async getCompanyList() {
        for(let i=0; i<this.filteredList.length; i++) {
          this.$http.get('https://www.sowerkbackend.com/api/companies/inviteid/' + this.filteredList[i].spcompanies_id)
            .then(response => {
              console.log(response.data, 'APPROVED COMPANY IN FOR LOOP')
              this.approvedVendors.push(response.data)
            })
            .catch(err => {
              console.log(err, 'err in getting list')
            })
        }
      },
      async requestDocumentsModalLoad() {
        this.requestDocumentsModalLoading = true
        this.allDocumentsModalLoading = false
        this.requestingDocumentsModalLoading = false
        this.uploadDocumentsModalLoading = false
        this.openUploadModelLoad = false;
        this.searchDocument = '';
      },
      async allDocumentsModalLoad() {
        this.requestDocumentsModalLoading = false
        this.allDocumentsModalLoading = true
        this.requestingDocumentsModalLoading = false
        this.uploadDocumentsModalLoading = false
        this.companyDocuments = [];
        await this.getDocuments();
        await this.getVendorProvidedDocuments();
        this.openUploadModelLoad = false;
        this.searchDocument = '';
      },
      async requestingDocumentsModalLoad() {
        this.requestDocumentsModalLoading = false
        this.allDocumentsModalLoading = false
        this.requestingDocumentsModalLoading = true
        this.uploadDocumentsModalLoading = false
        this.openUploadModelLoad = false;
        this.companyTemplateDocuments = [];
        this.searchDocument = '';
        await this.getDocuments();
      },
      async uploadDocumentsModalLoad() {
        this.successuploaddocument = null;
        this.requestDocumentsModalLoading = false
        this.allDocumentsModalLoading = false
        this.requestingDocumentsModalLoading = false
        this.uploadDocumentsModalLoading = true
        this.openUploadModelLoad = false;
        this.searchDocument = '';
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
      async getDocuments() {
        if(this.company.company_type === 'false') {
          await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byVendorCompanyId/' + this.currentUser.companies_id)
            .then(response => {
              console.log(response.data, 'response for vendor docs')
              this.companyDocuments = response.data
            })
            .catch(err => {
              console.log(err, 'err in getting list')
            })
        }
        await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'response for company docs')
            if(response.data.length > 0 && response.data[0] !== 'There are no company documents') {
              for(let i=0; i<response.data.length; i++) {
                if(this.company.company_type === 'false') {
                  this.companyDocuments.push(response.data[i])
                } else if (this.company.company_type === 'true' && response.data[i].vendor_companiesId === null) {
                  this.companyTemplateDocuments.push(response.data[i])
                } else if (this.company.company_type === 'true' && response.data[i].vendor_companiesId !== null) {
                  this.companyDocuments.push(response.data[i])
                }
              }
            }
          })
          .catch(err => {
            console.log(err, 'err in getting list')
          })
        if(this.company.company_type === "true") {
          await this.getDocumentChannelCompany();
        }
        this.loading = true;
      },
      async getVendorProvidedDocuments() {
        if(this.company.company_type === 'false') {
          await this.$http.get('https://www.sowerkbackend.com/api/vendordocuments/byVendorVendorId/' + this.currentUser.companies_id)
            .then(response => {
              console.log(response.data, 'response for vendor docs')
              this.vendorDocuments = response.data
            })
            .catch(err => {
              console.log(err, 'err in getting list')
            })
        } else {
          await this.$http.get('https://www.sowerkbackend.com/api/vendordocuments/byCompaniesId/' + this.currentUser.companies_id)
            .then(response => {
              console.log(response.data, 'response for company docs')
              if(response.data.length > 0 && response.data[0] !== 'There are no company documents') {
                for(let i=0; i<response.data.length; i++) {
                  if (this.company.company_type === 'true' && response.data[i].vendor_companiesId !== null) {
                    let vendorDoc = {
                      companies_id: response.data[i].companies_id,
                      created: response.data[i].created,
                      documentName: response.data[i].documentName,
                      documentUrl: response.data[i].documentUrl,
                      id: response.data[i].id,
                      modified: response.data[i].modified,
                      required: response.data[i].required,
                      vendor_channelsId: response.data[i].vendor_channelsId,
                      vendor_companiesId: response.data[i].vendor_companiesId,
                      vendorCompanyName: null,
                      vendorChannelName: null,
                    }
                    this.vendorDocuments.push(vendorDoc)
                    this.companyDocuments.push(vendorDoc)
                  }
                }
              }
            })
            .catch(err => {
              console.log(err, 'err in getting list')
            })
        }
        if(this.company.company_type === "true") {
          await this.getVendorDocumentChannelCompany();
        }
        this.loading = true;
      },
      async getDocumentChannelCompany() {
        for(let i=0; i<this.companyTemplateDocuments.length; i++) {
          this.$http.get('https://www.sowerkbackend.com/api/locations-name/' + this.companyTemplateDocuments[i].vendor_channelsId)
            .then(response => {
              console.log(response.data, 'LOCATION VENDOR DOC')
              this.companyTemplateDocuments[i].vendorChannelName = response.data.name;
            })
            .catch(err => {
              console.log(err)
            })
          this.$http.get('https://www.sowerkbackend.com/api/companies/inviteid/' + this.companyTemplateDocuments[i].vendor_companiesId)
            .then(response => {
              console.log(response.data, 'LOCATION VENDOR DOC')
              this.companyTemplateDocuments[i].vendorCompanyName = response.data.account_name;
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      async getVendorDocumentChannelCompany() {
        for(let i=0; i<this.vendorDocuments.length; i++) {
          this.$http.get('https://www.sowerkbackend.com/api/locations-name/' + this.vendorDocuments[i].vendor_channelsId)
            .then(response => {
              console.log(response.data, 'LOCATION VENDOR DOC')
              this.vendorDocuments[i].vendorChannelName = response.data.name;
            })
            .catch(err => {
              console.log(err)
            })
          this.$http.get('https://www.sowerkbackend.com/api/companies/inviteid/' + this.vendorDocuments[i].vendor_companiesId)
            .then(response => {
              console.log(response.data, 'LOCATION VENDOR DOC')
              this.vendorDocuments[i].vendorCompanyName = response.data.account_name;
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      async resend(item) {
        let resendObj = {...item}
        console.log(resendObj, 'hey')
      },
      async clickCompanyDocumentsImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyDocumentImage').click();
      },
      async selectCompanyDocumentsImage(e) {
        if(this.company.company_type==='false') {

        }
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
      async deleteDocument(doc) {
        console.log(doc);
        await this.$http.delete('https://www.sowerkbackend.com/api/companydocuments/' + doc.id)
          .then(response => {
            console.log(response, 'success in deleting doc')
            this.companyDocuments = this.companyDocuments.filter(item => item !== doc);
          })
          .catch(err => {
            console.log(err, 'err in deleting doc')
          })
      },
      async clickUploadCompanyDocumentsImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyDocumentImage').click();
      },
      async selectUploadCompanyDocumentsImage(e) {
        this.companyUploadDocument.documentUrl = e.target.files[0];
        this.companyUploadDocument.documentName = e.target.files[0].name;
        this.companyUploadDocument.required = true;
        console.log(this.companyUploadDocumentImageFile);
        this.companyUploadDocumentImageUrl = URL.createObjectURL(this.companyUploadDocument.documentUrl);
        console.log(this.companyUploadDocumentImageUrl);
        setTimeout(() => {
          let formData = new FormData();
          formData.append('file', this.companyUploadDocument.documentUrl);
          console.log(formData, 'formdata');
          this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
            .then(async (response) => {
              console.log(response, 'response.data for company document upload')
              this.companyUploadDocument.documentUrl = response.data.data.Location;
              this.companyUploadDocument.companies_id = this.currentUser.companies_id;
              console.log(this.companyDocument, 'THIS.COMPANY DOCUMENT')
              await this.$http.post('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.currentUser.companies_id, this.companyUploadDocument)
                .then(response => {
                  console.log('response.data for on submitcompanydocumentimage')
                  this.successuploaddocument = true;
                })
                .catch(err => {
                  console.log('err in posting new company document')
                  this.successuploaddocument = false;
                })
            })
            .catch(err => {
              console.log('error in uploading location image', err)
            })
        }, 250)
      },
    }
  }
</script>

<style scoped>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
