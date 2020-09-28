<template>
  <div id="joincontainer">
    <section class="joinhero">
      <div class="joinherotext">
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153.png" /> <!-- This needs to be an img idk where it is located though -->
        <h1>The Approved Vendor Platform</h1>
        <p>The Link Between Service Providers & Businesses</p>
        <div>
          <button>SERVICE PROVIDERS</button>
          <button>PROPERTY & FACILITY MANAGERS</button>
        </div>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100"/>
      </svg>
    </section>

    <section class="joinlink">
      <h1>SOWerk Is The Link Between Service Providers and Property & Facility Managers</h1>
      <div class="joinlinkflex">
        <div class="joinlinkflexcolumn">
          <h4>Property & Facility Managers</h4>
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"/>
          <p>Our business to business platform provides companies and property managers the tools to effiecently identify, vet, and manage service providers for each of their locations.</p>
          <ul>
            <li>Retail & Hospitality Chains</li>
            <li>Commercial Real Estate Properties</li>
            <li>Manufacturing Facilities</li>
            <li>Warehouse & Distribution</li>
            <li>Governments</li>
            <li>Restaurant Groups</li>
          </ul>
          <button>PROPERTY & FACILITY MANAGERS LEARN MORE</button>
        </div>
        <img />
        <div class="joinlinkflexcolumn">
          <h4>Service Providers</h4>
          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"/>
          <p>For service providers, SOWerk makes it possible for you to become an approved vendor, receive job request, and communicate with business owners</p>
          <div>
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
          <button>SERVICE PROVIDERS LEARN MORE</button>
        </div>
      </div>
    </section>

    <section class="joincaroselreview">
      <AllReviews v-bind:allReviews="allReviews"></AllReviews>
    </section>

    <section class="jointraits">
      <div class="jointrait">
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/checkmarkcopy.png"/>
        <h5>Simple & Fast</h5>
        <p>Our simple design makes connecting with other companies quick and painless while using either the desktop or mobile app.</p>
      </div>
      <div class="jointrait">
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardcopy.png"/>
        <h5>Powerful Tools</h5>
        <p>SOWerk is designed from it’s core to solve for property and facility management by providing the tools to vet & communicate grow service providers.</p>
      </div>
      <div class="jointrait">
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"/>
        <h5>Automated</h5>
        <p>SOWerk has many automated features that help make everyone’s life easy, like automatically requiring service providers to requalify or automatically updating a service provider’s profile every time they achieve approved vendor status. </p>
      </div>
      <div class="jointrait">
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"/>
        <h5>Convenient</h5>
        <p>For the facility manager in the middle of the night that needs to contact all your approved plumbers for help or a local service provider that powers his business through a smart phone, SOWerk is design to be convenient. </p>
      </div>
    </section>

    <section class="joinvideo">
      <video></video>
    </section>

    <section class="joinconnection">
      <div class="joinconnectioncolumn">
        <h1>Property & Facility</h1>
        <div class="joinconnectioncontainer border1">
          <div class="joinconnectioncontainerbox">
            <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"/>
            <h3>1. Create Account and Vet Vendors</h3>
            <p>In less than 15 minutes, you can have multiple locations setup with dedicated staff accounts and live questionnaires vetting local & national service providers. </p>
          </div>
          <div class="joinconnectioncontainerbox">
            <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"/>
            <h3>2. Vendor Management & RFP</h3>
            <p>When you need a service at one of your properties, SOWerk makes it easy to communicate in one click to your approved vendors the request for a bid. </p>
          </div>
          <button>See All Features</button>
        </div>
      </div>
      <img />
      <div class="joinconnectioncolumn">
        <h1>Service Providers</h1>
        <div class="joinconnectioncontainer border2">
          <div class="joinconnectioncontainerbox">
            <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_1_copy.png"/>
            <h3>1. Build A Profile</h3>
            <p>SOWerk makes it easy & quick for you to show off your brand, company background, and we help promote all companies where you are an approved vendor. Your SOWerk profile is both easy and powerful. </p>
          </div>
          <div class="joinconnectioncontainerbox">
            <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/profilecopy.png"/>
            <h3>2. Approved Vendor Status</h3>
            <p>Use your profile to qualify for approve vendor status in as little as one click. </p>
          </div>
          <div class="joinconnectioncontainerbox">
            <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/appcopy.png"/>
            <h3>3. Get The Job</h3>
            <p>We make it easy and powerful for businesses to communicate their needs to approved vendors. We also make it easy for you to react quickly with a bid. </p>
          </div>
          <button>See All Features</button>
        </div>
      </div>
    </section>

    <Reviews v-bind:reviews="reviews"></Reviews>

    <section class="joinfaq">
      <h1>Property and Facility Managers Often Ask</h1>
      <div class="joinfaqflex">
        <img />
        <div>
          <h4>Is This Going To Create More Work For Me?</h4>
          <p>Actually, we designed SOWerk to be less work for you. Think of SOWerk like connecting with service providers on social media, except they have to meet your approved provider requirements. From here you can easily manage and communicate with your approved service providers.  </p>
        </div>
      </div>
      <div class="joinfaqflex">
        <img />
        <div>
          <h4>Will SOWerk Save Us Money? Will It Protect Our Investments?</h4>
          <p>If time is money and quality is everything then yes SOWerk can help. SOWerk makes it efficent for any staff member to vet & manage local/national service providers, such as getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make service providers requalify annualy on things like insurance coverage and licenses so you don’t have to.</p>
        </div>
      </div>
      <div class="joinfaqflex">
        <img />
        <div>
          <h4>Will SOWerk Help Shield Me From Cold Calls?</h4>
          <p>Sales is part of any business but sometimes you just need place to send the salesman where they can apply for your approved service program. SOWerk is your solution. </p>
        </div>
      </div>
      <button>PROPERTY & FACILITY LEARN MORE</button>
      <h1>Service Providers Generally Ask</h1>
      <div class="joinfaqflex">
        <img />
        <div>
          <h4>Do I Seriously Get More Jobs?</h4>
          <p>Yes, Property & Facility managers of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet service providers request bids.<p>
          <p>SOWerk also helps you look good when applying for approved vendor programs, but we also make it easy to share those good looks with others. Next time your bidding a job show off your resume by emailing or texting your SOWerk profile.</p>
        </div>
      </div>
      <div class="joinfaqflex">
        <img />
        <div>
          <h4>Is SOWerk Time Consuming and Hard To Use?</h4>
          <p>Not at all, a SOWerk profile only takes 10 minuets to setup.</p>
          <p>With only a click or two on your computer or mobile device you can use your SOWerk Profile to apply for approved vendor programs</p>
          <p>Automatic Updates: When you become an approved vendor for a company we automaticly display it on your profile.</p>
        </div>
      </div>
      <div class="joinfaqflex">
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
import Reviews from '../../components/landing/Reviews';
import AllReviews from '../../components/landing/AllReviews';

