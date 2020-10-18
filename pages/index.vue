<!--<template>-->
<!--  <div id="landingcontainer">-->
<!--    <section class="landinghomehero">-->
<!--      <div class="landinghomeherotext">-->
<!--        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153.png" /> &lt;!&ndash; This needs to be an img idk where it is located though &ndash;&gt;-->
<!--        <h1>The Approved Vendor Platform</h1>-->
<!--        <p>The Link Between Service Providers & Businesses</p>-->
<!--        <button @click="$router.push('/landingpage/about')">LEARN MORE</button>-->
<!--      </div>-->
<!--      <svg viewBox="0 0 100 100" preserveAspectRatio="none">-->
<!--        <polygon points="0,100 110,0 100,100"/>-->
<!--      </svg>-->
<!--    </section>-->

<!--    <section class="landinghomepf">-->
<!--      <h4>SOWerk Property & Facility Accounts</h4>-->
<!--      <PreviewSliderSectionPF :carouselPropertyManagers="carouselPropertyManagers"></PreviewSliderSectionPF>-->
<!--      <button @click="$router.push('/landingpage/property-manager')">VIEW ALL</button>-->
<!--    </section>-->

<!--    <section class="landinghomelink">-->
<!--      <div class="landinghomelinktext">-->
<!--        <h4>SOWerk is the link between Service Providers and Property & Facility Managers</h4>-->
<!--        <div class="landinghomelinkfleximg">-->
<!--          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork3copy.png" />-->
<!--          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/red-arrow-icon-vector-eps-600w-1715070490.webp"/>-->
<!--          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork2copy2.png"/>-->
<!--        </div>-->
<!--        <p>Our business to business platform provides companies and property managers the tools to efficiently identify, vet, and manage service providers for each of their locations. For service providers, SOWerk makes it possible for you to become an approved vendor, receive job request, and communicate with business owners.</p>-->
<!--        <button @click="$router.push('/landingpage/property-manager')">LEARN MORE</button>-->
<!--      </div>-->
<!--    </section>-->

<!--    <section class="landinghomesp">-->
<!--      <h4>SOWerk Service Provider Accounts</h4>-->
<!--      <PreviewSliderSectionSP :carouselServiceProviders="carouselServiceProviders"></PreviewSliderSectionSP>-->
<!--      <button @click="$router.push('/landingpage/service-provider')">VIEW ALL</button>-->
<!--    </section>-->

<!--    <Reviews v-bind:reviews="reviews"></Reviews>-->

<!--    <section class="landinghomejoin">-->
<!--      <div class="landinghomejoinflex">-->
<!--        <img class='iphonephoto' src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png" alt="mac"/>-->
<!--        <img class='macphoto' src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png" alt="" />-->
<!--        <div class="landinghomejoincolumn">-->
<!--          <h2>JOIN SOWERK NOW</h2>-->
<!--          <p>Register now and start making connections today. Our simple three step registration process makes it simple and easy to build your account and connect property & facility managers and service providers.</p>-->
<!--          <div>-->
<!--            <button v-if="!$vuetify.breakpoint.mobile" @click="$router.push('/landingpage/service-provider')">LEARN MORE - SERVICE PROVIDER </button>-->
<!--            <button v-else @click="$router.push('/landingpage/service-provider')">LEARN MORE -<br/> SERVICE PROVIDER </button>-->
<!--            <button v-if="!$vuetify.breakpoint.mobile" @click="$router.push('/landingpage/property-manager')">LEARN MORE - PROPERTY & FACILITY</button>-->
<!--            <button v-else @click="$router.push('/landingpage/property-manager')">LEARN MORE -<br/> PROPERTY & FACILITY</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

<!--    <section class="landinghomevideo">-->
<!--      <video></video>-->
<!--    </section>-->

