<template>
  <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
    <v-container class="pt-0" fluid>
      <v-card-title v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm "
        style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
        class="primary white--text font-weight-regular red-gradient TitleCard"
        >{{ title }}</v-card-title>
        <v-card-title v-else
        style="position: absolute; top: -30px; left: 25px; width: 70%; border-radius: 3px; font-size: 14px;"
        class="primary white--text font-weight-regular red-gradient TitleCard"
        >{{ title }}</v-card-title>
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="4" class="py-0">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>

        <v-row v-else class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="12" class="pt-12">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>

    <v-container  v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.md">
      <v-card-text class="pt-0 pb-2 " >
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :items-per-page="10"
          :hide-default-footer="true"
        >
          <template v-slot:item.address="{item}">
            <v-row class="d-flex" cols="12" lg="6">
              <p>{{item.address}} {{item.city}}, {{item.state}} {{item.zipcode}}</p>
              <v-progress-circular
                v-if="loading === false"
                indeterminate
                color="primary"
                :size="30"
              ></v-progress-circular>
            </v-row>
          </template>
          <template v-slot:item.name="{ item }">
            <v-row class="d-flex" cols="12" lg="6" >
              <v-img :src="item.imageUrl" :aspect-ratio="1" max-height="50" max-width="50" style="border-radius: 50%;" class="mr-4 my-1"/>
              <p>{{item.name}}</p>
            </v-row>
          </template>
          <template v-slot:item.full_name="{ item }"
            ><v-icon color="primary">mdi-account</v-icon>
            {{ item.contact_first_name }}
            {{ item.contact_last_name }}</template
          >
          <template v-slot:item.approved_name="{ item }">
            <v-icon color="primary">mdi-account</v-icon>
            {{ item.contact_first_name }}
            {{ item.contact_last_name }}
          </template>

          <template v-slot:item.phone="{ item }">{{ item.phone }}</template>

          <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
            <v-btn block color="primary" :to="slug + item.application_id">Review</v-btn>
          </template>

          <template
            v-slot:item.actions="{ item }"
            v-else-if="action === 'Apply'"
          >
            <v-btn block color="blue" :to="slug + item.location_id">View</v-btn>
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
              <v-btn class="my-1" style="width: 90%;" color="green" outlined>
                View
              </v-btn>
            </nuxt-link>
      <!--            <v-icon small @click="deleteItem(item)">-->
      <!--              mdi-delete-->
      <!--            </v-icon>-->
          </template>

          <template v-slot:footer v-if="action != 'View'">
            <v-row class="d-flex justify-end" style="width: 100%;">

              <v-btn to='/dashboard/facilities/add' color="primary"  class="px-16 mt-2" rounded outlined large>Add New Facility</v-btn>
              <v-btn to='/dashboard/facilities/' color="primary"  class="px-16 ml-8 mt-2" rounded outlined large>View All</v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="d-flex justify-end space-around px-4" v-if="viewAll">
        <v-btn
          color="primary"
          class="px-8 "
          rounded
          outlined
          small
          style="font-size: 12px"
          >View All</v-btn
        >
      </v-card-actions>
    </v-container>

      <v-container  v-else >
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :items-per-page="10"
          :hide-default-footer="true"
        >
          <template v-slot:item.address="{item}">
            <v-row class="d-flex  flex-column flex-wrap justify-end "  >
              <p>{{item.address}} {{item.city}}, {{item.state}} {{item.zipcode}}</p>
              <v-progress-circular
                v-if="loading === false"
                indeterminate
                color="primary"
                :size="30"
              ></v-progress-circular>
            </v-row>
          </template>

          <template v-slot:item.name="{ item }">
            <v-row class="d-flex  flex-column flex-wrap"  >

              <p>{{item.name}}</p>
            </v-row>
          </template>
          <template v-slot:item.full_name="{ item }"
            ><v-icon color="primary">mdi-account</v-icon>
            {{ item.contact_first_name }}
            {{ item.contact_last_name }}</template
          >
          <template v-slot:item.approved_name="{ item }">
            <v-icon color="primary">mdi-account</v-icon>
            {{ item.contact_first_name }}
            {{ item.contact_last_name }}
          </template>

          <template v-slot:item.phone="{ item }">{{ item.phone }}</template>

          <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
            <v-btn block color="primary" :to="slug + item.application_id">Review</v-btn>
          </template>

          <template
            v-slot:item.actions="{ item }"
            v-else-if="action === 'Apply'"
          >
            <v-btn block color="blue" :to="slug + item.location_id">View</v-btn>
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
              <v-btn class="my-1" style="width: 90%;" color="green" outlined>
                View
              </v-btn>
            </nuxt-link>
          <!--            <v-icon small @click="deleteItem(item)">-->
          <!--              mdi-delete-->
          <!--            </v-icon>-->
          </template>
            <template v-slot:footer v-if="action != 'View'">
              <v-row class="d-flex justify-end" style="width: 100%;">

                <v-btn to='/dashboard/facilities/add' color="primary" v-if="$vuetify.breakpoint.xs" style="width:100%;" class="px-16 mt-2" rounded outlined large>Add New Facility</v-btn>
                <v-btn to='/dashboard/facilities/add' color="primary" v-else style="width:50%;" class="px-16 mt-2" rounded outlined large>Add New Facility</v-btn>
                <v-btn to='/dashboard/facilities/' color="primary" v-if="$vuetify.breakpoint.xs" style="width:100%;"  class="px-16 ml-8 mt-2" rounded outlined large>View All</v-btn>
                <v-btn to='/dashboard/facilities/' color="primary" v-else style="width:50%;"  class="px-16 ml-8 mt-2" rounded outlined large>View All</v-btn>
              </v-row>
            </template>
          </v-data-table>

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

    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'HomeCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'loading'],
  data() {
    return {
      locations: null
    }
  },
  mounted() {
    console.log(this.items, 'items');
  }
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
.mobileTable {
  flex-direction: column;
  flex-wrap: wrap;

}
.mobileTable p{
  font-size: .5 vw;

}
</style>
