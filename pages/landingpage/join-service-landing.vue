<template>
  <div class="joinservicecontainer">
    <section class="joinservicehero">
      <div>
        <h1>Service Providers</h1>
        <p>Approved Providers Get the Job</p>
        <button @click='$router.push("/register/provider")'>Get Started Now</button>
      </div>
      <!-- <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg> -->
    </section>

    <section class="joinservicetraits">
      <div>
        <img
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/checkmarkcopy.png"
        />
        <h3>Simple & Fast</h3>
        <p>
          Our simple design makes connecting with other companies quick and
          painless while using either the desktop or mobile app.
        </p>
      </div>
      <div>
        <img
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardcopy.png"
        />
        <h3>Powerful Tools</h3>
        <p>
          SOWerk is designed from it’s core to solve for property and facility
          management by providing the tools to vet & communicate grow service
          providers.
        </p>
      </div>
      <div>
        <img
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
        />
        <h3>Automated</h3>
        <p>
          SOWerk has many automated features that help make everyone’s life
          easy, like automatically requiring service providers to requalify or
          automatically updating a service provider’s profile every time they
          achieve approved vendor status.
        </p>
      </div>
      <div>
        <img
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
        />
        <h3>Convenient</h3>
        <p>
          For the facility manager in the middle of the night that needs to
          contact all your approved plumbers for help or a local service
          provider that powers his business through a smart phone, SOWerk is
          design to be convenient.
        </p>
      </div>
    </section>

    <section class="joinservicedescription">
      <h2>Tools To Grow Your Business</h2>
      <p></p>
      <p>
        SOWerk makes it possible for a service providers like you to connect
        with prorperty & facility managers, become an approved vendor, and
        streamline work opportunties & communications. For those times when you
        need to promote your trackrecord and qualifications to a buyer not on
        SOWerk, well, we make that easy too. Your time is money, so it’s time
        you use SOWerk
      </p>
      <button @click='$router.push("/register/provider")'>REGISTER NOW</button>
    </section>

    <section class="joinservicesteps">
      <div class="joinservicestepscontainer">
        <div class="joinservicestepcontainerstep">
          <img />
          <div>
            <h1>Step 1 <span>- Build a Profile</span></h1>
            <p>
              Your SOWerk Profile is Your New Calling Card. Designed To Make You
              Look Good!
            </p>
            <p>
              Your company dashboard displays recent users that you have been in
              contact with along with a chart of your pending application
              requests.
            </p>
          </div>
        </div>
        <div class="joinservicestepcontainerstep">
          <div>
            <h1>Step 2 <span>- Apply With Buyers</span></h1>
            <p>Apply For Businesses Looking For You With One Click.</p>
            <p>
              With the click of one button, your company can apply to work for
              large businesses located in your area. This process makes it easy
              for you and the Buyer to connect and review each others profiles
              hassle free.
            </p>
          </div>
          <img />
        </div>
        <div class="joinservicestepcontainerstep">
          <img />
          <div>
            <h1>Step 3 <span>- Generate Leads</span></h1>
            <p>
              SOWerk makes it easy for you to get inbound service leads & we
              make it simple for you to show off your trackrecord (profile) to a
              potential customer.
            </p>
            <p>
              Easily share in one click with anyone outside of the platform via
              email or text.
            </p>
          </div>
        </div>
      </div>
      <button @click='$router.push("/register/provider")'>REGISTER NOW</button>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg>
    </section>

    <section class="joinservicefaq">
      <h1>Service Providers Generally Ask</h1>
      <div class="joinservicefaqflex">
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
          <p>
            SOWerk also helps you look good when applying for approved vendor
            programs, but we also make it easy to share those good looks with
            others. Next time your bidding a job show off your resume by
            emailing or texting your SOWerk profile.
          </p>
        </div>
      </div>
      <div class="joinservicefaqflex">
        <div>
          <h4>
            <span>
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon"/>
            </span>
            Is SOWerk Time Consuming and Hard To Use?
          </h4>
          <p>Not at all, a SOWerk profile only takes 10 minuets to setup.</p>

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
      <div class="joinservicefaqflex">

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
          <p>
            Being on SOWerk and promoting your business is free. If you wish to
            apply for an approved vendor program or utilize other SOWerk
            features we offer a few packages. Details can be found on our
            Approved Provider Pricing page.
          </p>
        </div>
      </div>
      <button @click='$router.push("/register/provider")'>REGISTER NOW</button>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'fullwidth',
  }
</script>

