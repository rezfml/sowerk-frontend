<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>
    <transition name="slide-fade">
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
    </transition>

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
      <v-card style="height:460px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true">
        <div style="position:relative;border-radius:1%;">
          <v-btn @click="showVideoCard" style="margin-left:2%;margin-top:2%;background-color:darkred;color:white;">X</v-btn>
          <iframe src="https://player.vimeo.com/video/505426810" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:900px;height:450px;margin-left:10%;border-radius:3%;margin-top:5px;">
          </iframe>
        </div>
      </v-card>
    </transition>
    <!--VENDOR'S BUSINESS SEARCH BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="\SoWork Logo-180.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px">What Are Customer Leads?</v-card-title>
            <v-card-text style="font-size: 18px;">Businesses every day are using SOWerk to find their next approved vendor. When they identify your account as a potential solution to their needs they can choose to request your application. To make things easier on you the Vendor any of these requests will all be shown here so that you can quickly review and apply.</v-card-text>
            <v-btn @click="applicationRequestsModalOpen" class="my-2 py-6 mx-auto my-auto" style="width: 80%" rounded color="primary">Application Requests</v-btn>
            <v-btn @click="preApprovedRequestsModalOpen" class="my-2 py-6 mx-auto my-auto" style="width: 80%" rounded color="primary">Pre Approved Requests</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card color="mt-8" v-if="loading && applicationRequestsModal">
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-if="requestingApplications.length > 0 && loading">Application Requests - {{requestingApplications.length}}</v-card-title>
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-else-if="requestingApplications.length === 0 && loading">Application Requests - 0</v-card-title>
        <v-text-field background-color="white" clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Facility Name" v-model="search" light></v-text-field>
        <v-data-table
          :items="requestingApplicationsList"
          :headers="providerHeaders"
          :items-per-page="10"
          item-key="companyId"
          :search="search"
          :expanded.sync="expanded"
          show-expand
          single-expand
        >
          <template v-slot:item.companyName="{item}">
            <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word; color: #A61c00;">{{item.companyName}}</v-card-text>
          </template>
          <template v-slot:item.channelsInviting.length="{item}">
            <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word; color: #A61c00;">{{item.channelsInviting.length}}</v-card-text>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-text-field clearable background-color="white" outlined class="pt-4" style="width: 80%; margin-left: 10%;" label="Search By Channel Name" v-model="searchChannel" light></v-text-field>
              <v-data-table
                :items="item.channelsInviting"
                :headers="providerChannelHeaders"
                :items-per-page="10"
                item-key="id"
                :search="searchChannel"
                :expanded.sync="expandedChannel"
                show-expand
                single-expand
              >
                <template v-slot:item.name="{item}">
                    <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word; color: #A61c00;">{{item.name}}</v-card-text>
                </template>
                <template v-slot:item.userforms.length="{item}" >
                    <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word; color: #A61c00;">{{item.userforms.length}}</v-card-text>
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                  <td :colspan="headers.length">
                    <v-text-field clearable background-color="white" outlined class="pt-4" style="width: 80%; margin-left: 10%;" label="Search By Application Name" v-model="searchChannelApp" light></v-text-field>
                    <v-data-table
                      :items="item.userforms"
                      :headers="providerApplicationHeaders"
                      :items-per-page="10"
                      :search="searchChannelApp"
                    >
                      <template v-slot:item.name="{item}" >
                        <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word; color: #A61c00;">{{item.name}}</v-card-text>
                      </template>
                      <template v-slot:item.actions="{ item }">
                        <v-btn class="my-1" block color="primary" :to="'/dashboard/businesses/' + item.locations_id + '/applications/' + item.id">Apply</v-btn>
                        <v-btn class="my-1" block color="primary">Deny</v-btn>
                      </template>
                    </v-data-table>
                  </td>
                </template>
              </v-data-table>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </transition>

<!--    &lt;!&ndash;VENDOR'S PRE APPROVED BANNER &ndash;&gt;-->
<!--    <transition name="slide-fade">-->
<!--      <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">-->
<!--        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">-->
<!--          <v-col cols="7" style="">-->
<!--            <v-img height="400px" src="/SoWork Logos with Icons-171.png"></v-img>-->
<!--          </v-col>-->

