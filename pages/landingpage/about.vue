<template>
  <div class="head" id="aboutcontainer">
    <section class="abouthero">
      <h1>About SOWerk</h1>
    </section>
<v-container fluid style="
    background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%); 
    transform-origin: top left;
    transform: skewY(-2deg); 
    margin-top:-12%;" class="py-16">
  <v-row justify="center"
  style="
    transform: skewY(2deg); ">
      <v-flex sm11>
        <v-row >
          <v-col cols="12" md="6" style="position: relative;">
            <v-img src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png" class="device--mac"></v-img>
            <v-img src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png" class="device--iphone"></v-img>
          </v-col>
          <v-col cols="12" md="6" class="mt-16 px-16 px-md-3 text-center text-md-left" align-self="center" style="color: white;">
            <p class="text-h4 font-weight-bold">It all started with "What if..."</p>
            <p> What if we could simplify the business connection between service providers and property & facility managers?</p>
             <p>
            Could we make it easier for both parties to manage relationships and
            do business?
          </p>
          <p>
            Today, SOWerk is proud to empower relationships, make life easier,
            and complete the link between property/facility owners and approved
            vendors.
          </p>
            <v-row >
              <v-flex sm11 offset-sm-1 text-center text-md-left>
                <v-btn  class="white--text py-5 my-1 mx-1 text-subtitle-2 px-lg-10 px-15" small outlined rounded to="/landingpage/service-provider"> Learn More - Service Provider</v-btn>
                <v-btn class="white--text py-5 my-1 mx-1 text-subtitle-2 px-lg-10 px-15" small outlined rounded to="/landingpage/property-manager"> Learn More - Property & Facility</v-btn>
              </v-flex>
            </v-row>
          </v-col>
        </v-row>
    </v-flex>
    </v-row>
    </v-container>

    <!-- <section class="aboutdescription">
      <div class="aboutdescriptionflex">
        <div class="aboutdescriptionimg">
          <img
            class="aboutdescriptionimg1"
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png"
          />
          <img
            class="aboutdescriptionimg2"
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png"
          />
        </div>
        <div class="aboutdescriptiontext">
          <h1>It all started with “What If…”</h1>
          <p>
            What if we could simplify the business connection between service
            providers and property & facility managers?
          </p>
          <p>
            Could we make it easier for both parties to manage relationships and
            do business?
          </p>
          <p>
            Today, SOWerk is proud to empower relationships, make life easier
            and complete the link between property/facility owners and approved
            vendors.
          </p>
          <p>More work and better work get done through SOWerk.</p>
          <div class="aboutbuttoncontainer">
            <button  @click="$router.push('/landingpage/service-provider')">LEARN MORE - SERVICE PROVIDER</button>
            <button  @click="$router.push('/landingpage/property-manager')">LEARN MORE - PROPERTY & FACILITY</button>
          </div>
        </div>
      </div>
    </section> -->

<v-flex style="background-image: linear-gradient(rgba(43,43,43,1) 0%, rgba(68,68,68,0.93) 100%), url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'); background-position: bottom; background-size: 100%; background-repeat: repeat-x;
margin-top: -15%;
background-size: contain;
padding-top: 5%;">

      <v-row align-content="center" justify="center" 
      style="margin-top:10%">
      <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '70%' : '80%'" class="py-16 my-12" style="border-radius: 20px;" align="center">
        <v-card-title v-if="!$vuetify.breakpoint.mobile" class="mx-auto text-md-h4 text-h6" style="width: 80%; position: absolute; top: -30px; left: 10%; border-radius: 20px; background: #47494e; word-wrap: break-word"><p class="mx-auto mb-0 text-center white--text"  >The Approved Vendor Platform</p></v-card-title>
        <v-card-title v-else class="mx-auto text-md-h4 text-h6" style="width: 80%; position: absolute; top: -30px; left: 10%; border-radius: 20px; background: #47494e; word-wrap: break-word;"><p class="mx-auto mb-0 text-center white--text"  >The Approved <br/>Vendor Platform</p></v-card-title>
        <v-card-text style="width: 80%">
          <v-row >
            <v-col cols="4" class="d-flex flex-column justify-center" position="center" style="border: 2.5px solid #a61c00; border-radius: 20px;">
              <v-img  src="https://sowerk-images.s3.us-east-2.amazonaws.com/property_managers_red_sketch.png" contain ></v-img>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center pa-sm-0" position="center">
              <v-icon size="16vw" color="primary">mdi-swap-horizontal</v-icon>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center" position="center" style="border: 2.5px solid #a61c00; border-radius: 20px;">
              <v-img src="https://sowerk-images.s3.us-east-2.amazonaws.com/service_provider_red_sketch.png" contain></v-img>
            </v-col>
          </v-row>
          <v-row style="width: 100%;" class="mx-auto mt-8">
            <p class="text-center text-md-h6">SOWerk is the link between service providers (local or national) and
          property & facility managers. Our business-to-business platform
          provides companies and property managers the tools to efficiently
          identify, vet, and manage service providers for each of their
          locations. For service providers, SOWerk makes it possible for you to
          become an approved vendor, recieve job requests, and communicate with
          business owners.</p>
            <v-btn color="primary" class="mx-auto mt-5" :width="$vuetify.breakpoint.mdAndUp ? '40%' : '50%'" large rounded to="/landingpage/joinsowerk">JOIN SOWERK</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    </v-flex>
