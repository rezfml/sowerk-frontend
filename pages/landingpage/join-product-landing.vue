<template>
  <div class="joinproductcontainer">
    <section class="joinproducthero">
      <div>
        <h1>Property & Facility Managers</h1>
        <p>Find, Vet, and Manage Approved Vendors</p>
        <button>Get Started - It’s Free</button>
      </div>
    </section>

    <JoinTraitsPF></JoinTraitsPF>

    <section class="joinproductdescription">
      <p>
        SOWerk is built from the ground up as a software for businesses that
        own/manage properties & facilites.
      </p>
      <p>
        We specifically designed our platform to help you identifying, qualify
        and manage just about any type of service provider, local or national.
        If you oversee one facility or own thousands of properties, SOWerk
        empowers you to easily establish approved vendors at each of your
        locations, request quotes from approved providers, and much more.
      </p>
      <p>
        A team at your headquarters or designated local manager can use a
        computer to access SOWerk or the SOWerk mobile app.
      </p>
      <button>REGISTER NOW</button>
    </section>

    <section class="joinproductsteps">
      <div class="joinproductstepscontainer">
        <div class="joinproductstepcontainerstep step-right">
          <img alt="test" />
          <div>
            <h1>Step 1 <span>- Company Account & Locations</span></h1>
            <p>
              After setting up your account and locations, SOWerk makes it easy
              to filter approved service providers quickly and easily for any
              location across the country.
            </p>
          </div>
        </div>
        <div class="joinproductstepcontainerstep step-left">
          <div>
            <h1>Step 2 <span>- Approve Service Providers</span></h1>
            <p>
              Use one of SOWerk’s pre-made vendor application or customize your
              own questions. This allows you to acquire adequate information
              from them during the application process to ensure they will
              represent your brand well no matter how close or far away.
            </p>
          </div>
          <img alt="test" />
        </div>
        <div class="joinproductstepcontainerstep step-right">
          <img alt="test" />
          <div>
            <h1>Step 3 <span>- Super Simple Management</span></h1>
            <p>
              What’s the point of great power if you can’t manage it? SOWerk’s
              simple to use interface allows you to stay up to date and manage
              all of your properties quickly and efficiently from a desktop or
              mobile platform. Manage staff, vet vendors, or even be one click
              away from your approved service providers… that’s the power of
              SOWerk.
            </p>
          </div>
        </div>
      </div>
      <button>REGISTER NOW</button>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg>
    </section>

    <section class="joinproductfaq">
      <h1>Property and Facility Managers Often Ask</h1>
      <div class="joinproductfaqflex">
        <img />
        <div>
          <h4>Is This Going To Create More Work For Me?</h4>
          <p>
            Actually, we designed SOWerk to be less work for you. Think of
            SOWerk like connecting with service providers on social media,
            except they have to meet your approved provider requirements. From
            here you can easily manage and communicate with your approved
            service providers.
          </p>
        </div>
      </div>
      <div class="joinproductfaqflex">
        <img />
        <div>
          <h4>Will SOWerk Save Us Money? Will It Protect Our Investments?</h4>
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
      <div class="joinproductfaqflex">
        <img width="100px" height="100px" />
        <div>
          <h4>Will SOWerk Help Shield Me From Cold Calls?</h4>
          <p>
            Sales is part of any business but sometimes you just need place to
            send the salesman where they can apply for your approved service
            program. SOWerk is your solution.
          </p>
        </div>
      </div>
      <button>REGISTER NOW</button>
    </section>
  </div>
</template>

<script>
import JoinTraitsPF from '../../components/landing/JoinTraitsPF'

export default {
  name: 'join-product-landing', 
  components: {
    JoinTraitsPF,
  }
}
</script>

