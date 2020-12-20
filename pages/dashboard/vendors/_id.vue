<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;" v-if="!addNotesModalLoad && !notesModalLoad &&!openCompanyLocationsModal && !approvedChannelsModal && !recentlyApprovedChannelsModal">
        <v-col cols="4">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="25vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <v-card class="mt-16 d-flex flex-column align-center" v-if="loading">
              <v-row>
                <v-col cols="12" align="center">
                  <v-avatar size="100" class="text-center mx-auto mt-n16 rounded-circle elevation-5" color="white">
                    <v-img :src="location.imageUrl" v-if="location.imageUrl && location.imageUrl !== '{}'"></v-img>
                    <v-icon v-else size="60">person</v-icon>
                  </v-avatar>
                </v-col>
              </v-row>
              <v-card-title style="color:#A61C00; font-size: 24px;">{{location.name}}</v-card-title>
              <v-divider class="mx-auto my-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00; font-size: 24px;">Channel Company Details</v-card-title>
              <v-card-title style="font-size: 24px;" v-if="companyForVendor.account_name != ''">{{companyForVendor.account_name}}</v-card-title>
              <v-card-title style="font-size: 24px;" v-else>{{companyForVendor.brand_name}}</v-card-title>
              <v-card-title style="font-size: 24px;" v-if="companyForVendor.locations[0] != 'There are no locations'"><v-btn color="primary" text @click="openCompanyLocationsModal = true" style="font-size: 24px;">{{companyForVendor.locations.length}}</v-btn> Total Channels</v-card-title>
              <v-card-title style="font-size: 24px;" v-else><span style="color:#A61C00;">0</span> Total Channels</v-card-title>
              <!--            <v-btn outlined color="primary" rounded md class="px-16">Share</v-btn>-->
              <v-divider class="mx-auto my-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00; font-size: 24px;">Channel Details</v-card-title>
              <v-card-text style="font-size: 18px; text-align: center;">Address: {{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
              <v-card-text style="text-align: center; font-size: 18px;">Radius Provider ({{location.radius}}mi)</v-card-text>
              <v-select
                style="width: 90%; text-align: center;"
                readonly
                :items="vendorTypes"
                v-model="vendorTypes"
                label="Type"
                v-if="vendorTypes.length > 0"
              ></v-select>
              <v-card-text style=" font-size: 18px; text-align: center;">There are no types for this channel</v-card-text>
              <v-select
                style="width: 90%; text-align: center;"
                readonly
                :items="location.services"
                v-model="location.services"
                label="Category"
                v-if="location.services[0] != 'There are no services'"
              ></v-select>
              <v-card-text style=" font-size: 18px; text-align: center;">There are no categories for this channel</v-card-text>
              <v-select
                style="width: 90%; text-align: center;"
                readonly
                :items="location.locationtags"
                v-model="location.locationtags"
                label="Tags"
                v-if="location.locationtags[0] != 'There are no location tags'"
              ></v-select>
              <v-card-text style="text-align: center; font-size: 18px;">There are no location tags for this channel</v-card-text>
              <v-divider class="mx-auto my-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00; font-size: 24px;">Channel Contact</v-card-title>
              <v-card-text style="text-align: center; font-size: 18px;">{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
              <v-card-text style="text-align: center; font-size: 18px;" v-if="singleCompanyConnections.length > 0">{{location.email}}</v-card-text>
              <v-card-text style="text-align: center; font-size: 18px;" v-if="singleCompanyConnections.length > 0">{{location.phone}}</v-card-text>
              <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00; font-size: 24px;">About</v-card-title>
              <v-card-text style="text-align: center; font-size: 18px;">{{location.description}}</v-card-text>
              <v-card-text style="text-align: center; font-size: 18px;">Founded: {{companyForVendor.year_founded}}</v-card-text>
              <v-card-text v-if="location.created" style="text-align: center; font-size: 18px;">Joined SOWerk: {{location.created.slice(0,4)}}</v-card-text>
              <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00; font-size: 24px;">Insurances</v-card-title>
              <template v-for="(insurance, index) in insurances.slice(0,4)">
                <v-card-text>{{insurance.name}} - {{insurance.insuranceCompany}}</v-card-text>
                <v-card-text v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>
              </template>
              <v-btn color="primary" outlined rounded style="width: 50%;">View Insurances</v-btn>
              <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00; font-size: 24px;">Licenses</v-card-title>
              <template v-for="(license, index) in licenses.slice(0,4)">
                <v-card-text>{{license.name}} - {{license.licenseLocation}}</v-card-text>
                <v-card-text v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>
              </template>
              <v-btn class="mb-4" color="primary" outlined rounded style="width: 50%">View Licenses</v-btn>
            </v-card>
          </transition>
        </v-col>
        <v-col cols="3">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="20vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <v-card v-if="loading" class="d-flex flex-column align-center mt-16" style="width: 100%;" @click="openApprovedChannelsList">
              <v-card-title color="primary" style="color: #A61C00; font-size: 24px;">Approved Channels</v-card-title>
              <v-card-title class="my-6" color="primary" style="color: #A61C00; font-size: 105px;">{{connections.length}}</v-card-title>
            </v-card>
          </transition>
          <transition name="slide-fade">
            <v-card v-if="loading" class="d-flex flex-column align-center mt-8" style="width: 100%;" @click="openRecentlyApprovedChannelsList">
              <v-card-title color="primary" style="color: #A61C00; font-size: 24px;">Recently Approved Channels</v-card-title>
              <v-card-subtitle style=" font-size: 18px;">Past 30 days</v-card-subtitle>
              <v-card-title class="my-6" color="primary" style="color: #A61C00; font-size: 105px;">{{connectionsPast30Days.length}}</v-card-title>
            </v-card>
          </transition>
<!--          <transition name="slide-fade">-->
<!--            <v-card v-if="loading" class="d-flex flex-column align-center mt-8" style="width: 100%;">-->
<!--              <v-card-title style="color: #A61c00">Reviews on SOWerk</v-card-title>-->
<!--              <v-card-title class="my-8" style="color: #A61C00; text-align: center; font-size: 105px;">{{reviews.length}}</v-card-title>-->
<!--              <v-btn @click="loadLeaveReview" outlined color="primary" rounded width="90%" class="mb-4">Leave Review</v-btn>-->
<!--              <v-slide-group-->
<!--                multiple-->
<!--                show-arrows-->
<!--              >-->
<!--                <v-slide-item v-for="(review, index) in reviews">-->
<!--                  <v-divider></v-divider>-->
<!--                  <v-rating-->
<!--                    empty-icon="$mdiStarOutline"-->
<!--                    full-icon="$mdiStar"-->
<!--                    half-icon="$mdiStarHalfFull"-->
<!--                    half-increments-->
<!--                    hover-->
<!--                    length="5"-->
<!--                    size="64"-->
<!--                    :value="review.stars"-->
<!--                  ></v-rating>-->
<!--                  <v-card-subtitle>{{review.reviewTitle}}</v-card-subtitle>-->
<!--                  <v-card-text>"{{review.reviewDescription}}" - {{review.reviewerName}}, {{review.reviewerAccountType}}</v-card-text>-->
<!--                </v-slide-item>-->
<!--              </v-slide-group>-->
<!--            </v-card>-->
<!--          </transition>-->
          <!--          <v-card class="d-flex flex-column align-center mt-10">-->
          <!--            <v-card-title style="color: #A61C00; font-size: 24px;">Businesses Portfolio</v-card-title>-->
          <!--            <v-card-subtitle>Other businesses who have accepted this Service Provider</v-card-subtitle>-->
          <!--            <VendorSlider :companies="companies" :connections="connections"></VendorSlider>-->
          <!--          </v-card>-->
          <v-overlay
            :absolute="absolute"
            :opacity="opacity"
            :value="overlay"
          >
            <transition name="slide-fade">
              <v-card color="white" v-if="loadLeaveReviewModal" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
                <v-card-title style="color: #A61C00">Leave a review for this vendor!</v-card-title>
                <v-row style="width: 100%;" class="d-flex nowrap justify-center align-center">
                  <v-rating
                    color="primary"
                    half-increments
                    hover
                    length="5"
                    size="40"
                    value="5"
                    v-model="leaveReview.stars"
                    style="width: 30%;"
                  ></v-rating>
                  <v-card-text style="color: #A61C00; width: 10%;">{{leaveReview.stars}}/5</v-card-text>
                </v-row>
                <v-text-field
                  class="mt-2"
                  label="Title Your Review*"
                  v-model="leaveReview.reviewTitle"
                  style="color: white; opacity: 0.65; width: 80%;"
                  outlined
                  single-line
                  background-color="#4a4a4a"
                ></v-text-field>
                <v-textarea
                  label="Review Details Here*"
                  v-model="leaveReview.reviewerDescription"
                  style="color: white; opacity: 0.65; width: 80%;"
                  outlined
                  single-line
                  background-color="#4a4a4a"
                ></v-textarea>
                <v-btn @click="submitReview" color="primary" class="mb-4" style="width: 40%;">Submit Review</v-btn>
                <v-btn style="position: absolute; top: 10px; right: 10px; font-size: 25px; color: #151515;" text @click="exitLoadLeaveReview">X</v-btn>
              </v-card>
            </transition>
          </v-overlay>
        </v-col>
        <v-col cols="5" class="d-flex flex-column align-center">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="30vw"
          ></v-skeleton-loader>
          <v-btn v-if="loading" color="primary" rounded class="mt-16" style="width: 100%;" @click="requestModalLoad = true">REQUEST TO APPLY</v-btn>
          <v-btn v-if="loading" color="#7C7C7C" rounded class="mt-2" style="color: white; width: 100%;" @click="messageModalLoad = true">SEND MESSAGE</v-btn>
          <transition name="slide-fade">
            <v-card v-if="loading" class="d-flex flex-column align-center mt-4" style="width: 100%;">
              <v-card-title style="color: #A61c00; font-size: 24px;">Your Connection Details</v-card-title>
              <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
              <v-card-text style=" font-size: 18px;">Status: <span style="color: #A61c00" v-if="singleCompanyConnections.length > 0">Approved Vendor</span><span style="color: #A61c00" v-else>Non-Approved Vendor</span></v-card-text>
              <v-card-text style=" font-size: 18px;">Connections to your Account: <span style="color: #A61c00">{{singleCompanyConnections.length}}</span></v-card-text>
              <!--            <v-card-text>Recorded Jobs: <span style="color: #A61c00">22</span></v-card-text>-->
              <!--            <v-card-text>SOWerk Requests: <span style="color: #A61c00">72</span></v-card-text>-->
              <v-card-title style="color: #A61c00; font-size: 24px;">Related To You</v-card-title>
              <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
              <v-row style="width: 100%;" class="d-flex nowrap mt-2">
                <v-card-text style="cursor: pointer; width: 60%; font-size: 18px;" @click="listNotesModal">Your Notes On This Vendor: <span style="color: #A61c00" v-if="notes.length > 0">{{notes.length}}</span><span style="color: #A61c00" v-else>0</span></v-card-text>
                <v-btn @click="addNotesModal" style="width: 38%; margin-right: 2%;" color="primary">+ Internal Note</v-btn>
              </v-row>
              <v-card-text style=" font-size: 18px;">Your Rating On This Vendor: <span style="color: #A61c00" v-if="reviews.length > 0">{{reviews.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue.stars)}}</span><span style="color: #A61c00" v-else>0</span></v-card-text>
              <v-card-title style="color: #A61c00; font-size: 24px;">Vendor Provided Documents</v-card-title>
              <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
              <v-card-title style="color: #A61c00; font-size: 24px;">Other Details</v-card-title>
              <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
              <v-card-text style=" font-size: 18px;">Vendor Messages: <span style="color: #A61c00">{{vendorMessages.length}}</span></v-card-text>
            </v-card>
          </transition>
        </v-col>
      </v-row>

      <transition name="slide-fade">
        <v-card v-if="addNotesModalLoad" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
          <v-card-title style="color: #A61c00;">Please Fill Out All Fields Below</v-card-title>
          <v-select
            label="Select a channel to go with your note"
            style="width: 80%;"
            :items="company.locations"
            v-model="chosenLocation"
            item-text="name"
            item-value="name"
            solo
          ></v-select>
          <v-text-field
            label="Your note goes here"
            style="width: 80%;"
          ></v-text-field>
          <v-file-input></v-file-input>
          <v-btn style="width: 40%; color: white;" class="py-8 mb-4" color="#707070">Submit Internal Note</v-btn>
          <v-btn color="primary" style="font-size: 25px; position: absolute; top: 10px; right: 10px;" @click="exitAddNotesModalLoad">< Back</v-btn>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card v-if="notesModalLoad" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
          <v-card-title style="color: #A61c00;">Your Company Internal Notes On Current Vendor</v-card-title>
          <v-data-table
            :headers="notesHeaders"
            :items="notes"
            style="width: 90%;"
          >
            <template v-slot:item.note="{ item }" class="d-flex flex-column align-center">
              <p v-if="item.note.length > 10">{{item.note.splice(0, 10)}}...</p>
              <p v-else>{{item.note}}</p>
            </template>
            <template v-slot:item.file="{ item }" class="d-flex flex-column align-center">
              <a href="item.file" target="_blank" download v-if="item.file !== ''">View File</a>
              <p v-else>No File Present</p>
            </template>
            <template v-slot:item.actions="{ item }" class="d-flex flex-column align-center">
              <v-btn>View</v-btn>
              <v-btn @click="deleteNote(item)" v-if="this.$store.state.user.user.user.is_superuser || (this.$store.state.user.user.user.email === item.email && this.$store.state.user.user.user.phone === item.phone && this.$store.state.user.user.user.first_name === item.contact_first_name)">Delete</v-btn>
            </template>
          </v-data-table>
          <v-btn color="primary" style="font-size: 25px; position: absolute; top: 10px; right: 10px;" @click="exitNotesModalLoad">< Back</v-btn>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card v-if="requestModalLoad" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
          <template style="text-align: center; width: 100%;">
            <v-card-text class="d-flex flex-wrap justify-center" style="width: 100%;">You will request this Vendor for
              <v-form class="mx-4" style="width: 60%;">
                <v-select
                  dense
                  label="Step 1 - Choose Your Channel"
                  :items="company.locations"
                  item-text="name address city state zipcode"
                  item-value="name address city state zipcode"
                  style="width: 100%;"
                >
                  <template slot="selection" slot-scope="data">
                    <p @click="getUserFormsForLocation(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
                  </template>
                  <template slot="item" slot-scope="data">
                    <p @click="getUserFormsForLocation(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
                  </template>
                </v-select>
              </v-form>
              to fill out your
              <v-form class="mx-3" style="width: 50%;">
                <v-select
                  dense
                  label="Step 2 - Choose Your Application"
                  :items="userforms"
                  item-text="name id"
                  item-value="name id"
                  style="width: 100%;"
                >
                  <template slot="selection" slot-scope="data">
                    <p @click="getUserForms(data.item)"># {{data.item.id}} - {{ data.item.name }}</p>
                  </template>
                  <template slot="item" slot-scope="data">
                    <p @click="getUserForms(data.item)"># {{data.item.id}} - {{ data.item.name }}</p>
                  </template>
                </v-select>
              </v-form>
              specialized application.</v-card-text>
          </template>
          <v-btn @click="sendMessage" outlined color="primary" rounded width="90%" class="mb-4">Request Application</v-btn>
          <v-btn text style="position: absolute; top: 10px; right: 10px;" @click="requestModalLoad = false">X</v-btn>
          <transition name="slide-fade">
            <v-card-text v-if="messageSendLoad" style="color: #A61C00;">Successfully sent message!</v-card-text>
          </transition>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card v-if="messageModalLoad" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
          <v-form class="mx-4" style="width: 60%;">
            <v-select
              dense
              label="Step 1 - Choose Your Channel"
              :items="company.locations"
              item-text="name address city state zipcode"
              item-value="name address city state zipcode"
              style="width: 100%;"
            >
              <template slot="selection" slot-scope="data">
                <p @click="getUserFormsForLocation(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p @click="getUserFormsForLocation(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
              </template>
            </v-select>
            <v-autocomplete
              v-model="sendMessageNonApp.name"
              :items="naicsList"
              item-text="name"
              item-value="name"
              label="Step 2 - Select A Category"
              solo
              clearable
              hint="This is generated from the NAICS directory."
            >
              <template slot="selection" slot-scope="data">
                <p>{{ data.item.name }}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p>{{ data.item.name }}</p>
              </template>
            </v-autocomplete>
            <v-text-field
              v-model="sendMessageNonApp.message"
              label="Step 3 - Type in Message"
            ></v-text-field>
          </v-form>
          <v-btn @click="sendMessageNonApplication" outlined color="primary" rounded width="90%" class="mb-4">Send Message</v-btn>
          <v-btn text style="position: absolute; top: 10px; right: 10px;" @click="messageModalLoad = false">X</v-btn>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card v-if="openCompanyLocationsModal" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
          <v-data-table
            :items="companyForVendor.locations"
            v-if="companyForVendor.locations[0] != 'There are no locations'"
            :headers="headersLocations"
            class="mt-4"
            style="width: 90%;"
          >
            <template v-slot:item.imageUrl="{ item }">
              <v-row class="d-flex" cols="12" lg="6" justify="center" >
                <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                <v-img v-else-if="item.imageUrl === '' && company.imgUrl !== ''" :src="company.imgUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
              </v-row>
            </template>

            <template class="d-flex flex-column align-center" v-slot:item.contact_first_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              <p>{{ item.contact_first_name }} {{ item.contact_last_name }}</p>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-btn style="width: 90%;background-color:#707070;" outlined color="white" :to="'/dashboard/vendors/' + item.id">View</v-btn>
            </template>
          </v-data-table>
          <v-btn text style="position: absolute; top: 10px; right: 10px;" @click="openCompanyLocationsModal = false">X</v-btn>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card v-if="approvedChannelsModal" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="">
          <v-card-title style="color: white; background-color: #A61C00; text-align: center; width: 100%;">Your Company Approved Connections To Current Vendor</v-card-title>
          <v-data-table
            :items="approvedChannelsList"
            :headers="headersApprovedChannelsList"
            style="width: 100%;"
            class="mt-8 mb-4"
          >
            <template class="d-flex" v-slot:item.companyName="{item}">
              <v-row class="d-flex align-center">
                <v-img :aspect-ratio="1" class="rounded-circle flex-grow-1 my-2 mr-1" style="" :src="item.companyImg"></v-img>
                <p class="mx-auto mb-0">{{item.companyName}}</p>
              </v-row>
            </template>
            <template class="d-flex" v-slot:item.locationName="{item}">
              <v-row class="d-flex align-center">
                <v-img v-if="item.locationImg !== ''" :aspect-ratio="1" class="rounded-circle flex-grow-1 my-2 mr-1" style="" :src="item.locationImg"></v-img>
                <v-img v-else :aspect-ratio="1" class="rounded-circle flex-grow-1 my-2 mr-1" style="" :src="item.companyImg"></v-img>
                <p class="mx-auto mb-0">{{item.locationName}}</p>
              </v-row>
            </template>
          </v-data-table>
          <v-btn text @click="approvedChannelsModal = false" style="position: absolute; top: 10px; right: 10px; font-size: 24px; color: white;">X</v-btn>
        </v-card>
      </transition>
      <transition name="slide-fade">
        <v-card v-if="recentlyApprovedChannelsModal" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="">
          <v-card-title style="color: white; background-color: #A61C00; text-align: center; width: 100%;">Your Company Recently Approved Connections To Current Vendor</v-card-title>
          <v-data-table
            :items="recentlyApprovedChannelsList"
            :headers="headersrecentlyApprovedChannelsList"
            style="width: 100%;"
            class="mt-8 mb-4"
          >
            <template class="d-flex" v-slot:item.companyName="{item}">
              <v-row class="d-flex align-center">
                <v-img :aspect-ratio="1" class="rounded-circle flex-grow-1 my-2 mr-1" style="" :src="item.companyImg"></v-img>
                <p class="mx-auto mb-0">{{item.companyName}}</p>
              </v-row>
            </template>
            <template class="d-flex" v-slot:item.locationName="{item}">
              <v-row class="d-flex align-center">
                <v-img :aspect-ratio="1" class="rounded-circle flex-grow-1 my-2 mr-1" style="" :src="item.locationImg"></v-img>
                <p class="mx-auto mb-0">{{item.locationName}}</p>
              </v-row>
            </template>
          </v-data-table>
          <v-btn text @click="recentlyApprovedChannelsModal = false" style="position: absolute; top: 10px; right: 10px; font-size: 24px; color: white;">X</v-btn>
        </v-card>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
  import VendorSlider from '~/components/dashboard/VendorSlider'
  import * as moment from 'moment'
  export default {
    name: 'vendor',
    layout: 'app',
    components: {
      VendorSlider
    },
    data() {
      return {
        approvedChannelsModal: false,
        recentlyApprovedChannelsModal: false,
        approvedChannelsList: [],
        recentlyApprovedChannelsList: [],
        openCompanyLocationsModal: false,
        vendorTypes: [],
        sendMessageNonApp: {

        },
        naicsList: [],
        messageModalLoad: false,
        requestModalLoad: false,
        absolute: true,
        opacity: 0.85,
        overlay: false,
        location: {

        },
        company: {},
        userforms: [],
        insurances: [],
        licenses: [],
        connections: [],
        connectionsPast30Days: [],
        companies: [],
        loading: false,
        messageLocation: {},
        messageUserForm: {},
        messageSendLoad: false,
        reviews: [],
        leaveReview: {
          locations_id: this.$route.params.id,
          stars: 5,
          reviewTitle: '',
          reviewDescription: '',
          reviewerName: this.$store.state.user.user.user.first_name + ' ' + this.$store.state.user.user.user.last_name,
          reviewerAccountType: this.$store.state.user.user.user.is_superuser,
          userprofiles_id: this.$store.state.user.user.user.id,
        },
        singleCompanyConnections: [],
        vendorMessages: [],
        userformsIdForRequest: [],
        notes: [],
        note: {
          note: '',
          fileUrl: '',
          locations_id: Number,
          userprofiles_id: Number,
          spLocationsId: Number,
          companies_id: Number,
        },
        chosenLocation: {},
        addNotesModalLoad: false,
        notesModalLoad: false,
        loadLeaveReviewModal: false,
        notesHeaders: [
          { text: 'User', value: 'fullname', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel', value: 'addressCityState', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Note', value: 'note', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'File', value: 'file', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Created', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        headersLocations: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        headersApprovedChannelsList: [
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel Name', value: 'locationName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel Address', value: 'locationAddress', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        headersrecentlyApprovedChannelsList: [
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel Name', value: 'locationName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel Address', value: 'locationAddress', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        companyForVendor: [],
        locationsForVendor: [],
      }
    },
    async mounted() {
      console.log(this.$route.params.id, 'hey')
      await this.getNaicsList();
      await this.getLocation();
      await this.getInsurances();
      await this.getLicenses();
      await this.getConnections(this.location);
      await this.getUserCompany(this.$store.state.user.user.user.companies_id);
      await this.getReviews();
      await this.getMessages();
      await this.getNotes();
    },
    methods: {
      async openApprovedChannelsList() {
        this.approvedChannelsList = [];
        if (this.connections.length > 0) {
          for (let i = 0; i < this.connections.length; i++) {
            this.getCompanyLocationForApproved(this.connections[i].spcompanies_id, this.connections[i].splocations_id);
          }
        }
        setTimeout(() => {
          this.approvedChannelsModal = true;
        }, 1000)
      },
      async openRecentlyApprovedChannelsList() {
        this.recentlyApprovedChannelsList = [];
        if (this.connectionsPast30Days.length > 0) {
          for (let i = 0; i < this.connectionsPast30Days.length; i++) {
            this.getCompanyLocationForRecentlyApproved(this.connectionsPast30Days[i].spcompanies_id, this.connectionsPast30Days[i].splocations_id);
          }
        }
        setTimeout(() => {
          this.recentlyApprovedChannelsModal = true;
        }, 1000)
      },
      async getCompanyLocationForApproved(id, locId) {
        const approvedObj = {
          companyName: '',
          companyImg: '',
          locationName: '',
          locationImg: '',
          locationAddress: '',
        }

        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'response for company approval!!!!!!!!!')
            approvedObj.companyName = response.data.account_name
            approvedObj.companyImg = response.data.imgUrl
            this.$http.get('https://www.sowerkbackend.com/api/locations/' + locId)
              .then(response => {
                console.log(response.data, 'response for location approval!!!!!!!!!')
                approvedObj.locationName = response.data.name;
                approvedObj.locationImg = response.data.imageUrl;
                approvedObj.locationAddress = response.data.address + ' ' + response.data.city + ', ' + response.data.state + ' ' + response.data.zipcode
                this.approvedChannelsList.push(approvedObj)
              })
              .catch(err => {
                console.log(err, 'err in location approval')
              })
          })
          .catch(err => {
            console.log(err, 'err for company approval')
          })
      },
      async getCompanyLocationForRecentlyApproved(id, locId) {
        const approvedObj = {
          companyName: '',
          companyImg: '',
          locationName: '',
          locationImg: '',
          locationAddress: '',
        }

        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'response for company approval!!!!!!!!!')
            approvedObj.companyName = response.data.account_name
            approvedObj.companyImg = response.data.imgUrl
            this.$http.get('https://www.sowerkbackend.com/api/locations/' + locId)
              .then(response => {
                console.log(response.data, 'response for location approval!!!!!!!!!')
                approvedObj.locationName = response.data.name;
                approvedObj.locationImg = response.data.imageUrl;
                approvedObj.locationAddress = response.data.address + ' ' + response.data.city + ', ' + response.data.state + ' ' + response.data.zipcode
                this.recentlyApprovedChannelsList.push(approvedObj)
              })
              .catch(err => {
                console.log(err, 'err in location approval')
              })
          })
          .catch(err => {
            console.log(err, 'err in company approval')
          })
      },
      async getNaicsList() {
        await this.$http.get('https://www.sowerkbackend.com/api/naicslist')
          .then(response => {
            console.log('naicslist', response)
            this.naicsList = response.data
          })
          .catch(err => {
            console.log(err, 'err on getting naicslist')
          })
      },
      async getConnections(location) {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpId/' + location.companies_id)
          .then(response => {
            console.log(response.data, 'connections!!!!!!!!!!!');
            if (response.data.length !== 0) {
              for (let i = 0; i < response.data.length; i++) {
                console.log(location.id, 'LOCATION ID FOR SP LOCATION');
                if (location.id === response.data[i].splocations_id && response.data[i].approval_status === 1) {
                  console.log(response.data[i], 'if matched splocation')
                  this.connections.push(response.data[i]);
                  this.userformsIdForRequest.push(response.data[i].pmuserforms_id);
                  if (moment(response.data[i].created).format('L') > moment().subtract(30, 'days').calendar()) {
                    this.connectionsPast30Days.push(response.data[i]);
                  }
                }
              }
              this.singleCompanyConnections = this.connections.filter(connection => connection.pmcompanies_id = this.$store.state.user.user.user.companies_id)
              console.log(this.singleCompanyConnections, 'single company connections')
            }
          })
          .catch(err => {
            console.log(err, 'err in connections');
          })
        console.log(this.connections, 'this.connections')
        await this.getCompanies();
      },
      async getLocation() {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'response.data location');
            this.location = response.data;
            this.getLocationType(response.data.id)
            this.getCompanyForVendor(response.data.companies_id)
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getLocationType(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/vendortypes/byLocationId/' + id)
          .then(response => {
            console.log(response.data, 'vendor types!!!!!!!')
          })
          .catch(err => {
            console.log(err, 'err in getting location type')
          })
      },
      async getInsurances() {
        await this.$http.get('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data insurances');
            for (let i = 0; i < response.data.length; i++) {
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
            for (let i = 0; i < response.data.length; i++) {
              this.licenses.push(response.data[0]);
            }
            console.log(this.licenses, 'this.licenses')
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getCompanies() {
        for (let i = 0; i < this.connections.length; i++) {
          await this.getCompany(this.connections[i].pmcompanies_id);
        }
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'companies!!!!!!!!!!!!!!!')
            this.companies.push(response.data);
            console.log('this.companies val!!!!!!!!', this.companies)
          })
          .catch(err => {
            console.log(err, 'err');
          })
      },
      async getCompanyForVendor(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'companies!!!!!!!!!!!!!!!')
            this.companyForVendor = response.data
            console.log('this.companies val!!!!!!!!', this.companyForVendor)
          })
          .catch(err => {
            console.log(err, 'err');
          })
      },
      async getUserCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'THIS COMPANY!!!!!!!!!!!!!')
            this.company = response.data;
            this.loading = true;
          })
          .catch(err => {
            console.log(err, 'err');
          })
        console.log(this.userforms, 'userforms for company')
      },
      async getUserFormsForLocation(item) {
        console.log(item, 'getmessagelocation')
        this.messageLocation = item
        this.userforms = [];
        if (item.services[0] !== 'There are no services') {
          for (let i = 0; i < item.services.length; i++) {
            if (item.services[i].userforms[0] !== 'There are no userforms') {
              for (let j = 0; j < item.services[i].userforms.length; j++) {
                // Checks if the application is published public or private. Also checks if the userform is already included in the list of approved forms this vendor has applied for.
                if (item.services[i].userforms[j].applicationStatus !== 0 && !(this.userformsIdForRequest.includes(item.services[i].userforms[j].id))) {
                  this.userforms.push(item.services[i].userforms[j])
                }
              }
            }
          }
        }
        console.log(this.userforms, 'userforms');
      },
      async getUserForms(item) {
        console.log(item, 'getuserforms');
        this.messageUserForm = item;
      },
      async sendMessage() {
        this.messageSendLoad = false;
        const messageVal = {
          userprofiles_id: this.$store.state.user.user.user.id,
          service: this.messageUserForm.name,
          company: this.company.account_name,
          primary_contact_first_name: this.$store.state.user.user.user.first_name,
          primary_contact_last_name: this.$store.state.user.user.user.last_name,
          message: `Hello, ${this.location.contact_first_name}. You are being invited by ${this.company.account_name} to apply for their approved vendor program titled - ${this.messageUserForm.name} at one of their locations located at ${this.messageLocation.address} ${this.messageLocation.city}, ${this.messageLocation.state} ${this.messageLocation.zipcode}. You can search for and apply to the application through SOWerk with the details we have provided you, but you have also been emailed at the following account - ${this.location.email} with a link to the application! Thank you! `,
          location: this.messageLocation.name + " - " + this.messageLocation.address + " " + this.messageLocation.city + ", " + this.messageLocation.state + " " + this.messageLocation.zipcode,
          pmMessageRead: false,
          spMessageRead: false,
          spLocationId: this.$route.params.id,
          spLocationName: this.location.name
        }
        console.log(this.messageLocation, 'messageLocation', this.messageUserForm, 'messageUserForm')
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.location.companies_id, messageVal)
          .then(response => {
            console.log(response, 'success in sending message')
            this.messageSendLoad = true;
          })
          .catch(err => {
            console.log(err, 'err in sending message')
          })
      },
      async sendMessageNonApplication() {
        const messageVal = {
          userprofiles_id: this.$store.state.user.user.user.id,
          service: this.sendMessageNonApp.name,
          company: this.company.account_name,
          primary_contact_first_name: this.$store.state.user.user.user.first_name,
          primary_contact_last_name: this.$store.state.user.user.user.last_name,
          message: this.sendMessageNonApp.message,
          location: this.messageLocation.name + " - " + this.messageLocation.address + " " + this.messageLocation.city + ", " + this.messageLocation.state + " " + this.messageLocation.zipcode,
          pmMessageRead: false,
          spMessageRead: false,
          spLocationId: this.$route.params.id,
          spLocationName: this.location.name
        }
        console.log(this.messageLocation, 'messageLocation', this.messageUserForm, 'messageUserForm')
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.location.companies_id, messageVal)
          .then(response => {
            console.log(response, 'success in sending message')
            this.messageSendLoad = true;
          })
          .catch(err => {
            console.log(err, 'err in sending message')
          })
      },
      async getReviews() {
        await this.$http.get('https://www.sowerkbackend.com/api/locationreviews/byLocationId/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'response.data for location reviews')
            this.reviews = response.data
          })
          .catch(err => {
            console.log(err, 'err in location reviews')
          })
      },
      async getMessages() {

        await this.$http.get('https://www.sowerkbackend.com/api/messages/byUserId/' + this.$store.state.user.user.user.id)
          .then(response => {
            console.log(response.data, 'message by user response.data')
            console.log(response.data.filter(message => {
              if (message.spLocationId.toString() === this.$route.params.id.toString()) {
                return message;
              }
            }))
            this.vendorMessages = response.data.filter(message => {
              if (message.spLocationId.toString() === this.$route.params.id.toString()) {
                return message;
              }
            })
          })
          .catch(err => {
            console.log(err, 'err in getting messages by response.data')
          })
      },
      async getNotes() {
        await this.$http.get('https://www.sowerkbackend.com/api/notes/byCompanyId/' + this.$store.state.user.user.user.companies_id + '/bySPLocationId/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'notes');
            this.notes = response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting notes for this location by this company')
          })
      },
      async deleteNote(note) {
        await this.$http.delete('https://www.sowerkbackend.com/api/notes/' + note.id)
          .then(response => {
            console.log('success in deleting this note', response)
          })
          .catch(err => {
            console.log('err in deleting this note', err);
          })
      },
      async addNotesModal() {
        this.addNotesModalLoad = true;
        console.log(this.addNotesModalLoad)
      },
      async exitAddNotesModalLoad() {
        this.addNotesModalLoad = false;
      },
      async listNotesModal() {
        this.notesModalLoad = true;
      },
      async exitNotesModalLoad() {
        this.notesModalLoad = false;
      },
      async loadLeaveReview() {
        this.loadLeaveReviewModal = true;
        this.overlay = !this.overlay
      },
      async exitLoadLeaveReview() {
        this.loadLeaveReviewModal = false;
        this.overlay = !this.overlay;
      },
      async submitReview() {
        if (this.leaveReview.reviewerAccountType === true) {
          this.leaveReview.reviewerAccountType = 'Super Admin';
        } else {
          this.leaveReview.reviewerAccountType = 'Staff Account';
        }

        await this.$http.post('https://www.sowerkbackend.com/api/locationreviews', this.leaveReview)
          .then(response => {
            console.log(response, 'success in adding location review')
            this.reviews.push(response)
            this.exitLoadLeaveReview();
          })
          .catch(err => {
            console.log(err, 'err in adding location review')
          })
      }
    }
  }
</script>

<style scoped>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .7s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.05s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

