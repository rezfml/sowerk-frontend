<template>
  <v-container style="width: 100%;" overflow-y-auto>
<!--    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
<!--      <v-progress-circular-->
<!--        indeterminate-->
<!--        color="primary"-->
<!--        :size="50"-->
<!--      ></v-progress-circular>-->
<!--    </div>-->

<!--    TOP INFO BANNER WITH LINK TO YOUTUBE VIDEO    -->
    <transition name="slide-fade">
      <v-card class="my-4 flex-row justify-space-between align-center mx-0">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto;background-color:#404040">

          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;">SOWERK 101</h1>
          </v-col>

          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn about Vendor Requirements and why they are important to your SOWerk Account.</p>
          </v-col>

          <!-- VENDOR APPLICATIONS VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;" v-if="videosLinks.vendorApplications === true">
            <v-btn @click="watchClickedVendorApplications" style="display:block;border: 1px solid white;padding:8% 5% 12% 5%;text-decoration:none;color:inherit;background-color:#404040">
              <span style="font-size:1rem;letter-spacing:1px;font-weight:400;color:white;text-align:center;">
                WATCH NOW -Vendor Applications-
              </span>
            </v-btn>
          </v-col>

          <!-- COMPANY DOCUMENTS VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;" v-if="videosLinks.companyDocuments === true">
            <v-btn @click="watchClickedCompanyDocuments" style="display:block;border: 1px solid white;padding:8% 5% 12% 5%;text-decoration:none;color:inherit;background-color:#404040">
              <span style="font-size:1rem;letter-spacing:1px;font-weight:400;color:white;text-align:center;">
                WATCH NOW -Company Documents-
              </span>
            </v-btn>
          </v-col>

          <!-- COMPANY TEMPLATES VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;" v-if="videosLinks.companyTemplates === true">
            <v-btn @click="watchClickedCompanyTemplates" style="display:block;border: 1px solid white;padding:8% 5% 12% 5%;text-decoration:none;color:inherit;background-color:#404040">
              <span style="font-size:1rem;letter-spacing:1px;font-weight:400;color:white;text-align:center;">
                WATCH NOW -Company Templates-
              </span>
            </v-btn>
          </v-col>

          <!-- SOWERK TEMPLATES VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;" v-if="videosLinks.sowerkTemplates === true">
            <v-btn @click="watchClickedSowerkTemplates" style="display:block;border: 1px solid white;padding:8% 5% 12% 5%;text-decoration:none;color:inherit;background-color:#404040">
              <span style="font-size:1rem;letter-spacing:1px;font-weight:400;color:white;text-align:center;">
                WATCH NOW -SOWERK Templates-
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">

      <v-card style="height:550px;width:100%;background-color:#404040;border-radius:1%;" v-if="clickedLinks.vendorApplications === true">
        <div style="border-radius:1%;">
          <iframe src="https://vimeo.com/showcase/7955326/embed" allowfullscreen frameborder="0" style="width:75vw;height:550px;border-radius:3%;margin-left:3%;">
          </iframe>
        </div>
      </v-card>

      <v-card style="height:550px;width:100%;background-color:#404040;border-radius:1%;" v-if="clickedLinks.companyDocuments === true">
        <div style="border-radius:1%;">
          <iframe src="https://player.vimeo.com/video/495537823" allowfullscreen frameborder="0" style="width:75vw;height:550px;border-radius:3%;margin-left:3%;">
          </iframe>
        </div>
      </v-card>

      <v-card style="height:550px;width:100%;background-color:#404040;border-radius:1%;" v-if="clickedLinks.companyTemplates === true">
        <div style="border-radius:1%;">
          <iframe src="https://player.vimeo.com/video/495537809" allowfullscreen frameborder="0" style="width:75vw;height:550px;border-radius:3%;margin-left:3%;">
          </iframe>
        </div>
      </v-card>

      <v-card style="height:550px;width:100%;background-color:#404040;border-radius:1%;" v-if="clickedLinks.sowerkTemplates === true">
        <div style="border-radius:1%;">
          <iframe src="https://player.vimeo.com/video/495537767" allowfullscreen frameborder="0" style="width:75vw;height:550px;border-radius:3%;margin-left:3%;">
          </iframe>
        </div>
      </v-card>

    </transition>

<!--    SKELETON LOADER    -->
    <v-skeleton-loader
      v-if="!loading"
      type="card-avatar, article, article, actions"
      min-height="50vh"
      min-width="50vw"
    ></v-skeleton-loader>



