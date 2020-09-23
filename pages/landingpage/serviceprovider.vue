<template>
  <div>
    <section class="sphero">
      <div class="spherobox">
        <h1>Get Connected Now</h1>
        <p>Search SOWerk’s Nationwide Database</p>
        <form>
          <input type="text" placeholder="" value="" />
          <button type="submit">Search Now</button>
        </form>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100"/>
      </svg>
    </section>

    <section class="splist">
      <div class="splistcontainer"><!--This will be a request to /companies/limit/type/:type SERVICE PROVIDER TYPE 0-->
        <div v-for="service in serviceproviders">
          <img :src="service.imgUrl"/>
          <h3>{{service.account_name}}</h3>
          <p>{{service.city}}, {{service.state}}</p>
          <p>{{service.description}}</p>
          <a :href="'sp/' + service.id"><button>View Profile</button></a>
        </div>
      </div>
      <button>View All Service Provider Accounts</button>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        serviceproviders: [

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
      this.getServiceProviders();
    },
    methods: {
      async getServiceProviders() {
        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/byType?type=0&limit=8&offset=0').catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.serviceproviders = data;
          console.log(this.serviceproviders);
          console.log(this.currentUser);
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sphero h1{
    font-size: 55px;
  }
  .sphero p{
    font-size: 23px;
  }
  .sphero svg {
    width: 100%;
    height: 9vh;
    fill: #A61C00;
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
    background: #A61C00;
    border-radius: 35px;
    padding: 3px 5px 3px 5px;
    margin-left: -25px;
  }

  .splist {
    width: 100%;
    background: #A61C00;
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
  .splistcontainer img {
    border-radius: 50px;
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
    justify-content: flex-end;
  }
  .splist button {
    background: white;
    border-radius: 20px;
    margin: 30px 0px 30px 0px;
    padding: 15px 0px 15px 0px;
    font-size: 14px;
    width: 50%;
  }
  .splistcontainer div button{
    width: 80%;
    margin: 0 auto;
    background: #A61C00;
    color: white;
    border-radius: 20px;
    padding: 5px 0px 5px 0px;
  }
  .splistcontainer div a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 22px;
  }

</style>
