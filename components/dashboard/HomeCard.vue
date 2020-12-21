<template>
  <v-container style="width: 100%; margin: 0px; max-width: 100vw;">
    <v-card class="white pt-0 mt-8 mb-4" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" style="width: 100vw;">
        <v-card-title
          style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
          class="primary white--text font-weight-regular red-gradient TitleCard"
          >{{ title }}</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="py-0">
            <v-spacer></v-spacer>
            <v-col cols="4" class="py-0">
              <v-text-field label="Search" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-data-table
              :headers="tableProperties"
              :items="items"
              :items-per-page="10"
              :hide-default-footer="true"
              style="width: 100%;"
        >
              <template v-slot:item.address="{item}">
                <v-row class="d-flex" cols="12" lg="6">
                  <v-col>
                    <p>{{item.address}}</p>
                    <p>{{item.city}}, {{item.state}} {{item.zipcode}}</p>
                  </v-col>
                  <v-progress-circular
                    v-if="loading === false"
                    indeterminate
                    color="primary"
                    :size="30"
                  ></v-progress-circular>
                </v-row>
              </template>
              <template v-slot:item.imageUrl="{ item }">
                <v-row class="d-flex" cols="12" lg="6" justify="center" >
                  <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                  <v-img v-else-if="item.imageUrl === '' && company.imgUrl !== ''" :src="company.imgUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                  <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"/>
                </v-row>
              </template>
              <template v-slot:item.name="{ item }">
                <v-row class="d-flex" cols="12" lg="6" >
                  <v-col>
                    <p>{{item.name}}</p>
                  </v-col>
                </v-row>
              </template>
              <template v-slot:item.full_name="{ item }">
                <v-icon color="primary">mdi-account</v-icon>
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
                  <v-btn class="my-1" block color="primary" >
                    View
                  </v-btn>
                </nuxt-link>
          <!--            <v-icon small @click="deleteItem(item)">-->
          <!--              mdi-delete-->
          <!--            </v-icon>-->
              </template>

              <template v-slot:footer v-if="action != 'View'">
                <v-row class="d-flex justify-end mt-4" style="width: 100%;">

                  <v-btn to='/dashboard/channels/add' color="primary"  class="px-16 my-2" rounded outlined >Add New Channel</v-btn>
                  <v-btn :to='slug' color="primary"  class="px-16 ml-8 my-2" rounded outlined>View All</v-btn>
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
    </v-card>
    <v-card class="white pt-0 mt-12 mb-4" style="width: 100vw !important;" v-else>
      <v-container class="pt-0" fluid >
        <v-card-title
          style="position: absolute; top: -0px; left: 35px; width: 92%; border-radius: 3px; font-size: 14px;"
          class="primary white--text font-weight-regular red-gradient TitleCard"
          >{{ title }}</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0 mb-n10" >
          <v-row class="py-0" style="">
            <v-spacer></v-spacer>
            <v-col cols="12" class="pt-12">
              <v-text-field label="Search" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>

        <v-container class="" >

          <v-data-table
            :headers="tableProperties"
            :items="items"
            :items-per-page="10"
            :hide-default-footer="true"
            cols="12"
          >

            <template v-slot:item.imageUrl="{item}"  >
              <v-row class="d-flex flex-start order-0">
              </v-row>
            </template>

            <template v-slot:item.address="{item}">
              <v-row class="d-flex  flex-wrap justify-start "   >
                <v-col>
                  <v-row>
                    <h3>Address </h3>
                  </v-row>
                  <p class="d-flex  flex-wrap justify-start mb-0" style=""> {{item.address}} </p>
                  <p class="d-flex  flex-wrap justify-start"> {{item.city}}, {{item.state}} {{item.zipcode}}</p>
                </v-col>
                <v-progress-circular
                  v-if="loading === false"
                  indeterminate
                  color="primary"
                  :size="30"
                ></v-progress-circular>
              </v-row>
            </template>

            <template v-slot:item.name="{ item }" >
              <v-row class="d-flex " cols="12" lg="6"  >

                <h3>Location Name</h3>
              </v-row>
              <v-col>
              <v-row class="d-flex  flex-column flex-wrap mb-10 mt-n4">
                <p class="d-flex  flex-wrap justify-start">{{item.name}}</p>
              </v-row>
              </v-col>
            </template>


            <template v-slot:item.full_name="{ item }" >
              <v-row class="d-flex mt-4" cols="12" lg="6" >
                <h3>Contact Name</h3>
              </v-row>
              <v-row class="d-flex  flex-column flex-wrap "  >
              {{ item.contact_first_name }}
              {{ item.contact_last_name }}
              </v-row>
              </template
            >
            <template v-slot:item.approved_name="{ item }">
              <v-row class="d-flex mt-4" cols="12" lg="6" >
                <h3>Contact Name</h3>
              </v-row>
              <v-row class="d-flex flex-start flex-wrap " >
              {{ item.contact_first_name }}
              {{ item.contact_last_name }}
              </v-row>
            </template>

              <template v-slot:item.email="{ item }">
              <v-row class="d-flex mt-4" cols="12" lg="6" >
                <h3>Email Address</h3>
              </v-row>
              {{ item.email }}
              </template>

            <template v-slot:item.phone="{ item }" class="my-12 "  >
              <v-row class="d-flex mt-4 " cols="12" lg="6" >
                <h3>Phone Number</h3>
              </v-row>
             <p class="mb-4"> {{ item.phone }}</p>

            </template>

            <template v-slot:item.actions="{ item }" v-if="action === 'Review'" >
              <v-btn class="my-12 "  block color="primary" :to="slug + item.application_id">Review</v-btn>
            </template>

            <template v-slot:item.actions="{ item }" v-else-if="action === 'View'" >
              <v-btn class="my-12 " block color="primary" :to="'/dashboard/vendors/' + item.id" >View</v-btn>
            </template>

            <template v-slot:item.actions="{ item }" v-else >
              <v-row class="d-flex justify-end mx-auto pl-3 pr-3 " style="width: 100%;">
              <nuxt-link :to="slug + item.id" append>
                <v-btn class="my-12 " cols="12" style="width: 100%; color: white;" color="#707070">
                  View
                </v-btn>
              </nuxt-link>
              </v-row>
            <!--            <v-icon small @click="deleteItem(item)">-->
            <!--              mdi-delete-->
            <!--            </v-icon>-->
            </template>

              <template v-slot:footer v-if="action != 'View'" >
                <v-row class="d-flex justify-end mx-auto pl-3 pr-3 "  style="width: 100%;">

                  <v-btn to='/dashboard/channels/add' color="primary" style="width:100%;" class="px-10 mt-2" rounded outlined large>Add New Channel</v-btn>
                  <v-btn :to='slug' color="primary" style="width:100%;"  class="px-16 ml-8 mt-2 " rounded outlined large>View All</v-btn>
                </v-row>
              </template>
            </v-data-table>

          <v-card-actions class="d-flex justify-end px-4" v-if="viewAll" style="width:110% !important;">
            <v-btn
              color="primary"
              class="px-8"
              rounded
              outlined
              small
              style="font-size: 12px"
              >
              View All
              </v-btn>
          </v-card-actions>
        </v-container>

      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'HomeCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'loading', 'company'],
  data() {
    return {
      locations: null
    }
  },
  mounted() {
    console.log(this.items, 'items', 'company', this.company);
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
  font-size: .5vw;

}

.v-application .px-8 {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>
