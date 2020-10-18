<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;">
        <v-col cols="4">
          <v-card>
            <img :src="location.imageUrl" />
            <v-card-title style="color:#A61C00;">{{location.name}}</v-card-title>
            <v-card-text>Approved at <span style="color:#A61C00;">23</span> Properties</v-card-text>
            <v-card-text style="color:#A61C00;">Radius Provider ({{location.radius}}mi)</v-card-text>
            <v-btn outlined color="primary" rounded large>Share</v-btn>
            <v-divider></v-divider>
            <v-card-title style="color:#A61C00;">About</v-card-title>
            <v-card-text>Address: {{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
            <v-card-text>Founded: {{location.year_founded}}</v-card-text>
            <v-card-text v-if="location.created">Joined SOWerk: {{location.created.slice(0,4)}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card>
            <v-card-title>Recently Approved Properties</v-card-title>
            <v-card-subtitle>Past 30 days</v-card-subtitle>
            <v-card-title>23</v-card-title>
            <v-card-text>You will request this Vendor to fill out your HVAC specialized application for Bass Pro Shops (Memphis, TN).</v-card-text>
            <v-btn outlined color="primary" rounded width="100%">Request Application</v-btn>
          </v-card>
          <v-card>
            <v-card-title>Businesses Portfolio</v-card-title>
            <v-card-subtitle>Other businesses who have accepted this Service Provider</v-card-subtitle>
            <VendorSlider></VendorSlider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import VendorSlider from '~/components/dashboard/VendorSlider'
  export default {
    name: 'vendor',
    layout: 'app',
    components: {
      VendorSlider
    },
    data() {
      return {
        location: {

        },
      }
    },
    async mounted() {
      console.log(this.$route.params.id, 'hey')
      await this.getLocation();
    },
    methods: {
      async getLocation() {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'response.data');
            this.location = response.data;
          })
      }
    }
  }
</script>

<style scoped>

</style>
