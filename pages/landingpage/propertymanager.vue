<template>
  <div>
    <section class="sphero">
      <div class="spherobox">
        <h1>Get Connected Now</h1>
        <p>Search SOWerk’s Nationwide Database</p>
        <div class="buttonflex">
          <button>Search All Businesses</button>
          <button>Join SOW</button>
        </div>
      </div>
    </section>

    <section class="splist">
      <div class="splistcontainer"><!--This will be a request to /companies/limit/type/:type SERVICE PROVIDER TYPE 0-->
        <div v-for="property in propertymanagers">
          <img :src="property.imgUrl"/>
          <h3>{{property.company_name}}</h3>
          <p>{{property.city}}, {{property.state}}</p>
          <p>{{property.description}}</p>
          <a :href="'pf/' + property.id"><button>View Profile</button></a>
        </div>
      </div>
      <button>All Property & Facility Accounts</button>
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

      <section class="joinservicetraits">
        <div>
          <img />
          <h3>Simple & Fast</h3>
          <p>Our simple design makes connecting with other companies quick and painless while using either the desktop or mobile app.</p>
        </div>
        <div>
          <img />
          <h3>Powerful Tools</h3>
          <p>SOWerk is designed from it’s core to solve for property and facility management by providing the tools to vet & communicate grow service providers.</p>
        </div>
        <div>
          <img />
          <h3>Automated</h3>
          <p>SOWerk has many automated features that help make everyone’s life easy, like automatically requiring service providers to requalify or automatically updating a service provider’s profile every time they achieve approved vendor status. </p>
        </div>
        <div>
          <img />
          <h3>Convenient</h3>
          <p>For the facility manager in the middle of the night that needs to contact all your approved plumbers for help or a local service provider that powers his business through a smart phone, SOWerk is design to be convenient. </p>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      propertymanagers: [

      ]
    }
  },
  watch: {
    loading: function() {
      if(this.loading){
        console.log(document);
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  mounted() {
    this.getPropertyManagers();
  },
  methods: {
    async getPropertyManagers() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=1&limit=8&offset=0').catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.propertymanagers = data;
        console.log(this.propertymanagers);
      })
    },
  },
}
</script>

<style scoped>
  .sphero {
    background: url("https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg");
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sphero .spherobox {
    background: rgb(0, 0, 0, 0.55);
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0px 20px 0px;
    border-radius: 20px;
    margin: 50px 0px 50px 0px;
    color: white;
  }

  .spherobox form input {
    background: white;
    padding: 2px 5px 2px 5px;
    border-radius: 35px;
  }
  .spherobox form button {
    background: red;
    border-radius: 35px;
    padding: 3px 5px 3px 5px;
    margin-left: -25px;
  }

  .splist {
    width: 100%;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .splist .splistcontainer {
    width: 70%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 20px 0px 20px 0px;
  }

  .splistcontainer div {
    width: 24%;
    margin: 20px 0.5% 20px 0.5%;
    padding: 20px 0px 20px 0px;
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .splist button {
    background: white;
    border-radius: 20px;
    margin: 30px 0px 30px 0px;
    padding: 10px 0px 10px 0px;
    width: 80%;
  }
  .splistcontainer div button{
    width: 80%;
    margin: 0 auto;
    background: red;
    color: white;
    border-radius: 20px;
    padding: 5px 0px 5px 0px;
  }
  .splistcontainer div a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .aboutdescription{
    background: #47494E;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
  .aboutdescriptionflex{
    display: flex;
    width: 90%;
    justify-content: center;
    border-radius: 20px;
    margin: 50px 0px 50px 0px;
  }
  .aboutdescriptionflex img {
    width: 40%;
  }
  .aboutdescriptiontext{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
  }
  .aboutbuttoncontainer {
    display: flex;
    width: 100%;
  }
  .aboutdescriptionflex button {
    background: transparent;
    color: white;
    border: 1px solid white;
    width: 50%;
    padding: 10px 0px 10px 0px;
  }

  .joinservicetraits{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .joinservicetraits div {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 20px;
    margin: 50px 5px 50px 5px;
  }

</style>
