<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>

    <!-- BREAKPOINT - X-LARGE - >1904px -------------------------------------- -->
    <v-container class="" fluid id="v-step-0" style="width: 100%;" v-if="$vuetify.breakpoint.xl">
      
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

      <!-- TEMP PASSWORD CARD  -->
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

      <!-- ACCOUNT CHANNELS CARD  -->
      <v-row style="width: 100%;" class="mt-n16" v-if="company && company.company_type !== 'false'">
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%;" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
            </v-row>
            <v-card-text class="" style="font-size: 18px; text-align: center;margin-bottom:5%;margin-top:10%">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
            <v-row class="mt-n2 mb-n2">
              <v-col cols="3" style="text-align:center;">
                <v-img src="/building.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Locations</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/digging.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Major Projects</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/connection.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Departments</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/business-and-finance.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Revenue Streams</h2>
              </v-col>
            </v-row>
            <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
          </v-card>
        </v-col>

        <!-- VENDOR APPLICATIONS CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/resume.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/VendorApplicationsLogo-159.png">
            </v-row>
            <v-card-text style="font-size: 18px; text-align: center;margin-bottom:12%;" class="mt-n8">Just like hiring a new employee for a facility, department or major project you can do the same with finding approved vendors for each of your SOWerk channels. You simply establish a Vendor vetting application for any specific Vendor service or supply category at any of your channels. It's an identical process to how you vet an employee hire.</v-card-text>
            <v-btn color="primary" class="py-8 my-4" style="width: 90%; border-radius: 10px; font-size: 18px;" to="/dashboard/vendors/applications">Manage Applications</v-btn>

          </v-card>
        </v-col>

        <!-- VENDOR SEARCH CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center">
            <v-row style="width: 100%;" class="d-flex align-center justify-center">
              <img style="width: 10%;" class="" src="/magnifying-glass.svg">
              <img style="width: 35%;" class="" src="/SoWork Vendor Search -170.png" >
            </v-row>
            <v-card-text style="font-size: 18px;text-align:center">Once your channels are established and Vendor applications published it's time to find Vendors to apply.</v-card-text>
            <!-- <v-btn class="py-8 my-2" style="width: 90%; border-radius: 10px; font-size: 18px;background-color: #7C7C7C;color:white" @click="renderVideoCard">SOWERK 101</v-btn> -->
            <v-card-text style="font-size: 18px;padding-bottom:10%;text-align:center">Use the Vendor Invite tool to invite existing relationships you have to connect on SOWerk or search the Vendor Directory.</v-card-text>
            <v-btn color="primary" class="py-8" style="width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors">View Vendor Directory</v-btn>
            <v-btn color="primary" class="py-8" style="margin-bottom:3%;margin-top:1%;width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors/invite">Invite New Vendors</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- SOWERK 101 CARD AND APPROVED VENDORS CARD -->
      <v-row style="width: 100%;" class="mt-4 d-flex justify-center align-center" v-if="company && company.company_type !== 'false'">

        <v-col cols="4">
          <v-card style="width: 100%; height: 30vh; background-color: #7C7C7C; color: white;" class="d-flex flex-column align-center justify-center">
            <v-card-title class="mt-2" style="text-align: center; font-size: 3rem;">SOWERK 101</v-card-title>
            <v-card-text class="my-2" style="color: white; text-align: center; font-size: 1.5rem; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
            <v-btn outlined to="/dashboard/feedback/sowerkInfo/" color="white" class="py-8 my-2 mb-4" style="width: 90%; border-radius: 10px;">View All</v-btn>
          </v-card>
        </v-col>

        <v-col cols="8" style="height: auto;">
          <v-card style="width: 100%; height: 30vh;" class="d-flex align-center">

            <v-col class="d-flex flex-column align-center" cols="3">
                <v-img src="/SoWork Logos with Icons-173-edited.png" height="200px"></v-img>

            </v-col>

            <v-col v-for="(stat, index) in stats" cols="3">
              <transition name="slide-fade">
                <StatCard :key="index" v-if="statApproved" :stat="stat"></StatCard>
              </transition>
            </v-col>

          </v-card>
        </v-col>
      </v-row>

      <!-- RENDERS ONLY IF USER IS VENDOR -->
      <transition name="slide-fade">
        <v-row v-if="company && company.company_type === 'false' && !openUploadModelLoad">
          <v-col cols="12" class="d-flex justify-center mt-n8">
            <v-col cols="8" class="mt-8 d-flex flex-wrap justify-center">
              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
                  <v-row class="mt-n2 mb-n2" style="width: 100%;">
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center;">
                      <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Locations</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Departments</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Revenue Streams</h2>
                    </v-col>
                  </v-row>
                  <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/complete-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-171.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; color: #A61C00; text-align: center; position: absolute; top: 60%;"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary" to="dashboard/businesses" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="my-4 mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex flex-column align-center justify-center">
                  <v-card-title class="mt-2" style="text-align: center; font-size: 50px;">SOWERK 101</v-card-title>
                  <v-card-text class="my-2" style="text-align: center; font-size: 25px; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
                  <v-btn outlined rounded color="#7C7C7C" class="py-8 my-2 mb-4" style="width: 30%;" href="https://www.youtube.com/watch?v=ypTRBCA-BOY&list=PL6ZPXKB2cXYEZ-jblteV6zBNr7wDCzqPz&index=1" target="_blank">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%;" class="ml-12 mt-n16" src="/resume.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-172.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; text-align: center; position: absolute; top: 60%; color: #A61C00"><span v-if="vendorDocuments.length > 0">{{vendorDocuments.length}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary"to="/dashboard/vendor-documents" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/magnifying-glass.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-173.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center; position:absolute; top: 60%;">SOWerk offers Vendors the new customer search tool to help make great connections.</v-card-text>
                  <v-btn color="primary" to="dashboard/businesses/search" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">Business Directory</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex align-center justify-center">
                  <v-card-title class="" style="font-size: 50px; width: 70%; text-align: left">MANAGE SOWERK ACCOUNT</v-card-title>
                  <div class="d-flex flex-column align-center" style="width: 30%;">
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%; " to="/dashboard/profile">ACCOUNT SETTINGS</v-btn>
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%;" to='/dashboard/pricing'>SOWERK PLAN</v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="4" class="mt-10">
              <v-card class="d-flex flex-column align-center">
                <v-img class="mb-4" aspect-ratio="1" style="border: 1px solid #7C7C7C; box-shadow: 1px 1px 1px 1px #7C7C7C; width: 175px; height: 175px; border-radius: 200px; margin-top: -80px;background-color: white" :src="company.imgUrl"></v-img>
                <v-card-title style="color: #A61c00; font-size: 48px;">{{company.account_name}}</v-card-title>
                <v-card-text style="text-align: center; font-size: 18px;">{{company.description}}</v-card-text>
                <v-row class="py-8 d-flex flex-column align-center justify-center" style="border-top: 1px solid #7C7C7C; border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-row class="d-flex justify-center" style="width: 100%;">
                    <v-card-title style="width: 40%; font-size: 108px; text-align: right; color: #A61C00"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-title>
                    <div class="d-flex flex-column align-center" style="width: 60%;">
                      <v-card-title style="font-size: 24px;">Companies Approved</v-card-title>
                      <v-btn to="dashboard/businesses" style="width: 60%;" class="py-6" color="primary" outlined rounded>View Companies</v-btn>
                    </div>
                  </v-row>
                </v-row>
                <v-row class="py-8 d-flex justify-center" style="border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-card-title style="font-size: 24px; text-align: left;">SOWerk Channels</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-if="company.locations.length > 0">{{company.locations.length}}</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
                </v-row>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Headquarters</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.address}}</v-card-text>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.city}} {{company.state}}, {{company.zipcode}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Joined SOWerk</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.creationDate}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Founded</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.year_founded}}</v-card-text>
                <v-btn :to="company.website" target="_blank" class="my-8 py-6" style="width: 90%; font-size: 24px;" color="primary" outlined rounded>Company Website</v-btn>
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
          </v-col>
        </v-row>
      </transition>

      <!-- DOCUMENT CARD -->
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
    </v-container>

    <!-- BREAKPOINT - LARGE - 1264px-1904px -------------------------------------- -->
    <v-container class="" fluid id="v-step-0" style="width: 100%;" v-if="$vuetify.breakpoint.lg">
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

      <!-- TEMP PASSWORD CARD  -->
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

      <!-- ACCOUNT CHANNELS CARD  -->
      <v-row style="width: 100%;" class="mt-n16" v-if="company && company.company_type !== 'false'">
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%;" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
            </v-row>
            <v-card-text class="" style="font-size: 18px; text-align: center;margin-bottom:5%;margin-top:10%">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
            <v-row class="mt-n2 mb-n2">
              <v-col cols="3" style="text-align:center;">
                <v-img src="/building.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Locations</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/digging.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Major Projects</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/connection.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Departments</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/business-and-finance.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Revenue Streams</h2>
              </v-col>
            </v-row>
            <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
          </v-card>
        </v-col>

        <!-- VENDOR APPLICATIONS CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/resume.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/VendorApplicationsLogo-159.png">
            </v-row>
            <v-card-text style="font-size: 18px; text-align: center;margin-bottom:12%;" class="mt-n8">Just like hiring a new employee for a facility, department or major project you can do the same with finding approved vendors for each of your SOWerk channels. You simply establish a Vendor vetting application for any specific Vendor service or supply category at any of your channels. It's an identical process to how you vet an employee hire.</v-card-text>
            <v-btn color="primary" class="py-8 my-4" style="width: 90%; border-radius: 10px; font-size: 18px;" to="/dashboard/vendors/applications">Manage Applications</v-btn>

          </v-card>
        </v-col>

        <!-- VENDOR SEARCH CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center">
            <v-row style="width: 100%;" class="d-flex align-center justify-center">
              <img style="width: 10%;" class="" src="/magnifying-glass.svg">
              <img style="width: 35%;" class="" src="/SoWork Vendor Search -170.png" >
            </v-row>
            <v-card-text style="font-size: 18px;text-align:center">Once your channels are established and Vendor applications published it's time to find Vendors to apply.</v-card-text>
            <!-- <v-btn class="py-8 my-2" style="width: 90%; border-radius: 10px; font-size: 18px;background-color: #7C7C7C;color:white" @click="renderVideoCard">SOWERK 101</v-btn> -->
            <v-card-text style="font-size: 18px;padding-bottom:10%;text-align:center">Use the Vendor Invite tool to invite existing relationships you have to connect on SOWerk or search the Vendor Directory.</v-card-text>
            <v-btn color="primary" class="py-8" style="width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors">View Vendor Directory</v-btn>
            <v-btn color="primary" class="py-8" style="margin-bottom:3%;margin-top:1%;width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors/invite">Invite New Vendors</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- SOWERK 101 CARD AND APPROVED VENDORS CARD -->
      <v-row style="width: 100%;" class="mt-4 d-flex justify-center align-center" v-if="company && company.company_type !== 'false'">

        <v-col cols="4">
          <v-card style="width: 100%; height: 30vh; background-color: #7C7C7C; color: white;" class="d-flex flex-column align-center justify-center">
            <v-card-title class="mt-2" style="text-align: center; font-size: 3rem;">SOWERK 101</v-card-title>
            <v-card-text class="my-2" style="color: white; text-align: center; font-size: 1.5rem; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
            <v-btn outlined to="/dashboard/feedback/sowerkInfo/" color="white" class="py-8 my-2 mb-4" style="width: 90%; border-radius: 10px;">View All</v-btn>
          </v-card>
        </v-col>

        <v-col cols="8" style="height: auto;">
          <v-card style="width: 100%; height: 30vh;" class="d-flex align-center">

            <v-col class="d-flex flex-column align-center" cols="3">
              <v-row style="width:100%">
                <img src="/SoWork Logos with Icons-173-edited.png" style="width: 300px;height:200px;margin-left:-10px;margin-top:0px">
              </v-row>
            </v-col>

            <v-col v-for="(stat, index) in stats" cols="3">
              <transition name="slide-fade">
                <StatCard :key="index" v-if="statApproved" :stat="stat"></StatCard>
              </transition>
            </v-col>

          </v-card>
        </v-col>
      </v-row>

      <!-- RENDERS ONLY IF USER IS VENDOR -->
      <transition name="slide-fade">
        <v-row v-if="company && company.company_type === 'false' && !openUploadModelLoad">
          <v-col cols="12" class="d-flex justify-center mt-n8">
            <v-col cols="8" class="mt-8 d-flex flex-wrap justify-center">
              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
                  <v-row class="mt-n2 mb-n2" style="width: 100%;">
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center;">
                      <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Locations</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Departments</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Revenue Streams</h2>
                    </v-col>
                  </v-row>
                  <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/complete-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-171.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; color: #A61C00; text-align: center; position: absolute; top: 60%;"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary" to="dashboard/businesses" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="my-4 mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex flex-column align-center justify-center">
                  <v-card-title class="mt-2" style="text-align: center; font-size: 50px;">SOWERK 101</v-card-title>
                  <v-card-text class="my-2" style="text-align: center; font-size: 25px; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
                  <v-btn outlined rounded color="#7C7C7C" class="py-8 my-2 mb-4" style="width: 30%;" href="https://www.youtube.com/watch?v=ypTRBCA-BOY&list=PL6ZPXKB2cXYEZ-jblteV6zBNr7wDCzqPz&index=1" target="_blank">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%;" class="ml-12 mt-n16" src="/resume.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-172.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; text-align: center; position: absolute; top: 60%; color: #A61C00"><span v-if="vendorDocuments.length > 0">{{vendorDocuments.length}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary"to="/dashboard/vendor-documents" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/magnifying-glass.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-173.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center; position:absolute; top: 60%;">SOWerk offers Vendors the new customer search tool to help make great connections.</v-card-text>
                  <v-btn color="primary" to="dashboard/businesses/search" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">Business Directory</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex align-center justify-center">
                  <v-card-title class="" style="font-size: 50px; width: 70%; text-align: left">MANAGE SOWERK ACCOUNT</v-card-title>
                  <div class="d-flex flex-column align-center" style="width: 30%;">
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%; " to="/dashboard/profile">ACCOUNT SETTINGS</v-btn>
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%;" to='/dashboard/pricing'>SOWERK PLAN</v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="4" class="mt-10">
              <v-card class="d-flex flex-column align-center">
                <v-img class="mb-4" aspect-ratio="1" style="border: 1px solid #7C7C7C; box-shadow: 1px 1px 1px 1px #7C7C7C; width: 175px; height: 175px; border-radius: 200px; margin-top: -80px;background-color: white" :src="company.imgUrl"></v-img>
                <v-card-title style="color: #A61c00; font-size: 48px;">{{company.account_name}}</v-card-title>
                <v-card-text style="text-align: center; font-size: 18px;">{{company.description}}</v-card-text>
                <v-row class="py-8 d-flex flex-column align-center justify-center" style="border-top: 1px solid #7C7C7C; border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-row class="d-flex justify-center" style="width: 100%;">
                    <v-card-title style="width: 40%; font-size: 108px; text-align: right; color: #A61C00"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-title>
                    <div class="d-flex flex-column align-center" style="width: 60%;">
                      <v-card-title style="font-size: 24px;">Companies Approved</v-card-title>
                      <v-btn to="dashboard/businesses" style="width: 60%;" class="py-6" color="primary" outlined rounded>View Companies</v-btn>
                    </div>
                  </v-row>
                </v-row>
                <v-row class="py-8 d-flex justify-center" style="border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-card-title style="font-size: 24px; text-align: left;">SOWerk Channels</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-if="company.locations.length > 0">{{company.locations.length}}</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
                </v-row>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Headquarters</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.address}}</v-card-text>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.city}} {{company.state}}, {{company.zipcode}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Joined SOWerk</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.creationDate}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Founded</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.year_founded}}</v-card-text>
                <v-btn :to="company.website" target="_blank" class="my-8 py-6" style="width: 90%; font-size: 24px;" color="primary" outlined rounded>Company Website</v-btn>
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
          </v-col>
        </v-row>
      </transition>

      <!-- DOCUMENT CARD -->
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
    </v-container>

    <!-- BREAKPOINT - MEDIUM - 960px-1264px -------------------------------------- -->
    <v-container class="" fluid id="v-step-0" style="width: 100%;" v-if="$vuetify.breakpoint.md">
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

      <!-- TEMP PASSWORD CARD  -->
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

      <!-- ACCOUNT CHANNELS CARD  -->
      <v-row style="width: 100%;" class="mt-n16" v-if="company && company.company_type !== 'false'">
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%;" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
            </v-row>
            <v-card-text class="" style="font-size: 18px; text-align: center;margin-bottom:5%;margin-top:10%">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
            <v-row class="mt-n2 mb-n2">
              <v-col cols="3" style="text-align:center;">
                <v-img src="/building.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Locations</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/digging.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Major Projects</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/connection.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Departments</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/business-and-finance.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Revenue Streams</h2>
              </v-col>
            </v-row>
            <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
          </v-card>
        </v-col>

        <!-- VENDOR APPLICATIONS CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/resume.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/VendorApplicationsLogo-159.png">
            </v-row>
            <v-card-text style="font-size: 18px; text-align: center;margin-bottom:12%;" class="mt-n8">Just like hiring a new employee for a facility, department or major project you can do the same with finding approved vendors for each of your SOWerk channels. You simply establish a Vendor vetting application for any specific Vendor service or supply category at any of your channels. It's an identical process to how you vet an employee hire.</v-card-text>
            <v-btn color="primary" class="py-8 my-4" style="width: 90%; border-radius: 10px; font-size: 18px;" to="/dashboard/vendors/applications">Manage Applications</v-btn>

          </v-card>
        </v-col>

        <!-- VENDOR SEARCH CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center">
            <v-row style="width: 100%;" class="d-flex align-center justify-center">
              <img style="width: 10%;" class="" src="/magnifying-glass.svg">
              <img style="width: 35%;" class="" src="/SoWork Vendor Search -170.png" >
            </v-row>
            <v-card-text style="font-size: 18px;text-align:center">Once your channels are established and Vendor applications published it's time to find Vendors to apply.</v-card-text>
            <!-- <v-btn class="py-8 my-2" style="width: 90%; border-radius: 10px; font-size: 18px;background-color: #7C7C7C;color:white" @click="renderVideoCard">SOWERK 101</v-btn> -->
            <v-card-text style="font-size: 18px;padding-bottom:10%;text-align:center">Use the Vendor Invite tool to invite existing relationships you have to connect on SOWerk or search the Vendor Directory.</v-card-text>
            <v-btn color="primary" class="py-8" style="width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors">View Vendor Directory</v-btn>
            <v-btn color="primary" class="py-8" style="margin-bottom:3%;margin-top:1%;width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors/invite">Invite New Vendors</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- SOWERK 101 CARD AND APPROVED VENDORS CARD -->
      <v-row style="width: 100%;" class="mt-4 d-flex justify-center align-center" v-if="company && company.company_type !== 'false'">

        <v-col cols="4">
          <v-card style="width: 100%; height: 30vh; background-color: #7C7C7C; color: white;" class="d-flex flex-column align-center justify-center">
            <v-card-title class="mt-2" style="text-align: center; font-size: 3rem;">SOWERK 101</v-card-title>
            <v-card-text class="my-2" style="color: white; text-align: center; font-size: 1.5rem; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
            <v-btn outlined to="/dashboard/feedback/sowerkInfo/" color="white" class="py-8 my-2 mb-4" style="width: 90%; border-radius: 10px;">View All</v-btn>
          </v-card>
        </v-col>

        <v-col cols="8" style="height: auto;">
          <v-card style="width: 100%; height: 30vh;" class="d-flex align-center">

            <v-col class="d-flex flex-column align-center" cols="3">
              <v-row style="width:100%">
                <img src="/SoWork Logos with Icons-173-edited.png" style="width: 300px;height:200px;margin-left:-10px;margin-top:0px">
              </v-row>
            </v-col>

            <v-col v-for="(stat, index) in stats" cols="3">
              <transition name="slide-fade">
                <StatCard :key="index" v-if="statApproved" :stat="stat"></StatCard>
              </transition>
            </v-col>

          </v-card>
        </v-col>
      </v-row>

      <!-- RENDERS ONLY IF USER IS VENDOR -->
      <transition name="slide-fade">
        <v-row v-if="company && company.company_type === 'false' && !openUploadModelLoad">
          <v-col cols="12" class="d-flex justify-center mt-n8">
            <v-col cols="8" class="mt-8 d-flex flex-wrap justify-center">
              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
                  <v-row class="mt-n2 mb-n2" style="width: 100%;">
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center;">
                      <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Locations</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Departments</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Revenue Streams</h2>
                    </v-col>
                  </v-row>
                  <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/complete-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-171.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; color: #A61C00; text-align: center; position: absolute; top: 60%;"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary" to="dashboard/businesses" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="my-4 mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex flex-column align-center justify-center">
                  <v-card-title class="mt-2" style="text-align: center; font-size: 50px;">SOWERK 101</v-card-title>
                  <v-card-text class="my-2" style="text-align: center; font-size: 25px; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
                  <v-btn outlined rounded color="#7C7C7C" class="py-8 my-2 mb-4" style="width: 30%;" href="https://www.youtube.com/watch?v=ypTRBCA-BOY&list=PL6ZPXKB2cXYEZ-jblteV6zBNr7wDCzqPz&index=1" target="_blank">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%;" class="ml-12 mt-n16" src="/resume.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-172.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; text-align: center; position: absolute; top: 60%; color: #A61C00"><span v-if="vendorDocuments.length > 0">{{vendorDocuments.length}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary"to="/dashboard/vendor-documents" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/magnifying-glass.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-173.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center; position:absolute; top: 60%;">SOWerk offers Vendors the new customer search tool to help make great connections.</v-card-text>
                  <v-btn color="primary" to="dashboard/businesses/search" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">Business Directory</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex align-center justify-center">
                  <v-card-title class="" style="font-size: 50px; width: 70%; text-align: left">MANAGE SOWERK ACCOUNT</v-card-title>
                  <div class="d-flex flex-column align-center" style="width: 30%;">
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%; " to="/dashboard/profile">ACCOUNT SETTINGS</v-btn>
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%;" to='/dashboard/pricing'>SOWERK PLAN</v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="4" class="mt-10">
              <v-card class="d-flex flex-column align-center">
                <v-img class="mb-4" aspect-ratio="1" style="border: 1px solid #7C7C7C; box-shadow: 1px 1px 1px 1px #7C7C7C; width: 175px; height: 175px; border-radius: 200px; margin-top: -80px;background-color: white" :src="company.imgUrl"></v-img>
                <v-card-title style="color: #A61c00; font-size: 48px;">{{company.account_name}}</v-card-title>
                <v-card-text style="text-align: center; font-size: 18px;">{{company.description}}</v-card-text>
                <v-row class="py-8 d-flex flex-column align-center justify-center" style="border-top: 1px solid #7C7C7C; border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-row class="d-flex justify-center" style="width: 100%;">
                    <v-card-title style="width: 40%; font-size: 108px; text-align: right; color: #A61C00"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-title>
                    <div class="d-flex flex-column align-center" style="width: 60%;">
                      <v-card-title style="font-size: 24px;">Companies Approved</v-card-title>
                      <v-btn to="dashboard/businesses" style="width: 60%;" class="py-6" color="primary" outlined rounded>View Companies</v-btn>
                    </div>
                  </v-row>
                </v-row>
                <v-row class="py-8 d-flex justify-center" style="border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-card-title style="font-size: 24px; text-align: left;">SOWerk Channels</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-if="company.locations.length > 0">{{company.locations.length}}</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
                </v-row>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Headquarters</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.address}}</v-card-text>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.city}} {{company.state}}, {{company.zipcode}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Joined SOWerk</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.creationDate}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Founded</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.year_founded}}</v-card-text>
                <v-btn :to="company.website" target="_blank" class="my-8 py-6" style="width: 90%; font-size: 24px;" color="primary" outlined rounded>Company Website</v-btn>
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
          </v-col>
        </v-row>
      </transition>

      <!-- DOCUMENT CARD -->
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
    </v-container>

    <!-- BREAKPOINT - SMALL - 600px-960px -------------------------------------- -->
    <v-container class="" fluid id="v-step-0" style="width: 100%;" v-if="$vuetify.breakpoint.sm">
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

      <!-- TEMP PASSWORD CARD  -->
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

      <!-- ACCOUNT CHANNELS CARD  -->
      <v-row style="width: 100%;" class="mt-n16" v-if="company && company.company_type !== 'false'">
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%;" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
            </v-row>
            <v-card-text class="" style="font-size: 18px; text-align: center;margin-bottom:5%;margin-top:10%">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
            <v-row class="mt-n2 mb-n2">
              <v-col cols="3" style="text-align:center;">
                <v-img src="/building.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Locations</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/digging.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Major Projects</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/connection.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Departments</h2>
              </v-col>

              <v-col cols="3" style="text-align:center">
                <v-img src="/business-and-finance.svg" style="max-width:65px;max-height:65px;margin-left:10%;"></v-img>
                <h2 style="font-weight:900;font-size:.8rem;">Revenue Streams</h2>
              </v-col>
            </v-row>
            <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
          </v-card>
        </v-col>

        <!-- VENDOR APPLICATIONS CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
            <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
              <img style="width: 10%" class="ml-12 mt-n16" src="/resume.svg">
              <img style="width: 90%;" class="ml-n12 mt-n16" src="/VendorApplicationsLogo-159.png">
            </v-row>
            <v-card-text style="font-size: 18px; text-align: center;margin-bottom:12%;" class="mt-n8">Just like hiring a new employee for a facility, department or major project you can do the same with finding approved vendors for each of your SOWerk channels. You simply establish a Vendor vetting application for any specific Vendor service or supply category at any of your channels. It's an identical process to how you vet an employee hire.</v-card-text>
            <v-btn color="primary" class="py-8 my-4" style="width: 90%; border-radius: 10px; font-size: 18px;" to="/dashboard/vendors/applications">Manage Applications</v-btn>

          </v-card>
        </v-col>

        <!-- VENDOR SEARCH CARD -->
        <v-col cols="4" style="height: 50vh;">
          <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center">
            <v-row style="width: 100%;" class="d-flex align-center justify-center">
              <img style="width: 10%;" class="" src="/magnifying-glass.svg">
              <img style="width: 35%;" class="" src="/SoWork Vendor Search -170.png" >
            </v-row>
            <v-card-text style="font-size: 18px;text-align:center">Once your channels are established and Vendor applications published it's time to find Vendors to apply.</v-card-text>
            <!-- <v-btn class="py-8 my-2" style="width: 90%; border-radius: 10px; font-size: 18px;background-color: #7C7C7C;color:white" @click="renderVideoCard">SOWERK 101</v-btn> -->
            <v-card-text style="font-size: 18px;padding-bottom:10%;text-align:center">Use the Vendor Invite tool to invite existing relationships you have to connect on SOWerk or search the Vendor Directory.</v-card-text>
            <v-btn color="primary" class="py-8" style="width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors">View Vendor Directory</v-btn>
            <v-btn color="primary" class="py-8" style="margin-bottom:3%;margin-top:1%;width: 90%; border-radius: 10px; font-size: 18px;" to="dashboard/vendors/invite">Invite New Vendors</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- SOWERK 101 CARD AND APPROVED VENDORS CARD -->
      <v-row style="width: 100%;" class="mt-4 d-flex justify-center align-center" v-if="company && company.company_type !== 'false'">

        <v-col cols="4">
          <v-card style="width: 100%; height: 30vh; background-color: #7C7C7C; color: white;" class="d-flex flex-column align-center justify-center">
            <v-card-title class="mt-2" style="text-align: center; font-size: 3rem;">SOWERK 101</v-card-title>
            <v-card-text class="my-2" style="color: white; text-align: center; font-size: 1.5rem; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
            <v-btn outlined to="/dashboard/feedback/sowerkInfo/" color="white" class="py-8 my-2 mb-4" style="width: 90%; border-radius: 10px;">View All</v-btn>
          </v-card>
        </v-col>

        <v-col cols="8" style="height: auto;">
          <v-card style="width: 100%; height: 30vh;" class="d-flex align-center">

            <v-col class="d-flex flex-column align-center" cols="3">
              <v-row style="width:100%">
                <img src="/SoWork Logos with Icons-173-edited.png" style="width: 300px;height:200px;margin-left:-10px;margin-top:0px">
              </v-row>
            </v-col>

            <v-col v-for="(stat, index) in stats" cols="3">
              <transition name="slide-fade">
                <StatCard :key="index" v-if="statApproved" :stat="stat"></StatCard>
              </transition>
            </v-col>

          </v-card>
        </v-col>
      </v-row>

      <!-- RENDERS ONLY IF USER IS VENDOR -->
      <transition name="slide-fade">
        <v-row v-if="company && company.company_type === 'false' && !openUploadModelLoad">
          <v-col cols="12" class="d-flex justify-center mt-n8">
            <v-col cols="8" class="mt-8 d-flex flex-wrap justify-center">
              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/channels-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWerk-LogoFacilities.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center">Channels are any facility, company division or department, or even a large project where you will want to specifically find, vet, and manage Vendors.</v-card-text>
                  <v-row class="mt-n2 mb-n2" style="width: 100%;">
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center;">
                      <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Locations</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Departments</h2>
                    </v-col>
                    <v-col cols="4" class="d-flex flex-column align-center" style="text-align:center">
                      <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                      <h2 style="width: 100%; text-align: center; font-weight:900;font-size:1.1rem;">Revenue Streams</h2>
                    </v-col>
                  </v-row>
                  <v-btn color="primary" to="dashboard/channels" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View Channels</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/complete-icon.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-171.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; color: #A61C00; text-align: center; position: absolute; top: 60%;"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary" to="dashboard/businesses" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="my-4 mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex flex-column align-center justify-center">
                  <v-card-title class="mt-2" style="text-align: center; font-size: 50px;">SOWERK 101</v-card-title>
                  <v-card-text class="my-2" style="text-align: center; font-size: 25px; line-height: 1.75rem">Check out the SOWerk 101 knowledge center for support</v-card-text>
                  <v-btn outlined rounded color="#7C7C7C" class="py-8 my-2 mb-4" style="width: 30%;" href="https://www.youtube.com/watch?v=ypTRBCA-BOY&list=PL6ZPXKB2cXYEZ-jblteV6zBNr7wDCzqPz&index=1" target="_blank">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%;" class="ml-12 mt-n16" src="/resume.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-172.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 108px; text-align: center; position: absolute; top: 60%; color: #A61C00"><span v-if="vendorDocuments.length > 0">{{vendorDocuments.length}}</span><span v-else>0</span></v-card-text>
                  <v-btn color="primary"to="/dashboard/vendor-documents" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">View All</v-btn>
                </v-card>
              </v-col>

              <v-col cols="6" style="height: 50vh;">
                <v-card style="width: 100%; height: 50vh;" class="d-flex flex-column align-center justify-center">
                  <v-row style="width: 100%; height: 40%" class="d-flex justify-center mt-n16">
                    <img style="width: 10%" class="ml-12 mt-n16" src="/magnifying-glass.svg">
                    <img style="width: 90%;" class="ml-n12 mt-n16" src="/SoWork Logo-173.png">
                  </v-row>
                  <v-card-text class="" style="font-size: 18px; text-align: center; position:absolute; top: 60%;">SOWerk offers Vendors the new customer search tool to help make great connections.</v-card-text>
                  <v-btn color="primary" to="dashboard/businesses/search" class="py-8 mb-4" style="width: 90%; border-radius: 10px; font-size: 18px;">Business Directory</v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" class="mt-8">
                <v-card style="width: 100%; height: 30vh; background-color: white;" class="d-flex align-center justify-center">
                  <v-card-title class="" style="font-size: 50px; width: 70%; text-align: left">MANAGE SOWERK ACCOUNT</v-card-title>
                  <div class="d-flex flex-column align-center" style="width: 30%;">
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%; " to="/dashboard/profile">ACCOUNT SETTINGS</v-btn>
                    <v-btn rounded outlined color="primary" class="py-8 my-2 mb-4" style="width: 90%;" to='/dashboard/pricing'>SOWERK PLAN</v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="4" class="mt-10">
              <v-card class="d-flex flex-column align-center">
                <v-img class="mb-4" aspect-ratio="1" style="border: 1px solid #7C7C7C; box-shadow: 1px 1px 1px 1px #7C7C7C; width: 175px; height: 175px; border-radius: 200px; margin-top: -80px;background-color: white" :src="company.imgUrl"></v-img>
                <v-card-title style="color: #A61c00; font-size: 48px;">{{company.account_name}}</v-card-title>
                <v-card-text style="text-align: center; font-size: 18px;">{{company.description}}</v-card-text>
                <v-row class="py-8 d-flex flex-column align-center justify-center" style="border-top: 1px solid #7C7C7C; border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-row class="d-flex justify-center" style="width: 100%;">
                    <v-card-title style="width: 40%; font-size: 108px; text-align: right; color: #A61C00"><span v-if="approvedVendorConnectionCount > 0">{{approvedVendorConnectionCount}}</span><span v-else>0</span></v-card-title>
                    <div class="d-flex flex-column align-center" style="width: 60%;">
                      <v-card-title style="font-size: 24px;">Companies Approved</v-card-title>
                      <v-btn to="dashboard/businesses" style="width: 60%;" class="py-6" color="primary" outlined rounded>View Companies</v-btn>
                    </div>
                  </v-row>
                </v-row>
                <v-row class="py-8 d-flex justify-center" style="border-bottom: 1px solid #7C7C7C; width: 90%;">
                  <v-card-title style="font-size: 24px; text-align: left;">SOWerk Channels</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-if="company.locations.length > 0">{{company.locations.length}}</v-card-title>
                  <v-card-title style="color: #A61C00; font-size: 108px;" v-else>0</v-card-title>
                </v-row>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Headquarters</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.address}}</v-card-text>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.city}} {{company.state}}, {{company.zipcode}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Joined SOWerk</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.creationDate}}</v-card-text>
                <v-card-title style="font-size: 24px; text-align: left; align-self: flex-start">Founded</v-card-title>
                <v-card-text style="font-size: 24px; text-align: left;">{{company.year_founded}}</v-card-text>
                <v-btn :to="company.website" target="_blank" class="my-8 py-6" style="width: 90%; font-size: 24px;" color="primary" outlined rounded>Company Website</v-btn>
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
          </v-col>
        </v-row>
      </transition>

      <!-- DOCUMENT CARD -->
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
        insurances: [],
        licenses: [],
        approvedVendorConnectionCount: 0,
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
        await this.getLicenses();
        await this.getInsurances();
        await this.getApprovedProviderConnections();
        await this.getApplications(this.currentUser.companies_id);
        await this.getMessages(this.currentUser.companies_id);
        this.loadModal = true
        if(this.company.company_type === 'false') {
          await this.getVendorProvidedDocuments();
        }
        console.log(this.company.company_type, "Gggggggg")
    },
    methods: {
      async getInsurances() {
        await this.$http.get('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.currentUser.companies_id)
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
        await this.$http.get('https://www.sowerkbackend.com/api/license/byCompanyId/' + this.currentUser.companies_id)
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
        console.log(data, "gggggggd")
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
        } else {
          await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/bySpId/' + this.currentUser.companies_id)
            .then(response => {
              console.log('response approvedproviderconnections', response.data);
              if(this.currentUser.is_superuser === false) {
                for(let i=0; i<response.data.length; i++) {
                  if(response.data[i].pmuserprofiles_id === this.currentUser.id) {
                    console.log(response.data[i], 'applications for staff account')
                    this.approvedVendorConnectionCount ++
                  }
                }
              } else {
                this.approvedVendorConnectionCount = response.data.length
              }
            })
            .catch(err => {
              console.log('err in getting approved provider connections', err);
            })
        }
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
