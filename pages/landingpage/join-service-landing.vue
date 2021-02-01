<template>
  <div class="joinservicecontainer" style="overflow-x: hidden">
    <section class="joinservicehero">
      <div>
        <h1>Service & Product Vendors</h1>
        <p>Your Tools For Business Relationships</p>
        <button @click="$router.push('/register/provider')">
          Get Started Now
        </button>
      </div>
    </section>

    <v-container
      fluid
      style="background: linear-gradient(#a61c00 0%, #530e00 100%)"
    >
      <v-row>
        <v-col cols="12">
          <p
            class="mobile-title text-center text-lg-h3 text-sm-h4 font-weight-bold white--text pt-10 pb-2 pb-sm-10"
          >
            SOWerk Was Founded To Help Any Size Service Provider or Supplier
            Find New Customers & Elevate Existing Business Relationships
          </p>
        </v-col>
      </v-row>
    </v-container>

      <div style="width:100%;height:100%;" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
        <img style="width:100%;height:100%;" src="/venWhyUseSowerk-image.png" alt="">
      </div>

      <div style="width:100%;height:100%;" v-else>
        <img style="width:100%;height:100%;" src="/vendor-CRM-LP-image.png" alt="">
      </div>

    <!-- VENDOR TOOLBOXES SECTION -->
    <VendorToolBoxes />
    <!-- PRICING LEVELS -->
    <v-container fluid style="background: #EDEDED">
      <v-row class="pa-0">
        <v-col cols="12" class="pa-0">
          <p
            class="text-center text-md-h3 font-weight-bold"
            style="color: #A61C00; font-size: 35px; line-height: 1.25em"
          >
            SOWerk Pricing
          </p>
        </v-col>
      </v-row>
    </v-container>
    <PricingLevels class="pricing-levels" />
    <!-- GETTING STARTED IS FREE AND EASY -->
    <!-- <v-container fluid class="py-10" style="background: #151515; height: 40vh" >
      <v-row class="py-5 px-0">
        <v-col cols="12" class="text-center px-0">
          <p class="white--text font-weight-bold px-1" style="margin-left:15%;margin-right:15%;">
            SOWerk makes it possible for service providers like you to connect with property & facility managers, become an approved vendor, and streamline work opportunities & connections. For those times when you need to promote your track-record and qualifications to a buyer not on SOWerk, well, we make that easy too. Your time is money, so it's time you use SOWerk.
          </p>
          <v-btn
            class="text-uppercase primary text-sm-body-2 mt-5"
            x-large
            width="40%"
            style="
              border-radius: 20px;
              font-weight: bold;
              font-size: 12px;
              min-width: 280px;
            "
            @click="$router.push('/register/provider')"
            >REGISTER NOW</v-btn
          >
        </v-col>
      </v-row>
    </v-container> -->

    <!-- NEW SECTION - JOIN STEPS -->
    <section class="joinservicesteps">
      <div class="joinservicestepscontainer" style="margin-top:15%">

        <h1 style="text-align:center; font-size:2.5rem; margin-top:2%; letter-spacing:2px;" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">Getting Started Is Easy</h1>
        <h1 style="text-align:center; font-size:2rem; margin-top:2%; letter-spacing:1px;" v-else>Getting Started Is Easy</h1>


        <!-- STEP 1 - NOT RENDERED SMALL OR EXTRA SMALL SCREEN SIZE! -->
        <div class="joinservicestepcontainerstep" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          <img
            class="containerImg"
            src="/vendor-LP-step1-image.png"
            alt="Profile dashboard Mockup"
          />
          <div>
            <h1>
              Step 1 <span><br/> Build a Profile</span>
            </h1>
            <p>
              Your SOWerk Profile is Your New Calling Card. Designed To Make You
              Look Good!
            </p>
            <p>
              Your company dashboard displays recent users that you have been in
              contact with along with a chart of your pending application
              requests.
            </p>
          </div>
        </div>

        <!-- STEP 1 - RENDERED ON SMALL OR EXTRA SMALL SCREEN SIZE! -->
        <div class="joinservicestepcontainerstep" v-else>
          <div>
            <h1>
              Step 1 <span><br/> Build a Profile</span>
            </h1>
            <p>
              Your SOWerk Profile is Your New Calling Card. Designed To Make You
              Look Good!
            </p>
            <p>
              Your company dashboard displays recent users that you have been in
              contact with along with a chart of your pending application
              requests.
            </p>
            <img
              class="containerImg"
              style="margin: auto; margin-bottom: 20px"
              src="/vendor-LP-step1-image.png"
              alt="Profile dashboard Mockup"
            />
          </div>
        </div>


        <!-- STEP 2 - NOT RENDERED ON SMALL OR EXTRA SMALL SCREEN SIZE! -->
        <div class="joinservicestepcontainerstep" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          <div class="stepTwo">
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
              Step 2 <span><br/> Apply With Buyers</span>
            </h1>
            <p>Apply For Businesses Looking For Your Products or Services.</p>
            <p>
              With just a few clicks your company is applying to become the next approved Vendor for a company. Additionally, your profile is also listed in the search directory so Businesses can find you and request your application.
            </p>
          </div>
          <img
            v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
            class="containerImg"
            id="profileDash"
            src="/vendor-LP-step2-image.png"
            alt="Buyer dashboard mockup"
          />
        </div>

        <!-- STEP 2 - RENDERED ON SMALL OR EXTRA SMALL SCREEN SIZE! -->
        <div class="joinservicestepcontainerstep" v-else>
          <div class="stepTwo">
            <h1>
              Step 2 <span><br/> Apply With Buyers</span>
            </h1>
            <p>Apply For Businesses Looking For Your Products or Services.</p>
            <p>
              With just a few clicks your company is applying to become the next approved Vendor for a company. Additionally, your profile is also listed in the search directory so Businesses can find you and request your application.
            </p>
            <img
              class="containerImg"
              style="margin: auto; margin-bottom: 20px"
              src="/vendor-LP-step2-image.png"
              alt="Profile Buyer dashboard mockup"
            />
          </div>
        </div>


        <div class="joinservicestepcontainerstep">
          <!-- <img
            class="containerImg"
            v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/leadMockup2.png"
            alt="leadMockup"
          />
          <img
            class="containerImg"
            v-else
            style="margin: auto; margin-bottom: 20px"
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/leadMockup2.png"
            alt="leadMockup"
          />
          <img
            class="containerImg"
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/notification2.png"
            id="notificationMock"
            alt="iphoneMockup"
          /> -->
          <!-- <div>
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
              Step 3 <span>- Generate Leads</span>
            </h1>
            <h1 v-else>
              Step 3 <span><br />- Generate Leads</span>
            </h1>
            <p>
              SOWerk makes it easy for you to get inbound service leads & we
              make it simple for you to show off your trackrecord (profile) to a
              potential customer.
            </p>
            <p>
              Easily share in one click with anyone outside of the platform via
              email or text.
            </p>
          </div> -->
        </div>
      </div>
      <button
        @click="$router.push('/register/provider')"
        style="font-weight: 600"
      >
        REGISTER NOW
      </button>
    </section>
    <!-- SERVICE PROVIDER QUESTIONS -->
    <OftenAskSP />
  </div>
