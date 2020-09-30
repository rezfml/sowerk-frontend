<template>
  <div id="landingcontainer">
    <section class="landinghomehero">
      <div class="landinghomeherotext">
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153.png" /> <!-- This needs to be an img idk where it is located though -->
        <h1>The Approved Vendor Platform</h1>
        <p>The Link Between Service Providers & Businesses</p>
        <button>LEARN MORE</button>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100"/>
      </svg>
    </section>

    <section class="landinghomepf">
      <h4>SOWerk Property & Facility Accounts</h4>
      <PreviewSliderSectionPF :carouselPropertyManagers="carouselPropertyManagers"></PreviewSliderSectionPF>
      <button>VIEW ALL</button>
    </section>

    <section class="landinghomelink">
      <div class="landinghomelinktext">
        <h4>SOWerk is the link between Service Providers and Property & Facility Managers</h4>
        <div class="landinghomelinkfleximg">
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork3copy.png" />
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/red-arrow-icon-vector-eps-600w-1715070490.webp"/>
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork2copy2.png"/>
        </div>
        <p>Our business to business platform provides companies and property managers the tools to efficiently identify, vet, and manage service providers for each of their locations. For service providers, SOWerk makes it possible for you to become an approved vendor, receive job request, and communicate with business owners.</p>
        <button>LEARN MORE</button>
      </div>
    </section>

    <section class="landinghomesp">
      <h4>SOWerk Service Provider Accounts</h4>
      <PreviewSliderSectionSP :carouselServiceProviders="carouselServiceProviders"></PreviewSliderSectionSP>
      <button>VIEW ALL</button>
    </section>

    <Reviews v-bind:reviews="reviews"></Reviews>

    <section class="landinghomejoin">
      <div class="landinghomejoinflex">
        <img class='iphonephoto' src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png" alt="mac"/>
        <img class='macphoto' src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png" alt="" />
        <div class="landinghomejoincolumn">
          <h2>JOIN SOWERK NOW</h2>
          <p>Register now and start making connections today. Our simple three step registration process makes it simple and easy to build your account and connect property & facility managers and service providers.</p>
          <div>
            <button>LEARN MORE - SERVICE PROVIDER </button>
            <button>LEARN MORE - PROPERTY & FACILITY</button>
          </div>
        </div>
      </div>
    </section>

    <section class="landinghomevideo">
      <video></video>
    </section>

    <section class="landinghomefaq">
      <h1>Property and Facility Managers Often Ask</h1>
      <div class="landinghomefaqflex">
        <img />
        <div>
          <h4>Is This Going To Create More Work For Me?</h4>
          <p>Actually, we designed SOWerk to be less work for you. Think of SOWerk like connecting with service providers on social media, except they have to meet your approved provider requirements. From here you can easily manage and communicate with your approved service providers.  </p>
        </div>
      </div>
      <div class="landinghomefaqflex">
        <img />
        <div>
          <h4>Will SOWerk Save Us Money? Will It Protect Our Investments?</h4>
          <p>If time is money and quality is everything then yes SOWerk can help. SOWerk makes it efficent for any staff member to vet & manage local/national service providers, such as getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make service providers requalify annualy on things like insurance coverage and licenses so you don’t have to.</p>
        </div>
      </div>
      <div class="landinghomefaqflex">
        <img />
        <div>
          <h4>Will SOWerk Help Shield Me From Cold Calls?</h4>
          <p>Sales is part of any business but sometimes you just need place to send the salesman where they can apply for your approved service program. SOWerk is your solution. </p>
        </div>
      </div>
      <button>PROPERTY & FACILITY LEARN MORE</button>
      <h1>Service Providers Generally Ask</h1>
      <div class="landinghomefaqflex">
        <img />
        <div>
          <h4>Do I Seriously Get More Jobs?</h4>
          <p>Yes, Property & Facility managers of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet service providers request bids.<p>
          <p>SOWerk also helps you look good when applying for approved vendor programs, but we also make it easy to share those good looks with others. Next time your bidding a job show off your resume by emailing or texting your SOWerk profile.</p>
        </div>
      </div>
      <div class="landinghomefaqflex">
        <img />
        <div>
          <h4>Is SOWerk Time Consuming and Hard To Use?</h4>
          <p>Not at all, a SOWerk profile only takes 10 minuets to setup.</p>
          <p>With only a click or two on your computer or mobile device you can use your SOWerk Profile to apply for approved vendor programs</p>
          <p>Automatic Updates: When you become an approved vendor for a company we automaticly display it on your profile.</p>
        </div>
      </div>
      <div class="landinghomefaqflex">
        <img />
        <div>
          <h4>Will I Get Charged All The Time & Get Junk Leads?</h4>
          <p>Unlike other websites, SOWerk service providers receive communications from their approved vendor programs, direct leads, or new businesses inviting them to apply for approved vendor program.<p>
          <p>Being on SOWerk and promoting your business is free. If you wish to apply for an approved vendor program or utilize other SOWerk features we offer a few packages. Details can be found on our Approved Provider Pricing page.</p>
        </div>
      </div>
      <button>SERVICE PROVIDER LEARN MORE</button>
    </section>
  </div>
