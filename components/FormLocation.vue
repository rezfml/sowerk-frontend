<template>
  <v-row class="mb-12" :class="{'pt-12': index != 0 }">
    <v-col cols="12">
      <v-row style="position: relative;">
        <v-col cols="12" style="width: 100%;">
          <client-only>
            <GmapMap
              id="locations-map"
              :center="{lat: location.latitude ? location.latitude : 38 , lng: location.longitude ? location.longitude : -96}"
              :zoom="location.latitude ? 12 : 4"
              style="height: 400px"
              ref="location-map"
            >
              <GmapMarker
                :position="{lat: location.latitude, lng: location.longitude}"
                :clickable="true"
              />
            </GmapMap>
          </client-only>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <span class="headline">Location {{ index + 1 }}</span>
      <v-divider></v-divider>
    </v-col>

<!--    <v-col cols="12" sm="5">-->
<!--      <v-row fill-height class="pl-3">-->
<!--        <client-only>-->
<!--          <v-image-input-->
<!--            image-quality="0.85"-->
<!--            clearable-->
<!--            image-format="png"-->
<!--            uploadIcon="person"-->
<!--            fullWidth-->
<!--            overlayPadding="10px"-->
<!--            scalingSliderColor="red"-->
<!--            :readonly="false"-->
<!--          />-->
<!--        </client-only>-->
<!--      </v-row>-->
<!--    </v-col>-->

    <v-col cols="12">
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <client-only >
            <v-image-input
              v-model="location.imageUrl"
              image-quality="0.85"
              clearable
              fullWidth
              image-format="png"
              uploadIcon="person"
              overlayPadding="10px"
              scalingSliderColor="red"
              :readonly="false"
              style=""
            />
          </client-only>
          <v-checkbox v-model="checkbox1"
                      :label="`Use Brand Logo For This Facility`"></v-checkbox>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            placeholder=" "
            id="location"
            type="text"
            v-model="location.name"
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Location Name*</p>
            </template>
          </v-text-field>
        </v-col>
      </v-row>

      <div class="v-input__control mt-10">
        <div class="v-input__slot">
          <div class="v-text-field__slot" style="width: 100%;">
            <label><p class="grey--text text--darken-4 font-weight-bold mb-0" style="font-size: 12px">Location Address*</p></label>
            <client-only>
              <vue-google-autocomplete
                :id="'location-address--' + index"
                classname="form-control"
                v-on:placechanged="getAddressData"
                placeholder=""
                style="width: 100%; font-size: 16px"
                v-on:focus.native="animateAddressFieldOnFocus"
                v-on:blur.native="animateAddressFieldOnFocus"
                v-on:input.native="animateAddressFieldOnFilled"
                v-model="fullAddress"
              >
              </vue-google-autocomplete>
            </client-only>
          </div>
        </div>
      </div>

      <v-col>
        <v-textarea
          id="description"
          v-model="location.description"
          placeholder=" "
        >
          <template v-slot:label>
            <p class="grey--text text--darken-4 font-weight-bold">Location Description* (Does this property have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)</p>
          </template>
        </v-textarea>
      </v-col>
    </v-col>

<!--    <v-col cols="12" md="7" class="v-input">-->

<!--    </v-col>-->

