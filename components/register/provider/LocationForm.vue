<template>
  <v-row class="mb-12" :class="{'pt-12': index != 0 }">

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

      <v-col cols="12" md="6">
        <v-row fill-height class="pl-2 fill-height">
          <v-col cols="12" class="d-flex justify-center align-center">
            <v-img :src="locationImageUrl" :aspect-ratio="1" class="my-8 rounded-circle" v-if="location.imageUrl"></v-img>
            <v-icon v-else :size="100">person</v-icon>
          </v-col>
          <v-col cols="12" class="d-flex flex-column justify-space-between">
            <v-file-input class="location-image-upload ma-0 pa-0" :class="{'location-image-upload--selected' : location.imageUrl}" v-model="location.imageUrl" v-on:change.native="selectLocationImage" id="locationImage" style="visibility: hidden; height: 0; max-height: 0;"></v-file-input>
            <v-btn @click="clickLocationImageUpload" color="primary" outlined rounded class="flex-grow-0">Upload Logo</v-btn>
<!--            <p class="text-center mb-0">Or</p>-->

<!--            <v-checkbox class="mt-0">-->
<!--              <template v-slot:label>-->
<!--                <p class="mb-0 font-weight-medium" style="line-height: 1.3em;">Don't have a logo? Use Company Name</p>-->
<!--              </template>-->
<!--            </v-checkbox>-->
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <v-text-field
          placeholder=" "
          id="location"
          type="text"
          v-model="location.name"
          class="flex-grow-0 mb-12"
        >
          <template v-slot:label>
            <p class="grey--text text--darken-4 font-weight-bold">Location Name*</p>
          </template>
        </v-text-field>

        <v-select
          placeholder=" "
          class="flex-grow-0 mb-12"
          :items="serviceOptions"
          multiple
          chips
        >
          <template v-slot:label>
            <p class="grey--text text--darken-4 font-weight-bold">Service Provided*</p>
          </template>
        </v-select>
      </v-col>

      <v-row>
        <v-col cols="12" md="6">
          <div class="v-input__control">
            <div class="v-input__slot">
              <div class="v-text-field__slot" style="width: 100%;">
                <label><p class="grey--text text--darken-4 font-weight-bold mb-0" style="font-size: 15px">Address*</p></label>
                <client-only>
                  <vue-google-autocomplete
                    :id="'location-address--' + index"
                    classname="form-control"
                    v-on:placechanged="getAddressData"
                    placeholder=""
                    style="width: 100%; font-size: 16px; padding: 2px 0"
                    v-on:focus.native="animateAddressFieldOnFocus"
                    v-on:blur.native="animateAddressFieldOnFocus"
                    v-on:input.native="animateAddressFieldOnFilled"
                    v-model="fullAddress"
                    autocomplete="none"
                  >
                  </vue-google-autocomplete>
                </client-only>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <!--      <v-checkbox v-model="location.pfLogoCheckbox"-->
          <!--                  :label="`This location will be managed by: ${user.first_name} ${user.last_name}`">-->
          <!--        <template v-slot:label>-->
          <!--          <p class="grey&#45;&#45;text text&#45;&#45;darken-4 mb-0">This location will be managed by: <span class="primary&#45;&#45;text font-weight-bold">{{ user.first_name }} {{ user.last_name }}</span></p>-->
          <!--        </template>-->
          <!--      </v-checkbox>-->


          <v-text-field
            placeholder=" "
            id="year-founded"
            type="number"
            v-model="location.year_founded"
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Year Founded*</p>
            </template>
          </v-text-field>
        </v-col>
      </v-row>

    <v-col cols="12">
      <v-text-field
        id="description"
        v-model="location.description"
        placeholder=" "
      >
        <template v-slot:label>
          <p class="grey--text text--darken-4 font-weight-bold">Business Description*</p>
        </template>
      </v-text-field>
    </v-col>

    <template v-if="fullAddress">
      <v-col cols="12" md="6" class="d-flex flex-column">

        <span class="mb-12 font-weight-bold" style="font-size: 15px;">Location Service Radius</span>
        <v-slider
          min="0"
          max="200"
          thumb-label="always"
          :thumb-size="36"
          track-color="grey"
          track-fill-color="primary"
          step="10"
          ticks
          :tick-labels="miles"
          :readonly="false"
          v-model="location.radius"
          v-on:input="emitRadiusSlider"
          class="d-flex align-end"
        >
        </v-slider>
      </v-col>

      <v-col cols="12" md="6">
        <client-only>
          <GmapMap
            id="locations-map"
            :center="{lat: location.latitude ? location.latitude : 38 , lng: location.longitude ? location.longitude : -96}"
            :zoom="location.latitude ? 12 : 4"
            style="height: 250px; border-radius: 10px; overflow: hidden;"
            ref="locationMap"
          >
            <GmapMarker
              :position="{lat: location.latitude, lng: location.longitude}"
              :clickable="true"
            />
            <GmapCircle
              :center="{lat: location.latitude, lng: location.longitude}"
              :radius="radius * 1609.344"
              ref="mapCircle"
            />
          </GmapMap>
        </client-only>
      </v-col>
    </template>

    <v-col cols="12" class="my-8 d-flex justify-center">
      <span class="text-h6 mb-0">Add Location Manager or Franchisee</span>
    </v-col>

    <v-col cols="12" md="5">
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

    <v-col cols="12" md="5">
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

    <v-col cols="12" md="2">
      <v-select
        id="admin-level"
        label="Admin Level*"
        :items="adminLevel"
        :item-text="adminLevel.text"
        :item-value="adminLevel.value"
        v-model="location.adminLevel"
        placeholder=" "
      >
        <template v-slot:label>
          <p class="grey--text text--darken-4 font-weight-bold">Admin Level*</p>
        </template>
      </v-select>
    </v-col>

    <v-col cols="12" md="6">
      <!--      <v-checkbox v-model="location.pfLogoCheckbox"-->
      <!--                  :label="`This location will be managed by: ${user.first_name} ${user.last_name}`">-->
      <!--        <template v-slot:label>-->
      <!--          <p class="grey&#45;&#45;text text&#45;&#45;darken-4 mb-0">This location will be managed by: <span class="primary&#45;&#45;text font-weight-bold">{{ user.first_name }} {{ user.last_name }}</span></p>-->
      <!--        </template>-->
      <!--      </v-checkbox>-->
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
// import * as VueGoogleMaps from '~/node_modules/gmap-vue'
import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'