<style scoped>
.joinproductcontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.joinproducthero {
  width: 100%;
  height: 60vh;
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
.joinproducthero div {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joinproducthero div h1 {
  font-size: 55px;
  text-align: center;
}
.joinproducthero div p {
  font-size: 23px;
}
.joinproducthero div button {
  background: transparent;
  font-size: 18px;
  border: 1px solid white;
  padding: 8px 50px 8px 50px;
  border-radius: 20px;
}
.joinproducthero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
  margin-top: 50px;
  margin-bottom: -320px;
}

.joinproductdescription {
  width: 100%;
  background: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.joinproductdescription p {
  width: 70%;
  font-size: 19px;
  text-align: center;
}

.joinproductdescription p:first-child {
  margin-top: 50px;
}

.joinproductdescription button {
  background: #a61c00;
  width: 40%;
  margin: 20px 0px 70px 0px;
  padding: 15px 0px 15px 0px;
  border-radius: 20px;
  font-size: 18px;
}

.joinproductsteps {
  background: #47494e;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.joinproductsteps .joinproductstepscontainer {
  width: 70%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  margin-top: -30px;
  height: auto;
}
.joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep img {
  width: 30%;
  border: 1px solid #333;
}
.joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep {
  display: flex;
  width: 100%;
  margin: 30px 0px 30px 0px;
}
.joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep div {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.joinproductsteps
  .joinproductstepscontainer
  .joinproductstepcontainerstep
  div
  span {
  color: #a61c00;
}
.joinproductsteps
  .joinproductstepscontainer
  .joinproductstepcontainerstep
  div
  h1 {
  font-size: 35px;
}
.joinproductsteps
  .joinproductstepscontainer
  .joinproductstepcontainerstep
  div
  p {
  font-size: 20px;
}
.joinproductsteps svg {
  width: 100%;
  height: 9vh;
  fill: white;
}
.joinproductsteps button {
  background: #a61c00;
  color: white;
  padding: 20px 0px 20px 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 20px;
  width: 40%;
  font-size: 18px;
}

.joinproductfaq {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joinproductfaq h1 {
  color: #a61c00;
  font-size: 55px;
  margin: 40px 0px 40px 0px;
}
.joinproductfaq h4 {
  font-size: 25px;
}
.joinproductfaq p {
  font-size: 18px;
  margin: 20px 0px 30px 15px;
}
.joinproductfaq .joinproductfaqflex {
  display: flex;
  width: 50%;
  justify-content: center;
}
.joinproductfaq .joinproductfaqflex img {
  width: 10%;
  margin-right: 3%;
}
.joinproductfaq .joinproductfaqflex div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 87%;
}
.joinproductfaq button {
  background: #a61c00;
  color: white;
  width: 40%;
  font-size: 18px;
  padding: 15px 0px 15px 0px;
  border-radius: 20px;
  margin: 30px 0px 30px 0px;
}


@media (max-width: 1350px) {
  .joinproductfaq h1 {
    margin: 40px 0px 40px 20px;
  }
}

@media (max-width: 900px) {
  .joinproducthero div h1 {
    font-size: 53px;
  }

  .joinproducthero div p {
    font-size: 22px;
  }

  .joinproductdescription p {
    width: 80%;
    font-size: 17px;
    line-height: 24px;
  }

  .joinproductdescription button {
    padding: 12px 0px 12px 0px;
    width: 80%;
  }

  .joinproductsteps .joinproductstepscontainer {
    width: 80%;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    h1 {
    font-size: 32px;
    padding: 0px 25px 0px 25px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    p {
    font-size: 17px;
    padding: 0px 25px 0px 25px;
  }
  .joinproductsteps button {
    padding: 15px 0px 15px 0px;
    width: 80%;
  }

  .joinproductfaq h1 {
    font-size: 38px;
    text-align: center;
    margin: 40px 5px;
  }

  .joinproductfaq .joinproductfaqflex {
    width: 80%;
  }

  .joinproductfaq h4 {
    font-size: 23px;
  }

  .joinproductfaq p {
    font-size: 17px;
  }
  .joinproductfaq button {
    width: 80%;
  }
}
@media (max-width: 750px) {
  .joinproducthero div h1 {
    font-size: 45px;
  }

  .joinproducthero div p {
    font-size: 20px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div {
    width: 90%;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    span {
    font-size: 25px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    img {
    border: 1px solid #333;
    height: 250px;
    width: 80%;
  }

  .joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep:nth-child(2) {
    flex-direction: column-reverse;
  }
  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    h1 {
    width: 100%;
    padding: 20px 0 0 0;
    margin-left: 25px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    p {
    font-size: 18px;
    /* padding: 0 0 0 40px; */
    text-align: justify;
    margin-top: 10px;
  }

  .joinproductfaq h1 {
    font-size: 34px;
  }
  .joinproductfaq .joinproductfaqflex {
    width: 80%;
  }

  .joinproductfaq h4 {
    font-size: 21px;
  }

  .joinproductfaq p {
    font-size: 16px;
  }
}

@media (max-width: 680px) {
  .joinproducthero div h1 {
    font-size: 38px;
  }

  .joinproducthero div p {
    font-size: 19px;
  }

  .joinproducthero div button {
    font-size: 17px;
    padding: 8px 48px 8px 48px;
  }

  .joinproductdescription p {
    font-size: 16px;
  }

  .joinproductdescription button {
    font-size: 17px;
  }

  .joinproductfaq h1 {
    font-size: 29px;
  }

  .joinproductfaq h4 {
    font-size: 20px;
  }

  .joinproductfaq button {
    font-size: 17px;
  }
}

</style>