<style scoped>
.joinservicecontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.joinservicehero {
  width: 100%;
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/tape-measure-1726546copy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.joinservicehero h1 {
  font-size: 55px;
  text-align: center;
}
.joinservicehero p {
  font-size: 23px;
  text-align: center;
}
.joinservicehero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
  margin-top: 50px;
  margin-bottom: -320px;
}
.joinservicehero div {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.joinservicehero div button {
  background: transparent;
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 0px 5px 0px;
  font-size: 18px;
  width: 80%;
}
.joinservicetraits {
  background: #a61c00;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}
.joinservicetraits:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background:inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform:skewY(-2deg);
}

.joinservicetraits div {
  width: 20%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  margin: -125px 5px 50px 5px;
    z-index: 5;

}
.joinservicetraits div img {
  width: 50%;
  /* height: 200px; */
}
.joinservicetraits div h3 {
  font-size: 22px;
  margin: 10px 0px 10px 0px;
}
.joinservicetraits div p {
  width: 80%;
  font-size: 18px;
}
.joinservicedescription {
  width: 100%;
  background: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.joinservicedescription p {
  width: 70%;
  font-size: 22px;
  text-align: center;
}

.joinservicedescription p:first-child {
  margin-top: 50px;
}

.joinservicedescription button {
  background: #a61c00;
  width: 40%;
  margin: 20px 0px 70px 0px;
  padding: 15px 0px 15px 0px;
  border-radius: 20px;
  font-size: 18px;
}

.joinservicesteps {
  background: #47494e;
  background: linear-gradient(180deg,#444 5%,rgba(43,43,43,.9)),url(https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.joinservicesteps .joinservicestepscontainer {
  width: 70%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  margin-top: -30px;
  height: auto;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep img {
  width: 30%;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
  display: flex;
  width: 100%;
  margin: 30px 0px 30px 0px;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep div {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  span {
  color: #a61c00;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  h1 {
  font-size: 35px;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  p {
  font-size: 20px;
}
.joinservicesteps svg {
  width: 100%;
  height: 9vh;
  fill: white;
}
.joinservicesteps button {
  background: #a61c00;
  color: white;
  padding: 20px 0px 20px 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 20px;
  width: 40%;
  font-size: 18px;
}

.joinservicefaq {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joinservicefaq h1 {
  color: #a61c00;
  font-size: 55px;
  margin: 40px 0px 40px 0px;
}
.joinservicefaq h4 {
  font-size: 25px;
}
.joinservicefaq p {
  font-size: 18px;
  margin: 20px 0px 30px 15px;
}
.joinservicefaq .joinservicefaqflex {
  display: flex;
  width: 50%;
  justify-content: center;
}
.joinservicefaq .joinservicefaqflex img {
  width: 10%;
  margin-right: 3%;
}
.joinservicefaq .joinservicefaqflex div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 87%;
}
.joinservicefaq button {
  background: #a61c00;
  color: white;
  width: 40%;
  font-size: 18px;
  padding: 15px 0px 15px 0px;
  border-radius: 20px;
  margin: 30px 0px 30px 0px;
}
.joinservicefaqflex img{
  margin-left: -10%;
  margin-right: unset !important;
  width: 5% !important;
  height:auto;
}

@media (max-width: 1350px) {
  .joinservicetraits div {
    width: 21%;
    height: 450px;
  }

  .joinservicetraits div img {
    height: 120px;
    width: 120px;
  }
}

@media (max-width: 1350px) {
  .joinservicetraits div {
    height: 425px;
    width: 21%;
  }

  .joinservicetraits div img {
    height: 110px;
    width: 110px;
  }

  .joinservicetraits div h3 {
    font-size: 19px;
  }

  .joinservicetraits div p {
    font-size: 15.5px;
  }
}

@media (max-width: 1080px) {
  .joinservicehero div h1 {
    font-size: 52px;
  }

  .joinservicehero div p {
    font-size: 22px;
  }
}

@media (max-width: 900px) {
  .joinservicehero div h1 {
    font-size: 50px;
  }

  .joinservicehero div p {
    font-size: 21px;
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

  .joinservicedescription p {
    width: 80%;
    font-size: 17px;
    line-height: 24px;
  }

  .joinservicedescription button {
    padding: 12px 0px 12px 0px;
    width: 80%;
  }

  .joinservicesteps .joinservicestepscontainer {
    width: 80%;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    h1 {
    font-size: 32px;
    padding: 0px 25px 0px 25px;
  }
  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep div p {
    font-size: 17px;
    padding: 0px 25px 0px 25px;
  }

  .joinservicesteps button {
 padding: 10px 0px 10px 0px;
 width: 80%;
  }

  .joinservicefaq h1 {
    font-size: 38px;
    text-align: center;
    margin: 40px 5px;
  }

   .joinservicefaq .joinservicefaqflex {
    width: 80%;
  }

   .joinservicefaq h4 {
    font-size: 23px;
  }

  .joinservicefaq p {
    font-size: 17px;
  }

   .joinservicefaq button {
    width: 80%;
     padding: 10px 0px 10px 0px;
  }
}


@media (max-width: 750px) {
    .joinservicehero div h1 {
    font-size: 45px;
  }

  .joinservicehero div p {
    font-size: 20px;
  }

   .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div {
    width: 90%;
  }

   .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    span {
    font-size: 25px;
  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep img {
    border: 1px solid #333;
    height: 250px;
    width: 80%;

  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 0
  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep:nth-child(2) {
    flex-direction: column-reverse;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    h1 {
    width: 100%;
    padding: 20px 0 0 0;
    margin-left: 25px;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    p {
    font-size: 18px;
    /* padding: 0 0 0 40px; */
   text-align: justify;
    margin-top: 10px;
  }

  .joinservicefaq h1 {
    font-size: 34px;
  }

  .joinservicefaq .joinservicefaqflex {
    width: 80%;
  }

.joinservicefaq h4 {
    font-size: 22px;
  }

  .joinservicefaq p {
    font-size: 16px;
  }

}


@media (max-width: 680px) {
   .joinservicehero div h1 {
    font-size: 40px;
  }

  .joinservicehero div p {
    font-size: 19px;
  }

   .joinservicehero div button {
    font-size: 17px;
  }

  .joinservicedescription button {
    font-size: 17px;
  }

  .joinservicefaq h1 {
    font-size: 33px;
  }

  .joinservicefaq button {
    font-size: 17px;

  }
}


@media (max-width: 600px) {
  .joinservicetraits div {
    flex: 0 60%;
  }
}
</style>
