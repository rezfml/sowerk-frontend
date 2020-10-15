<template>
  <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
    <v-container class="pt-0" fluid>
      <v-card-title
        style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
        class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="4" class="py-0">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-text class="pt-0 pb-2">
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :items-per-page="10"
        >
          <template v-slot:item.address="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.address}} {{item.city}}, {{item.state}} {{item.zipcode}}</p>
            </v-row>
          </template>
          <template v-slot:item.addressCityState="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.city}}, {{item.state}}</p>
            </v-row>
          </template>
          <template v-slot:item.service="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.servicesOffered}}</p>
            </v-row>
          </template>
          <template v-slot:item.companyName="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.account_name}}</p>
            </v-row>
          </template>
          <template v-slot:item.name="{ item }">
            <v-row class="d-flex" cols="12" md="6">
              <v-img :src="item.imageUrl" :aspect-ratio="1" max-height="40" max-width="40" style="border-radius: 50%;" class="mr-4"/>
              <p>{{item.name}}</p>
            </v-row>
          </template>

          <template v-slot:item.full_name="{ item }">
            <v-icon color="primary">mdi-account</v-icon>
            {{ item.contact_first_name }}
            {{ item.contact_last_name }}
          </template>

          <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
            <v-btn block color="primary" :to="slug + item.application_id"
            >Review</v-btn
            >
          </template>
          <template
            v-slot:item.actions="{ item }"
            v-else-if="action === 'Apply'"
          >
            <v-btn
              block
              color="primary"
              :to="slug + item.location_id + '/application-form/' + item.id"
            >Apply</v-btn
            >
          </template>
          <template v-slot:item.actions="{ item }" v-else-if="action === 'View'">
            <v-btn block color="primary" :to="'/dashboard/vendors/' + item.id">View</v-btn>
          </template>
          <template v-slot:item.actions="{ item }" v-else>
            <nuxt-link :to="slug + item.id" append>
              <v-btn icon>
                <v-icon small class="mr-2">
                  mdi-pencil
                </v-icon>
              </v-btn>
            </nuxt-link>
            <!--            <v-icon small @click="deleteItem(item)">-->
            <!--              mdi-delete-->
            <!--            </v-icon>-->
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
        <v-btn
          color="primary"
          class="px-8"
          rounded
          outlined
          small
          style="font-size: 12px"
        >View All</v-btn
        >
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'HomeCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug'],
  data() {
    return {
      locations: null
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.red-gradient {
  background: rgb(166, 28, 0);
  background: linear-gradient(
      90deg,
      rgba(166, 28, 0, 1) 0%,
      rgba(116, 21, 2, 1) 100%
  );
}
</style>
