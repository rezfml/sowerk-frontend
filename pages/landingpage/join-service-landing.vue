<template>
  <div class="joinservicecontainer" style=overflow-x:hidden>
    <section class="joinservicehero">
      <div>
        <h1>Service & Product Vendors</h1>
        <p>Your Tools For Business Relationships</p>
        <button @click='$router.push("/register/provider")'>Get Started Now</button>
      </div>
      <!-- <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg> -->
    </section>

    <v-container fluid style="background: linear-gradient(#a61c00 0%, #530e00 100%);">
      <v-row>
        <v-col cols="12">
          <p class="mobile-title text-center text-lg-h3 text-sm-h4 font-weight-bold white--text pt-10 pb-2 pb-sm-10">SOWerk Was Founded To Help Any Size Service Provider or Supplier Find New Customers & Elevate Existing Business Relationships</p>
        </v-col>
      </v-row>
    </v-container>

<!-- VENDOR TOOLBOXES SECTION -->
  <VendorToolBoxes/>


  <!-- PRICING LEVELS -->
  <div class="PricingContainer  d-flex justify-space-around" v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">

    <section class="packages" v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">

      <v-row>
        <v-col cols="12"  >
        <v-card-title style="width:50vw; font-size:3vw;color:#a61c00;" class="d-flex justify-center" color="primary">Service Provider Pricing Levels</v-card-title>
        <!--<v-row class="d-flex justify-center my-3">
        <v-btn  @click='$router.push("/register/provider")' style="width:50%;border-radius:20px;background-color:#a61c00; color:white; height:3vw;">GET STARTED NOW</v-btn>
        </v-row>-->
        </v-col>
      </v-row>

    <v-row style="width:80%;" class="d-flex justify-space-between">
      <v-card  outlined class="basicPackage" style="border-radius:20px; width:18%;border-color:#707070;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center" style="font-size:.8vw">SOWERK BASIC</v-card-title>
        <v-card-subtitle class="d-flex justify-center mt-10" style="font-size:3vw">FREE</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-10 mb-n2" height="12" style="width:90%;margin-left:5%;margin-bottom:20px;"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.75;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
         <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%; font-size:.7vw;color:#707070;">
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">1 User License</v-list-item>
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade1" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK STARTER</v-card-title>
        <!--<v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw"></v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$8.33<span class="ml-n8" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $100.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">1</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">5</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$1.50</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade2" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK ADVANCED</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw">SOWERK ADVANCED</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$20.83<span class="ml-n2" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $250.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">2</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">20</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$1.00</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade3" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK PRO</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw">SOWERK PRO</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$41.67<span class="ml-n6" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">5</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">50</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$0.75</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade4" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK NATIONAL</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw">SOWERK NATIONAL</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$125.00<span class="ml-n0" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $1,500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">15</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">250</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$0.50</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>


      </v-row>
      <v-row style="width:80%;" class="d-flex flex-column justify-center" >


      <v-card outlined  class="upgrade5 my-6 mt-6"  style="border-radius:20px; width:100%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mb-4" style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;font-weight:bold">SOWERK ENTERPRISE</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center mt-16" style="font-size:1vw;">SOWERK ENTERPRISE</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">Custom Rate</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-4 mb-" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;color:black">Does you’re business require a special connection and pricing rate? At SOWerk, we are happy to work with you to make sure we develop a perfect plan based around your needs.</v-card-text>
      </v-card>
      </v-row>
    </section>

<!-- NEW SECTION TOOLS TO GROW -->
  </div>
    <section class="joinservicedescription">
      <h2 class="text-h4">Getting Started Is FREE And Easy!</h2>
      <p></p>
      <button @click='$router.push("/landingpage/PricingPage")'>LEARN MORE ABOUT SOWERK PRICING</button>
    </section>


