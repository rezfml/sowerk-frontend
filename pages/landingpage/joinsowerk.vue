<template>
  <div id="joincontainer">
    <!-- HERO -->
    <v-row
      style="background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg') no-repeat center center; -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; height: 80vh; max-height: 1200px;"
      align-content="center"
      class="pt-12"
    >
      <v-card
        max-height="400px"
        height="50vh"
        width="60%"
        max-width="1200px"
        style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;"
        class="d-flex flex-column justify-center align-center"
        color="rgba(0,0,0,0.7)"
      >
        <v-card-title style="width: 100%;"
          ><v-img
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png"
            alt="SOWerk Logo"
            contain
            height="80"
          ></v-img
        ></v-card-title>
        <v-card-text class="d-flex flex-column justify-center">
          <p class="white--text text-h3 text-center font-weight-bold">
            The Approved Vendor Platform
          </p>
          <p class="white--text text-center text-h5">
            The Link Between Service Providers & Businesses
          </p>
          <div
            style="display: flex; flex-direction: row; justify-content: center"
          >
            <v-btn
              class=" primary ma-3"
              x-large
              width="100%"
              max-width="350"
              style="border-radius: 20px"
              to="/landingpage/service-provider"
              >Service Providers</v-btn
            >
            <v-btn
              class=" primary ma-3"
              x-large
              width="100%"
              max-width="350"
              style="border-radius: 20px"
              to="/landingpage/property-manager"
              >Property & Facility Managers</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- SoWerk Link Section -->
    <v-container
      fluid
      grid-list-md
      text-center
      pb-8
      style="background:#a61c00; display: flex; flex-direction: column; justify-content: center; align-items: center"
      class="skew-top"
    >
      <p
        class="text-lg-h3 text-h4 font-weight-bold white--text"
        style="word-break: break-word; width: 80%; opacity: .8;"
      >
        SOWerk Is The Link Between Service Providers and Property & Facility
        Managers
      </p>
      <v-layout row justify-center justify-md-center style="max-width: 1280px;">
        <!-- CARD 1 -->
        <v-col cols="6" md="4" sm="6">
          <v-card
            align="center"
            class="mx-1"
            style="border-radius: 20px; height: 625px"
          >
            <v-card-text
              class="text-body-2 text-md-h6"
              style="font-weight:bold; color: black;"
              >Property & Facility Managers</v-card-text
            >
            <div
              style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"
                style="object-fit: contain;"
              ></v-img>
            </div>

            <div
              class="my-4 text-caption text-md-body-2"
              style="width: 80%; font-size: 1rem; text-align: justify"
            >
              Our business to business platform provides companies and property
              managers the tools to effiecently identify, vet, and manage
              service providers for each of their locations.
            </div>

            <hr style="width: 80%;border: .8px solid #A61C00;" />
            <div style="display: flex; width: 90%;  padding: 15px 10px 20px;">
              <ul
                style="text-align: left; list-style: none;"
                class="text-caption text-md-body-2  pl-0"
              >
                <li>- Retail & Hospitality Chains</li>
                <li>- Commercial Real Estate Properties</li>
                <li>- Manufacturing Facilities</li>
                <li>- Warehouse & Distribution</li>
                <li>- Governments</li>
                <li>- Restaurant Groups</li>
              </ul>
            </div>
            <v-btn
              style="color: white;background:#A61C00; border-radius: 20px"
              md-large
              small
              >Property & Facility Managers</v-btn
            >
          </v-card>
        </v-col>

        <!-- ARROWS -->
        <v-col
          cols="2"
          md="3"
          class="justify-center pa-sm-0 d-sm-none d-none d-md-flex"
          position="center"
        >
          <v-icon size="16vw" color="white">mdi-swap-horizontal</v-icon>
        </v-col>

        <!-- CARD 2 -->
        <v-col cols="6" md="4" sm="6">
          <v-card
            align="center"
            class="mx-1"
            style="border-radius: 20px; height:625px"
          >
            <v-card-text
              class="text-body-2 text-md-h6"
              style="font-weight:bold; color: black;"
              >Service Providers</v-card-text
            >
            <div
              style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
                style="object-fit: contain;"
              ></v-img>
            </div>

            <div
              class="my-4 text-caption text-md-body-2"
              style="width: 80%; font-size: 1rem; text-align: justify"
            >
              For service providers, SOWerk makes it possible for you to become
              an approved vendor, receive job request, and communicate with
              business owners
            </div>
            <hr style="width: 80%; border: .8px solid #A61C00;" />
            <div
              class="pl-3"
              style="display: flex; width: 90%; justify-content: space-between; padding: 15px 0;"
            >
              <ul
                class="text-caption text-md-body-2 pl-0"
                style="text-align: left; list-style: none;"
              >
                <li>- Electrician</li>
                <li>- HVAC</li>
                <li>- Plumber</li>
                <li>- Landscaper</li>
                <li>- Printing</li>
                <li>- Paving</li>
              </ul>
              <ul
                style="text-align: left; list-style: none;  pl-0"
                class="text-caption text-md-body-2"
              >
                <li>- Excavation</li>
                <li>- Pest Control</li>
                <li>- Waste</li>
                <li>- Engineer</li>
                <li>- General Contractor</li>
              </ul>
            </div>
            <v-btn
              style="color: white;background:#A61C00; border-radius: 20px"
              md-large
              small
              >Service Providers</v-btn
            >
          </v-card>
        </v-col>
      </v-layout>
    </v-container>

    <!-- <section class="joinlink">
      <h1>
        SOWerk Is The Link Between Service Providers and Property & Facility
        Managers
      </h1>
      <div class="joinlinkflex">
        <div class="joinlinkflexcolumn">
          <h4>Property & Facility Managers</h4>
          <img
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"
          />
          <p>
            Our business to business platform provides companies and property
            managers the tools to effiecently identify, vet, and manage service
            providers for each of their locations.
          </p>
          <ul>
            <li>Retail & Hospitality Chains</li>
            <li>Commercial Real Estate Properties</li>
            <li>Manufacturing Facilities</li>
            <li>Warehouse & Distribution</li>
            <li>Governments</li>
            <li>Restaurant Groups</li>
          </ul>
          <button @click="$router.push('/register/property-manager')">
            PROPERTY & FACILITY MANAGERS
          </button>
        </div>
        <img />
        <div class="joinlinkflexcolumn">
          <h4>Service Providers</h4>
          <img
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
          />
          <p>
            For service providers, SOWerk makes it possible for you to become an
            approved vendor, receive job request, and communicate with business
            owners
          </p>
          <div>
            <ul>
              <li>Electrician</li>
              <li>HVAC</li>
              <li>Plumber</li>
              <li>Landscaper</li>
              <li>Printing</li>
              <li>Paving</li>
            </ul>
            <ul>
              <li>Excavation</li>
              <li>Pest Control</li>
              <li>Waste</li>
              <li>Engineer</li>
              <li>General Contractor</li>
            </ul>
          </div>
          <button @click="$router.push('/register/provider')">
            SERVICE PROVIDERS
          </button>
        </div>
      </div>
    </section> -->

   <!-- All Reviews Section -->
    <section class="joincaroselreview">
      <AllReviews v-bind:allReviews="allReviews"></AllReviews>
    </section>

    <!-- Join Traits Section -->
    <v-container
    fluid
    grid-list-md
    text-center
    pb-8
    style="background:#2B2B2B; display: flex; justify-content: center"
  >
    <v-layout row style="max-width: 1280px;">
      <!-- CARD 1 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Simple & Fast</v-card-text
          >
          <div
            class="my-4"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            Our simple design makes connecting with other companies quick and
            painless while using either the desktop or mobile app.
          </div>
        </v-card>
      </v-col>

      <!-- CARD 2 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Powerful Tools</v-card-text
          >
          <div
            class="my-6"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            SOWerk is designed from it’s core to solve for property and facility
            management by providing the tools to vet & communicate grow service
            providers.
          </div>
        </v-card>
      </v-col>

      <!-- CARD 3 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Automated</v-card-text
          >
          <div
            class="my-4"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            SOWerk has many automated features that help make everyone’s life
            easy, like automatically requiring service providers to requalify or
            automatically updating a service provider’s profile every time they
            achieve approved vendor status.
          </div>
        </v-card>
      </v-col>

      <!-- CARD 4 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Convenient</v-card-text
          >
          <div
            class="my-4"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            For the facility manager in the middle of the night that needs to
            contact all your approved plumbers for help or a local service
            provider that powers his business through a smart phone, SOWerk is
            design to be convenient.
          </div>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>

    

    <section class="joinvideo">
      <video></video>
    </section>

    <section class="joinconnection">
      <div class="joinconnectioncolumn">
        <h1>Property & Facility</h1>
        <div class="joinconnectioncontainer border1">
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
            />
            <h3>1. Create Account and Vet Vendors</h3>
            <p>
              In less than 15 minutes, you can have multiple locations setup
              with dedicated staff accounts and live questionnaires vetting
              local & national service providers.
            </p>
          </div>
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
            />
            <h3>2. Vendor Management & RFP</h3>
            <p>
              When you need a service at one of your properties, SOWerk makes it
              easy to communicate in one click to your approved vendors the
              request for a bid.
            </p>
          </div>
          <button @click="$router.push('/landingpage/property-manager')">
            See All Features
          </button>
        </div>
      </div>
      <img />
      <div class="joinconnectioncolumn">
        <h1>Service Providers</h1>
        <div class="joinconnectioncontainer border2">
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_1_copy.png"
            />
            <h3>1. Build A Profile</h3>
            <p>
              SOWerk makes it easy & quick for you to show off your brand,
              company background, and we help promote all companies where you
              are an approved vendor. Your SOWerk profile is both easy and
              powerful.
            </p>
          </div>
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profilecopy.png"
            />
            <h3>2. Approved Vendor Status</h3>
            <p>
              Use your profile to qualify for approve vendor status in as little
              as one click.
            </p>
          </div>
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/appcopy.png"
            />
            <h3>3. Get The Job</h3>
            <p>
              We make it easy and powerful for businesses to communicate their
              needs to approved vendors. We also make it easy for you to react
              quickly with a bid.
            </p>
          </div>
          <button @click="$router.push('/landingpage/service-provider')">
            See All Features
          </button>
        </div>
      </div>
    </section>

    <Reviews v-bind:reviews="reviews"></Reviews>

    <OftenAskPF></OftenAskPF>
    <OftenAskSP></OftenAskSP>
  </div>
