<template>
  <v-card class="white pt-0 my-12">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px; width: 30%; border-radius: 3px;" class="primary body-2">Company Profile</v-card-title>
      <v-card-text class="pt-0">
        <v-form>
          <v-row>

            <v-col cols="12" class="pb-0 mt-6">
              <v-subheader class="px-0 title" light>Owner Information</v-subheader>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                label="First Name"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                label="Last Name"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                label="Title (CEO, Owner, etc)"
                light
              ></v-text-field>
            </v-col>

          </v-row>

          <v-row>

            <v-col cols="12" class="pb-0 mt-6">
              <v-subheader class="px-0 title" light>Company Information</v-subheader>
            </v-col>

            <v-col cols="12" class="pt-0">
              <v-text-field
                label="Headquarters Address"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pt-0">
              <v-text-field
                label="Year Founded"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pt-0">
              <v-text-field
                label="Industry"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                label="Website"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                label="Email"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="pt-0">
              <v-text-field
                label="Phone"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pt-0">
              <v-textarea
                label="Description"
                light
              ></v-textarea>
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
  export default {
    name: "ProfileFormCard",
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
      }
    }
  };
</script>

<style scoped>

</style>