</template>

<script>
// import CaroselPF from '../../components/landing/CaroselPF';
// import CaroselSP from '~/components/landing/CaroselSP';
import Reviews from '../../components/landing/Reviews';
import PreviewSliderSectionPF from '~/components/landing/PreviewSliderSectionPF';
import PreviewSliderSectionSP from '~/components/landing/PreviewSliderSectionSP';
export default {
  data: () => ({
    carouselPropertyManagers: [

    ],
    carouselServiceProviders: [

    ],
    reviews: [

    ]
  }),
  components: {
    PreviewSliderSectionPF,
    PreviewSliderSectionSP,
    Reviews
  },
  mounted() {
    this.getCarouselPropertyManagers();
    this.getCarouselServiceProviders();
    this.getReviews();
  },
  methods: {
    async getCarouselPropertyManagers() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=1&limit=20&offset=0').catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.carouselPropertyManagers = data;
        console.log(this.carouselPropertyManagers, 'property-manager managers');
      })
    },
    async getCarouselServiceProviders() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=0&limit=20&offset=0').catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.carouselServiceProviders = data;
        console.log(this.carouselServiceProviders, 'serviceproviders');
      })
    },
    async getReviews() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/reviewsLimitDesc?limit=2&offset=0').catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.reviews = data;
        console.log(this.reviews, 'reviews');
      })
    }
  }
}
</script>

