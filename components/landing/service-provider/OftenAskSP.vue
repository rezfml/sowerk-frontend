<template>
<v-flex class="pt-16 pb-16 skew-top" style="background: #EDEDED url('https://sowerk-images.s3.us-east-2.amazonaws.com/asset1.png') no-repeat; background-position: 1100px 54px;">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px"
              class="text-sm-h4 text-md-h3 font-weight-bold primary--text text-center vendor-ask"
            >
              Vendors Generally Ask
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background:transparent"
            >
            <!-- QUESTION ONE -->
            <v-row class="pt-8 " style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Do I Seriously Get More Jobs?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Yes, Business managers of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet service provider's request bids.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">SOWerk is adding new features and benefits constantly to help you gain new relationships as well as grow existing customers.</p>
                </v-col>
            </v-row>

            <!-- QUESTION TWO -->
              <v-row class="pt-6" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Is SOWerk Time Consuming and Hard To
                    Use?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Not at all, a SOWerk profile only takes 10 minutes to
                      set up.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">We understand that time is money. That's why every feature and solution constructed for Vendors was designed from day one to be quick and efficient.</p>
                </v-col>
            </v-row>

              <!-- QUESTION THREE -->
               <v-row class="pt-6 pb-8" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will I Get Charged All The Time & Get Junk
                    Leads?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Unlike other websites, SOWerk Vendors receive communications from their approved vendor programs, direct leads, or new businesses inviting them to apply for approved vendor program. </p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Being on SOWerk and promoting your business is inexpensive, and we prefer it that way. If you wish to apply for an approved vendor program or utilize other SOWerk features, we offer a few different packages. Priving details can be found by clicking the button below to go to our Approved Provider page.</p>
                </v-col>
            </v-row>
            </v-list>
            <!-- BUTTON -->
            <v-btn
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;margin-bottom:-2%;"
              @click='$router.push("/register/provider")'
              >REGISTER NOW</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
</template>

<script>
export default {
  name: 'OftenAskSP',
}
</script>

<style>
.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}

.skew-top {
  position: relative;
  z-index: 30;
}

.skew-top:before {
position: absolute;
content: '';
background: inherit;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -20;
transform-origin: top left;
transform: skewY(-2deg);
}
</style>