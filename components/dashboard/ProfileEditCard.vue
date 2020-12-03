<template>
  <v-card class="white pt-0 mt-0">
    <v-container>
      <v-skeleton-loader
        v-if="!loadCompany && !location"
        type="card-avatar, article, actions"
      ></v-skeleton-loader>
      <transition name="slide-fade">
        <v-card-title v-if="loadCompany" style="position: absolute; top: -25px; left: 25px;border-radius: 3px; background-color: " class="primary body-2" ><v-icon class="white--text">mdi-account-outline</v-icon></v-card-title>
      </transition>

      <transition name="slide-fade">
        <template v-if="location">
          <v-card-text class="py-0">
            <v-form>
              <v-row>
                <v-col cols="12" class="pb-0 mt-3">
                  <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Channel Details</v-subheader>
                </v-col>

                <v-col
                  cols="12"
                  class="d-flex flex-column align-center"
                  style="justify-content: space-evenly"
                >
                  <v-img
                    :src="location.imageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px;"
                    v-if="location.imageUrl && !locationImageUrl"
                  ></v-img>
                  <v-img
                    :src="locationImageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px;"
                    v-else-if="locationImageUrl"
                  ></v-img>
                  <!-- <v-icon v-else :size="100" class="flex-grow-1">person</v-icon> -->
                  <v-file-input
                    class="company-image-upload ma-0 pa-0"
                    :class="{
                        'company-image-upload--selected': locationImageFile
                      }"
                    v-model="locationImageFile"
                    v-on:change.native="selectLocationImage"
                    id="locationImage"
                    style="visibility: hidden; height: 0; max-height: 0;"
                  ></v-file-input>
                  <v-btn
                    @click="clickLocationImageUpload"
                    color="primary"
                    outlined
                    rounded
                    class="flex-grow-0 px-6"
                  >Edit Logo</v-btn
                  >
                </v-col>

                <v-col cols="12" class="pt-0">
                  <v-text-field
                    light
                    placeholder=" "
                    v-model="locationEdit.name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Name</p>
                    </template>
                  </v-text-field>
                </v-col>
                <!--              <v-col cols="12" class="pt-0">-->
                <!--&lt;!&ndash;                <v-text-field&ndash;&gt;-->
                <!--&lt;!&ndash;                  light&ndash;&gt;-->
                <!--&lt;!&ndash;                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"&ndash;&gt;-->
                <!--&lt;!&ndash;                  v-model="locationEdit.address"&ndash;&gt;-->
                <!--&lt;!&ndash;                >&ndash;&gt;-->
                <!--&lt;!&ndash;                  <template v-slot:label>&ndash;&gt;-->
                <!--&lt;!&ndash;                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Property Address</p>&ndash;&gt;-->
                <!--&lt;!&ndash;                  </template>&ndash;&gt;-->
                <!--&lt;!&ndash;                </v-text-field>&ndash;&gt;-->
                <!--                <div class="v-input theme&#45;&#45;light v-text-field v-text-field&#45;&#45;is-booted">-->
                <!--                  <div class="v-input__control">-->
                <!--                    <div class="v-input__slot" style="width: 100%;">-->
                <!--                      <label for="company_address" class="v-label theme&#45;&#45;light form__label&#45;&#45;address" style="left: 0px; right: auto; position: absolute;">Company Address*</label>-->
                <!--                      <client-only>-->
                <!--                        <vue-google-autocomplete-->
                <!--                          id="company-address"-->
                <!--                          classname="form-control"-->
                <!--                          v-on:placechanged="getAddressData"-->
                <!--                          placeholder=""-->
                <!--                          style="width: 100%;"-->
                <!--                          v-on:focus.native="animateAddressFieldOnFocus"-->
                <!--                          v-on:blur.native="animateAddressFieldOnFocus"-->
                <!--                          v-on:input.native="animateAddressFieldOnFilled"-->
                <!--                          validate-on-blur-->
                <!--                          v-model="fullAddress"-->
                <!--                        >-->
                <!--                        </vue-google-autocomplete>-->
                <!--                      </client-only>-->
                <!--                    </div>-->
                <!--                    <div class="v-text-field__details"><div class="v-messages theme&#45;&#45;light"><div class="v-messages__wrapper"></div></div></div>-->
                <!--                  </div>-->
                <!--                </div>-->
                <!--                -->
                <!--              </v-col>-->

                <v-col cols="12" md="4" class="py-0">
                  <v-text-field
                    light
                    placeholder=""
                    v-model="location.address"
                    clearable
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Address</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="py-0">
                  <v-text-field
                    light
                    placeholder=""
                    v-model="location.city"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel City</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="py-0">
                  <v-text-field
                    light
                    placeholder=""
                    v-model="location.state"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel State</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="2" class="py-0">
                  <v-text-field
                    light
                    placeholder=""
                    v-model="location.zipcode"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Zipcode</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="py-0">
                  <v-text-field
                    light
                    placeholder="1971"
                    v-model="locationEdit.year_founded"
                    type="number"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Opened</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="9" class="py-0">
                  <v-text-field
                    light
                    placeholder="BPS Direct, LLC is an American privately held…"
                    v-model="locationEdit.description"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Description</p>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="mt-8">
                  <v-combobox
                    v-model="locationTagsNew"
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
                </v-col>
              </v-row>

              <v-row>

                <v-col cols="12" class="py-0 mt-0">
                  <v-subheader class="px-0 headline font-weight-bold primary--text" light>Current Channel Manager</v-subheader>
                </v-col>

                <v-col cols="12" md="6" class="pt-0">
                  <v-text-field
                    label="First Name"
                    light
                    placeholder="John"
                    readonly
                    v-model="locationEdit.contact_first_name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">First Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="pt-0">
                  <v-text-field
                    label="Last Name"
                    light
                    placeholder="Smith"
                    readonly
                    v-model="locationEdit.contact_last_name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Last Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    light
                    placeholder="johnsmith@example.com"
                    v-model="locationEdit.email"
                    readonly
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    light
                    placeholder="(123) 456-7890"
                    v-model="locationEdit.phone"
                    readonly
                  ><template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                  </template></v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="py-0">
                  <v-select id="location-Admin"
                            label="Admin Level"
                            :items="adminOptions"
                            readonly
                            v-model="location.adminLevel"
                  ></v-select>
                </v-col>

                <!--              <v-col cols="12" md="4" class="py-0">-->
                <!--                <v-select-->
                <!--                  light-->
                <!--                  placeholder="Staff Account"-->
                <!--                  v-model="location.admin_level"-->
                <!--                ><template v-slot:label>-->
                <!--                  <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Admin Level*</p>-->
                <!--                </template></v-select>-->
                <!--              </v-col>-->

              </v-row>

            </v-form>
            <v-card-actions class="px-0">
              <v-btn color="primary" outlined class="px-8" v-on:click="cancelEditLocation">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="px-8" @click="updateLocation()">Update Channel</v-btn>
            </v-card-actions>
          </v-card-text>
        </template>
      </transition>

      <transition name="slide-fade">
        <template v-if="loadCompany">
          <v-card-text class="py-0">
            <v-form>
              <v-row v-if="loadCompany">
                <v-col
                  cols="12"
                  class="d-flex flex-column align-center"
                  style="justify-content: space-evenly"
                >
                  <v-img
                    :src="company.imgUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px;"
                    v-if="company.imgUrl && !companyImageUrl"
                  ></v-img>
                  <v-img
                    :src="companyImageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px;"
                    v-else-if="companyImageUrl"
                  ></v-img>
                  <!-- <v-icon v-else :size="100" class="flex-grow-1">person</v-icon> -->
                  <v-file-input
                    class="company-image-upload ma-0 pa-0"
                    :class="{
                        'company-image-upload--selected': companyImageFile
                      }"
                    v-model="companyImageFile"
                    v-on:change.native="selectCompanyImage"
                    id="companyImage"
                    style="visibility: hidden; height: 0; max-height: 0;"
                  ></v-file-input>
                  <v-btn
                    @click="clickCompanyImageUpload"
                    color="primary"
                    outlined
                    rounded
                    class="flex-grow-0 px-6"
                  >Edit Logo</v-btn
                  >
                </v-col>
                <v-col cols="12" class="pb-0 mt-3">
                  <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Profile</v-subheader>
                </v-col>

                <v-col cols="12" md="4" class="pt-0" v-if="company.isFranchise">
                  <v-text-field
                    light
                    placeholder="Company Account Name"
                    v-model="company.account_name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company Account Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="12" class="pt-0" v-else>
                  <v-text-field
                    light
                    placeholder=""
                    v-model="company.account_name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company Account Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="pt-0" v-if="company.isFranchise">
                  <v-text-field
                    light
                    placeholder=""
                    v-model="company.brand_name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company Brand Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="pt-0" v-if="company.isFranchise">
                  <v-text-field
                    light
                    placeholder=""
                    v-model="company.llcName"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company LLC Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <!--              <v-col cols="12" class="pt-0">-->
                <!--                <v-text-field-->
                <!--                  light-->
                <!--                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"-->
                <!--                  v-model="fullAddress"-->
                <!--                >-->
                <!--                  <template v-slot:label>-->
                <!--                    <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Company HQ Address</p>-->
                <!--                  </template>-->
                <!--                </v-text-field>-->
                <!--              </v-col>-->

                <v-col cols="12" md="5" class="py-0">
                  <v-text-field
                    light
                    placeholder="Company Address"
                    v-model="company.address"
                    clearable
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company Address</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="py-0">
                  <v-text-field
                    light
                    placeholder="Company City"
                    v-model="company.city"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company City</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="2" class="py-0">
                  <v-text-field
                    light
                    placeholder="Company State"
                    v-model="company.state"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company State</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="2" class="py-0">
                  <v-text-field
                    light
                    placeholder="Company Zip"
                    v-model="company.zipcode"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company Zip</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="12" class="py-0">
                  <v-text-field
                    light
                    placeholder="Company Website"
                    v-model="company.website"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Website</p>
                    </template>
                  </v-text-field>
                </v-col>

                <!--              <v-col cols="12" md="6" class="py-0">-->
                <!--                <v-text-field-->
                <!--                  light-->
                <!--                  placeholder=""-->
                <!--                  v-model="company.phone"-->
                <!--                ><template v-slot:label>-->
                <!--                  <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Phone</p>-->
                <!--                </template></v-text-field>-->
                <!--              </v-col>-->

                <v-col cols="12" md="3" class="py-0">
                  <v-text-field
                    light
                    placeholder="Company Founded"
                    v-model="company.year_founded"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company Founded</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="9" class="py-0">
                  <v-text-field
                    light
                    placeholder="Company Description"
                    v-model="company.description"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Company Description</p>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row v-if="loadCompany">

                <v-col cols="12" class="py-0 mt-0">
                  <v-subheader class="px-0 headline font-weight-bold primary--text" light>Profile Current User</v-subheader>
                </v-col>

                <v-col cols="12" md="6" class="pt-0">
                  <v-text-field
                    label="First Name"
                    light
                    placeholder="First Name"
                    v-model="currentUserVal.first_name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">First Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="pt-0">
                  <v-text-field
                    label="Last Name"
                    light
                    placeholder="Last Name"
                    v-model="currentUserVal.last_name"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Last Name</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    light
                    placeholder="Email"
                    v-model="currentUserVal.email"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                    </template>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    light
                    placeholder="Phone"
                    v-model="currentUserVal.phone"
                  ><template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                  </template></v-text-field>
                </v-col>
              </v-row>
              <v-btn v-if="company" color="primary" class="px-8 my-2" @click="updateCompany()">Update Profile</v-btn>
            </v-form>

          </v-card-text>
        </template>
      </transition>
    </v-container>

    <transition name="slide-fade">
      <v-card v-if="modalSuccessEditLoad" style="position: fixed; top: 25vh; left: 20vw; width: 50%;">
        <v-card-title>Successfully Edited Location!</v-card-title>
        <v-btn @click="modalSuccessEditLoad = !modalSuccessEditLoad" text style="position: absolute; top: 10px; right: 10px;">X</v-btn>
      </v-card>
    </transition>
  </v-card>
