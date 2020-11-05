<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;">
        <v-col cols="4">
          <v-card class="mt-16 d-flex flex-column align-center">
            <v-row>
              <v-col cols="12" align="center">
                <v-avatar size="100" class="text-center mx-auto mt-n16 rounded-circle elevation-5" color="white">
                  <v-img :src="location.imageUrl" v-if="location.imageUrl && location.imageUrl !== '{}'"></v-img>
                  <v-icon v-else size="60">person</v-icon>
                </v-avatar>
              </v-col>
            </v-row>
            <v-card-title style="color:#A61C00;">{{location.name}}</v-card-title>
            <v-card-text style="text-align: center">Approved at <span style="color:#A61C00;">{{connections.length}}</span> Properties</v-card-text>
            <v-card-text style="color:#A61C00; text-align: center">Radius Provider ({{location.radius}}mi)</v-card-text>
            <!--            <v-btn outlined color="primary" rounded md class="px-16">Share</v-btn>-->
            <v-divider class="mx-auto mt-10" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">About</v-card-title>
            <v-card-text>Address: {{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
            <v-card-text>Founded: {{location.year_founded}}</v-card-text>
            <v-card-text v-if="location.created">Joined SOWerk: {{location.created.slice(0,4)}}</v-card-text>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Main Contact</v-card-title>
            <v-card-text>{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
            <!--            <v-card-text>{{location.email}}</v-card-text>-->
            <!--            <v-card-text>{{location.phone}}</v-card-text>-->
<!--            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>-->
<!--            <v-card-title style="color:#A61C00;">Insurances</v-card-title>-->
<!--            <template v-for="(insurance, index) in insurances">-->
<!--              <v-card-text>{{insurance.name}} - {{insurance.insuranceCompany}}</v-card-text>-->
<!--              <v-card-text v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>-->
<!--            </template>-->
<!--            <v-btn color="primary" outlined rounded style="width: 50%">View Insurances</v-btn>-->
<!--            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>-->
<!--            <v-card-title style="color:#A61C00;">Licenses</v-card-title>-->
<!--            <template v-for="(license, index) in licenses">-->
<!--              <v-card-text>{{license.name}} - {{license.licenseLocation}}</v-card-text>-->
<!--              <v-card-text v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>-->
<!--            </template>-->
<!--            <v-btn class="mb-4" color="primary" outlined rounded style="width: 50%">View Licenses</v-btn>-->
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>Recently Approved Properties</v-card-title>
            <v-card-subtitle>Past 30 days</v-card-subtitle>
            <v-card-title>23</v-card-title>
            <v-card-text>You will request this Vendor to fill out your HVAC specialized application for Bass Pro Shops (Memphis, TN).</v-card-text>
            <v-btn outlined color="primary" rounded width="100%">Request Application</v-btn>
          </v-card>
<!--          <v-card>-->
<!--            <v-card-title>Businesses Portfolio</v-card-title>-->
<!--            <v-card-subtitle>Other businesses who have accepted this Service Provider</v-card-subtitle>-->
<!--            <VendorSlider></VendorSlider>-->
<!--          </v-card>-->
        </v-col>
        <v-col cols="4">

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import VendorSlider from '~/components/dashboard/VendorSlider'
  export default {
    name: 'approved',
    layout: 'app',
    components: {
      VendorSlider
    },
    data() {
      return {
        location: {},
        connections: [],

      }
    },
    async mounted() {
      console.log(this.$route.params.id, 'hey')
      await this.getLocation();
    },
    methods: {
      async getLocation() {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'response.data');
            this.location = response.data;
            this.getConnections(response.data.id);
          })
      }
    }
  }
</script>

<style scoped>

</style>
