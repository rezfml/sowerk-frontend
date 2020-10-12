<template>
  <div>
    <section class="sphero">
      <div class="spherobox">
        <h1>Get Connected Now</h1>
        <p>Search SOWerk’s Nationwide Database</p>
        <form>
          <input type="text" placeholder="" value="" />
          <button type="submit">Search Now</button>
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
          <img v-if="!$vuetify.breakpoint.mobile"  class="aboutdescriptionimg1" src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png"/>
          <img v-else  class="aboutdescriptionimg1" id="IphoneMockup" src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png"/>
          <img v-if="!$vuetify.breakpoint.mobile"  class="aboutdescriptionimg2" src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png"/>
          <img v-else  class="aboutdescriptionimg2" id="MacMockup" src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png"/>
        </div>
        <div class="aboutdescriptiontext">
          <h1>It all started with “What If…”</h1>
          <p>What if we could simplify the business connection between service providers and property & facility managers?</p>
          <p>Could we make it easier for both parties to manage relationships and do business?</p>
          <p>Today, SOWerk is proud to empower relationships, make life easier and complete the link between property/facility owners and approved vendors.</p>
          <p>More work and better work get done through SOWerk.</p>
          <div class="aboutbuttoncontainer">
            <button @click="$router.push('/landingpage/service-provider')" >LEARN MORE - SERVICE PROVIDER </button>
            <button @click="$router.push('/landingpage/property-manager')">LEARN MORE - PROPERTY & FACILITY</button>
          </div>
        </div>
      </div>

      <section class="joinservicetraits" v-if="!$vuetify.breakpoint.xs" >
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

      <section v-else class="joinservicetraits">
        <section class="joinservicetraitsMobile">
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
        </section>
        <section class="joinservicetraitsMobile">
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
    </section>
  </div>
</template>

<script>
import SPSearch from "~/components/landing/service-provider/SPSearch.vue";

export default {
  data() {
    return {
      loading: false,
      serviceproviders: [

      ]
    }
  },
  components: {
    SPSearch
  },
  watch: {
    loading: function() {
      if(this.loading){
        console.log(document);
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  mounted() {
    this.getServiceProviders();
  },
  methods: {
    async getServiceProviders() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=0&limit=8&offset=0').catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.serviceproviders = data;
        console.log(this.serviceproviders);
        console.log(this.currentUser);
      })
    },
  },
}
</script>

<style scoped>
.sphero {
  background: url("https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg");
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sphero h1{
  font-size: 55px;
}
.sphero p{
  font-size: 23px;
}
.sphero svg {
  width: 100%;
  height: 9vh;
  fill: #A61C00;
}
.sphero .spherobox {
  background: rgb(0, 0, 0, 0.55);
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
  background: #A61C00;
  border-radius: 35px;
  padding: 3px 5px 3px 5px;
  margin-left: -25px;
}

.splist {
  width: 100%;
  background: #A61C00;
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
.splistcontainer div button{
  width: 80%;
  margin: 0 auto;
  background: #A61C00;
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

.aboutdescription{
  background: #47494E;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}
.aboutdescriptionflex{
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
  top: 10px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
  width: 150%;
  position: relative;
  left: -560px;
  top: -230px;
}
.aboutdescriptiontext{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  color: white;
  margin-left: 10px;
  margin-top: 20px;
}
.aboutdescriptiontext h1{
  font-size: 35px;
}
.aboutdescriptiontext p{
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

.joinservicetraits{
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
.joinservicetraits div h3{
  font-size: 22px;
  margin: 15px 0px 15px 0px;
}
.joinservicetraits div p{
  font-size: 18px;
  width: 90%;
  text-align: center;
}
.joinservicetraits div img{
  width: 50%;
  margin-top: 20px;
}
.flexCompanies a button[data-v-2b34ea88]{
  margin:10% -10%;
  font-size: 2vh;
}
@media (max-width:1500px) {
  .aboutdescriptionflex .aboutdescriptionimg{
    margin-bottom: -20%;
    margin-left: 30%;
    width:70%;
  }
}
@media (max-width:960px) {
  .sphero{
    margin-top: -8%;
  }
  .joinservicetraits{
    width:100%;
  }
    .aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg1 {
    width: 100%;
    height: 250px;
    z-index: 1;
    position: relative;
    left:-20%;
    top: 50px;
  }
  .aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
      width: 175%;
      left: -140%;
      top: -25%;
  }
  .joinservicetraits{
    margin-top:unset ;
  }
  .joinservicetraits div{
    width:25%;
  }
  .joinservicetraits div p{
    font-size: 1.75vh;
  }
  .joinservicetraits div h3{
    font-size:2vh;
  }
   .sphero h1{
    font-size: 3.5vh !important;
  }
  .sphero p{
    font-size: 2vh !important;
  }
}
@media screen and (max-width:650px) {
  .sphero{
    margin-top: -12%;
  }
  .flexCompanies a button[data-v-2b34ea88]{
    margin-left:-20px ;
    width:200px ;
  }
  .joinservicetraits div[data-v-202217e4]{
    width:300px ;
    height:400px ;
  }
  .joinservicetraits div p{
    font-size: 1.5vh;
  }
    .sphero h1{
    font-size: 3vh !important;
  }
  .sphero p{
    font-size: 2vh !important;
  }
}

@media (max-width:550px) {
    .sphero{
    margin-top: -12%;
  }
  #IphoneMockup{
    display: none;
  }
  #MacMockup{
    display:none;
  }
    .joinservicetraits div p{
    font-size: 1.2vh;
  }
  .joinservicetraits div[data-v-202217e4]{
    width:200px ;
    height: 300px;
  }
  .aboutdescriptiontext{
    margin-left:-30%;
  }

  .sphero h1{
    font-size: 3vh !important;
  }
  .sphero p{
    font-size: 1.75vh !important;
    margin-left: 5%;

  }
  .spherobox form button{
    margin-right:-50% ;
    font-size: 1.8vh;
  }
  .spherobox form input{
    padding-right: 10%;
    margin-left:3%;
    width:65%;
  }
} 
@media (max-width:450px) {
  .sphero{
    margin-top: -15%;
  }
  .v-toolbar__content{
    width: auto !important;
  }
  .aboutdescriptionflex{
    width:unset;
    margin: unset;
  }
  .aboutdescriptionflex button{
    font-size: 1.5vh;
  }
  .aboutdescriptiontext h1{
    font-size: 3.5vh;
  }
  .joinservicetraits div[data-v-202217e4]{
    width:150px !important ;
    height: 220px;
  }
  .joinservicetraits div img{
    width:20%;
  }
  .joinservicetraits div p{
    font-size: 1vh;
  }
  .spherobox form input{
    width:70%;
  }
  .spherobox form input{
    width:90%;
    margin: 0 5%;
  }
  .spherobox form button{
    width:90%;
    margin: 0 5%;
  }
}
</style>
