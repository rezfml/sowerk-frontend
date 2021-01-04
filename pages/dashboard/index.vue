<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>
    <v-container class="" fluid id="v-step-0" style="width: 100%;">
      <v-row class="d-flex justify-center">
<!--        <v-col cols="12">-->
<!--          <v-skeleton-loader-->
<!--            v-if="!locationApproved"-->
<!--            type="card-avatar, article, article, actions"-->
<!--            min-height="50vh"-->
<!--            min-width="50vw"-->
<!--          ></v-skeleton-loader>-->
<!--        </v-col>-->
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved && company && company.company_type === 'false'"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
        <!--      Maint modal on render-->
        <!--      <transition name="slide-fade">-->
        <!--        <v-card v-if="loadModal === true && locationApproved">-->
        <!--          <template style="margin: 3%; justify-content: center" >-->
        <!--            <p style="padding: 3%; font-size: 1.7rem; color: #A61c00; font-weight: 700; ">We are currently performing maintenance. If you experience issues with the website, we apologize for the inconvenience and thank you for your understanding.</p>-->
        <!--            <v-btn @click="closeModal()" style="z-index: 10; border-radius: 10%;" color="primary">X</v-btn>-->
        <!--          </template>-->
        <!--        </v-card>-->
        <!--      </transition>-->

      <transition name="slide-fade">
        <v-card v-if="changePasswordPopup" style="z-index: 10; position: fixed; top: 0vh; left: 0vw; width: 100vw; height:100vh" class="d-flex flex-column align-center justify-center">
          <v-card-title style="color: #A61c00;">Hello, {{user.first_name}}! Welcome To SOWerk.</v-card-title>
          <v-card-text>It seems you've been assigned a password that's been designated temporary. You MUST change this for security reasons. You may do this below</v-card-text>
          <v-text-field
            id="password"
            label="Password*"
            type="password"
            v-model="password"
            placeholder=" "
            :rules="rules.passwordRules"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            id="confirm"
            label="Confirm Password*"
            type="password"
            placeholder=" "
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn @click="passwordKeep" color="primary" large class="my-2 px-16">Save New Password</v-btn>
          <!--          <v-btn @click="exitPasswordPopup" text style="font-size: 25px; position: absolute; top: 10px; right: 10px;">X</v-btn>-->
        </v-card>
      </transition>

        <!--      <transition name="slide-fade">-->
        <!--          <HomeCard-->
        <!--            v-if="locations && locationApproved && company"-->
        <!--            :items="locations"-->
        <!--            :company="company"-->
        <!--            :title="'Channels You Manage - ' + locations.length"-->
        <!--            :tableProperties="headers"-->
        <!--            slug="/dashboard/channels/"-->
        <!--          ></HomeCard>-->
        <!--      </transition>-->

      <v-row style="width: 100%;" class="mt-n16" v-if="company && company.company_type !== 'false'">
        <!-- ACCOUNT CHANNELS CARD  -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
            </v-row>
            <v-card-text class="">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
            <v-row class="mt-n2 mb-n2">
              <v-col cols="3" style="text-align:center;">
                <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:1.1rem;">Locations</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/digging.svg" style="max-width:75px;max-height:75px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:1.1rem;">Major Projects</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:1.1rem;">Departments</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:1.1rem;">Revenue Streams</h2>
              </v-col>
            </v-row>
            <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px;">View Channels</v-btn>
          </v-card>
        </v-col>

        <!-- VENDOR APPLICATIONS CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/resume-icon.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/VendorApplicationsLogo-159.png">
            </v-row>
            <v-card-subtitle class="mt-n8">Just like hiring a new employee for a facility, department or major project you can do the same with finding approved vendors for each of your SOWerk channels. You simply establish a Vendor vetting application for any specific Vendor service or supply category at any of your channels. It's an identical process to how you vet an employee hire.</v-card-subtitle>
            <v-btn color="primary" class="py-8 my-4" style="width: 90%; border-radius: 10px;" to="dashboard/vendors/applications">Manage Applications</v-btn>
          </v-card>
        </v-col>

        <!-- VENDOR SEARCH CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/resume-icon.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/VendorApplicationsLogo-159.png">
            </v-row>
            <v-card-subtitle>Once your channels established and Vendor applications published it's time to find Vendors to apply.</v-card-subtitle>
            <v-btn color="primary" class="py-8 my-2" style="width: 90%; border-radius: 10px;" to="dashboard/vendors">View Vendor Directory</v-btn>
            <v-btn color="primary" class="py-8 my-4" style="width: 90%; border-radius: 10px;" to="dashboard/vendors/invite">Invite New Vendors</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- SOWERK 101 CARD -->
      <v-row style="width: 100%;" class="mt-4 d-flex justify-center align-center" v-if="company && company.company_type !== 'false'">
        
        <v-col cols="4">
          <v-card style="width: 100%; height: 50vh; background-color: #7C7C7C; color: white;" class="d-flex flex-column align-center justify-center">
            <v-card-title class="mt-2" style="text-align: center; font-size: 50px;">SOWERK 101</v-card-title>
            <v-card-text class="my-2" style="color: white; text-align: center; font-size: 25px; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
            <v-btn outlined @click="renderVideoCard" color="white" class="py-8 my-2 mb-4" style="width: 90%; border-radius: 10px;">View All</v-btn>
          </v-card>
        </v-col>

        <v-col cols="8" style="height: auto;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex align-center">
            <v-col class="d-flex flex-column align-center justify-center mt-16 mb-n16" cols="3">
              <img src="/complete-icon.svg" style="width: 40%;" class="mb-n16 mt-16">
              <img src="/APPROVED-VENDORS-Logo-163.png" style="width: 200%;" class="mt-n16 ml-16 mr-n4">
            </v-col>
            <v-col v-for="(stat, index) in stats" cols="3" style="height: auto; width: 25%;" class="d-flex justify-center">
              <transition name="slide-fade">
                <StatCard :key="index" v-if="statApproved" :stat="stat"></StatCard>
              </transition>
            </v-col>
          </v-card>
        </v-col>

      </v-row>

      <!-- THIS IS THE CARD THAT WILL RENDOR BELOW THE SOWERK 101 AFTER "VIEW ALL" HAS BEEN CLICKED, AND WILL HOLD THE EMBEDDED VIDEO -->
      <transition name="slide-fade">

        <!-- LINK TO YOUTUBE PLAYLIST OF SOWERK -->
        <!-- https://www.youtube.com/watch?v=ypTRBCA-BOY&list=PL6ZPXKB2cXYEZ-jblteV6zBNr7wDCzqPz&index=1 -->

        <v-card style="height:450px;width:100%;background-color:#404040;border-radius:1%;" v-if="viewVideoCard === true">
          <div style="position:relative;border-radius:1%;">
            <iframe src="" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:900px;height:450px;margin-left:22%;border-radius:3%;">
            </iframe>
          </div>
        </v-card>

      </transition>

      <transition name="slide-fade">
        <v-row v-if="company && company.company_type === 'false' && !openUploadModelLoad">
          <v-col col-md-12 col-xs-12 col-sm-12 v-for="(stat, index) in providerStats" :key="index" class="d-flex nowrap">
            <transition name="slide-fade">
              <StatCard :stat="stat"></StatCard>
            </transition>
          </v-col>

          <v-col cols="12" class="d-flex flex-column align-center">
            <v-card-title style="color: white" class="text-bold text-center">Pending Documents</v-card-title>
            <v-card-subtitle style="color: white; width: 80%;" class="text-bold text-center">These are documents that are being requested by businesses on SOWerk for you to fill out. Typically this is done to move forward in an approval process, bid request, or to provide other sensitive information that may have to be provided through other means, or be filled out by you.</v-card-subtitle>
            <v-data-table
              :items-per-page="4"
              :items="vendorDocuments"
              :headers="vendorHeaders"
              style="width: 80%;"
            >
              <template v-slot:item.actions="{item, index}" class="d-flex justify-center">
                <v-btn :href="item.documentUrl" target="_blank" color="#707070" class="my-1" style="width: 40%; color: white;">Download</v-btn>
                <v-btn @click="openUploadModel(item)" color="primary" class="my-1" style="width: 40%; color: white;">Send Back To Business</v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </transition>

      <transition name="slide-fade">
        <v-row v-if="openUploadModelLoad" class="d-flex flex-column align-center">
          <v-card style="background-color: white; height: auto; width: 80%;" class="d-flex flex-column align-center">
            <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Add New Documents</v-card-title>
            <v-card-text class="pt-16 ml-4">Upload any company document or template that you will use to share with vendors to download, complete, and upload to SOWerk. Common items include master service agreements, independent contractor agreements, nondisclosure agreements, and tax examples.</v-card-text>
            <v-btn @click="clickCompanyDocumentsImageUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4">Upload <v-icon>mdi-plus</v-icon></v-btn>
            <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : companyDocument.documentUrl}" v-model="companyDocument.documentUrl" v-on:change.native="selectCompanyDocumentsImage" id="companyDocumentImage" style="display: none;"></v-file-input>
            <v-title v-if="successuploaddoc !== null && successuploaddoc === false">Error with adding this document. Please retry.</v-title>
            <v-img v-if="successuploaddoc" style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
            <v-card-title v-if="successuploaddoc" class="mt-2" color="primary">Successfully added this document!</v-card-title>
            <v-btn @click="closeUploadModel" style="position: absolute; top: 10px; right: 10px; font-size: 25px;" color="primary">X</v-btn>
          </v-card>
        </v-row>
      </transition>
