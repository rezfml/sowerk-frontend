<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;" v-if="!addNotesModalLoad && !notesModalLoad">
        <v-col cols="3">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="15vw"
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
              <v-card-title style="color:#A61C00;">{{location.name}}</v-card-title>
              <v-card-text style="text-align: center">Approved at <span style="color:#A61C00;">{{connections.length}}</span> Channels</v-card-text>
              <v-card-text style="color:#A61C00; text-align: center">Radius Provider ({{location.radius}}mi)</v-card-text>
              <!--            <v-btn outlined color="primary" rounded md class="px-16">Share</v-btn>-->
              <v-divider class="mx-auto mt-10" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00;">About</v-card-title>
              <v-card-text>Address: {{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
              <v-card-text>Founded: {{location.year_founded}}</v-card-text>
              <v-card-text v-if="location.created">Joined SOWerk: {{location.created.slice(0,4)}}</v-card-text>
              <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00;">Main Contact</v-card-title>
              <v-card-text>{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
              <v-card-text>{{location.email}}</v-card-text>
              <v-card-text>{{location.phone}}</v-card-text>
              <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00;">Insurances</v-card-title>
              <template v-for="(insurance, index) in insurances">
                <v-card-text>{{insurance.name}} - {{insurance.insuranceCompany}}</v-card-text>
                <v-card-text v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>
              </template>
              <v-btn color="primary" outlined rounded style="width: 50%">View Insurances</v-btn>
              <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
              <v-card-title style="color:#A61C00;">Licenses</v-card-title>
              <template v-for="(license, index) in licenses">
                <v-card-text>{{license.name}} - {{license.licenseLocation}}</v-card-text>
                <v-card-text v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>
              </template>
              <v-btn class="mb-4" color="primary" outlined rounded style="width: 50%">View Licenses</v-btn>
            </v-card>
          </transition>
        </v-col>
        <v-col cols="5">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="20vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <v-card v-if="loading" class="d-flex flex-column align-center mt-16" style="width: 100%;">
              <v-card-title color="primary" style="color: #A61C00; font-size: 24px;">Recently Approved Channels</v-card-title>
              <v-card-subtitle>Past 30 days</v-card-subtitle>
              <v-card-title class="my-6" color="primary" style="color: #A61C00; font-size: 105px;">{{connectionsPast30Days.length}}</v-card-title>
              <template style="text-align: center width: 100%;">
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
              <transition name="slide-fade">
                <v-card-text v-if="messageSendLoad" style="color: #A61C00;">Successfully sent message!</v-card-text>
              </transition>
            </v-card>
          </transition>
          <transition name="slide-fade">
            <v-card v-if="loading" class="d-flex flex-column align-center mt-8" style="width: 100%;">
              <v-card-title style="color: #A61c00">Reviews on SOWerk</v-card-title>
              <v-card-title class="my-8" style="color: #A61C00; text-align: center; font-size: 105px;">{{reviews.length}}</v-card-title>
              <v-btn @click="loadLeaveReview" outlined color="primary" rounded width="90%" class="mb-4">Leave Review</v-btn>
              <v-slide-group
                multiple
                show-arrows
              >
                <v-slide-item v-for="(review, index) in reviews">
                  <v-divider></v-divider>
                  <v-rating
                    empty-icon="$mdiStarOutline"
                    full-icon="$mdiStar"
                    half-icon="$mdiStarHalfFull"
                    half-increments
                    hover
                    length="5"
                    size="64"
                    :value="review.stars"
                  ></v-rating>
                  <v-card-subtitle>{{review.reviewTitle}}</v-card-subtitle>
                  <v-card-text>"{{review.reviewDescription}}" - {{review.reviewerName}}, {{review.reviewerAccountType}}</v-card-text>
                </v-slide-item>
              </v-slide-group>
            </v-card>
          </transition>
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
        <v-col cols="4">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="20vw"
          ></v-skeleton-loader>
          <v-card v-if="loading" class="d-flex flex-column align-center mt-16" style="width: 100%;">
            <v-card-title style="color: #A61c00; font-size: 24px;">Your Connection Details</v-card-title>
            <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
            <v-card-text>Status: <span style="color: #A61c00">Approved Vendor</span></v-card-text>
            <v-card-text>Approved Connections: <span style="color: #A61c00">{{singleCompanyConnections.length}}</span></v-card-text>
            <!--            <v-card-text>Recorded Jobs: <span style="color: #A61c00">22</span></v-card-text>-->
            <!--            <v-card-text>SOWerk Requests: <span style="color: #A61c00">72</span></v-card-text>-->
            <v-card-title style="color: #A61c00; font-size: 24px;">Related To You</v-card-title>
            <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
            <v-row style="width: 100%;" class="d-flex nowrap mt-2">
              <v-card-text style="cursor: pointer; width: 60%;" @click="listNotesModal">Your Notes On This Vendor: <span style="color: #A61c00" v-if="notes.length > 0">{{notes.length}}</span><span style="color: #A61c00" v-else>0</span></v-card-text>
              <v-btn @click="addNotesModal" style="width: 38%; margin-right: 2%;" color="primary">+ Internal Note</v-btn>
            </v-row>
            <v-card-text>Your Rating On This Vendor: <span style="color: #A61c00" v-if="reviews.length > 0">{{reviews.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue.stars)}}</span><span style="color: #A61c00" v-else>0</span></v-card-text>
            <v-card-title style="color: #A61c00; font-size: 24px;">Vendor Provided Documents</v-card-title>
            <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
            <v-card-title style="color: #A61c00">Other Details</v-card-title>
            <v-divider style="background: #707070; height: 1px; width: 80%;"></v-divider>
            <v-card-text>Vendor Messages: <span style="color: #A61c00">{{vendorMessages.length}}</span></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <transition name="slide-fade">
        <v-card v-if="addNotesModalLoad" style="position: fixed; top: 20vh; width: 77vw; left: 20vw;" class="d-flex flex-column align-center">
          <v-card-title style="color: #A61c00;">Please Fill Out All Fields Below</v-card-title>
          <v-select
            label="Select a channel to go with your note"
            style="width: 80%;"
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
      }
    },
    async mounted() {
      console.log(this.$route.params.id, 'hey')
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
      async getConnections(location) {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpId/' + location.companies_id)
          .then(response => {
            console.log(response.data, 'connections');
            if(response.data.length !== 0) {
              for(let i=0; i<response.data.length; i++) {
                if(location.id === response.data[i].splocations_id && response.data[i].approval_status === 1) {
                  console.log(response.data[i], 'if matched splocation')
                  this.connections.push(response.data[i]);
                  this.userformsIdForRequest.push(response.data[i].pmuserforms_id);
                  if(moment(response.data[i].created).format('L') > moment().subtract(30, 'days').calendar()) {
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
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getInsurances() {
        await this.$http.get('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data insurances');
            for(let i = 0; i<response.data.length; i++) {
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
            for(let i = 0; i<response.data.length; i++) {
              this.licenses.push(response.data[0]);
            }
            console.log(this.licenses, 'this.licenses')
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getCompanies() {
        for(let i=0; i<this.connections.length; i++) {
          await this.getCompany(this.connections[i].pmcompanies_id);
        }
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'companies')
            this.companies.push(response.data);
            console.log('this.companies val', this.companies)
          })
          .catch(err => {
            console.log(err, 'err');
          })
      },
      async getUserCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company')
            this.company = response.data;
            this.loading=true;
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
        if(item.services[0] !== 'There are no services') {
          for(let i=0; i<item.services.length; i++) {
            if(item.services[i].userforms[0] !== 'There are no userforms') {
              for(let j=0; j<item.services[i].userforms.length; j++) {
                // Checks if the application is published public or private. Also checks if the userform is already included in the list of approved forms this vendor has applied for.
                if(item.services[i].userforms[j].applicationStatus !== 0 && !(this.userformsIdForRequest.includes(item.services[i].userforms[j].id))) {
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
              if(message.spLocationId.toString() === this.$route.params.id.toString()) {
                return message;
              }
            }))
            this.vendorMessages = response.data.filter(message => {
              if(message.spLocationId.toString() === this.$route.params.id.toString()) {
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
        if(this.leaveReview.reviewerAccountType === true) {
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

