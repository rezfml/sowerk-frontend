<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-card class="d-flex flex-column align-center" style="background-color: white !important; width: 100% !important;">
        <v-img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs " style="max-height: 250px;" class="my-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
        <v-img v-else style="max-height: 150px;" class="mt-3" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
        <v-card style="width: 95%;" class="d-flex flex-column align-center">
          <v-row style="width: 100%; background-color: #7C7C7C; height: 10vh;" class="d-flex justify-center">
            <v-card-title style="color: white;">YOUR CURRENT SOWERK LEVEL</v-card-title>
          </v-row>
          <v-row style="width: 100%;" class="d-flex justify-center">
            <v-col cols="3">
              <v-card class="d-flex flex-column align-center">
                <v-card-text>Hi</v-card-text>
                <v-card-text>Hi</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="d-flex flex-column align-center">
                <v-card-text>Hi</v-card-text>
                <v-card-text>Hi</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="d-flex flex-column align-center">
                <v-card-text>Hi</v-card-text>
                <v-card-text>Hi</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="d-flex flex-column align-center">
                <v-card-text>Hi</v-card-text>
                <v-card-text>Hi</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
        <v-row style="width: 95%;">
          <v-col cols="2.4">
            <v-card>
              <v-card-text>Hi</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2.4">
            <v-card>
              <v-card-text>Hi</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2.4">
            <v-card>
              <v-card-text>Hi</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2.4">
            <v-card>
              <v-card-text>Hi</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2.4">
            <v-card>
              <v-card-text>Hi</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card style="width: 95%;">
          <v-row>
            <v-card-title>UPGRADE 5</v-card-title>
          </v-row>
          <v-card-text>Hi</v-card-text>
        </v-card>
        <v-card-text style="width: 95%; text-align: center;">To apply for an approved vendor program you must have a paying account (above SOWerk Basic). Should you have an account that is greater than SOWerk Basic you can apply for any number of approved vendor programs. However, when your application for an approved vendor program is accepted by the business a SOWerk connection credit is used. Once approved by a business your connection credit is used until that business eliminates your approved vendor status or you are no longer in good standing on SOWerk. SOWerk Connection credits returned for terminated connections are not refunded but rather reinstated on your account. Each level of account on SOWerk offers a Service Provider set number of SOWerk Connections they can use, but if you need additional connections they can added with a one time purchase fee that renews annually. That charge is a one time charge only for the year. If you will not be charged again and you will keep purchased credit for one year only. If the connection to a business is eliminated you will not be refunded that one time fee, and the connection credit will be added back to your account until it’s renewal date. You will however continue to be charged your account level fee each month. Should you upgrade your account level any credits purchased as additional credits at a lower level that were unused/returned will roll forward, up to the original purchase date. If you have upgraded your account and additional credits were used at a lower level for connections they will continue to be used at the upgraded level until their anniversary date, at which point if you have unused account level credits they will be used to maintain connections. In the event you are out of account level credits you will again be charged the one time fee per credit, based on your account level fee structure, to sustain said connection(s). You can lower your account level at any time but at no time can you revert to a SOWerk Basic and still maintain any account creits, doing so will result in lost connections and outstanding credits.</v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "home",
    layout: "app",
    data() {

    }
  }

</script>

<style>

</style>
