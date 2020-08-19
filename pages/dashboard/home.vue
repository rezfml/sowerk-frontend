<template>
  <v-app class="grey lighten-3">
    <v-container class="px-8" fluid>
      <HomeCard
        v-if="locations"
        :items="locations"
        title="Your Facilities"
        :tableProperties="headers"
        slug="/dashboard/facilities/"
      ></HomeCard>
      <v-row>
        <v-col cols="3" v-for="(stat, index) in stats" :key="index">
          <StatCard :stat="stat"></StatCard>
        </v-col>
      </v-row>
      <v-card class="white pt-0 mt-12">
        <v-container fluid>
          <v-card-title style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Approved Vendors - Quick Look Up</v-card-title>
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
            <v-sheet
              class="mx-auto"
              max-width="100%"
            >
              <v-slide-group multiple show-arrows>
                <v-slide-item
                  v-for="(item, index) in quickLookUps"
                  :key="index"
                  v-slot:default="{ active, toggle }"
                  class ="px-4"
                >
                  <v-card width="200" elevation="0">
                    <v-row>
                      <v-col class="d-flex flex-column justify-center py-0">
                        <p class="text-center primary--text title">{{ item.name }}</p>
                        <v-icon color="primary" size="100">{{ item.icon }}</v-icon>
                        <v-btn class="mx-auto mt-4" color="primary" outlined rounded small :href="item.link" width="100%">View All</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-card-text>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/Sidebar";
  import HomeCard from '~/components/dashboard/HomeCard'
  import StatCard from "~/components/dashboard/StatCard";

  export default {
    name: "home",
    layout: "app",
    components: {
      Sidebar,
      HomeCard,
      StatCard
    },
    data() {
      return {
        items: [
          {
            id: 1,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 2,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 3,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
        ],
        stats: [
          {
            title: 'Approved Service Providers',
            value: '2,438',
            link: '#'
          },
          {
            title: 'Requests For Bids',
            value: '243',
            link: '#'
          },
          {
            title: 'All Pending Applications',
            value: '21',
            link: '#'
          },
          {
            title: 'Recently Approved Applications',
            value: '12',
            link: '#'
          }
        ],
        quickLookUps: [
          {
            name: 'HVAC',
            icon: 'hvac',
            link: '#'
          },
          {
            name: 'Landscaping',
            icon: 'mdi-rake',
            link: '#'
          },
          {
            name: 'Plumber',
            icon: 'mdi-pipe',
            link: '#'
          },
          {
            name: 'Electrician',
            icon: 'mdi-power-plug',
            link: '#'
          },
          {
            name: 'Painter',
            icon: 'mdi-format-paint',
            link: '#'
          },
          {
            name: 'Paving',
            icon: 'mdi-tractor',
            link: '#'
          },
          {
            name: 'Pest Control',
            icon: 'mdi-bug-outline',
            link: '#'
          },
        ],
        headers: [
          { text: 'Location', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        locations: null,
        user: null
      }
    },
    async mounted () {
      setTimeout(async () => {
        await this.getLocations();
      }, 1000)
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
    },
    methods: {
      async getUser() {
        let {data, status} = await this.$http.get('https://sowerk-backend.herokuapp.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.user = data;
          console.log(data);
        })
      },
      async getLocations() {
        let {data, status} = await this.$http.get('https://sowerk-backend.herokuapp.com/api/locations/byUserId/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.locations = data;
        })
      },
    }
  };
</script>

<style lang="scss" scoped>
  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
</style>
