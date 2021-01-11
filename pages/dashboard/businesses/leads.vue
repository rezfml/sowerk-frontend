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
      <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="loading">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">
          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>
          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn what Customer Application Requests are and why they are important to your SOWerk Account.</p>
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
      <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logos with Icons-171.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px">What Are Customer Application Requests?</v-card-title>
            <v-card-text style="font-size: 18px;">Businesses every day are using SOWerk to find their next approved vendor. When they identify your account as a potential solution to their needs they can choose to request your application. To make things easier on you the Vendor any of these requests will all be shown here so that you can quickly review and apply.</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="white" color="mt-8" v-if="loading">
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-if="requestingApplications.length > 0 && loading">Application Requests - {{requestingApplications.length}}</v-card-title>
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-else-if="requestingApplications.length === 0 && loading">Application Requests - 0</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0 mt-8">
            <v-spacer></v-spacer>
            <v-col cols="4" class="py-0">
              <v-text-field v-model="search" label="Search By Facility, Address, or Name" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-data-table
          :items="requestingApplications"
          :headers="providerHeaders"
          :items-per-page="10"
          :search="search"
        >
          <template v-slot:item.imageUrl="{item}"  >
            <div style="width: 100%;" class="d-flex justify-center">
              <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
              <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
            </div>
          </template>
          <template v-slot:item.account_name="{item}">
            <div style="width: 100%;" class="d-flex flex-column align-center">
              <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.name}}</v-card-text>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </transition>

    <!--VENDOR'S PRE APPROVED BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logos with Icons-171.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px">What Are Pre Approved Customer Requests?</v-card-title>
            <v-card-text style="font-size: 18px;">Businesses every day are using SOWerk to find their next approved vendor. When they identify your account as a potential solution to their needs they can choose to pre approve you. To make things easier on you the Vendor any of these requests will all be shown here so that you can quickly accept or deny this request.</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="white" color="mt-8" v-if="loading">
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-if="requestingApprovedApplications.length > 0 && loading">Pre Approved Requests - {{requestingApprovedApplications.length}}</v-card-title>
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-else-if="requestingApprovedApplications.length === 0 && loading">Pre Approved Requests - 0</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0 mt-8">
            <v-spacer></v-spacer>
            <v-col cols="4" class="py-0">
              <v-text-field v-model="searchVal" label="Search By Facility, Address, or Name" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-data-table
          :items="requestingApprovedApplications"
          :headers="providerApprovedHeaders"
          :items-per-page="10"
          :search="searchVal"
        >
          <template v-slot:item.imageUrl="{item}"  >
            <div style="width: 100%;" class="d-flex justify-center">
              <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
              <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
            </div>
          </template>
          <template v-slot:item.account_name="{item}">
            <div style="width: 100%;" class="d-flex flex-column align-center">
              <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.name}}</v-card-text>
            </div>
          </template>
          <template v-slot:item.name="{item}">
            <div style="width: 100%;" class="d-flex flex-column align-center">
              <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.name}}</v-card-text>
            </div>
          </template>
          <template v-slot:item.userform_name="{item}">
            <div style="width: 100%;" class="d-flex flex-column align-center">
              <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.name}}</v-card-text>
            </div>
          </template>
          <template v-slot:item.actions="{ item }" class="d-flex">
            <v-btn color="primary" block class="my-2" >Accept</v-btn>
            <v-btn color="primary" block class="my-2" >Deny</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </transition>
  </v-app>
</template>

<script>
  export default {
    name: "leads",
    layout: "app",
    data() {
      return {
        search: '',
        searchVal: '',
        showVideo: false,
        company: {},
        loading: false,
        requestingApplications: [],
        providerHeaders: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-center'},
          { text: 'Company', value: 'account_name', class: 'primary--text font-weight-bold text-h6 text-center' },
          { text: '# Channels Inviting', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
        ],
        providerChannelHeaders: [
          { text: '', value: 'imgUrl', class: 'primary--text font-weight-bold text-h6 text-center'},
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
          { text: '# Applications Requested', value: 'userform_name', class: 'primary--text font-weight-bold text-h6 text-center' },
        ],
        providerApplicationHeaders: [
          { text: 'Application', value: 'userform_name', class: 'primary--text font-weight-bold text-h6 text-center' },
          { text: '# Questions', value: 'userform_name', class: 'primary--text font-weight-bold text-h6 text-center' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
        ],
        requestingApprovedApplications: [],
        providerApprovedHeaders: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-center'},
          { text: 'Company', value: 'account_name', class: 'primary--text font-weight-bold text-h6 text-center' },
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
          { text: 'Application', value: 'userform_name', class: 'primary--text font-weight-bold text-h6 text-center' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
        ],
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
    },
    methods: {
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        console.log('company from business/index: ', data.company_type);
        this.company = data;
        this.loading = true;
      },
      showVideoCard(){
        if(this.showVideo === false){
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      },
    }
  }
</script>

<style scoped>

</style>