<!--      <v-row v-if="company && company.company_type === 'false'">-->
<!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">-->
<!--          <v-progress-circular-->
<!--            indeterminate-->
<!--            color="primary"-->
<!--            :size="50"-->
<!--          ></v-progress-circular>-->
<!--        </v-col>-->
<!--      <v-card class="white pt-0 mt-12" v-if="company && company.company_type !== 'false'">-->
<!--        <v-container fluid >-->
<!--          <v-card-title v-if="$vuetify.breakpoint.xs"  md="6" xs="12" style="position: relative; top: -30px; width: 50%; border-radius: 3px; font-size: 14px;line-height:1.2;" class="primary white&#45;&#45;text font-weight-regular red-gradient; " >Approved Vendors - <br/>Quick Look Up</v-card-title>-->
<!--          <v-card-title v-else-if="$vuetify.breakpoint.md||$vuetify.breakpoint.sm "  md="6" xs="12" style="position: relative; top: -30px; width: 50%; border-radius: 3px; font-size: 14.5px; line-height:1.2;" class="primary white&#45;&#45;text font-weight-regular red-gradient " >Approved Vendors - Quick Look Up</v-card-title>-->
<!--          <v-card-title v-else style="position: absolute; top: -30px; left: 25px; width: 35%; border-radius: 3px; font-size: 18px;" class="primary white&#45;&#45;text font-weight-regular red-gradient " >Approved Vendors - <br v-show="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs || $vuetify.breakpoint.md"/> Quick Look Up</v-card-title>-->

