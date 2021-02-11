<template>
    <v-container
      fluid
      text-center
      style="background-color:#2B2B2B;display: flex; flex-direction: column; justify-content: center; align-items: center; box-sizing: border-box;position:relative;z-index:0;"
      class="skew-top">
      
      <v-row v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-col cols="12" style="text-align:center;padding-top:10%;">
          <!-- <p style="word-break: break-word; font-size: 1.2rem; font-weight:500;">
            We Are
          </p> -->

          <p style="word-break: break-word; font-size: 1.3rem; font-weight:700;">
            Business and Vendor Solutions
          </p>

          <p style=" font-size: .9rem;width: 80%;margin-left: 10%;">
            Our mission is to establish a set of business-to-business communication tools designed to foster the link between businesses and vendors
          </p>
        </v-col>        
      </v-row>

      <!-- VIDEOS AT DIFFERENT SCREEN SIZES -->
      <v-row class="d-flex">
        <v-col v-if="$vuetify.breakpoint.xl" cols="8">
          <v-card style="background-color:black;border-radius:3%;margin:0%">
            <iframe src="https://player.vimeo.com/video/498208221" width="1200" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="margin-top:.5%;margin-left:.5%;padding-right:1%;"></iframe>
          </v-card>
        </v-col>

        <v-col v-else-if="$vuetify.breakpoint.lg" cols="8">
          <v-card style="background-color:black;border-radius:3%;margin:0%">
            <iframe src="https://player.vimeo.com/video/498208221" width="100%" height="460" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="margin-top:.5%;margin-left:.5%;padding-right:1%;"></iframe>
          </v-card>
        </v-col>

        <v-col v-else-if="$vuetify.breakpoint.md" cols="7">
          <v-card style="background-color:black;border-radius:3%;margin:0%">
            <iframe src="https://player.vimeo.com/video/498208221" width="580" height="330" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="margin-top:.5%;margin-left:.5%;padding-right:1%;"></iframe>
          </v-card>
        </v-col>

        <v-col v-else-if="$vuetify.breakpoint.sm" cols="12">
          <v-card style="background-color:black;border-radius:3%;margin:0%">
            <iframe src="https://player.vimeo.com/video/498208221" width="500" height="250" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="margin-top:.5%;margin-left:.5%;padding-right:1%;"></iframe>
          </v-card>
        </v-col> 

        <v-col v-else-if="$vuetify.breakpoint.xs" cols="12">
          <v-card style="background-color:black;border-radius:3%;margin:0%">
            <iframe src="https://player.vimeo.com/video/498208221" width="300" height="180" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="margin-top:.5%;margin-left:.5%;padding-right:1%;"></iframe>
          </v-card>
        </v-col>
        
        <v-col cols="4" style="text-align:left;padding-top:10%" v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl">
          <p style="word-break: break-word; font-size: 1.2rem; font-weight:500;">
            We Are
          </p>

          <p style="word-break: break-word; font-size: 1.7rem; font-weight:700;">
            A Solution for Businesses and Vendors
          </p>

          <p style=" font-size: 1.1rem;">
            Our mission is to establish a set of business-to-business communication tools designed to foster the link between businesses and vendors
          </p>
        </v-col>

        <!-- <v-col cols="12" style="text-align:center;padding-top:10%" v-else-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"> -->
          <!-- <p style="word-break: break-word; font-size: 1.2rem; font-weight:500;">
            We Are
          </p> -->

          <!-- <p style="word-break: break-word; font-size: 1.3rem; font-weight:700;">
            Business and Vendor Solutions
          </p>

          <p style=" font-size: .9rem;">
            Our mission is to establish a set of business-to-business communication tools designed to foster the link between businesses and vendors
          </p>
        </v-col> -->

      </v-row>

      <!-- VRM HOME-PAGE IMAGE -->
      <v-row
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        class="justify-space-around"
        style="width: 100%; max-width: 100%;">

        <v-img style="width:90%" src="/VRM-bubble-image-Mobile.png"></v-img>
      </v-row>    

      <v-row
        v-else
        class="justify-space-around"
        style="width: 100%; max-width: 100%;">

        <v-img style="width:100%" src="/VRM-image-New.png"></v-img>
      </v-row>

      <!-- BUTTONS UNDER VRM IMAGE FOR BUSINESSES -->
      <v-row
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        class="primary"
        style="width: 100%; max-width: 100%; background-color: primary; padding-top:1%; padding-bottom:1%">

          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: .5rem; width:40%;"
              to="/register/property-manager">
                REGISTER NOW
          </v-btn>

          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: .5rem; width:40%;"
              to="/landingpage/join-product-landing/">
                BUSINESSES - LEARN MORE
          </v-btn>
      </v-row>

      <v-row
        v-else
        class="primary"
        style="width: 100%; max-width: 100%; background-color: primary; padding-top:1%; padding-bottom:1%">

          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: 1rem; width:25%;"
              to="/register/property-manager">
                REGISTER NOW
          </v-btn>

          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: 1rem; width:25%;"
              to="/landingpage/join-product-landing/">
                BUSINESSES - LEARN MORE
          </v-btn>
      </v-row>

      <!-- CRM HOME-PAGE IMAGE -->
      <v-row
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        class="justify-space-around"
        style="width: 100%; max-width: 100%;">

        <v-img style="width:90%" src="/CRM-bubble-image-Mobile.png"></v-img>
      </v-row>

      <v-row
        v-else
        class="justify-space-around"
        style="width: 100%; max-width: 100%;">

        <v-img style="width:100%" src="/CRM-image-New.png"></v-img>
      </v-row>
      
      <!-- BUTTONS UNDER CRM IMAGE FOR VENDORS -->
      <v-row
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        class="primary"
        style="width: 100%; max-width: 100%; background-color: primary; padding-top:1%; padding-bottom:1%">
        
          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: .5rem; width:40%;"
              to="/register/provider">
                REGISTER NOW
          </v-btn>

          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: .5rem; width:40%;"
              to="/landingpage/join-service-landing/">
                VENDORS - LEARN MORE
          </v-btn>
      </v-row> 
           
      <v-row
        v-else
        class="primary"
        style="width: 100%; max-width: 100%; background-color: primary; padding-top:1%; padding-bottom:1%">
        
          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: 1rem; width:25%;"
              to="/register/provider">
                REGISTER NOW
          </v-btn>

          <v-btn
              class="text-uppercase white mx-auto text-sm-body-2"
              x-large
              style="border-radius: 20px; font-weight: bold; font-size: 1rem; width:25%;"
              to="/landingpage/join-service-landing/">
                VENDORS - LEARN MORE
          </v-btn>
      </v-row>

      <!-- OTHER -->
      <v-row
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        class="justify-space-around"
        style="width: 100%; max-width: 100%;margin-bottom: 5%">

        <v-img style="width:100%" src="/homePageBubble-image-Mobile.png"></v-img>        
      </v-row>
      <v-row
        v-else
        class="justify-space-around"
        style="width: 100%; max-width: 100%;margin-bottom: 5%">

        <v-img style="width:100%" src="/biz-to-biz-image.png"></v-img>        
      </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'PFandVComeTogether'
}
</script>

<style scoped>
.skew-top {
  position: relative;
  z-index: 30;
}

.skew-top:before {
  position: absolute;
  content: '';
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    white 100%
  );
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -20;
  transform-origin: top left;
  transform: skewY(-2deg);
}

.card-link-outer {
  display: flex;
  flex-direction: column;
}

@media (max-width: 680px) {
  .list1 {
    column-count: 1 !important;
  }
}

@media(max-width: 375px) {
    .mobile-title {
      font-size: 28px !important;
    }

    p.text-center {
      width: 90% !important;
      max-width: 90% !important;
    }
  }
</style>