<!-- NEW SECTION - JOIN STEPS -->
    <section class="joinservicesteps">
      <div class="joinservicestepscontainer">
        <div class="joinservicestepcontainerstep">
          <img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/profileDash2.png" alt="Profile dashboard Mockup"/>
          <img v-else class="containerImg" style="margin:auto;margin-bottom:20px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/profileDash2.png" alt="Profile dashboard Mockup"/>
          <div>
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">Step 1 <span>- Build a Profile</span></h1>
            <h1 v-else >Step 1 <span ><br/>- Build a Profile</span></h1>
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
        <div class="joinservicestepcontainerstep">
          <div class="stepTwo">
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">Step 2 <span>- Apply With Buyers</span></h1>
            <h1 v-else>Step 2 <span><br/>- Apply With Buyers</span></h1>
            <p>Apply For Businesses Looking For You With One Click.</p>
            <p>
              With the click of one button, your company can apply to work for
              large businesses located in your area. This process makes it easy
              for you and the Buyer to connect and review each others profiles
              hassle free.
            </p>
          </div>
          <img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" class="containerImg" id="profileDash"  src="https://sowerk-images.s3.us-east-2.amazonaws.com/profiledashboardmockup2.png" alt="Buyer dashboard mockup"/>
          <img v-else class="containerImg" style="margin:auto;margin-bottom:20px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/profiledashboardmockup2.png" alt="Profile Buyer dashboard mockup"/>
        </div>
        <div class="joinservicestepcontainerstep">
          <img class="containerImg" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"  src="https://sowerk-images.s3.us-east-2.amazonaws.com/leadMockup2.png" alt="leadMockup" />
          <img class="containerImg" v-else style="margin:auto;margin-bottom:20px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/leadMockup2.png" alt="leadMockup" />
          <img class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/notification2.png" id="notificationMock" alt="iphoneMockup" />
          <div>
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">Step 3 <span>- Generate Leads</span></h1>
             <h1 v-else>Step 3 <span><br/>- Generate Leads</span></h1>
            <p>
              SOWerk makes it easy for you to get inbound service leads & we
              make it simple for you to show off your trackrecord (profile) to a
              potential customer.
            </p>
            <p>
              Easily share in one click with anyone outside of the platform via
              email or text.
            </p>
          </div>
        </div>
      </div>
      <button @click='$router.push("/register/provider")' style="font-weight:600">REGISTER NOW</button>

    </section>
<!-- SERVICE PROVIDER QUESTIONS -->
<OftenAskSP/>
    
  </div>
</template>

<script>
import OftenAskSP from '~/components/landing/service-provider/OftenAskSP'
import VendorToolBoxes from '~/components/landing/service-provider/VendorToolBoxes'

  export default {
    layout: 'fullwidth',
    components:  {
      OftenAskSP,
      VendorToolBoxes
    }
  }
</script>

<style scoped>
.PricingContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.packages{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
}
#notificationMock{
  margin-left:-10%;
  margin-bottom:-5%;
  margin-top: 5%;
  bottom:15%;
  width:15% !important;
  height: 5%;
}
.stepTwo{
  margin-left: 5%;
}
.containerImg{
  margin-left:-10%;
  margin-right:5%;
}
#profileDash{
  margin-left:10%;
  margin-right:-5% !important;
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
  background:inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform:skewY(-2deg);
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
  background:linear-gradient(
      180deg,
      rgba(68, 68, 68, 1) 35%,
      rgba(43, 43, 43, 0.9) 100%
    ),url(https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png);
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
  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep div p {
    font-size: 17px;
    padding: 0px 25px 0px 25px;
  }

  .joinservicesteps button {
 padding: 10px 0px 10px 0px;
 width: 80%;
  }
}


@media (max-width: 750px) {
  #notificationMock{
    display:none;
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

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep img {
    border: 1px solid #333;
    height: 250px;
    width: 80%;

  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 0
  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep:nth-child(2) {
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

  @media(max-width: 375px) {
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
