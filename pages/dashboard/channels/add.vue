<template>

  <!-- BREAKPOINT - EXTRA-LARGE - BREAK @ 1904+ pixels ------------------------------------------------------------>
  <div v-if="$vuetify.breakpoint.xl" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'" overflow-y-auto>
      <v-container style="max-width: 95%; height: 100%;" mt-12>
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="50vw"
        ></v-skeleton-loader>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
          v-if="!loadSubmit"
          style="z-index: 10; position: fixed; top: 25vh; left: 50vw;"
        ></v-progress-circular>
        <transition name="slide-fade">
          <v-card v-if="loading" style="width: 100%; height: 100%;" class="d-flex flex-column align-center">
            <v-card-title style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Add New Channel</v-card-title>

            <v-row style="width: 100%;" class="mt-12">
              <v-col cols="6" style="" >
                <v-text-field
                    placeholder=" "
                    hint="(The name you give will be visible to other businesses and vendors, try to be short and clear (i.e. SOWerk Cafe - Baxter VA)"
                    persistent-hint
                    v-model="form.name"
                    outlined
                    class="mb-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Name <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-text-field>

                <div class="v-input theme--light v-text-field v-text-field--is-booted" >
                    <div class="v-input__control">
                      <div class="v-input__slot" style="width: 100%; border: 1px solid #707070">
                        <label class="v-label v-label--active theme--light black--text font-weight-bold" style="left: 0px; right: auto; position: absolute; top: -5px;"><p class="grey--text text--darken-4 font-weight-bold">Channel Address <span style="color: #A61c00">*</span></p></label>
                        <!--                          <client-only>-->
                        <vue-google-autocomplete
                          id="company-address"
                          name="company_address"
                          classname="form-control"
                          v-on:placechanged="getAddressData"
                          placeholder=" "
                          style="width: 100%;"
                          validate-on-blur
                          v-model="fullAddress"
                        >
                        </vue-google-autocomplete>
                        <!--                          </client-only>-->
                      </div>
                      <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
                    </div>
                  </div>

                <client-only>
                  <GmapMap
                    id="locations-map"
                    style="width: 100%; height: 450px; "
                    ref="location-map"
                    :center="this.mapOptions.center"
                    :zoom="this.mapOptions.zoom"
                    :options="mapOptions"
                  >
                    <gmap-marker
                      :position="this.item"
                    />
                  </GmapMap>
                </client-only>

                <v-slider
                  class="mt-10"
                  label="Choose your Channel service radius"
                  thumb-label="always"
                  max="1005"
                  min="5"
                  step="10"
                  ticks="always"
                  v-model="form.radius"
                  v-if="company.company_type === 'false'"
                ></v-slider>

                <v-autocomplete
                    :items="vendorTypeOptions"
                    item-text="vendorType"
                    item-value="vendorType"
                    v-model="vendorType"
                    hint="(Select a type that describes what this channel provides)"
                    persistent-hint
                    :placeholder="vendorType"
                    multiple
                    outlined
                    class="mt-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Type <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-autocomplete>

                <v-textarea
                  placeholder=""
                  hint="(Does this channel have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)"
                  persistent-hint
                  v-model="form.description"
                  rows="8"
                  auto-grow
                  class="mt-8"
                  outlined
                  clearable
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Channel Description <span style="color: #A61c00">*</span></p>
                  </template>
                </v-textarea>
              </v-col>

              <v-col cols="6" class="d-flex flex-column align-center justify-center">
                <template style="" class="d-flex flex-column align-center">
                  <v-img
                    :src="company.imgUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-if="form.imageUrl === '' && !locationImageUrl"
                  ></v-img>
                  <v-img
                    :src="locationImageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-else-if="locationImageUrl"
                  ></v-img>
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
                  <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Logo or Image</p>
                  <p class="grey--text text--darken-1 font-weight-regular" style="width: 100%; text-align: center">(If you choose not to add a unique logo or image SOWerk will default to your account logo/image)</p>
                  <v-btn
                    @click="clickLocationImageUpload"
                    color="primary"
                    outlined
                    rounded
                    class="flex-grow-0 px-12 py-6"
                    style="width: 50%;"
                  >Edit</v-btn
                  >
                </template>

                <v-card style="width: 100%; background-color: lightgrey;" class="d-flex flex-column mt-4">
                  <h2 class="ml-4 my-4" style="width: 100%;">List Primary Category <span style="color: #A61c00">*</span></h2>
                  <v-autocomplete
                    v-model="services"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(Select the primary NAICS category that best defines this channel.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h2 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h2>
                  <v-autocomplete
                    v-model="servicesAdditional1"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h2 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h2>
                  <v-autocomplete
                    v-model="servicesAdditional2"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                </v-card>
              </v-col>
            </v-row>

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">List Channel Tags <span style="color: #A61c00">*</span></p>
            <v-card-subtitle class="mt-n4" style="width: 80%; text-align: center">Tags help others on SOWerk as well as your staff search for this channel. Type in a Tag and when complete press the Return key to add. </v-card-subtitle>
            <v-combobox
              v-model="locationTags"
              :items="sowerkTags"
              item-text="name"
              item-value="name"
              chips
              multiple
              hint="(Tags help you and others keyword search for this Channel)"
              outlined
              style="width: 90%;"
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

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Managers <span style="color: #A61c00">*</span></p>
            <v-autocomplete
              hint="(Choose from your list of users who will manage this channel)"
              persistent-hint
              :items="users"
              outlined
              style="width: 90%;"
            >
              <template slot="selection" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
            </v-autocomplete>

            <v-card-actions class="pb-6 px-8">
              <v-spacer></v-spacer>
              <v-btn right @click="submit" color="primary" large class="px-4">Register Channel</v-btn>
            </v-card-actions>
          </v-card>
        </transition>
      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - LARGE - BREAK @ 1904-1264 pixels (1264 sidebar vanishes) -------------------------------------->
  <div v-else-if="$vuetify.breakpoint.lg" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'" overflow-y-auto>
      <v-container style="max-width: 95%; height: 100%;" mt-12>
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="50vw"
        ></v-skeleton-loader>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
          v-if="!loadSubmit"
          style="z-index: 10; position: fixed; top: 25vh; left: 50vw;"
        ></v-progress-circular>
        <transition name="slide-fade">
          <v-card v-if="loading" style="width: 100%; height: 100%;" class="d-flex flex-column align-center">
            <v-card-title style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Add New Channel</v-card-title>

            <v-row style="width: 100%;" class="mt-12">
              <v-col cols="6">
                <v-text-field
                    placeholder=" "
                    hint="(The name you give will be visible to other businesses and vendors, try to be short and clear (i.e. SOWerk Cafe - Baxter VA)"
                    persistent-hint
                    v-model="form.name"
                    outlined
                    class="mb-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Name <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-text-field>

                <div class="v-input theme--light v-text-field v-text-field--is-booted" >
                    <div class="v-input__control">
                      <div class="v-input__slot" style="width: 100%; border: 1px solid #707070">
                        <label class="v-label v-label--active theme--light black--text font-weight-bold" style="left: 0px; right: auto; position: absolute; top: -5px;"><p class="grey--text text--darken-4 font-weight-bold">Channel Address <span style="color: #A61c00">*</span></p></label>
                        <!--                          <client-only>-->
                        <vue-google-autocomplete
                          id="company-address"
                          name="company_address"
                          classname="form-control"
                          v-on:placechanged="getAddressData"
                          placeholder=" "
                          style="width: 100%;"
                          validate-on-blur
                          v-model="fullAddress"
                        >
                        </vue-google-autocomplete>
                        <!--                          </client-only>-->
                      </div>
                      <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
                    </div>
                  </div>

                <client-only>
                  <GmapMap
                    id="locations-map"
                    style="width: 100%; height: 450px; "
                    ref="location-map"
                    :center="this.mapOptions.center"
                    :zoom="this.mapOptions.zoom"
                    :options="mapOptions"
                  >
                    <gmap-marker
                      :position="this.item"
                    />
                  </GmapMap>
                </client-only>

                <v-slider
                  class="mt-10"
                  label="Choose your Channel service radius"
                  thumb-label="always"
                  max="1005"
                  min="5"
                  step="10"
                  ticks="always"
                  v-model="form.radius"
                  v-if="company.company_type === 'false'"
                ></v-slider>

                <v-autocomplete
                    :items="vendorTypeOptions"
                    item-text="vendorType"
                    item-value="vendorType"
                    v-model="vendorType"
                    hint="(Select a type that describes what this channel provides)"
                    persistent-hint
                    :placeholder="vendorType"
                    multiple
                    outlined
                    class="mt-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Type <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-autocomplete>



                <v-textarea
                  placeholder=""
                  hint="(Does this channel have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)"
                  persistent-hint
                  v-model="form.description"
                  rows="4"
                  auto-grow
                  class="mt-8"
                  outlined
                  clearable
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Channel Description <span style="color: #A61c00">*</span></p>
                  </template>
                </v-textarea>
              </v-col>

              <v-col cols="6" class="d-flex flex-column align-center justify-center">
                <template style="" class="d-flex flex-column align-center">
                  <v-img
                    :src="company.imgUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-if="form.imageUrl === '' && !locationImageUrl"
                  ></v-img>
                  <v-img
                    :src="locationImageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-else-if="locationImageUrl"
                  ></v-img>
                  <v-img
                    :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-else
                  ></v-img>
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
                  <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Logo or Image</p>
                  <p class="grey--text text--darken-1 font-weight-regular" style="width: 100%; text-align: center">(If you choose not to add a unique logo or image SOWerk will default to your account logo/image)</p>
                  <v-btn
                    @click="clickLocationImageUpload"
                    color="primary"
                    outlined
                    rounded
                    class="flex-grow-0 px-12 py-6"
                    style="width: 50%;"
                  >Edit</v-btn
                  >
                </template>

                <v-card style="width: 100%; background-color: lightgrey;" class="d-flex flex-column mt-4">
                  <h2 class="ml-4 my-4" style="width: 100%;">List Primary Category <span style="color: #A61c00">*</span></h2>
                  <v-autocomplete
                    v-model="services"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(Select the primary NAICS category that best defines this channel.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h2 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h2>
                  <v-autocomplete
                    v-model="servicesAdditional1"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h2 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h2>
                  <v-autocomplete
                    v-model="servicesAdditional2"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                </v-card>
              </v-col>
            </v-row>

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">List Channel Tags <span style="color: #A61c00">*</span></p>
            <v-card-subtitle class="" style="width: 80%; text-align: center">Tags help others on SOWerk as well as your staff search for this channel. Type in a Tag and when complete press the Return key to add. </v-card-subtitle>
            <v-combobox
              v-model="locationTags"
              :items="sowerkTags"
              item-text="name"
              item-value="name"
              chips
              multiple
              hint="(Tags help you and others keyword search for this Channel)"
              outlined
              style="width: 90%;"
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

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Managers <span style="color: #A61c00">*</span></p>
            <v-autocomplete
              hint="(Choose from your list of users who will manage this channel)"
              persistent-hint
              :items="users"
              outlined
              style="width: 90%;"
            >
              <template slot="selection" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
            </v-autocomplete>

            <v-card-actions class="pb-6 px-8">
              <v-spacer></v-spacer>
              <v-btn right @click="submit" color="primary" large class="px-4">Register Channel</v-btn>
            </v-card-actions>
          </v-card>
        </transition>
      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - MEDIUM - BREAK @ 1264-960 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.md" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'" overflow-y-auto>
      <v-container style="max-width: 95%; height: 100%;" mt-12>
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="50vw"
        ></v-skeleton-loader>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
          v-if="!loadSubmit"
          style="z-index: 10; position: fixed; top: 25vh; left: 50vw;"
        ></v-progress-circular>
        <transition name="slide-fade">
          <v-card v-if="loading" style="width: 100%; height: 100%;" class="d-flex flex-column align-center">
            <v-card-title style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Add New Channel</v-card-title>

            <v-row style="width: 100%;" class="mt-12">
              <v-col cols="6">
                <v-text-field
                    placeholder=" "
                    hint="(The name you give will be visible to other businesses and vendors, try to be short and clear (i.e. SOWerk Cafe - Baxter VA)"
                    persistent-hint
                    v-model="form.name"
                    outlined
                    class="mb-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Name <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-text-field>

                <div class="v-input theme--light v-text-field v-text-field--is-booted" >
                    <div class="v-input__control">
                      <div class="v-input__slot" style="width: 100%; border: 1px solid #707070">
                        <label class="v-label v-label--active theme--light black--text font-weight-bold" style="left: 0px; right: auto; position: absolute; top: -5px;"><p class="grey--text text--darken-4 font-weight-bold">Channel Address <span style="color: #A61c00">*</span></p></label>
                        <!--                          <client-only>-->
                        <vue-google-autocomplete
                          id="company-address"
                          name="company_address"
                          classname="form-control"
                          v-on:placechanged="getAddressData"
                          placeholder=" "
                          style="width: 100%;"
                          validate-on-blur
                          v-model="fullAddress"
                        >
                        </vue-google-autocomplete>
                        <!--                          </client-only>-->
                      </div>
                      <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
                    </div>
                  </div>

                <client-only>
                  <GmapMap
                    id="locations-map"
                    style="width: 100%; height: 450px; "
                    ref="location-map"
                    :center="this.mapOptions.center"
                    :zoom="this.mapOptions.zoom"
                    :options="mapOptions"
                  >
                    <gmap-marker
                      :position="this.item"
                    />
                  </GmapMap>
                </client-only>

                <v-slider
                  class="mt-10"
                  label="Choose your Channel service radius"
                  thumb-label="always"
                  max="1005"
                  min="5"
                  step="10"
                  ticks="always"
                  v-model="form.radius"
                  v-if="company.company_type === 'false'"
                ></v-slider>

                <v-autocomplete
                    :items="vendorTypeOptions"
                    item-text="vendorType"
                    item-value="vendorType"
                    v-model="vendorType"
                    hint="(Select a type that describes what this channel provides)"
                    persistent-hint
                    :placeholder="vendorType"
                    multiple
                    outlined
                    class="mt-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Type <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-autocomplete>



                <v-textarea
                  placeholder=""
                  hint="(Does this channel have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)"
                  persistent-hint
                  v-model="form.description"
                  rows="4"
                  auto-grow
                  class="mt-8"
                  outlined
                  clearable
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Channel Description <span style="color: #A61c00">*</span></p>
                  </template>
                </v-textarea>
              </v-col>

              <v-col cols="6" class="d-flex flex-column align-center justify-center">
                <template style="" class="d-flex flex-column align-center">
                  <v-img
                    :src="company.imgUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-if="form.imageUrl === '' && !locationImageUrl"
                  ></v-img>
                  <v-img
                    :src="locationImageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-else-if="locationImageUrl"
                  ></v-img>
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
                  <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Logo or Image</p>
                  <p class="grey--text text--darken-1 font-weight-regular" style="width: 100%; text-align: center">(If you choose not to add a unique logo or image SOWerk will default to your account logo/image)</p>
                  <v-btn
                    @click="clickLocationImageUpload"
                    color="primary"
                    outlined
                    rounded
                    class="flex-grow-0 px-12 py-6"
                    style="width: 50%;"
                  >Edit</v-btn
                  >
                </template>

                <v-card style="width: 100%; background-color: lightgrey;" class="d-flex flex-column mt-4">
                  <h2 class="ml-4 my-4" style="width: 100%;">List Primary Category <span style="color: #A61c00">*</span></h2>
                  <v-autocomplete
                    v-model="services"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(Select the primary NAICS category that best defines this channel.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h2 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h2>
                  <v-autocomplete
                    v-model="servicesAdditional1"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h2 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h2>
                  <v-autocomplete
                    v-model="servicesAdditional2"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                </v-card>
              </v-col>
            </v-row>

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">List Channel Tags <span style="color: #A61c00">*</span></p>
            <v-card-subtitle class="" style="width: 80%; text-align: center">Tags help others on SOWerk as well as your staff search for this channel. Type in a Tag and when complete press the Return key to add. </v-card-subtitle>
            <v-combobox
              v-model="locationTags"
              :items="sowerkTags"
              item-text="name"
              item-value="name"
              chips
              multiple
              hint="(Tags help you and others keyword search for this Channel)"
              outlined
              style="width: 90%;"
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

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Managers <span style="color: #A61c00">*</span></p>
            <v-autocomplete
              hint="(Choose from your list of users who will manage this channel)"
              persistent-hint
              :items="users"
              outlined
              style="width: 90%;"
            >
              <template slot="selection" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
            </v-autocomplete>

            <v-card-actions class="pb-6 px-8">
              <v-spacer></v-spacer>
              <v-btn right @click="submit" color="primary" large class="px-4">Register Channel</v-btn>
            </v-card-actions>
          </v-card>
        </transition>
      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - SMALL - BREAK @ 960-600 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.sm" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'" overflow-y-auto>
      <v-container style="max-width: 95%; height: 100%;" mt-12>
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="50vw"
        ></v-skeleton-loader>

        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
          v-if="!loadSubmit"
          style="z-index: 10; position: fixed; top: 25vh; left: 50vw;"
        ></v-progress-circular>

        <transition name="slide-fade">
          <v-card v-if="loading" style="width: 100%; height: 100%;" class="d-flex flex-column align-center">
            <v-card-title style="position: absolute; top: -30px; left: 25px; width: 45%; border-radius: 3px; font-size: 1.2rem;" class="primary white--text font-weight-regular red-gradient">Add New Channel</v-card-title>

            <v-row style="width: 100%;" class="mt-12">


              <v-col cols="12" class="d-flex flex-column align-center justify-center">
                <template style="" class="d-flex flex-column align-center">
                  <v-img
                    :src="company.imgUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-if="form.imageUrl === '' && !locationImageUrl"
                  ></v-img>
                  <v-img
                    :src="locationImageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-else-if="locationImageUrl"
                  ></v-img>
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
                  <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Logo or Image</p>
                  <p class="grey--text text--darken-1 font-weight-regular" style="width: 100%; text-align: center">(If you choose not to add a unique logo or image SOWerk will default to your account logo/image)</p>
                  <v-btn
                    @click="clickLocationImageUpload"
                    color="primary"
                    outlined
                    rounded
                    class="flex-grow-0 px-12 py-6"
                    style="width: 50%;"
                  >Edit</v-btn
                  >
                </template>

                <v-card style="width: 100%; background-color: lightgrey;" class="d-flex flex-column mt-4">
                  <h3 class="ml-4 my-4" style="width: 100%;">List Primary Category <span style="color: #A61c00">*</span></h3>
                  <v-autocomplete
                    v-model="services"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(Select the primary NAICS category that best defines this channel.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h3 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h3>
                  <v-autocomplete
                    v-model="servicesAdditional1"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h3 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h3>
                  <v-autocomplete
                    v-model="servicesAdditional2"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    placeholder=" "
                    hint="(The name you give will be visible to other businesses and vendors, try to be short and clear (i.e. SOWerk Cafe - Baxter VA)"
                    persistent-hint
                    v-model="form.name"
                    outlined
                    class="mb-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Name <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-text-field>

                <div class="v-input theme--light v-text-field v-text-field--is-booted" >
                    <div class="v-input__control">
                      <div class="v-input__slot" style="width: 100%; border: 1px solid #707070">
                        <label class="v-label v-label--active theme--light black--text font-weight-bold" style="left: 0px; right: auto; position: absolute; top: -5px;"><p class="grey--text text--darken-4 font-weight-bold">Channel Address <span style="color: #A61c00">*</span></p></label>
                        <!--                          <client-only>-->
                        <vue-google-autocomplete
                          id="company-address"
                          name="company_address"
                          classname="form-control"
                          v-on:placechanged="getAddressData"
                          placeholder=" "
                          style="width: 100%;"
                          validate-on-blur
                          v-model="fullAddress"
                        >
                        </vue-google-autocomplete>
                        <!--                          </client-only>-->
                      </div>
                      <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
                    </div>
                  </div>

                <client-only>
                  <GmapMap
                    id="locations-map"
                    style="width: 100%; height: 450px; "
                    ref="location-map"
                    :center="this.mapOptions.center"
                    :zoom="this.mapOptions.zoom"
                    :options="mapOptions"
                  >
                    <gmap-marker
                      :position="this.item"
                    />
                  </GmapMap>
                </client-only>

                <v-slider
                  class="mt-10"
                  label="Choose your Channel service radius"
                  thumb-label="always"
                  max="1005"
                  min="5"
                  step="10"
                  ticks="always"
                  v-model="form.radius"
                  v-if="company.company_type === 'false'"
                ></v-slider>

                <v-autocomplete
                    :items="vendorTypeOptions"
                    item-text="vendorType"
                    item-value="vendorType"
                    v-model="vendorType"
                    hint="(Select a type that describes what this channel provides)"
                    persistent-hint
                    :placeholder="vendorType"
                    multiple
                    outlined
                    class="mt-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Type <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-autocomplete>



                <v-textarea
                  placeholder=""
                  hint="(Does this channel have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)"
                  persistent-hint
                  v-model="form.description"
                  rows="4"
                  auto-grow
                  class="mt-8"
                  outlined
                  clearable
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Channel Description <span style="color: #A61c00">*</span></p>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">List Channel Tags <span style="color: #A61c00">*</span></p>
            <v-card-subtitle class="" style="width: 80%; text-align: center">Tags help others on SOWerk as well as your staff search for this channel. Type in a Tag and when complete press the Return key to add. </v-card-subtitle>
            <v-combobox
              v-model="locationTags"
              :items="sowerkTags"
              item-text="name"
              item-value="name"
              chips
              multiple
              hint="(Tags help you and others keyword search for this Channel)"
              outlined
              style="width: 90%;"
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

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Managers <span style="color: #A61c00">*</span></p>
            <v-autocomplete
              hint="(Choose from your list of users who will manage this channel)"
              persistent-hint
              :items="users"
              outlined
              style="width: 90%;"
            >
              <template slot="selection" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
            </v-autocomplete>

            <v-card-actions class="pb-6 px-8">
              <v-spacer></v-spacer>
              <v-btn right @click="submit" color="primary" large class="px-4">Register Channel</v-btn>
            </v-card-actions>
          </v-card>
        </transition>
      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - EXTRA-SMALL - BREAK @ 600- pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.xs" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'" overflow-y-auto>
      <v-container style="max-width: 95%; height: 100%;" mt-12>
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="50vw"
        ></v-skeleton-loader>

        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
          v-if="!loadSubmit"
          style="z-index: 10; position: fixed; top: 25vh; left: 50vw;"
        ></v-progress-circular>

        <transition name="slide-fade">
          <v-card v-if="loading" style="width: 100%; height: 100%;" class="d-flex flex-column align-center">
            <v-card-title style="position: absolute; top: -30px; left: 25px; width: 65%; border-radius: 3px; font-size: 1.1rem;" class="primary white--text font-weight-regular red-gradient">Add New Channel</v-card-title>

            <v-row style="width: 100%;" class="mt-12">

              <v-col cols="12" class="d-flex flex-column align-center justify-center">
                <template style="" class="d-flex flex-column align-center">
                  <v-img
                    :src="company.imgUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-if="form.imageUrl === '' && !locationImageUrl"
                  ></v-img>
                  <v-img
                    :src="locationImageUrl"
                    :aspect-ratio="1"
                    class="my-8 rounded-circle flex-grow-1"
                    style="width: 100%; max-width: 300px; max-height: 300px;"
                    v-else-if="locationImageUrl"
                  ></v-img>
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
                  <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center">Channel Logo or Image</p>
                  <p class="grey--text text--darken-1 font-weight-regular" style="width: 100%; text-align: center;font-size:.8rem">(If you choose not to add a unique logo or image SOWerk will default to your account logo/image)</p>
                  <v-btn
                    @click="clickLocationImageUpload"
                    color="primary"
                    outlined
                    rounded
                    class="flex-grow-0 px-12 py-6"
                    style="width: 50%;"
                  >Edit</v-btn
                  >
                </template>

                <v-card style="width: 100%; background-color: lightgrey;" class="d-flex flex-column mt-4">
                  <h4 class="ml-4 my-4" style="width: 100%;">List Primary Category <span style="color: #A61c00">*</span></h4>
                  <v-autocomplete
                    v-model="services"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(Select the primary NAICS category that best defines this channel.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;font-size:.8rem"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h4 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h4>
                  <v-autocomplete
                    v-model="servicesAdditional1"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;font-size:.8rem"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                  <h4 class="ml-4 my-4" style="width: 100%;">Additional Channel Category</h4>
                  <v-autocomplete
                    v-model="servicesAdditional2"
                    :items="naicsList"
                    item-text="name"
                    item-value="name"
                    solo
                    clearable
                    hint="(This is generated from the NAICS directory.)"
                    persistent-hint
                    outlined
                    color=""
                    style="width: 80%;font-size:.8rem"
                    class="ml-4"
                  >
                    <template slot="selection" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                    <template slot="item" slot-scope="data">
                      <p style="color: #151515">{{ data.item.name }}</p>
                    </template>
                  </v-autocomplete>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    placeholder=" "
                    hint="(The name you give will be visible to other businesses and vendors, try to be short and clear (i.e. SOWerk Cafe - Baxter VA)"
                    persistent-hint
                    v-model="form.name"
                    outlined
                    class="mb-8"
                    style="font-size:.8rem"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Name <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-text-field>

                <div class="v-input theme--light v-text-field v-text-field--is-booted" >
                    <div class="v-input__control">
                      <div class="v-input__slot" style="width: 100%; border: 1px solid #707070">
                        <label class="v-label v-label--active theme--light black--text font-weight-bold" style="left: 0px; right: auto; position: absolute; top: -5px;"><p class="grey--text text--darken-4 font-weight-bold">Channel Address <span style="color: #A61c00">*</span></p></label>
                        <!--                          <client-only>-->
                        <vue-google-autocomplete
                          id="company-address"
                          name="company_address"
                          classname="form-control"
                          v-on:placechanged="getAddressData"
                          placeholder=" "
                          style="width: 100%;font-size:.8rem"
                          validate-on-blur
                          v-model="fullAddress"
                        >
                        </vue-google-autocomplete>
                        <!--                          </client-only>-->
                      </div>
                      <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
                    </div>
                  </div>

                <client-only>
                  <GmapMap
                    id="locations-map"
                    style="width: 100%; height: 450px; "
                    ref="location-map"
                    :center="this.mapOptions.center"
                    :zoom="this.mapOptions.zoom"
                    :options="mapOptions"
                  >
                    <gmap-marker
                      :position="this.item"
                    />
                  </GmapMap>
                </client-only>

                <v-slider
                  class="mt-10"
                  label="Choose your Channel service radius"
                  thumb-label="always"
                  max="1005"
                  min="5"
                  step="10"
                  ticks="always"
                  v-model="form.radius"
                  v-if="company.company_type === 'false'"
                ></v-slider>

                <v-autocomplete
                    :items="vendorTypeOptions"
                    item-text="vendorType"
                    item-value="vendorType"
                    v-model="vendorType"
                    hint="(Select a type that describes what this channel provides)"
                    persistent-hint
                    :placeholder="vendorType"
                    multiple
                    outlined
                    class="mt-8"
                  >
                    <template v-slot:label>
                      <p class="grey--text text--darken-4 font-weight-bold">Channel Type <span style="color: #A61c00">*</span></p>
                    </template>
                  </v-autocomplete>



                <v-textarea
                  placeholder=""
                  hint="(Does this channel have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)"
                  persistent-hint
                  v-model="form.description"
                  rows="4"
                  auto-grow
                  class="mt-8"
                  outlined
                  clearable
                  style="font-size:.8rem"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Channel Description <span style="color: #A61c00">*</span></p>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center;font-size:.8rem">List Channel Tags <span style="color: #A61c00">*</span></p>
            <v-card-subtitle class="" style="width: 80%; text-align: center">Tags help others on SOWerk as well as your staff search for this channel. Type in a Tag and when complete press the Return key to add. </v-card-subtitle>
            <v-combobox
              v-model="locationTags"
              :items="sowerkTags"
              item-text="name"
              item-value="name"
              chips
              multiple
              hint="(Tags help you and others keyword search for this Channel)"
              outlined
              style="width: 90%;font-size:.7rem"
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

            <p class="grey--text text--darken-4 font-weight-bold" style="width: 100%; text-align: center;font-size:.8rem">Channel Managers <span style="color: #A61c00">*</span></p>
            <v-autocomplete
              hint="(Choose from your list of users who will manage this channel)"
              persistent-hint
              :items="users"
              outlined
              style="width: 90%;font-size:.7rem"
            >
              <template slot="selection" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
              <template slot="item" slot-scope="data">
                <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
              </template>
            </v-autocomplete>

            <v-card-actions class="pb-6 px-8">
              <v-spacer></v-spacer>
              <v-btn right @click="submit" color="primary" large class="px-4">Register Channel</v-btn>
            </v-card-actions>
          </v-card>
        </transition>
      </v-container>
    </v-app>
  </div>

</template>

<script>
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'
  import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'
  import * as GmapVue from 'gmap-vue'

  export default {
    name: 'add',
    layout: 'app',
    components: {
      GmapCluster,
      GmapVue
    },
    data() {
      return {
        managerIsUser: false,
        form: {
          name: null,
          address: null,
          city: null,
          state: null,
          zipcode: null,
          contact_first_name: null,
          contact_last_name: null,
          phone: null,
          email: null,
          latitude: null,
          longitude: null,
          radius: 0,
          year_founded: 0,
          adminLevel: false,
          imageUrl: ''
        },
        locationImageFile: null,
        locationImageUrl: null,
        item: {
          lat: null,
          lng: null,
          zoom: 10,
        },
        mapOptions: {
          center: { lat: 38, lng: -95.5 },
          zoom: 4,
          fullscreenControl: false,
          mapTypeControl: false,
          rotateControl: false,
          scaleControl: false,
          streetViewControl: false,
          zoomControl: false
        },
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
        fullAddress: null,
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'
          },
          { text: 'Facility', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Primary Contact', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
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
        loading: false,
        users: [],
        company: {},
        loadSubmit: true,
        locationTags: [],
        sowerkTags: [],
        search: null,
        services: '',
        servicesAdditional1: '',
        servicesAdditional2: '',
        naicsList: [],
        vendorType: [],
        originalVendorType: [],
        vendorTypeOptions: [
          'Supplier',
          'Servicer'
        ]
      }
    },
    async mounted() {
      vueGoogleMapsInit();
      console.log(this.currentUser, 'hello!!!!!!!');
      await this.getCompany(this.currentUser.companies_id);
      await this.getUsers(this.currentUser.companies_id);
      await this.getSowerkTags();
        //this.getServices(this.location.id);
      await this.getNaicsList();
      this.loading = true;
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async uploadLocationImage() {
        const formData = new FormData();
        formData.append('file', this.locationImageFile);
        await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
          .then(response => {
            console.log('success in uploading company image', response)
            this.form.imageUrl = response.data.data.Location;
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
      clickLocationImageUpload() {
        console.log(this);
        // let imageInput = this.$refs.companyImage;
        // console.log(imageInput);
        // imageInput.$el.click();
        document.getElementById('locationImage').click();
      },
      async getNaicsList() {
        await this.$http.get('https://www.sowerkbackend.com/api/naicslist')
          .then(response => {
            console.log('naicslist', response)
            this.naicsList = response.data
          })
          .catch(err => {
            console.log(err, 'err on getting naicslist')
          })
      },
      async getServices(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/services/byLocationId/' + id)
          .then(response => {
            console.log('services', response)
            this.services = response.data;
            this.originalServices = response.data;
          })
          .catch(err => {
            console.log(err, 'err on getting services for locations')
          })
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response, 'company response')
            this.company = response.data;
            this.form.description = response.data.description
          })
          .catch(err => {
            console.log(err, 'err in getting company')
          })
      },
      async getUsers(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/auth/users/company/' + id)
          .then(response => {
            console.log(response.data, 'USERS!')
            this.users = response.data.user
          })
          .catch(err => {
            console.log(err, 'err in getting users from company')
          })
      },
      async getUserValue(user) {
        console.log(user, 'USER VALUE!')
        this.form.contact_first_name = user.first_name;
        this.form.contact_last_name = user.last_name;
        this.form.phone = user.phone;
        this.form.email = user.email;
        if(user.is_superuser) {
          this.form.adminLevel = this.adminOptions[0].value
        } else {
          this.form.adminLevel = this.adminOptions[1].value
        }
        console.log(this.form, 'FORM VALUE!');
      },
      setManagerToUser() {
        console.log(this.managerIsUser)
        if(this.managerIsUser) {
          this.form.contact_first_name = this.currentUser.first_name;
          this.form.contact_last_name  = this.currentUser.last_name;
          this.form.phone              = this.currentUser.phone;
          this.form.email              = this.currentUser.email;
          if(this.currentUser.is_superuser === true) {
            this.form.adminLevel = this.adminOptions[0].value
          } else {
            this.form.adminLevel = this.adminOptions[1].value
          }
        }
      },
      getAddressData(addressData) {
        console.log(addressData);
        this.form.address = addressData.street_number + ' ' + addressData.route;
        this.form.city = addressData.locality;
        this.form.state = addressData.administrative_area_level_1;
        this.form.zipcode = Number(addressData.postal_code);
        this.form.latitude = addressData.latitude;
        this.form.longitude = addressData.longitude;
        this.item.lat = addressData.latitude;
        this.item.lng = addressData.longitude;
        this.mapOptions.zoom = 10;
        this.mapOptions.center.lat = addressData.latitude
        this.mapOptions.center.lng = addressData.longitude;
        this.formatFullAddress();
      },
      // This method formats the address components into a readable string for display purposes
      formatFullAddress() {
        this.fullAddress = this.form.address + ', ' + this.form.city + ', ' + this.form.state + ' ' + this.form.zipcode;
      },
      async submit() {
        this.loadSubmit = false;
        await this.uploadLocationImage();
        console.log(this.currentUser);
        console.log(this.form, 'this.form');
        this.form.year_founded = this.company.year_founded;
        await this.$http.post('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.currentUser.companies_id, this.form)
          .then(response => {
            console.log(response, 'success in submitting new location')
            console.log(this.services, 'this.services')
            // this.services = {
            //   name: this.services
            // }
            if(this.services !== '') {
              this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + response.data.location.id, {
                name: this.services
              })
                .then(responseVal => {
                  console.log(responseVal, 'success in posting service')
                  this.$http.get('https://www.sowerkbackend.com/api/naicslist/name/' + this.services)
                    .then(responseNaicslist => {
                      console.log(responseNaicslist, 'hello')
                      this.$http.put('https://www.sowerkbackend.com/api/naicslist/' + responseNaicslist.data[0].id, {
                        timesUsed: responseNaicslist.data[0].timesUsed + 1
                      })
                        .then(responseEditNaics => {
                          console.log('success in times used edit')
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    })
                    .catch(err => {
                      console.log(err)
                    })
                })
                .catch(err => {
                  console.log(err, 'err in posting service')
                })
            }
            if(this.servicesAdditional1 !== '') {
              this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + response.data.location.id, {
                name: this.servicesAdditional1
              })
                .then(responseVal => {
                  console.log(responseVal, 'success in posting service')
                  this.$http.get('https://www.sowerkbackend.com/api/naicslist/name/' + this.servicesAdditional1)
                    .then(responseNaicslist => {
                      console.log(responseNaicslist, 'hello')
                      this.$http.put('https://www.sowerkbackend.com/api/naicslist/' + responseNaicslist.data[0].id, {
                        timesUsed: responseNaicslist.data[0].timesUsed + 1
                      })
                        .then(responseEditNaics => {
                          console.log('success in times used edit')
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    })
                    .catch(err => {
                      console.log(err)
                    })
                })
                .catch(err => {
                  console.log(err, 'err in posting service')
                })
            }
            if(this.servicesAdditional2 !== '') {
              this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + response.data.location.id, {
                name: this.servicesAdditional2
              })
                .then(responseVal => {
                  console.log(responseVal, 'success in posting service')
                  this.$http.get('https://www.sowerkbackend.com/api/naicslist/name/' + this.servicesAdditional2)
                    .then(responseNaicslist => {
                      console.log(responseNaicslist, 'hello')
                      this.$http.put('https://www.sowerkbackend.com/api/naicslist/' + responseNaicslist.data[0].id, {
                        timesUsed: responseNaicslist.data[0].timesUsed + 1
                      })
                        .then(responseEditNaics => {
                          console.log('success in times used edit')
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    })
                    .catch(err => {
                      console.log(err)
                    })
                })
                .catch(err => {
                  console.log(err, 'err in posting service')
                })
            }
            if(this.locationTags.length > 0) {
              for(let i=0; i<this.locationTags.length; i++) {
                if(typeof this.locationTags[i] === 'object') {
                  this.$http.post('https://www.sowerkbackend.com/api/locationtags/byLocationId/' + response.data.location.id, {
                    name: this.locationTags[i].name
                  })
                    .then(responseVal => {
                      console.log(responseVal, 'success in posting location tags')
                      this.$http.get('https://www.sowerkbackend.com/api/sowerktags/name/' + this.locationTags[i].name)
                        .then(responseNaicslist => {
                          console.log(responseNaicslist, 'hello')
                          this.$http.put('https://www.sowerkbackend.com/api/sowerktags/' + responseNaicslist.data[0].id, {
                            timesUsed: responseNaicslist.data[0].timesUsed + 1
                          })
                            .then(responseEditNaics => {
                              console.log('success in times used edit')
                            })
                            .catch(err => {
                              console.log(err)
                            })
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    })
                    .catch(err => {
                      console.log(err, 'err in posting locationtags')
                    })
                } else {
                  this.$http.post('https://www.sowerkbackend.com/api/locationtags/byLocationId/' + response.data.location.id, {
                    name: this.locationTags[i]
                  })
                    .then(responseVal => {
                      console.log(responseVal, 'success in posting location tags')
                      this.$http.get('https://www.sowerkbackend.com/api/sowerktags/name/' + this.locationTags[i])
                        .then(responseNaicslist => {
                          console.log(responseNaicslist, 'hello')
                          this.$http.put('https://www.sowerkbackend.com/api/sowerktags/' + responseNaicslist.data[0].id, {
                            timesUsed: responseNaicslist.data[0].timesUsed + 1
                          })
                            .then(responseEditNaics => {
                              console.log('success in times used edit')
                            })
                            .catch(err => {
                              console.log(err)
                            })
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    })
                    .catch(err => {
                      console.log(err, 'err in posting locationtags')
                    })
                }
              }
            }
            if(this.vendorType.length > 0) {
              console.log(this.vendorType, 'this.vendorType');
              for(let i=0; i<this.vendorType.length; i++) {
                if(typeof this.vendorType[i] === 'object') {
                  this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + response.data.location.id, {
                    vendorType: this.vendorType[i].name
                  })
                    .then(responseVal => {
                      console.log(responseVal, 'success in posting location tags')
                    })
                    .catch(err => {
                      console.log(err, 'err in posting locationtags')
                    })
                } else {
                    this.$http.post('https://www.sowerkbackend.com/api/vendortypes/byLocationId/' + response.data.location.id, {
                      vendorType: this.vendorType[i]
                    })
                      .then(responseVal => {
                        console.log(responseVal, 'success in posting vendor tag')
                      })
                      .catch(err => {
                        console.log(err, 'err in posting vendor tag')
                      })
                  }
              }
            }
            this.loadSubmit = true;
            setTimeout(() => {
              this.$router.push('../../../dashboard/channels')
            }, 2000)
          })
          .catch(e => e);
      },
      getChannel() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.setChannel, this.locationError)
        else alert('Geolocation is not supported by this browser.')
      },
      setChannel(pos) {
        this.mapOptions = { ...this.mapOptions, center: { lat: pos.coords.latitude, lng: pos.coords.longitude } }
        this.center = { lat: pos.coords.latitude, lng: pos.coords.longitude }
        this.mapOptions.zoom = 11
        this.item.lat = pos.coords.latitude
        this.item.lng = pos.coords.longitude
      },
      locationError(error) {
        if (error.PERMISSION_DENIED) alert('User denied the request for Geolocation.')
        else if (error.POSITION_UNAVAILABLE) alert('Channel information is unavailable.')
        else if (error.TIMEOUT) alert('The request to get user location timed out.')
        else alert('An unknown error occurred.')
      },
      useWrittenChannel() {
        this.item.lat = this.form.latitude
        this.item.lng = this.form.longitude
        this.mapOptions = { ...this.mapOptions, center: { lat: this.form.latitude, lng: this.form.longitude }, radius: this.form.radius }
        this.center = { lat: this.form.latitude, lng: this.form.longitude}
        this.mapOptions.zoom = 13
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
        console.log(this.locationTags, 'before removal', item)
        this.locationTags = this.locationTags.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.locationTags, 'after removal')
      },
      async removeService(item) {
        console.log(this.services, 'before removal', item)
        this.services = this.services.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.services, 'after removal')
      },
    }
  }
</script>

<style scoped>
  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
    @media (max-width:1264px ){
    #app{
      margin-top:-22px;
    }
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