</template>

<script>
import Reviews from '../../components/landing/general/Reviews'
import AllReviews from '../../components/landing/general/AllReviews'
import OftenAskPF from '../../components/landing/property-manager/OftenAskPF'
import OftenAskSP from '../../components/landing/service-provider/OftenAskSP'


export default {
  data: () => ({
    allReviews: [],
    reviews: [],
  }),
  components: {
    Reviews,
    AllReviews,
    OftenAskPF,
    OftenAskSP,
  },
  mounted() {
    this.getReviews()
    this.getAllReviews()
  },
  methods: {
    async getAllReviews() {
      let { data, status } = await this.$http
        .get(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/reviewsLimit?limit=20&offset=0'
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.allReviews = data
        console.log(this.allReviews, 'allReviews')
      })
    },
    async getReviews() {
      let { data, status } = await this.$http
        .get(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/reviewsLimitDesc?limit=2&offset=0'
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.reviews = data
        console.log(this.reviews, 'reviews')
      })
    },
  },
}
</script>

<style scoped>
#joincontainer {
  width: 100%;
  padding: 0px !important;
  font-family: Roboto;
}

.skew-top {
  position: relative;
  z-index: 30;
}

.skew-top:before {
  position: absolute;
  content: '';
  background-color: #a61c00;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -20;
  transform-origin: top left;
  transform: skewY(-2deg);
}

