<template>
  <div id="joincontainer">
    <!-- HERO SECTION -->
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
        :width="$vuetify.breakpoint.lgAndUp ? '70%' : '100%'"
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
          <p
            class="white--text text-h4 text-md-h3 text-center font-weight-bold"
          >
            The Approved Vendor
          </p>
          <p class="white--text text-center text-h6 text-md-h5">
            The Link Between Service Providers & Businesses
          </p>

         <div class="text-center">
            <v-btn
              class=" primary ma-3"
             large
              width="90%"
              max-width="350"
              style="border-radius: 16px"
              to="/landingpage/service-provider"
              >Service Providers</v-btn
            >
            <v-btn
              class=" primary ma-3"
              large
              width="90%"
              max-width="350"
              style="border-radius: 16px"
              to="/landingpage/property-manager"
              >Property & Facility Managers</v-btn
            >

          </div>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- SOWERK LINK SECTION -->
    <v-container
      fluid
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

      <v-row style="max-width: 1280px;" class="justify-center">
        <!-- CARD 1 -->
        <v-col cols="12" sm="8" md="5">
          <v-card
            align="center"
            class="ma-1"
            style="border-radius: 20px; height: 100%"
          >
            <v-card-title>
              <p class="mx-auto text-center">Property & Facility Manager</p>
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="6" offset="3">
                  <v-img
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"
                    style="object-fit: contain; width: 100%;"
                  ></v-img>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-justify mx-auto my-2"
                    style="max-width: 350px; width: 80%"
                  >
                    Our business to business platform provides companies and
                    property managers the tools to effiecently identify, vet,
                    and manage service providers for each of their locations.
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col class="12 mx-auto" style="max-width: 350px;">
                  <ul style="list-style: none; text-align: left">
                    <li>- Retail & Hospitality Chains</li>
                    <li>- Commercial Real Estate Properties</li>
                    <li>- Manufacturing Facilities</li>
                    <li>- Warehouse & Distribution</li>
                    <li>- Governments</li>
                    <li>- Restaurant Groups</li>
                  </ul>
                </v-col>

                <v-col cols="12">
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px"
                    block
                    large
                    to="/landingpage/property-manager"
                    >Property & Facility Managers</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- ARROWS - hidden on mobile for now-->
        <v-col
          cols="2"
          md="2"
          class="justify-center pa-sm-0 d-sm-none d-none d-md-flex"
          position="center"
        >
          <v-icon size="16vw" color="white">mdi-swap-horizontal</v-icon>
        </v-col>

        <!-- CARD 2 -->
        <v-col cols="12" sm="8" md="5">
          <v-card
            align="center"
            class="ma-1"
            style="border-radius: 20px; height: 100%"
          >
            <v-card-title>
              <p class="mx-auto text-center">Service Providers</p>
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="6" offset="3">
                  <v-img
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
                    style="object-fit: contain; width: 100%;"
                  ></v-img>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-justify mx-auto my-2"
                    style="max-width: 350px; width: 80%"
                  >
                    For service providers, SOWerk makes it possible for you to
                    become an approved vendor, receive job request, and
                    communicate with business owners
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col cols="12 mx-auto" style="max-width: 350px;">
                  <ul
                    style="column-count: 2; list-style: none; text-align: left"
                  >
                    <li>- Electrician</li>
                    <li>- HVAC</li>
                    <li>- Plumber</li>
                    <li>- Landscaper</li>
                    <li>- Printing</li>
                    <li>- Paving</li>
                    <li>- Excavation</li>
                    <li>- Pest Control</li>
                    <li>- Waste</li>
                    <li>- Engineer</li>
                    <li>- Contractor</li>
                  </ul>
                </v-col>

                <v-col cols="12 mt-4">
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px"
                    block
                    large
                    to="/landingpage/service-provider"
                    >Service Providers</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

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
              SOWerk is designed from it’s core to solve for property and
              facility management by providing the tools to vet & communicate
              grow service providers.
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
              easy, like automatically requiring service providers to requalify
              or automatically updating a service provider’s profile every time
              they achieve approved vendor status.
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
    <!-- BUSINESS & VENDORS JOIN CONNECTION SECTION -->
    <PFandVJoinConnection/>
    <!-- REVIEWS SECTION -->
    <Reviews v-bind:reviews="reviews"></Reviews>
    <!-- BUSINESS & VENDORS QUESTIONS -->
    <!-- <PFandVQuestionsAsked/> -->
    <OftenAskPF />
    <OftenAskSP />
   
  </div>
</template>

<script>
import Reviews from '../../components/landing/general/Reviews'
import AllReviews from '../../components/landing/general/AllReviews'
import PFandVJoinConnection from '../../components/landing/general/PFandVJoinConnection'
// import PFandVQuestionsAsked from '../../components/landing/general/PFandVQuestionsAsked'
import OftenAskPF from '~/components/landing/property-manager/OftenAskPF';
import OftenAskSP from '~/components/landing/service-provider/OftenAskSP';


export default {
  layout: 'fullwidth',
  data: () => ({
    allReviews: [],
    reviews: [],
  }),
  components: {
    Reviews,
    AllReviews,
    PFandVJoinConnection,
    OftenAskSP,
    OftenAskPF
  },
  mounted() {
    this.getReviews()
    this.getAllReviews()
  },
  methods: {
    async getAllReviews() {
      let { data, status } = await this.$http
        .get(
          'https://www.sowerkbackend.com/api/reviewsLimit?limit=20&offset=0'
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
          'https://www.sowerkbackend.com/api/reviewsLimitDesc?limit=2&offset=0'
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

.jointraits div {
  flex: 0 50%;
}

</style>
