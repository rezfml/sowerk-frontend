<template>
  <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
    <v-container class="pt-0" fluid>
      <v-card-title style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">{{ title }}</v-card-title>
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
      <v-card-text class="pt-0 pb-2">
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :items-per-page="10"
        >
          <template v-slot:item.actions="{ item }" v-if="action === 'Review'">
            <v-btn block color="primary">Review</v-btn>
          </template>
          <template v-slot:item.actions="{ item }" v-else>
            <nuxt-link
              :to="'/dashboard/buyer/facilities/' + item.id"
              append
            >
              <v-icon
                small
                class="mr-2"
              >
                mdi-pencil
              </v-icon>
            </nuxt-link>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
<!--          <template v-slot:default>-->
<!--            <thead>-->
<!--            <tr>-->
<!--&lt;!&ndash;              <template>&ndash;&gt;-->
<!--&lt;!&ndash;                <th class="primary&#45;&#45;text" v-for="(item, key) in items" :key="key" v-if="key !== 'createdAt' || key !== 'updatedAt'">{{ key }}</th>&ndash;&gt;-->
<!--&lt;!&ndash;              </template>&ndash;&gt;-->
<!--              <template>-->
<!--                <th class="primary&#45;&#45;text font-weight-regular" style="font-size: 18px;">ID</th>-->
<!--                <th class="primary&#45;&#45;text font-weight-regular" style="font-size: 18px;">Location</th>-->
<!--                <th class="primary&#45;&#45;text font-weight-regular" style="font-size: 18px;">Address</th>-->
<!--                <th class="primary&#45;&#45;text font-weight-regular" style="font-size: 18px;">Primary Contact</th>-->
<!--                <th class="primary&#45;&#45;text font-weight-regular" style="font-size: 18px;">Phone</th>-->
<!--                <th class="primary&#45;&#45;text font-weight-regular" style="font-size: 18px;">Email</th>-->
<!--                <th class="primary&#45;&#45;text font-weight-regular" style="font-size: 18px;"></th>-->
<!--              </template>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="item in items" :key="item.id">-->
<!--              <th class="font-weight-regular" style="font-size: 14px;" v-for="(value, i) in item" :key="i" v-if="typeof value !== 'object'">{{ value }}</th>-->
<!--              <th class="font-weight-lighter"  v-else>{{ value.join(', ') }}</th>-->
<!--              <th><v-btn text color="primary" href="#"><v-icon>edit</v-icon></v-btn></th>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </template>-->
        </v-data-table>
      </v-card-text>
      <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
        <v-btn color="primary" class="px-8" rounded outlined small style="font-size: 12px">View All</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    name: 'HomeCard',
    props: [
      'items',
      'title',
      'viewAll',
      'tableProperties',
      'action'
    ],
    data() {
      return {
        locations: null,
      }
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
</style>
