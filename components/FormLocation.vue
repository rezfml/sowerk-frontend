<template>
  <v-row class="mb-12" :class="{'pt-12': index != 0 }">
    <v-col cols="12">
      <span class="headline">Location {{ index + 1 }}</span>
      <v-divider></v-divider>
    </v-col>

    <v-col cols="12" sm="6">
      <v-row fill-height class="pl-3">
        <client-only>
          <v-image-input
            image-quality="0.85"
            clearable
            image-format="png"
            uploadIcon="person"
            fullWidth
            overlayPadding="10px"
            scalingSliderColor="red"
            :readonly="false"
          />
        </client-only>
      </v-row>
    </v-col>

    <v-col cols="12" sm="6">
      <v-text-field
        id="location"
        label="Location Name (required)"
        type="text"
        v-model="location.name.value"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="7" class="v-input">
      <div class="v-input__control">
        <div class="v-input__slot">
          <div class="v-text-field__slot" style="width: 100%;">
            <label class="v-label theme--light form__label--address" style="left: 0px; right: auto; position: absolute;">Location Address (required)</label>
            <client-only>
              <vue-google-autocomplete
                :id="'location-address--' + index"
                classname="form-control"
                v-on:placechanged="getAddressData"
                placeholder=""
                style="width: 100%;"
                v-on:focus.native="animateAddressFieldOnFocus"
                v-on:blur.native="animateAddressFieldOnFocus"
                v-on:input.native="animateAddressFieldOnFilled"
              >
              </vue-google-autocomplete>
            </client-only>
          </div>
        </div>
      </div>
    </v-col>

    <v-col cols="12" md="5">
      <span>Where would you like to accept vendor applications?</span>
      <v-select
        class="mb-8"
        label="Applicant Range"
        :items="memberships"
        v-model="location.membership_id.value"
      >
      </v-select>
      <template v-if="location.membership_id.value === 1">
        <span class="mb-12">Please select a range (miles).</span>
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
          v-model="location.radius.value"
          v-on:change="emitRadiusSlider(index)"
        >
        </v-slider>
      </template>
    </v-col>

    <v-col cols="12" class="mt-8">
      <span class="headline mb-0">Primary Point of Contact Info</span>
      <span class="subtitle-1 my-0">(Only Public to Approved Vendor)</span>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        id="first_name"
        label="First Name (required)"
        type="text"
        v-model="location.firstName.value"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        id="last_name"
        label="Last Name (required)"
        type="text"
        v-model="location.lastName.value"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        id="phone"
        label="Phone (required)"
        type="number"
        v-model="location.phone.value"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        id="email"
        label="Email Address (required)"
        type="email"
        v-model="location.email.value"
      ></v-text-field>
    </v-col>

    <v-col cols="12">
      <v-textarea
        id="description"
        label="Location Description (required)"
        v-model="location.description.value"
      ></v-textarea>
    </v-col>
  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'

  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
    },
    installComponents: true
  })

  export default {
    name: 'FormLocation',
    props: {
      index: {
        type: Number,
        required: true
      },
      isProvider: {
        type: Boolean,
      }
    },
    components: {
      VImageInput
    },
    data() {
      return {
        location: {
          name: {
            label: 'Name',
            value: null,
          },
          radius: {
            value: null,
            hide: true,
          },
          address: {
            label: 'Address',
            value: null,
            hide: true,
          },
          city: {
            label: 'City',
            value: null,
            hide: true,
          },
          state: {
            label: 'State',
            value: null,
            hide: true,
          },
          zipcode: {
            label: 'Zipcode',
            value: null,
            hide: true,
          },
          membership_id: {
            value: 'buyer',
            hide: true,
          },
          latitude: {
            value: null,
            hide: true,
          },
          longitude: {
            value: null,
            hide: true,
          },
          polygon: {
            value: null,
            hide: true,
          },
          state_full: {
            value: null,
            hide: true,
          },
          firstName: {
            label: 'First Name',
            value: null,
          },
          lastName: {
            label: 'Last Name',
            value: null,
          },
          phone: {
            label: 'Phone Number',
            value: null,
          },
          email: {
            label: 'Email Address',
            value: null,
          },
          description: {
            label: 'Description',
            value: null,
          },
        },
        miles: [
          '','','','','','','','','','','100','','','','','150','','','','','200'
        ],
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
      }
    },
    methods: {
      emitRadiusSlider(e) {
        console.log(e);
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
        if(id.includes('location-address')) {
          let locationIndex = id.split('--')[1];
          this.saveLocationAddress(addressData, placeResultData, id, locationIndex);
        }
      },
      emitSaveFormLocationData() {
        console.log('hello');
        this.$emit('change', this.location, this.index);
      },
      saveLocationAddress(addressObj, placeObj, id, locationIndex) {
        this.location.address.value = addressObj.street_number + ' ' + addressObj.route;
        this.location.city.value = addressObj.locality;
        this.location.state.value = addressObj.administrative_area_level_1;
        this.location.zipcode.value = addressObj.postal_code;
        this.location.latitude.value = addressObj.latitude;
        this.location.longitude.value = addressObj.longitude;
        this.getStateFullNameForQuery(placeObj, locationIndex);
        this.getStateData(locationIndex);
        this.emitSaveFormLocationData();
      },
      getStateFullNameForQuery(place) {
        let location = this.location;
        place.address_components.forEach(function(component) {
          if(component.short_name === location.state.value) {
            location.state_full.value = component.long_name;
          }
        });

        this.location = location;
      },
      async getStateData(i) {

        let apiPath = "https://nominatim.openstreetmap.org/search.php";

        let params = {
          state: this.location.state_full.value,
          polygon_geojson: 1,
          format: "json",
        };


        let polygon = [];

        await this.$http.get(apiPath, { params: params }  )
          .then(response => {
            let geoJSONDataChunk = response.data[0];

            // geojson data from http://nominatim.openstreetmap.org/ needs
            // to be wrapped, so that the google addGeoJson() call
            // can handle it properly
            const geoConf = {
              "type": "FeatureCollection",
              "features": [
                { "type": "Feature",
                  "geometry": geoJSONDataChunk.geojson,
                }
              ]
            };

            let coordinateSets = geoConf.features[0].geometry.coordinates;

            //flip each coordinate array
            let group = [];
            if(coordinateSets.length > 1) {
              coordinateSets.forEach(function(set, index, array) {
                set.forEach(function(coordinates) {
                  coordinates.forEach(function(coordinate) {
                    group.push({
                      lat: coordinate[1],
                      lng: coordinate[0]
                    })
                  });
                  polygon.push(group);
                  group = [];
                });
              });
            } else {
              coordinateSets.forEach(function(set, index, array) {
                set.forEach(function(coordinates) {
                  group.push({
                    lat: coordinates[1],
                    lng: coordinates[0]
                  })
                });
                polygon.push(group);
                group = [];
              });
            }

            this.location.polygon.value = polygon;

          })
      },
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
