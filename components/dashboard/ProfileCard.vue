<template>
  <v-container class="px-0 fill-height" style="max-width: 95%;">
    <transition name="slide-fade">
      <!-- SKELETON LOADER! -->
      <v-skeleton-loader
        v-if="!loadCompany && !loadCompanyLocation"
        type="card-avatar, actions, article, article, article, actions"
        min-height="90vh"
        min-width="25vw"
      ></v-skeleton-loader>
      <!-- THIS IS FOR THE BUSINESS TYPE USER -->
      <v-row v-if="company.company_type === 'true'">
        <!-- THIS IS THE USER PROFILE CARD! -->
        <v-col cols="12">
          <v-card style="" light class="d-flex flex-column pt-12" >
            <template v-if="loadCompany || loadCompanyLocation">
                  <!--        <transition name="slide-fade">-->
                  <!--        <v-img v-if="loadCompany || location" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" max-height="150px"></v-img>-->
                  <!--        </transition>-->

                  <transition name="slide-fade">
                    <v-btn v-if="loadCompanyLocation && location && (HREFLocation !== 'https://www.sowwerk.com/dashboard/profile/' || HREFLocation !== 'http://localhost:3000/dashboard/profile/')" color="primary" outlined style="border: none; position: absolute; top: -40px; left: 0px;" to="../channels"><< ALL CHANNELS</v-btn>
                  </transition>

                  <transition name="slide-fade">
                    <div style="" class="d-flex justify-center" v-if="loadCompanyLocation && location">
                      <v-avatar size="100" class="text-center mx-auto mt-4 rounded-circle elevation-5" color="white">
                        <v-img v-if="location.imageUrl !== ''" :src="location.imageUrl" ></v-img>
                        <v-img v-else-if="company.imgUrl !== ''" :src="company.imgUrl" ></v-img>
                        <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" ></v-img>
                      </v-avatar>
                    </div>
                  </transition>

                  <transition name="slide-fade">
                    <div v-if="loadCompany" style="width: 100%; position: absolute; z-index: 3; top: 75px;" class="d-flex justify-center">
                      <v-avatar style=" border: 3px solid #212121;" size="125" rounded class="text-center mx-auto elevation-10 mb-12 mt-n12">
                        <v-img v-if="company.imgUrl === ''" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" ></v-img>
                        <v-img v-else :src="company.imgUrl" ></v-img>
                      </v-avatar>
                    </div>
                  </transition>

                  <transition name="slide-fade">
                    <v-card-text v-if="loadCompany || loadCompanyLocation" class="text-center mt-0 pt-12">

                      <v-row v-if="loadCompanyLocation" style="text-align: center;" class="">
                        <v-card-text class="mx-auto text-center primary--text mb-0" style="color:#A61C00; font-size: 24px; text-align: center; word-break: break-word; white-space: pre-wrap;">{{ location.name }}</v-card-text>
                        <v-card-text v-if="this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl" style="font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
                        <v-card-text v-else style="font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.address}}<br/> {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
                        <v-card-text style=" font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.description}}</v-card-text>
                        <v-row class="d-flex justify-center" style="width: 100%;">
                          <v-card-text class="mx-auto text-center mb-n6" style="width: 50%; font-size: 16px !important; text-align: center; word-break: break-word; white-space: pre-wrap">Founded: <span style="color: #A61C00">{{location.year_founded}}</span></v-card-text>
                          <v-card-text class="mx-auto text-center mb-n6" style="width: 50%; font-size: 16px !important; text-align: center; word-break: break-word; white-space: pre-wrap">Joined SOWerk: <span style="color: #A61C00">{{location.created}}</span></v-card-text>
                        </v-row>

                        <hr class="mx-auto my-4" style="width: 90%; color: #A61c00;">

                        <v-card-text class="mb-n6 mx-auto text-center" style="font-size: 16px !important; text-align: center;word-break: break-word!important;"><span class="primary--text">{{approvedProviders}}</span> Approved SOWerk Vendors At This Channel</v-card-text>

                        <hr class="mx-auto my-4" style="width: 90%; color: #A61c00;">

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
                        <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
                        <!--          <v-btn outlined rounded block color="primary" class="px-5" style="font-size: 18px;">View Facility Dashboard</v-btn>-->
                        <!--          <v-btn outlined rounded block color="primary" class="px-10 my-4" style="font-size: 18px;">Share This Property</v-btn>-->
                      </v-row>

                      <v-row v-else-if="user">
                        <v-col cols="12" class="py-1 mt-12">
                          <p class="mx-auto text-center primary--text mb-0 mt-12" style="font-size: 24px; word-break: break-word; white-space: pre-wrap">{{ company.account_name }}</p>
                          <v-card-subtitle><a style="text-decoration: none; color: #1e1e1e" @click="websiteLink">{{company.website}}</a></v-card-subtitle>
                        </v-col>
                        <v-col cols="12" class="py-1 text-body-1">
                          <p class="mb-2"><span class="primary--text">{{company.currentConnections}}</span> Approved SOWerk Vendors</p>
                          <p><span class="primary--text" v-if="company.locations">{{company.locations.length}}</span> Channels Nationwide</p>
                        </v-col>
                      </v-row>

                    </v-card-text>
                  </transition>

                  <transition name="slide-fade">
                    <v-divider v-if="user" class="mx-auto" style="width: 90%;"></v-divider>
                  </transition>

                  <transition name="slide-fade">
                    <v-card-text class="mx-auto" style="width: 80%;" v-if="user && loadCompany">
                      <template v-if="user">
                        <p class="title text-center primary--text">About</p>
                        <p class="body-2" v-if="company.description.length > 300">{{company.description.slice(0, 299)}}...</p>
                        <p class="body-2" v-else>{{company.description}}</p>
                        <p class="body-2">Address: {{company.address}} {{company.city}}, {{company.state}} {{company.zipcode}}</p>
                        <p class="body-2">Founded: {{company.year_founded}}</p>
                        <p class="body-2" v-if="company.creationDate">Joined SOWerk: {{company.creationDate.slice(0,4)}}</p>
                      </template>
                    </v-card-text>
                  </transition>

                  <transition name="slide-fade">
                    <v-divider v-if="user" class="mx-auto" style="width: 90%;"></v-divider>
                  </transition>

                  <transition name="slide-fade">
                    <v-card-text class="mx-auto" style="width: 80%;" v-if="loadCompany">
                      <template v-if="user">
                        <p class="title text-center primary--text">Current Profile Contact</p>
                        <p class="body-2" style="text-align: center; word-break: break-word; white-space: pre-wrap; line-height: 1.2em;">{{user.first_name}} {{user.last_name}}</p>
                        <p class="body-2">{{user.email}}</p>
                        <p class="body-2">{{user.phone}}</p>
                      </template>
                    </v-card-text>
                  </transition>
                  <v-spacer></v-spacer>
                  <v-card-actions class="d-flex flex-wrap justify-center py-6">
                    <v-btn @click="locationApproval" style="width: 80%;" class="d-flex justify-center mx-auto mt-n6" color="primary" outlined rounded v-if="location">Approved Vendors</v-btn>
                    <v-btn @click="pendingApplication" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Pending Vendors</v-btn>

                    <v-btn @click="editVendorRequirement" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Vendor Requirements</v-btn>
                    <v-btn @click="editLocationDetail" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Channel Details</v-btn>

                    <v-btn class="my-1" v-if="user && loadCompany" style="color:white;" color="#802525" @click="logout">Logout</v-btn>

