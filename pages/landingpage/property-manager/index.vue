<template>
<!-- HERO -->
  <div>
    <section class="sphero">
      <div class="spherobox">
        <h1 h1>Get Connected Now</h1>
        <p>Search SOWerk’s Nationwide Database</p>
        <div class="buttonflex">
          <button>Search All Businesses</button>
          <button>Join SOW</button>
        </div>
      </div>
    </section>

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

    <section class="aboutdescription">
      <div class="aboutdescriptionflex">
        <div class="aboutdescriptionimg">
          <div class="image-stack">
            <div class="image-item-top">
              <img
                class="aboutdescriptionimg1"
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png"
                alt="phone"
              />
            </div>
            <div class="image-item-bottom">
              <img
                class="aboutdescriptionimg2"
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png"
                alt="laptop"
              />
            </div>
            <div class="grid-text">
              <div class="aboutdescriptiontext">
                <h2>It all started with “What If…”</h2>
                <p class="subtitle-1">
                  What if we could simplify the business connection between
                  service providers and property & facility managers?
                </p>
                <p class="subtitle-1">
                  Could we make it easier for both parties to manage
                  relationships and do business?
                </p>
                <p class="subtitle-1">
                  Today, SOWerk is proud to empower relationships, make life
                  easier and complete the link between property/facility owners
                  and approved vendors.
                </p>
                <p class="subtitle-1">
                  More work and better work get done through SOWerk.
                </p>
                <div class="aboutbuttoncontainer">
                  <v-btn depressed elevation="2" outlined rounded
                    >LEARN MORE - SERVICE PROVIDER</v-btn
                  >
                  <v-btn depressed elevation="2" outlined rounded
                    >LEARN MORE - PROPERTY & FACILITY</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JoinTraits></JoinTraits>
    </section>

    <!-- <v-container class="grey lighten-5" >
      <v-row no-gutters>
        <v-col
          v-for="n in 4"
          :key="n"
          cols="12"
          lg="3"
          md="3"
          sm="6"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import PFSearch from '~/components/landing/property-manager/PFSearch.vue'
import JoinTraits from '~/components/landing/general/JoinTraits.vue'

export default {
  data() {
    return {
      loading: false,
      propertymanagers: [],
    }
  },
  components: {
    PFSearch,
    JoinTraits,
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
.sphero {
  background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/macbook-336704copy.jpg');
  background-size: cover;
  object-fit: contain;
  width: 100%;
  display: flex;
  height: 50vh;
  /* margin-top:-200px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sphero h1 {
  font-size: 3.3vw;
}
.sphero p {
  font-size: 1.3vw;
}
.sphero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
}
.sphero .spherobox {
  background: rgb(0, 0, 0, 0.8);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  border-radius: 20px;
  margin: 250px 0px 250px 0px;
  color: white;
}
.spherobox .buttonflex {
  display: flex;
  width: 80%;
  justify-content: center;
}

.spherobox button {
  background: #a61c00;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 0 auto;
  width: 45%;
  font-size: 18px;
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
  width: 100%;
  justify-content: center;
  border-radius: 20px;
  margin: 0 0 50px 0;
}
.aboutdescriptionimg {
  width: 100%;
  margin-top: -30px;
}

.image-stack {
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
}

/* pc image */
.image-item-bottom {
  grid-column: 1 / span 7;
  grid-row: 1;
}

/* phone img */
.image-item-top {
  grid-row: 1;
  grid-column: 1 / span 6;
  z-index: 1;
  padding-top: 33%;
}

img {
  width: 100%;
  display: block;
}

.aboutdescriptionimg1 {
  width: 57%;
}

.aboutdescriptionimg2 {
  width: 100%;
}

.grid-text {
  grid-column: 7 / -1;
  grid-row: 1;
}

.aboutdescriptiontext {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  color: white;
  position: relative;
  padding-top: 24%;
  margin-left: -5%;
}
.aboutdescriptiontext h2 {
  padding-bottom: 15px;
  font-size: 32px;
}
.aboutdescriptiontext p {
  line-height: 38px;
  font-size: 18px;
}
.aboutbuttoncontainer {
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.aboutdescriptionflex button {
  color: white;
  width: 40%;
  font-size: 12px;
  margin: 0 10px;
}

.joinservicetraits {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* margin-top: -250px; */
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
  font-size: 16px;
  width: 90%;
  text-align: center;
}
.joinservicetraits div img {
  width: 50%;
  margin-top: 20px;
}

@media (max-width: 1280px) {
  .sphero h1 {
    font-size: 45px;
  }
  .sphero p {
    font-size: 18px;
  }

  .sphero .spherobox {
    min-width: 700px;
  }

  .spherobox button {
    font-size: 16px;
    padding: 12px 0;
  }

  .aboutdescriptionimg {
    grid-template-rows: repeat(2, 1fr);
    width: 90%;
  }

  .image-item-bottom {
    grid-column: 1 / span 12;
  }

  .image-item-top {
    grid-column: 1 / span 9;
    padding-top: 34%;
  }

  .aboutdescriptionimg1 {
    width: 60%;
  }

  .aboutdescriptionimg2 {
    width: 100%;
  }

  .aboutdescriptiontext {
    width: 100%;
    padding-top: 0;
    margin-left: 0;
    margin-top: -40px;
  }

  .aboutdescriptiontext h2 {
    width: 100%;
    text-align: center;
  }

  .aboutdescriptiontext p {
    width: 100%;
    text-align: center;
  }

  .grid-text {
    grid-column: 1 / span 12;
    grid-row: 2;
  }

  .joinservicetraits div {
    flex: 0 50%;
    width: 23%;
  }
}

@media (max-width: 980px) {
  .sphero h1 {
    font-size: 40px;
  }
  .sphero p {
    font-size: 16px;
  }
  .sphero .spherobox {
    width: 80%;
    min-width: 500px;
  }

  .spherobox button {
    font-size: 14px;
  }

  .joinservicetraits {
    flex-wrap: wrap;
  }

  .joinservicetraits div {
    flex: 0 45%;
    height: 425px;
    max-width: 320px;
  }

  .joinservicetraits div img {
    height: 120px;
    width: 120px;
  }

  .joinservicetraits div h3 {
    font-size: 20px;
  }

  .joinservicetraits div p {
    font-size: 16px;
  }
  .joinservicetraits div:nth-child(1),
  .joinservicetraits div:nth-child(2) {
    /* margin-bottom: 20px; */
    margin: 50px 15px 20px 15px;
  }

  .joinservicetraits div:nth-child(3),
  .joinservicetraits div:nth-child(4) {
    margin: 20px 15px 50px 15px;
  }
}

@media (max-width: 600px) {
  .joinservicetraits div {
    flex: 0 60%;
  }
  .sphero .spherobox {
    min-width: 100%;
  }
}
</style>