</v-container>
<!--
    <OftenAskPF></OftenAskPF>
    <OftenAskSP></OftenAskSP/>
-->
  </div>
</template>

<script>

//import OftenAskPF from '../../components/landing/property-manager/OftenAskPF'
//import OftenAskSP from '../../components/landing/service-provider/OftenAskSP'

export default {
  layout: 'fullwidth',
  components: {
    //OftenAskPF,
    //OftenAskSP,
  },
}
</script>

<style scoped>
.device--mac >>> .v-image__image.v-image__image--cover {
  background-size: 170% !important;
}

.device--iphone {
  position: absolute;
  width: 75%;
  bottom: -20%;
  left: -25%;
}

.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}

/* .skew-top{
  position: relative;
  z-index: 30;
}

.skew-top:before{
  position: absolute;
  content: '';
  background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -20;
  transform-origin: top left;
  transform: skewY(-2deg);
} */

#aboutcontainer {
  width: 100%;
  padding: 0px !important;
}

.abouthero {
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/handshake.png');
  background-size: cover;
  object-fit: contain;
  /* background-size: 100%; */
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 5%;
}
.abouthero h1 {
  color: white;
  width: 50%;
  text-align: center;
  margin: 150px 0px 150px 0px;
  margin: 200px 0px 200px 0px;
  font-size: 55px;
}

.aboutdescription {
  background: #a61c00;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  color: white;
  padding-bottom: 100px;
  
}

.aboutdescription:before {
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
.aboutdescriptionflex {
  display: flex;
  width: 90%;
  justify-content: center;
  border-radius: 20px;
  margin: -50px 0px 100px 0px;
  z-index: 100;
}

.aboutdescriptionflex .aboutdescriptionimg {
  width: 40%;
  display: flex;
  margin-bottom: -300px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg1 {
  width: 50%;
  height: 350px;
  z-index: 1;
  position: relative;
  top: 250px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
  width: 150%;
  position: relative;
  left: -200px;
  top: -250px;
}
.aboutdescriptiontext {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 35px;
}
.aboutdescriptionflex h1 {
  font-size: 35px;
  align-self: flex-start;
}
.aboutdescriptionflex p {
  font-size: 18px;
  align-self: flex-start;
}
.aboutdescription svg {
  width: 100%;
  height: 9vh;
  fill: #2b2b2b;
}
.aboutbuttoncontainer {
  display: flex;
  width: 100%;
}
.aboutdescriptionflex button {
  background: transparent;
  color: white;
  border: 1px solid white;
  width: 45%;
  padding: 10px 0px 10px 0px;
  font-size: 18px;
  border-radius: 20px;
  margin: 0px 2.5% 0px 2.5%;
}
@media (max-width: 1350px) {
  .abouthero{
    margin-bottom: -12.5%;
  }
  }

@media (max-width: 800px) {
  .abouthero{
    margin-bottom: -20%;
  }
  .abouthero h1 {
    font-size: 50px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    width: 200%;
    position: relative;
    left: -140px;
    top: -200px;
  }

  .aboutdescriptiontext[data-v-75c9003b] {
    width: 90%;
  }

  .aboutdescriptionflex h1[data-v-75c9003b] {
    width: 100%;
    text-align: center;
    font-size: 33px;
    margin: 15px 0px 12px 0px;
  }

  .aboutdescriptionflex p[data-v-75c9003b] {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    line-height: 24px;
  }

  .aboutdescriptionflex[data-v-75c9003b] {
    margin: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .aboutbuttoncontainer[data-v-75c9003b] {
    margin: 15px 0;
    justify-content: center;
  }

  .aboutdescriptionimg {
    width: 500px;
  }

  img.aboutdescriptionimg2 {
    object-fit: contain;
    width: 700px;
    height: 400px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    width: 100%;
    font-size: 16px;
    padding: 5px 10px;
  }
}

@media (max-width: 680px) {
    .abouthero{
    margin-bottom: -30%;
  }
  .abouthero h1 {
    font-size: 42px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 35px;
  }

  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    font-size: 15px;
  }
}

@media (max-width: 580px) {
  .abouthero{
    margin-bottom: -30%;
  }
  .abouthero h1 {
    font-size: 38px;
  }

  .aboutdescriptionflex {
    width: 100%;
  }

  .aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 28px;
  }
  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button {
    font-size: 13px;
  }
}
</style>