<!--    <section class="landinghomefaq">-->
<!--      <h1>Property and Facility Managers Often Ask</h1>-->
<!--      <div class="landinghomefaqflex">-->
<!--        <div>-->
<!--          <h4>-->
<!--            <span>-->
<!--              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>-->
<!--            </span>-->
<!--            Is This Going To Create More Work For Me?-->
<!--          </h4>-->
<!--          <p>Actually, we designed SOWerk to be less work for you. Think of SOWerk like connecting with service providers on social media, except they have to meet your approved provider requirements. From here you can easily manage and communicate with your approved service providers.  </p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="landinghomefaqflex">-->
<!--        <div>-->
<!--          <h4>-->
<!--            <span>-->
<!--              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>-->
<!--            </span>-->
<!--            Will SOWerk Save Us Money? Will It Protect Our Investments?-->
<!--          </h4>-->
<!--          <p>If time is money and quality is everything then yes SOWerk can help. SOWerk makes it efficent for any staff member to vet & manage local/national service providers, such as getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make service providers requalify annualy on things like insurance coverage and licenses so you don’t have to.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="landinghomefaqflex">-->
<!--        <div>-->
<!--          <h4>-->
<!--            <span>-->
<!--              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>-->
<!--            </span>-->
<!--            Will SOWerk Help Shield Me From Cold Calls?-->
<!--          </h4>-->
<!--          <p>Sales is part of any business but sometimes you just need place to send the salesman where they can apply for your approved service program. SOWerk is your solution. </p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <button v-if="!$vuetify.breakpoint.mobile" @click="$router.push('/landingpage/property-manager')">PROPERTY & FACILITY LEARN MORE</button>-->
<!--      <button v-else @click="$router.push('/landingpage/property-manager')">PROPERTY & FACILITY<br/> LEARN MORE</button>-->
<!--      <h1>Service Providers Generally Ask</h1>-->
<!--      <div class="landinghomefaqflex">-->
<!--        <div>-->
<!--          <h4>-->
<!--            <span>-->
<!--              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>-->
<!--            </span>-->
<!--            Do I Seriously Get More Jobs?-->
<!--          </h4>-->
<!--          <p>Yes, Property & Facility managers of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet service providers request bids.<p>-->
<!--          <p>SOWerk also helps you look good when applying for approved vendor programs, but we also make it easy to share those good looks with others. Next time your bidding a job show off your resume by emailing or texting your SOWerk profile.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="landinghomefaqflex">-->
<!--        <div>-->
<!--          <h4>-->
<!--            <span>-->
<!--              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>-->
<!--            </span>-->
<!--            Is SOWerk Time Consuming and Hard To Use?-->
<!--          </h4>-->
<!--          <p>Not at all, a SOWerk profile only takes 10 minuets to setup.</p>-->
<!--          <p>With only a click or two on your computer or mobile device you can use your SOWerk Profile to apply for approved vendor programs</p>-->
<!--          <p>Automatic Updates: When you become an approved vendor for a company we automaticly display it on your profile.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="landinghomefaqflex">-->
<!--        <div>-->
<!--          <h4>-->
<!--            <span>-->
<!--              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>-->
<!--            </span>-->
<!--            Will I Get Charged All The Time & Get Junk Leads?-->
<!--          </h4>-->
<!--          <p>Unlike other websites, SOWerk service providers receive communications from their approved vendor programs, direct leads, or new businesses inviting them to apply for approved vendor program.<p>-->
<!--          <p>Being on SOWerk and promoting your business is free. If you wish to apply for an approved vendor program or utilize other SOWerk features we offer a few packages. Details can be found on our Approved Provider Pricing page.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <button v-if="!$vuetify.breakpoint.mobile" @click="$router.push('/landingpage/service-provider')">SERVICE PROVIDER LEARN MORE</button>-->
<!--      <button v-else @click="$router.push('/landingpage/service-provider')">SERVICE PROVIDER <br/>LEARN MORE</button>-->
<!--    </section>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  // import CaroselPF from '../../components/landing/property-manager/CaroselPF';-->
<!--  // import CaroselSP from '~/components/landing/service-provider/CaroselSP';-->
<!--  import Reviews from '../components/landing/general/Reviews';-->
<!--  import PreviewSliderSectionPF from '~/components/landing/property-manager/PreviewSliderSectionPF';-->
<!--  import PreviewSliderSectionSP from '~/components/landing/service-provider/PreviewSliderSectionSP';-->
<!--  export default {-->
<!--    layout: 'fullwidth',-->
<!--    data: () => ({-->
<!--      carouselPropertyManagers: [-->

<!--      ],-->
<!--      carouselServiceProviders: [-->

<!--      ],-->
<!--      reviews: [-->

<!--      ]-->
<!--    }),-->
<!--    components: {-->
<!--      PreviewSliderSectionPF,-->
<!--      PreviewSliderSectionSP,-->
<!--      Reviews-->
<!--    },-->
<!--    mounted() {-->
<!--      this.getCarouselPropertyManagers();-->
<!--      this.getCarouselServiceProviders();-->
<!--      this.getReviews();-->
<!--    },-->
<!--    methods: {-->
<!--      async getCarouselPropertyManagers() {-->
<!--        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=true&limit=20&offset=0').catch(e => e);-->
<!--        if (this.$error(status, data.message, data.errors)) return;-->
<!--        this.$nextTick(function() {-->
<!--          this.carouselPropertyManagers = data;-->
<!--          console.log(this.carouselPropertyManagers, 'property-manager managers');-->
<!--        })-->
<!--      },-->
<!--      async getCarouselServiceProviders() {-->
<!--        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=false&limit=20&offset=0').catch(e => e);-->
<!--        if (this.$error(status, data.message, data.errors)) return;-->
<!--        this.$nextTick(function() {-->
<!--          this.carouselServiceProviders = data;-->
<!--          console.log(this.carouselServiceProviders, 'serviceproviders');-->
<!--        })-->
<!--      },-->
<!--      async getReviews() {-->
<!--        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/reviewsLimitDesc?limit=2&offset=0').catch(e => e);-->
<!--        if (this.$error(status, data.message, data.errors)) return;-->
<!--        this.$nextTick(function() {-->
<!--          this.reviews = data;-->
<!--          console.log(this.reviews, 'reviews');-->
<!--        })-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->
<!--  #landingcontainer{-->
<!--    width: 100%;-->
<!--    padding: 0px !important;-->
<!--    font-family: Roboto;-->
<!--  }-->
<!--  .landinghomehero{-->
<!--    background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg');-->
<!--    background-size: 100%;-->
<!--    width: 100%;-->
<!--    height: auto;-->
<!--    display: flex;-->
<!--    margin-top: -200px;-->
<!--    flex-direction: column;-->
<!--  }-->
<!--  .landinghomehero svg {-->
<!--    width: 100%;-->
<!--    height: 9vh;-->
<!--    fill: #151515;-->
<!--  }-->
<!--  .landinghomeherotext{-->
<!--    background: rgb(0, 0, 0, 0.65);-->
<!--    border-radius: 25px;-->
<!--    width: 80%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    margin-top: 300px;-->
<!--  }-->
<!--  .landinghomeherotext h1, .landinghomeherotext p, .landinghomeherotext button {-->
<!--    color: rgb(255, 255, 255, 1);-->
<!--  }-->
<!--  .landinghomeherotext img {-->
<!--    width: 50%;-->
<!--    margin-top: -200px;-->
<!--    height: 600px;-->
<!--  }-->
<!--  .landinghomeherotext h1 {-->
<!--    margin-top: -250px;-->
<!--    font-size: 55px;-->
<!--  }-->
<!--  .landinghomeherotext p{-->
<!--    font-size: 23px;-->
<!--  }-->
<!--  .landinghomeherotext button {-->
<!--    background: #A61C00;-->
<!--    border-radius: 20px;-->
<!--    width: 30%;-->
<!--    padding: 20px 0px 20px 0px;-->
<!--    margin-bottom: 50px;-->
<!--    font-size: 20px;-->
<!--  }-->
<!--  .landinghomepf{-->
<!--    background: #151515;-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--  }-->
<!--  .landinghomepf h4 {-->
<!--    color: white;-->
<!--    margin-top: 20px;-->
<!--    font-size: 30px;-->
<!--  }-->
<!--  .landinghomepf div {-->
<!--    color: white;-->
<!--  }-->
<!--  .landinghomepf button {-->
<!--    background: #A61C00;-->
<!--    width: 45%;-->
<!--    border-radius: 20px;-->
<!--    margin-bottom: 20px;-->
<!--    padding: 15px 0px 15px 0px;-->
<!--    color: white;-->
<!--  }-->
<!--  .landinghomesp{-->
<!--    background: #151515;-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--  }-->
<!--  .landinghomesp h4 {-->
<!--    color: white;-->
<!--    margin-top: 20px;-->
<!--    font-size: 30px;-->
<!--  }-->
<!--  .landinghomesp div {-->
<!--    color: white;-->
<!--  }-->
<!--  .landinghomesp button {-->
<!--    background: #A61C00;-->
<!--    width: 45%;-->
<!--    border-radius: 20px;-->
<!--    margin-bottom: 20px;-->
<!--    padding: 15px 0px 15px 0px;-->
<!--    color: white;-->
<!--  }-->
<!--  .landinghomelink {-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--    background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);-->
<!--    background-size: cover;-->
<!--  }-->
<!--  .landinghomelinktext {-->
<!--    background: rgb(255, 255, 255, 1);-->
<!--    border-radius: 20px;-->
<!--    width: 60%;-->
<!--    margin: 50px 0px 50px 0px;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--  }-->
<!--  .landinghomelinktext h4 {-->
<!--    width: 65%;-->
<!--    color: #A61C00;-->
<!--    font-size: 30px;-->
<!--    text-align: center;-->
<!--    margin-top: 50px;-->
<!--    margin-bottom: 50px;-->
<!--  }-->
<!--  .landinghomelinktext p {-->
<!--    color: #2E2E2E;-->
<!--    width: 85%;-->
<!--    font-size: 22px;-->
<!--    text-align: center;-->
<!--    margin: 25px 0px 25px 0px;-->
<!--  }-->
<!--  .landinghomelinktext button{-->
<!--    background: #a61c00;-->
<!--    color: white;-->
<!--    width: 40%;-->
<!--    padding: 15px 0px 15px 0px;-->
<!--    margin: 0px 0px 25px 0px;-->
<!--    border-radius: 20px;-->
<!--  }-->
<!--  .landinghomelinkfleximg {-->
<!--    width: 80%;-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--  }-->
<!--  .landinghomelinkfleximg img {-->
<!--    width: 32%;-->
<!--    margin: 0 auto;-->
<!--  }-->
<!--  .landinghomelinkfleximg img:first-child {-->
<!--    border: 1px solid #A61C00;-->
<!--    border-radius: 20px;-->
<!--    padding-top: 150px;-->
<!--    padding-bottom: 0px;-->
<!--  }-->
<!--  .landinghomelinkfleximg img:last-child {-->
<!--    border: 1px solid #A61C00;-->
<!--    border-radius: 20px;-->
<!--    padding-bottom: 150px;-->
<!--  }-->
<!--  .landinghomereview {-->
<!--    background: #A61C00;-->
<!--    color: white;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    width: 100%;-->
<!--  }-->
<!--  .landinghomereview h1 {-->
<!--    font-size: 55px;-->
<!--  }-->
<!--  .landinghomereview p {-->
<!--    font-size: 18px;-->
<!--  }-->
<!--  .landinghomejoin {-->
<!--    background: white;-->
<!--    display: flex;-->
<!--    width: 100%;-->
<!--  }-->
<!--  .landinghomejoin .landinghomejoinflex img {-->
<!--    width: 30%;-->
<!--  }-->
<!--  .landinghomejoin .landinghomejoinflex .macphoto {-->
<!--    position: relative;-->
<!--    right: 385px;-->
<!--    width: 800px;-->
<!--  }-->
<!--  .iphonephoto {-->
<!--    z-index: 1;-->
<!--    position: relative;-->
<!--    top: 25px;-->
<!--  }-->
<!--  .landinghomejoin .landinghomejoinflex {-->
<!--    display: flex;-->
<!--    width: 95%;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    margin: 20px 2.5% 20px 2.5%;-->
<!--  }-->
<!--  .landinghomejoin .landinghomejoinflex .landinghomejoincolumn {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    width: 800px;-->
<!--    margin-left: -500px;-->
<!--  }-->
<!--  .landinghomejoincolumn h2 {-->
<!--    color: #A61C00;-->
<!--    font-size: 35px;-->
<!--  }-->
<!--  .landinghomejoincolumn p {-->
<!--    font-size: 18px;-->
<!--  }-->
<!--  .landinghomejoincolumn div {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    width: 100%;-->
<!--  }-->
<!--  .landinghomejoincolumn div button {-->
<!--    background: #A61C00;-->
<!--    color: white;-->
<!--    width: 45%;-->
<!--    margin: 0 auto;-->
<!--    border-radius: 20px;-->
<!--    font-size: 18px;-->
<!--    padding: 10px 0px 10px 0px;-->
<!--  }-->
<!--  /* Should probably look at this later and fix &#45;&#45; just there to initially know there is supposed to be a video here*/-->
<!--  .landinghomevideo{-->
<!--    background: black;-->
<!--    width: 100%;-->
<!--    height: 20vh;-->
<!--  }-->
<!--  .landinghomefaq {-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--  }-->
<!--  .landinghomefaq h1 {-->
<!--    color: #A61C00;-->
<!--    font-size: 55px;-->
<!--    margin-top: 20px;-->
<!--  }-->
<!--  .landinghomefaq .landinghomefaqflex {-->
<!--    display: flex;-->
<!--    width: 65%;-->
<!--    justify-content: center;-->
<!--  }-->
<!--  .landinghomefaq .landinghomefaqflex img {-->
<!--    width: 10%;-->
<!--    margin-right: 3%;-->
<!--  }-->
<!--  .landinghomefaq .landinghomefaqflex div {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: flex-start;-->
<!--    width: 87%;-->
<!--  }-->
<!--  .landinghomefaq h4 {-->
<!--    font-size: 25px;-->
<!--    margin-top: 20px;-->
<!--  }-->
<!--  .landinghomefaq img{-->
<!--    margin-left: -10%;-->
<!--    margin-right: unset !important;-->
<!--    width: 5% !important;-->
<!--    height:auto;-->
<!--  }-->
<!--  .landinghomefaq p {-->
<!--    font-size: 18px;-->
<!--    margin-left: 30px;-->
<!--  }-->
<!--  .landinghomefaq button {-->
<!--    background: #A61C00;-->
<!--    color: white;-->
<!--    width: 40%;-->
<!--    border-radius: 20px;-->
<!--    padding: 10px 0px 10px 0px;-->
<!--  }-->



<!--  /* for screens less than 800 pixels */-->
<!--  @media (max-width: 800px) {-->
<!--    .landinghomehero{-->
<!--      background-size: cover;-->
<!--      background-position-x:40%;-->
<!--      width: 100%;-->
<!--      height: auto;-->
<!--      background-repeat:no-repeat;-->
<!--    }-->
<!--    .landinghomeherotext{-->
<!--      border-radius: 25px;-->
<!--      width: 80%;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--      margin-top: 100px;-->
<!--    }-->
<!--    .landinghomeherotext img {-->
<!--      width: 50%;-->
<!--      margin-top: -200px;-->
<!--      height: 600px;-->
<!--    }-->
<!--    .landinghomeherotext h1 {-->
<!--      margin-top: -250px;-->
<!--      font-size:30px;-->
<!--    }-->
<!--    .landinghomeherotext p{-->
<!--      font-size: 16px;-->
<!--    }-->
<!--    .landinghomeherotext button {-->
<!--      border-radius: 12px;-->
<!--      width: 30%;-->
<!--      padding: 10px 0px 10px 0px;-->
<!--      margin-bottom: 50px;-->
<!--      font-size: 12px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomepf{-->
<!--      width: 100%;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .landinghomepf h4 {-->
<!--      margin-top: 20px;-->
<!--      font-size: 1 rem !important;-->
<!--    }-->
<!--    .landinghomepf button {-->
<!--      width: 45%;-->
<!--      border-radius: 12px;-->
<!--      margin-bottom: 20px;-->
<!--      padding: 10px 0px 10px 0px;-->
<!--      font-size: 12px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomesp{-->
<!--      width: 100%;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .landinghomesp h4 {-->
<!--      margin-top: 20px;-->
<!--      font-size: 1rem !important;-->
<!--    }-->
<!--    .landinghomesp button {-->
<!--      width: 45%;-->
<!--      border-radius: 20px;-->
<!--      margin-bottom: 20px;-->
<!--      padding: 10px 0px 10px 0px;-->
<!--      font-size: 12px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomelink {-->
<!--      width: 100%;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--      background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);-->
<!--      background-size: cover;-->
<!--    }-->
<!--    .landinghomelinktext {-->
<!--      border-radius: 20px;-->
<!--      width: 80%;-->
<!--      margin: 50px 0px 50px 0px;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--    }-->
<!--    .landinghomelinktext h4 {-->
<!--      width: 80%;-->
<!--      font-size: 22px;-->
<!--      text-align: center;-->
<!--      margin-top: 50px;-->
<!--      margin-bottom: 50px;-->
<!--    }-->
<!--    .landinghomelinktext p {-->
<!--      width: 85%;-->
<!--      font-size: 22px;-->
<!--      text-align: center;-->
<!--      margin: 25px 0px 25px 0px;-->
<!--    }-->
<!--    .landinghomelinktext button{-->
<!--      width: 40%;-->
<!--      padding: 15px 0px 15px 0px;-->
<!--      margin: 0px 0px 25px 0px;-->
<!--      border-radius: 20px;-->
<!--      font-size: 12px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomelinkfleximg {-->
<!--      width: 80%;-->
<!--      display: flex;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .landinghomelinkfleximg img {-->
<!--      width: 32%;-->
<!--      margin: 0 auto;-->
<!--      height: 160px;-->
<!--    }-->

<!--    /*needing a new image size the current ones will not work on anything smaller than a desktop*/-->
<!--    .landinghomelinkfleximg img:first-child {-->
<!--      padding-top: 40px;-->
<!--      border-radius: 20px;-->
<!--    }-->
<!--    .landinghomelinkfleximg img:last-child {-->
<!--      border-radius: 20px;-->
<!--      padding-bottom: 50px;-->
<!--      padding-top: 0px;-->
<!--    }-->
<!--    .landinghomereview {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--      width: 100%;-->
<!--    }-->
<!--    .landinghomereview h1 {-->
<!--      font-size: 55px;-->
<!--    }-->
<!--    .landinghomereview p {-->
<!--      font-size: 18px;-->
<!--    }-->
<!--    .landinghomejoin {-->
<!--      display: flex;-->
<!--      width: 100%;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex img {-->
<!--      width: 30%;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex .macphoto {-->
<!--      position: relative;-->
<!--      right: 375px;-->
<!--      width: 580px;-->
<!--    }-->
<!--    .iphonephoto {-->
<!--      z-index: 1;-->
<!--      position: relative;-->
<!--      top: 25px;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex {-->
<!--      display: flex;-->
<!--      width: 95%;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--      margin: 20px 2.5% 20px 2.5%;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex .landinghomejoincolumn {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      width: 800px;-->
<!--      margin-left: -500px;-->
<!--    }-->
<!--    .landinghomejoincolumn h2 {-->
<!--      font-size: 35px;-->
<!--    }-->
<!--    .landinghomejoincolumn p {-->
<!--      font-size: 14px;-->
<!--    }-->
<!--    .landinghomejoincolumn div {-->
<!--      display: flex;-->
<!--      justify-content: center;-->
<!--      width: 95%;-->
<!--    }-->
<!--    .landinghomejoincolumn div button {-->
<!--      width: 49%;-->
<!--      margin: 0 auto;-->
<!--      border-radius: 20px;-->
<!--      font-size: 11.5px;-->
<!--      padding: 1% .5%;-->
<!--    }-->
<!--    /* Should probably look at this later and fix &#45;&#45; just there to initially know there is supposed to be a video here*/-->
<!--    .landinghomevideo{-->
<!--      width: 100%;-->
<!--      height: 20vh;-->
<!--    }-->
<!--    .landinghomefaq {-->
<!--      width: 100%;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .landinghomefaq h1 {-->
<!--      font-size: 26px;-->
<!--      margin-top: 20px;-->
<!--    }-->
<!--    .landinghomefaq .landinghomefaqflex {-->
<!--      display: flex;-->
<!--      width: 65%;-->
<!--      justify-content: center;-->
<!--    }-->
<!--    .landinghomefaq .landinghomefaqflex img {-->
<!--      width: 10%;-->
<!--      margin-right: 3%;-->
<!--    }-->
<!--    .landinghomefaq .landinghomefaqflex div {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: flex-start;-->
<!--      width: 87%;-->
<!--    }-->
<!--    .landinghomefaq h4 {-->
<!--      font-size: 16px;-->
<!--      margin-top: 20px;-->
<!--    }-->
<!--    .landinghomefaq p {-->
<!--      font-size: 12px;-->
<!--      margin-left: 30px;-->
<!--    }-->
<!--    .landinghomefaq button {-->
<!--      width: 45%;-->
<!--      border-radius: 12px;-->
<!--      padding: 12px 5% 12px 5%;-->
<!--      font-size: 12px;-->
<!--      font-weight: 500;-->
<!--      align-items: center;-->
<!--    }-->
<!--  }-->



<!--  /* for screens less than 500 pixels */-->
<!--  @media (max-width: 500px) {-->
<!--    .landinghomehero{-->
<!--      background-size: cover;-->
<!--      background-position-x:60%;-->
<!--      width: 100%;-->
<!--      height: auto;-->
<!--      background-repeat:no-repeat;-->
<!--    }-->
<!--    .landinghomeherotext{-->
<!--      border-radius: 25px;-->
<!--      width: 80%;-->
<!--      margin-top: 70%;-->
<!--    }-->
<!--    .landinghomeherotext img {-->
<!--      width: 80%;-->
<!--      margin-top: -175px;-->
<!--      height: 450px;-->
<!--    }-->
<!--    .landinghomeherotext h1 {-->
<!--      margin-top: -200px;-->
<!--      font-size: 18px;-->
<!--      margin-left:0px !important;-->
<!--    }-->
<!--    .landinghomeherotext p{-->
<!--      font-size: 10px;-->
<!--    }-->
<!--    .landinghomeherotext button {-->
<!--      border-radius: 8px;-->
<!--      width: 30%;-->
<!--      padding: 7px 0px 7px 0px;-->
<!--      margin-bottom: 50px;-->
<!--      font-size: 10px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomepf{-->
<!--      width: 100%;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .landinghomepf h4 {-->
<!--      margin-top: 20px;-->
<!--      font-size: 1rem !important;-->
<!--    }-->
<!--    .landinghomepf button {-->
<!--      width: 45%;-->
<!--      border-radius: 12px;-->
<!--      margin-bottom: 20px;-->
<!--      padding: 7px 0px 7px 0px;-->
<!--      font-size: 10px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomesp{-->
<!--      width: 100%;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .landinghomesp h4 {-->
<!--      margin-top: 20px;-->
<!--      font-size: 1rem !important;-->
<!--    }-->
<!--    .landinghomesp button {-->
<!--      width: 45%;-->
<!--      border-radius: 12px;-->
<!--      margin-bottom: 20px;-->
<!--      padding: 7px 0px 7px 0px;-->
<!--      font-size: 10px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomelink {-->
<!--      width: 100%;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--      background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);-->
<!--      background-size: cover;-->
<!--    }-->
<!--    .landinghomelinktext {-->
<!--      border-radius: 20px;-->
<!--      width: 80%;-->
<!--      margin: 50px 0px 50px 0px;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--    }-->
<!--    .landinghomelinktext h4 {-->
<!--      width: 80%;-->
<!--      font-size: 14px;-->
<!--      text-align: center;-->
<!--      margin-top: 50px;-->
<!--      margin-bottom: 50px;-->
<!--    }-->
<!--    .landinghomelinktext p {-->
<!--      color: #2E2E2E;-->
<!--      width: 85%;-->
<!--      font-size: 12px;-->
<!--      text-align: center;-->
<!--      margin: 25px 0px 25px 0px;-->
<!--    }-->
<!--    .landinghomelinktext button{-->
<!--      width: 40%;-->
<!--      padding: 7px 0px 7px 0px;-->
<!--      margin: 0px 0px 25px 0px;-->
<!--      border-radius: 12px;-->
<!--      font-size: 12px;-->
<!--      font-weight: 500;-->
<!--    }-->
<!--    .landinghomelinkfleximg {-->
<!--      width: 80%;-->
<!--      display: flex;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .landinghomelinkfleximg img {-->
<!--      width: 32%;-->
<!--      margin: 0 auto;-->
<!--      height: 110px;-->
<!--    }-->

<!--    /*needing a new image size the current ones will not work on anything smaller than a desktop*/-->
<!--    .landinghomelinkfleximg img:first-child {-->
<!--      padding-top: 40px;-->
<!--      border-radius: 20px;-->
<!--    }-->
<!--    .landinghomelinkfleximg img:last-child {-->
<!--      border-radius: 20px;-->
<!--      padding-bottom: 50px;-->
<!--      padding-top: 0px;-->
<!--    }-->
<!--    .landinghomereview {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--      width: 100%;-->
<!--    }-->
<!--    .landinghomereview h1 {-->
<!--      font-size: 18px !important;-->
<!--    }-->
<!--    .landinghomereview p {-->
<!--      font-size: 12px;-->
<!--    }-->
<!--    .landinghomejoin {-->
<!--      display: flex;-->
<!--      width: 100%;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex img {-->
<!--      width: 30%;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex .macphoto {-->
<!--      position: relative;-->
<!--      right: 225px;-->
<!--      width: 350px;-->
<!--    }-->
<!--    .iphonephoto {-->
<!--      z-index: 1;-->
<!--      /*position: relative;*/-->
<!--      top: 25px;-->
<!--      left:-15px;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex {-->
<!--      display: flex;-->
<!--      width: 95%;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--      margin: 20px 2.5% 20px 2.5%;-->
<!--    }-->
<!--    .landinghomejoin .landinghomejoinflex .landinghomejoincolumn {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      width: 300px;-->
<!--      margin-left: -300px;-->
<!--    }-->
<!--    .landinghomejoincolumn h2 {-->
<!--      font-size: 18px;-->
<!--    }-->
<!--    .landinghomejoincolumn p {-->
<!--      font-size: 10px;-->
<!--    }-->
<!--    .landinghomejoincolumn div {-->
<!--      display: flex;-->
<!--      justify-content: center;-->
<!--      /*width:70%;*/-->
<!--    }-->
<!--    /*the buttons will either need to have a change to the mobile view or wording the property and facility learn more goes to two  lines-->
<!--        this may be fixed needs to be tested.-->
<!--    */-->
<!--    .landinghomejoincolumn div button {-->
<!--      width: 45%;-->
<!--      margin: 0 auto;-->
<!--      border-radius: 12px;-->
<!--      font-size: 9.5px;-->
<!--      font-weight: 500;-->
<!--      padding: 1% .5%;-->
<!--    }-->
<!--    /* Should probably look at this later and fix &#45;&#45; just there to initially know there is supposed to be a video here*/-->
<!--    .landinghomevideo{-->
<!--      width: 100%;-->
<!--      height: 20vh;-->
<!--    }-->
<!--    .landinghomefaq h1 {-->
<!--      font-size: 18px;-->
<!--      margin-top: 20px;-->
<!--    }-->
<!--    .landinghomefaq .landinghomefaqflex {-->
<!--      display: flex;-->
<!--      width: 75%;-->
<!--      justify-content: center;-->
<!--    }-->
<!--    .landinghomefaq .landinghomefaqflex img {-->
<!--      width: 10%;-->
<!--      margin-right: 3%;-->
<!--    }-->
<!--    .landinghomefaq .landinghomefaqflex div {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: flex-start;-->
<!--      width: 90%;-->
<!--    }-->
<!--    .landinghomefaq h4 {-->
<!--      font-size: 11.5px;-->
<!--      margin-top: 20px;-->
<!--    }-->
<!--    .landinghomefaq p {-->
<!--      font-size: 9px;-->
<!--      margin-left: 30px;-->
<!--    }-->
<!--    .landinghomefaq button {-->
<!--      width: 45%;-->
<!--      border-radius: 8px;-->
<!--      padding: 7px 5% 7px 5%;-->
<!--      font-size: 9px;-->
<!--      font-weight: 600;-->
<!--      align-items: center;-->
<!--    }-->
<!--    .row{-->
<!--      margin-right: 0;-->
<!--    }-->

<!--    /*we will need to fix this whenever we actually get the hamberger menu added. will it go horizontal or vertical?-->
<!--    .v-btn__content{-->
<!--    }-->
<!--    */-->
<!--  }-->
<!--</style scoped>-->

<template>
  <div id="joincontainer">
    <!-- HERO SECTION-->
    <v-row
      style="background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg') no-repeat center center; -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; height: 80vh; max-height: 1200px;"
      align-content="center"
      class="pt-12 ma-0"
    >
      <v-card
        max-height="400px"
        height="50vh"
        :width="$vuetify.breakpoint.lgAndUp ? '60%' : '100%'"
        max-width="1200px"
        style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;"
        class="d-flex flex-column justify-center"
        color="rgba(0,0,0,0.7)"
      >
        <div
          style="width: 100%; display: flex; flex-direction: column; flex-wrap: no-wrap;"
        >
          <v-card-title
            ><v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png"
              alt="SOWerk Logo"
              contain
              height="80"
            ></v-img
          ></v-card-title>
          <v-card-text class="d-flex flex-column justify-center">
            <p
              style="font-size: 26px; line-height: 1.25em; word-break: break-word"
              class="white--text text-sm-h4 text-md-h3 text-center font-weight-bold"
            >
              The Approved Vendor Platform
            </p>
            <p
              style="font-size: 18px; line-height: 1.25em; word-break: break-word;"
              class="white--text text-center text-sm-h6 text-md-h5"
            >
              Between Service Providers & Businesses
            </p>

            <div class="text-center">
              <v-btn
                class=" primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                to="/landingpage/join-service-landing"
                >Service Providers</v-btn
              >
              <v-btn
                class=" primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                to="/landingpage/join-product-landing"
                >Property & Facility Managers</v-btn
              >
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-row>

    <!-- SOWERK LINK SECTION -->
    <v-container
      fluid
      text-center
      pb-8
      style="background: linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(129,22,0,1) 100%);; display: flex; flex-direction: column; justify-content: center; align-items: center; box-sizing: border-box;"
      class="skew-top"
    >
      <v-row align="center" justify="center">
        <v-col cols="11">
          <p
            class="text-lg-h3 text-sm-h4 font-weight-bold white--text pt-10"
            style="word-break: break-word; opacity: .8; font-size: 30px; width: 100%;"
          >
            The Link Between Service Providers and Property & Facility Managers
          </p>
        </v-col>
      </v-row>

      <v-row
        class="justify-space-around"
        style="width: 100%; max-width: 1400px;"
      >
        <!-- CARD 1 -->
        <v-col cols="12" sm="10" md="5" class="d-flex px-0 px-sm-3">
          <v-card
            align="center"
            class="ma-0 flex-grow-1"
            style="border-radius: 20px; width: 100% "
          >
            <v-card-title class="px-0">
              <p style="width: 100%;">Property & Facility Manager</p>
            </v-card-title>

            <v-card-text>
              <v-row justify-center>
                <v-col>
                  <v-img
                    class="d-none d-sm-flex"
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"
                    style="object-fit: contain; width: 60%;"
                  ></v-img>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="pa-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%"
                    >
                      Find Vet & Manage Vendors
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-center"
                    style="max-width: 80%; width: 80%; font-size: 17px; font-weight: 500"
                  >
                    Our business to business platform provides companies and
                    property managers the tools to effiecently identify, vet,
                    and manage service providers for each of their locations.
                    <span style="font-weight: 800"
                      >SOWerk is FREE & Powerful</span
                    >
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Any Property or Facility Business
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12" class="pt-1" style="max-width: 100%;">
                  <ul
                    style="column-count: 2; list-style: none; text-align: left; font-size: 17px; font-weight: 500"
                    class="pl-0 pl-sm-12"
                  >
                    <li>- Retail & Hospitality Chains</li>
                    <li>- Commercial Real Estate</li>
                    <li>- Manufacturing Facilities</li>
                    <li>- Warehouse & Distribution</li>
                    <li>- Governments</li>
                    <li>- Restaurant Groups</li>
                    <li>- School Districts</li>
                    <li>- Residential Investments</li>
                    <li>- Military</li>
                  </ul>
                </v-col>

                <v-col cols="12" class="d-flex">
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px;"
                    block
                    large
                    class="flex-grow-1"
                    to="/landingpage/join-product-landing"
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
        <v-col cols="12" sm="10" md="5" class="d-flex px-0 px-sm-3">
          <v-card
            align="center"
            class="ma-0 flex-grow-1"
            style="border-radius: 20px;"
          >
            <v-card-title class="px-0">
              <p style="width: 100%">Service Providers</p>
            </v-card-title>

            <v-card-text>
              <v-row
                style="display: flex; flex-direction: column; flex-wrap: no-wrap"
              >
                <v-col>
                  <v-img
                    class="d-none d-sm-flex"
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
                    style="object-fit: contain; width: 60%;"
                  ></v-img>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Approved Vendors Local & National
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-center"
                    style="max-width: 80%; width: 80%; font-size: 17px; font-weight: 500"
                  >
                    For service providers, SOWerk makes it possible for you to
                    become an approved vendor, receive job request, and
                    communicate with business owners.
                    <span style="font-weight: 800"
                      >It's FREE To Get Started</span
                    >
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col cols="12" class="pa-0">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Tools For Every Service Provider
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12" class="pt-1" style="max-width: 100%;">
                  <ul
                    style="column-count: 2; list-style: none; text-align: left; font-weight: 500; font-size: 17px;"
                    class="pl-0 pl-sm-12"
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
                    <li>- Glass & Window</li>
                    <li>- Enviormental</li>
                    <li>- Survey</li>
                    <li>- Cleaning</li>
                    <li>- Event</li>
                    <li>- Security</li>
                    <li>- Consultant</li>
                  </ul>
                </v-col>

                <v-col cols="12 mt-4" align-self-end>
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px"
                    block
                    large
                    to="/landingpage/join-service-landing"
                    >Service Providers</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- NEW SECTION - All Reviews Section -->
    <!-- hidden for now per colin -->
    <!-- <section class="joincaroselreview">
      <AllReviews v-bind:allReviews="allReviews"></AllReviews>
    </section> -->

    <!-- NEW SECTION - Join Traits Section -->
    <v-container
      fluid
      grid-list-md
      text-center
      pb-8
      style="background:#2B2B2B; display: flex; justify-content: center; align-items:center; flex-direction: column"
    >
      <p
        class="text-lg-h3 text-sm-h4 font-weight-bold white--text pt-10 mb-0 pb-10"
        style="word-break: break-word; opacity: .8; font-size: 30px; width: 100%; line-height: 1.25em"
      >
        Four Reasons Why SOWERK Wins
      </p>

      <v-layout row style="max-width: 1280px; flex-wrap: wrap;">
        <!-- CARD 1 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px; "
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/checkmarkcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Simple & Fast</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              Our simple design makes connecting with other companies quick and
              painless while using either the desktop or mobile app.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 2 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Powerful Tools</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              SOWerk is designed from it’s core to solve for property and
              facility management by providing the tools to vet & communicate
              grow service providers.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 3 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Automated</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              SOWerk has many automated features that help make everyone’s life
              easy, like automatically requiring service providers to requalify
              or automatically updating a service provider’s profile every time
              they achieve approved vendor status.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 4 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Convenient</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
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

    <!-- Per Colin hide for now -->
    <!-- <section class="joinvideo">
      <video></video>
    </section> -->

    <!-- NEW SECTION - JOIN CONNECTION -->
    <section class="joinconnection" style="flex-direction: row;">
      <div class="joinconnectioncolumn">
        <h1>Property & Facility</h1>
        <div class="joinconnectioncontainer border1">
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
            />
            <div class="joinconnectiontext">
              <h3>1. Create Account and Vet Vendors</h3>
              <p>
                In less than 15 minutes, you can have multiple locations setup
                with dedicated staff accounts and live questionnaires vetting
                local & national service providers.
              </p>
            </div>
          </div>

          <!-- RED ARROW -->
          <svg
            width="50%"
            x="0px"
            y="0px"
            viewBox="0 0 600 300"
            style="enable-background:new 0 0 600 300;"
            xml:space="preserve"
          >
            <path
              id="Polygon_24"
              class="st0"
              d="M302.6,185.8c-1.7,0.2-3.5,0.2-5.2,0l-277.3-30c-28.3-3.1-25.9-42.1,2.6-42.1h554.7
	        c28.5,0,31,39.1,2.6,42.1L302.6,185.8z"
            />
          </svg>

          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
            />
            <div class="joinconnectiontext">
              <h3>2. Vendor Management & RFP</h3>
              <p>
                When you need a service at one of your properties, SOWerk makes
                it easy to communicate in one click to your approved vendors the
                request for a bid.
              </p>
            </div>
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
            <div class="joinconnectiontext">
              <h3>1. Build A Profile</h3>
              <p>
                SOWerk makes it easy & quick for you to show off your brand,
                company background, and we help promote all companies where you
                are an approved vendor. Your SOWerk profile is both easy and
                powerful.
              </p>
            </div>
          </div>

          <!-- RED ARROW -->
          <svg
            width="50%"
            x="0px"
            y="0px"
            viewBox="0 0 600 300"
            style="enable-background:new 0 0 600 300;"
            xml:space="preserve"
          >
            <path
              id="Polygon_24"
              class="st0"
              d="M302.6,185.8c-1.7,0.2-3.5,0.2-5.2,0l-277.3-30c-28.3-3.1-25.9-42.1,2.6-42.1h554.7
	        c28.5,0,31,39.1,2.6,42.1L302.6,185.8z"
            />
          </svg>

          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profilecopy.png"
            />
            <div class="joinconnectiontext">
              <h3>2. Approved Vendor Status</h3>
              <p>
                Use your profile to qualify for approve vendor status in as
                little as one click.
              </p>
            </div>
          </div>

          <!-- RED ARROW -->
          <svg
            width="50%"
            x="0px"
            y="0px"
            viewBox="0 0 600 300"
            style="enable-background:new 0 0 600 300;"
            xml:space="preserve"
          >
            <path
              id="Polygon_24"
              class="st0"
              d="M302.6,185.8c-1.7,0.2-3.5,0.2-5.2,0l-277.3-30c-28.3-3.1-25.9-42.1,2.6-42.1h554.7
	        c28.5,0,31,39.1,2.6,42.1L302.6,185.8z"
            />
          </svg>

          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/appcopy.png"
            />
            <div class="joinconnectiontext">
              <h3>3. Get The Job</h3>
              <p>
                We make it easy and powerful for businesses to communicate their
                needs to approved vendors. We also make it easy for you to react
                quickly with a bid.
              </p>
            </div>
          </div>
          <button @click="$router.push('/landingpage/service-provider')">
            See All Features
          </button>
        </div>
      </div>
    </section>

    <!-- per colin hide reviews for now will get reviews in the next couple weeks. 10/18 -->
    <!-- <Reviews v-bind:reviews="reviews"></Reviews> -->

    <OftenAskPF></OftenAskPF>
    <OftenAskSP></OftenAskSP>
  </div>
</template>

<script>
import Reviews from '../components/landing/general/Reviews'
import AllReviews from '../components/landing/general/AllReviews'
import OftenAskPF from '../components/landing/property-manager/OftenAskPF'
import OftenAskSP from '../components/landing/service-provider/OftenAskSP'

export default {
  layout: 'fullwidth',
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
  background: linear-gradient(
    180deg,
    rgba(166, 28, 0, 1) 35%,
    rgba(129, 22, 0, 1) 100%
  );
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

.joinconnection {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'),
    linear-gradient(#444444, #2b2b2b);
  background-size: cover;
}
.joinconnection h1 {
  color: white;
  width: 100%;
  font-size: 50px;
  font-weight: 400;
  line-height: 1.25em;
  text-align: center;
  margin: 0px 0px 20px 0px;
}

.joinconnectiontext {
  width: 100%;
  padding: 10px 20px 10px 30px;
}

.joinconnection .joinconnectioncolumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 20px 10px 20px 10px;
}
.border1 {
  border-top: 5px solid #a61c00;
  border-left: 5px solid #a61c00;
  border-right: none !important;
  border-bottom: 5px solid #a61c00;
  padding: 20px 10px 20px 10px;
}
.border2 {
  border-top: 5px solid #a61c00;
  border-right: 5px solid #a61c00;
  border-bottom: 5px solid #a61c00;
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
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px 0px 10px 0px;
}
.joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox h3 {
  font-size: 23px;
  width: 100%;
  font-weight: 400;
  text-align: left;
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

.st0 {
  fill: #a52022;
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

@media (max-width: 1060px) {
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
  .joinconnection {
    flex-direction: column!important;
  }

  .joinconnection h1 {
    font-size: 43px;
  }

  .joinconnection .joinconnectioncolumn {
    width: 40%;
  }
  .joinconnectioncontainerbox img {
    width: 40%;
  }
}

@media (max-width: 680px) {
  .joinconnection h1 {
    font-size: 42px;
  }
  .joinconnection {
    flex-direction: column;
  }

  .joinconnection .joinconnectioncolumn {
    width: 90%;
  }

  .joinconnection h1 {
    font-size: 32px;
    width: 100%;
  }
}
</style>


