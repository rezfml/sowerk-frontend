<template>

<v-container fluid style="background: #EDEDED; display: flex; flex-direction: column; justify-content: center; align-items: center;" class=skew-top>
  <p class="text-h4 text-sm-h3 pt-10 pb-5" style="color: #9D1A00; text-align: center; font-weight:bold; z-index: 1;">Powerful Business Tools - Absolutely Free</p>

  <v-card class="elevation-0" style="max-width: 1400px; background:transparent; width: 90%; justify-content: center">

    <!-- FIRST ROW FIND VENDORS   -->
    <v-row class="row-mobile py-10" style="height: 400px;">
      <v-col class="row-title-mobile" cols="3 elevation-1" md="2" style="text-align: center; display: flex; align-items: center;flex-direction: column; justify-content: center; background:#A61C00; border-top-left-radius: 25px; border-bottom-left-radius: 25px; z-index: 1">
        <img class="d-none d-sm-flex" src="https://sowerk-images.s3.us-east-2.amazonaws.com/searching.png"/>
        <p style="color: white; text-align: center; font-weight: bold; padding-top: 15px">FIND VENDORS</p>
      </v-col>
      <v-col class="row-text-mobile" cols="9 py-6 elevation-1" md="8" style="background: white; border-top-right-radius: 25px; display: flex; align-items: center; border-bottom-right-radius: 25px;  z-index: 1">
        <v-row>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px; align-items:" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Search The SOWerk Vendor Directory</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Connect With Existing Approved Vendors With Ease And At No Cost To The Vendor</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px"  src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Publish Your Customized Vendor Requirements To SOWerk To Receive Applications, Similar To Posting On A Job Board</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs"width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Use SOWerk To Route Cold Calls </p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">SOWerk Invite Tool Allows You To Invite Service Providers to Apply by email, text message or both </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

<!-- SECOND ROW VET VENDORS -->
    <v-row class="py-10 justify-end flex-md-row flex-row-reverse row-mobile-reverse-order" style="height: 400px; min-height: 350px;">
    <v-col cols="2" style="position: relative; z-index: 1" class="d-none d-sm-none d-md-flex">
        <!-- RED LINES -->
        <div style="position: absolute; top: -100px; left: 100px; height: 250px; width: 150px; border-left: 4px solid rgb(166, 28, 0); border-bottom: 4px solid rgb(166, 28, 0);"></div>
    </v-col>
      <v-col cols="9 py-6 elevation-1" md="8" class="row-text-mobile colTwoWhite-RowTwo" style="background: white; border-top-left-radius: 25px; border-bottom-left-radius: 25px; display: flex; align-items: center; z-index: 2">
        <v-row>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px; align-items:" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Use SOWerk Pre-Built Vendor Applications</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Customize Any Vendor Application To Your Requirements by Service Category and/or Your Facility Location</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Review Applicants With Ease From a Comparison Table or View Applicant’s Company Track Record (Profile)</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">SOWerk Makes It Easy To Requalify Approved Vendors Annually</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Easily Deny Applicants With Polite Common Responses, Or Provide A Custom Reason</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Vendor Update Monitoring: Be Alerted When Any Approved Vendor Updates Their Account Details (Profile) Which Alters Vendor Requirements</p>
          </v-col>
        </v-row>
      </v-col>
       <v-col cols="3 elevation-1" md="2" class="row-title-mobile colOneRed-RowTwo" style="background:#A61C00; border-top-right-radius: 25px; border-bottom-right-radius: 25px; text-align: center; display: flex; align-items: center;flex-direction: column; justify-content: center;">
        <img class="d-none d-sm-flex" src="https://sowerk-images.s3.us-east-2.amazonaws.com/Group+233.png"/>
        <p style="color: white; text-align: center; font-weight: bold; padding-top: 15px">VET VENDORS</p>
      </v-col>
    </v-row>

     <!-- THIRD ROW MANAGE VENDORS   -->
    <v-row class="row-mobile py-10" style="height: 350px; min-height: 400px;">
      <v-col class="row-title-mobile" cols="3 elevation-1" md="2" style="background:#A61C00; border-top-left-radius: 25px; border-bottom-left-radius: 25px; z-index: 1; display: flex; align-items: center;flex-direction: column; justify-content: center;">
        <img class="d-none d-sm-flex" src="https://sowerk-images.s3.us-east-2.amazonaws.com/management.png"/>
        <p style="color: white; text-align: center; font-weight: bold; padding-top: 15px">MANAGE VENDORS</p>
      </v-col>
      <v-col class="row-text-mobile" cols="9 py-6 elevation-1" md="8" style="background: white; border-top-right-radius: 25px; border-bottom-right-radius: 25px; display: flex; align-items: center;  z-index: 2">
        <v-row>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px; align-items:" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Communicate With Approved Vendors Quickly and Easily From One Platform</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Manage Approved Vendor Relationships Across Your Company and/or By Property Location</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Use SOWerk To Log Any & All Communications With Service Providers, Great For Record Keeping</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Coming Soon - SOWerk Requests, A Communication Solution Integrated Across SOWerk For Service Requests & Bidding </p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Coming Soon - SOWerk Projects, For Situations Where Multiple Service Providers Must Be Managed On A Project</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img  v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.25em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Coming Soon - Vendor Reviews & Analytics, Giving You The Tools To Log Reviews/Notes & Access To Vendor Analytics</p>
          </v-col>
        </v-row>
      </v-col>
       <v-col cols="2" style="position: relative;" class="d-none d-sm-none d-md-flex">
        <!-- RED LINES -->
        <div style="position: absolute; top: -100px; left: -50px; height: 250px; width: 150px; border-right: 4px solid rgb(166, 28, 0); border-bottom: 4px solid rgb(166, 28, 0);"></div>
    </v-col>
    </v-row>