<!--    BUTTONS AND TEXT TO THE RIGHT OF VENDER APPLICATIONS BACKGROUND IMAGE    -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
          <v-row style="width: 100%; height: auto;margin-bottom:5%" class="d-flex flex align-center">
            <v-col cols="7" style="">
              <v-img height="400px" src="/SoWork Logos with Icons-159.png"></v-img>
            </v-col>

            <v-col cols="5" class="d-flex flex-column justify-center">
              <v-row>
                <h2 style="color:darkred">What Are Vendor Applications?</h2>
                <p class="mt-4">Vetted Vendors get the job done right, and SOWerk is designed to give you the power to ensure every vendor or supplier meets your requirements. Through this interface, you can build an approved Vendor application specific to a service or supplier category, turn applications on or off, and even customize any application to one of your channels. Create and use a company template that can be implemented across all channels, or in the event of special requirements for only one of your channels (i.e. local permit requirement), take that company template and add a custom question that is only visible to that facility.</p>
              </v-row>

              <v-row>
                <v-col cols="6" class="d-flex flex-column">
                  <v-btn @click="loadYourCompanyTemplatesFunction" class="py-4 mb-3" color="primary" style="width:100%;height:70px;border-radius:5px;justify-content:space-around;">
                    <span>
                      <span><v-img src="/profile-icon.svg" style="max-height:50px;max-width:50px;padding:5%;"></v-img></span>
                    </span>
                    <span style="padding-top:5%;padding-left:5%">
                      <p style="font-size:1.1rem">COMPANY</p>
                      <v-spacer></v-spacer>
                      <p style="font-size:1.1rem">TEMPLATES</p>
                    </span>
                  </v-btn>
                </v-col>

                <v-col cols="6" class="d-flex flex-column">
                  <v-btn @click="loadCompanyDocumentsFunction" class="py-4 mb-3" color="primary" style="width:100%;height:70px;border-radius:5px;justify-content:space-around;">
                    <span>
                      <span><v-img src="/outbox-icon.svg" style="max-height:50px;max-width:50px;padding:5%;"></v-img></span>
                    </span>
                    <span style="padding-top:5%;padding-left:5%">
                      <p style="font-size:1.1rem">COMPANY</p>
                      <v-spacer></v-spacer>
                      <p style="font-size:1.1rem">DOCUMENTS</p>
                    </span>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6" class="d-flex flex-column">
                  <v-btn @click="loadApplicationLocationsFunction" class="py-4 mb-3" color="primary" style="width:100%;height:70px;border-radius:5px;justify-content:space-around;">
                    <span>
                      <span><v-img src="/resume-icon.svg" style="max-height:50px;max-width:50px;padding:5%;"></v-img></span>
                    </span>
                    <span style="padding-top:5%;padding-left:5%;">
                      <p style="font-size:1.1rem">ALL VENDOR</p>
                      <v-spacer></v-spacer>
                      <p style="font-size:1.1rem">APPLICATIONS</p>
                    </span>
                  </v-btn>
                </v-col>

                <v-col cols="6" class="d-flex flex-column">
                  <v-btn @click="loadApplicationTemplatesFunction" class="py-4 mb-3" color="#707070" style="width:100%;height:70px;border-radius:5px;justify-content:space-around;">
                    <span>
                      <span><v-img src="/data-management-icon.svg" style="max-height:50px;max-width:50px;padding:5%;"></v-img></span>
                    </span>
                    <span style="padding-top:5%;padding-left:5%">
                      <p style="font-size:1.1rem;color:white">SOWERK</p>
                      <v-spacer></v-spacer>
                      <p style="font-size:1.1rem;color:white">TEMPLATES</p>
                    </span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
    </transition>
    <!--    <v-row class="d-flex flex-column align-center mt-2 mb-4" style="background: #A61C00; width: 100%;">-->
    <!--      <v-card-title style="color: white;">Manage Vendor Applications</v-card-title>-->
    <!--    </v-row>-->

    <!--    LOWER SECTION, 'YOUR VENDOR APPLICATIONS' & 'ADD NEW VENDOR FORM' button & TABLE below    -->
    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loadApplicationLocations && loading">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Your Vendor Applications</v-card-title>
      <v-btn @click="addNewVendorFormLoading" class="py-6 mb-2" color="primary" style="position: absolute; right: 10px; top: -20px; width: 30%;" ><v-icon>mdi-plus</v-icon>Add New Vendor Form</v-btn>
      <template v-if="loading">
      <!--        <v-simple-table class="pt-16">-->
      <!--          <thead >-->
      <!--          <tr class="d-flex justify-start">-->
      <!--            <th style="color: #a61c00; width: 10%; text-align: center">Application Name</th>-->
      <!--            <th style="color: #a61c00; width: 10%; text-align: center">Category</th>-->
      <!--            <th style="color: #a61c00; width: 15%; text-align: center">Location Name</th>-->
      <!--            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>-->
      <!--            <th style="color: #a61c00; width: 10%; text-align: center">#Questions</th>-->
      <!--            <th style="color: #a61c00; width: 24%; text-align: center">Application Status</th>-->
      <!--            <th style="color: #a61c00; width: 10%;">Actions</th>-->
      <!--          </tr>-->
      <!--          </thead>-->
      <!--          <tbody>-->
      <!--          <tr  v-for="(location, index) in locations" style="background: none !important;">-->
      <!--            <div v-for="(service, indexService) in location.services">-->
      <!--              <div class="d-flex justify-start align-center hover-select" style="border-bottom: 1px solid gray; transition: 0.3s;" v-for="(userform, indexUserForm) in service.userforms">-->

      <!--                <td style="width: 10%; text-align: center" class="py-1">{{userform.name}}</td>-->
      <!--                <td style="width: 10%; text-align: center" class="py-1">{{service.name}}</td>-->
      <!--                <td style="width: 15%; text-align: center" class="py-1">{{location.name}}</td>-->
      <!--                <td style="width: 15%; text-align: center" class="py-1">-->
      <!--                  <div class="d-flex flex-column align-center">-->
      <!--                    <p>{{location.address}}</p>-->
      <!--                    <p>{{location.city}}, {{location.state}}</p>-->
      <!--                  </div>-->
      <!--                </td>-->
      <!--                <td style="width: 9%; text-align: center" class="py-1">{{userform.formfields.length}}</td>-->
      <!--                <td style="width: 22%;" class="py-1 center mr-10 d-flex">-->
      <!--                  <v-select-->
      <!--                    v-model="userform.applicationStatus"-->
      <!--                    :placeholder="userform.applicationStatus"-->
      <!--                    :items="applicationOptions"-->
      <!--                    @change="userformEditActive(userform)"-->
      <!--                  >-->
      <!--                  </v-select>-->
      <!--&lt;!&ndash;                  <v-checkbox&ndash;&gt;-->
      <!--&lt;!&ndash;                    v-if="userform.applicationStatus === 'Published - Private'"&ndash;&gt;-->
      <!--&lt;!&ndash;                    :label="'Publish Link Publicly?'"&ndash;&gt;-->
      <!--&lt;!&ndash;                    v-model="userform.applicationStatusLinkPublish"&ndash;&gt;-->
      <!--&lt;!&ndash;                    class="ml-3"&ndash;&gt;-->
      <!--&lt;!&ndash;                    @change="userformEditApplicationPublish(userform)"&ndash;&gt;-->
      <!--&lt;!&ndash;                  ></v-checkbox>&ndash;&gt;-->
      <!--                </td>-->
      <!--                <td style="width: 10%;" class="d-flex flex-column align-center">-->
      <!--                  <v-btn class="my-1" color="#707070" :to="'/dashboard/vendors/applications/' + userform.id" style="color: white; width: 100%;">Edit</v-btn>-->
      <!--                  <v-btn @click="deleteUserForm(userform)" class="my-1" color="primary" style="width: 100%;">Delete</v-btn>-->
      <!--                </td>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </tr>-->
      <!--          </tbody>-->
      <!--        </v-simple-table>-->

        <v-data-table
          :headers="headersApplicationTemplateVal"
          :items="applicationTemplateVal"
          :items-per-page="10"
          class="pt-16"
          :expanded.sync="expanded"
          show-expand
          single-expand
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-simple-table
                fixed-header
                height="300px"
              >
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th>Question</th>
                    <th>Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="app in item.formfields" :key="app.id">
                    <td>Question# {{(app.order + 1)}}</td>
                    <td>{{ app.name }}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </td>
          </template>

          <template v-slot:item.formfields="{ item }">
            <p v-if="item.formfields.length">{{item.formfields.length}}</p>
            <p v-else>0</p>
          </template>

          <template v-slot:item.applicationStatus="{ item }">
            <v-select
              v-model="item.applicationStatus"
              :placeholder="item.applicationStatus"
              :items="applicationOptions"
              @change="userformEditActive(item)"
            >
            </v-select>
          </template>

          <template v-slot:item.actions="{item}">
            <v-btn class="my-1" color="#707070" :to="'/dashboard/vendors/applications/' + item.id" style="color: white; width: 100%;">Edit</v-btn>
            <v-btn @click="deleteUserForm(item)" class="my-1" color="primary" style="width: 100%;">Delete</v-btn>
          </template>
        </v-data-table>
      </template>
    </v-card>
    </transition>
      <!--    <v-row class="d-flex justify-center align-center mt-4" style="width: 100%; background:#a61c00;" v-if="loadApplicationTemplates">-->
      <!--      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>-->
      <!--      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Application Templates</v-card-title>-->
      <!--    </v-row>-->

    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="addCompanyLoader">
      <v-progress-circular
        indeterminate
        color="#7C7C7C"
        :size="80"
        v-if="addCompanyLoader"
      ></v-progress-circular>
    </div>
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="assignChannel">
      <v-progress-circular
        indeterminate
        color="#7C7C7C"
        :size="80"
        v-if="assignChannel"
      ></v-progress-circular>
    </div>

    <transition name="slide-fade">
      <v-card class="d-flex justify-center" v-if="loadYourCompanyTemplates || loadApplicationTemplates">
        <v-card-title class="" style="color: #A61C00; width: 80%; text-align: center; word-break: break-word;">Tip* A quick way to build a Vendor Application or Company Template is to start with a SOWerk Template that provides more of your desired questions (i.e. “General Questions” template). Then, once added to Company Templates or Assigned Channel you simply find this new item and choose Edit where you can add more questions.</v-card-title>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-16" v-if="loadApplicationTemplates" style="width: 100%;">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">SOWerk Application Templates</v-card-title>
      <template v-if="loading" style="width: 100%;">
        <v-data-table
          :headers="headers"
          :items="applicationTemplates"
          :items-per-page="10"
          class="pt-16"
          :expanded.sync="expanded"
          show-expand
          single-expand
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-simple-table
                fixed-header
                height="300px"
              >
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th>Question</th>
                    <th>Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="app in item.applicationtemplatesformfields" :key="app.name">
                    <td>Question# {{(app.order + 1)}}</td>
                    <td>{{ app.name }}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </td>
          </template>
          <template v-slot:item.questions="{item}">
            <p>{{item.applicationtemplatesformfields.length}}</p>
          </template>
          <template v-slot:item.actions="{item}">
            <div class="d-flex" v-if="$vuetify.breakpoint.xl">
              <v-btn @click="addtoLocationLoad(item)" class="mx-2" color="#707070" style="color:white; width: 45%;">Assign Channel</v-btn>
              <v-btn @click="addToCompanyTemplates(item)" class="mx-2" color="primary" style="width: 53%;">Add to Company Templates</v-btn>
            </div>
            <v-btn v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs" @click="addtoLocationLoad(item)" class="mx-2 my-1" color="#707070" style="color:white; width: 80%;">Assign Channel</v-btn>
            <v-btn v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs" @click="addToCompanyTemplates(item)" class="mx-2 my-1" color="primary" style="width: 80%;">Add to Company Templates</v-btn>
          </template>
        </v-data-table>
      </template>
    </v-card>
    </transition>
      <!--    <v-row class="d-flex justify-center align-center mt-4" style="width: 100%; background:#a61c00;" v-if="loadYourCompanyTemplates">-->
      <!--      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>-->
      <!--      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Your Company Application Templates</v-card-title>-->
      <!--    </v-row>-->

    <transition name="slide-fade">
      <v-card class="mt-16" v-if="loadYourCompanyTemplates">
        <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Company Approved Templates</v-card-title>
        <v-btn @click="addNewCompanyTemplateLoading" class="py-6 mb-2" color="primary" style="position: absolute; right: 10px; top: -20px; width: 25%;"><v-icon>mdi-plus</v-icon>Add New Template</v-btn>
        <template v-if="loading" style="width: 100%;">
          <v-data-table
            :headers="headers"
            :items="companyTemplates"
            :items-per-page="10"
            class="pt-16"
            :expanded.sync="expanded"
            show-expand
            single-expand
          >
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <v-simple-table
                  fixed-header
                  height="300px"
                >
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th>Question</th>
                      <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="app in item.companytemplatesformfields" :key="app.name">
                      <td>Question# {{app.order}}</td>
                      <td>{{ app.name }}</td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </td>
            </template>


            <template v-slot:item.questions="{item}">
              <p>{{item.companytemplatesformfields.length}}</p>
            </template>
            <template v-slot:item.actions="{item}" class="d-flex flex-column align-center">
              <div class="d-flex flex-column align-center" v-if="$vuetify.breakpoint.xl">
                <v-btn :to="'/dashboard/vendors/companytemplates/' + item.id" class="mx-2 my-2" style="width: 80%;">Edit</v-btn>
                <v-btn @click="addtoLocationLoad(item)" class="mx-2" color="#707070" style="color:white; width: 80%;">Assign Channel</v-btn>
                <v-btn @click="deleteCompanyTemplates(item)" class="mx-2 my-2" color="primary" style="width: 80%;">Delete</v-btn>
              </div>
              <v-btn v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs" :to="'/dashboard/vendors/companytemplates/' + item.id" class="mx-2 my-2" style="width: 80%;">Edit</v-btn>
              <v-btn v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs" @click="addtoLocationLoad(item)" class="mx-2" color="#707070" style="color:white; width: 80%;">Assign Channel</v-btn>
              <v-btn v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs" @click="deleteCompanyTemplates(item)" class="mx-2 my-2" color="primary" style="width: 80%;">Delete</v-btn>
            </template>
          </v-data-table>
        </template>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-row class="mt-8" v-if="loadYourCompanyDocuments">
        <v-col cols="6">
          <v-card>
            <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Add New Documents</v-card-title>
            <v-card-text class="pt-16 ml-4">Upload any company document or template that you will use to share with vendors to download, complete, and upload to SOWerk. Common items include master service agreements, independent contractor agreements, nondisclosure agreements, and tax examples.</v-card-text>
            <v-btn @click="clickCompanyDocumentsImageUpload" color="primary" large outlined rounded style="width: 70%;" class="py-4 px-16 mb-16 ml-4">Upload <v-icon>mdi-plus</v-icon></v-btn>
            <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : companyDocument.documentUrl}" v-model="companyDocument.documentUrl" v-on:change.native="selectCompanyDocumentsImage" id="companyDocumentImage" style="display: none;"></v-file-input>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Currently Listed Company Documents</v-card-title>
            <v-data-table
              class="pt-16"
              :items="companyDocuments"
              :headers="companyDocumentsHeaders"
            >
              <template v-slot:item.actions="{item, index}" class="d-flex flex-column align-center">
                <v-btn @click="deleteCompanyDocument(item, index)" color="primary" class="my-1" style="width: 80%;">Remove</v-btn>
                <v-btn :href="item.documentUrl" download color="#707070" class="my-1" style="width: 80%; color: white;">View</v-btn>
                <v-btn @click="selectVendor(item)" color="primary" class="my-1" style="width: 80%;">Send To Vendor</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </transition>

    <transition name="slide-fade">
      <v-card style="box-shadow: 4px 4px 4px grey; border: 1px solid grey; position:fixed; top: 15vh; left: 20vw; width: 78vw; height: auto;" v-if="addToVendorLoad" class="d-flex flex-column align-center">
        <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 90%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Choose Vendor, then Channel</v-card-title>
        <v-autocomplete
          label="Step 1 - Choose The Vendor You Want to Send Your Document To"
          :items="approvedVendorsList"
          item-text="account_name"
          item-value="account_name"
          style="width: 90%;"
          outlined
          chips
          class="mt-16"
          clearable
        >
          <template slot="selection" slot-scope="data">
            <p @click="getChannelsForVendor(data.item)" style="width: 100%;">{{ data.item.account_name }}</p>
          </template>
          <template slot="item" slot-scope="data">
            <p @click="getChannelsForVendor(data.item)" style="width: 100%;">{{ data.item.account_name }}</p>
          </template>
        </v-autocomplete>
        <v-autocomplete
          outlined
          label="Step 2 - Choose The Channels You Want to Send Your Document To"
          :items="vendorChannels"
          item-text="name address city state zipcode"
          item-value="name address city state zipcode"
          style="width: 90%;"
          class="mb-10"
          chips
          clearable
          multiple
          persistent-hint
          hint="Please Note, if you have a document that only needs to be filled out once for all company wide interactions, you may select just one channel, or leave this field blank and we will default to the company HQ channel that was created upon registration."
        >
          <template slot="selection" slot-scope="data">
            <p @click="addChannelToVendorDocList(data.item)" style="width: 100%;">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
          </template>
          <template slot="item" slot-scope="data">
            <p @click="addChannelToVendorDocList(data.item)" style="width: 100%;">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
          </template>
        </v-autocomplete>
        <v-btn style="position: absolute; bottom: 15px; left: 20px; width: 20%;" class="py-6 px-16" color="primary" @click="backToCompanyDocuments">< BACK</v-btn>
        <v-btn style="width: 40%;" class="my-2" color="primary" @click="sendToVendorDocs">Send To Vendor(s)</v-btn>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="20"
          v-if="loadingSubmitVendorDocs"
        ></v-progress-circular>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card style="box-shadow: 4px 4px 4px grey; border: 1px solid grey; position:fixed; top: 15vh; left: 20vw; width: 78vw; height: auto;" v-if="addToLocationLoad">
        <transition name="slide-fade">
          <v-card-title v-if="loadChannelList && !loadAssignTagCategoryType" class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Assign A Channel</v-card-title>
        </transition>
        <transition name="slide-fade">
          <v-card-title v-if="!loadChannelList && loadAssignTagCategoryType" class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Choose your Type, Category, and Tags</v-card-title>
        </transition>
        <template v-if="loading">
          <transition name="slide-fade">
            <v-simple-table v-if="loadChannelList && !loadAssignTagCategoryType" class="pt-16 mb-4" style="width: 100%; max-height: 500px;" fixed-header height="450px">
            <thead style="min-width: 100%;">
              <tr style="min-width: 100%;">
                <th style="color: #a61c00; width: 30%; text-align: center">Channel Name</th>
                <th style="color: #a61c00; width: 30%; text-align: center">Channel Address</th>
                <th style="color: #a61c00; width: 40%;">Actions</th>
              </tr>
            </thead>
            <tbody style="min-width: 100%;">
            <tr  v-for="(location, index) in addLocations" style="background: none !important; min-width: 100%;">
                  <td style="width: 30%; text-align: center" class="py-1">{{location.name}}</td>
                  <td style="width: 30%; text-align: center" class="py-1">{{location.city}}, {{location.state}}</td>
                  <td style="width: 40%;">
                    <v-btn @click="assignToService(location.id)" class="my-1" color="#707070" style="color: white; width: 100%;">Assign Template</v-btn>
                  </td>
            </tr>
            </tbody>
          </v-simple-table>
          </transition>
          <transition name="slide-fade">
            <v-row v-if="!loadChannelList && loadAssignTagCategoryType" class="mt-12 d-flex flex-column align-center">
              <v-card-title class="d-flex justify-left ml-2" style="width: 100%;"><span class="ml-2" style="color:#a61c00;">SOWerk Application Name:</span></v-card-title>
              <v-text-field
                style="width: 95%;"
                v-model="addLocation.form_name"
                label="Name your Application Here"
              ></v-text-field>
              <v-card-title class="d-flex justify-left ml-2" style="width: 100%;"><span class="ml-2" style="color:#a61c00;">SOWerk Type:</span></v-card-title>
              <v-select
                style="width: 95%;"
                v-model="addLocation.vendorType"
                :items="vendorType"
                label="Select A Type That Describes What This Application Provides"
              ></v-select>
              <v-card-title class="d-flex justify-left ml-2" style="width: 100%;"><span class="ml-2" style="color:#a61c00;">SOWerk Category:</span></v-card-title>
              <v-autocomplete
                style="width: 95%;"
                v-model="addLocation.service_name"
                :items="naicsList"
                item-text="name"
                item-value="name"
                label="Select A Category That Describes What This Application Provides"
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
              <v-card-title class="d-flex justify-left ml-2" style="width: 100%;"><span class="ml-2" style="color:#a61c00;">SOWerk Tags:</span></v-card-title>
              <v-combobox
                style="width: 95%;"
                v-model="applicationtemplateTagsNew"
                :items="sowerkTags"
                item-text="name"
                item-value="name"
                chips
                multiple
                label="Choose your tags here"
              >
                <template v-slot:selection="data">
                  <v-chip
                    class="v-chip--select-multi"
                    style="width: auto;"
                  >
                    <v-card-text v-if="data.item.name">{{ data.item.name }}</v-card-text>
                    <v-card-text v-else>{{data.item}}</v-card-text>
                    <v-btn @click="removeTag(data.item)" text class="ml-n6">X</v-btn>
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <p>{{data.item.name}}</p>
                </template>
              </v-combobox>
              <v-btn @click="submitTagCategoryType" class="my-4 py-6 mr-8" color="#7C7C7C" style="color:white; width: 40%; align-self: flex-end">Submit</v-btn>
            </v-row>
          </transition>
        </template>
        <v-btn text @click="closeAddToLocationLoad" style="position: absolute; top: 10px; right: 10px; font-size: 30px;">X</v-btn>
        <v-btn style="position: absolute; bottom: 15px; left: 20px; width: 40%;" class="py-6 px-16" color="primary" @click="backAssignTagCategoryType" v-if="loadAssignTagCategoryType">< BACK</v-btn>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card v-if="addNewCompanyTemplateLoad" class="mt-12 d-flex flex-column">
        <v-card-title class="mb-10" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius-top-left: 20px; border-radius-top-right: 20px;">Add New Company Template</v-card-title>
        <transition name="slide-fade">
          <v-card-title v-if="step4" class="my-10 mt-14" style="position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 1 - Enter your form name in the upper left. Step 2 - Then, drag and drop questions and edit them to your liking. Step 3 - hit submit!</v-card-title>
        </transition>
        <transition name="slide-fade">
          <v-container class="py-16 mt-16" overflow-y-auto v-if="addNewCompanyTemplateLoad">
            <v-row v-if="loading" class="d-flex justify-center wrap-row" style="width: 100%;">
              <v-btn @click="saveCompanyTemplate" style="width: 45%;" color="primary" rounded class="mt-n6 mb-2 mx-2 py-8">Save</v-btn>
              <v-btn :href="'../../dashboard/vendors/applications'" style="width: 45%;" color="#707070" rounded outlined class="mt-n6 mb-2 mx-2 py-8">Go Back To All Applications</v-btn>
            </v-row>
            <v-row class="d-flex justify-center" style="width: 100%;">
              <v-col cols="4" class="d-flex flex-column align-center">
                <v-card-title style="color: #A61C00; text-align: center">Your Application</v-card-title>
                <v-card-subtitle style="text-align: center">This column represents your questions being asked of a Vendor. You can reorder and edit any question. </v-card-subtitle>
                <v-card class="d-flex flex-column align-center" style="width: 100%;">
                  <v-card-title class="d-flex justify-center" style="width: 100%;"><span class="mr-2" style="color:#a61c00;">Application Name:</span></v-card-title>
                  <v-card-title style="width: 95%;"><v-text-field label="Enter Form Name Here" v-model="newAssignUserForm.name">{{newAssignUserForm.name}}</v-text-field></v-card-title>
                  <v-autocomplete
                    label="Select A Category That Describes What This Application Provides"
                    solo
                    clearable
                    hint="This is generated from the NAICS directory."
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    style="width: 95%;"
                    v-model="newAssignUserForm.service_name"
                  >
                    <template slot="selection" slot-scope="data">
                      <p>{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p>{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <draggable
                    class="dragArea list-group"
                    group="formName"
                    :list="newAssignUserForm.formfields"
                    v-model="newAssignUserForm.formfields"
                    @change="reorderFormField"
                    style="width: 95%;"
                  >
                    <v-card style="width: 100%; border:2px outset lightgrey;" class="my-4 d-flex flex-column align-center" v-for="(form, index) in {...newAssignUserForm.formfields}">
                      <v-card-title class="d-flex justify-start align-center flex-wrap" style="width: 100% !important; font-size: 16px; ">
                        <v-icon style="color: #707070; width: 10%;">mdi-cursor-move</v-icon>
                        <p class="mx-2 pt-10" style="width: 70%; text-align: center; word-break: break-word">{{Number(index) + 1}} - {{form.name}}</p>
                        <v-btn class="mr-2" style="color: #A61c00; width: 10%;" text @click="openEditFormField(form, index)"><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                        <div class="d-flex justify-end" style="width: 100%;">
                          <v-btn class="mr-4" style="color: #A61c00; text-align: right; font-size: 30px;" text @click="removeItem(index)">X</v-btn>
                        </div>
                      </v-card-title>
                    </v-card>
                  </draggable>
                </v-card>
                <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
              </v-col>
              <v-col cols="5" class="d-flex flex-column align-center" style="border-left: 1px dashed #A61C00; border-right: 1px dashed #A61C00;">
                <v-card-title style="color: #A61C00; text-align: center">Question Library</v-card-title>
                <v-card-subtitle style="text-align: center">In this column you can quickly find questions from any existing template in your library. Drag and drop ones you like to your application column, then customize it.</v-card-subtitle>
                <v-row class="mb-n8">
                  <v-btn @click="(sowerkDragNDrop = true) && (companyDragNDrop=false)" color="primary" rounded class="mx-2" style="z-index: 1">Sowerk Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                  <v-btn @click="(companyDragNDrop = true) && (sowerkDragNDrop=false)" color="primary" rounded class="mx-2" style="z-index: 1">Company Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                </v-row>
                <transition name="slide-fade">
                  <v-data-table
                    :headers="applicationDragNDropHeaders"
                    :items="applicationTemplates"
                    :items-per-page="10"
                    class="pt-16"
                    :expanded.sync="expanded"
                    show-expand
                    single-expand
                    style="width: 100%;"
                    v-if="sowerkDragNDrop"
                  >
                    <template v-slot:expanded-item="{ headers, item }" style="width: 100%;">
                      <td :colspan="headers.length" style="width: 100%;">
                        <v-simple-table style="width: 100%;" fixed-header
                                        height="450px">
                          <template v-slot:default>
                            <!--                            <thead>-->
                            <!--                            <tr class="d-flex justify-space-evenly" style="width: 100%;">-->
                            <!--                              <th style="width: 30%;">Question</th>-->
                            <!--                              <th style="width: 60%;">Name</th>-->
                            <!--                            </tr>-->
                            <!--                            </thead>-->
                            <tbody style="width: 95%;">
                            <draggable
                              style="width: 100% !important;"
                              class="dragArea list-group"
                              :list="item.applicationtemplatesformfields"
                              :group="{ name: 'formName', pull: 'clone', put: false }"
                            >
                              <tr v-for="app in item.applicationtemplatesformfields" :key="app.name" style="width: 100%;" class="d-flex justify-center">
                                <v-card style="width: 95%; border:2px outset lightgrey;" class="d-flex justify-start">
                                  <v-card-text style="width: 30%;" class="d-flex flex-column align-center"><v-icon style="color: #707070;">mdi-cursor-move</v-icon>Question# {{(app.order + 1)}}</v-card-text>
                                  <v-card-text style="width: 70%;">{{app.name}}</v-card-text>
                                </v-card>
                              </tr>
                            </draggable>
                            <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
                            </tbody>
                          </template>
                        </v-simple-table>
                      </td>
                    </template>
                    <template v-slot:item.questions="{item}">
                      <p v-if="item.applicationtemplatesformfields">{{item.applicationtemplatesformfields.length}}</p>
                    </template>
                  </v-data-table>
                </transition>
                <transition name="slide-fade">
                  <v-data-table
                    :headers="applicationDragNDropHeaders"
                    :items="companyTemplates"
                    :items-per-page="10"
                    class="pt-16"
                    :expanded.sync="expanded"
                    show-expand
                    single-expand
                    style="width: 100%;"
                    v-if="companyDragNDrop"
                  >
                    <template v-slot:expanded-item="{ headers, item }" style="width: 100%;">
                      <td :colspan="headers.length" style="width: 100%;">
                        <v-simple-table style="width: 100%;" fixed-header
                                        height="450px">
                          <template v-slot:default>
                            <!--                            <thead>-->
                            <!--                            <tr class="d-flex justify-space-evenly" style="width: 100%;">-->
                            <!--                              <th style="width: 30%;">Question</th>-->
                            <!--                              <th style="width: 60%;">Name</th>-->
                            <!--                            </tr>-->
                            <!--                            </thead>-->
                            <tbody style="width: 95%;">
                            <draggable
                              style="width: 100% !important;"
                              class="dragArea list-group"
                              :list="item.companytemplatesformfields"
                              :group="{ name: 'formName', pull: 'clone', put: false }"
                            >
                              <tr v-for="app in item.companytemplatesformfields" :key="app.name" style="width: 100%;" class="d-flex justify-center">
                                <v-card style="width: 95%; border:2px outset lightgrey;" class="d-flex justify-start">
                                  <v-card-text style="width: 30%;" class="d-flex flex-column align-center"><v-icon style="color: #707070;">mdi-cursor-move</v-icon>Question# {{(app.order + 1)}}</v-card-text>
                                  <v-card-text style="width: 70%;">{{app.name}}</v-card-text>
                                </v-card>
                              </tr>
                            </draggable>
                            <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
                            </tbody>
                          </template>
                        </v-simple-table>
                      </td>
                    </template>
                    <template v-slot:item.questions="{item}">
                      <p v-if="item.companytemplatesformfields">{{item.companytemplatesformfields.length}}</p>
                    </template>
                  </v-data-table>
                </transition>
              </v-col>
              <v-col cols="3" class="d-flex flex-column align-center">
                <v-card-title style="color: #A61C00; text-align: center">New Questions</v-card-title>
                <v-card-subtitle style="text-align: center">Need to add a new/different question? You can drag and drop a new question field over to your application column, then customize it.</v-card-subtitle>
                <draggable
                  style="width: 100%;"
                  class="dragArea list-group"
                  :list="formTypes"
                  :group="{ name: 'formName', pull: 'clone', put: false }"
                >
                  <v-card style="border:2px outset lightgrey; width: 100%;" class="my-2 d-flex flex-column align-center" v-for="(form, index) in formTypes" >
                    <v-card-title style="font-size: 16px; width: 100% !important;" class="d-flex justify-space-between">
                      <v-icon style="color: #707070; width: 10%;">mdi-cursor-move</v-icon>
                      <p style="width: 70%; text-align: center">{{form.name}}</p>
                      <v-btn style="color: #A61c00; width: 10%;" text><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                    </v-card-title>
                  </v-card>
                </draggable>
                <rawDisplayer title="List 2" :value="formTypes" />
                <v-progress-circular
                  v-if="saveLoad === false"
                  indeterminate
                  color="primary"
                  :size="20"
                ></v-progress-circular>
              </v-col>
            </v-row>

            <v-card v-if="openEditFormFieldLoad" class="d-flex flex-column align-center justify-center" style="width: 70vw; height: 50vh; position: fixed; left: 25vw; top: 25vh; z-index: 1000;">
              <v-card-text>Edit Question #{{openEditFormFieldVal.order}} For Form - {{openEditFormFieldVal.name}}</v-card-text>
              <v-form style="width: 90%;" class="d-flex flex-wrap justify-center">
                <v-text-field v-model="openEditFormFieldVal.name" class="mx-2" style="width: 45%;" :label="'Question'" :name="openEditFormFieldVal.name"></v-text-field>
                <v-checkbox v-model="openEditFormFieldVal.required" class="mx-2" style="width: 45%;" :label="'Required Question?'" :name="openEditFormFieldVal.required"></v-checkbox>
                <v-select :items="typeSelect" v-model="openEditFormFieldVal.type" class="mx-2" style="width: 45%;" :label="'Type of Question'" :name="openEditFormFieldVal.type"></v-select>
              </v-form>
              <div style="width: 100%;" class="d-flex justify-space-between">
                <v-btn @click="deleteSingleFormfield(openEditFormFieldVal)" class="ml-2 mb-2" color="primary" outlined>Delete Form Field</v-btn>
                <v-btn @click="updateSingleFormfield(openEditFormFieldVal)" class="mr-2 mb-2" color="white" style="background: #707070;" outlined>Update Form Field</v-btn>
              </div>
              <v-btn text style="font-size: 30px; position: absolute; right: 10px; top: 10px;" @click="closeEditFormField">X</v-btn>
            </v-card>
          </v-container>
        </transition>
      </v-card>
    </transition>

    <v-card style="width: 100%; border: none !important; box-shadow: none !important;" class="d-flex justify-space-between">
      <transition name="slide-fade">
        <v-card class="mt-12 d-flex flex-column" v-if="addNewVendorFormLoad && !step5" style="width: 38%;">
          <v-card-title v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.md" class="mb-10" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius-top-left: 20px; border-radius-top-right: 20px;">Add New Vendor Form</v-card-title>
          <v-card-title v-else class="mb-10" style="color: white; background-color: #a61c00; width: 100%; text-align: center; position: absolute; left: 0px; top: -20px; border-radius-top-left: 20px; border-radius-top-right: 20px;">Add New Vendor Form</v-card-title>
          <!--        // STEP BUTTONS-->
          <!--        <transition name="slide-fade">-->
          <!--          <v-card-title v-if="step1" class="my-10 mt-14" style="z-index: 1; position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 1 - Choose a Channel</v-card-title>-->
          <!--        </transition>-->
          <!--        <transition name="slide-fade">-->
          <!--          <v-card-title v-if="step2" class="my-10 mt-14" style="z-index: 1; position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 2 - Choose a Category</v-card-title>-->
          <!--        </transition>-->
          <!--        <transition name="slide-fade">-->
          <!--          <v-btn @click="addService" v-if="step2" outlined color="primary" class="px-10" style="z-index: 1; position:absolute; top: 10px; right: 10px;">+ Add Category</v-btn>-->
          <!--        </transition>-->
          <!--        <transition name="slide-fade">-->
          <!--          <v-card-title v-if="step3" class="my-10 mt-14" style="z-index: 1; position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 3 - Application Name</v-card-title>-->
          <!--        </transition>-->
          <!--        <transition name="slide-fade">-->
          <!--          <v-card-title v-if="step4" class="my-10 mt-14" style="position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 4 - Drag and Drop questions and edit them to your liking, then hit submit!</v-card-title>-->
          <!--        </transition>-->
          <!--        <transition name="slide-fade">-->
          <!--          <v-card-title v-if="step5" class="my-10 mt-14" style="position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 5 - Drag and Drop questions and edit them to your liking, then hit submit!</v-card-title>-->
          <!--        </transition>-->
          <transition name="slide-fade">
            <v-card-title v-if="step1" class="mt-10" style="text-align: center; width: 100%;">Step 1 - Application Name</v-card-title>
          </transition>
          <transition name="slide-fade">
            <p v-if="step1" class="ml-4" style="width: 80%; font-size: 18px;">How you name each Vendor application is important. You should understand that the Vendor community will also see this name when applying. Additionally, a good application name can help you and your company stay organized.</p>
          </transition>
          <transition name="slide-fade">
            <v-card-title v-if="step2 && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.md" class="mt-10" style="text-align: center; width: 100%;">Step 2 - Select Channel</v-card-title>
            <v-card-title v-else-if="step2 && !$vuetify.breakpoint.lg && !$vuetify.breakpoint.xl " class="mt-10" style="text-align: center; width: 100%; font-size: 20px;">Step 2 - Select Channel</v-card-title>
          </transition>
          <transition name="slide-fade">
            <p v-if="step2" class="ml-4" style="width: 80%; font-size: 18px;">Every Vendor application is specifically tied to a Channel in your account. Besides keeping your account organized this also provides you the flexibility to create custom Vendor requirements for each channel (i.e. Facility Location, Department, etc.). You can use Company Templates in SOWerk to help in replicating similar Vendor applications across multiple channels.</p>
          </transition>
          <transition name="slide-fade">
            <v-card-title v-if="step3" class="mt-10" style="text-align: center; width: 80%;">Step 3 - Choose A Vendor Type</v-card-title>
          </transition>
          <transition name="slide-fade">
            <p v-if="step3" class="ml-4" style="width: 80%; font-size: 18px;">Which type of Vendor are you looking for? SOWerk requires you to specifically choose a type so to aid in organizing your Vendor Applications and to improve how Vendors can find and apply for approval.</p>
          </transition>
          <transition name="slide-fade">
            <v-card-title v-if="step4" class="mt-10" style="text-align: center; width: 80%;">Step 4 - Select A SOWerk Category</v-card-title>
          </transition>
          <transition name="slide-fade">
            <p v-if="step4" class="ml-4" style="width: 80%; font-size: 18px;">Every SOWerk approved Vendor Application must be assigned to only ONE category. SOWerk categories are based off the same NAICS options as the United States government uses to classify business activities. Choose the category that best suits your needs. You can use Tags in the following steps to add additional details. </p>
          </transition>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card class="mt-12 d-flex flex-column" v-if="addNewVendorFormLoad && !step5" style="width: 58%;">
          <!--        // ACTUAL STEPS-->
          <transition name="slide-fade">
            <v-form class="py-16 mt-16 d-flex flex-column align-end" style="width: 80%; margin: 0 auto;" v-if="addNewVendorFormLoad && step1">
              <v-text-field
                placeholder="Plumbing Vendor App - Brookfield Store"
                v-model="assignUserform.name"
                style="width: 100%; align-self: center; font-size: 18px;"
                required
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold mb-16" style="font-size: 18px;">Application Name*</p>
                </template>
              </v-text-field>
              <div class="d-flex justify-space-between" v-if="addNewVendorFormLoad && step1" style="width: 100%">
                <v-btn @click="backVendorFormStep" color="primary" style="width: 30%;" class="my-2 py-7" >< Back</v-btn>
                <v-btn @click="nextVendorFormStep" color="primary" style="width: 30%;" class="my-2 py-7" >Next ></v-btn>
              </div>
            </v-form>
          </transition>
          <transition name="slide-fade">
              <v-simple-table class="py-8" v-if="addNewVendorFormLoad && step2" style="width: 100%;" fixed-header height="450px">
              <thead >
              <tr class="d-flex justify-center" style="width: 100%; margin: 0 auto;">
                <th style="color: #a61c00; width: 40%; text-align: center">Channel Name</th>
                <th style="color: #a61c00; width: 40%; text-align: center">Channel Address</th>
                <th style="color: #a61c00; width: 20%;">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(location, index) in addLocations" style="background: none !important;" class="d-flex justify-center">
                <td style="width: 40%; text-align: center" class="py-1">{{location.name}}</td>
                <td style="width: 40%; text-align: center" class="py-1">{{location.city}}, {{location.state}}</td>
                <td style="width: 33%; margin: 0 auto;" class="d-flex flex-column align-center" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.md">
                  <v-btn @click="getServiceForVendor(location)" class="my-1" color="#707070" style="color: white; width: 100%;">Assign Channel</v-btn>
                </td>
                <td style="width: 40%; margin: 0 auto;" class="d-flex flex-column align-center" v-else>
                  <v-btn @click="getServiceForVendor(location)" class="my-1" color="#707070" style="color: white; width: 100%;">Assign Channel</v-btn>
                </td>
                </div>
              </tr>
              <tr v-if="addLocations.length === 0">
                <td style="width: 70%; text-align: center" class="py-1">No Channels Currently Exist, Please First Create A Channel</td>
                <td style="width: 30%; text-align: center" class="py-1">
                  <v-btn class="my-1" color="#707070" style="color: white; width: 100%;" to="https://www.sowerk.com/dashboard/channels/add">+ Add Channel</v-btn>
                </td>
              </tr>
              </tbody>
            </v-simple-table>
          </transition>
          <transition name="slide-fade">
            <div class="d-flex justify-space-between" v-if="addNewVendorFormLoad && step2">
              <v-btn @click="backVendorFormStep2" color="primary" style="width: 30%;" class="my-2 py-7" >< Back</v-btn>
            </div>
          </transition>
          <transition name="slide-fade">
            <v-select
              :items="vendorType"
              v-if="addNewVendorFormLoad && step3"
              v-model="assignUserform.vendorType"
              label="Please Choose Your Vendor Type Here"
              style="width: 80%; margin: 0 auto;"
            ></v-select>
          </transition>
          <transition name="slide-fade">
            <div class="d-flex justify-space-between" v-if="addNewVendorFormLoad && step3">
              <v-btn @click="backVendorFormStep3" color="primary" style="width: 30%;" class="my-2 py-7" >< Back</v-btn>
              <v-btn @click="nextVendorFormStep3" color="primary" style="width: 30%;" class="my-2 py-7" >Next ></v-btn>
            </div>
          </transition>
          <transition name="slide-fade">
            <div class="d-flex justify-space-between" v-if="addNewVendorFormLoad && step4">
              <v-btn @click="backVendorFormStep4" color="primary" style="width: 30%;" class="my-2 py-7" >< Back</v-btn>
            </div>
          </transition>
          <transition name="slide-fade">
            <v-btn @click="addService" v-if="step4" outlined color="primary" class="px-16 py-8" style="z-index: 1; position:absolute; top: 10px; right: 10px;">+ Add Category</v-btn>
          </transition>
          <transition name="slide-fade">
            <v-simple-table class="py-16 mt-16" style="width: 95%; margin: 0 auto;" v-if="addNewVendorFormLoad && step4" fixed-header
                            height="450px">
              <thead >
              <tr class="d-flex justify-center" style="width: 100%; margin: 0 auto;">
                <th style="color: #a61c00; width: 70%; text-align: center">Category</th>
                <th style="color: #a61c00; width: 30%;">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr  v-for="(service, indexService) in locationVal.services" style="background: none !important;" class="d-flex">
                <td style="width: 70%; text-align: center; height: auto;" class="py-1">{{service.name}}</td>
                <td style="width: 30%; margin: 0 auto; height: auto;" class="d-flex flex-column align-center">
                  <v-btn @click="assignToServiceVendor(service)" class="my-1" color="#707070" style="color: white; width: 100%;">Assign Category</v-btn>
                  <v-btn @click="deleteService(service, indexService)" class="my-1" color="#707070" style="color: white; width: 100%;">Delete Category</v-btn>
                </td>
              </tr>
              </tbody>
            </v-simple-table>
          </transition>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card class="mt-12 d-flex flex-column" v-if="addNewVendorFormLoad && step5" style="width: 100%">
          <transition name="slide-fade">
            <v-card-title v-if="step5" class="mt-10" style="text-align: center; width: 80%;">Step 5 - Drag and Drop questions and edit them to your liking, then hit submit!</v-card-title>
          </transition>
          <transition name="slide-fade">
            <v-container class="py-16" overflow-y-auto v-if="addNewVendorFormLoad && step5">
              <v-row class="d-flex justify-center" style="width: 100%;">
                <v-row v-if="loading" class="d-flex justify-center wrap-row" style="width: 100%;">
                  <v-btn @click="saveUserForm" style="width: 45%;" color="primary" rounded class="mt-n6 mb-2 mx-2 py-8">Save</v-btn>
                  <v-btn :href="'../../dashboard/vendors/applications'" style="width: 45%;" color="#707070" rounded outlined class="mt-n6 mb-2 mx-2 py-8">Go Back To All Applications</v-btn>
                </v-row>
                <v-col cols="4" class="d-flex flex-column align-center">
                  <v-card-title style="color: #A61C00">Your Application</v-card-title>
                  <v-card-subtitle>This column represents your questions being asked of a Vendor. You can reorder and edit any question. </v-card-subtitle>
                  <v-card class="d-flex flex-column align-center" style="width: 100%;">
                    <v-card-title style="width: 95%;"><v-text-field v-model="newAssignUserForm.name">{{newAssignUserForm.name}}</v-text-field></v-card-title>
                    <draggable
                      class="dragArea list-group"
                      group="formName"
                      :list="newAssignUserForm.formfields"
                      v-model="newAssignUserForm.formfields"
                      @change="reorderFormField"
                      style="width: 95%;"
                    >
                      <v-card style="width: 100%; border:2px outset lightgrey;" class="my-4 d-flex flex-column align-center" v-for="(form, index) in {...newAssignUserForm.formfields}">
                        <v-card-title class="d-flex justify-start align-center flex-wrap" style="width: 100% !important; font-size: 16px;">
                          <v-icon style="color: #707070; width: 10%;">mdi-cursor-move</v-icon>
                          <p class="mx-2 pt-10" style="width: 70%; text-align: center; word-break: break-word">{{Number(index) + 1}} - {{form.name}}</p>
                          <v-btn class="mr-2" style="color: #A61c00; width: 10%;" text @click="openEditFormField(form, index)"><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                          <div class="d-flex justify-end" style="width: 100%;">
                            <v-btn class="mr-4" style="color: #A61c00; text-align: right; font-size: 30px;" text @click="removeItem(index)">X</v-btn>
                          </div>
                        </v-card-title>
                      </v-card>
                    </draggable>
                  </v-card>
                  <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
                </v-col>
                <v-col cols="5" class="d-flex flex-column align-center" style="border-left: 1px dashed #A61C00; border-right: 1px dashed #A61C00;">
                  <v-card-title style="color: #A61C00">Question Library</v-card-title>
                  <v-card-subtitle>In this column you can quickly find questions from any existing template in your library. Drag and drop ones you like to your application column, then customize it.</v-card-subtitle>
                  <v-row class="mb-n8">
                    <v-btn @click="(sowerkDragNDrop = true) && (companyDragNDrop=false)" color="primary" rounded class="mx-2" style="z-index: 1">Sowerk Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                    <v-btn @click="(companyDragNDrop = true) && (sowerkDragNDrop=false)" color="primary" rounded class="mx-2" style="z-index: 1">Company Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                  </v-row>
                  <transition name="slide-fade">
                    <v-data-table
                      :headers="applicationDragNDropHeaders"
                      :items="applicationTemplates"
                      :items-per-page="10"
                      class="pt-16"
                      :expanded.sync="expanded"
                      show-expand
                      single-expand
                      style="width: 100%;"
                      v-if="sowerkDragNDrop"
                    >
                      <template v-slot:expanded-item="{ headers, item }" style="width: 100%;">
                        <td :colspan="headers.length" style="width: 100%;">
                          <v-simple-table style="width: 100%;" fixed-header
                                          height="450px">
                            <template v-slot:default>
                              <!--                            <thead>-->
                              <!--                            <tr class="d-flex justify-space-evenly" style="width: 100%;">-->
                              <!--                              <th style="width: 30%;">Question</th>-->
                              <!--                              <th style="width: 60%;">Name</th>-->
                              <!--                            </tr>-->
                              <!--                            </thead>-->
                              <tbody style="width: 95%;">
                              <draggable
                                style="width: 100% !important;"
                                class="dragArea list-group"
                                :list="item.applicationtemplatesformfields"
                                :group="{ name: 'formName', pull: 'clone', put: false }"
                              >
                                <tr v-for="app in item.applicationtemplatesformfields" :key="app.name" style="width: 100%;" class="d-flex justify-center">
                                  <v-card style="width: 95%; border:2px outset lightgrey;" class="d-flex justify-start">
                                    <v-card-text style="width: 30%;" class="d-flex flex-column align-center"><v-icon style="color: #707070;">mdi-cursor-move</v-icon>Question# {{(app.order + 1)}}</v-card-text>
                                    <v-card-text style="width: 70%;">{{app.name}}</v-card-text>
                                  </v-card>
                                </tr>
                              </draggable>
                              <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
                              </tbody>
                            </template>
                          </v-simple-table>
                        </td>
                      </template>
                      <template v-slot:item.questions="{item}">
                        <p v-if="item.applicationtemplatesformfields">{{item.applicationtemplatesformfields.length}}</p>
                      </template>
                    </v-data-table>
                  </transition>
                  <transition name="slide-fade">
                    <v-data-table
                      :headers="applicationDragNDropHeaders"
                      :items="companyTemplates"
                      :items-per-page="10"
                      class="pt-16"
                      :expanded.sync="expanded"
                      show-expand
                      single-expand
                      style="width: 100%;"
                      v-if="companyDragNDrop"
                    >
                      <template v-slot:expanded-item="{ headers, item }" style="width: 100%;">
                        <td :colspan="headers.length" style="width: 100%;">
                          <v-simple-table style="width: 100%;" fixed-header
                                          height="450px">
                            <template v-slot:default>
                              <!--                            <thead>-->
                              <!--                            <tr class="d-flex justify-space-evenly" style="width: 100%;">-->
                              <!--                              <th style="width: 30%;">Question</th>-->
                              <!--                              <th style="width: 60%;">Name</th>-->
                              <!--                            </tr>-->
                              <!--                            </thead>-->
                              <tbody style="width: 95%;">
                              <draggable
                                style="width: 100% !important;"
                                class="dragArea list-group"
                                :list="item.companytemplatesformfields"
                                :group="{ name: 'formName', pull: 'clone', put: false }"
                              >
                                <tr v-for="app in item.companytemplatesformfields" :key="app.name" style="width: 100%;" class="d-flex justify-center">
                                  <v-card style="width: 95%; border:2px outset lightgrey;" class="d-flex justify-start">
                                    <v-card-text style="width: 30%;" class="d-flex flex-column align-center"><v-icon style="color: #707070;">mdi-cursor-move</v-icon>Question# {{(app.order + 1)}}</v-card-text>
                                    <v-card-text style="width: 70%;">{{app.name}}</v-card-text>
                                  </v-card>
                                </tr>
                              </draggable>
                              <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
                              </tbody>
                            </template>
                          </v-simple-table>
                        </td>
                      </template>
                      <template v-slot:item.questions="{item}">
                        <p v-if="item.companytemplatesformfields">{{item.companytemplatesformfields.length}}</p>
                      </template>
                    </v-data-table>
                  </transition>
                </v-col>
                <v-col cols="3" class="d-flex flex-column align-center">
                  <v-card-title style="color: #A61C00">New Questions</v-card-title>
                  <v-card-subtitle>Need to add a new/different question? You can drag and drop a new question field over to your application column, then customize it.</v-card-subtitle>
                  <draggable
                    style="width: 100%;"
                    class="dragArea list-group"
                    :list="formTypes"
                    :group="{ name: 'formName', pull: 'clone', put: false }"
                  >
                    <v-card style="border:2px outset lightgrey; width: 100%;" class="my-2 d-flex flex-column align-center" v-for="(form, index) in formTypes" >
                      <v-card-title style="font-size: 16px; width: 100% !important;" class="d-flex justify-space-between">
                        <v-icon style="color: #707070; width: 10%;">mdi-cursor-move</v-icon>
                        <p style="width: 70%; text-align: center">{{form.name}}</p>
                        <v-btn style="color: #A61c00; width: 10%;" text><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                      </v-card-title>
                    </v-card>
                  </draggable>
                  <rawDisplayer title="List 2" :value="formTypes" />
                  <v-progress-circular
                    v-if="saveLoad === false"
                    indeterminate
                    color="primary"
                    :size="20"
                  ></v-progress-circular>
                </v-col>
              </v-row>
              <v-card v-if="openEditFormFieldLoad" class="d-flex flex-column align-center justify-center" style="width: 70vw; height: 50vh; position: fixed; left: 25vw; top: 25vh; z-index: 1000;">
                <v-card-text>Edit Question #{{openEditFormFieldVal.order}} For Form - {{openEditFormFieldVal.name}}</v-card-text>
                <v-form style="width: 90%;" class="d-flex flex-wrap justify-center">
                  <v-text-field v-model="openEditFormFieldVal.name" class="mx-2" style="width: 45%;" :label="'Question'" :name="openEditFormFieldVal.name"></v-text-field>
                  <v-checkbox v-model="openEditFormFieldVal.required" class="mx-2" style="width: 45%;" :label="'Required Question?'" :name="openEditFormFieldVal.required"></v-checkbox>
                  <v-select :items="typeSelect" v-model="openEditFormFieldVal.type" class="mx-2" style="width: 45%;" :label="'Type of Question'" :name="openEditFormFieldVal.type"></v-select>
                </v-form>
                <div style="width: 100%;" class="d-flex justify-space-between">
                  <v-btn @click="deleteSingleFormfield(openEditFormFieldVal)" class="ml-2 mb-2" color="primary" outlined>Delete Form Field</v-btn>
                  <v-btn @click="updateSingleFormfield(openEditFormFieldVal)" class="mr-2 mb-2" color="green" outlined>Update Form Field</v-btn>
                </div>
                <v-btn text style="font-size: 30px; position: absolute; right: 10px; top: 10px;" @click="closeEditFormField">X</v-btn>
              </v-card>
            </v-container>
          </transition>
        </v-card>
      </transition>
    </v-card>

    <transition name="slide-fade">
      <v-card class="d-flex flex-column align-center justify-center" style="z-index:10; position:fixed; top: 15vh; left: 22vw; width: 75vw; height: 60vh; box-shadow: 8px 8px 8px #707070; border: 1px solid #707070;" overflow-y-auto v-if="addServiceLoad && step4">
        <v-card-title class="mb-6 mt-2" style="color: #a61c00; font-size: 40px;">Select A Category</v-card-title>
        <v-row style="width: 100%;">
          <v-col cols="4">
            <v-card-title style="text-decoration: underline">Select A SOWerk Category</v-card-title>
            <v-card-text>SOWerk categories are based off the same NAICS options as the United States government uses to classify business activities. Choose the category that best suits your needs. You can use Tags in the following steps to add additional details.</v-card-text>
          </v-col>
          <v-col cols="8" class="d-flex">
            <v-form ref="form" style="width: 100%;" class="d-flex">
              <v-autocomplete
                solo
                :items="naicsList"
                :filter="customFilter"
                item-text="name"
                item-value="name"
                label="Search Here"
                style="width: 80%;"
                v-model="serviceAdd.name"
                required
                :rules="categoryRules"
              ></v-autocomplete>
              <v-btn v-if="serviceAdd.name !== ''" @click="addNewService" color="primary" large style="font-size: 20px; width: 20%;" class="px-16 mt-1">Proceed</v-btn>
            </v-form>
          </v-col>
        </v-row>
        <!--        OLD DESIGN WITH NAICS SELECT LIST-->
        <!--        <v-form style="width: 90%;" class="d-flex flex-column align-center">-->
        <!--&lt;!&ndash;          <v-text-field&ndash;&gt;-->
        <!--&lt;!&ndash;            style="width: 80%;"&ndash;&gt;-->
        <!--&lt;!&ndash;          label="Service Name Goes Here"&ndash;&gt;-->
        <!--&lt;!&ndash;          v-model="serviceAdd.name"&ndash;&gt;-->
        <!--&lt;!&ndash;          ></v-text-field>&ndash;&gt;-->
        <!--          <v-select-->
        <!--            :items="sectors"-->
        <!--            label="First, select your sector."-->
        <!--            placeholder=" "-->
        <!--            item-text="title"-->
        <!--            item-value="code"-->
        <!--            style="width: 90%;"-->
        <!--            @change="getSectorChildren"-->
        <!--          ></v-select>-->
        <!--          <template v-if="companySector">-->
        <!--            <v-select-->
        <!--              :items="industryLevel1"-->
        <!--              placeholder=" "-->
        <!--              label="Next, select a sub-sector."-->
        <!--              item-text="title"-->
        <!--              item-value="code"-->
        <!--              v-model="companyLevel1"-->
        <!--              style="width: 90%;"-->
        <!--              @change="getLevel1Children"-->
        <!--            ></v-select>-->
        <!--          </template>-->
        <!--          <template v-if="companyLevel1">-->
        <!--            <v-select-->
        <!--              :items="industryLevel2"-->
        <!--              label="Finally, select your final sub-category."-->
        <!--              placeholder=" "-->
        <!--              item-text="title"-->
        <!--              item-value="code"-->
        <!--              v-model="companyLevel2"-->
        <!--              style="width: 90%;"-->
        <!--              @change="getLevel2Children"-->
        <!--            ></v-select>-->
        <!--          </template>-->
        <!--          <template>-->
        <!--            <v-text-field-->
        <!--              label="Can't find what you're looking for? Enter here for other!"-->
        <!--              hint="We will keep track of all additions in other and work diligently to either add them to our database, or notify you on why we cannot use this category."-->
        <!--              v-model="serviceAdd.name"-->
        <!--              style="width: 90%;"-->
        <!--            ></v-text-field>-->
        <!--          </template>-->
        <!--          <v-btn @click="addNewService" color="primary" large rounded style="font-size: 20px;" class="px-16 py-8 my-4">Submit</v-btn>-->
        <!--        </v-form>-->
        <v-btn @click="closeService" text style="position: absolute; top: 10px; right: 10px; font-size: 25px;">X</v-btn>
      </v-card>
    </transition>

  </v-container>
</template>

<script>

import CustomFormCard from '@/components/dashboard/CustomFormCard'
import draggable from "vuedraggable"
const naics = require("naics");

  export default {
    name: 'applications',
    layout: 'app',
    components: {
      CustomFormCard,
      draggable
    },
    data () {
      return {
        clickedLinks: {
          vendorApplications: false,
          companyDocuments: false,
          companyTemplates: false,
          sowerkTemplates: false,
        },
        videosLinks: {
          vendorApplications: false,
          companyDocuments: false,
          companyTemplates: false,
          sowerkTemplates: false,
        },
        addToVendorLoad: false,
        applicationtemplateTagsNew: [],
        sowerkTags: [],
        categoryRules: [
          v => !!v || 'Category is required',
        ],
        assignChannel: false,
        addCompanyLoader: false,
        companyDocumentImageUrl: null,
        companyDocumentImageFile: null,
        expanded: [],
        singleExpand: true,
        locations: [],
        services: [],
        userForms: [],
        applicationTemplateVal: [],
        companyDocuments: [],
        companyDocument: {},
        finishedFormFields: false,
        totalLength: 0,
        valueServices: 0,
        valueUserForms: 0,
        valueFormFields: 0,
        valueApplicationFormFields: 0,
        valueCompanyFormFields: 0,
        loading: false,
        loadApplicationLocations: true,
        loadApplicationTemplates: false,
        loadYourCompanyTemplates: false,
        loadYourCompanyDocuments: false,
        loadingSubmitVendorDocs: false,
        addToLocationLoad: false,
        addNewCompanyTemplateLoad: false,
        addNewVendorFormLoad: false,
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        vendorType: [
          'Supplier',
          'Servicer',
        ],
        sowerkDragNDrop: true,
        companyDragNDrop: false,
        addServiceLoad: false,
        serviceAdd: {
          name: '',
        },
        assignServiceId: Number,
        assignUserform: {
          name: '',
          service: '',
          vendorType: '',
          locations_id: Number,
          applicationStatus: 1,
        },
        newAssignUserForm: {},
        addLocation: {},
        applicationTemplates: [],
        companyTemplates: [],
        headersApplicationTemplateVal: [
          { text: 'Application Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Category', value: 'service', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel Name', value: 'locationName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel Address', value: 'locationAddress', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: '#Questions', value: 'formfields', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Application Status', value: 'applicationStatus', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        headers: [
          { text: 'Application Name', value: 'form_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Category', value: 'service_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: '#Questions', value: 'questions', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        applicationDragNDropHeaders: [
          { text: 'Application Name', value: 'form_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: '#Questions', value: 'questions', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Category', value: 'service_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        tableHeaders: [
          { text: 'Category', value: 'service', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Channel', value: 'location', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        companyDocumentsHeaders: [
          { text: 'Document Name', value: 'documentName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Upload Date', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        addLocations: [

        ],
        formTypes: [
          {
            id: 0,
            name: 'Input Field',
            userform_id: Number,
            options: "",
            order: Number,
            required: true,
            type: 'text',
            value: ''
          },
          {
            id: 0,
            name: 'Select Field',
            userform_id: Number,
            options: "[]",
            order: Number,
            required: true,
            type: 'select',
            value: ''
          },
          // {
          //   id: 0,
          //   name: 'File Upload',
          //   userform_id: Number,
          //   options: "",
          //   order: Number,
          //   required: true,
          //   type: 'file',
          //   value: ''
          // },
        ],
        originalUserForms: {},
        step3finishedFormFields: false,
        step3totalLength: 0,
        filteredUniqueUserForms: [],
        filteredSameUserForms: [],
        openEditFormFieldLoad: false,
        openEditFormFieldVal: {},
        typeSelect: [
          'text',
          'number',
          'date',
          'checkbox',
          // 'file',
          // 'select',
        ],
        applicationOptions: [
          'Published - Public',
          'Published - Private',
          'Unpublished'
        ],
        saveLoad: true,
        locationVal: {},
        companySector: null,
        companyLevel1: null,
        companyLevel2: null,
        companyLevel3: null,
        sectors: [],
        industryLevel1: [],
        industryLevel2: [],
        industryLevel3: [],
        industryLevel4: [],
        sortedSowerkTemplates: [],
        naicsList: [],
        loadChannelList: false,
        loadAssignTagCategoryType: false,
        vendorsList: [],
        approvedVendorsList: [],
        vendorChosen: { },
        vendorChannels: [],
        channelsList: [],
        documentToSend: {}
        }
    },
    async mounted() {
      // await this.getCompany(this.currentUser.companies_id);
      await this.getSowerkTags();
      await this.getNaicsList();
      await this.getVendorsList();
      // ORIGINAL CODE FOR NAICS NPM PACKAGE
      // let codes = naics.Industry.sectors();
      // console.log(this.sectors, 'before push of other sectors')
      // // Add missing Manufacturing sector group
      // let manufacturingSector = naics.Industry.from('31-33');
      // this.sectors.push(manufacturingSector);
      // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
      //
      // // Add missing Retail Trade sector group
      // let retailSector = naics.Industry.from('44-45');
      // this.sectors.push(retailSector);
      // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
      //
      // // Add missing Transportation and Warehousing sector group
      // let transportationSector = naics.Industry.from('48-49');
      // this.sectors.push(transportationSector);
      // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
      //
      // for(const code of codes) {
      //   this.sectors.push(code);
      // }
      //
      // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
      await this.getLocations(this.currentUser.companies_id);
      this.videosLinks.vendorApplications = true
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      watchClickedVendorApplications() {
        if(this.clickedLinks.vendorApplications === true){
          this.clickedLinks.vendorApplications = false
        } else {
          this.clickedLinks.vendorApplications = true
          this.clickedLinks.companyDocuments = false
          this.clickedLinks.companyTemplates = false
          this.clickedLinks.sowerkTemplates = false
        }
      },
      watchClickedCompanyDocuments() {
        if(this.clickedLinks.companyDocuments === true){
          this.clickedLinks.companyDocuments = false
        } else {        
          this.clickedLinks.vendorApplications = false
          this.clickedLinks.companyDocuments = true
          this.clickedLinks.companyTemplates = false
          this.clickedLinks.sowerkTemplates = false
        }
      },
      watchClickedCompanyTemplates() {
        if(this.clickedLinks.companyTemplates === true){
          this.clickedLinks.companyTemplates = false
        } else {
          this.clickedLinks.vendorApplications = false
          this.clickedLinks.companyDocuments = false
          this.clickedLinks.companyTemplates = true
          this.clickedLinks.sowerkTemplates = false
        }
      },
      watchClickedSowerkTemplates() {
        if(this.clickedLinks.sowerkTemplates === true){
          this.clickedLinks.sowerkTemplates = false
        } else {
          this.clickedLinks.vendorApplications = false
          this.clickedLinks.companyDocuments = false
          this.clickedLinks.companyTemplates = false
          this.clickedLinks.sowerkTemplates = true
        }
      },
      showVendorApplicationsVideo() {
        this.videosLinks.vendorApplications = true
        this.videosLinks.companyDocuments = false
        this.videosLinks.companyTemplates = false
        this.videosLinks.sowerkTemplates = false
      },
      showCompanyDocumentsVideo() {
        this.videosLinks.vendorApplications = false
        this.videosLinks.companyDocuments = true
        this.videosLinks.companyTemplates = false
        this.videosLinks.sowerkTemplates = false
      },
      showCompanyTemplateVideo() {
        this.videosLinks.vendorApplications = false
        this.videosLinks.companyDocuments = false
        this.videosLinks.companyTemplates = true
        this.videosLinks.sowerkTemplates = false
      },
      showSowerkTemplatesVideo() {
        this.videosLinks.vendorApplications = false
        this.videosLinks.companyDocuments = false
        this.videosLinks.companyTemplates = false
        this.videosLinks.sowerkTemplates = true
      },
      async sendToVendorDocs() {
        if(this.channelsList.length <= 0) {
          console.log(this.vendorChannels[0], 'hey')
          this.loadingSubmitVendorDocs = true;
          this.$http.post('https://www.sowerkbackend.com/api/vendordocuments/byCompaniesId/' + this.currentUser.companies_id, {
            // companies_id: this.currentUser.companies_id,
            documentName: this.documentToSend.documentName,
            documentUrl: this.documentToSend.documentUrl,
            required: true,
            vendor_companiesId: this.vendorChannels[0].companies_id,
            vendor_channelsId: this.vendorChannels[0].id
          })
            .then(response => {
              console.log(response, 'success in added vendor docs')
            })
            .catch(err => {
              console.log(err, 'err in adding vendor docs')
            })
          this.loadingSubmitVendorDocs = false;
        } else {
          this.loadingSubmitVendorDocs = true;
         for(let i=0; i<this.channelsList.length; i++) {
           // console.log({
           //   // companies_id: this.currentUser.companies_id,
           //   documentName: this.documentToSend.documentName,
           //   documentUrl: this.documentToSend.documentUrl,
           //   required: true,
           //   vendor_companiesId: this.channelsList[i].companies_id,
           //   vendor_channelsId: this.channelsList[i].id
           // })
           this.$http.post('https://www.sowerkbackend.com/api/vendordocuments/byCompaniesId/' + this.currentUser.companies_id, {
             // companies_id: this.currentUser.companies_id,
             documentName: this.documentToSend.documentName,
             documentUrl: this.documentToSend.documentUrl,
             required: true,
             vendor_companiesId: this.channelsList[i].companies_id,
             vendor_channelsId: this.channelsList[i].id
           })
            .then(response => {
              console.log(response, 'success in added vendor docs')
            })
            .catch(err => {
              console.log(err, 'err in adding vendor docs')
            })
         }
         this.loadingSubmitVendorDocs = false;
        }
      },
      addChannelToVendorDocList(channel) {
        console.log(channel)
        this.channelsList.push(channel)
        console.log(this.channelsList, 'hello!!!!!')
      },
      async getChannelsForVendor(vendor) {
        console.log(vendor, 'chosen item');
        this.channelsList = [];
        await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + vendor.id)
          .then(response => {
            console.log(response.data, 'locations for vendor chosen')
            this.vendorChannels = response.data.location
            console.log(this.vendorChannels, 'hello vendor channels!!!!')
          })
          .catch(err => {
            console.log(err, 'err in getting locations for particular vendor')
          })
      },
      async getVendorsList() {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + this.currentUser.companies_id)
          .then(response => {
            this.vendorsList = response.data;
            this.vendorsList = this.vendorsList.filter(item => item.approval_status !== 0)
            this.vendorsList = [...new Map(this.vendorsList.map(item => [item['spcompanies_id'], item])).values()]
            console.log(response, 'hello!!!!!')
            if(this.vendorsList.length > 0) {
              for(let i=0; i<this.vendorsList.length; i++) {
                this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.vendorsList[i].spcompanies_id)
                  .then(response => {
                    console.log('COMPANY VAL', response.data)
                    this.approvedVendorsList.push(response.data)
                  })
              }
            }
          })
          .catch(err => {
            console.log(err, 'err in getting vendors list')
          })
      },
      async selectVendor(document) {
        console.log(document, 'document');
        this.documentToSend = document
        this.addToVendorLoad = true;
      },
      async backToCompanyDocuments() {
        this.addToVendorLoad = false;
        this.loadYourCompanyDocuments = true;
      },
      async getSowerkTags() {
        await this.$http.get('https://www.sowerkbackend.com/api/sowerktags')
          .then(response => {
            console.log(response.data, 'response.data for sowerktags');
            this.sowerkTags = response.data;
            console.log(this.sowerkTags, 'sowerktags')
          })
      },
      async removeTag(item) {
        console.log(this.applicationtemplateTagsNew, 'before removal', item)
        this.applicationtemplateTagsNew = this.applicationtemplateTagsNew.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.applicationtemplateTagsNew, 'after removal')
      },
      async getNaicsList() {
        await this.$http.get('https://www.sowerkbackend.com/api/naicslist/')
          .then(response => {
            console.log(response.data, 'RESPONSE DATA FOR NAICS LIST')
            this.naicsList = response.data.sort((a,b) => {
              return b.timesUsed-a.timesUsed;
            })
          })
          .catch(err => {
            console.log(err, 'ERR IN GETTING NAICS LIST')
          })
        console.log(this.naicsList, 'naicsList')
      },
      getSectorChildren(e) {
        console.log(e);
        if(this.companySector) {
          this.companySector = null;
          this.companyLevel1 = null;
          this.companyLevel2 = null;
          this.companyLevel3 = null;
        }
        this.industryLevel1 = [];
        this.industryLevel2 = [];
        this.companySector = e;
        let industry = naics.Industry.from(this.companySector);
        let categories = industry.children();
        console.log(industry, 'industry', categories, 'categories')
        this.serviceAdd.name = industry.title
        for(const category of categories) {
          this.industryLevel1.push(category);
        }
      },
      getLevel1Children() {
        console.log(this.companyLevel1, 'companyLevel1');
        let industry = naics.Industry.from(this.companyLevel1);
        this.serviceAdd.name = industry.title
        let categories = industry.children();
        console.log(industry, 'level 1 industry', categories, 'level1 industry')
        this.industryLevel2 = [];
        for(const category of categories) {
          this.industryLevel2.push(category);
        }
      },
      getLevel2Children() {
        console.log(this.companyLevel2, 'companyLevel2');
        let industry = naics.Industry.from(this.companyLevel2);
        let categories = industry.children();
        console.log(categories, 'level1 industry')
        this.industryLevel3 = [];
        this.serviceAdd.name = industry.title
        for(const category of categories) {
          this.industryLevel3.push(category);
        }
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(async(response) => {
            console.log(response.data, 'company');
            this.locations = response.data.locations;
            for(let i=0; i<this.locations.length; i++) {
              console.log('this.locations', this.locations[i])
              if(this.locations[i].services !== 'There are no services') {
                for(let j=0; j<this.locations[i].services.length; j++) {
                  console.log('this.services', this.locations[i].services[j])
                  if(this.locations[i].services[j].userforms !== 'There are no userforms') {
                    for(let k=0; k<this.locations[i].services[j].userforms.length; k++) {
                      console.log('this.userforms', this.locations[i].services[j].userforms[k])
                      await this.getFormFields(this.locations[i].services[j].userforms.id, i, j)
                    }
                  } else {
                    this.locations[i].services[j].userforms === [];
                  }
                }
              } else {
                this.locations[i].services === [];
              }
            }
          })
          .catch(err => {
            console.log('err in company getting', err)
          })
        setTimeout(() => {
          console.log('this.locations', this.locations)
          this.loading = true;
        }, 3000)
      },
      async getLocations(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + id)
          .then(async response => {
            // console.log(response.data, 'locations RESPONSE DATA LOCATION');
            // this.locations = response.data.location;
            // console.log(this.locations, 'locations THIS DOT LOCATIONS');
            // this.addLocations = response.data.location;
            // for(let i=0; i<this.locations.length; i++) {
            //   // await this.locations.push(response.data.location[i]);
            //   // await this.addLocations.push(response.data.location[i]);
            //   // console.log(this.locations, 'this.locations');
            //   // console.log(this.valueServices, 'this.valueServices')
            //   // await this.getServices(response.data.location[i].id)
            //   this.valueServices++;
            // }
            this.locations = response.data.location
            console.log(this.locations, 'locations THIS DOT LOCATIONS');
            this.addLocations = response.data.location;
            response.data.location.forEach(async (location, index) => {
              // if(location.userforms[0] !== 'There are no userforms') {
              //   for(let i=0; i<location.userforms.length; i++) {
              //     let userForm = {
              //       applicationStatus: location.userforms[i].applicationStatus,
              //       id: location.userforms[i].id,
              //       name: location.userforms[i].name,
              //       service: location.userforms[i].service,
              //       vendorType: location.userforms[i].vendorType,
              //       locations_id: location.userforms[i].locations_id,
              //       formfields: []
              //     };
              //     console.log(location, 'this.locations individual')
              //     let userForm2 = {
              //       applicationStatus: location.userforms[i].applicationStatus,
              //       id: location.userforms[i].id,
              //       name: location.userforms[i].name,
              //       service: location.userforms[i].service,
              //       vendorType: location.userforms[i].vendorType,
              //       locations_id: location.userforms[i].locations_id,
              //       formfields: [],
              //       locationName: location.name,
              //       locationAddress: location.address + " " + location.city + ", " + location.state + " " + location.zipcode,
              //     };
              //
              //     if(userForm.applicationStatus === 0) {
              //       userForm.applicationStatus = 'Unpublished'
              //       userForm2.applicationStatus = 'Unpublished'
              //     } else if (userForm.applicationStatus === 1) {
              //       userForm.applicationStatus = 'Published - Public'
              //       userForm2.applicationStatus = 'Published - Public'
              //     } else {
              //       userForm.applicationStatus = 'Published - Private'
              //       userForm2.applicationStatus = 'Published - Private'
              //     }
              //     this.userForms.push(userForm);
              //     this.applicationTemplateVal.push(userForm2);
              //     this.getFormFields(location.userforms[i].id);
              //   }
              // }
              console.log(this.valueServices, ' bef valueServices');
              await this.getUserforms(location.id, this.valueUserForms, this.valueServices)
              this.valueServices++
              console.log(this.valueServices, 'after valueServices');
              this.valueUserForms++
              // setTimeout(() => {
              //   if (this.locations[index].services[0] !== 'There are no services') {
              //     for (let i = 0; i < location.services.length; i++) {
              //       this.locations[index].services[i].userforms = []
              //       this.getUserforms(location.services[i].id, this.valueUserForms, this.valueServices)
              //       console.log(this.valueUserForms, 'valueUserForms')
              //       this.valueUserForms++
              //     }
              //   }
              // this.valueServices++;
              // this.valueUserForms = 0;
              // }, 1000)
            })
          })
          .catch(err => {
            console.log('err get locations', err);
          })
        setTimeout(() => {
          console.log(this.userForms, 'userForms with formfields Locations');
          console.log(this.locations, 'locations Locations');
          console.log(this.applicationTemplateVal, 'APPLICATION TEMPLATE FOR LOOP TABLE')
          this.loading = true;
        }, 2000)

      },
      async getServices(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/services/byLocationId/' + id)
          .then(async (response) => {
            console.log(response.data, 'services!!!! WOW');
            for(let i=0; i<response.data.length; i++) {
              let service = {
                id: response.data[i].id,
                name: response.data[i].name,
                userforms: []
              }
              await this.services.push(service)
              this.locations[this.valueServices].services[i] = service;
              this.addLocations[this.valueServices].services[i] = service;
              // console.log(this.services, 'this.services', this.locations, 'this.locations');
              // console.log(this.valueUserForms, 'valueUserForms');
              setTimeout(async () => {
                await this.getUserforms(response.data[i].id)
                this.valueUserForms++
              }, 125)
            }
          })
          .catch(err => {
            console.log('err get services', err);
          })
      },
      async getUserforms(id, valueUserForms, valueServices) {
          console.log(id, valueUserForms, valueServices, "HEYYYYYYYYYYYYYYYYYYYYYY")

          await this.$http.get('https://www.sowerkbackend.com/api/userforms/byLocationId/' + id)
            .then(async (response) => {
              // this.totalLength += response.data.length;
              // console.log(this.totalLength, 'totalLength!!!!!!!!!!!!');
              // console.log(response.data, 'userforms response.data');
              // console.log(valueServices, 'valueServices', valueUserForms, 'valueUserForms');
              // console.log(this.locations[valueServices], 'locationsValueServices', this.locations[valueServices].services[valueUserForms])
              // this.locations[valueServices].services[valueUserForms].userforms = response.data;
              console.log(response.data, 'USERFORMS FOR LOCATION')
                for(let i=0; i<response.data.length; i++) {
                  let userForm = {
                    applicationStatus: response.data[i].applicationStatus,
                    id: response.data[i].id,
                    name: response.data[i].name,
                    service: response.data[i].service,
                    vendorType: response.data[i].vendorType,
                    locations_id: response.data[i].locations_id,
                    formfields: []
                  };
                  console.log(this.locations[valueServices], 'this.locations individual')
                  let userForm2 = {
                    applicationStatus: response.data[i].applicationStatus,
                    id: response.data[i].id,
                    name: response.data[i].name,
                    service: response.data[i].service,
                    vendorType: response.data[i].vendorType,
                    locations_id: response.data[i].locations_id,
                    formfields: [],
                    locationName: this.locations[this.valueServices].name,
                    locationAddress: this.locations[this.valueServices].address + " " + this.locations[this.valueServices].city + ", " + this.locations[this.valueServices].state + " " + this.locations[this.valueServices].zipcode,
                  };

                  if(userForm.applicationStatus === 0) {
                    userForm.applicationStatus = 'Unpublished'
                    userForm2.applicationStatus = 'Unpublished'
                  } else if (userForm.applicationStatus === 1) {
                    userForm.applicationStatus = 'Published - Public'
                    userForm2.applicationStatus = 'Published - Public'
                  } else {
                    userForm.applicationStatus = 'Published - Private'
                    userForm2.applicationStatus = 'Published - Private'
                  }
                  this.userForms.push(userForm);
                  this.applicationTemplateVal.push(userForm2);
                  console.log(this.applicationTemplateVal, 'applicationTemplateVal!!', this.valueServices)
                  // console.log(this.applicationTemplateVal, 'applicationTemplateVal', valueServices, 'valueServices', this.locations[valueServices].address + " " + this.locations[valueServices].city + ", " + this.locations[valueServices].state + " " + this.locations[valueServices].zipcode, 'address for individual applicationTemplateVale')
                  // // console.log(this.valueServices, 'this.valueServices', this.valueUserForms, 'this.valueUserForms', this.locations, 'this.locations')
                  // // this.locations[valueServices].services[valueUserForms].userforms[i] = userForm;
                  // console.log(this.locations[valueServices].userforms[i], 'userform');
                  await this.getFormFields(response.data[i].id);
                }
                this.finishedFormFields = true;
              // console.log(this.userForms, 'userForms with formfields');
            })
            .catch(err => {
              console.log('err get userforms', err);
            })
      },
      async getFormFields(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + id)
          .then(async (response) => {
            console.log(response.data, 'formfields for userform', id, this.valueFormFields, 'valueFormFields');
            this.userForms[this.valueFormFields].formfields = response.data;
            this.applicationTemplateVal[this.valueFormFields].formfields = response.data;
            this.valueFormFields++
            // this.locations[this.valueServices].services[this.valueUserForms].userforms[this.valueFormFields]["formfields"] = response.data;
            // console.log(this.locations[this.valueServices].services[this.valueUserForms].userforms[this.valueFormFields].formfields, 'userforms with formfields')
            // console.log(this.valueFormFields, 'valueFormFields');
          })
          .catch(err => {
            console.log('err get form fields', err);
          })
      },
      async loadCompanyDocumentsFunction() {

        this.showCompanyDocumentsVideo()

        if(this.loadApplicationTemplates != true) {
          await this.getCompanyDocuments();
        }

        this.clickedLinks.vendorApplications = false
        this.clickedLinks.companyDocuments = false
        this.clickedLinks.companyTemplates = false
        this.clickedLinks.sowerkTemplates = false

        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = false;
        this.loadYourCompanyDocuments = true;
        this.addNewVendorFormLoad = false;
        this.addNewCompanyTemplateLoad = false;
        this.step4 = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step5 = false;
        this.step3finishedFormFields = false;
        this.expanded = [];
        this.singleExpand = true;
      },
      async loadApplicationLocationsFunction() {

        this.showVendorApplicationsVideo()

        this.clickedLinks.vendorApplications = false
        this.clickedLinks.companyDocuments = false
        this.clickedLinks.companyTemplates = false
        this.clickedLinks.sowerkTemplates = false

        this.loadApplicationLocations = true;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = false;
        this.loadYourCompanyDocuments = false;
        this.addNewVendorFormLoad = false;
        this.addNewCompanyTemplateLoad = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.step5 = false;
        this.step3finishedFormFields = false;
        this.expanded = [];
        this.singleExpand = true;
      },
      async loadYourCompanyTemplatesFunction() {

        this.showCompanyTemplateVideo()

        if(this.loadYourCompanyTemplates != true) {
          await this.getCompanyTemplates();
        }

        this.clickedLinks.vendorApplications = false
        this.clickedLinks.companyDocuments = false
        this.clickedLinks.companyTemplates = false
        this.clickedLinks.sowerkTemplates = false

        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = true;
        this.loadYourCompanyDocuments = false;
        this.addNewVendorFormLoad = false;
        this.addNewCompanyTemplateLoad = false;
        this.step4 = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step5 = false;
        this.step3finishedFormFields = false;
        this.expanded = [];
        this.singleExpand = true;
      },
      async loadApplicationTemplatesFunction() {

        this.showSowerkTemplatesVideo()

        if(this.loadApplicationTemplates != true) {
          await this.getApplicationTemplates();
        }

        this.clickedLinks.vendorApplications = false
        this.clickedLinks.companyDocuments = false
        this.clickedLinks.companyTemplates = false
        this.clickedLinks.sowerkTemplates = false

        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = true;
        this.loadYourCompanyTemplates = false;
        this.loadYourCompanyDocuments = false;
        this.addNewVendorFormLoad = false;
        this.addNewCompanyTemplateLoad = false;
        this.step4 = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step5 = false;
        this.step3finishedFormFields = false;
        this.expanded = [];
        this.singleExpand = true;
      },
      async addNewVendorFormLoading() {
        this.addNewVendorFormLoad = true;
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.step5 = false;
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = false;
        this.loadYourCompanyDocuments = false;
        this.addNewCompanyTemplateLoad = false;
        this.companySector = null;
        this.companyLevel1 = null;
        this.companyLevel2 = null;
        this.companyLevel3 = null;
        this.industryLevel = [];
        this.industryLevel2 = [];
        this.industryLevel3 = [];
        this.industryLevel4 = [];
        this.sectors = [];
        // let codes = naics.Industry.sectors();
        // console.log(this.sectors, 'before push of other sectors')
        // // Add missing Manufacturing sector group
        // let manufacturingSector = naics.Industry.from('31-33');
        // this.sectors.push(manufacturingSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        //
        // // Add missing Retail Trade sector group
        // let retailSector = naics.Industry.from('44-45');
        // this.sectors.push(retailSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        //
        // // Add missing Transportation and Warehousing sector group
        // let transportationSector = naics.Industry.from('48-49');
        // this.sectors.push(transportationSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        // for(const code of codes) {
        //   this.sectors.push(code);
        // }
      },
      async addNewCompanyTemplateLoading() {
        this.addNewVendorFormLoad = false;
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = false;
        this.loadYourCompanyDocuments = false;
        this.addNewCompanyTemplateLoad = true;
        this.newAssignUserForm = {
          formfields : [{
            id: 0,
            name: "Hey I'm blank",
            options: "",
            order: 0,
            required: true,
            type: 'text',
            companytemplates_id: this.newAssignUserForm.id,
            value: ''
          }]
        };
        this.originalUserForms = [{
            id: 0,
            name: "Hey I'm blank",
            options: "",
            order: 0,
            required: true,
            type: 'text',
            companytemplates_id: this.newAssignUserForm.id,
            value: ''
          }]
        await this.getApplicationTemplates();
        await this.getCompanyTemplates(this.currentUser.companies_id);

      },
      async getApplicationTemplates() {
        this.applicationTemplates = [];
        await this.$http.get('https://www.sowerkbackend.com/api/applicationtemplates')
          .then(async(response) => {
            console.log(response, 'applicationtemplates');
            for(let i=0; i<response.data.length; i++) {
               let userForm = {
                 active: response.data[i].active,
                 id: response.data[i].id,
                 service_name: response.data[i].service_name,
                 form_name: response.data[i].form_name,
                 vendorType: response.data[i].vendorType,
                 applicationtemplatesformfields: []
               }
               this.applicationTemplates.push(userForm);
               await this.getApplicationTemplatesFormFields(response.data[i].id, i);
             }
            console.log(this.applicationTemplates, 'application templates this.applicationtemplates')
          })
          .catch(err => {
            console.log(err, 'err in applicationTemplates')
          })
      },
      async getApplicationTemplatesFormFields(id, indexPostion) {
        await this.$http.get('https://www.sowerkbackend.com/api/applicationtemplatesformfields/byApplicationTemplatesId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for application template userform', id);
            console.log(response.data[0])
            console.log(response.data[0].order)
            response.data.sort((a,b) => {
              if (a.order > b.order) return 1;
              if (b.order > a.order) return -1;

              return 0;
            })
            console.log(this.sortedSowerkTemplates)
            this.applicationTemplates[indexPostion].applicationtemplatesformfields = response.data;
          })
          .catch(err => {
            console.log(err, 'err in application templates form fields')
          })
      },
      async getCompanyTemplates() {
        this.companyTemplates = [];
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplates/byCompanyId/' + this.currentUser.companies_id)
          .then(async(response) => {
            console.log(response, 'companyTemplates');
             for(let i=0; i<response.data.length; i++) {
               let userForm = {
                 active: response.data[i].active,
                 id: response.data[i].id,
                 service_name: response.data[i].service_name,
                 form_name: response.data[i].form_name,
                 vendorType: response.data[i].vendorType,
                 companytemplatesformfields: []
               }
               this.companyTemplates.push(userForm);
               await this.getCompanyTemplatesFormFields(response.data[i].id, i);
             }
            console.log(this.companyTemplates, 'application templates for company')
          })
          .catch(err => {
            console.log(err, 'err in companyTemplates')
          })
      },
      async getCompanyTemplatesFormFields(id, indexPostion) {

        await this.$http.get('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for company userform', id);
            response.data.sort((a,b) => {
              if (a.order > b.order) return 1;
              if (b.order > a.order) return -1;

              return 0;
            })
            this.companyTemplates[indexPostion].companytemplatesformfields = response.data;
          })
          .catch(err => {
            console.log(err, 'err in application templates form fields')
          })
      },
      async addToCompanyTemplates(template) {
        this.addCompanyLoader = true;
        const companyTemplate = {
          service_name: template.service_name,
          form_name: template.form_name,
          companies_id: this.currentUser.companies_id,
          active: true,
        }
        console.log(template);
        await this.$http.post('https://www.sowerkbackend.com/api/companytemplates/byCompanyId/' + this.currentUser.companies_id, companyTemplate)
          .then(async (response) => {
            console.log(response, 'success in adding to company templates')
            if(template.applicationtemplatesformfields.length > 0) {
              for(let i=0; i<template.applicationtemplatesformfields.length; i++) {
                let formfield = {
                  type: template.applicationtemplatesformfields[i].type,
                  name: template.applicationtemplatesformfields[i].name,
                  value: template.applicationtemplatesformfields[i].value,
                  required: template.applicationtemplatesformfields[i].required,
                  options: template.applicationtemplatesformfields[i].options,
                  order: template.applicationtemplatesformfields[i].order,
                }
                await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + response.data.companytemplate.id, formfield)
                  .then(response => {
                    console.log('success in posting formfields to company templates userform', response.data.formfield)
                  })
                  .catch(err => {
                    console.log(err, 'err in posting formfields to company templates userform')
                  })
              }
            }
            this.addCompanyLoader = false;
          })
          .catch(err => {
            console.log(err, 'err for adding to company templates')
          })
      },
      async deleteCompanyTemplates(template) {
        console.log(template, 'template for delete company')
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplatetags/byCompanyTemplateId/' + template.id)
          .then(response => {
            if(response.data.length > 0) {
              for (let i=0; i<response.data.length; i++) {
                this.$http.delete('https://www.sowerkbackend.com/api/companytemplatetags/' + response.data[i].id)
                  .then(async (response) => {
                    console.log('success in deleting formfield company template')
                  })
                  .catch(err => {
                    console.log('err in deleting formfield company template', err)
                  })
              }
            }
          })
          .catch(err => {
            console.log(err, 'err in getting template tags for this company')
          })
        for(let i=0; i<template.companytemplatesformfields.length; i++) {
          await this.$http.delete('https://www.sowerkbackend.com/api/companytemplatesformfields/' + template.companytemplatesformfields[i].id)
            .then(async (response) => {
              console.log('success in deleting formfield company template')
            })
            .catch(err => {
              console.log('err in deleting formfield company template', err)
            })
        }
        await this.$http.delete('https://www.sowerkbackend.com/api/companytemplates/'+ template.id)
          .then(async (response) => {
            console.log(response, 'success in deleting company template')
            await this.getCompanyTemplates();
            this.loadApplicationLocations = false;
            this.loadApplicationTemplates = false;
            this.loadYourCompanyTemplates = true;
            this.loadYourCompanyDocuments = false;
            this.addNewVendorFormLoad = false;
            this.addNewCompanyTemplateLoad = false;
            this.step4 = false;
            this.step1 = false;
            this.step2 = false;
            this.step3 = false;
            this.step5 = false;
            this.step3finishedFormFields = false;
            this.expanded = [];
            this.singleExpand = true;
          })
          .catch(err => {
            console.log(err, 'err in deleting this company template')
          })
      },
      async deleteUserForm(userform) {
        console.log(userform, 'userform');
        await this.$http.get('https://www.sowerkbackend.com/api/userformtags/byUserformId/' + userform.id)
          .then(response => {
            if(response.data.length > 0) {
              for (let i=0; i<response.data.length; i++) {
                this.$http.delete('https://www.sowerkbackend.com/api/userformtags/' + response.data[i].id)
                  .then(async (response) => {
                    console.log('success in deleting formfield company template')
                  })
                  .catch(err => {
                    console.log('err in deleting formfield company template', err)
                  })
              }
            }
          })
          .catch(err => {
            console.log(err, 'err in getting template tags for this company')
          })
        if(userform.formfields.length > 0) {
          for(let i=0; i<userform.formfields.length; i++) {
            await this.$http.delete('https://www.sowerkbackend.com/api/formfields/' + userform.formfields[i].id)
              .then(response => {
                console.log(response, 'success in deleting formfields');
              })
              .catch(err => {
                console.log(err, 'err in deleting formfields')
              })
          }
        }
        await this.$http.delete('https://www.sowerkbackend.com/api/userforms/' + userform.id)
          .then(response => {
            console.log(response, 'success in deleting userform')
            this.$router.go();
          })
          .catch(err => {
            console.log(err, 'err in deleting userform');
          })
      },
      async addtoLocationLoad(location) {
        this.addToLocationLoad = true;
        console.log(this.addLocations, 'locations on load add')
        this.addLocation = location
        this.loadChannelList = true;
        this.loadAssignTagCategoryType = false;
        console.log('template form', this.addLocation)
      },
      async closeAddToLocationLoad() {
        this.addToLocationLoad = false;
      },
      async assignToService(id, name) {
        this.assignChannel = true;
        this.locationIdChoice = id;
        this.assignTagCategoryType();
      },
      async assignTagCategoryType() {
        this.assignChannel = false;
        this.loadChannelList = false;
        this.loadAssignTagCategoryType = true;
        console.log(this.addLocation, 'addLocationChoice!!!!!')
      },
      async backAssignTagCategoryType() {
        this.loadChannelList = true;
        this.loadAssignTagCategoryType = false;
      },
      async submitTagCategoryType() {
        const userform = {
          locations_id: this.locationIdChoice,
          applicationStatus: 0,
          name: this.addLocation.form_name,
          service: this.addLocation.service_name,
          vendorType: this.addLocation.vendorType,
        }
        console.log(userform, 'woah!', this.applicationtemplateTagsNew)
        await this.$http.post('https://www.sowerkbackend.com/api/userforms/byLocationId/' + this.locationIdChoice, userform)
          .then(async(response) => {
            console.log(response, 'success in adding userform from template')
            if(this.applicationtemplateTagsNew.length > 0) {
              for(let i=0; i<this.applicationtemplateTagsNew.length; i++) {
                await this.$http.post('https://www.sowerkbackend.com/api/userformtags/byUserformId/' + response.data.userform.id, this.applicationtemplateTagsNew[i])
                  .then(response => {
                    console.log(response, 'response for posting tags')
                  })
                  .catch(err => {
                    console.log(err, 'err in posting tags')
                  })
              }
            }
            if(this.addLocation.applicationtemplatesformfields) {
              for(let i=0; i<this.addLocation.applicationtemplatesformfields.length; i++) {
                let formfield = {
                  userform_id: response.data.userform.id,
                  type: this.addLocation.applicationtemplatesformfields[i].type,
                  name: this.addLocation.applicationtemplatesformfields[i].name,
                  value: this.addLocation.applicationtemplatesformfields[i].value,
                  required: this.addLocation.applicationtemplatesformfields[i].required,
                  options: this.addLocation.applicationtemplatesformfields[i].options,
                  order: this.addLocation.applicationtemplatesformfields[i].order,
                }
                await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + response.data.userform.id, formfield)
                  .then(res => {
                    console.log(res, 'successful in posting formfields to userform')
                  })
                  .catch(err => {
                    console.log(err, 'err in posting formfields to userform')
                  })
              }
              this.assignChannel = false;
              await this.$router.go();
            }
            if(this.addLocation.companytemplatesformfields) {
              for(let i=0; i<this.addLocation.companytemplatesformfields.length; i++) {
                let formfield = {
                  userform_id: response.data.userform.id,
                  type: this.addLocation.companytemplatesformfields[i].type,
                  name: this.addLocation.companytemplatesformfields[i].name,
                  value: this.addLocation.companytemplatesformfields[i].value,
                  required: this.addLocation.companytemplatesformfields[i].required,
                  options: this.addLocation.companytemplatesformfields[i].options,
                  order: this.addLocation.companytemplatesformfields[i].order,
                }

                console.log(formfield, 'formfield')
                await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + response.data.userform.id, formfield)
                  .then(res => {
                    console.log(res, 'successful in posting formfields to userform')
                  })
                  .catch(err => {
                    console.log(err, 'err in posting formfields to userform')
                  })
              }
              await this.$router.go();
            }
          })
          .catch(err => {
            console.log(err, 'err in adding userform from template')
          })
      },
      async getServiceForVendor(location) {
        this.locationVal = {};
        this.step2 = false;
        this.step3 = true;
        this.locationVal = location
        this.assignUserform.locations_id = location.id
        console.log('locationVal', this.locationVal)
      },
      async assignToServiceVendor(service) {
        if(this.loadApplicationTemplates != true) {
          await this.getApplicationTemplates();
        }
        if(this.loadYourCompanyTemplates != true) {
          await this.getCompanyTemplates();
        }
        this.assignServiceId = service.id
        this.assignUserform.service = service.name;
        console.log(this.assignUserform, 'assignUserform')
        await this.assignToServiceVendorSubmit();
      },
      async addService() {
        this.addServiceLoad = true;
      },
      async closeService() {
        this.addServiceLoad = false;
        this.companySector = null;
        this.companyLevel1 = null;
        this.companyLevel2 = null;
        this.companyLevel3 = null;
        this.industryLevel = [];
        this.industryLevel2 = [];
        this.industryLevel3 = [];
        this.industryLevel4 = [];
        this.sectors = [];
        // console.log(this.sectors, 'before push of other sectors')
        // // Add missing Manufacturing sector group
        // let manufacturingSector = naics.Industry.from('31-33');
        // this.sectors.push(manufacturingSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        //
        // // Add missing Retail Trade sector group
        // let retailSector = naics.Industry.from('44-45');
        // this.sectors.push(retailSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        //
        // // Add missing Transportation and Warehousing sector group
        // let transportationSector = naics.Industry.from('48-49');
        // this.sectors.push(transportationSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        // let codes = naics.Industry.sectors();
        // for(const code of codes) {
        //   this.sectors.push(code);
        // }
      },
      async addNewService() {
        this.$refs.form.validate();
        if(this.serviceAdd.name === Object) {
          this.serviceAdd.name = this.serviceAdd.name.name
        }
        console.log(this.serviceAdd, 'wow')
        await this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + this.locationVal.id, this.serviceAdd)
          .then(response => {
            console.log(this.locationVal, 'locationVal')
            if(!this.locationVal.services) {
              this.locationVal.services = [];
            }
            console.log(response, 'success in adding new service')
            this.locationVal.services.push(response.data.service)
            this.serviceAdd.name = "";
            console.log(this.locationVal.services, 'adding new service list');
            this.addServiceLoad = false;
          })
          .catch(err => {
            ('err in adding new service');
            console.log(err, 'err in adding new service');
          })
        this.companySector = null;
        this.companyLevel1 = null;
        this.companyLevel2 = null;
        this.companyLevel3 = null;
        this.industryLevel = [];
        this.industryLevel2 = [];
        this.industryLevel3 = [];
        this.industryLevel4 = [];
        this.sectors = [];
        // console.log(this.sectors, 'before push of other sectors')
        // // Add missing Manufacturing sector group
        // let manufacturingSector = naics.Industry.from('31-33');
        // this.sectors.push(manufacturingSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        //
        // // Add missing Retail Trade sector group
        // let retailSector = naics.Industry.from('44-45');
        // this.sectors.push(retailSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        //
        // // Add missing Transportation and Warehousing sector group
        // let transportationSector = naics.Industry.from('48-49');
        // this.sectors.push(transportationSector);
        // console.log(this.sectors, 'sectors', manufacturingSector, retailSector, transportationSector, 'other added sectors');
        // let codes = naics.Industry.sectors();
        // for(const code of codes) {
        //   this.sectors.push(code);
        // }
      },
      async userformEditActive(userform) {
        console.log(userform.applicationStatus, 'active userform');
        const changes = {
          applicationStatus: Number,
        }
        if(userform.applicationStatus === 'Unpublished') {
          changes.applicationStatus = 0
        } else if (userform.applicationStatus === 'Published - Public') {
          changes.applicationStatus = 1
        } else {
          changes.applicationStatus = 2
        }
        await this.$http.put('https://www.sowerkbackend.com/api/userforms/' + userform.id, changes)
          .then(response => {
            console.log(response, 'success, form is now active changed')
          })
          .catch(err => {
            console.log(err, 'err in changing form', changes)
          })
      },
      async userformEditApplicationPublish(userform) {
        const changes = {
          applicationStatusLinkPublish: userform.applicationStatusLinkPublish
        }
        await this.$http.put('https://www.sowerkbackend.com/api/userforms/' + userform.id, changes)
          .then(response => {
            console.log(response, 'success, form is now active changed')
          })
          .catch(err => {
            console.log(err, 'err in changing form')
          })
      },
      async backVendorFormStep() {
        this.loadApplicationLocations = true;
        this.addNewVendorFormLoad = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.step5 = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = false;
        this.loadYourCompanyDocuments = false;
        this.addNewCompanyTemplateLoad = false;
        this.companySector = null;
        this.companyLevel1 = null;
        this.companyLevel2 = null;
        this.companyLevel3 = null;
        this.industryLevel = [];
        this.industryLevel2 = [];
        this.industryLevel3 = [];
        this.industryLevel4 = [];
        this.sectors = [];
      },
      async nextVendorFormStep() {
        this.step1 = false;
        this.step2 = true;
        console.log(this.assignUserform, 'userform for assigning')
      },
      async backVendorFormStep2() {
        this.step2 = false;
        this.step1 = true;
      },
      async backVendorFormStep3() {
        this.step3 = false;
        this.step2 = true;
      },
      async backVendorFormStep4() {
        this.step4 = false;
        this.step3 = true;
      },
      async nextVendorFormStep3() {
        this.step3 = false;
        this.step4 = true;
      },
      async assignToServiceVendorSubmit() {
        console.log(this.assignUserform, 'userform for assigning')
        await this.$http.post('https://www.sowerkbackend.com/api/userforms/byLocationId/' + this.locationVal.id, this.assignUserform)
          .then(response => {
            console.log(response.data, 'userform posting on assign success')
            this.newAssignUserForm = response.data.userform;
            this.step4=false;
            this.step5=true;
            this.getUserformsVal(response.data.userform.id)
          })
          .catch(err => {
            console.log(err, 'err in posting new userform on assign')
          })
      },
      async getUserformsVal(id) {
        console.log(id, 'id')
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(response => {
            console.log(response, 'userforms');
            this.newAssignUserForm = {...response.data };
            this.step3finishedFormFields = true;
            this.newAssignUserForm.formfields = this.newAssignUserForm.formfields.sort((a,b) => {
              return a.order - b.order
            })
            console.log(this.newAssignUserForm, 'this.userForms sort')
            if(this.newAssignUserForm.formfields[0] === 'There are no formfields') {
              this.newAssignUserForm.formfields[0] = {
                id: 0,
                name: "Hey I'm blank",
                options: "",
                order: 0,
                required: true,
                type: 'text',
                userform_id: this.newAssignUserForm.id,
                value: ''
              }
              this.originalUserForms = [{
                id: 0,
                name: "Hey I'm blank",
                options: "",
                order: 0,
                required: true,
                type: 'text',
                userform_id: this.newAssignUserForm.id,
                value: ''
              }]
            } else {
              this.getFormFieldsVal(response.data.id)
            }
          })
          .catch(err => {
            console.log('err get services', err);
          })
        console.log('this.userForms', this.newAssignUserForm)
      },
      async getFormFieldsVal(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for userform', id);
            this.originalUserForms = response.data;
            this.step3totalLength += response.data.length;
          })
          .catch(err => {
            console.log('err get services', err);
          })
      },
      async saveUserForm() {
        this.saveLoad = false;
        console.log('this.userForms', this.newAssignUserForm);
        console.log('this.originaluserForms', this.originalUserForms);
        const userformEdit = {
          name: this.newAssignUserForm.name
        }
        this.newAssignUserForm.formfields.forEach(async (formfield, index) => {
          formfield["userform_id"] = this.newAssignUserForm.id
          formfield.order = index;
          if(this.originalUserForms.some(val => (val.id === 0))) {
            let newFormField = {
              userform_id: formfield.userform_id,
              name: formfield.name,
              options: formfield.options,
              order: formfield.order,
              required: formfield.required,
              type: formfield.type,
              value: formfield.value
            }
            this.filteredUniqueUserForms.push(formfield)
            await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + this.newAssignUserForm.id, newFormField)
              .then(response => {
                console.log(response, 'posting new formfield for userform');
              })
              .catch(err => {
                console.log(err, 'err');
              })
          } else {
            this.filteredSameUserForms.push(formfield)
            const changes = {
              name: formfield.name,
              options: formfield.options,
              order: formfield.order,
              required: formfield.required,
              type: formfield.type,
              value: formfield.value
            }
            await this.$http.put('https://www.sowerkbackend.com/api/formfields/' + formfield.id, changes)
              .then(response => {
                console.log(response, 'updating formfield ', formfield.id)
              })
              .catch(err => {
                console.log('error in updating formfield', err)
              })
          }
        })
        console.log('this.userForms after loop', this.userForms);
        console.log(this.filteredUniqueUserForms, 'filtered unique formfields');
        console.log(this.filteredSameUserForms, 'filtered same formfields')
        await this.$http.put('https://www.sowerkbackend.com/api/userforms/' + this.newAssignUserForm.id, userformEdit)
          .then(response => {
            console.log(response, 'updating formfield ')
          })
          .catch(err => {
            console.log('error in updating formfield', err)
          })
        setTimeout(() => {
          this.saveLoad = true;
          this.$router.go();
        }, 1500)
      },
      async saveCompanyTemplate() {
        this.saveLoad = false;
        const userformEdit = {
          form_name: this.newAssignUserForm.name
        }
        const companyTemplate = {
          form_name: this.newAssignUserForm.name,
          active: true,
          service_name: this.newAssignUserForm.service_name
        }
        await this.$http.post('https://www.sowerkbackend.com/api/companytemplates/byCompanyId/' + this.currentUser.companies_id, companyTemplate)
          .then(response => {
            console.log(response.data, 'company template')
            this.newAssignUserForm.id = response.data.companytemplate.id
          })
        await this.newAssignUserForm.formfields.forEach(async (formfield, index) => {
          formfield["companytemplates_id"] = this.newAssignUserForm.id
          formfield.order = index;
          if(this.originalUserForms.some(val => (val.id === 0))) {
            let newFormField = {
              companytemplates_id: formfield.companytemplates_id,
              name: formfield.name,
              options: formfield.options,
              order: formfield.order,
              required: formfield.required,
              type: formfield.type,
              value: formfield.value
            }
            this.filteredUniqueUserForms.push(formfield)
            await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + this.newAssignUserForm.id, newFormField)
              .then(response => {
                console.log(response, 'posting new formfield for userform');
              })
              .catch(err => {
                console.log(err, 'err');
              })
          } else {
            this.filteredSameUserForms.push(formfield)
            const changes = {
              name: formfield.name,
              options: formfield.options,
              order: formfield.order,
              required: formfield.required,
              type: formfield.type,
              value: formfield.value
            }
            await this.$http.put('https://www.sowerkbackend.com/api/companytemplatesformfields/' + formfield.id, changes)
              .then(response => {
                console.log(response, 'updating formfield ', formfield.id)
              })
              .catch(err => {
                console.log('error in updating formfield', err)
              })
          }
        })
        await this.$http.put('https://www.sowerkbackend.com/api/companytemplates/' + this.newAssignUserForm.id, userformEdit)
          .then(response => {
            console.log(response, 'updating formfield ', formfield.id)
          })
          .catch(err => {
            console.log('error in updating formfield', err)
          })
        setTimeout(() => {
          this.saveLoad = true;
          this.$router.go();
        }, 1000)
      },
      async reorderFormField({moved}) {
        console.log(moved, 'moved information for formfield')
        for(let i=0; i<this.newAssignUserForm.formfields.length; i++) {
          console.log(this.newAssignUserForm.formfields[i])
          this.newAssignUserForm.formfields[i].order = i;
        }
        console.log(this.newAssignUserForm.formfields, 'updating userForms.formfields');
      },
      async updateFormField() {
        console.log(this.items, 'updating this.items');
      },
      async openEditFormField(formfieldVal, position) {
        console.log(formfieldVal, 'openEditFormField formfield', Number(position));
        // window.scrollTo({top: 0, behavior: 'smooth'});
        this.openEditFormFieldVal = formfieldVal;
        this.openEditFormFieldVal.order =  Number(position);
        this.openEditFormFieldLoad = true
      },
      async closeEditFormField() {
        this.openEditFormFieldLoad = false
      },
      async deleteSingleFormfield(formfieldVal) {
        console.log('deleteSingleFormfield', formfieldVal);
        if(formfieldVal.id === 0) {
          this.newAssignUserForm.formfields.splice(formfieldVal.order, 1);
          console.log('this.userForms on delete', this.userForms);
        } else {
          let confirmDelete = confirm('We noticed this question is saved to your application. Are you sure you would like to remove this question from your application');
          if(confirmDelete === true) {
            this.newAssignUserForm.formfields.splice(formfieldVal.order, 1);
            console.log('this.userForms on delete', this.newAssignUserForm);
            this.$http.delete('https://www.sowerkbackend.com/api/formfields/' + formfieldVal.id)
              .then(response => {
                console.log('response for delete formfield', response)
              })
              .catch(err => {
                console.log('err for delete formfield', err)
              })
          }
        }
        this.openEditFormFieldLoad = false;
        // this.saveUserForm();
      },
      async updateSingleFormfield(formfieldVal) {
        console.log('updateSingleFormfield', formfieldVal);
        this.newAssignUserForm.formfields[formfieldVal.order] = formfieldVal
        this.openEditFormFieldLoad = false;
      },
      async removeItem(index) {
          this.newAssignUserForm.formfields.splice(index, 1);
      },
      async getCompanyDocuments() {
        this.companyDocuments = [];
        await this.$http.get('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'companyDocuments response.data')
            for(let i=0; i<response.data.length; i++) {
              if(response.data[i].vendor_channelsId === null && response.data[i].vendor_companiesId === null) {
                this.companyDocuments.push(response.data[i]);
              }
            }
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
      async clickCompanyDocumentsImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyDocumentImage').click();
      },
      async deleteService(service, position) {
        console.log(this.locationVal.services, 'SERVICES FOR DELETING PURPOSE', position)
        this.locationVal.services.splice(this.locationVal.services[position], 1)
        await this.$http.delete('https://www.sowerkbackend.com/api/services/' + service.id)
          .then(response => {
            console.log(response, 'success in removing category', service)
          })
          .catch(err => {
            console.log(err, 'err in deleting category');
          })
      }
    }
  }

</script>

<style scoped>
  .hover-select:hover {
    background-color: lightgrey !important;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
