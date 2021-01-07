<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;" v-if="!addNotesModalLoad && !notesModalLoad &&!openCompanyLocationsModal && !approvedChannelsModal && !recentlyApprovedChannelsModal && !requestModalLoad && !messageModalLoad">
        <v-col cols="4">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="25vw"
          ></v-skeleton-loader>
          <v-card class="d-flex flex-column align-center mt-16" v-if="loading">
            <v-img class="mb-4" aspect-ratio="1" style="border: 1px solid #7C7C7C; box-shadow: 1px 1px 1px 1px #7C7C7C; width: 175px; height: 175px; border-radius: 200px; margin-top: -80px;background-color: white" :src="companyForVendor.imgUrl"></v-img>
            <v-card-title style="color: #A61c00; font-size: 48px; text-align: center; line-height: 1.25em;">{{companyForVendor.account_name}}</v-card-title>
            <v-card-text style="text-align: center; font-size: 18px;">{{companyForVendor.description}}</v-card-text>
            <v-row class="py-8 d-flex flex-column align-center justify-center" style="border-top: 1px solid #7C7C7C; border-bottom: 1px solid #7C7C7C; width: 90%;">
              <v-row class="d-flex justify-center" style="width: 100%;">
                <v-card-title style="color: #A61C00; font-size: 108px;" v-if="singleCompanyConnections.length > 0">{{singleCompanyConnections.length}}</v-card-title>
                <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
                <div class="d-flex flex-column align-center" style="width: 60%;">
                  <v-card-title style="font-size: 24px;">Companies Approved</v-card-title>
                  <v-btn to="../vendors/approved" style="width: 90%;" class="py-6" color="primary" outlined rounded>View Companies</v-btn>
                </div>
              </v-row>
            </v-row>
            <v-row class="py-8 d-flex justify-center" style="border-bottom: 1px solid #7C7C7C; width: 90%;">
              <v-card-title style="font-size: 24px; text-align: left;">SOWerk Channels</v-card-title>
              <v-card-title style="color: #A61C00; font-size: 108px;" v-if="companyForVendor.locations.length > 0">{{companyForVendor.locations.length}}</v-card-title>
              <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
            </v-row>
            <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Headquarters</v-card-title>
            <v-card-text style="font-size: 24px; text-align: left;">{{companyForVendor.address}}</v-card-text>
            <v-card-text style="font-size: 24px; text-align: left;">{{companyForVendor.city}} {{companyForVendor.state}}, {{companyForVendor.zipcode}}</v-card-text>
            <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Joined SOWerk</v-card-title>
            <v-card-text style="font-size: 24px; text-align: left;">{{companyForVendor.creationDate}}</v-card-text>
            <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Founded</v-card-title>
            <v-card-text style="font-size: 24px; text-align: left;">{{companyForVendor.year_founded}}</v-card-text>
            <v-btn :to="companyForVendor.website" target="_blank" class="my-8 py-6" style="width: 90%; font-size: 24px;" color="primary" outlined rounded>Company Website</v-btn>
            <v-row class="py-8 d-flex justify-center" style="border-top: 1px solid #7C7C7C; border-bottom: 1px solid #7C7C7C;width: 90%;">
              <v-card-title style="color: #A61c00; font-size: 108px;" v-if="insurances.length > 0">{{insurances.length}}</v-card-title>
              <v-card-title style="color: #A61c00; font-size: 108px;" v-else>0</v-card-title>
              <v-row class="d-flex flex-column align-end">
                <v-card-title style="font-size: 24px;">Insurance Policies</v-card-title>
                <v-btn to="dashboard/insurances" class="py-6" style="width: 60%;" color="primary" rounded>View Details</v-btn>
              </v-row>
            </v-row>
            <v-row class="py-8 d-flex justify-center" style="width: 90%;">
              <v-row class="d-flex flex-column align-left">
                <v-card-title style="font-size: 24px;">Certificates & Licenses</v-card-title>
                <v-btn to="dashboard/licenses" class="py-6" style="width: 60%;" color="primary" rounded>View Details</v-btn>
              </v-row>
              <v-card-title style="color: #A61c00; font-size: 108px;" v-if="licenses.length > 0">{{licenses.length}}</v-card-title>
              <v-card-title style="color: #A61c00; font-size: 108px;" v-else>0</v-card-title>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="4" class="mt-10">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="25vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <div v-if="loading" class="d-flex justify-center align-center mt-16">
              <div style="width: 20%; word-break: break-word; white-space: pre-wrap;" class="d-flex justify-center">
                <v-card-title style="color: #A61C00; font-size: 108px;" v-if="companyForVendor.locations.length > 0">{{companyForVendor.locations.length}}</v-card-title>
                <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
              </div>
              <div style="width: 80%; word-break: break-word; white-space: pre-wrap;">
                <!--                <v-card-title style="font-size: 48px; color: #A61C00" v-if="companyForVendor.account_name != ''">{{companyForVendor.account_name}}</v-card-title>-->
                <!--                <v-card-title style="font-size: 48px; color: #A61C00" v-else>{{companyForVendor.brand_name}}</v-card-title>-->
                <v-card-title style="font-size: 48px; text-align: center; word-break: break-word; white-space: pre-wrap; line-height: 1.75em;">Channels On SOWerk</v-card-title>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <v-autocomplete
              v-if="loading"
              :items="companyForVendor.locations"
              solo
              clearable
              outlined
              item-text="name"
              item-value="name"
              :placeholder="location.name"
            >
              <template slot="selection" slot-scope="data">
                <p style="color: #151515; width: 100%;" @click="changeUrl(data.item)">{{ data.item.name }}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p style="color: #151515; width: 100%;" @click="changeUrl(data.item)">{{ data.item.name }}</p>
              </template>
            </v-autocomplete>
          </transition>
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
              <v-card-title style="color:#A61C00; font-size: 24px;">Company Details</v-card-title>
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
                item-text="vendorType"
                item-value="vendorType"
                multiple
                outlined
                chips
                v-if="vendorTypes.length > 0"
              ></v-select>
              <v-card-text style=" font-size: 18px; text-align: center;" v-if="vendorTypes.length === 0">There are no types for this channel</v-card-text>
              <v-select
                style="width: 90%; text-align: center;"
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
                style="width: 90%; text-align: center;"
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
              <template style="width: 100%;" v-if="insurances.length > 0" class="d-flex justify-center">
                <template v-for="(insurance, index) in insurances.slice(0,4)">
                  <v-card-text>{{insurance.name}} - {{insurance.insuranceCompany}}</v-card-text>
                  <v-card-text v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>
                </template>
                <v-btn color="primary" outlined rounded style="width: 50%;">View Insurances</v-btn>
              </template>
              <template style="width: 100%;" v-else class="d-flex justify-center">
                <v-card-text style="text-align: center; font-size: 18px;">There are no insurances to view for this channel</v-card-text>
              </template>
              <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00; font-size: 24px;">Licenses</v-card-title>
              <template style="width: 100%;" v-if="licenses.length > 0" class="d-flex justify-center">
                <template v-for="(license, index) in licenses.slice(0,4)">
                  <v-card-text >{{license.name}} - {{license.licenseLocation}}</v-card-text>
                  <v-card-text v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>
                </template>
                <v-btn class="mb-4" color="primary" outlined rounded style="width: 50%">View Licenses</v-btn>
              </template>
              <template style="width: 100%;" v-else class="d-flex justify-center">
                <v-card-text style="text-align: center; font-size: 18px;">There are no licenses to view for this channel</v-card-text>
              </template>
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
          <v-btn v-if="loading" color="primary" rounded class="mt-16" style="width: 100%;" @click="openRequestModal">REQUEST TO APPLY</v-btn>
          <v-btn v-if="loading" color="#7C7C7C" rounded class="mt-2" style="color: white; width: 100%;" @click="openMessageModal">SEND MESSAGE</v-btn>
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
              <v-data-table
                :items-per-page="4"
                :items="vendorDocuments"
                :headers="vendorHeaders"
              >

                <template v-slot:header>
                  <v-row class="d-flex justify-end mt-n16" style="width: 100%;">
                    <v-btn to='/dashboard/vendor-documents' color="primary" style="width: 30%;"  class="my-4" rounded outlined v-if="connections.length > 0">Add</v-btn>
                  </v-row>
                </template>
                <template v-slot:item.documentName="{item, index}" class="d-flex flex-column align-left" style="width: 100%; background-color: #9A9A9A;">
                  <v-btn :href="item.documentUrl" text download color="#9A9A9A" class="my-1" style="width: 100%; height: 100%; color: #A61C00; background-color: lightgrey; text-align: left !important; align-self: flex-start">
                    {{item.documentName}}</v-btn>
                </template>
              </v-data-table>
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
            solo
            v-model="chosenLocation"
            outlined
          >
            <template slot="selection" slot-scope="data">
              <p>{{ data.item.name }}</p>
            </template>
            <template slot="item" slot-scope="data">
              <p>{{ data.item.name }}</p>
            </template>
          </v-select>
          <v-text-field
            label="Your note goes here"
            style="width: 80%;"
            outlined
            v-model="note.note"
          ></v-text-field>
          <v-img
            :src="note.fileUrl"
            :aspect-ratio="1"
            class="my-8 rounded-circle flex-grow-1"
            style="width: 100%; max-width: 300px;"
            v-if="note.fileUrl"
          ></v-img>
          <!-- <v-icon v-else :size="100" class="flex-grow-1">person</v-icon> -->
          <img
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png"
            alt="SoWerk rounded icon"
            style="width: 150px;"
            v-else
          />
          <v-file-input
            class="company-image-upload ma-0 pa-0"
            :class="{
                        'company-image-upload--selected': notesFileFile
                      }"
            v-model="notesFileFile"
            v-on:change.native="selectNotesFile"
            id="companyImage"
            style="visibility: hidden; height: 0; max-height: 0;"
          ></v-file-input>
          <v-btn
            @click="clickNotesFileUpload"
            color="primary"
            outlined
            rounded
            class="flex-grow-0 px-10 py-6 my-4"
          >Upload File</v-btn
          >
          <v-btn @click="submitNote" style="width: 40%; color: white; border-radius: 10px;" class="py-8 mb-4" color="#707070">Submit Internal Note</v-btn>
          <v-btn color="primary" style="font-size: 25px; position: absolute; top: 10px; right: 10px;" @click="exitAddNotesModalLoad">< Back</v-btn>
        </v-card>
      </transition>

      <!-- CARD ON COMPANY INTERNAL NOTES -->
      <transition name="slide-fade">
        <!-- CARD THAT WILL SHOW WHEN "VIEW" NOTE IS CLICKED -->
        <!-- <v-card v-if="this.viewNote === true">
          <template>
            {{this.note}}
          </template>
        </v-card> -->

        <v-card v-if="notesModalLoad" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
          <v-card-title style="color: #A61c00;">Your Company Internal Notes On Current Vendor</v-card-title>
          <!-- DATA TABLE FOR COMPANY NOTES! -->
          <v-data-table
            :headers="notesHeaders"
            :items="notes"
            style="width: 90%;"
            :items-per-page="10"
          >
            <template v-slot:item.note="{ item }" class="d-flex flex-column align-center">
              <p v-if="item.note.length > 10">{{item.note}}</p>
              <p v-else>{{item.note}}</p>
            </template>
            <template v-slot:item.file="{ item }" class="d-flex flex-column align-center">
              <a :href="item.fileUrl" target="_blank" download v-if="item.fileUrl !== ''">View File</a>
              <p v-else>No File Present</p>
            </template>
            <template v-slot:item.actions="{ item }" class="d-flex flex-column align-center">
              <v-btn @click="viewNoteFunc(item)" >View</v-btn>
              <v-btn @click="deleteNote(item)" v-if="currentUser.is_superuser || (currentUser.email === item.email && currentUser.phone === item.phone && currentUser.first_name === item.contact_first_name)">Delete</v-btn>
            </template>
          </v-data-table>
          <v-btn color="primary" style="font-size: 25px; position: absolute; top: 10px; right: 10px;" @click="exitNotesModalLoad">< Back</v-btn>
        </v-card>
      </transition>

      <!--      <v-overlay-->
      <!--        :absolute="absolute"-->
      <!--        :opacity="opacity"-->
      <!--        :value="overlayRequest"-->
      <!--      >-->
      <transition name="slide-fade">
        <v-card v-if="requestModalLoad" style="position: fixed; top: 20vh; width: 80vw; left: 17vw; height: 50vh;" class="d-flex flex-column align-center justify-center">
          <template style="text-align: center; width: 100%;" class="d-flex flex-column align-center">
            <v-card-title class="d-flex flex-wrap justify-center align-center" style="width: 100%;">You will request this Vendor for
              <v-form class="mx-4" style="width: 60%;">
                <v-select
                  label="Step 1 - Choose Your Channel"
                  :items="company.locations"
                  item-text="name address city state zipcode"
                  item-value="name address city state zipcode"
                  style="width: 100%;"
                  outlined
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
                  outlined
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
              specialized application.</v-card-title>
          </template>
          <v-btn @click="sendMessage" outlined color="primary" rounded width="80%" class="mb-4 py-8">Request Application</v-btn>
          <v-btn text style="position: absolute; top: 10px; right: 10px; font-size: 25px;" @click="closeRequestModal">X</v-btn>
          <transition name="slide-fade">
            <v-card-text v-if="messageSendLoad" style="color: #A61C00;">Successfully sent message!</v-card-text>
          </transition>
        </v-card>
      </transition>
      <!--      </v-overlay>-->

      <!--      <v-overlay-->
      <!--        :absolute="absolute"-->
      <!--        :opacity="opacity"-->
      <!--        :value="overlayMessage"-->
      <!--      >-->
      <transition name="slide-fade">
        <v-card v-if="messageModalLoad" style="position: fixed; top: 20vh; width: 80vw; left: 17vw; height: 50vh;" class="d-flex flex-column align-center justify-center">
          <v-form class="mx-4" style="width: 80%;">
            <v-select
              label="Step 1 - Choose Your Channel"
              :items="company.locations"
              item-text="name address city state zipcode"
              item-value="name address city state zipcode"
              style="width: 100%;"
              outlined
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
              outlined
            >
              <template slot="selection" slot-scope="data">
                <p>{{ data.item.name }}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p>{{ data.item.name }}</p>
              </template>
            </v-autocomplete>
            <v-textarea
              v-model="sendMessageNonApp.message"
              label="Step 3 - Type in Message"
              outlined
              rows="8"
              auto-grow
            ></v-textarea>
          </v-form>
          <v-btn @click="sendMessageNonApplication" outlined color="primary" rounded width="80%" class="mb-4 py-8">Send Message</v-btn>
          <v-btn text style="position: absolute; top: 10px; right: 10px; font-size: 25px;" @click="closeMessageModal">X</v-btn>
        </v-card>
      </transition>
      <!--      </v-overlay>-->

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
        viewedNote: null,
        viewNote: false,
        notesFileFile: null,
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
        overlayMessage: false,
        overlayRequest: false,
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
          fileUrl: null,
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
        vendorHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Upload Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        companyForVendor: [],
        locationsForVendor: [],
        vendorDocuments: [],
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
      noteList() {
        this.notes = this.notes
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
      await this.getVendorProvidedDocuments();
    },
    methods: {
      async viewNoteFunc(note) {
        this.viewedNote = note
        this.viewNote = true
      },
      async getVendorProvidedDocuments() {
        await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byCompanyId/' + this.currentUser.companies_id + '/byVendorChannelId/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'response for vendor docs')
            this.vendorDocuments = response.data
          })
          .catch(err => {
            console.log(err, 'err in getting list')
          })
      },
      async getChosenLocation(location) {
        this.chosenLocation = location;
        console.log(this.chosenLocation, 'chosenLocation!!!!!')
      },
      async submitNote() {
        this.note.userprofiles_id = this.currentUser.id
        this.note.locations_id = this.chosenLocation.id
        this.note.companies_id = this.currentUser.companies_id
        this.note.spLocationsId = Number(this.$route.params.id)
        console.log(this.chosenLocation, 'hello')
        let formData = new FormData();
        let file = this.notesFileFile;
        formData.append('file', file);
        console.log(formData, 'formdata');
        this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then((response) => {
            console.log(response, 'response.data for company document upload')
            this.note.fileUrl = response.data.data.Location;
          })
          .catch(err => {
            console.log('error in uploading location image', err)
          })

        setTimeout(() => {
          this.$http.post('https://www.sowerkbackend.com/api/notes', this.note)
            .then(response => {
              console.log(response.data, 'note submission success!!!!')
              alert("Note submission successful!")
            })
            .catch(err => {
              console.log(err, 'err in submitting note', this.note)
            })
        }, 1000)
      },
      clickNotesFileUpload() {
        console.log(this)
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyImage').click()
      },
      selectNotesFile(e) {
        this.notesFileFile = e.target.files[0]
        console.log(this.notesFileFile)
        this.note.fileUrl = URL.createObjectURL(e.target.files[0])
        console.log(this.note.fileUrl, 'fileUrl')
        // this.selectFile(this.notesFileFile);
        // this.selectNotesUrl( this.note.fileUrl);
      },
      readFile(e) {
        this.selectedFile = e.target.files[0]

        this.url = URL.createObjectURL(this.selectedFile)
        console.log(this.url, 'this.url')

        //this.selectFile(this.selectedFile)
      },
      selectFile(file) {
        this.notesFileFile = file;
        console.log(this.notesFileFile);
      },
      selectNotesUrl(url) {
        this.note.fileUrl = url;
        console.log(this.note.fileUrl);
      },

      async closeRequestModal() {
        this.requestModalLoad = false;
        this.overlayRequest = false
      },
      async openRequestModal() {
        this.requestModalLoad = true;
        this.overlayRequest = true
      },
      async closeMessageModal() {
        this.messageModalLoad = false;
        this.overlayMessage = false
      },
      async openMessageModal() {
        this.messageModalLoad = true;
        this.overlayMessage = true
      },
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
            if(response.data[0] !== 'There are no vendor types') {
              this.vendorTypes = response.data
            }
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
        console.log(item, 'getmessagelocation!!!!!!!!!!!!!')
        this.messageLocation = item
        this.userforms = [];
        // if (item.services[0] !== 'There are no services') {
        //   for (let i = 0; i < item.services.length; i++) {
        //     if (item.services[i].userforms[0] !== 'There are no userforms') {
        //       for (let j = 0; j < item.services[i].userforms.length; j++) {
        //         // Checks if the application is published public or private. Also checks if the userform is already included in the list of approved forms this vendor has applied for.
        //         if (item.services[i].userforms[j].applicationStatus !== 0 && !(this.userformsIdForRequest.includes(item.services[i].userforms[j].id))) {
        //           this.userforms.push(item.services[i].userforms[j])
        //         }
        //       }
        //     }
        //   }
        // }

        if(this.requestModalLoad === true) {
          await this.getUserFormsSingleLocation(item.id)
        }
        console.log(this.userforms, 'userforms');
      },
      async getUserFormsSingleLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/byLocationId/' + id)
          .then(response => {
            console.log(response.data, 'userforms for single location!')
            this.userforms = response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting userforms for single location')
          })
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
        await this.$http.get('https://www.sowerkbackend.com/api/notes/byCompanyId/' + this.currentUser.companies_id + '/bySPLocationId/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'notes!!!!');
            this.notes = response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting notes for this location by this company', this.note)
          })
      },
      async deleteNote(note) {
        confirm("Are you sure you would like to delete this note?")
        await this.$http.delete('https://www.sowerkbackend.com/api/notes/' + note.id)
          .then(response => {
            console.log('success in deleting this note', response)
            alert("Note was successfully deleted")
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

