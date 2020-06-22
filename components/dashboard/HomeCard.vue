<template>
  <v-card class="white pt-0 my-12">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px; width: 30%; border-radius: 3px;" class="primary body-2">
        {{ title }}</v-card-title>
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
              <template v-if="tableProperties">
                <th class="primary--text" v-for="(property, i) in tableProperties" :key="i">{{ property }}</th>
              </template>
              <template v-else>
                <th class="primary--text">ID</th>
                <th class="primary--text">Location Name</th>
                <th class="primary--text">Address</th>
                <th class="primary--text">Contact Name</th>
                <th class="primary--text">Phone</th>
                <th class="primary--text">Email</th>
              </template>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in items" :key="item.id">
              <th class="font-weight-lighter" v-for="(value, i) in item" :key="i" v-if="typeof value !== 'object'">{{ value }}</th>
              <th class="font-weight-lighter"  v-else>{{ value.join(', ') }}</th>
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
    name: 'HomeCard',
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      },
      tableProperties: {
        type: Array,
        required: false
      }
    }
  }
</script>

<style scoped>

</style>
