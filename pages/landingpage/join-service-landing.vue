<template>
  <div class="joinservicecontainer">
    <section class="joinservicehero">
      <div>
        <h1>Service Providers</h1>
        <p>Approved Providers Get the Job</p>
        <button>Get Started Now</button>
      </div>
    </section>


<JoinTraitsSP></JoinTraitsSP>

    
    <section class="joinservicedescription">
      <p>
        SOWerk makes it possible for a service providers like you to connect
        with prorperty & facility managers, become an approved vendor, and
        streamline work opportunties & communications. For those times when you
        need to promote your trackrecord and qualifications to a buyer not on
        SOWerk, well, we make that easy too. Your time is money, so it’s time
        you use SOWerk
      </p>
      <button>REGISTER NOW</button>
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
      <button>REGISTER NOW</button>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg>
    </section>

<OftenAskSP></OftenAskSP>
    
  </div>
</template>

<script>
import JoinTraitsSP from '../../components/landing/JoinTraitsSP'
import OftenAskSP from '../../components/landing/OftenAskSP'

export default {
  name: 'join-service-landing', 
  components: {
    JoinTraitsSP,
    OftenAskSP
  }
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
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/macbook-336704copy.jpg');
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
  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    p {
    font-size: 17px;
    padding: 0px 25px 0px 25px;
  }

  .joinservicesteps button {
    padding: 10px 0px 10px 0px;
    width: 80%;
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

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    img {
    border: 1px solid #333;
    height: 250px;
    width: 80%;
  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep:nth-child(2) {
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
}

</style>
