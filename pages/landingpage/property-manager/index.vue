<template>
  <div>
    <v-container
      fluid
      class="pt-0 mt-0"
      style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/macbook-336704copy.jpg') no-repeat center center; background-size: cover; height: 80vh; display: flex; justify-content: center; align-items: center"
    >
      <v-row align="center" justify="center">
        <v-card
          max-height="400px"
          height="50vh"
          :width="$vuetify.breakpoint.lgAndUp ? '60%' : '100%'"
          style="border-radius: 16px; "
          class="d-flex flex-column justify-center align-center"
          color="rgba(0,0,0,0.7)"
        >
          <v-card-text style="width: 100%">
            <p
              class="white--text text-h4 text-md-h3 text-center font-weight-bold"
            >
              Get Connected Now
            </p>
            <p class="white--text text-center text-h6 text-md-h5">
              Search SOWerk's Nationwide Database
            </p>
          </v-card-text>
          <v-card-text>
            <div class="text-center">
              <v-btn
                class="primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                >Search All Businesses</v-btn
              >
              <v-btn
                class="primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                to="/landingpage/joinsowerk"
                >JOIN SOW</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>

    <!--    <section class="splist">-->
    <!--      <div class="splistcontainer">&lt;!&ndash;This will be a request to /companies/limit/type/:type SERVICE PROVIDER TYPE 0&ndash;&gt;-->
    <!--        <div v-for="property in propertymanagers">-->
    <!--          <img :src="property.imgUrl"/>-->
    <!--          <h3>{{property.account_name}}</h3>-->
    <!--          <p>{{property.city}}, {{property.state}}</p>-->
    <!--          <p>{{property.description}}</p>-->
    <!--          <a :href="'property-manager/' + property.id"><button>View Profile</button></a>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <button>All Property & Facility Accounts</button>-->
    <!--    </section>-->

    <PFSearch></PFSearch>

    <v-container fluid style="background:#2B2B2B" class="py-16">
      <v-row justify="center">
        <v-flex sm11>
          <v-row>
            <v-col cols="12" md="6" style="position: relative;">
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png"
                class="device--mac"
              ></v-img>
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png"
                class="device--iphone"
              ></v-img>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="mt-16 px-16 px-md-3 text-center text-md-left"
              align-self="center"
              style="color: white;"
            >
              <p class="text-h4 font-weight-bold">
                It all started with "What if..."
              </p>
              <p>
                What if we could simplify the business connection between
                service providers and property & facility managers?
              </p>
              <p>
                Could we make it easier for both parties to manage relationships
                and do business?
              </p>
              <p>
                Today, SOWerk is proud to empower relationships, make life
                easier and complete the link between property/facility owners
                and approved vendors.
              </p>
              <v-row>
                <v-flex sm11 offset-sm-1 text-center text-md-left>
                  <v-btn
                    class="white--text py-5 my-1 mx-1 text-subtitle-2 px-lg-10 px-15"
                    small
                    outlined
                    rounded
                    to="/landingpage/service-provider"
                  >
                    Learn More - Service Provider</v-btn
                  >
                  <v-btn
                    class="white--text py-5 my-1 mx-1 text-subtitle-2 px-lg-10 px-15"
                    small
                    outlined
                    rounded
                    to="/landingpage/property-manager"
                  >
                    Learn More - Property & Facility</v-btn
                  >
                </v-flex>
              </v-row>
            </v-col>
          </v-row>
        </v-flex>
      </v-row>
    </v-container>

    <v-container
      fluid
      grid-list-md
      text-center
      pb-8
      style="background:#2B2B2B; display: flex; justify-content: center"
    >
      <v-layout row style="max-width: 1280px;" class="my-12">
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
              >Vet Vendors</v-card-text
            >
            <div
              class="my-4"
              style="width: 80%; font-size: 1rem; text-align: justify"
            >
              We make it easy and powerful for you to vet any service provider,
              and re-qualify them annually. SOWerk prebuilt vendor applications
              are easy and powerful, or customize your own to better fit.
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
              One facility or 1,000’s of properties, SOWerk has you covered.
              Assign staff and set approved vendors by location. Manage bids and
              completed jobs all in one clean powerful interface.
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
              >Cold Call Shield</v-card-text
            >
            <div
              class="my-4"
              style="width: 80%; font-size: 1rem; text-align: justify"
            >
              With your SOWerk account you have the perfect place to direct any
              salesman calling to become your approved vendor.
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

    <!-- <section class="joinservicetraits">
        <div>
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/checkmarkcopy.png"/>
          <h3>Simple & Fast</h3>
          <p>Our simple design makes connecting with other companies quick and painless while using either the desktop or mobile app.</p>
        </div>
        <div>
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardcopy.png"/>
          <h3>Powerful Tools</h3>
          <p>SOWerk is designed from it’s core to solve for property and facility management by providing the tools to vet & communicate grow service providers.</p>
        </div>
        <div>
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"/>
          <h3>Automated</h3>
          <p>SOWerk has many automated features that help make everyone’s life easy, like automatically requiring service providers to requalify or automatically updating a service provider’s profile every time they achieve approved vendor status. </p>
        </div>
        <div>
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"/>
          <h3>Convenient</h3>
          <p>For the facility manager in the middle of the night that needs to contact all your approved plumbers for help or a local service provider that powers his business through a smart phone, SOWerk is design to be convenient. </p>
        </div>
     
    </section> -->
  </div>
