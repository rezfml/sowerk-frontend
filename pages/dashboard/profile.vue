<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;" class="d-flex flex-wrap justify-center">
        <v-col cols="12" md="4" sm="12" class="py-12" v-if="currentUser.is_superuser">
          <ProfileCard :showUploadCard="showUploadCard" :uploadCard="uploadCard" :editCompany="editCompany" :user="currentUser"></ProfileCard>
        </v-col>
        <v-col cols="12" md="8" sm="12" class="pb-12 d-flex flex-column" v-if="currentUser.is_superuser && !showUploadCard">
          <ProfileEditCard  :user="currentUser"></ProfileEditCard>
        </v-col>

        <!-- THIS IS THE DOCUMENT UPLOAD CARD! -->
        <transition name="slide-fade" >
          <v-col cols="12" md="8" class="pb-12 d-flex flex-column" v-if="currentUser.is_superuser && showUploadCard">

            <v-row class="mt-8">
              <v-col cols="12">
                <v-card>
                  <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Add New Documents</v-card-title>
                  <v-card-text class="pt-16 ml-4">Upload any company document or template that you will use to share with vendors to download, complete, and upload to SOWerk. Common items include master service agreements, independent contractor agreements, nondisclosure agreements, and tax examples.</v-card-text>
                  <v-btn @click="clickCompanyDocumentsImageUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4">Upload <v-icon>mdi-plus</v-icon></v-btn>
                  <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : companyDocument.documentUrl}" v-model="companyDocument.documentUrl" v-on:change.native="selectCompanyDocumentsImage" id="companyDocumentImage" style="display: none;"></v-file-input>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="mt-8">
              <v-col cols="12">
                <v-card>
                  <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Currently Listed Company Documents</v-card-title>
                  <v-data-table
                    class="pt-16"
                    :items="companyDocuments"
                    :headers="companyDocumentsHeaders"
                  >
                    <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
                      <v-btn @click="deleteCompanyDocument(item, index)" color="primary" class="my-1" style="width: 80%;">Remove</v-btn>
                      <v-btn :href="item.documentUrl" download color="#707070" class="my-1" style="width: 80%;">View</v-btn>
                    </template>
                  </v-data-table>
                </v-card>
              </v-col>
            </v-row>

          </v-col>
        </transition>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import ProfileCard from "~/components/dashboard/ProfileCard";
  import ProfileEditCard from "~/components/dashboard/ProfileEditCard";
  import CustomFormCard from "~/components/dashboard/CustomFormCard";
  export default {
    name: "profile",
    layout: "app",
    components: {
      ProfileCard,
      ProfileEditCard,
      CustomFormCard
    },
    data() {
      return {
        attrs: {
          class: 'mb-6',
          boilerplate: true,
          elevation: 2,
        },
        showUploadCard: false,
        companyDocumentImageUrl: null,
        companyDocumentImageFile: null,
        companyDocuments: [],
        companyDocument: {},
        loadYourCompanyDocuments: false,
        companyDocumentsHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Upload Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        company: {}
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    async mounted() {
      await this.getCompany(this.currentUser.companies_id);
      await this.getCompanyDocuments();
    },
    methods: {
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company')
            this.company = response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting company')
          })
      },
      uploadCard() {
        this.showUploadCard = true
        this.$vuetify.goTo(0)
      },
      editCompany() {
        this.showUploadCard = false
        this.$vuetify.goTo(0)
      },
      async getCompanyDocuments() {
        this.companyDocuments = [];
        if(this.company.company_type === 'true') {
          await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.currentUser.companies_id)
            .then(response => {
              console.log(response.data, 'companyDocuments response.data')
              this.companyDocuments = response.data;
            })
            .catch(err => {
              console.log(err, 'err in getting company documents for this company')
            })
        } else {
          await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byVendorCompanyId/' + this.currentUser.companies_id)
            .then(response => {
              console.log(response.data, 'companyDocuments response.data')
              this.companyDocuments = response.data;
            })
            .catch(err => {
              console.log(err, 'err in getting company documents for this company')
            })
        }
      },
      async deleteCompanyDocument(document, index) {
        await this.$http.delete('https://www.sowerkbackend.com/api/companydocuments/' + document.id)
          .then(response => {
            console.log(response, 'success in deleting company document')
            this.companyDocuments.splice(index, 1);
          })
          .catch(err => {
            console.log(err, 'err in deleting company document')
          })
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
              this.companyDocument.companies_id = this.currentUser.companies_id;
              console.log(this.companyDocument, 'THIS.COMPANY DOCUMENT')
              await this.$http.post('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.currentUser.companies_id, this.companyDocument)
                .then(response => {
                  console.log('response.data for on submitcompanydocumentimage')
                  this.getCompanyDocuments()
                })
                .catch(err => {
                  console.log('err in posting new company document')
                })
            })
            .catch(err => {
              console.log('error in uploading location image', err)
            })
        }, 250)
      },
    }
  };
</script>

<style scoped>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .7s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>



















