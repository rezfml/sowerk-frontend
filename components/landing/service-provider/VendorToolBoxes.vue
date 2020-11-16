<template>
  <v-container fluid style="background: #EDEDED" class="py-16">
    <!-- FIRST ROW-->
    <v-row style="max-width: 100%" class="d-flex justify-center ma-0">
      <v-col cols="12" md="10">
        <v-card
          class="d-flex flex-md-row flex-column"
          style="border-radius: 24px"
        >
          <v-col cols="12" md="3">
            <v-img
              width="150px"
              class="mx-auto ml-md-auto"
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
            ></v-img>
          </v-col>
          <v-col cols="12" md="4">
            <v-row class="flex-row flex-md-column">
              <v-col cols="12">
                <v-img
                  width="250px"
                  class="mr-md-auto toolbox-logo"
                  src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork%2BLogo-143-CROPPED.png"
                ></v-img>
              </v-col>
              <v-col cols="12" class="text-center text-md-left">
                <p
                  class="font-weight-bold text-md-h4"
                  style="color: #9D1A00; font-size: 30px; line-height: 1.25em"
                >
                  Vendor Toolboxes
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="5" class="pa-0 d-flex flex-column">
            <v-card
              class="elevation-0 pa-3 pa-md-0 rounded-0 rounded-tr-xl toolbox-border1"
              height="50%"
              style="background-color: #A61C00"
            >
              <v-card-text
                class="text-center white--text font-weight-bold text-h6 pt-5 pt-md-8"
                >Sales & Marketing</v-card-text
              >
            </v-card>
            <v-card
              class="elevation-0 pa-3 pa-md-0 rounded-0 rounded-br-xl toolbox-border2"
              height="50%"
              style="background-color: #545454"
            >
              <v-card-text
                class="text-center white--text font-weight-bold text-h6 pt-5 pt-md-8"
                style="line-height: 1.25em"
                >Relationship Management</v-card-text
              >
            </v-card>
          </v-col>
        </v-card>
      </v-col>
    </v-row>

    <!-- SECOND ROW -->
    <v-row style="max-width: 100%" class="d-flex justify-center ma-0">
      <v-col cols="12" md="10">
        <v-row>
          <v-col cols="12" md="7">
            <v-card
              class="text-center px-5"
              style="
                border-radius: 20px;
                border-top: 60px solid #A61C00;
                border-left: 3px solid #A61C00;
                border-right: 3px solid #A61C00;
                border-bottom: 3px solid #A61C00;
              "
            >
              <v-row style="margin-top: -43px; align-items: center">
                <v-col cols="5" sm="5" class="py-0 pl-0 pr-3 text-right">
                  <img
                    width="30px"
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/witness.png"
                    alt=""
                  />
                </v-col>
                <v-col cols="7" sm="7" class="pa-0 pl-2 text-left">
                  <p class="white--text ma-0 font-weight-bold text-body-1">
                    Business Visibility
                  </p>
                </v-col>
              </v-row>

              <p class="text-left py-8" style="color: #666666">
                How do you get in front of businesses who could and should buy
                from you?<br /><br />
                What if there was a business-to-business dating website where
                your business credentials, track record, and overall resume
                weren’t just used to apply for approved vendor status with a
                business but it also made up your business (dating) profile?<br /><br />
                On SOWerk, a company profile is visible to searching businesses.
                We know you probably don’t have time to keep up with your
                website yet alone social media which is why your SOWerk profile
                starts off strong using many of the same credentials you need to
                apply for an approved vendor program. As you obtain approved
                vendor status or receive reviews your profile automatically
                updates, making your life easier.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="5" class="d-flex">
            <v-card
              class="text-center px-5 flex-grow-1"
              style="
                border-radius: 20px;
                border-top: 60px solid #A61C00;
                border-left: 3px solid #A61C00;
                border-right: 3px solid #A61C00;
                border-bottom: 3px solid #A61C00;
              "
            >
             <v-row style="margin-top: -43px; align-items: center">
                <v-col cols="5" sm="5" class="py-0 pl-0 pr-3 text-right">
                  <img
                    width="30px"
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/trophy.png"
                    alt=""
                  />
                </v-col>
                <v-col cols="7" sm="7" class="pa-0 text-left">
                  <p class="white--text ma-0 pl-2 font-weight-bold text-body-1">
                    Approved Vendor
                  </p>
                </v-col>
              </v-row>
              <p
                class="text-left py-8"
                style="color: #666666; line-height: 1.4em"
              >
                Businesses are looking for vendors just like you to provide
                services and/or supply products. When you are connected as their
                approved vendor, it’s like having a direct line for their staff
                to do business with you. <br /><br />SOWerk makes it easy for
                you to search for accepting approved vendor programs as well as
                apply. To save you time and energy we try to use your profile
                data and any private provided data to pre-fill your
                applications.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- THIRD ROW -->
    <v-row style="max-width: 100%" class="d-flex justify-center ma-0">
      <v-col cols="12" md="10">
        <v-row>
          <v-col cols="12">
            <v-card
              class="text-center px-5"
              style="
                border-radius: 20px;
                border-top: 60px solid #545454;
                border-left: 3px solid #545454;
                border-right: 3px solid #545454;
                border-bottom: 3px solid #545454;
              "
            >
            <v-row style="margin-top: -43px; align-items: center">
<<<<<<< HEAD
                <v-col cols="5" sm="5" class="py-0 pl-0 pr-4git p text-right">
=======
                <v-col cols="5" sm="5" class="py-0 pl-0 pr-4 text-right">
>>>>>>> 816780ae5855adab73f486ad0518c46ec4b3ea06
                  <img
                    width="30px"
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/technics.png"
                    alt=""
                  />
                </v-col>
                <v-col cols="7" sm="7" class="pa-0 pl-2 text-left">
                  <p class="white--text ma-0 font-weight-bold text-body-1">
                    Business Tools
                  </p>
                </v-col>
              </v-row>
              <p
                class="text-left py-8"
                style="color: #666666; line-height: 1.4em"
              >
                Every day we are working to create tools to grow your business
                and improve customer relationships. Solutions like SOWerk
                Requests, a tool for businesses to obtain bids or service
                requests, can also be used by you to submit bids/quotes and
                change orders to customers beyond SOWerk.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'VendorToolBoxes'
}
</script>

<style scoped>
@media (max-width: 960px) {
  .toolbox-border1 {
    border-radius: 0 !important;
  }
  .toolbox-border2 {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: 24px !important;
  }
  .toolbox-logo {
    margin: 0 auto;
  }
}
/* .skew-top {
  position: relative;
}

.skew-top:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform: skewY(-2deg);
  z-index: 20!important;
} */
</style>