<!--                    <v-btn class="my-1" v-if="user && loadCompany && currentUser.is_superuser === true" style="color:white;" color="#7C7C7C" @click="uploadCard">Upload Document</v-btn>-->

<!--                    <v-btn class="my-1" v-if="user && loadCompany && currentUser.is_superuser === true" style="" color="primary" @click="editCompany">Edit Company</v-btn>-->

                    <v-btn class="mt-4" small color="primary" @click="deleteLocation(location)" v-if="location && currentUser.is_superuser === true">DELETE CHANNEL</v-btn>
                  </v-card-actions>
                </template>
          </v-card>
        </v-col>
      </v-row>

      <!-- THIS IS FOR THE VENDOR TYPE USER -->
      <v-row v-if="company.company_type === 'false'">
        <!-- THIS IS THE USER PROFILE CARD! -->
        <v-col cols="12">
          <v-card min-height="90vh" style="" light class="d-flex flex-column pt-12" max-height="auto">
            <template v-if="loadCompany || loadCompanyLocation">
                  <!--        <transition name="slide-fade">-->
                  <!--        <v-img v-if="loadCompany || location" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" max-height="150px"></v-img>-->
                  <!--        </transition>-->

              <transition name="slide-fade">
                <v-btn v-if="loadCompanyLocation && location && (HREFLocation !== 'https://www.sowwerk.com/dashboard/profile/' || HREFLocation !== 'http://localhost:3000/dashboard/profile/')" color="primary" style="position: absolute; top: -40px; left: 0px;" to="../channels"><< ALL CHANNELS</v-btn>
              </transition>

                  <transition name="slide-fade">
                    <div style="" class="d-flex justify-center" v-if="loadCompanyLocation && location">
                      <v-avatar style=" border: 3px solid #212121;" size="150" class="text-center mx-auto elevation-10 rounded-circle">
                        <v-img v-if="location.imageUrl !== ''" :src="location.imageUrl" ></v-img>
                        <v-img v-else-if="company.imgUrl !== ''" :src="company.imgUrl" ></v-img>
                        <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" ></v-img>
                      </v-avatar>
                    </div>
                  </transition>

                  <transition name="slide-fade">
                    <div v-if="loadCompany" style="width: 100%; position: absolute; z-index: 3; top: 75px;" class="d-flex justify-center">
                      <v-avatar style=" border: 3px solid #212121;" size="125" rounded class="text-center mx-auto elevation-10 mb-12 mt-n12">
                        <v-img v-if="company.imgUrl === ''" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" ></v-img>
                        <v-img v-else :src="company.imgUrl" ></v-img>
                      </v-avatar>
                    </div>
                  </transition>

                  <transition name="slide-fade">
                    <v-card-text v-if="loadCompany || loadCompanyLocation" class="text-center mt-0 pt-12">

                      <v-row v-if="loadCompanyLocation" style="text-align: center;" class="">
                        <v-card-text class="mx-auto text-center primary--text mb-0" style="color:#A61C00; font-size: 24px; text-align: center; word-break: break-word; white-space: pre-wrap;">{{ location.name }}</v-card-text>
                        <v-card-text v-if="this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl" style="font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
                        <v-card-text v-else style="font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.address}}<br/> {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
                        <v-card-text style=" font-size: 18px; text-align: center; word-break: break-word; white-space: pre-wrap">{{location.description}}</v-card-text>
                        <v-row class="d-flex justify-center" style="width: 100%;">
                          <v-card-text class="mx-auto text-center mb-n6" style="width: 50%; font-size: 16px !important; text-align: center; word-break: break-word; white-space: pre-wrap">Founded: <span style="color: #A61C00">{{location.year_founded}}</span></v-card-text>
                          <v-card-text class="mx-auto text-center mb-n6" style="width: 50%; font-size: 16px !important; text-align: center; word-break: break-word; white-space: pre-wrap">Joined SOWerk: <span style="color: #A61C00">{{location.created}}</span></v-card-text>
                        </v-row>

                        <hr class="mx-auto my-4" style="width: 90%; color: #A61c00;">

                        <v-card-text class="mb-n6 mx-auto text-center" style="font-size: 16px !important; text-align: center;word-break: break-word!important;"><span class="primary--text">{{approvedProviders}}</span> Approved SOWerk Vendors At This Channel</v-card-text>

                        <hr class="mx-auto my-4" style="width: 90%; color: #A61c00;">

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

                        <v-divider class="mx-auto my-4" style="width: 90%;"></v-divider>
                        <v-card-text style="text-align: center; font-size: 48px; color: #A61C00">{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
                        <v-card-text style="text-align: center; font-size: 18px;"><v-icon class="" style="color: #A61C00">phone</v-icon>{{location.phone}}</v-card-text>
                        <v-card-text style="text-align: center; font-size: 18px;"><v-icon class="" style="color: #A61C00">mail</v-icon>{{location.email}}</v-card-text>
                        <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
                      </v-row>

                      <v-row v-else-if="user">
                        <v-col cols="12" class="py-1 mt-12">
                          <p class="mx-auto text-center primary--text mb-0 mt-12" style="font-size: 24px; word-break: break-word; white-space: pre-wrap">{{ company.account_name }}</p>
                          <v-card-subtitle><a style="text-decoration: none; color: #1e1e1e" @click="websiteLink">{{company.website}}</a></v-card-subtitle>
                        </v-col>
                        <v-col cols="12" class="py-1 text-body-1">
                          <p class="mb-2"><span class="primary--text">{{company.currentConnections}}</span> Approved SOWerk Vendors</p>
                          <p><span class="primary--text" v-if="company.locations">{{company.locations.length}}</span> Channels Nationwide</p>
                        </v-col>
                      </v-row>

                    </v-card-text>
                  </transition>

                  <transition name="slide-fade">
                    <v-divider v-if="user" class="mx-auto" style="width: 90%;"></v-divider>
                  </transition>

                  <transition name="slide-fade">
                    <v-card-text class="mx-auto" style="width: 80%;" v-if="user && loadCompany">
                      <template v-if="user">
                        <p class="title text-center primary--text">About</p>
                        <p class="body-2" v-if="company.description.length > 300">{{company.description.slice(0, 299)}}...</p>
                        <p class="body-2" v-else>{{company.description}}</p>
                        <p class="body-2">Address: {{company.address}} {{company.city}}, {{company.state}} {{company.zipcode}}</p>
                        <p class="body-2">Founded: {{company.year_founded}}</p>
                        <p class="body-2" v-if="company.creationDate">Joined SOWerk: {{company.creationDate.slice(0,4)}}</p>
                      </template>
                    </v-card-text>
                  </transition>

                  <transition name="slide-fade">
                    <v-divider v-if="user" class="mx-auto" style="width: 90%;"></v-divider>
                  </transition>

                  <transition name="slide-fade">
                    <v-card-text class="mx-auto" style="width: 80%;" v-if="loadCompany">
                      <template v-if="user">
                        <p class="title text-center primary--text">Current Profile Contact</p>
                        <p class="body-2">{{user.first_name}} {{user.last_name}}</p>
                        <p class="body-2">{{user.email}}</p>
                        <p class="body-2">{{user.phone}}</p>
                      </template>
                    </v-card-text>
                  </transition>

                  <v-btn @click="customerConnections" style="width: 80%;" class="d-flex justify-center mx-auto mt-n6" color="primary" outlined rounded v-if="location">Customer Connections</v-btn>
                  <v-btn @click="channelLeads" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Channel Leads</v-btn>
                  <v-btn @click="editLocationDetail" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Edit Channel Details</v-btn>

                  <v-spacer></v-spacer>
                  <v-card-actions class="d-flex flex-wrap justify-center py-6">
                    <v-btn class="my-1" v-if="user && loadCompany" style="color:white;" color="#802525" @click="logout">Logout</v-btn>

<!--                    <v-btn class="my-1" v-if="user && loadCompany && currentUser.is_superuser === true" style="color:white;" color="#7C7C7C" @click="uploadCard">Upload Document</v-btn>-->

<!--                    <v-btn class="my-1" v-if="user && loadCompany && currentUser.is_superuser === true" style="" color="primary" @click="editCompany">Edit Company</v-btn>-->

                    <v-btn class="mt-4" small color="primary" @click="deleteLocation(location)" v-if="location && currentUser.is_superuser === true">DELETE CHANNEL</v-btn>
                  </v-card-actions>
                </template>
          </v-card>
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>

<script>
  export default {
    name: "ProfileCard",
    props: [
      'location',
      'user',
      'deleteLocation',
      'approvedProviders',
      "locationApproved",
      "pendingApplicants",
      "editVendorRequirements",
      "editLocationDetails",
      "locationApproval",
      "pendingApplication",
      "editVendorRequirement",
      "editLocationDetail",
      "editLocation",
      "locationImageUrl",
      "showUploadCard",
      "uploadCard",
      "editCompany",
      "customerConnections",
      "channelLeads"
    ],
    data() {
      return {
        HREFLocation: window.location.href,
        companyDocumentImageUrl: null,
        companyDocumentImageFile: null,
        companyDocuments: [],
        companyDocument: {},
        loadYourCompanyDocuments: false,
        company: {},
        loadCompany: false,
        loadCompanyLocation: false,
        companyDocumentsHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Upload Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        vendorTypes: [],
      }
    },
    mounted() {
      console.log(window.location.href)
      this.HREFLocation = window.location.href
      console.log(this.user, "ggggggggggggggggggg")
      console.log(this.location, 'location this!!!!!!!!!!!!!', 'this.locationApproved', this.locationApproved, 'this.pendingApplicants', this.pendingApplicants, this.editVendorRequirements, this.editLocationDetails);
      console.log(this.locationImageUrl, 'locationImgUrl')
      setTimeout(() => {
        if(this.user) {
          this.getCompany(this.user.companies_id)
          this.getVendorTypes();
        } else if (this.location) {
          this.getCompanyLocation(this.currentUser.companies_id)
          this.getVendorTypes();
        }
      }, 500)
      console.log(this.locationImageUrl);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getVendorTypes() {
        await this.$http.get('https://www.sowerkbackend.com/api/vendortypes/byLocationId/' + this.$route.params.id)
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
      async getCompanyDocuments() {
        this.companyDocuments = [];
        await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'companyDocuments response.data')
            this.companyDocuments = response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting company documents for this company')
          })
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
      async logout() {
        await this.$store.dispatch('user/logout');
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company');
            this.company = response.data;
          })
          .catch(err => {
            console.log('err company', err)
          })
        this.loadCompany = true;
      },
      async getCompanyLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company!!!!!!!!');
            this.company = response.data;
          })
          .catch(err => {
            console.log('err company', err)
          })
        setTimeout(() => {
          this.loadCompanyLocation = true;
        }, 2500)
      },
      async websiteLink() {
        this.$router.push('../../../../' + this.company.website)
      }
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