</template>

<script>
import OftenAskSP from '~/components/landing/service-provider/OftenAskSP'
import VendorToolBoxes from '~/components/landing/service-provider/VendorToolBoxes'
import PricingLevels from '~/components/landing/general/PricingLevels'

  export default {
    layout: 'fullwidth',
    components:  {
      OftenAskSP,
      VendorToolBoxes,
      PricingLevels
    }
  }
</script>

<style scoped>
/* .skew-topLeft {
  position: relative;
}

.skew-topLeft:before {
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
} */

::v-deep .change-bcg {
  padding-top: 25px !important;
  margin-top: 0px !important;
}

#notificationMock {
  margin-left: -10%;
  margin-bottom: -5%;
  margin-top: 5%;
  bottom: 15%;
  width: 15% !important;
  height: 5%;
}
.stepTwo {
  margin-left: 5%;
}
.containerImg {
  margin-left: -10%;
  margin-right: 5%;
}
#profileDash {
  margin-left: 10%;
  margin-right: -5% !important;
}
.joinservicecontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.joinservicehero {
  width: 100%;
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/tape-measure-1726546copy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.joinservicehero h1 {
  font-size: 55px;
  text-align: center;
}
.joinservicehero p {
  font-size: 23px;
  text-align: center;
}
.joinservicehero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
  margin-top: 50px;
  margin-bottom: -320px;
}
.joinservicehero div {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.joinservicehero div button {
  background: transparent;
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 0px 5px 0px;
  font-size: 18px;
  width: 80%;
}
.joinservicetraits {
  position: relative;
}
.joinservicetraits:before {
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
}

.joinservicedescription {
  width: 100%;
  background: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 45px;
  padding-bottom: 30px;
}

.joinservicedescription p {
  width: 70%;
  font-size: 22px;
  text-align: center;
}

.joinservicedescription p:first-child {
  margin-top: 50px;
}

.joinservicedescription button {
  background: #a61c00;
  width: 40%;
  margin: 20px 0px 70px 0px;
  padding: 15px 0px 15px 0px;
  border-radius: 20px;
  font-size: 18px;
}

.joinservicesteps {
  background: linear-gradient(
      180deg,
      rgba(68, 68, 68, 1) 35%,
      rgba(43, 43, 43, 0.9) 100%
    ),
    url(https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
}

.joinservicesteps .joinservicestepscontainer {
  width: 70%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  margin-top: -30px;
  height: auto;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep img {
  width: 30%;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
  display: flex;
  width: 100%;
  margin: 30px 0px 30px 0px;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep div {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  span {
  color: #a61c00;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  h1 {
  font-size: 35px;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  p {
  font-size: 20px;
}
.joinservicesteps svg {
  width: 100%;
  height: 9vh;
  fill: #EDEDED;
}
.joinservicesteps button {
  background: #a61c00;
  color: white;
  padding: 20px 0px 20px 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 20px;
  width: 40%;
  font-size: 18px;
}

@media (max-width: 1080px) {
  .joinservicehero div h1 {
    font-size: 52px;
  }

  .joinservicehero div p {
    font-size: 22px;
  }
}

@media (max-width: 900px) {
  .joinservicehero div h1 {
    font-size: 50px;
  }

  .joinservicehero div p {
    font-size: 21px;
  }

  .joinservicedescription p {
    width: 80%;
    font-size: 17px;
    line-height: 24px;
  }

  .joinservicedescription button {
    padding: 12px 0px 12px 0px;
    width: 80%;
  }

  .joinservicesteps .joinservicestepscontainer {
    width: 80%;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    h1 {
    font-size: 32px;
    padding: 0px 25px 0px 25px;
  }
  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    p {
    font-size: 17px;
    padding: 0px 25px 0px 25px;
  }

  .joinservicesteps button {
    padding: 10px 0px 10px 0px;
    width: 80%;
  }
}

@media (max-width: 750px) {
  #notificationMock {
    display: none;
  }
  .joinservicehero div h1 {
    font-size: 45px;
  }

  .joinservicehero div p {
    font-size: 20px;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div {
    width: 90%;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    span {
    font-size: 25px;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    img {
    border: 1px solid #333;
    height: 250px;
    width: 80%;
  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep:nth-child(2) {
    flex-direction: column-reverse;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    h1 {
    width: 100%;
    padding: 20px 0 0 0;
    margin-left: 25px;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    p {
    font-size: 18px;
    /* padding: 0 0 0 40px; */
    text-align: justify;
    margin-top: 10px;
  }
}

@media (max-width: 680px) {
  .joinservicehero div h1 {
    font-size: 40px;
  }

  .joinservicehero div p {
    font-size: 19px;
  }

  .joinservicehero div button {
    font-size: 17px;
  }

  .joinservicedescription button {
    font-size: 17px;
  }
}
@media (max-width: 450px) {
  .joinservicedescription h2 {
    text-align: center;
  }
  .joinservicestepcontainerstep p {
    text-align: center !important;
    font-size: 1rem !important;
    padding: 0px !important;
  }
  .joinservicestepcontainerstep h1 {
    padding: 0px !important;
    margin-left: 10px !important;
    font-size: 30px !important;
  }

  .joinservicestepcontainerstep .stepTwo h1 {
    padding: 0px !important;
    margin-left: 0px !important;
    font-size: 30px !important;
  }
  .joinservicestepcontainerstep:nth-child(2) {
    margin-top: 0px !important;
  }
  .joinservicestepcontainerstep:nth-child(3) {
    margin-top: 0px !important;
  }
  .joinservicestepcontainerstep .stepTwo p {
    margin-left: -6px !important;
    margin-right: 6px !important;
  }
}

@media (max-width: 375px) {
  .joinservicestepscontainer {
    width: 90% !important;
  }
  .joinservicestepcontainerstep h1 {
    text-align: center !important;
    margin-left: 0px !important;
    line-height: 1.1em;
  }
  .joinservicehero h1 {
    line-height: 1.1em;
  }
}
</style>