.joinlink {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #a61c00;
}
.joinlink h1 {
  color: white !important;
  opacity: 0.8;
  font-size: 55px;
  text-align: center;
  width: 70%;
  margin: 20px 0px 20px 0px;
}
.joinlinkflex h4 {
  font-size: 22px;
  margin: 10px 0px 10px 0px;
}
.joinlinkflex p {
  font-size: 18px;
  width: 90%;
  text-align: center;
  border-bottom: 1px solid #a61c00;
}
.joinlinkflex p {
  padding-bottom: 40px;
}
.joinlinkflex {
  display: flex;
  width: 80%;
  justify-content: center;
}
.joinlink .joinlinkflex .joinlinkflexcolumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  margin: 10px 5% 20px 5%;
  border-radius: 20px;
  background: white;
  text-align: center;
  padding: 10px;
  max-width: 400px;
}
.joinlinkflexcolumn:nth-child(1) p {
  padding-bottom: 20px !important;
}
.joinlink .joinlinkflex .joinlinkflexcolumn img {
  width: 50%;
  margin: 10px 0px 10px 0px;
}
.joinlinkflexcolumn div {
  display: flex;
  justify-content: center;
}
.joinlinkflexcolumn div ul {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joinlinkflexcolumn ul {
  font-size: 18px !important;
}
.joinlinkflexcolumn button {
  background: #a61c00;
  width: 90%;
  margin: 20px 0;
  padding: 15px 10px 15px 10px;
  color: white;
  border-radius: 20px;
  font-size: 15px;
  font-family: Roboto;
}

.joincaroselreview {
  background: #151515;
  height: auto;
  width: 100%;
  padding: 0px 0px 100px 0px;
}

.joinvideo {
  background: #151515;
  height: 30vh;
}

.joinconnection {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'),
    linear-gradient(#444444, #2b2b2b);
  background-size: cover;
}
.joinconnection h1 {
  color: white;
  font-size: 50px;
  text-align: center;
  margin: 0px 0px 20px 0px;
}

.joinconnection .joinconnectioncolumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 20px 10px 20px 10px;
}
.border1 {
  border-top: 1px solid #a61c00;
  border-left: 1px solid #a61c00;
  border-right: none !important;
  border-bottom: 1px solid #a61c00;
  padding: 20px 10px 20px 10px;
}
.border2 {
  border-top: 1px solid #a61c00;
  border-right: 1px solid #a61c00;
  border-bottom: 1px solid #a61c00;
  padding: 20px 10px 20px 10px;
}
.joinconnectioncolumn .joinconnectioncontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox {
  background: white;
  border-radius: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px 0px 10px 0px;
}
.joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox h3 {
  font-size: 23px;
  margin: 10px 0px 20px 0px;
}
.joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox p {
  font-size: 20px;
}
.joinconnectioncontainerbox img {
  width: 50%;
}
.joinconnectioncolumn .joinconnectioncontainer button {
  background: #a61c00;
  color: white;
  border-radius: 20px;
  padding: 10px 0px 10px 0px;
  width: 60%;
  font-size: 18px;
}

.landinghomereview {
  background: #a61c00;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.landinghomereview h1 {
  font-size: 55px;
}
.landinghomereview p {
  font-size: 18px;
}

@media (max-width: 1280px) {
  .joinlink h1 {
    font-size: 36px;
  }

  .joinlinkflex p {
    font-size: 16px;
  }

  .joinlinkflexcolumn ul li {
    font-size: 16px;
  }

  .joinlinkflexcolumn button {
    font-size: 14px;
  }

}

@media (max-width: 1060px) {
  .joinlinkflex {
    width: 90%;
  }

  .joinlinkflexcolumn button {
    font-size: 13px;
  }
  .joinconnectioncolumn
    .joinconnectioncontainer
    .joinconnectioncontainerbox
    h3 {
    font-size: 20px;
  }

  .joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox p {
    font-size: 16px;
  }
}

@media (max-width: 950px) {
  .joinlinkflex {
    width: 100%;
  }

  .joinlink .joinlinkflex .joinlinkflexcolumn {
    margin: 10px 5% 20px 5%;
    width: 37%;
  }

  .joinlink h1 {
    font-size: 32px;
  }

  .joinlinkflex h4 {
    font-size: 20px;
  }

  .joinlink .joinlinkflex .joinlinkflexcolumn img {
    width: 45%;
  }

  .joinlinkflexcolumn ul li {
    font-size: 15px;
  }

  .joinlinkflexcolumn button {
    font-size: 12px;
  }

  .joinconnection h1 {
    font-size: 48px;
  }

  .joinconnection .joinconnectioncolumn {
    width: 40%;
  }
  .joinconnectioncontainerbox img {
    width: 40%;
  }

}

@media (max-width: 850px) {
  .joinlink h1 {
    width: 80%;
  }

  .joinlinkflex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .joinlink .joinlinkflex .joinlinkflexcolumn {
    margin: 10px 2% 10px 2%;
    width: 100%;
    max-width: 70%;
  }

  .joinlink .joinlinkflex .joinlinkflexcolumn img {
    width: 28%;
  }
}

@media (max-width: 680px) {
  .joinlink h1 {
    font-size: 26px;
    width: 85%;
  }

  .joinlinkflex {
    width: 100%;
  }
  
  .joinconnection h1 {
    font-size: 42px;
  }
  .joinconnection {
    flex-direction: column;
  }

  .joinconnection .joinconnectioncolumn {
    width: 80%;
  }

  .joinconnection h1 {
    font-size: 40px;
    width: 100%;
  }
}
</style>