</template>

<script>
import PFSearch from '~/components/landing/property-manager/PFSearch.vue'

export default {
  data() {
    return {
      loading: false,
      propertymanagers: [],
    }
  },
  components: {
    PFSearch,
  },
  watch: {
    loading: function () {
      if (this.loading) {
        console.log(document)
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
  },
  mounted() {
    this.getPropertyManagers()
  },
  methods: {
    async getPropertyManagers() {
      let { data, status } = await this.$http
        .get(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=1&limit=8&offset=0'
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.propertymanagers = data
        console.log(this.propertymanagers)
      })
    },
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

.splist {
  width: 100%;
  background: #a61c00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.splist .splistcontainer {
  width: 70%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px 0px 20px 0px;
}
.splistcontainer img {
  border-radius: 50px;
}

.splistcontainer div {
  width: 24%;
  margin: 20px 0.5% 20px 0.5%;
  padding: 20px 0px 20px 0px;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.splist button {
  background: white;
  border-radius: 20px;
  margin: 30px 0px 30px 0px;
  padding: 15px 0px 15px 0px;
  font-size: 14px;
  width: 50%;
}
.splistcontainer div button {
  width: 80%;
  margin: 0 auto;
  background: #a61c00;
  color: white;
  border-radius: 20px;
  padding: 5px 0px 5px 0px;
}
.splistcontainer div a {
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 22px;
}
.splistcontainer div h3 {
  font-size: 22px;
}
.splistcontainer div h3 {
  font-size: 18px;
}
.aboutdescription {
  background: #47494e;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}
.aboutdescriptionflex {
  display: flex;
  width: 90%;
  justify-content: center;
  border-radius: 20px;
  margin: 50px 0px 50px 0px;
}
.aboutdescriptionflex .aboutdescriptionimg {
  width: 40%;
  display: flex;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg1 {
  width: 50%;
  height: 300px;
  z-index: 1;
  position: relative;
  top: 250px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
  width: 150%;
  position: relative;
  left: -560px;
  top: -230px;
}
.aboutdescriptiontext {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  color: white;
  margin-left: 10px;
  margin-top: 20px;
}
.aboutdescriptiontext h1 {
  font-size: 35px;
}
.aboutdescriptiontext p {
  font-size: 18px;
}
.aboutbuttoncontainer {
  display: flex;
  width: 100%;
}
.aboutdescriptionflex button {
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  width: 49%;
  padding: 10px 0px 10px 0px;
  font-size: 18px;
  margin: 0 auto;
}

.joinservicetraits {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -250px;
}
.joinservicetraits div {
  width: 20%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: white;
  border-radius: 20px;
  margin: 50px 5px 50px 5px;
}
.joinservicetraits div h3 {
  font-size: 22px;
  margin: 15px 0px 15px 0px;
}
.joinservicetraits div p {
  font-size: 18px;
  width: 90%;
  text-align: center;
}
.joinservicetraits div img {
  width: 50%;
  margin-top: 20px;
}
</style>
