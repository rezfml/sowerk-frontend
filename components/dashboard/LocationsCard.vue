<template>
    <v-card class="white pt-0 my-12">
      <v-container>
        <v-card-title style="position: absolute; top: -25px; left: 25px; width: 30%; border-radius: 3px;" class="primary body-2">Locations</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0">
            <v-spacer></v-spacer>
            <v-col cols="4" class="py-0">
              <v-text-field
                label="Search"
                light
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-card-text class="pt-0">
          <v-simple-table light>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center primary--text">ID</th>
                <th class="text-center primary--text">Location Name</th>
                <th class="text-center primary--text">Address</th>
                <th class="text-center primary--text">Contact Name</th>
                <th class="text-center primary--text">Phone</th>
                <th class="text-center primary--text">Email</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in 3" :key="item">
                <th class="text-center font-weight-lighter">{{ item }}</th>
                <th class="text-center font-weight-lighter">Lorem ipsum</th>
                <th class="text-center font-weight-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</th>
                <th class="text-center font-weight-lighter">Lorem ipsum</th>
                <th class="text-center font-weight-lighter">1234567890</th>
                <th class="text-center font-weight-lighter">lorem@ipsum.com</th>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4">
          <v-btn color="primary" class="px-8">View All</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
</template>

<script>
  export default {
    name: "LocationsCard"
  };
</script>

<style scoped>

</style>
