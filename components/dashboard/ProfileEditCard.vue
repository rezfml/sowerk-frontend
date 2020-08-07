<template>
  <v-card class="white pt-0 mt-9">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px;border-radius: 3px;" class="primary body-2" ><v-icon>mdi-account</v-icon></v-card-title>
      <template v-if="location">
        <v-card-text class="py-0">
          <v-form>
            <v-row>

              <v-col cols="12" class="pb-0 mt-3">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Facility</v-subheader>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="Bass Pro Shops"
                  v-model="location.companyName"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Facility Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"
                  v-model="location.address"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Facility Address</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder="1971"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Facility Opened</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="9" class="py-0">
                <v-text-field
                  light
                  placeholder="BPS Direct, LLC is an American privately held…"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Facility Description</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>

              <v-col cols="12" class="py-0 mt-0">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Facility Contact</v-subheader>
              </v-col>

              <v-col cols="12" md="6" class="pt-0">
                <v-text-field
                  label="First Name"
                  light
                  placeholder="John"
                  v-model="location.name"
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
                  v-model="location.name"
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
                  v-model="location.email"
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
                  v-model="location.phone"
                ><template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                </template></v-text-field>
              </v-col>

            </v-row>

          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4">
          <v-btn color="primary" class="px-8">Update Profile</v-btn>
        </v-card-actions>
      </template>
      <template v-else>
        <v-card-text class="py-0">
          <v-form>
            <v-row>

              <v-col cols="12" class="pb-0 mt-3">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Profile</v-subheader>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="Bass Pro Shops"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Name</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" class="pt-0">
                <v-text-field
                  light
                  placeholder="1935 S Campbell Ave, Springfield, MO 65807"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company HQ Address</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  light
                  placeholder="1971"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Founded</p>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="9" class="py-0">
                <v-text-field
                  light
                  placeholder="BPS Direct, LLC is an American privately held…"
                >
                  <template v-slot:label>
                    <p class="grey--text text--darken-4 font-weight-bold">Company Description</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>

              <v-col cols="12" class="py-0 mt-0">
                <v-subheader class="px-0 headline font-weight-bold primary--text" light>Profile Contact</v-subheader>
              </v-col>

              <v-col cols="12" md="6" class="pt-0">
                <v-text-field
                  label="First Name"
                  light
                  placeholder="John"
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
                ><template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                </template></v-text-field>
              </v-col>

            </v-row>

          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4">
          <v-btn color="primary" class="px-8">Update Profile</v-btn>
        </v-card-actions>
      </template>
    </v-container>
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
      'location'
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
        image: null
      }
    }
  };
</script>

<style scoped>

</style>