<style scoped>
#landingcontainer{
  width: 100%;
  padding: 0px !important;
  font-family: Roboto;
}
.landinghomehero{
  background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg');
  background-size: 100%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.landinghomehero svg {
  width: 100%;
  height: 9vh;
  fill: #151515;
}
.landinghomeherotext{
  background: rgb(0, 0, 0, 0.65);
  border-radius: 25px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
.landinghomeherotext h1, .landinghomeherotext p, .landinghomeherotext button {
  color: rgb(255, 255, 255, 1);
}
.landinghomeherotext img {
  width: 50%;
  margin-top: -200px;
  height: 600px;
}
.landinghomeherotext h1 {
  margin-top: -250px;
  font-size: 55px;
}
.landinghomeherotext p{
  font-size: 23px;
}
.landinghomeherotext button {
  background: #A61C00;
  border-radius: 20px;
  width: 30%;
  padding: 20px 0px 20px 0px;
  margin-bottom: 50px;
  font-size: 20px;
}
.landinghomepf{
  background: #151515;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.landinghomepf h4 {
  color: white;
  margin-top: 20px;
  font-size: 30px;
}
.landinghomepf div {
  color: white;
}
.landinghomepf button {
  background: #A61C00;
  width: 45%;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 15px 0px 15px 0px;
  color: white;
}
.landinghomesp{
  background: #151515;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.landinghomesp h4 {
  color: white;
  margin-top: 20px;
  font-size: 30px;
}
.landinghomesp div {
  color: white;
}
.landinghomesp button {
  background: #A61C00;
  width: 45%;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 15px 0px 15px 0px;
  color: white;
}
.landinghomelink {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);
  background-size: cover;
}
.landinghomelinktext {
  background: rgb(255, 255, 255, 1);
  border-radius: 20px;
  width: 60%;
  margin: 50px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.landinghomelinktext h4 {
  width: 65%;
  color: #A61C00;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.landinghomelinktext p {
  color: #2E2E2E;
  width: 85%;
  font-size: 22px;
  text-align: center;
  margin: 25px 0px 25px 0px;
}
.landinghomelinktext button{
  background: #a61c00;
  color: white;
  width: 40%;
  padding: 15px 0px 15px 0px;
  margin: 0px 0px 25px 0px;
  border-radius: 20px;
}
.landinghomelinkfleximg {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.landinghomelinkfleximg img {
  width: 32%;
  margin: 0 auto;
}
.landinghomelinkfleximg img:first-child {
  border: 1px solid #A61C00;
  border-radius: 20px;
  padding-top: 150px;
  padding-bottom: 0px;
}
.landinghomelinkfleximg img:last-child {
  border: 1px solid #A61C00;
  border-radius: 20px;
  padding-bottom: 150px;
}
.landinghomereview {
  background: #A61C00;
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
.landinghomejoin {
  background: white;
  display: flex;
  width: 100%;
}
.landinghomejoin .landinghomejoinflex img {
  width: 30%;
}
.landinghomejoin .landinghomejoinflex .macphoto {
  position: relative;
  right: 385px;
  width: 800px;
}
.iphonephoto {
  z-index: 1;
  position: relative;
  top: 25px;
}
.landinghomejoin .landinghomejoinflex {
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: center;
  margin: 20px 2.5% 20px 2.5%;
}
.landinghomejoin .landinghomejoinflex .landinghomejoincolumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin-left: -500px;
}
.landinghomejoincolumn h2 {
  color: #A61C00;
  font-size: 35px;
}
.landinghomejoincolumn p {
  font-size: 18px;
}
.landinghomejoincolumn div {
  display: flex;
  justify-content: center;
  width: 100%;
}
.landinghomejoincolumn div button {
  background: #A61C00;
  color: white;
  width: 45%;
  margin: 0 auto;
  border-radius: 20px;
  font-size: 18px;
  padding: 10px 0px 10px 0px;
}
/* Should probably look at this later and fix -- just there to initially know there is supposed to be a video here*/
.landinghomevideo{
  background: black;
  width: 100%;
  height: 20vh;
}
.landinghomefaq {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.landinghomefaq h1 {
  color: #A61C00;
  font-size: 55px;
  margin-top: 20px;
}
.landinghomefaq .landinghomefaqflex {
  display: flex;
  width: 65%;
  justify-content: center;
}
.landinghomefaq .landinghomefaqflex img {
  width: 10%;
  margin-right: 3%;
}
.landinghomefaq .landinghomefaqflex div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 87%;
}
.landinghomefaq h4 {
  font-size: 25px;
  margin-top: 20px;
}
.landinghomefaq p {
  font-size: 18px;
  margin-left: 30px;
}
.landinghomefaq button {
  background: #A61C00;
  color: white;
  width: 40%;
  border-radius: 20px;
  padding: 10px 0px 10px 0px;
}



/* for screens less than 800 pixels */
@media (max-width: 800px) {
  .landinghomehero{
    background-size: cover;
    background-position-x:40%;
    width: 100%;
    height: auto;
    background-repeat:no-repeat;
  }
  .landinghomeherotext{
    border-radius: 25px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }  
  .landinghomeherotext img {
    width: 50%;
    margin-top: -200px;
    height: 600px;
  }
  .landinghomeherotext h1 {
    margin-top: -250px;
    font-size:30px;
  }
  .landinghomeherotext p{
    font-size: 16px;
  }
  .landinghomeherotext button {
    border-radius: 12px;
    width: 30%;
    padding: 10px 0px 10px 0px;
    margin-bottom: 50px;
    font-size: 12px;
    font-weight: 500;
  }
  .landinghomepf{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .landinghomepf h4 {
    margin-top: 20px;
    font-size: 18px;
  }
  .landinghomepf button {
    width: 45%;
    border-radius: 12px;
    margin-bottom: 20px;
    padding: 10px 0px 10px 0px;
    font-size: 12px;
    font-weight: 500;
  }
  .landinghomesp{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .landinghomesp h4 {
    margin-top: 20px;
    font-size: 30px;
  }
  .landinghomesp button {
    width: 45%;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 10px 0px 10px 0px;
    font-size: 12px;
    font-weight: 500;
  }
  .landinghomelink {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);
    background-size: cover;
  }
  .landinghomelinktext {
    border-radius: 20px;
    width: 80%;
    margin: 50px 0px 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .landinghomelinktext h4 {
    width: 80%;
    font-size: 22px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .landinghomelinktext p {
    width: 85%;
    font-size: 22px;
    text-align: center;
    margin: 25px 0px 25px 0px;
  }
  .landinghomelinktext button{
    width: 40%;
    padding: 15px 0px 15px 0px;
    margin: 0px 0px 25px 0px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
  }
  .landinghomelinkfleximg {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .landinghomelinkfleximg img {
    width: 32%;
    margin: 0 auto;
    height: 160px;
  }

  /*needing a new image size the current ones will not work on anything smaller than a desktop*/
  .landinghomelinkfleximg img:first-child {
    padding-top: 40px;
    border-radius: 20px;
  }
  .landinghomelinkfleximg img:last-child {
    border-radius: 20px;
    padding-bottom: 50px;
    padding-top: 0px;
  }
  .landinghomereview {
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
  .landinghomejoin {
    display: flex;
    width: 100%;
  }
  .landinghomejoin .landinghomejoinflex img {
    width: 30%;
  }
  .landinghomejoin .landinghomejoinflex .macphoto {
    position: relative;
    right: 375px;
    width: 580px;
  }
  .iphonephoto {
    z-index: 1;
    position: relative;
    top: 25px;
  }
  .landinghomejoin .landinghomejoinflex {
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: center;
    margin: 20px 2.5% 20px 2.5%;
  }
  .landinghomejoin .landinghomejoinflex .landinghomejoincolumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    margin-left: -500px;
  }
  .landinghomejoincolumn h2 {
    font-size: 35px;
  }
  .landinghomejoincolumn p {
    font-size: 14px;
  }
  .landinghomejoincolumn div {
    display: flex;
    justify-content: center;
    width: 95%;
  }
  .landinghomejoincolumn div button {
    width: 49%;
    margin: 0 auto;
    border-radius: 20px;
    font-size: 11.5px;
    padding: 10px 0px 10px 0px;
  }
  /* Should probably look at this later and fix -- just there to initially know there is supposed to be a video here*/
  .landinghomevideo{
    width: 100%;
    height: 20vh;
  }
  .landinghomefaq {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .landinghomefaq h1 {
    font-size: 26px;
    margin-top: 20px;
  }
  .landinghomefaq .landinghomefaqflex {
    display: flex;
    width: 65%;
    justify-content: center;
  }
  .landinghomefaq .landinghomefaqflex img {
    width: 10%;
    margin-right: 3%;
  }
  .landinghomefaq .landinghomefaqflex div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 87%;
  }
  .landinghomefaq h4 {
    font-size: 16px;
    margin-top: 20px;
  }
  .landinghomefaq p {
    font-size: 12px;
    margin-left: 30px;
  }
  .landinghomefaq button {
    width: 45%;
    border-radius: 12px;
    padding: 12px 109px 12px 109px;
    font-size: 12px;
    font-weight: 500;
    align-items: center;
  }
}



/* for screens less than 500 pixels */
@media (max-width: 500px) {
  .landinghomehero{
    background-size: cover;
    background-position-x:50%;
    width: 100%;
    height: auto;
    background-repeat:no-repeat;
  }
  .landinghomeherotext{
    border-radius: 25px;
    width: 80%;
    margin-top: 100px;
  }
  .landinghomeherotext img {
    width: 60%;
    margin-top: -175px;
    height: 450px;
  }
  .landinghomeherotext h1 {
    margin-top: -200px;
    font-size: 18px;
    margin-left:0px !important;
  }
  .landinghomeherotext p{
    font-size: 10px;
  }
  .landinghomeherotext button {
    border-radius: 8px;
    width: 30%;
    padding: 7px 0px 7px 0px;
    margin-bottom: 50px;
    font-size: 10px;
    font-weight: 500;
  }
  .landinghomepf{
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .landinghomepf h4 {
    margin-top: 20px;
    font-size: 14px;
  }
  .landinghomepf button {
    width: 45%;
    border-radius: 12px;
    margin-bottom: 20px;
    padding: 7px 0px 7px 0px;
    font-size: 10px;
    font-weight: 500;
  }
  .landinghomesp{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .landinghomesp h4 {
    margin-top: 20px;
    font-size: 30px;
  }
  .landinghomesp button {
    width: 45%;
    border-radius: 12px;
    margin-bottom: 20px;
    padding: 7px 0px 7px 0px;
    font-size: 10px;
    font-weight: 500;
  }
  .landinghomelink {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);
    background-size: cover;
  }
  .landinghomelinktext {
    border-radius: 20px;
    width: 80%;
    margin: 50px 0px 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .landinghomelinktext h4 {
    width: 80%;
    font-size: 14px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .landinghomelinktext p {
    color: #2E2E2E;
    width: 85%;
    font-size: 12px;
    text-align: center;
    margin: 25px 0px 25px 0px;
  }
  .landinghomelinktext button{
    width: 40%;
    padding: 7px 0px 7px 0px;
    margin: 0px 0px 25px 0px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }
  .landinghomelinkfleximg {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .landinghomelinkfleximg img {
    width: 32%;
    margin: 0 auto;
    height: 110px;
  }

  /*needing a new image size the current ones will not work on anything smaller than a desktop*/
  .landinghomelinkfleximg img:first-child {
    padding-top: 40px;
    border-radius: 20px;
  }
  .landinghomelinkfleximg img:last-child {
    border-radius: 20px;
    padding-bottom: 50px;
    padding-top: 0px;
  }
  .landinghomereview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .landinghomereview h1 {
    font-size: 18px !important;
  }
  .landinghomereview p {
    font-size: 12px;
  }
  .landinghomejoin {
    display: flex;
    width: 100%;
  }
  .landinghomejoin .landinghomejoinflex img {
    width: 30%;
  }
  .landinghomejoin .landinghomejoinflex .macphoto {
    position: relative;
    right: 225px;
    width: 350px;
  }
  .iphonephoto {
    z-index: 1;
    /*position: relative;*/
    top: 25px;
    left:-15px;
  }
  .landinghomejoin .landinghomejoinflex {
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: center;
    margin: 20px 2.5% 20px 2.5%;
  }
  .landinghomejoin .landinghomejoinflex .landinghomejoincolumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-left: -300px;
  }
  .landinghomejoincolumn h2 {
    font-size: 18px;
  }
  .landinghomejoincolumn p {
    font-size: 10px;
  }
  .landinghomejoincolumn div {
    display: flex;
    justify-content: center;
    /*width:70%;*/
  }
  /*the buttons will either need to have a change to the mobile view or wording the property and facility learn more goes to two  lines 
      this may be fixed needs to be tested.
  */
  .landinghomejoincolumn div button {
    width: 45%;
    margin: 0 auto;
    border-radius: 12px;
    font-size: 9.5px;
    font-weight: 500;
    padding: 7px 10px 7px 10px;
  }
  /* Should probably look at this later and fix -- just there to initially know there is supposed to be a video here*/
  .landinghomevideo{
    width: 100%;
    height: 20vh;
  }
  .landinghomefaq h1 {
    font-size: 18px;
    margin-top: 20px;
  }
  .landinghomefaq .landinghomefaqflex {
    display: flex;
    width: 75%;
    justify-content: center;
  }
  .landinghomefaq .landinghomefaqflex img {
    width: 10%;
    margin-right: 3%;
  }
  .landinghomefaq .landinghomefaqflex div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }
  .landinghomefaq h4 {
    font-size: 11.5px;
    margin-top: 20px;
  }
  .landinghomefaq p {
    font-size: 9px;
    margin-left: 30px;
  }
  .landinghomefaq button {
    width: 45%;
    border-radius: 8px;
    padding: 7px 65px 7px 65px;
    font-size: 9px;
    font-weight: 600;
    align-items: center;
  }
  /*we will need to fix this whenever we actually get the hamberger menu added. will it go horizontal or vertical? 
  .v-btn__content{
  }
  */
}
</style scoped>
