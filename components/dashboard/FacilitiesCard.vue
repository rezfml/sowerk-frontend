<template>
  <v-container>
  <!--  ENTIRE "FIND A SOWERK VENDER CARD" INCLUDING BUTTONS AND POPUP MODALS - at breakpoints medium and large!-->
  <!--  THIS MAKES NO SENSE, THE V-IF BELOW SHOULD NOT SHOW IF XS OR SM AND YET IT DOES!!!!!! WHY!!?!?!?!-->
  <div style="width: 100%" v-if="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
    <!--    NOT SURE WHAT THIS DIV DOES-->
    <div v-if="locationApproved" style="width: 100%" class="d-flex">
<!--      <v-col cols="3" v-if="$vuetify.breakpoint.xl" class="ml-n6">-->
<!--        <FilterCard-->
<!--          title="Filter"-->
<!--          :filters="filters"-->
<!--          :locationApproved="locationApproved"-->
<!--          :loadModal="loadModal"-->
<!--        ></FilterCard>-->
<!--      </v-col>-->
      <v-col cols="12" xl="12">
        <v-card class="white pt-0 mt-12 mb-4">
          <v-progress-circular
            v-if="loading != true"
            indeterminate
            color="primary"
            :size="20"
          ></v-progress-circular>
          <v-container class="pt-0" fluid v-if="loading === true">
            <v-card-title
              style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;"
              class="primary white--text font-weight-regular red-gradient"
            >{{ title }}</v-card-title>
            <v-card-actions class="d-flex justify-end px-4 py-0">
              <v-row class="py-0">
                <v-spacer></v-spacer>
                <v-col cols="4" class="py-0">
                  <v-text-field label="Search" light></v-text-field>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-text class="pt-0 pb-2">
              <v-data-table
                :headers="tableProperties"
                :items="items"
                :items-per-page="10"
                v-if="items.length>0"
              >
                <template v-slot:item.address="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <v-col>
                      <p>{{item.address}}</p>
                      <p>{{item.city}}, {{item.state}} {{item.zipcode}}</p>
                    </v-col>
                  </v-row>
                </template>
                <template v-slot:item.addressCityState="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.city}}, {{item.state}}</p>
                  </v-row>
                </template>
                <template v-slot:item.service="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p v-if="company.company_type != 'false'">{{item.services}}</p>
                    <p v-else>{{item.servicesOffered[0]}}</p>
                  </v-row>
                </template>
                <template v-slot:item.services="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.services[0]}}</p>
                  </v-row>
                </template>
                <template v-slot:item.companyName="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p v-if="item.name">{{item.name}}</p>
                    <p v-else>
                      <v-progress-circular
                        indeterminate
                        color="primary"
                        :size="20"
                      ></v-progress-circular>
                    </p>
                  </v-row>
                </template>
                <template v-slot:item.imageUrl="{ item }">
                  <v-row class="d-flex" cols="12" lg="6" justify="center" >
                    <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                    <v-img v-else-if="item.imageUrl === '' && company.imgUrl !== ''" :src="company.imgUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                    <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                  </v-row>
                </template>
                <template v-slot:item.name="{ item }">
                  <v-row class="d-flex" cols="12" md="6">
                    <v-col>
                      <p>{{item.name}}</p>
                    </v-col>
                  </v-row>
                </template>

                <template class="d-flex" v-slot:item.full_name="{ item }">
                  <v-icon color="primary">mdi-account</v-icon>
                  <p>{{ item.contact_first_name }} {{ item.contact_last_name }}</p>
                </template>

                <template class="d-flex" v-slot:item.fullname="{ item }">
                  <div>
                    <v-icon color="primary">mdi-account</v-icon>
                    <p v-if="company.company_type != 'false'">{{item.fullname}}</p>
                    <p v-else>{{ item.name }}</p>
                  </div>
                </template>

                <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
                  <v-btn block color="primary" :to="slug + item.application_id"
                  >Review</v-btn
                  >
                </template>

                <template
                  v-slot:item.actions="{ item }"
                  v-else-if="action === 'Apply'"
                >
                  <v-btn
                    block
                    color="primary"
                    :to="slug + item.location_id + '/application-form/' + item.id"
                  >Apply</v-btn
                  >
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="action === 'View'">
                  <v-btn class="my-1" style="width: 90%;" color="#D15959" outlined @click="submit(item.companies_id, item)">Message</v-btn>
                  <v-btn style="width: 90%;" outlined color="primary" :to="'/dashboard/vendors/' + item.id">View</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="action === 'ViewApproved'">
                  <v-btn class="my-1" style="width: 90%; color: white;" color = "#707070" :to="'/dashboard/approved/' + item.id">View</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="viewLocation === true">
                  <v-btn @click="assignUserToLocation(item)" style="width: 90%;" outlined color="primary">Assign User To Location</v-btn>
                  <v-checkbox @click="massAssignUserToLocation(item, value)" name="massAssign" value="" :id="item.id" label="Mass Assign User To Location"></v-checkbox>
                </template>
                <template v-slot:footer v-if="viewLocation === true">
                  <v-btn @click="submitMassAssignUserToLocation" style="width: 90%;" outlined color="primary">Mass Assign User To Location</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else>
                  <nuxt-link :to="slug + item.id" append>
                    <v-btn class="my-1" style="width: 90%;" color="white" outlined>
                      View
                    </v-btn>
                  </nuxt-link>
                  <!--            <v-icon small @click="deleteItem(item)">-->
                  <!--              mdi-delete-->
                  <!--            </v-icon>-->
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
              <v-btn
                color="primary"
                class="px-8"
                rounded
                outlined
                small
                style="font-size: 12px"
              >View All</v-btn
              >
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
    </div>
    <!--    THIS V-CARD IS THE DEFAULT CARD THAT RENDERS ON THE PAGE, INCLUDING THE BUTTONS. THIS CARD WILL RENDER THE SOWERK VENDORS ASSOCIATED WITH THIS USER-->
    <v-card v-else class="white pt-0 mt-12 mb-4" style="width: 100%">
      <!--      LOADING PROGRESS CIRCLE-->
      <v-progress-circular
        v-if="loading != true"
        indeterminate
        color="primary"
        :size="20"
      ></v-progress-circular>
      <!--      THIS CONTAINER IS THE RENDERED CARD OF VENDORS AND BUTTONS-->
      <v-container class="pt-0" fluid v-if="loading === true">
        <!--        CARD TITLE OF "FIND A SOWERK VENDOR-->
        <v-card-title
          style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
          class="primary white--text font-weight-regular red-gradient"
        >{{ title }}</v-card-title>
        <!--        CARD SEARCH BAR-->
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0">
            <v-spacer></v-spacer>
            <v-col cols="4" class="py-0">
              <v-text-field label="Search" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <!--        THIS IS THE DATA TABLE! THIS TABLE WILL INCLUDE THE VENDORS INFORMATION AND 3 BUTTONS-->
        <!--        SOME OF THESE TABLE ITEMS ARE NOT BEING RENDERED ON THE DASHBOARD/VENDORS PAGE, SOME ARE ONLY RENDERED AFTER CLICKING "VIEW"-->
        <v-card-text class="pt-0 pb-2">
          <v-data-table
            :headers="tableProperties"
            :items="items"
            :items-per-page="10"
            v-if="items.length>0"
          >
            <template v-slot:item.address="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <v-col>
                  <p>{{item.address}}</p>
                  <p>{{item.city}}, {{item.state}}  {{item.zipcode}}</p>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.addressCityState="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p>{{item.city}}, {{item.state}}</p>
              </v-row>
            </template>
            <template v-slot:item.service="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p v-if="company.company_type != 'false'">{{item.services}}</p>
                <p v-else>{{item.servicesOffered[0]}}</p>
              </v-row>
            </template>
            <template v-slot:item.services="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p>{{item.services[0]}}</p>
              </v-row>
            </template>
            <template v-slot:item.companyName="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p v-if="item.name && item.imageUrl"><v-img style="width: 40px; height: 40px;" :src="item.imageUrl" /> {{item.name}}</p>
                <p v-else>
                  <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="20"
                  ></v-progress-circular>
                </p>
              </v-row>
            </template>
            <template v-slot:item.imageUrl="{ item }">
              <v-row class="d-flex" cols="12" lg="6" justify="center" >
                <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                <v-img v-else-if="item.imageUrl === '' && company.imgUrl !== ''" :src="company.imgUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
              </v-row>
            </template>
            <template v-slot:item.name="{ item }">
              <v-row class="d-flex" cols="12" md="6">
                <v-col>
                  <p>{{item.name}}</p>
                </v-col>
              </v-row>
            </template>

            <template class="d-flex" v-slot:item.full_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              <p>{{ item.contact_first_name }} {{ item.contact_last_name }}</p>
            </template>

            <template class="d-flex" v-slot:item.fullname="{ item }">
              <div>
                <v-icon color="primary">mdi-account</v-icon>
                <p v-if="company.company_type != 'false'">{{item.fullname}}</p>
                <p v-else>{{ item.name }}</p>
              </div>
            </template>

            <!--            THESE ARE BUTTONS THAT ARE CONDITIONALLY RENDERING-->
            <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
              <v-btn block color="primary" :to="slug + item.application_id"
              >Review</v-btn
              >
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action === 'Apply'"
            >
              <v-btn
                block
                color="primary"
                :to="slug + item.location_id + '/application-form/' + item.id"
              >Apply</v-btn
              >
            </template>
            <!--            ALL THREE CURRENTLY RENDERED BUTTONS-->
            <template v-slot:item.actions="{ item }" v-else-if="action === 'View'">
              <v-btn class="my-1" style="width: 90%;" color="#D15959" outlined @click="submit(item.companies_id, item)">Message</v-btn>
              <v-btn style="width: 90%;background-color:#707070;" outlined color="white" :to="'/dashboard/vendors/' + item.id">View</v-btn>
              <v-btn class="my-1" style="width: 90%;" color="#D15959" outlined @click="inviteProvider(item)">Invite Service Provider to Apply</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action === 'ViewApproved'">
              <v-btn class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined :to="'/dashboard/vendors/approved/' + item.id">View</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="viewLocation === true">
              <v-btn @click="assignUserToLocation(item)" style="width: 90%;" outlined color="primary">Assign User To Location</v-btn>
              <v-checkbox @click="massAssignUserToLocation(item, value)" :id="item.id" name="massAssign" value="" label="Mass Assign User To Location"></v-checkbox>
            </template>
            <template v-slot:footer v-if="viewLocation === true">
              <v-btn @click="submitMassAssignUserToLocation" style="width: 90%;" outlined color="primary">Mass Assign User To Location</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action !== 'View' && action !== 'ViewApproved' && viewLocation !== true">
              <nuxt-link :to="slug + item.id" append>
                <v-btn class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined>
                  View
                </v-btn>
              </nuxt-link>
              <!--            <v-icon small @click="deleteItem(item)">-->
              <!--              mdi-delete-->
              <!--            </v-icon>-->
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
          <v-btn
            color="primary"
            class="px-8"
            rounded
            outlined
            small
            style="font-size: 12px"
          >View All</v-btn
          >
        </v-card-actions>
      </v-container>
    </v-card>
    <!--    MESSAGE MODAL! - THIS IS THE MESSAGE MODAL AND FORM!-->
    <v-card class="d-flex flex-column align-center" v-if="loadModal === true" style="width: 70vw; height: 70vh; z-index: 25; position: absolute; top: 50px; left: 80px; text-align: center;"
    >
      <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-card-title>Please fill in the <span style="color: #A61C00; padding: 0px 5px 0px 5px;">message field</span> below and click send message to send message</v-card-title>
      <v-form style="width: 80%;">
        <v-text-field style="width: 100%; font-size: 18px;" v-model="messageForm.message"></v-text-field>
        <v-btn @click="closeModal">Exit Message</v-btn>
        <v-btn @click="message(idForMessage, locationForMessage)">Send Message</v-btn>
      </v-form>
      <v-btn @click="closeModal" style="position: absolute; top: 10px; right: 10px; font-size: 30px;" text>X</v-btn>
      <v-card-title class="my-4" style="color: #A61C00;" v-if="successMessage === true">{{successText}}</v-card-title>
    </v-card>
    <!--    VENDOR INVITE MODAL! - THIS IS THE INVITE MODAL AND FORM!-->
    <!--    DESIRED PAIR PROGRAMMING SPOT-->
    <v-card class="d-flex flex-column align-center" v-if="loadInviteModal === true" style="width: 70vw; height: 90vh; z-index: 25; position: absolute; top: 50px; left: 80px; text-align: center;"
    >
      <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-btn @click="closeModal" style="position: absolute; top: 10px; right: 10px; font-size: 30px;" text>X</v-btn>

      <p style="margin-left: 5%; margin-right: 5%; font-size: 1.5rem;" v-model="inviteMessageForm.message">{{ companyName }} {{ inviteMessage }}</p>
      <v-form class="d-flex flex-row" style="margin-left: 2%; margin-right: 2%">
        <v-card-title>Select A Location</v-card-title>
        <v-form>
          <v-select :items="inviteLocations" item-text="name address city state zipcode" item-value="name address city state zipcode" label="Your Company Locations">
            <template slot="selection" slot-scope="data">
              <p @click="getLocationSelection(data.item)">{{ data.item.name }} {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
            </template>
            <template slot="item" slot-scope="data">
              <p @click="getLocationSelection(data.item)">{{ data.item.name }} {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
            </template>
          </v-select>
        </v-form>
        <v-card-title>Select An Application To Share</v-card-title>
        <v-form>
          <v-select :items="myCompanyTemplates" item-text="name id" item-value="name id" label="Your Saved Templates">
            <template slot="selection" slot-scope="data">
              <p @click="getFormSelection(data.item)">{{ data.item.name }} {{ data.id }}</p>
            </template>
            <template slot="item" slot-scope="data">
              <p @click="getFormSelection(data.item)">{{ data.item.name }} {{ data.id }}</p>
            </template>
          </v-select>
        </v-form>
      </v-form>
      <v-btn style="margin-top: 5%" @click="inviteMessageSend(idForMessage, locationForMessage)">Send Invite</v-btn>
    </v-card>
  </div>

  <!--  ENTIRE "FIND A SOWERK VENDER CARD" INCLUDING BUTTONS AND POPUP MODALS - at breakpoints small and extra small!-->
  <div style="width: 100%" v-else-if="$vuetify.breakpoint.xs && $vuetify.breakpoint.sm">
    <!--    NOT SURE WHAT THIS DIV DOES-->
    <div v-if="locationApproved" style="width: 100%" class="d-flex">
      <!--      <v-col cols="3" v-if="$vuetify.breakpoint.xl" class="ml-n6">-->
      <!--        <FilterCard-->
      <!--          title="Filter"-->
      <!--          :filters="filters"-->
      <!--          :locationApproved="locationApproved"-->
      <!--          :loadModal="loadModal"-->
      <!--        ></FilterCard>-->
      <!--      </v-col>-->
      <v-col cols="12" xl="12">
        <v-card class="white pt-0 mt-12 mb-4">
          <v-progress-circular
            v-if="loading != true"
            indeterminate
            color="primary"
            :size="20"
          ></v-progress-circular>
          <v-container class="pt-0" fluid v-if="loading === true">
            <v-card-title
              style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;"
              class="primary white--text font-weight-regular red-gradient"
            >{{ title }}</v-card-title>
            <v-card-actions class="d-flex justify-end px-4 py-0">
              <v-row class="py-0">
                <v-spacer></v-spacer>
                <v-col cols="4" class="py-0">
                  <v-text-field label="Search" light></v-text-field>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-text class="pt-0 pb-2">
              <v-data-table
                :headers="tableProperties"
                :items="items"
                :items-per-page="10"
                v-if="items.length>0"
              >
                <template v-slot:item.address="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <v-col>
                      <p>{{item.address}}</p>
                      <p>{{item.city}}, {{item.state}} {{item.zipcode}}</p>
                    </v-col>
                  </v-row>
                </template>
                <template v-slot:item.addressCityState="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.city}}, {{item.state}}</p>
                  </v-row>
                </template>
                <template v-slot:item.service="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p v-if="company.company_type != 'false'">{{item.services}}</p>
                    <p v-else>{{item.servicesOffered[0]}}</p>
                  </v-row>
                </template>
                <template v-slot:item.services="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.services[0]}}</p>
                  </v-row>
                </template>
                <template v-slot:item.companyName="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p v-if="item.name">{{item.name}}</p>
                    <p v-else>
                      <v-progress-circular
                        indeterminate
                        color="primary"
                        :size="20"
                      ></v-progress-circular>
                    </p>
                  </v-row>
                </template>
                <template v-slot:item.imageUrl="{ item }">
                  <v-row class="d-flex" cols="12" lg="6" justify="center" >
                    <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                    <v-img v-else-if="item.imageUrl === '' && company.imgUrl !== ''" :src="company.imgUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                    <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                  </v-row>
                </template>
                <template v-slot:item.name="{ item }">
                  <v-row class="d-flex" cols="12" md="6">
                    <v-col>
                      <p>{{item.name}}</p>
                    </v-col>
                  </v-row>
                </template>

                <template class="d-flex" v-slot:item.full_name="{ item }">
                  <v-icon color="primary">mdi-account</v-icon>
                  <p>{{ item.contact_first_name }} {{ item.contact_last_name }}</p>
                </template>

                <template class="d-flex" v-slot:item.fullname="{ item }">
                  <div>
                    <v-icon color="primary">mdi-account</v-icon>
                    <p v-if="company.company_type != 'false'">{{item.fullname}}</p>
                    <p v-else>{{ item.name }}</p>
                  </div>
                </template>

                <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
                  <v-btn block color="primary" :to="slug + item.application_id"
                  >Review</v-btn
                  >
                </template>
                <template
                  v-slot:item.actions="{ item }"
                  v-else-if="action === 'Apply'"
                >
                  <v-btn
                    block
                    color="primary"
                    :to="slug + item.location_id + '/application-form/' + item.id"
                  >Apply</v-btn
                  >
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="action === 'View'">
                  <v-btn class="my-1" style="width: 90%;" color="#D15959" outlined @click="submit(item.companies_id, item)">Message</v-btn>
                  <v-btn style="width: 90%;" outlined color="primary" :to="'/dashboard/vendors/' + item.id">View</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="action === 'ViewApproved'">
                  <v-btn class="my-1" style="width: 90%; color: white;" color = "#707070" :to="'/dashboard/approved/' + item.id">View</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else-if="viewLocation === true">
                  <v-btn @click="assignUserToLocation(item)" style="width: 90%;" outlined color="primary">Assign User To Location</v-btn>
                  <v-checkbox @click="massAssignUserToLocation(item, value)" name="massAssign" value="" :id="item.id" label="Mass Assign User To Location"></v-checkbox>
                </template>
                <template v-slot:footer v-if="viewLocation === true">
                  <v-btn @click="submitMassAssignUserToLocation" style="width: 90%;" outlined color="primary">Mass Assign User To Location</v-btn>
                </template>
                <template v-slot:item.actions="{ item }" v-else>
                  <nuxt-link :to="slug + item.id" append>
                    <v-btn class="my-1" style="width: 90%;" color="white" outlined>
                      View
                    </v-btn>
                  </nuxt-link>
                  <!--            <v-icon small @click="deleteItem(item)">-->
                  <!--              mdi-delete-->
                  <!--            </v-icon>-->
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
              <v-btn
                color="primary"
                class="px-8"
                rounded
                outlined
                small
                style="font-size: 12px"
              >View All</v-btn
              >
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
    </div>
    <!--    THIS V-CARD IS THE DEFAULT CARD THAT RENDERS ON THE PAGE, INCLUDING THE BUTTONS. THIS CARD WILL RENDER THE SOWERK VENDORS ASSOCIATED WITH THIS USER-->
    <v-card v-else class="white pt-0 mt-12 mb-4" style="width: 100%">
      <!--      LOADING PROGRESS CIRCLE-->
      <v-progress-circular
        v-if="loading != true"
        indeterminate
        color="primary"
        :size="20"
      ></v-progress-circular>
      <!--      THIS CONTAINER IS THE RENDERED CARD OF VENDORS AND BUTTONS-->
      <v-container class="pt-0" fluid v-if="loading === true">
        <!--        CARD TITLE OF "FIND A SOWERK VENDOR-->
        <v-card-title
          style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
          class="primary white--text font-weight-regular red-gradient"
        >{{ title }}</v-card-title>
        <!--        CARD SEARCH BAR-->
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0">
            <v-spacer></v-spacer>
            <v-col cols="4" class="py-0">
              <v-text-field label="Search" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <!--        THIS IS THE DATA TABLE! THIS TABLE WILL INCLUDE THE VENDORS INFORMATION AND 3 BUTTONS-->
        <!--        SOME OF THESE TABLE ITEMS ARE NOT BEING RENDERED ON THE DASHBOARD/VENDORS PAGE, SOME ARE ONLY RENDERED AFTER CLICKING "VIEW"-->
        <v-card-text class="pt-0 pb-2">
          <v-data-table
            :headers="tableProperties"
            :items="items"
            :items-per-page="10"
            v-if="items.length>0"
          >
            <template v-slot:item.address="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <v-col>
                  <p>{{item.address}}</p>
                  <p>{{item.city}}, {{item.state}}  {{item.zipcode}}</p>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.addressCityState="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p>{{item.city}}, {{item.state}}</p>
              </v-row>
            </template>
            <template v-slot:item.service="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p v-if="company.company_type != 'false'">{{item.services}}</p>
                <p v-else>{{item.servicesOffered[0]}}</p>
              </v-row>
            </template>
            <template v-slot:item.services="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p>{{item.services[0]}}</p>
              </v-row>
            </template>
            <template v-slot:item.companyName="{item}">
              <v-row class="d-flex" cols="12" md="6">
                <p v-if="item.name && item.imageUrl"><v-img style="width: 40px; height: 40px;" :src="item.imageUrl" /> {{item.name}}</p>
                <p v-else>
                  <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="20"
                  ></v-progress-circular>
                </p>
              </v-row>
            </template>
            <template v-slot:item.imageUrl="{ item }">
              <v-row class="d-flex" cols="12" lg="6" justify="center" >
                <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                <v-img v-else-if="item.imageUrl === '' && company.imgUrl !== ''" :src="company.imgUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
              </v-row>
            </template>
            <template v-slot:item.name="{ item }">
              <v-row class="d-flex" cols="12" md="6">
                <v-col>
                  <p>{{item.name}}</p>
                </v-col>
              </v-row>
            </template>

            <template class="d-flex" v-slot:item.full_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              <p>{{ item.contact_first_name }} {{ item.contact_last_name }}</p>
            </template>

            <template class="d-flex" v-slot:item.fullname="{ item }">
              <div>
                <v-icon color="primary">mdi-account</v-icon>
                <p v-if="company.company_type != 'false'">{{item.fullname}}</p>
                <p v-else>{{ item.name }}</p>
              </div>
            </template>

            <!--            THESE ARE BUTTONS THAT ARE CONDITIONALLY RENDERING-->
            <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
              <v-btn block color="primary" :to="slug + item.application_id"
              >Review</v-btn
              >
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action === 'Apply'"
            >
              <v-btn
                block
                color="primary"
                :to="slug + item.location_id + '/application-form/' + item.id"
              >Apply</v-btn
              >
            </template>
            <!--            ALL THREE CURRENTLY RENDERED BUTTONS-->
            <template v-slot:item.actions="{ item }" v-else-if="action === 'View'">
              <v-btn class="my-1" style="width: 40%;" color="#D15959" outlined @click="submit(item.companies_id, item)">Message</v-btn>
              <v-btn style="width: 40%;background-color:#707070;" outlined color="white" :to="'/dashboard/vendors/' + item.id">View</v-btn>
              <v-btn class="my-1" style="width: 1010%;" color="#D15959" outlined @click="inviteProvider()">Invite Service Provider to Apply</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action === 'ViewApproved'">
              <v-btn class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined :to="'/dashboard/vendors/approved/' + item.id">View</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="viewLocation === true">
              <v-btn @click="assignUserToLocation(item)" style="width: 90%;" outlined color="primary">Assign User To Location</v-btn>
              <v-checkbox @click="massAssignUserToLocation(item, value)" :id="item.id" name="massAssign" value="" label="Mass Assign User To Location"></v-checkbox>
            </template>
            <template v-slot:footer v-if="viewLocation === true">
              <v-btn @click="submitMassAssignUserToLocation" style="width: 90%;" outlined color="primary">Mass Assign User To Location</v-btn>
            </template>
            <template v-slot:item.actions="{ item }" v-else-if="action !== 'View' && action !== 'ViewApproved' && viewLocation !== true">
              <nuxt-link :to="slug + item.id" append>
                <v-btn class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined>
                  View
                </v-btn>
              </nuxt-link>
              <!--            <v-icon small @click="deleteItem(item)">-->
              <!--              mdi-delete-->
              <!--            </v-icon>-->
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
          <v-btn
            color="primary"
            class="px-8"
            rounded
            outlined
            small
            style="font-size: 12px"
          >View All</v-btn
          >
        </v-card-actions>
      </v-container>
    </v-card>
    <!--    MESSAGE MODAL! - THIS IS THE MESSAGE MODAL AND FORM!-->
    <v-card class="d-flex flex-column align-center" v-if="loadModal === true" style="width: 70vw; height: 70vh; z-index: 25; position: absolute; top: 50px; left: 80px; text-align: center;"
    >
      <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-card-title>Please fill in the <span style="color: #A61C00; padding: 0px 5px 0px 5px;">message field</span> below and click send message to send message</v-card-title>
      <v-form style="width: 80%;">
        <v-text-field style="width: 100%; font-size: 18px;" v-model="messageForm.message"></v-text-field>
        <v-btn @click="closeModal">Exit Message</v-btn>
        <v-btn @click="message(idForMessage, locationForMessage)">Send Message</v-btn>
      </v-form>
      <v-btn @click="closeModal" style="position: absolute; top: 10px; right: 10px; font-size: 30px;" text>X</v-btn>
      <v-card-title class="my-4" style="color: #A61C00;" v-if="successMessage === true">{{successText}}</v-card-title>
    </v-card>
    <!--    VENDOR INVITE MODAL! - THIS IS THE INVITE MODAL AND FORM!-->
    <!--    DESIRED PAIR PROGRAMMING SPOT-->
    <v-card class="d-flex flex-column align-center" v-if="loadInviteModal === true" style="width: 70vw; height: 90vh; z-index: 25; position: absolute; top: 50px; left: 80px; text-align: center;"
    >
      <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-btn @click="closeModal" style="position: absolute; top: 10px; right: 10px; font-size: 30px;" text>X</v-btn>

      <p style="margin-left: 5%; margin-right: 5%; font-size: 1.5rem;" v-model="inviteMessageForm.message">{{ companyName }} {{ inviteMessage }}</p>
      <v-form class="d-flex flex-row" style="margin-left: 2%; margin-right: 2%">
        <v-card-title>Select A Location</v-card-title>
        <v-form>
          <v-select :items="inviteLocations" item-text="name address city state zipcode" item-value="name address city state zipcode" label="Your Company Locations">
            <template slot="selection" slot-scope="data">
              <p @click="getLocationSelection(data.item)">{{ data.item.name }} {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
            </template>
            <template slot="item" slot-scope="data">
              <p @click="getLocationSelection(data.item)">{{ data.item.name }} {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
            </template>
          </v-select>
        </v-form>
        <v-card-title>Select An Application To Share</v-card-title>
        <v-form>
          <v-select :items="myCompanyTemplates" item-text="name id" item-value="name id" label="Your Saved Templates">
            <template slot="selection" slot-scope="data">
              <p @click="getFormSelection(data.item)">{{ data.item.name }} {{ data.id }}</p>
            </template>
            <template slot="item" slot-scope="data">
              <p @click="getFormSelection(data.item)">{{ data.item.name }} {{ data.id }}</p>
            </template>
          </v-select>
        </v-form>
      </v-form>
      <v-btn style="margin-top: 5%" @click="inviteMessageSend(idForMessage, locationForMessage)">Send Invite</v-btn>
    </v-card>
  </div>
  </v-container>
</template>
<script>

  import FilterCard from '~/components/dashboard/FilterCard'
export default {
  name: 'HomeCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', 'viewLocation', 'locationAssignUser', 'assignUserToLocation', 'massAssignUserToLocation', 'locationApproved', 'submitMassAssignUserToLocation', 'viewLocation'],
  components: {
    FilterCard
  },
  data() {
    return {
      companyName: null,
      inviteMessage: "would like for you to consider applying for approved vendor status. Here is a link to the applications they have shared.",
      inviteLocations: null,
      myCompanyTemplates: [],
      locations: null,
      users: [

      ],
      filters: [
        {
          name: 'Proximity',
          items: [
            'State',
            'National',
            'Under 10 Miles',
            'Under 25 Miles',
            'Under 50 Miles',
            'Under 100 Miles',
            'Under 150 Miles',
            'Under 200 Miles',
            '200+ Miles',
          ]
        },
        {
          name: 'State',
          items: [
            "Alaska",
            "Alabama",
            "Arkansas",
            "American Samoa",
            "Arizona",
            "California",
            "Colorado",
            "Connecticut",
            "District of Columbia",
            "Delaware",
            "Florida",
            "Georgia",
            "Guam",
            "Hawaii",
            "Iowa",
            "Idaho",
            "Illinois",
            "Indiana",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Massachusetts",
            "Maryland",
            "Maine",
            "Michigan",
            "Minnesota",
            "Missouri",
            "Mississippi",
            "Montana",
            "North Carolina",
            " North Dakota",
            "Nebraska",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "Nevada",
            "New York",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Puerto Rico",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Virginia",
            "Virgin Islands",
            "Vermont",
            "Washington",
            "Wisconsin",
            "West Virginia",
            "Wyoming"
          ]
        },
        {
          name: 'Service Needs',
          items: [
            'HVAC',
            'Electrical',
            'Plumbing',
            'Cleaning',
            'Landscaping'
          ]
        },
        {
          name: 'Years in Business',
          items: [
            'Less Than 1 Year',
            '1 - 3 Years',
            '3 - 5 Years',
            '5 - 10 Years',
            '10+ Years',
          ]
        },
        {
          name: 'Approved Applications',
          items: [
            'Less than 5',
            '6 - 15',
            '16 - 24',
            '25+',
          ]
        }
      ],
      loading: false,
      inviteMessageForm: {
        service: '',
        company: '',
        primary_contact_first_name: this.$store.state.user.user.user.first_name,
        primary_contact_last_name: this.$store.state.user.user.user.last_name,
        message: '',
        location: '',
        userprofiles_id: this.$store.state.user.user.user.id,
      },
      messageForm: {
        service: '',
        company: '',
        primary_contact_first_name: this.$store.state.user.user.user.first_name,
        primary_contact_last_name: this.$store.state.user.user.user.last_name,
        message: '',
        location: '',
        userprofiles_id: this.$store.state.user.user.user.id,
      },
      sendToId: Number,
      loadModal: false,
      loadInviteModal: false,
      idForMessage: Number,
      locationForMessage: {},
      successAssign: false,
      bkClass: 'bk',
      blurClass: 'blur',
      successMessage: false,
      successText: '',
      spLocation: {},
      formSelection: {},
      locationSelection: {},
    }
  },
  async created() {
    // console.log(this.items, 'yayyy FACILITIES CARD');
    // console.log(this.$store.state.user.user.user)
    //console.log(this.locationAssignUser, 'user for location assign')
    this.loadingFunc(this.items);
    // Getting a list of locations and the company name by ID
    await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.$store.state.user.user.user.companies_id)
      .then(async (response) => {
        this.inviteLocations = response.data.location
        this.companyName = response.data.location[0].name
      })
      .catch(err => {
        console.log("error log", err)
      })
    // Getting a list of templates for a company by ID
    await this.$http.get('https://www.sowerkbackend.com/api/companytemplates/byCompanyId/' + this.$store.state.user.user.user.companies_id)
      .then(async (response) => {
        this.myCompanyTemplates = response.data
      })
      .catch(err => {
        console.log("error log", err)
      })
  },
  methods: {
    async loadingFunc(val) {
      if(val) {
        this.loading = true
      }
    },
    async submit(businessId, location) {
      this.loadModal = true;
      this.idForMessage = businessId;
      this.locationForMessage = location;
    },
    async inviteProvider(location) {
      this.loadInviteModal = true;
      this.spLocation = location;
      console.log(this.spLocation, "heyyyyyyyyyyyyyyyyyy")
    },
    async message(businessId, location) {
      this.sendToId = businessId;
      // console.log(this.messageForm)
      // console.log(businessId, location, 'messageVals', location.services.join(', '));
      // get company for message
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.$store.state.user.user.user.companies_id)
        .then(async (response) => {
          console.log('get company message', response.data)
          this.messageForm.company = response.data.account_name;
          this.messageForm.service = location.services.join(', ');
          this.messageForm.location = `${location.name} - ${location.address} ${location.city}, ${location.state} ${location.zipcode}`
          await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.sendToId, this.messageForm)
            .then(res => {
              console.log('SUCCESS', res)
              this.successText = 'Successfully sent message to ' + res.data.messageVal.location
              this.successMessage = true;
            })
            .catch(err => {
              console.log(err);
            })
        })
      await setTimeout(() => {
        this.loadModal = false;
      }, 3500)
    },
    async inviteMessageSend(companyName, inviteMessage) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.$store.state.user.user.user.companies_id)
        .then(async (response) => {
          this.inviteMessageForm.company = response.data.account_name;
        })
      console.log(this.sendToId)
      this.sendToId = this.spLocation.companies_id
      await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.sendToId, {
        service: this.inviteMessageForm.service,
        company: this.inviteMessageForm.company,
        primary_contact_first_name: this.$store.state.user.user.user.first_name,
        primary_contact_last_name: this.$store.state.user.user.user.last_name,
        message: this.inviteMessageForm.company + ', ' + this.inviteMessage + " https://www.sowerk.com/dashboard/vendors/applications/" + this.formSelection.id,
        location: this.inviteMessageForm.location,
        userprofiles_id: this.$store.state.user.user.user.id,
        pmMessageRead: false,
        spMessageRead: false,
        recieversId: this.spLocation.companies_id,
        spLocationId: this.spLocation.id,
        spLocationName: this.spLocation.name,
      })
        .then(res => {
          // console.log('SUCCESS', res)
          this.successText = 'Successfully sent message to ' + res.data.messageVal.location
          this.successMessage = true;
        })
        .catch(err => {
          console.log(err, ".catch error within the InviteMessageSend, send request");
        })
      await setTimeout(() => {
        this.loadModal = false;
      }, 3500)
    },
    async closeModal() {
      this.loadModal = false;
      this.loadInviteModal = false;
    },
    async getFormSelection(item) {
      this.formSelection = item
      console.log(this.formSelection, "form selection heyyyy")
    },
    getLocationSelection(item) {
      this.myCompanyTemplates = []
      this.inviteMessageForm.location = item.name
      item.services.forEach(service => {
        this.$http.get('https://www.sowerkbackend.com/api/userforms/byServiceId/' + service.id)
          .then((response) => {
            if(response.data.length > 0) {
              response.data.forEach(userForm => {
                this.myCompanyTemplates.push(userForm)
              })
            }

          })
          .catch(err => {
            console.log("error log", err)
          })
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.red-gradient {
  background: rgb(166, 28, 0);
  background: linear-gradient(
      90deg,
      rgba(166, 28, 0, 1) 0%,
      rgba(116, 21, 2, 1) 100%
  );
}
</style>