<!--          <v-card-actions v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs || $vuetify.breakpoint.md" class="d-flex justify-end px-0 py-0">-->
<!--            <v-row class="py-0">-->
<!--              <v-spacer></v-spacer>-->
<!--              <v-col cols="12" class="mt-1">-->
<!--                <v-text-field-->
<!--                  label="Search"-->
<!--                  light-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-card-actions>-->

<!--          <v-card-actions v-else class="d-flex justify-end px-4 py-0">-->
<!--            <v-row class="py-0">-->
<!--              <v-spacer></v-spacer>-->
<!--              <v-col cols="6" class="py-0">-->
<!--                <v-text-field-->
<!--                  label="Search"-->
<!--                  light-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-card-actions>-->

<!--          <v-card-text class="pt-0" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs || $vuetify.breakpoint.md" >-->
<!--            <v-sheet-->
<!--              class="mx-auto"-->
<!--              max-width="100%"-->
<!--            >-->
<!--              <v-slide-group multiple show-arrows>-->
<!--                <v-slide-item-->
<!--                  v-for="(item, index) in quickLookUps"-->
<!--                  :key="index"-->
<!--                  v-slot:default="{ active, toggle }"-->
<!--                  class ="px-3"-->
<!--                >-->
<!--                  <v-card width="200" elevation="0">-->
<!--                    <v-row>-->
<!--                      <v-col class="d-flex flex-column justify-center py-0">-->
<!--                        <p class="text-center primary&#45;&#45;text title" size="50">{{ item.name }}</p>-->
<!--                        <v-icon color="primary" size="50">{{ item.icon }}</v-icon>-->
<!--                        <v-btn class="mx-auto mt-4" color="primary" outlined rounded small :href="item.link" width="70%">View All</v-btn>-->
<!--                      </v-col>-->
<!--                    </v-row>-->
<!--                  </v-card>-->
<!--                </v-slide-item>-->
<!--              </v-slide-group>-->
<!--            </v-sheet>-->
<!--          </v-card-text>-->

