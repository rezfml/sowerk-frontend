<template>
  <div class="joinproductcontainer">
    <section class="joinproducthero">
      <div>
        <h1>Property & Facility Managers</h1>
        <p>Find, Vet, and Manage Approved Vendors</p>
        <button>Get Started - It’s Free</button>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100"/>
      </svg>
    </section>

    <section class="joinproducttraits">
      <div>
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"/>
        <h3>Vet Vendors</h3>
        <p>We make it easy and powerful for you to vet any service provider, and re-qualify them annually. SOWerk prebuilt vendor applications are easy and powerful, or customize your own to better fit. </p>
      </div>
      <div>
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"/>
        <h3>Powerful Tools</h3>
        <p>One facility or 1,000’s of properties, SOWerk has you covered. Assign staff and set approved vendors by location. Manage bids and completed jobs all in one clean powerful interface.</p>
      </div>
      <div>
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"/>
        <h3>Cold Call Shield</h3>
        <p>With your SOWerk account you have the perfect place to direct any salesman calling to become your approved vendor.</p>
      </div>
      <div>
        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"/>
        <h3>Convenient</h3>
        <p>For the facility manager in the middle of the night that needs to contact all your approved plumbers for help or a local service provider that powers his business through a smart phone, SOWerk is design to be convenient. </p>
      </div>
    </section>

    <section class="joinproductdescription">
      <p>SOWerk is built from the ground up as a software for businesses that own/manage properties & facilites.</p>
      <p>We specifically designed our platform to help you identifying, qualify and manage just about any type of service provider, local or national. If you oversee one facility or own thousands of properties, SOWerk empowers you to easily establish approved vendors at each of your locations, request quotes from approved providers, and much more.</p>
      <p>A team at your headquarters or designated local manager can use a computer to access SOWerk or the SOWerk mobile app.</p>
      <button>REGISTER NOW</button>
    </section>

    <section class="joinproductsteps">
      <div class="joinproductstepscontainer">
        <div class="joinproductstepcontainerstep">
          <img />
          <div>
            <h1>Step 1 <span>- Company Account & Locations</span></h1>
            <p>After setting up your account and locations, SOWerk makes it easy to filter approved service providers quickly and easily for any location across the country.</p>
          </div>
        </div>
        <div class="joinproductstepcontainerstep">
          <div>
            <h1>Step 2 <span>- Approve Service Providers</span></h1>
            <p>Use one of SOWerk’s pre-made vendor application or customize your own questions. This allows you to acquire adequate information from them during the application process to ensure they will represent your brand well no matter how close or far away.</p>
          </div>
          <img />
        </div>
        <div class="joinproductstepcontainerstep">
          <img />
          <div>
            <h1>Step 3 <span>- Super Simple Management</span></h1>
            <p>What’s the point of great power if you can’t manage it? SOWerk’s simple to use interface allows you to stay up to date and manage all of your properties quickly and efficiently from a desktop or mobile platform. Manage staff, vet vendors, or even be one click away from your approved service providers… that’s the power of SOWerk.</p>
          </div>
        </div>
      </div>
      <button>REGISTER NOW</button>
    </section>

    <section class="joinproductfaq">
      <h1>Property and Facility Managers Often Ask</h1>
      <div class="joinproductfaqflex">
        <img />
        <div>
          <h4>Is This Going To Create More Work For Me?</h4>
          <p>Actually, we designed SOWerk to be less work for you. Think of SOWerk like connecting with service providers on social media, except they have to meet your approved provider requirements. From here you can easily manage and communicate with your approved service providers.  </p>
        </div>
      </div>
      <div class="joinproductfaqflex">
        <img />
        <div>
          <h4>Will SOWerk Save Us Money? Will It Protect Our Investments?</h4>
          <p>If time is money and quality is everything then yes SOWerk can help. SOWerk makes it efficent for any staff member to vet & manage local/national service providers, such as getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make service providers requalify annualy on things like insurance coverage and licenses so you don’t have to.</p>
        </div>
      </div>
      <div class="joinproductfaqflex">
        <img />
        <div>
          <h4>Will SOWerk Help Shield Me From Cold Calls?</h4>
          <p>Sales is part of any business but sometimes you just need place to send the salesman where they can apply for your approved service program. SOWerk is your solution. </p>
        </div>
      </div>
      <button>REGISTER NOW</button>
    </section>
  </div>
</template>

<script>

</script>

<style scoped>
  .joinproductcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .joinproducthero {
    width: 100%;
    height: 50vh;
    background: url("https://sowerk-images.s3.us-east-2.amazonaws.com/macbook-336704copy.jpg");
    background-size: 100%;
    background-position: center;
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
  }
  .joinproducthero div p {
    font-size: 23px;
  }
  .joinproducthero div button {
    background: transparent;
    font-size: 18px;
    border: 1px solid white;
    padding: 10px 50px 10px 50px;
    border-radius: 20px;
  }
  .joinproducthero svg {
    width: 100%;
    height: 9vh;
    fill: #A61C00;
    margin-top: 50px;
    margin-bottom: -290px;
  }
  .joinproducttraits{
    background: #A61C00;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .joinproducttraits div {
    width: 20%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    margin: 50px 5px 50px 5px;
  }
  .joinproducttraits div img {
    width: 50%;
    height: 200px;
  }
  .joinproducttraits div h3 {
    font-size: 22px;
    margin: 10px 0px 10px 0px;
  }
  .joinproducttraits div p {
    width: 80%;
    font-size: 18px;
  }
  .joinproductdescription{
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
    font-size: 22px;
  }

  .joinproductdescription p:first-child{
    margin-top: 50px;
  }

  .joinproductdescription button {
    background: #A61C00;
    width: 40%;
    margin-bottom: 70px;
    padding: 15px 0px 15px 0px;
    border-radius: 20px;
    font-size: 18px;
  }

  .joinproductsteps {
    background: #47494E;
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
  }
  .joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep img {
    width: 30%;
  }
  .joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep {
    display: flex;
    width: 100%;
  }
  .joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep div {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .joinproductsteps button {
    background: #A61C00;
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
    color: red;
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
    background: red;
    color: white;
    width: 40%;
  }

</style>
