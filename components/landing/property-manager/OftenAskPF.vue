<template>
  <v-flex class="pt-16 pb-16" style="background: #EDEDED url('https://sowerk-images.s3.us-east-2.amazonaws.com/asset1.png') no-repeat; background-position: 1100px -70px;">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px"
              class="text-sm-h4 text-md-h3 font-weight-bold primary--text text-center"
            >
              Businesses Often Ask
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background: transparent"
            >
            <!-- QUESTION ONE -->
            <v-row class="pt-8 " style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align:center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Is this going to create more work for
                    me?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Actually, we designed SOWerk to be less work for you and suppliers. Think
                    of SOWerk like connecting with vendors on social
                    media, except they have to meet your approved provider
                    requirements. After vetting, you can easily manage and
                    communicate with your approved Vendors.</p>
                </v-col>
            </v-row>

            <!-- QUESTION TWO -->
              <v-row class="pt-6" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align:center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will SOWerk Save Us Money? Will It Protect Our Investments?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">If time is money and quality is everything, then yes, SOWerk can help. SOWerk makes it efficient for any staff member to vet & manage local/national Vendors, such as getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted Vendors then it might just save you both time and money. Additionally, businesses use SOWerk to log all interactions and documents, which might come in handy if you need to file a warranty claim or protect your business in court.</p>
                </v-col>
            </v-row>

              <!-- QUESTION THREE -->
               <v-row class="pt-6 pb-8" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will SOWerk Help Shield Me From Cold Calls?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Sales is part of any business but sometimes, you just need a place to send the salesman where they can apply for with your business. Find us on SOWerk to become an approved Vendor. </p>
                </v-col>
            </v-row>
            </v-list>
            <!-- BUTTON -->
            <v-btn
              class="text-uppercase primary mx-auto text-sm-body-1"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '47%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              @click='$router.push("/register/property-manager")'
              >Register Now</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
</template>

<script>
export default {
  name: 'OftenAskPF',
}
</script>

<style scoped>
.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}
</style>