<!--          <v-col cols="5" class="d-flex flex-column justify-center">-->
<!--            <v-card-title style="color:darkred; font-size: 24px">What Are Pre Approved Customer Requests?</v-card-title>-->
<!--            <v-card-text style="font-size: 18px;">Businesses every day are using SOWerk to find their next approved vendor. When they identify your account as a potential solution to their needs they can choose to pre approve you. To make things easier on you the Vendor any of these requests will all be shown here so that you can quickly accept or deny this request.</v-card-text>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-card>-->
<!--    </transition>-->

    <transition name="slide-fade">
      <v-card class="mt-8 mb-4" color="white" v-if="loading && preApprovedRequestsModal">
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-if="requestingApprovedApplications.length > 0 && loading">Pre Approved Requests - {{requestingApprovedApplications.length}}</v-card-title>
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-else-if="requestingApprovedApplications.length === 0 && loading">Pre Approved Requests - 0</v-card-title>
        <v-text-field clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Facility, Address, or Name" v-model="searchVal" light></v-text-field>
        <v-data-table
          :items="requestingApprovedApplications"
          :headers="providerApprovedHeaders"
          :items-per-page="10"
          :search="searchVal"
          :loading="loadRequestingApprovedApplications"
          loading-text="Loading... Please wait"
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
          <template v-slot:item.actions="{ item }" class="d-flex">
            <v-btn color="primary" block class="my-2" @click="acceptPreApp(item)">Accept</v-btn>
            <v-btn color="primary" block class="my-2" @click="denyPreApp(item)">Deny</v-btn>
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
        expanded: [],
        expandedChannel: [],
        loadRequestingApprovedApplications: true,
        search: '',
        searchChannel: '',
        searchVal: '',
        searchChannelApp: '',
        showVideo: false,
        company: {},
        loading: false,
        requestingApplications: [],
        requestingApplicationsList: [],
        providerHeaders: [
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
          { text: '# Channels Inviting', value: 'channelsInviting.length', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
        ],
        providerChannelHeaders: [
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
          { text: '# Applications Requested', value: 'userforms.length', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
        ],
        providerApplicationHeaders: [
          { text: 'Application', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left' },
        ],
        requestingApprovedApplications: [],
        providerApprovedHeaders: [
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
          { text: 'Channel', value: 'channelName', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left' },
        ],
        applicationRequestsModal: true,
        preApprovedRequestsModal: false,
        singleExpand: true,
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
      await this.getApplicationRequests();
    },
    methods: {
      async applicationRequestsModalOpen() {
        this.applicationRequestsModal = true
        this.preApprovedRequestsModal = false
        await this.getApplicationRequests();
      },
      async getApplicationRequests() {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/bySPId/' + this.currentUser.companies_id)
          .then(response => {
            this.requestingApplications = response.data.filter(app => app.approval_status === 3);
            console.log(this.requestingApplications, 'HEY')
            this.loading = true;
            if(this.requestingApplications.length > 0) {
              for(let i=0; i<this.requestingApplications.length; i++) {
                let companyObj = {
                  companyId: this.requestingApplications[i].pmcompanies_id,
                  companyName: '',
                  channelsInviting: [],
                }
                this.$http.get('https://www.sowerkbackend.com/api/companies/inviteid/' + companyObj.companyId)
                  .then(response => {
                    companyObj.companyName = response.data.account_name
                  })
                  .catch(err => {
                    console.log(err)
                  })
                for(let j=0; j<this.requestingApplications.length; j++) {
                  if(this.requestingApplications[i].pmcompanies_id === this.requestingApplications[j].pmcompanies_id) {
                    this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.requestingApplications[j].pmlocations_id)
                      .then(response => {
                        console.log(response.data, 'LOCATIONS')
                        if(!(companyObj.channelsInviting.includes(response.data))) {
                          companyObj.channelsInviting.push(response.data)
                        }
                        companyObj.channelsInviting = companyObj.channelsInviting.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
                      })
                      .catch(err => {
                        console.log(err)
                      })
                  }
                }
                this.requestingApplicationsList.push(companyObj);
              }
              this.requestingApplicationsList = this.requestingApplicationsList.filter((v,i,a)=>a.findIndex(t=>(t.companyId === v.companyId))===i)
              console.log(this.requestingApplicationsList, 'REQUESTED APPLICATIONS')
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      async preApprovedRequestsModalOpen() {
        this.applicationRequestsModal = false
        this.preApprovedRequestsModal = true
        this.getPreApprovedRequests();
      },
      async getPreApprovedRequests() {
        await this.$http.get('https://www.sowerkbackend.com/api/preapprovedRequest/bySPCompanyId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data)
            this.requestingApprovedApplications = response.data.filter(app => app.approval_status === 0)
            this.loadRequestingApprovedApplications = false
          })
          .catch(err => {
            console.log(err)
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
      async acceptPreApp(item) {
        await this.$http.put('https://www.sowerkbackend.com/api/preapprovedRequest/' + item.id, {
          approval_status: 1
        })
          .then(response => {
            console.log(response, 'hey success')
            this.requestingApprovedApplications = this.requestingApprovedApplications.filter(request => request !== item)
          })
          .catch(err => {
            console.log(err)
          })
        await this.$http.post('https://www.sowerkbackend.com/api/approvedproviderconnections/', {
          propertymanager_id: item.pmcompanies_id,
          serviceprovider_id: item.spcompanies_id
        })
          .then(response => {
            console.log(response, 'hey success')
          })
          .catch(err => {
            console.log(err)
          })
      },
      async denyPreApp(item) {
        await this.$http.put('https://www.sowerkbackend.com/api/preapprovedRequest/' + item.id, {
          approval_status: 2
        })
          .then(response => {
            console.log(response, 'hey success')
            this.requestingApprovedApplications = this.requestingApprovedApplications.filter(request => request !== item)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .row-color {
    background-color: black !important;
  }
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