export default {
  data: () => ({
    allReviews: [],
    reviews: []
  }),
  components: {
    Reviews,
    AllReviews
  },
  mounted() {
    this.getReviews();
    this.getAllReviews();
  },
  methods: {
    async getAllReviews() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/reviewsLimit?limit=20&offset=0').catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.allReviews = data;
        console.log(this.allReviews, 'allReviews');
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
  #joincontainer{
    width: 100%;
    padding: 0px !important;
    font-family: Roboto;
  }
  .joinhero{
    background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg');
    background-size: 100%;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .joinhero svg {
    width: 100%;
    height: 9vh;
    fill: #A61C00;
    margin-top: 20px;
  }
  .joinherotext{
    background: rgb(0, 0, 0, 0.65);
    border-radius: 25px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }

  .joinherotext h1, .joinherotext p, .joinherotext button {
    color: rgb(255, 255, 255, 1);
  }
  .joinherotext img {
    width: 50%;
    margin-top: -200px;
    height: 600px;
  }
  .joinherotext h1 {
    margin-top: -250px;
    font-size: 55px;
  }
  .joinherotext p{
    font-size: 23px;
  }
  .joinherotext div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .joinherotext button {
    background: #A61C00;
    border-radius: 20px;
    width: 45%;
    padding: 20px 0px 20px 0px;
    margin: 0px 5% 50px 5%;
    font-size: 20px;
  }

  .joinlink {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #A61C00;
  }
  .joinlink h1 {
    color: white !important;
    font-size: 55px;
    text-align: center;
    width: 70%;
    margin: 20px 0px 20px 0px;
  }
  .joinlinkflex h4 {
    font-size: 22px;
    margin: 10px 0px 10px 0px;
  }
  .joinlinkflex p {
    font-size: 18px;
    width: 90%;
    text-align: center;
    border-bottom: 1px solid #A61C00;
  }
  .joinlinkflex p {
    padding-bottom: 40px;
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
    width: 30%;
    margin: 10px 5% 20px 5%;
    border-radius: 20px;
    background: white;
    text-align: center;
  }
  .joinlinkflexcolumn:nth-child(1) p{
    padding-bottom: 20px !important;
  }
  .joinlink .joinlinkflex .joinlinkflexcolumn img {
    width:50%;
    margin: 10px 0px 10px 0px;
  }
  .joinlinkflexcolumn div {
    display: flex;
    justify-content: center;
  }
  .joinlinkflexcolumn div ul {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .joinlinkflexcolumn ul {
    font-size: 18px !important;
  }
  .joinlinkflexcolumn button {
    background: #A61C00;
    width: 80%;
    margin: 20px 10%;
    padding: 5px 10px 5px 10px;
    color: white;
    border-radius: 20px;
    font-size: 20px;
    font-family: Roboto;
  }

  .joincaroselreview {
    background: #151515;
    height: auto;
    width: 100%;
    padding: 0px 0px 100px 0px;
  }
  .jointraits {
    width: 100%;
    display: flex;
    justify-content: center;
    background: #2B2B2B;
  }

  .jointrait {
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 20px;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: -75px;
    margin-bottom: 25px;
  }

  .jointrait img {
    width: 50%;
    margin: 20px 25% 20px 25%;
  }
  .jointrait h5 {
    font-size: 22px;
  }
  .jointrait p {
    font-size: 18px;
    width: 80%;
    text-align: center;
    margin: 20px 0px 20px 0px;
  }
  .joinvideo{
    background: #151515;
    height: 30vh;
  }

  .joinconnection {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);
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
  .border1{
    border-top: 1px solid #A61C00;
    border-left: 1px solid #A61C00;
    border-right: none !important;
    border-bottom: 1px solid #A61C00;
    padding: 20px 10px 20px 10px;
  }
  .border2{
    border-top: 1px solid #A61C00;
    border-right: 1px solid #A61C00;
    border-bottom: 1px solid #A61C00;
    padding: 20px 10px 20px 10px;
  }
  .joinconnectioncolumn .joinconnectioncontainer{
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
    padding: 10px;
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
  .joinconnectioncolumn .joinconnectioncontainer button{
    background: #A61C00;
    color: white;
    border-radius: 20px;
    padding: 10px 0px 10px 0px;
    width: 50%;
    font-size: 18px;
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

  .joinfaq {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .joinfaq h1 {
    color: #A61C00;
    font-size: 55px;
    margin-top: 20px;
  }
  .joinfaq .joinfaqflex {
    display: flex;
    width: 65%;
    justify-content: center;
  }
  .joinfaq .joinfaqflex img {
    width: 10%;
    margin-right: 3%;
  }
  .joinfaq .joinfaqflex div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 87%;
  }
  .joinfaq h4 {
    font-size: 25px;
    margin-top: 20px;
  }
  .joinfaq p {
    font-size: 18px;
    margin-left: 30px;
  }
  .joinfaq button {
    background: #A61C00;
    color: white;
    width: 40%;
    border-radius: 20px;
    padding: 10px 0px 10px 0px;
  }
</style>
