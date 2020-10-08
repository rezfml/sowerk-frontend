<template>
  <div id="aboutcontainer">
    <section class="abouthero">
      <h1>About SOWerk</h1>
      <!-- <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg> -->
    </section>

    <section class="aboutdescription">
      <div class="aboutdescriptionflex">
        <div class="aboutdescriptionimg">
          <!-- <img
            class="aboutdescriptionimg1"
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png"
          /> -->
          <img
            class="aboutdescriptionimg2"
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png"
          />
        </div>
        <div class="aboutdescriptiontext">
          <h1>It all started with “What If…”</h1>
          <p>
            What if we could simplify the business connection between service
            providers and property & facility managers?
          </p>
          <p>
            Could we make it easier for both parties to manage relationships and
            do business?
          </p>
          <p>
            Today, SOWerk is proud to empower relationships, make life easier
            and complete the link between property/facility owners and approved
            vendors.
          </p>
          <p>More work and better work get done through SOWerk.</p>
          <div class="aboutbuttoncontainer">
            <button  @click="$router.push('/landingpage/service-provider')">LEARN MORE - SERVICE PROVIDER</button>
            <button  @click="$router.push('/landingpage/property-manager')">LEARN MORE - PROPERTY & FACILITY</button>
          </div>
        </div>
      </div>
      <!-- <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg> -->
    </section>

      <v-row style="background-image: linear-gradient(rgba(43,43,43,1) 0%, rgba(68,68,68,0.93) 100%), url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'); background-position: bottom; background-size: 75%; background-repeat: repeat-x;" align-content="center" justify="center" >
      <v-card height="auto" width="70%" class="py-16 my-12" style="border-radius: 20px; top: -220px" align="center">
        <v-card-title class="mx-auto" style="width: 80%; position: absolute; top: -30px; left: 10%; border-radius: 20px; background: #47494e;"><p class="mx-auto mb-0 text-center white--text">The Approved Vendor Platform</p></v-card-title>
        <v-card-text style="width: 80%;">
          <v-row>
            <v-col cols="4" class="d-flex flex-column justify-center" position="center" style="border: 2.5px solid #a61c00; border-radius: 20px;">
              <v-img  src="https://sowerk-images.s3.us-east-2.amazonaws.com/property_managers_red_sketch.png" contain ></v-img>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center" position="center">
              <v-icon size="16vw" color="primary">mdi-swap-horizontal</v-icon>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center" position="center" style="border: 2.5px solid #a61c00; border-radius: 20px;">
              <v-img src="https://sowerk-images.s3.us-east-2.amazonaws.com/service_provider_red_sketch.png" contain></v-img>
            </v-col>
          </v-row>
          <v-row style="width: 100%;" class="mx-auto mt-5">
            <p class="text-center text-md-h6 text-body-1">      SOWerk is the link between service providers (local or national) and
          property & facility managers. Our business to business platform
          provides companies and property managers the tools to effiecently
          identify, vet, and manage service providers for each of their
          locations. For service providers, SOWerk makes it possible for you to
          become an approved vendor, recieve job request, and communicate with
          business owners.</p>
            <v-btn color="primary" class="mx-auto mt-8" width="30%" rounded>JOIN SOWERK</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>


    <section class="aboutfaq">
      <h1>Property and Facility Managers Often Ask</h1>
      <div class="aboutfaqflex">
        <div>
          <h4>
            <span>
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>
            </span>
            Is This Going To Create More Work For Me?
          </h4>
          <p>
            Actually, we designed SOWerk to be less work for you. Think of
            SOWerk like connecting with service providers on social media,
            except they have to meet your approved provider requirements. From
            here you can easily manage and communicate with your approved
            service providers.
          </p>
        </div>
      </div>
      <div class="aboutfaqflex">
        <div>
          <h4>
            <span>
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>
            </span>
            Will SOWerk Save Us Money? Will It Protect Our Investments?
            </h4>
          <p>
            If time is money and quality is everything then yes SOWerk can help.
            SOWerk makes it efficent for any staff member to vet & manage
            local/national service providers, such as getting bids for projects
            and communicating details. If it’s easy to get bids from multiple
            vetted providers then it might just save you both time and money.
            Additionally, we make service providers requalify annualy on things
            like insurance coverage and licenses so you don’t have to.
          </p>
        </div>
      </div>
      <div class="aboutfaqflex">
        <div>
          <h4>
            <span>
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>
            </span>
            Will SOWerk Help Shield Me From Cold Calls?
            </h4>
          <p>
            Sales is part of any business but sometimes you just need place to
            send the salesman where they can apply for your approved service
            program. SOWerk is your solution.
          </p>
        </div>
      </div>
      <button @click="$router.push('/landingpage/property-manager')">PROPERTY & FACILITY LEARN MORE</button>
      <h1>Service Providers Generally Ask</h1>
      <div class="aboutfaqflex">
        <div>
          <h4>
            <span>
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>
            </span>
            Do I Seriously Get More Jobs?
            </h4>
          <p>
            Yes, Property & Facility managers of all sizes use SOWerk to manage
            their approved vendor program. We make it easy for them to vet
            service providers request bids.
          </p>
          <p></p>
          <p>
            SOWerk also helps you look good when applying for approved vendor
            programs, but we also make it easy to share those good looks with
            others. Next time your bidding a job show off your resume by
            emailing or texting your SOWerk profile.
          </p>
        </div>
      </div>
      <div class="aboutfaqflex">
        <div>
          <h4>
            <span>
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>
            </span>
            Is SOWerk Time Consuming and Hard To Use?
            </h4>
          <p id="pfaq">Not at all, a SOWerk profile only takes 10 minuets to setup.</p>
          <p>
            With only a click or two on your computer or mobile device you can
            use your SOWerk Profile to apply for approved vendor programs
          </p>
          <p>
            Automatic Updates: When you become an approved vendor for a company
            we automaticly display it on your profile.
          </p>
        </div>
      </div>
      <div class="aboutfaqflex">
        <div>
          <h4>
            <span>
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>
            </span>
            Will I Get Charged All The Time & Get Junk Leads?
            </h4>
          <p>
            Unlike other websites, SOWerk service providers receive
            communications from their approved vendor programs, direct leads, or
            new businesses inviting them to apply for approved vendor program.
          </p>
          <p></p>
          <p>
            Being on SOWerk and promoting your business is free. If you wish to
            apply for an approved vendor program or utilize other SOWerk
            features we offer a few packages. Details can be found on our
            Approved Provider Pricing page.
          </p>
        </div>
      </div>
      <button @click="$router.push('/landingpage/service-provider')">SERVICE PROVIDER LEARN MORE</button>
    </section>
  </div>