<!-- FOURTH ROW LOCATIONS AND STAFF -->
    <v-row class="py-10 justify-end flex-md-row flex-row-reverse row-mobile-reverse-order" style="height: 400px; min-height: 350px;">
        <v-col cols="2" style="position: relative;" class="d-none d-sm-none d-md-flex">
        <!-- RED LINES -->
        <div style="position: absolute; top: -100px; left: 100px; height: 250px; width: 150px; border-left: 4px solid rgb(166, 28, 0); border-bottom: 4px solid rgb(166, 28, 0);"></div>
    </v-col>
      <v-col cols="9 py-6 elevation-1" class="row-text-mobile colTwoWhite-RowFour" md="8"  style="background: white; border-top-left-radius: 25px; border-bottom-left-radius: 25px; display: flex; align-items: center; z-index: 1">
        <v-row>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.5em; font-size: 12px; align-items:" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">Your SOWerk Administrator Accounts Can Create & Manage Property Locations, Add Staff Accounts, And Access Any Vendor Applicants or Approved Vendors</p>
          </v-col>
          <v-col cols="1 px-2 py-1" style="text-align: right;">
            <img v-show="!$vuetify.breakpoint.xs" width="22px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
          </v-col>
          <v-col cols="11 px-2 py-1">
            <p  style="line-height: 1.5em; font-size: 12px;" class="text-capitalize text-sm-body-1 font-weight-light mb-0 wrap-text">SOWerk Staff Accounts Offer You The Tools To Create Structure Within Your Company. A Staff Account Can Be Limited To One Property Location Or A Select Few Where They Can Find, Vet, & Manage Vendors For only That Location</p>
          </v-col>
        </v-row>
      </v-col>
       <v-col cols="3 elevation-1" md="2" class="row-title-mobile colOneRed-RowFour" style="background:#A61C00; border-top-right-radius: 25px; border-bottom-right-radius: 25px; z-index: 1; display: flex; align-items: center;flex-direction: column; justify-content: center;">
        <img class="d-none d-sm-flex" src="https://sowerk-images.s3.us-east-2.amazonaws.com/location.png"/>
        <p style="color: white; text-align: center; font-weight: bold; padding-top: 15px">LOCATIONS & STAFF</p>
      </v-col>
    </v-row>
  </v-card>

    <v-btn
              class="text-uppercase primary mx-auto text-sm-body-1 mt-10 mb-16"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              @click='$router.push("/register/property-manager")'
              >Register Now</v-btn
            >
  </v-card>
</v-container>


</template>

<script>
  export default {
    name: "PFPowerfulTools",
    data: () => ({
      prevIcon: true,
      nextIcon: true,
      showArrows: true
    }),
    props: {
      carouselPropertyManagers: {

      }
    }
  }
</script>

<style scoped>
.skew-top {
    position:relative;
}

.skew-top:before {
    position: absolute;
    content: '';
    background: inherit;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    transform-origin: top left;
    transform: skewY(-2deg)
}


@media (max-width: 960px) {
  .colOneRed-RowTwo,
  .colOneRed-RowFour {
    border-top-left-radius: 25px;
    border-top-right-radius: 0px!important;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 0px!important;
  }
  .colTwoWhite-RowTwo,
  .colTwoWhite-RowFour {
    border-top-right-radius: 25px;
    border-top-left-radius: 0px!important;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 0px!important;
  }
}
@media(max-width: 500px) {
  .row-mobile {
    width: 100% !important;
    height: auto !important;
    margin: 0 auto !important;
    display: flex !important;
    flex-direction: column !important;
  }
  .row-mobile-reverse-order {
    width: 100% !important;
    height: auto !important;
    margin: 0 auto !important;
    display: flex !important;
    flex-direction: column-reverse !important;
  }
  .row-mobile .row-title-mobile, .row-mobile-reverse-order .row-title-mobile {
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 0px !important;
  }
  .row-mobile .row-text-mobile, .row-mobile-reverse-order .row-text-mobile {
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 0px !important;
  }
  .row-mobile .row-text-mobile p, .row-mobile-reverse-order .row-text-mobile p {
    font-size: 20px !important;
    line-height: 1.6em !important;
  }
}

  @media(max-width: 375px) {
    .row-mobile .row-text-mobile p, .row-mobile-reverse-order .row-text-mobile p {
      font-size: 16px !important;
    }
  }
</style>
