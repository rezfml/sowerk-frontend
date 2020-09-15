<template>
  <div id="aboutcontainer">
    <section class="abouthero">
      <h1>About SOWerk</h1>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100"/>
      </svg>
    </section>

    <section class="aboutdescription">
      <div class="aboutdescriptionflex">
        <img />
        <div class="aboutdescriptiontext">
          <h1>It all started with “What If…”</h1>
          <p>What if we could simplify the business connection between service providers and property & facility managers?</p>
          <p>Could we make it easier for both parties to manage relationships and do business?</p>
          <p>Today, SOWerk is proud to empower relationships, make life easier and complete the link between property/facility owners and approved vendors.</p>
          <p>More work and better work get done through SOWerk.</p>
          <div class="aboutbuttoncontainer">
            <button>LEARN MORE - SERVICE PROVIDER </button>
            <button>LEARN MORE - PROPERTY & FACILITY</button>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100"/>
      </svg>
    </section>

    <section class="aboutplatform">
      <div class="aboutplatformcontainer">
        <h1>The Approved Vendor Platform</h1>
        <div class="aboutplatformcontainerfleximg">
          <img src="./img/Untitled_Artwork 3 copy.png" />
          <img src="./img/red-arrow-icon-vector-eps-600w-1715070490.webp"/>
          <img src="./img/Untitled_Artwork 2 copy 2.png"/>
        </div>
        <p>SOWerk is the link between service providers (local or national) and property & facility managers. Our business to business platform provides companies and property managers the tools to effiecently identify, vet, and manage service providers for each of their locations. For service providers, SOWerk makes it possible for you to become an approved vendor, recieve job request, and communicate with business owners.</p>
        <button>JOIN SOWERK</button>
      </div>
    </section>

    <section class="aboutfaq">
      <h1>Property and Facility Managers Often Ask</h1>
      <div class="aboutfaqflex">
        <img />
        <div>
          <h4>Is This Going To Create More Work For Me?</h4>
          <p>Actually, we designed SOWerk to be less work for you. Think of SOWerk like connecting with service providers on social media, except they have to meet your approved provider requirements. From here you can easily manage and communicate with your approved service providers.  </p>
        </div>
      </div>
      <div class="aboutfaqflex">
        <img />
        <div>
          <h4>Will SOWerk Save Us Money? Will It Protect Our Investments?</h4>
          <p>If time is money and quality is everything then yes SOWerk can help. SOWerk makes it efficent for any staff member to vet & manage local/national service providers, such as getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make service providers requalify annualy on things like insurance coverage and licenses so you don’t have to.</p>
        </div>
      </div>
      <div class="aboutfaqflex">
        <img />
        <div>
          <h4>Will SOWerk Help Shield Me From Cold Calls?</h4>
          <p>Sales is part of any business but sometimes you just need place to send the salesman where they can apply for your approved service program. SOWerk is your solution. </p>
        </div>
      </div>
      <button>PROPERTY & FACILITY LEARN MORE</button>
      <h1>Service Providers Generally Ask</h1>
      <div class="aboutfaqflex">
        <img />
        <div>
          <h4>Do I Seriously Get More Jobs?</h4>
          <p>Yes, Property & Facility managers of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet service providers request bids.<p>
          <p>SOWerk also helps you look good when applying for approved vendor programs, but we also make it easy to share those good looks with others. Next time your bidding a job show off your resume by emailing or texting your SOWerk profile.</p>
        </div>
      </div>
      <div class="aboutfaqflex">
        <img />
        <div>
          <h4>Is SOWerk Time Consuming and Hard To Use?</h4>
          <p>Not at all, a SOWerk profile only takes 10 minuets to setup.</p>
          <p>With only a click or two on your computer or mobile device you can use your SOWerk Profile to apply for approved vendor programs</p>
          <p>Automatic Updates: When you become an approved vendor for a company we automaticly display it on your profile.</p>
        </div>
      </div>
      <div class="aboutfaqflex">
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

</script>

<style scoped>
  #aboutcontainer{
    width: 100%;
    padding: 0px !important;
  }

  .abouthero {
    width: 100%;
    background: url("img\write-593333.jpg");
    background-size: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .abouthero h1 {
    color: white;
    width: 50%;
    text-align: center;
    margin: 100px 0px 100px 0px;
    font-size: 55px;
  }
  .abouthero svg {
    width: 100%;
    height: 9vh;
    fill: #A61C00;
  }
  .aboutdescription{
    background: #A61C00;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    color: white;
  }
  .aboutdescriptionflex{
    display: flex;
    width: 90%;
    justify-content: center;
    border-radius: 20px;
    margin: -50px 0px 100px 0px;
  }
  .aboutdescriptionflex img {
    width: 40%;
  }
  .aboutdescriptiontext{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin-top: 25px;
  }
  .aboutdescriptionflex h1 {
    font-size: 35px;
  }
  .aboutdescriptionflex p {
    font-size: 18px;
    align-self: flex-start;
  }
  .aboutdescription svg {
    width: 100%;
    height: 9vh;
    fill: #444444;
  }
  .aboutbuttoncontainer {
    display: flex;
    width: 100%;
  }
  .aboutdescriptionflex button {
    background: transparent;
    color: white;
    border: 1px solid white;
    width: 45%;
    padding: 10px 0px 10px 0px;
    font-size: 18px;
    border-radius: 20px;
    margin: 0px 2.5% 0px 2.5%;
  }

  .aboutplatform {
    background-image: url(".\img\Background Texture-155.png"), linear-gradient(#444444, #2B2B2B);
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .aboutplatform .aboutplatformcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    width: 65%;
    border-radius: 20px;
    margin-top: -75px;
  }
  .aboutplatformcontainer h1 {
    background: #47494E;
    width: 70%;
    border-radius: 20px;
    text-align: center;
    padding: 10px 0px 10px 0px;
    margin-top: -20px;
    font-size: 50px;
    color: white;
  }
  .aboutplatformcontainerfleximg {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .aboutplatformcontainerfleximg img {
    width: 32%;
    margin: 0 auto;
  }
  .aboutplatformcontainerfleximg img:first-child {
    border: 1px solid #A61C00;
    border-radius: 20px;
    padding-top: 150px;
    padding-bottom: 0px;
  }
  .aboutplatformcontainerfleximg img:last-child {
    border: 1px solid #A61C00;
    border-radius: 20px;
    padding-bottom: 150px;
  }
  .aboutplatformcontainer p {
    width: 90%;
    font-size: 22px;
  }
  .aboutplatformcontainer button {
    background: #A61C00;
    border-radius: 20px;
    padding: 10px 0px 10px 0px;
    width: 50%;
    margin-bottom: 20px;
    font-size: 16px;
  }
  .aboutfaq {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .aboutfaq h1 {
    color: #A61C00;
    font-size: 55px;
    margin-top: 20px;
  }
  .aboutfaq .aboutfaqflex {
    display: flex;
    width: 65%;
    justify-content: center;
  }
  .aboutfaq .aboutfaqflex img {
    width: 10%;
    margin-right: 3%;
  }
  .aboutfaq .aboutfaqflex div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 87%;
  }
  .aboutfaq h4 {
    font-size: 25px;
    margin-top: 20px;
  }
  .aboutfaq p {
    font-size: 18px;
    margin-left: 30px;
  }
  .aboutfaq button {
    background: #A61C00;
    color: white;
    width: 40%;
    border-radius: 20px;
    padding: 10px 0px 10px 0px;
  }
</style>
