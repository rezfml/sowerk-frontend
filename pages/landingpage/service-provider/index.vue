<template>
  <div>
    <!-- HERO -->
    <v-row
      style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/tape-measure-1726546copy.jpg') no-repeat center center; --webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; height: 90vh; max-height: 1200px"
      align="center"
      justify="center"
      class="pt-12 mx-o"
    >
      <v-card
        max-height="400px"
        height="auto"
        :width="$vuetify.breakpoint.lgAndUp ? '50%' : '100%'"
        style="border-radius: 16px; "
        class="d-flex flex-column justify-center align-center py-6"
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
        <div style="display: flex; max-width: 500px; width: 90%">
          <v-text-field solo style="max-width: 500px; width: 100%;">
          </v-text-field>
          <v-btn
            type="submit"
            style="background: #A61C00"
            class="white--text py-6"
            >Search Now</v-btn
          >
        </div>
      </v-card>
    </v-row>


    <SPSearch></SPSearch>

<v-container fluid style="background: linear-gradient(180deg, rgba(43,43,43,1) 35%, rgba(71,71,71,1) 100%);">
    <v-container fluid  class="py-16">
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
              class="mt-16 px-2 px-md-3 text-center text-md-left"
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
                    @click="$router.push('/landingpage/service-provider')"
                  >
                    Learn More - Service Provider</v-btn
                  >
                  <v-btn
                    class="white--text py-5 my-1 mx-1 text-subtitle-2 px-lg-10 px-15"
                    small
                    outlined
                    rounded
                    @click="$router.push('/landingpage/property-manager')"
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
      style="display: flex; justify-content: center"
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
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/checkmarkcopy.png"
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
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardcopy.png"
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
</v-container>
  </div>
</template>

<script>
import SPSearch from '~/components/landing/service-provider/SPSearch.vue'

export default {
  layout: 'fullwidth',
  data() {
    return {
      loading: false,
      serviceproviders: [],
    }
  },
  components: {
    SPSearch,
  },
  watch: {
    loading: function () {
      if (this.loading) {
        console.log(document)
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
  },
  mounted() {
    this.getServiceProviders()
  },
  methods: {
    async getServiceProviders() {
      let { data, status } = await this.$http
        .get(
          'https://www.sowerkbackend.com/api/companies/byType?type=false0&limit=8&offset=0'
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.serviceproviders = data
        console.log(this.serviceproviders, data)
        console.log(this.currentUser)
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
.sphero {
  background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg');
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sphero h1 {
  font-size: 55px;
}
.sphero p {
  font-size: 23px;
}
.sphero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
}
.sphero .spherobox {
  background: rgba(0, 0, 0, 0.55);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  border-radius: 20px;
  margin: 50px 0px 50px 0px;
  color: white;
}

.spherobox form input {
  background: white;
  padding: 2px 5px 2px 5px;
  border-radius: 35px;
}
.spherobox form button {
  background: #a61c00;
  border-radius: 35px;
  padding: 3px 5px 3px 5px;
  margin-left: -25px;
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

.joinservicetraits {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
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
  font-size: 1.65vh;
  width: 90%;
  text-align: center;
}
.joinservicetraits div img {
  width: 50%;
  margin-top: 20px;
}
.flexCompanies a button[data-v-2b34ea88] {
  margin: 10% -10%;
  font-size: 2vh;
}


@media (max-width: 960px) {
  .sphero {
    margin-top: -8%;
  }
  .joinservicetraits {
    width: 100%;
  }

  .joinservicetraits {
    margin-top: unset;
  }
  .joinservicetraits div {
    width: 25%;
  }
  .joinservicetraits div p {
    font-size: 1.5vh;
  }
  .joinservicetraits div h3 {
    font-size: 2vh;
  }
  .sphero h1 {
    font-size: 3.5vh !important;
  }
  .sphero p {
    font-size: 2vh !important;
  }
}


@media screen and (max-width: 650px) {
  .sphero {
    margin-top: -12%;
  }
  .flexCompanies a button[data-v-2b34ea88] {
    margin-left: -20px;
    width: 200px;
  }
  .joinservicetraits div[data-v-202217e4] {
    width: 300px;
    height: 400px;
  }
  .joinservicetraits div p {
    font-size: 1.2vh;
  }
  .sphero h1 {
    font-size: 3vh !important;
  }
  .sphero p {
    font-size: 2vh !important;
  }
}

@media (max-width: 550px) {
  .sphero {
    margin-top: -12%;
  }
  #IphoneMockup {
    display: none;
  }
  #MacMockup {
    display: none;
  }
  .joinservicetraits div p {
    font-size: 1vh;
  }
  .joinservicetraits div[data-v-202217e4] {
    width: 200px;
    height: 300px;
  }

  .sphero h1 {
    font-size: 3vh !important;
  }
  .sphero p {
    font-size: 1.75vh !important;
    margin-left: 5%;
  }
  .spherobox form button {
    margin-right: -50%;
    font-size: 1.8vh;
  }
  .spherobox form input {
    padding-right: 10%;
    margin-left: 3%;
    width: 65%;
  }
}
@media (max-width: 450px) {
  .sphero {
    margin-top: -15%;
  }
  .v-toolbar__content {
    width: auto !important;
  }
  .joinservicetraits div[data-v-202217e4] {
    width: 150px !important ;
    height: 220px;
  }
  .joinservicetraits div img {
    width: 20%;
  }
  .joinservicetraits div p {
    font-size: 0.8vh;
  }
  .spherobox form input {
    width: 70%;
  }
  .spherobox form input {
    width: 90%;
    margin: 0 5%;
  }
  .spherobox form button {
    width: 90%;
    margin: 0 5%;
  }
}
</style>
