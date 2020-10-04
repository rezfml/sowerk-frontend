<template>
  <div>
    <section class="sphero">
      <div class="spherobox">
        <h1>Get Connected Now</h1>
        <p>Search SOWerk’s Nationwide Database</p>
        <form>
          <input type="text" placeholder="" value=""> 
          <button type="submit">Search Now</button></input>
          
        </form>
      </div>
<!--      <svg viewBox="0 0 100 100" preserveAspectRatio="none">-->
<!--        <polygon points="0,100 110,0 100,100"/>-->
<!--      </svg>-->
    </section>

<!--    <section class="splist">-->
<!--      <div class="splistcontainer">&lt;!&ndash;This will be a request to /companies/limit/type/:type SERVICE PROVIDER TYPE 0&ndash;&gt;-->
<!--        <div v-for="service in serviceproviders">-->
<!--          <img :src="service.imgUrl"/>-->
<!--          <h3>{{service.account_name}}</h3>-->
<!--          <p>{{service.city}}, {{service.state}}</p>-->
<!--          <p>{{service.description}}</p>-->
<!--          <a :href="'service-provider/' + service.id"><button>View Profile</button></a>-->
<!--        </div>-->
<!--      </div>-->
<!--      <button>View All Service Provider Accounts</button>-->
<!--    </section>-->

    <SPSearch></SPSearch>

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
                <h2 >It all started with “What If…”</h2>
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
                  <v-btn  depressed elevation="2" outlined rounded
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

      <section class="joinservicetraits">
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
      </section>
    </section>
  </div>
</template>

<script>
import SPSearch from '~/components/landing/SPSearch.vue'

export default {
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
        document.documentElement.style.overflow = 'hidden'
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
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=0&limit=8&offset=0'
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.serviceproviders = data
        console.log(this.serviceproviders)
        console.log(this.currentUser)
      })
    },
  },
}
</script>

<style scoped>
.sphero {
  background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg');
  background-size: cover;
  object-fit: contain;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sphero h1 {
  font-size: 3vw;
  width: 100%;
  text-align: center;
}
.sphero p {
  font-size: 1.3vw;
  width: 100%;
  text-align: center;
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
  padding: 40px 0px 40px 0px;
  border-radius: 15px;
  margin: 50px 0px 50px 0px;
  color: white;
}

.spherobox form {
  width: 100%;
  min-width: 700px;
  text-align: center;
  padding: 20px 0px;
}

.spherobox form input {
  width: 50%;
  background: white;
  padding: 2px 5px 2px 5px;
  border-radius: 35px;
}
.spherobox form button {
  background: #a61c00;
  border-radius: 35px;
  padding: 4.8px 30px 3px 30px;
  margin-left: -130px;
  font-size: 12px;
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
  font-size: 18px;
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
}

@media (max-width: 900px) {
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
}
</style>