</template>

<script>
  import VImageInput from 'vuetify-image-input'

  export default {
    name: "ProfileEditCard",
    components: {
      VImageInput
    },
    props: [
      'location',
      'user',
      'adminLevels',
      'editLocation',
      'locationTags',
      'sowerkTags',
      'originalLocationTags',
      'getLocationTags'
    ],
    data() {
      return {
        firstName: null,
        lastName: null,
        title: null,
        address: null,
        year: null,
        industry: null,
        website: null,
        email: null,
        phone: null,
        description: null,
        image: null,
        fullAddress: null,
        adminOptions: [
          {
            text: 'Super Admin',
            value: 1
          },
          {
            text: 'Staff Account',
            value: 0
          }
        ],
        locationEdit: {
          name: null,
          address: null,
          state: null,
          city: null,
          zipcode: null,
          description: null,
          radius: null,
          longitude: null,
          latitude: null,
          contact_first_name: null,
          contact_last_name: null,
          phone: null,
          email: null,
          year_founded: null,
          adminLevel: null,
        },
        company: {},
        user: {},
        loadCompany: false,
        currentUserVal: {},
        loadUpdateCompany: true,
        locationImageFile: null,
        locationImageUrl: null,
        companyImageFile: null,
        companyImageUrl: null,
        locationTagsNew: [],
        modalSuccessEditLoad: false,
      }
    },
    async mounted() {
      if(this.location) {
        this.locationEdit.name = this.location.name;
        this.locationEdit.address = this.location.address;
        this.locationEdit.state = this.location.state;
        this.locationEdit.city = this.location.city;
        this.locationEdit.zipcode = this.location.zipcode;
        this.locationEdit.description = this.location.description;
        this.locationEdit.radius = this.location.radius;
        this.locationEdit.longitude = this.location.longitude;
        this.locationEdit.latitude = this.location.latitude;
        this.locationEdit.contact_first_name = this.location.contact_first_name;
        this.locationEdit.contact_last_name = this.location.contact_last_name;
        this.locationEdit.phone = this.location.phone;
        this.locationEdit.email = this.location.email;
        this.locationEdit.year_founded = this.location.year_founded;
        this.locationEdit.adminLevel = this.location.adminLevel;
        this.formatFullAddress(this.locationEdit);
        console.log(this.locationTags, this.sowerkTags, 'props this.locationTag')
        this.locationTagsNew = this.locationTags;
      } else if(this.company) {
        await this.getCompany(this.user.companies_id);
        // this.formatFullAddress(this.company);
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company');
            this.getUser(this.currentUser.id);
            this.company = response.data;
            this.loadCompany = true;
          })
          .catch(err => {
            console.log('err company', err)
          })
      },
      async getUser(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + id)
          .then(response => {
            this.currentUserVal = response.data;
            console.log(response.data, 'user');
          })
          .catch(err => {
            console.log(err, 'err');
          })
      },
      async updateLocation() {
        if(this.location.adminLevel === 'Super Admin') {
          this.location.adminLevel = this.adminOptions[0].value
        } else {
          this.location.adminLevel = this.adminOptions[1].value
        }

        await this.uploadLocationImage();

        await this.$http.put('https://www.sowerkbackend.com/api/locations/' + this.location.id, this.locationEdit)
          .then(response => {
            console.log(response, 'success')
            if(this.locationTagsNew.length > 0) {
              console.log(this.locationTagsNew, 'this.locationTags');
              for(let i=0; i<this.locationTagsNew.length; i++) {
                if(typeof this.locationTagsNew[i] === 'object' && !(this.originalLocationTags.includes(this.locationTagsNew[i]))) {
                  this.$http.post('https://www.sowerkbackend.com/api/locationtags/byLocationId/' + this.location.id, {
                    name: this.locationTagsNew[i].name
                  })
                    .then(responseVal => {
                      console.log(responseVal, 'success in posting location tags')
                    })
                    .catch(err => {
                      console.log(err, 'err in posting locationtags')
                    })
                } else {
                  if(!(this.originalLocationTags.includes(this.locationTagsNew[i]))) {
                    this.$http.post('https://www.sowerkbackend.com/api/locationtags/byLocationId/' + this.location.id, {
                      name: this.locationTagsNew[i]
                    })
                      .then(responseVal => {
                        console.log(responseVal, 'success in posting location tags')
                      })
                      .catch(err => {
                        console.log(err, 'err in posting locationtags')
                      })
                  }
                }
              }
              for(let i=0; i<this.originalLocationTags.length; i++) {
                if(!(this.locationTagsNew.includes(this.originalLocationTags[i]))) {
                  console.log(this.originalLocationTags[i], 'this.location tags DELETE')
                  this.$http.delete('https://www.sowerkbackend.com/api/locationtags/' + this.originalLocationTags[i].id)
                    .then(response => {
                      console.log(response, 'success in deleting location tag')
                    })
                    .catch(err => {
                      console.log(err, 'err in deleting location tag')
                    })
                }
              }
            }
          })
          .catch(e => {
            console.log(e, 'err in updating')
          });

        this.modalSuccessEditLoad = true;
        setTimeout(() => {
          this.getLocationTags(this.location.id);
        }, 500)
        // this.$nextTick(function() {
        //   this.locationEdit = data;
        // })
      },

      async uploadLocationImage() {
        const formData = new FormData();
        formData.append('file', this.locationImageFile);
        await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log('success in uploading company image', response)
            this.locationEdit.imageUrl = response.data.data.Location;
          })
          .catch(err => {
            console.log('error in uploading company image', err);
          })
      },
      async uploadCompanyImage() {
        const formData = new FormData();
        formData.append('file', this.companyImageFile);
        await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log('success in uploading company image', response)
            this.company.imgUrl = response.data.data.Location;
          })
          .catch(err => {
            console.log('error in uploading company image', err);
          })
      },

      selectLocationImage(e) {
        this.locationImageFile = e.target.files[0]
        console.log(this.locationImageFile)
        this.locationImageUrl = URL.createObjectURL(this.locationImageFile)
        console.log(this.locationImageUrl);
        // this.$emit('selectFile', this.locationImageFile);
        this.$emit('selectFileUrl', this.locationImageUrl);
      },
      selectCompanyImage(e) {
        this.companyImageFile = e.target.files[0]
        console.log(this.companyImageFile)
        this.companyImageUrl = URL.createObjectURL(this.companyImageFile)
        console.log(this.companyImageUrl);
        // this.$emit('selectFile', this.companyImageFile);
        this.$emit('selectFileUrl', this.companyImageUrl);
      },

      cancelEditLocation() {
        console.log('CANCEL 1');
        this.$emit('cancel');
      },

      clickLocationImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('locationImage').click();
      },
      clickCompanyImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('companyImage').click();
      },

      // Since vue-google-autocomplete is not a vuetify input field, we need this method to add a class to the address label to animate it on focus
      animateAddressFieldOnFocus(e) {
        let addressLabel = e.target.previousElementSibling;
        addressLabel.classList.toggle('v-label--focus');
      },

      // Since vue-google-autocomplete is not a vuetify-input-field, we need this method to add a class to the label when filled
      animateAddressFieldOnFilled(e) {
        // checks if e.target exists
        if(e.target != "") {
          // checks if targets previous element contains a class, if so quit function else add class to previous element
          if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
            return;
          } else {
            e.target.previousElementSibling.classList.add('v-label--filled');
          }
        } else {
          e.target.previousElementSibling.classList.remove('v-label--filled');
        }
      },

      // This method gets the necessary props from the address object returned by vue-google-autocomplete and saves to data
      getAddressData(addressData) {
        this.locationEdit.address = addressData.street_number + ' ' + addressData.route;
        this.locationEdit.city = addressData.locality;
        this.locationEdit.state = addressData.administrative_area_level_1;
        this.locationEdit.zipcode = addressData.postal_code;
        // this.formatFullAddress();
      },

      // This method formats the address components into a readable string for display purposes
      formatFullAddress(location) {
        this.fullAddress = location.address + ', ' + location.city + ', ' + location.state + ' ' + location.zipcode;
      },
      async updateCompany() {
        this.loadUpdateCompany = false;
        await this.uploadCompanyImage();
        console.log(this.currentUserVal, 'currentUser', this.company, 'current Company');
        const userChanges = {
          first_name: this.currentUserVal.first_name,
          last_name: this.currentUserVal.last_name,
          email: this.currentUserVal.email,
          phone: this.currentUserVal.phone
        }
        const companyChanges = {
          account_name: this.company.account_name,
          brand_name: this.company.brand_name,
          llcName: this.company.llcName,
          address: this.company.address,
          city: this.company.city,
          state: this.company.state,
          zipcode: this.company.zipcode,
          email: this.company.email,
          phone: this.company.phone,
          year_founded: this.company.year_founded,
          description: this.company.description,
          imgUrl: this.company.imgUrl
        }
        await this.$http.put('https://www.sowerkbackend.com/api/auth/users/' + this.currentUserVal.id, userChanges)
          .then(response => {
            console.log(response, 'SUCCESS IN EDITING USER')
          })
          .catch(err => {
            console.log(err, 'ERROR IN EDITING USER')
          })
        await this.$http.put('https://www.sowerkbackend.com/api/companies/' + this.company.id, companyChanges)
          .then(response => {
            console.log(response, 'SUCCESS IN EDITING COMPANY')
            this.loadUpdateCompany = true;
            this.$router.go();
          })
          .catch(err => {
            console.log(err, 'ERROR IN EDITING COMPANY')
          })
      },
      async removeTag(item) {
        console.log(this.locationTagsNew, 'before removal', item)
        this.locationTagsNew = this.locationTagsNew.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.locationTagsNew, 'after removal')
      },
    }
  };
</script>

<style scoped>
  .v-label {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    top: -1.5em;
    font-size: 0.75em;
    color: #333!important;
    font-weight: bold;
  }

  .v-text-field  {
    font-size: .9rem;
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