<!--          <v-card-text class="pt-0" v-else>-->
<!--            <v-sheet-->
<!--              class="mx-auto"-->
<!--              max-width="100%"-->
<!--            >-->
<!--              <v-slide-group multiple show-arrows>-->
<!--                <v-slide-item-->
<!--                  v-for="(item, index) in quickLookUps"-->
<!--                  :key="index"-->
<!--                  v-slot:default="{ active, toggle }"-->
<!--                  class ="px-4"-->
<!--                >-->
<!--                  <v-card width="200" elevation="0">-->
<!--                    <v-row>-->
<!--                      <v-col class="d-flex flex-column justify-center py-0">-->
<!--                        <p class="text-center primary&#45;&#45;text title">{{ item.name }}</p>-->
<!--                        <v-icon color="primary" size="100">{{ item.icon }}</v-icon>-->
<!--                        <v-btn class="mx-auto mt-4" color="primary" outlined rounded small :href="item.link" width="100%">View All</v-btn>-->
<!--                      </v-col>-->
<!--                    </v-row>-->
<!--                  </v-card>-->
<!--                </v-slide-item>-->
<!--              </v-slide-group>-->
<!--            </v-sheet>-->
<!--          </v-card-text>-->
<!--        </v-container>-->
<!--      </v-card>-->
    </v-container>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/Sidebar";
  import HomeCard from '~/components/dashboard/HomeCard'
  import StatCard from "~/components/dashboard/StatCard";
  import * as moment from 'moment'

  export default {
    name: "home",
    layout: "app",
    components: {
      Sidebar,
      HomeCard,
      StatCard
    },
    data() {
      return {
        viewVideoCard: false,
        openUploadModelLoad: false,
        loadModal: false,
        loading: false,
        hidden: false,
        items: [
          {
            id: 1,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 2,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 3,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
        ],
        stats: [
          {
            title: 'Your Approved Vendors',
            value: 0,
            link: '/dashboard/vendors/approved'
          },
          // {
          //   title: 'Requests For Bids',
          //   value: 0,
          //   link: '#'
          // },
          {
            title: 'Pending Vendor Applications',
            value: 0,
            link: '/dashboard/vendors/applicants'
          },
          {
            title: 'Your Unread Messages',
            value: 0,
            link: '/dashboard/messages-and-alerts/'
          }
        ],
        providerStats: [
          {
            title: 'Approved Applications',
            value: 0,
            link: '/dashboard/vendors/approved'
          },
           {
             title: 'Requested Applications',
             value: 0,
             link: '#'
           },
          {
            title: 'Vendor Plan',
            value: 'Basic',
            link: '/dashboard/pricing'
          },
          {
            title: 'Service Provider Connections',
            value: 0,
            link: '/dashboard/vendors/approved'
          }
        ],
        quickLookUps: [
          {
            name: 'HVAC',
            icon: 'hvac',
            link: '#'
          },
          {
            name: 'Landscaping',
            icon: 'mdi-rake',
            link: '#'
          },
          {
            name: 'Plumber',
            icon: 'mdi-pipe',
            link: '#'
          },
          {
            name: 'Electrician',
            icon: 'mdi-power-plug',
            link: '#'
          },
          {
            name: 'Painter',
            icon: 'mdi-format-paint',
            link: '#'
          },
          {
            name: 'Paving',
            icon: 'mdi-tractor',
            link: '#'
          },
          {
            name: 'Pest Control',
            icon: 'mdi-bug-outline',
            link: '#'
          },
        ],
        headers: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Main Contact', value: 'full_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        locations: [],
        user: null,
        company: null,
        locationApproved: false,
        statApproved: false,
        changePasswordPopup: false,
        password: '',
        confirmPassword: '',
        show1: false,
        rules: {
          passwordRules: [
            v => !!v || 'Password is required',
            v => /[*@!?#%&()^~{}]+/.test(v) || 'Password must contain 1 special character',
            v => /[A-Z]+/.test(v) || 'Password must contain at least 1 Uppercase character',
            v => /[a-z]+/.test(v) || 'Password must contain at least 1 Lowercase character',
            v => /[0-9]+/.test(v) || 'Password must contain at least 1 Number ',
            v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            v => (v && v.length <= 255) || 'Password must be less than 255 characters'
          ]
        },
        vendorHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Upload Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        vendorDocuments: [],
        chosenUploadFirstDocument: {},
        companyDocument: {},
        companyDocumentImageUrl: null,
        companyDocumentImageFile: null,
        successuploaddoc: null,
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
      confirmPasswordRules() {
        return [
          () =>
            this.password === this.confirmPassword || 'Password must match',
          (v) => !!v || 'Confirmation Password is required',
        ]
      },
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      }
    },
    async mounted () {
        if(!this.currentUser) this.$router.go();
        this.loading = true;
        await this.getUser();
        await this.getCompany();

        // await this.getLocations();
        await this.getApprovedProviderConnections();
        await this.getApplications(this.currentUser.companies_id);
        await this.getMessages(this.currentUser.companies_id);
        this.loadModal = true
        if(this.company.company_type === 'false') {
          await this.getVendorProvidedDocuments();
        }
    },
    methods: {
      renderVideoCard() {
        this.viewVideoCard = true
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
      async getVendorProvidedDocuments() {
        await this.$http.get('https://www.sowerkbackend.com/api/vendordocuments/byVendorVendorId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'response for vendor docs')
            this.vendorDocuments = response.data
          })
          .catch(err => {
            console.log(err, 'err in getting list')
          })
      },
      closeModal() {
        this.loadModal = false
      },
      async getApplications(id) {
        if(this.company.company_type !== 'false') {
          await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + id)
            .then(async (response) => {
              console.log(response.data, 'response for applications by Pm id');
              if(this.currentUser.is_superuser === false) {
                for(let i = 0; i<response.data.length; i++) {
                  if(response.data[i].approval_status === 0 && response.data[i].pmuserprofiles_id === this.currentUser.id) {
                    this.stats[1].value++
                  }
                }
              } else {
                for(let i = 0; i<response.data.length; i++) {
                  if(response.data[i].approval_status === 0) {
                    this.stats[1].value++
                  }
                }
              }
            })
            .catch(err => {
              console.log('err in getting applications', err);
            })
        } else {
          await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpId/' + id)
            .then(async (response) => {
              console.log(response.data, 'response for applications by Pm id');
              if(this.currentUser.is_superuser === false) {
                for(let i = 0; i<response.data.length; i++) {
                  if(response.data[i].approval_status === 1 && response.data[i].spuserprofiles_id === this.currentUser.id) {
                    this.providerStats[0].value++
                  }
                  if(response.data[i].approval_status === 0 && response.data[i].spuserprofiles_id === this.currentUser.id) {
                    this.providerStats[1].value++
                  }
                }
              } else {
                for(let i = 0; i<response.data.length; i++) {
                  if(response.data[i].approval_status === 1) {
                    this.providerStats[0].value++
                  }
                  if(response.data[i].approval_status === 0) {
                    this.providerStats[1].value++
                  }
                }
              }
            })
            .catch(err => {
              console.log('err in getting applications', err);
            })
        }
      },
      async getUser() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.user = data;
          if(this.user.temporaryPasswordBoolean) {
            this.changePasswordPopup = true;
          }
          console.log(data);
        })
      },
      async exitPasswordPopup() {
        this.changePasswordPopup = false;
      },
      async passwordKeep() {
        if(this.$refs.validate()) {
          await this.$http.put('https://www.sowerkbackend.com/api/auth/users/' + this.currentUser.id, {
            password: this.password,
            temporaryPasswordBoolean: false,
          })
            .then(response => {
              console.log(response, 'success in temp password popup edit')
              this.changePasswordPopup = false;
            })
            .catch(err => {
              console.log(err, 'err in temp password popup edit')
            })
        }
      },
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.company = data;
        console.log(this.company, 'COMPANY!');
      },
      async getLocations() {
        this.locationApproved = true;
        this.statApproved = true;
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          if(this.currentUser.is_superuser === false) {
            for(let i=0; i<data.location.length; i++){
              if(data.location[i].email === this.currentUser.email && data.location[i].phone === this.currentUser.phone) {
                this.locations.push(data.location[i]);
              }
            }
          } else {
            this.locations = data.location;
          }
          console.log(this.locations, 'locations', data, 'data')
        })
        console.log(this.locationApproved, this.statApproved, 'Approved!!!')
      },
      exit() {
        this.hidden = true;
      },
      async getApprovedProviderConnections() {
        if(this.company.company_type !== 'false') {
          await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/byPmId/' + this.currentUser.companies_id)
            .then(response => {
              console.log('response approvedproviderconnections', response.data);
              if (this.currentUser.is_superuser === false) {
                for (let i = 0; i < response.data.length; i++) {
                  if (response.data[i].pmuserprofiles_id === this.currentUser.id) {
                    console.log(response.data[i], 'applications for staff account')
                    this.stats[0].value++
                  }
                }
              } else {
                this.stats[0].value = response.data.length
              }
            })
            .catch(err => {
              console.log('err in getting approved provider connections', err);
            })
        }
        // } else {
        //   await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/bySpId/' + this.currentUser.companies_id)
        //     .then(response => {
        //       console.log('response approvedproviderconnections', response.data);
        //       if(this.currentUser.is_superuser === false) {
        //         for(let i=0; i<response.data.length; i++) {
        //           if(response.data[i].pmuserprofiles_id === this.currentUser.id) {
        //             console.log(response.data[i], 'applications for staff account')
        //             this.providerStats[0].value ++
        //           }
        //         }
        //       } else {
        //         this.providerStats[0].value = response.data.length
        //       }
        //     })
        //     .catch(err => {
        //       console.log('err in getting approved provider connections', err);
        //     })
        // }
      },
      async getMessages(id) {
        this.loading = false;
        this.locationApproved = true;
        this.statApproved = true;
        await this.$http.get('https://www.sowerkbackend.com/api/messages/byRecieverId/' + id)
          .then(response => {
            console.log('messages', response)
            for(let i=0; i<response.data.length; i++) {
              if(response.data[i].pmMessageRead === false) {
                this.stats[2].value++
              }
            }
          })
          .catch(err => {
            console.log('cannot get messages', err)
          })

      }
    }
  };
</script>

<style lang="scss" scoped>

  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
  .v-application--wrap{
    min-height: unset !important;
  }
  @media (max-width:1264px ){
    #app{
  margin-top:-65px;
}
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
