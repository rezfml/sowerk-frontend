<template>
  <div id="joincontainer">
    <section class="joinhero">
      <div class="joinherotext">
        <img
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153.png"
        />
        <!-- This needs to be an img idk where it is located though -->
        <h1>The Approved Vendor Platform</h1>
        <p>The Link Between Service Providers & Businesses</p>
        <div>
          <button>SERVICE PROVIDERS</button>
          <button>PROPERTY & FACILITY MANAGERS</button>
        </div>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg>
    </section>

    <section class="joinlink">
      <div>
        <h1>
          SOWerk Is The Link Between Service Providers and Property & Facility
          Managers
        </h1>
      </div>
      <div class="joinlinkflex">
        <div class="joinlinkflexcolumn">
          <div>
            <h4>Property & Facility Managers</h4>
          </div>
          <div>
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"
            />
          </div>
          <div>
            <p>
              Our business to business platform provides companies and property
              managers the tools to effiecently identify, vet, and manage
              service providers for each of their locations.
            </p>
          </div>
          <div classname="joinlinklists">
            <ul>
              <li>Retail & Hospitality Chains</li>
              <li>Commercial Real Estate Properties</li>
              <li>Manufacturing Facilities</li>
              <li>Warehouse & Distribution</li>
              <li>Governments</li>
              <li>Restaurant Groups</li>
            </ul>
          </div>
          <button>PROPERTY & FACILITY MANAGERS</button>
        </div>
        <img />
        <div class="joinlinkflexcolumn">
          <div>
            <h4>Service Providers</h4>
          </div>
          <div>
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
            />
          </div>
          <div>
            <p>
              For service providers, SOWerk makes it possible for you to become
              an approved vendor, receive job request, and communicate with
              business owners
            </p>
          </div>
          <div classname="joinlinklists">
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
          <button>SERVICE PROVIDERS</button>
        </div>
      </div>
    </section>

    <section class="joincaroselreview">
      <AllReviews v-bind:allReviews="allReviews"></AllReviews>
    </section>

    <JoinTraits></JoinTraits>

   
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
          <button>See All Features</button>
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
          <button>See All Features</button>
        </div>
      </div>
    </section>

    <Reviews v-bind:reviews="reviews"></Reviews>
    <OftenAskPF></OftenAskPF>
    <OftenAskSP></OftenAskSP>
    
  </div>
</template>

<script>
import Reviews from '../../components/landing/Reviews'
import AllReviews from '../../components/landing/AllReviews'
import OftenAskPF from '../../components/landing/OftenAskPF'
import OftenAskSP from '../../components/landing/OftenAskSP'
import JoinTraits from '../../components/landing/JoinTraits.vue'


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
    JoinTraits
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
.joinhero {
  background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.joinhero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
  margin-top: 20px;
}
.joinherotext {
  background: rgb(0, 0, 0, 0.65);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.joinherotext h1,
.joinherotext p,
.joinherotext button {
  color: rgb(255, 255, 255, 1);
}

/* Need to crop image for responsiveness */
.joinherotext img {
  margin-top: -200px;
  width: 580px;
  height: 580px;
}
.joinherotext h1 {
  margin-top: -225px;
  font-size: 2.5vw;
  padding-top: 20px;
}
.joinherotext p {
  font-size: 1.3vw;
}
.joinherotext div {
  width: 100%;
  display: flex;
  justify-content: center;
}
.joinherotext button {
  background: #a61c00;
  border-radius: 20px;
  width: 45%;
  padding: 20px 0px 20px 0px;
  margin: 0px 5% 50px 5%;
  font-size: 1.42vw;
}

.joinlink {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #a61c00;
}
.joinlink div {
  display: flex;
  justify-content: center;
}

.joinlink div h1 {
  color: white !important;
  opacity: 0.8;
  font-size: 2.5vw;
  text-align: center;
  width: 70%;
  margin: 20px 0px 20px 0px;
}
.joinlinkflex h4 {
  width: 100%;
  font-size: 1.3vw;
  margin: 10px 0px 10px 0px;
}
.joinlinkflex p {
  font-size: 18px;
  width: 90%;
  text-align: center;
  border-bottom: 1px solid #a61c00;
}
.joinlinkflex p {
  padding-bottom: 20px;
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
  justify-content: start;
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
  width: 45%;
  /* margin: 10px 0px 10px 0px; */
  padding-top: 15px;
  padding-bottom: 15px;
}
.joinlinkflexcolumn div {
  display: flex;
  justify-content: center;
  width: 100%;
}

.joinlinkflexcolumn div ul {
  /* width: 45%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  line-height: 23px;
}
.joinlinkflexcolumn ul {
  font-size: 18px !important;
}

.joinlinkflexcolumn div ul li {
  text-align: left;
}
.joinlinkflexcolumn button {
  background: #a61c00;
  width: 90%;
  margin: 20px 0;
  padding: 15px 10px 15px 10px;
  color: white;
  border-radius: 20px;
  font-size: 1vw;
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
  .joinherotext p {
    font-size: 15px;
  }

  .joinherotext img {
    width: 525px;
    height: 525px;
  }
  .joinlinkflex p {
    font-size: 16px;
  }

  .joinlinkflex h4 {
    font-size: 18px;
  }

  .joinlinkflexcolumn ul li {
    font-size: 16px;
  }

  .joinlinkflexcolumn button {
    font-size: 15px;
  }

  .jointrait h5 {
    font-size: 21px;
  }

  .jointrait p {
    font-size: 14px;
  }
}

@media (max-width: 1080px) {
  .joinlink div h1 {
    width: 88%;
    font-size: 28px;
  }

  .joinlinkflex {
    width: 90%;
  }

  .joinlinkflexcolumn button {
    font-size: 14px;
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

@media (max-width: 980px) {
  .joinherotext h1 {
    font-size: 25px;
  }
  .joinherotext img {
    width: 500px;
    height: 500px;
  }
  .joinherotext button {
    padding: 15px 0 15px 0;
  }

  .joinlinkflex {
    width: 100%;
  }

  .joinlink .joinlinkflex .joinlinkflexcolumn {
    margin: 10px 5% 20px 5%;
    width: 37%;
  }

  .joinlinkflexcolumn ul li {
    font-size: 15px;
  }

  .joinlinkflexcolumn button {
    font-size: 13px;
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
  .joinherotext {
    width: 100%;
    border-radius: 0;
  }

  .joinherotext button {
    font-size: 13px;
  }

  .joinherotext img {
    width: 480px;
    height: 480px;
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
    width: 40%;
  }
}

@media (max-width: 680px) {
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
