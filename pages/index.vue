<template>
  <div id="joincontainer">
    <!-- HERO SECTION-->
    <v-row
      style="background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg') no-repeat center center; -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; height: 80vh; max-height: 1200px; padding-top: 275px; padding-bottom: 100px;"
      align-content="center"
      class="pt-md-16 ma-0"
    >
      <v-card
        max-height="400px"
        :height="$vuetify.breakpoint.mdAndUp ? '50vh' : '45vh'"
        :width="$vuetify.breakpoint.lgAndUp ? '60%' : '100%'"
        max-width="1200px"
        style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;"
        class="d-flex flex-column justify-center"
        id="herocorners"
        color="rgba(0,0,0,0.7)" >
        <div style="width: 100%; display: flex; flex-direction: column; flex-wrap: nowrap;" >
          <v-card-title
            ><v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png"
              alt="SOWerk Logo"
              contain
              :height="$vuetify.breakpoint.mdAndUp ? '80px' : '55px'"
            ></v-img
          ></v-card-title>
          <v-card-text class="d-flex flex-column justify-center">
            <p
              style="font-size: 22px; line-height: 1.25em; word-break: break-word"
              class="white--text text-sm-h4 text-md-h3 text-center font-weight-bold"
            >
              The Approved Vendor Platform
            </p>
            <div class="text-center">
              <v-btn
                class=" primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                to="/landingpage/join-service-landing"
                >Vendors</v-btn
              >
              <v-btn
                class=" primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                to="/landingpage/join-product-landing"
                >Property & Businesses</v-btn
              >
            </div>
          </v-card-text>
        </div>
      </v-card>

      <!--      Maint modal on render-->
      <!-- <transition name="slide-fade">
        <v-card v-if="loadModal === true && (this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs)">
          <template style="margin: 3%; justify-content: center" >
            <p style="padding: 3%; font-size: 1.7rem; color: #A61c00; font-weight: 700;text-align:center;">This site is not yet optimized for smaller screen sizes, for the best experience please use a higher resolution screen.</p>
            <v-btn @click="closeModal()" style="z-index: 10; border-radius: 10%;" color="primary">X</v-btn>
          </template>
        </v-card>
      </transition> -->

    </v-row>




    <!--BUSINESSES & VENDORS COME TOGETHER ON SOWERK SECTION -->
    <PFandVComeTogether/>
    <!-- WHY SOWERK WINS BIG SECTION -->
    <SowerkWinsBig/>
    <!-- Business & Vendor Account Join Connection Section -->
    <PFandVJoinConnection />
    <!-- BUSINESS & VENDOR COMMON QUESTIONS ASKED  -->
    <!-- <PFandVQuestionsAsked/> -->
    <OftenAskPF />
    <OftenAskSP />


    <!-- CAROSEL REVIEWS hidden for now per colin -->
    <!-- <section class="joincaroselreview">
      <AllReviews v-bind:allReviews="allReviews"></AllReviews>
    </section> -->

    <!-- SOWERK VIDEO Per Colin hide for now -->
    <!-- <section class="joinvideo">
      <video></video>
    </section> -->

    <!-- per colin hide reviews for now will get reviews in the next couple weeks. 10/18 -->
    <!-- <Reviews v-bind:reviews="reviews"></Reviews> -->
    <!-- <ToTopButton/> -->
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>

    <!-- GOOGLE TAG MANAGER -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M32VKDB');</script>

    <!-- GOOGLE TAG MANAGER(NO SCRIPT) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M32VKDB"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <!-- FACEBOOK PIXEL CODE -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '296647381768376');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=296647381768376&ev=PageView&noscript=1"
    /></noscript>

  </div>
</template>

<script>
import Reviews from '../components/landing/general/Reviews'
import AllReviews from '../components/landing/general/AllReviews'
import PFandVComeTogether from '../components/landing/general/PFandVComeTogether'
import SowerkWinsBig from '../components/landing/general/SowerkWinsBig'
import PFandVJoinConnection from '../components/landing/general/PFandVJoinConnection'
import PFandVQuestionsAsked from '../components/landing/general/PFandVQuestionsAsked'
import ToTopButton from '../components/landing/general/ToTopButton'
import OftenAskPF from '~/components/landing/property-manager/OftenAskPF';
import OftenAskSP from '~/components/landing/service-provider/OftenAskSP';

export default {
  layout: 'fullwidth',
  data: () => ({
    loadModal: true,
    allReviews: [],
    reviews: [],
    fab: false,
  }),
  components: {
    Reviews,
    AllReviews,
    PFandVComeTogether,
    SowerkWinsBig,
    PFandVJoinConnection,
    PFandVQuestionsAsked,
    ToTopButton,
    OftenAskPF,
    OftenAskSP
  },
  mounted() {
    this.getReviews()
    this.getAllReviews()
  },
  methods: {
    closeModal() {
      this.loadModal = false
    },
    async getAllReviews() {
      let { data, status } = await this.$http
        .get('https://www.sowerkbackend.com/api/reviewsLimit?limit=20&offset=0')
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
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style scoped>
.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}

#joincontainer {
  width: 100%;
  padding: 0px !important;
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


  @media(max-width: 375px) {
  p.text-center {
      width: 90% !important;
      max-width: 90% !important;
    }
  }
</style>


