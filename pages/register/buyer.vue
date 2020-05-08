<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
    >
      <v-card class="elevation-12 card--has-floating" light>
        <v-card-title class="justify-center headline font-weight-light">Build Your Business Profile</v-card-title>
        <v-card-subtitle class="text-center title mt-1 mb-12" style="font-weight: normal;">This information will let us know more about you.</v-card-subtitle>
        <v-tabs
          v-model="tab"
          background-color="grey lighten-2"
          color="black"
          grow
          active-class="primary white--text elevation-10"
          hide-slider
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :disabled="item !== tab"
            style="opacity: 1!important;"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items
          v-model="tab"
          class="white"
          light
        >
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <template v-if="tab === 0">
              <v-container style="max-width: 80%;" mx-auto>
                <v-card-text class="pa-0">
                  <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Let's start with the basic information about your company.</p>
                  <v-form class="mx-auto">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6" align-self="center">
                          <v-row fill-height>
                            <v-icon color="grey" style="font-size: 100px; text-align: center;" class="mx-auto">person</v-icon>
                          </v-row>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="company"
                            label="Company Name (required)"
                            type="text"
                            v-model="form.company.name.value"
                          ></v-text-field>

                          <v-text-field
                            label="Email Address (required)"
                            type="email"
                            class="card__input black--text"
                            v-model="form.company.email.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="password"
                            label="Password (required)"
                            type="password"
                            v-model="form.company.password.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="confirm"
                            label="Confirm Password (required)"
                            type="password"
                            v-model="form.company.confirm.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            id="address"
                            label="Corporate Address (required)"
                            type="text"
                            v-model="form.company.address.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="first_name"
                            label="First Name (required)"
                            type="text"
                            v-model="form.company.firstName.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="last_name"
                            label="Last Name (required)"
                            type="text"
                            v-model="form.company.lastName.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-textarea
                            id="description"
                            label="Business Description (required)"
                            v-model="form.company.description.value"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-container>
            </template>
            <template v-if="tab === 1">
              <v-container style="max-width: 80%;" mx-auto>
                <v-card-text class="pa-0">
                  <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Now tell us about each location you have</p>
                  <v-form class="mx-auto">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-row fill-height>
                            <v-icon color="grey" style="font-size: 100px; text-align: center;" class="mx-auto">person</v-icon>
                          </v-row>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="location"
                            label="Location Name (required)"
                            type="text"
                          ></v-text-field>
                          <v-select
                            label="Service Needs (required)"
                            :items="needs"
                            class="card__input black--text"
                          ></v-select>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            id="address"
                            label="Address (required)"
                            type="text"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6" class="my-8" align-self="center">
                          <v-slider
                            min="0"
                            max="200"
                            thumb-label="always"
                            :thumb-size="36"
                            track-color="grey"
                            track-fill-color="primary"
                            step="10"
                            ticks="true"
                            :tick-labels="miles"
                          >

                          </v-slider>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-img src="/map.png"/>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="first_name"
                            label="First Name (required)"
                            type="text"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="last_name"
                            label="Last Name (required)"
                            type="text"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="phone"
                            label="Phone (required)"
                            type="number"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="email"
                            label="Email Address (required)"
                            type="email"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-textarea
                            id="description"
                            label="Location Description (required)"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-container>
            </template>
            <template v-if="tab === 2">
              <v-container style="max-width: 80%;" mx-auto>
                <v-card-text class="pa-0">
                  <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Please review your information before submitting</p>
                  <v-col cols="12" align="center">
                    <v-icon color="grey" style="font-size: 100px; text-align: center;" class="mx-auto">person</v-icon>
                    <p>Bass Pro Shops</p>
                  </v-col>

                  <v-col cols="12" v-for="item in form.company">
                    <v-subheader inset class="mx-0 px-0">
                      <span class="primary--text font-weight-bold">{{ item.name }}</span>
                    </v-subheader>
<!--                    <v-divider inset class="mx-0"></v-divider>-->
                    <p class="mt-0 mb-4">{{ item.value }}</p>
                  </v-col>

                </v-card-text>
              </v-container>
            </template>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions class="py-10 mx-auto" style="max-width: 80%;">
          <v-btn color="primary" text @click="prevPageIfNotFirst" v-show="tab !== 0"> < Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="px-8" @click="nextPageIfNotLast" v-if="tab !== 2">Next > </v-btn>
          <v-btn color="primary" class="px-8" @click="submitRegistrationForm" v-else>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'buyer',
    data() {
      return {
        tab: 0,
        items: [
          'Company',
          'Locations',
          'Review'
        ],
        miles: [
          '','','','','','','','','','','100','','','','','150','','','','','200'
        ],
        needs: [
          'Example Need 1',
          'Example Need 2',
          'Example Need 3',
          'Example Need 4',
          'Example Need 5'
        ],
        form: {
          company: {
            name: {
              name: 'Company Name',
              value: null,
            },
            email: {
              name: 'Email',
              value: null,
            },
            password: {
              name: 'Password',
              value: null,
            },
            confirm: {
              name: 'Confirm',
              value: null,
            },
            address: {
              name: 'Address',
              value: null,
            },
            firstName: {
              name: 'First Name',
              value: null,
            },
            lastName: {
              name: 'Last Name',
              value: null,
            },
            description: {
              name: 'Company Description',
              value: null,
            },
          },
        }
      }
    },
    methods: {
      nextPageIfNotLast() {
        if(this.tab == 2) return;
        this.tab += 1;
      },
      prevPageIfNotFirst() {
        if(this.tab == 0) return;
        this.tab -= 1;
      },
      submitRegistrationForm() {
        console.log('submit');
      },
    }
  }
</script>

<style scoped>

</style>
