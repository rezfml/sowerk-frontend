<template>
  <v-card class="white pt-0 my-12">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px; width: 30%; border-radius: 3px;" class="primary body-2 white--text">Edit Profile</v-card-title>
      <v-card-text class="pt-0">
        <v-form>
          <v-row>

            <v-col cols="12" class="pb-0 mt-6">
              <v-subheader class="px-0 headline font-weight-bold primary--text" light>Owner Information</v-subheader>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                light
                placeholder="John"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">First Name</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                light
                placeholder="Smith"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Last Name</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                light
                placeholder="CEO"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Title</p>
                </template>
              </v-text-field>
            </v-col>

          </v-row>

          <v-row>

            <v-col cols="12" class="pb-0 mt-6">
              <v-subheader class="px-0 headline font-weight-bold primary--text" light>Company Information</v-subheader>
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

            <v-col cols="12" md="6" class="pt-0">
              <v-text-field
                light
                placeholder="1971"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Year Founded</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pt-0">
              <v-text-field
                light
                placeholder="Retail"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Industry</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                light
                placeholder="bassproshops.com"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Website</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                light
                placeholder="johnsmith@example.com"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                light
                placeholder="(123) 456-7890"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" class="pt-0">
              <v-textarea
                light
                placeholder="Tell us and visitors about your company..."
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Description</p>
                </template>
              </v-textarea>
            </v-col>

          </v-row>

          <v-row>

            <v-col cols="12" class="pb-0 mt-6">
              <v-subheader class="px-0 headline font-weight-bold primary--text" light>Contact Information</v-subheader>
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

            <v-col cols="12" md="6" class="pt-0">
              <v-text-field
                light
                placeholder="johnsmith@example.com"
              >
                <template v-slot:label>
                  <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pt-0">
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
    </v-container>
  </v-card>
</template>

<script>
  import VImageInput from 'vuetify-image-input'

  export default {
    name: "ProfileFormCard",
    components: {
      VImageInput
    },
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
        color: null
      }
    }
  };
</script>

<style scoped>

</style>