import Vue from 'vue';

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
//   },
//   installComponents: true
// })

export default {
  name: 'LocationForm',
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
        {
          text: 'Super Admin',
          value: 1,
        },
        {
          text: 'Staff Account',
          value: 0,
        }
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
      serviceOptions: [
        'HVAC',
        'Roofing',
        'General Contractor',
        'Plumbing',
        'Window/Glass Repair',
        'Electrician',
        'Landscaper',
        'Painting',
        'Paving',
        'Excavation',
        'Pest Control',
        'Waste Management',
        'Engineering',
        'Water Damage Repair'
      ],
      fullAddress: null,
      radius: null,
      locationImageFile: null,
      locationImageUrl: null,
    }
  },
  mounted() {
    this.formatFullAddress();
  },
  methods: {
    emitRadiusSlider(e) {
      console.log('hello');
      console.log(e);
      this.radius = e;

      this.$refs.mapCircle.$circlePromise.then(() => {
        const {$circleObject} = this.$refs.mapCircle; //get google.maps.Circle object
        const map = $circleObject.getMap(); //get map instance
        map.fitBounds($circleObject.getBounds());
      })
    },
    emitPlaceChanged(e) {

    },
    selectLocationImage(e) {
      this.location.imageUrl = e.target.files[0];
      console.log(this.location.imageUrl);
      this.locationImageUrl = URL.createObjectURL(this.location.imageUrl);
      console.log(this.locationImageUrl);
    },
    clickLocationImageUpload() {
      console.log(this);
      // let imageInput = this.$refs.companyImage;
      // console.log(imageInput);
      // imageInput.$el.click();
      document.getElementById('locationImage').click();
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
      this.formatFullAddress();
    },
    formatFullAddress() {
      if(!this.location.address) return;
      this.fullAddress = this.location.address + ', ' + this.location.city + ', ' + this.location.state + ' ' + this.location.zipcode;
      console.log(this.fullAddress);
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

.v-input >>> label {
  font-size: 1.25em;
  top: 0;
}

.form-control {
  padding: 8px 0;
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