</template>

<script>


</script>

<style scoped>
#aboutcontainer {
  width: 100%;
  padding: 0px !important;
}

.abouthero {
  width: 100%;
  height: 60vh;
  background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg');
  background-size: cover;
  object-fit: contain;
  /* background-size: 100%; */
  margin-top:-100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.abouthero h1 {
  color: white;
  width: 50%;
  text-align: center;
  margin: 150px 0px 150px 0px;
  margin: 200px 0px 200px 0px;
  font-size: 55px;
}
/* .abouthero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
} */
.aboutdescription {
  background: #a61c00;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  color: white;
  padding-bottom: 100px;
}

.aboutdescription:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform:skewY(-2deg)
}
.aboutdescriptionflex {
  display: flex;
  width: 90%;
  justify-content: center;
  border-radius: 20px;
  margin: -50px 0px 100px 0px;
    z-index: 100;

}

.aboutdescriptionflex .aboutdescriptionimg {
  width: 40%;
  display: flex;
  margin-bottom: -300px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg1 {
  width: 50%;
  height: 350px;
  z-index: 1;
  position: relative;
  top: 250px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
  width: 150%;
  position: relative;
  left: -200px;
  top: -250px;
}
.aboutdescriptiontext {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 35px;
}
.aboutdescriptionflex h1 {
  font-size: 35px;
  align-self: flex-start;
}
.aboutdescriptionflex p {
  font-size: 18px;
  align-self: flex-start;
}
.aboutdescription svg {
  width: 100%;
  height: 9vh;
  fill: #2b2b2b;
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

.aboutfaq {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aboutfaq h1 {
  color: #a61c00;
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
  background: #a61c00;
  color: white;
  width: 40%;
  border-radius: 20px;
  padding: 10px 0px 10px 0px;
}
.aboutfaqflex img{
  margin-left: -10%;
  margin-right: unset !important;
  width: 5% !important;
  height:auto;
}
@media (max-width: 800px) {
  .abouthero h1 {
    font-size: 50px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    width: 200%;
    position: relative;
    left: -140px;
    top: -200px;
  }

  .aboutdescriptiontext[data-v-75c9003b] {
    width: 90%;
  }

  .aboutdescriptionflex h1[data-v-75c9003b] {
    width: 100%;
    text-align: center;
    font-size: 33px;
    margin: 15px 0px 12px 0px;
  }

  .aboutdescriptionflex p[data-v-75c9003b] {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    line-height: 24px;
  }

  .aboutdescriptionflex[data-v-75c9003b] {
    margin: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .aboutbuttoncontainer[data-v-75c9003b] {
    margin: 15px 0;
    justify-content: center;
  }

  .aboutdescriptionimg {
    width: 500px;
  }

  img.aboutdescriptionimg2 {
    object-fit: contain;
    width: 700px;
    height: 400px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    width: 100%;
    font-size: 16px;
    padding: 5px 10px;
  }

  
  .aboutfaq .aboutfaqflex[data-v-75c9003b] {
    width: 100%;
  }

#pfaq {
  width: 100%;
}
  .aboutfaqflex {
    margin: 20px 0;
    width: 90%;
    flex-direction: column;
    align-items: center;
  }

  .aboutfaq .aboutfaqflex img[data-v-75c9003b] {
    height: 100px;
    margin-right: 0%;
  }

  .aboutfaqflex h4 {
    text-align: center;
    margin: 20px 0px;
    width: 100%;
  }

  .aboutfaqflex p {
    margin: 5px auto;
    text-align: justify;
    font-size: 17px;
    line-height: 30px;
  }

  h1 {
    text-align: center;
  }

  .aboutfaq h1 {
    font-size: 35px;
    max-width: 100%;
    margin: 50px 0 20px 0;
  }

  .aboutfaq button {
    margin: 35px;
    width: 85%;
    font-size: 17px;
  }
}

@media (max-width: 680px) {
  .abouthero h1 {
    font-size: 42px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 35px;
  }

  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    font-size: 15px;
  }

  .aboutfaq h1 {
    font-size: 32px;
    max-width: 100%;
  }

  .aboutfaq p {
    font-size: 17px;
  }

  .aboutfaq button[data-v-75c9003b] {
    font-size: 14px;
  }
}

@media (max-width: 580px) {
  .abouthero h1 {
    font-size: 38px;
  }

  .aboutdescriptionflex {
    width: 100%;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2 {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 28px;
  }
  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button {
    font-size: 13px;
  }

  .aboutfaq h1 {
    font-size: 30px;
    width: 100%;
  }
  .aboutfaqflex h4 {
    font-size: 23px;
  }

  .aboutfaq p{
    font-size: 15px;
  }

  .aboutfaq button[data-v-75c9003b][data-v-75c9003b] {
    font-size: 15px;
  }
}
</style>
