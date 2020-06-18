<template>
  <v-row>
    <v-subheader class="headline px-0">{{ name ? name : 'Location ' + (index + 1) }}</v-subheader>
    <v-form>
      <v-row>
        <v-col cols="6" lg="5" xl="4">
          <client-only>
            <v-image-input
              v-model="image"
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
        </v-col>
        <v-col cols="6" lg="7" xl="8">
          <v-text-field
            id="location"
            name="name"
            type="text"
            v-model="name"
            placeholder=" "
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Location Name*</p>
            </template>
          </v-text-field>

          <v-autocomplete
            multiple
            chips
            clearable
            :items="services"
            deletable-chips
            :search-input.sync="servicesInput"
            @change="servicesInput=''"
            placeholder=" "
            outlined
            dense
            class="remove-legend mt-8"
            v-model="providedServices"
          >
            <template v-slot:selection="data">
              <v-chip
                :input-value="data.selected"
                v-bind="data.attrs"
                close
                color="accent"
                class="my-2"
              >
                <strong>{{ data.item }}</strong>&nbsp;
              </v-chip>
            </template>
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Services Provided</p>
            </template>
          </v-autocomplete>
        </v-col>

        <v-col cols="12" md="7">
          <div class="v-input__control">
            <div class="v-input__slot">
              <div class="v-text-field__slot d-flex flex-column" style="width: 100%; position: relative;">
                <p class="grey--text text--darken-4 font-weight-bold mb-0" style="font-size: 12px!important; line-height: 20px; position: absolute; left: 0; top: -12px!important;" :class="{'v-label--filled': fullAddress}">Address*</p>
                <client-only>
                  <vue-google-autocomplete
                    :id="'location-address--' + index"
                    class="form-control mt-3"
                    v-on:placechanged="getAddressData"
                    placeholder=""
                    style="width: 100%; font-size: 16px; height: 48px;"
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
        </v-col>

        <v-col cols="12" md="5">
          <v-select
            :items="memberships"
            v-model="location.membership_id"
            placeholder=" "
            class="pt-5 remove-legend"
            outlined
            dense
            v-on:change.native=""
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold mb-0">Where would you like to accept vendor applications?</p>
            </template>
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
          <p class="headline mb-0">Contact Information</p>
          <p class="subtitle-1 my-0 font-weight-lighter">This will be the primary point of contact for the location, e.g., Owner, Manager, Supervisor</p>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="first_name"
            label="First Name*"
            type="text"
            v-model="firstName"
            v-on:change.native="formatFullName"
            placeholder=" "
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">First Name*</p>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="last_name"
            label="Last Name*"
            type="text"
            v-model="lastName"
            v-on:change.native="formatFullName"
            placeholder=" "
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Last Name*</p>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="phone"
            label="Phone*"
            type="number"
            v-model="phone"
            placeholder=" "
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Phone*</p>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            id="email"
            label="Email Address*"
            type="email"
            v-model="email"
            placeholder=" "
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Email*</p>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            id="description"
            label="Location Description*"
            v-model="description"
            placeholder=" "
          >
            <template v-slot:label>
              <p class="grey--text text--darken-4 font-weight-bold">Location Description*</p>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
    </v-form>
    <v-btn
      block
      color="primary"
      @click="saveLocation"
    >
      Save Location
    </v-btn>
  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'

  export default {
    name: 'LocationForm',
    props: {
      location: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    components: {
      VImageInput
    },
    data() {
      return {
        services: [
          'HVAC',
          'Electrical',
          'Plumbing',
          'Landscaping',
          'Cleaning'
        ],
        servicesInput: null,
        name: null,
        providedServices: null,
        address: null,
        city: null,
        state: null,
        zipcode: null,
        firstName: null,
        lastName: null,
        fullName: null,
        phone: null,
        email: null,
        description: null,
        latitude: null,
        longitude: null,
        fullAddress: null,
        image: null,
        plans: null,
        memberships: [
          {
            value: 'yearly-national',
            text:  'National'
          },
          {
            value: 'yearly-state',
            text:  'State'
          },
          {
            value: 'yearly-radius',
            text:  'Local (radius)'
          }
        ]
      }
    },
    mounted() {
      this.getPlans();
    },
    methods: {
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

      getAddressData(addressData, placeResultData, id) {
        this.address = addressData.street_number + ' ' + addressData.route;
        this.city = addressData.locality;
        this.state = addressData.administrative_area_level_1;
        this.zipcode = addressData.postal_code;
        this.latitude = addressData.latitude;
        this.longitude = addressData.longitude;
        this.fullAddress = addressData.street_number + ' ' + addressData.route + ' ' + addressData.locality + ', ' + addressData.administrative_area_level_1 + ' ' + addressData.postal_code;

        this.$emit('createMarker', this.latitude, this.longitude);
      },

      // get membership plans
      async getPlans() {
        let {data: {plans, message, errors}, status} = await this.$http.get('https://api.sowerk.com/v1/chargebees').catch(e => e);
        if (this.$error(status, message, errors)) return;
        console.log(plans);
        this.plans = plans;
      },

      saveLocation() {
        let location = {
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode,
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          description: this.description,
          latitude: this.latitude,
          longitude: this. longitude,
          fullAddress: this.fullAddress,
          image: this.image
        }
        this.$emit('saveLocation', location);
      },

      // This method formats the first and last name as a whole name for display purposes
      formatFullName() {
        this.fullName = this.firstName + ' ' + this.lastName;
      },

      // This method formats the address components into a readable string for display purposes
      formatFullAddress() {
        this.fullAddress = this.address + ', ' + this.city + ', ' + this.state + ' ' + this.zipcode;
      },
    }
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
  }

  .v-label--filled {
    top: -1.5em;
  }

  .remove-legend::v-deep legend {
    display: none!important;
  }

  .remove-legend::v-deep label {
    left: -12px!important;
    top: -12px!important;
  }

  .remove-legend::v-deep .v-select__selections {
    padding-bottom: 8px!important;
  }

  .form-control:focus {
    outline: none;
  }
</style>