<!--    <v-col cols="12" md="5">-->
<!--      <span>Where would you like to accept vendor applications?</span>-->
<!--      <v-select-->
<!--        class="mb-8"-->
<!--        label="Applicant Range"-->
<!--        :items="memberships"-->
<!--        v-model="location.membership_id"-->
<!--      >-->
<!--      </v-select>-->
<!--      <template v-if="location.membership_id === 1">-->
<!--        <span class="mb-12">Please select a range (miles).</span>-->
<!--        <v-slider-->
<!--          min="0"-->
<!--          max="200"-->
<!--          thumb-label="always"-->
<!--          :thumb-size="36"-->
<!--          track-color="grey"-->
<!--          track-fill-color="primary"-->
<!--          step="10"-->
<!--          ticks-->
<!--          :tick-labels="miles"-->
<!--          :readonly="false"-->
<!--          v-model="location.radius"-->
<!--          v-on:change="emitRadiusSlider(index)"-->
<!--        >-->
<!--        </v-slider>-->
<!--      </template>-->
<!--    </v-col>-->

    <v-col cols="12" class="mt-8 d-flex justify-center">
      <span class="headline mb-0">Location Manager</span>
    </v-col>
    <v-row class="title font-weight-regular text-center my-12 grey--text text--darken-2">This should be the main point person who will be responsible for managing approved vendors at this location. The information provided here will help create a staff account within your company and the contact information will only be available to approved vendors at that location. </v-row>
    <v-col cols="12" md="6">
      <v-checkbox v-model="location.pfLogoCheckbox"
      :label="`This account will be managed by ${user.first_name} ${user.last_name}`"></v-checkbox>
    </v-col>

    <v-col cols="12" md="6">
      <v-select
        id="admin-level"
        label="Admin Level*"
        :items="adminLevel"
        v-model="location.adminLevel"></v-select>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        placeholder=" "
        id="first_name"
        type="text"
        v-model="location.contact_first_name"
      >
        <template v-slot:label>
          <p class="grey--text text--darken-4 font-weight-bold">First Name*</p>
        </template>
      </v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        placeholder=" "
        id="last_name"
        type="text"
        v-model="location.contact_last_name"
      >
        <template v-slot:label>
          <p class="grey--text text--darken-4 font-weight-bold">Last Name*</p>
        </template>
      </v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        placeholder=" "
        id="phone"
        type="number"
        v-model="location.phone"
      >
        <template v-slot:label>
          <p class="grey--text text--darken-4 font-weight-bold">Phone*</p>
        </template>
      </v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        placeholder=" "
        id="email"
        type="email"
        v-model="location.email"
      >
        <template v-slot:label>
          <p class="grey--text text--darken-4 font-weight-bold">Email*</p>
        </template>
      </v-text-field>
    </v-col>

  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'
  import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'

  import Vue from 'vue';

  // Vue.use(VueGoogleMaps, {
  //   load: {
  //     key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
  //   },
  //   installComponents: true
  // })

  export default {
    name: 'FormLocation',
    props: {
      index: {
        type: Number,
        required: true
      },
      isProvider: {
        type: Boolean,
      },
      location: {
        type: Object,
        required: true
      },
      user: {
        type: Object,
        required: true
      }
    },
    components: {
      VImageInput
    },
    data() {
      return {
        miles: [
          '','','','','','','','','','','100','','','','','150','','','','','200'
        ],
        adminLevel: [
          1,
          0
        ],
        checkbox1: false,
        checkbox: false,
        memberships: [
          {
            text: 'Local',
            value: 1
          },
          {
            text: 'State',
            value: 2
          },
          {
            text: 'National',
            value: 3
          },
        ],
        fullAddress: null
      }
    },
    mounted() {
      this.formatFullAddress();
    },
    methods: {
      emitRadiusSlider(e) {
      },
      emitPlaceChanged(e) {

      },
      animateAddressFieldOnFocus(e) {
        let addressLabel = e.target.previousElementSibling;
        addressLabel.classList.toggle('v-label--focus');
      },
      animateAddressFieldOnFilled(e) {
        if(e.target != "") {
          if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
            return;
          } else {
            e.target.previousElementSibling.classList.add('v-label--filled');
          }
        } else {
          e.target.previousElementSibling.classList.remove('v-label--filled');
        }
      },
      convertMilesToMeters(miles) {
        return miles * 1609.34;
      },
      getAddressData(addressData, placeResultData, id) {
        this.location.address = addressData.street_number + ' ' + addressData.route;
        this.location.city = addressData.locality;
        this.location.state = addressData.administrative_area_level_1;
        this.location.zipcode = addressData.postal_code;
        this.location.latitude = addressData.latitude;
        this.location.longitude = addressData.longitude;
      },
      formatFullAddress() {
        if(!this.location.address) return;
        this.fullAddress = this.location.address + ', ' + this.location.city + ', ' + this.location.state + ' ' + this.location.zipcode;
      },
      saveLocationAddress(addressObj, placeObj, id, locationIndex) {
        this.location.address = addressObj.street_number + ' ' + addressObj.route;
        this.location.city = addressObj.locality;
        this.location.state = addressObj.administrative_area_level_1;
        this.location.zipcode = addressObj.postal_code;
        this.location.latitude = addressObj.latitude;
        this.location.longitude = addressObj.longitude;
      },
      getStateFullNameForQuery(place) {
        let location = this.location;
        place.address_components.forEach(function(component) {
          if(component.short_name === location.state) {
            location.state_full = component.long_name;
          }
        });

        this.location = location;
      },
      // async getStateData(i) {
      //
      //   let apiPath = "https://nominatim.openstreetmap.org/search.php";
      //
      //   let params = {
      //     state: this.location.state_full,
      //     polygon_geojson: 1,
      //     format: "json",
      //   };
      //
      //
      //   let polygon = [];
      //
      //   await this.$http.get(apiPath, { params: params }  )
      //     .then(response => {
      //       let geoJSONDataChunk = response.data[0];
      //
      //       // geojson data from http://nominatim.openstreetmap.org/ needs
      //       // to be wrapped, so that the google addGeoJson() call
      //       // can handle it properly
      //       const geoConf = {
      //         "type": "FeatureCollection",
      //         "features": [
      //           { "type": "Feature",
      //             "geometry": geoJSONDataChunk.geojson,
      //           }
      //         ]
      //       };
      //
      //       let coordinateSets = geoConf.features[0].geometry.coordinates;
      //
      //       //flip each coordinate array
      //       let group = [];
      //       if(coordinateSets.length > 1) {
      //         coordinateSets.forEach(function(set, index, array) {
      //           set.forEach(function(coordinates) {
      //             coordinates.forEach(function(coordinate) {
      //               group.push({
      //                 lat: coordinate[1],
      //                 lng: coordinate[0]
      //               })
      //             });
      //             polygon.push(group);
      //             group = [];
      //           });
      //         });
      //       } else {
      //         coordinateSets.forEach(function(set, index, array) {
      //           set.forEach(function(coordinates) {
      //             group.push({
      //               lat: coordinates[1],
      //               lng: coordinates[0]
      //             })
      //           });
      //           polygon.push(group);
      //           group = [];
      //         });
      //       }
      //
      //       this.location.polygon = polygon;
      //
      //     })
      // },
    },
  }
</script>

<style scoped>
  .form__address::v-deep input {
    border: 2px solid red!important;
    width: 600px;
  }

  .v-input__slot:before {
    border-color: rgba(0,0,0,0.42);
    border-style: solid;
    border-width: thin 0 0 0;
    bottom: -2px;
    content: "";
    left: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
  }

  .form-control {
    padding: 2px 0;
    position: relative;
    z-index: 3;
  }

  .v-label {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    top: 0
  }

  .v-label--focus {
    top: -1.5em;
    color: #a61c00;
    font-size: 0.75em;
  }

  .v-label--filled {
    top: -1.5em;
    font-size: 0.75em;
  }
</style>
