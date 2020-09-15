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
    </section>

    <section class="splist">
      <div class="splistcontainer"><!--This will be a request to /companies/limit/type/:type SERVICE PROVIDER TYPE 0-->
        <div>
          <img />
          <h3>Atlas Plumbing</h3>
          <p>Dallas, TX</p>
          <p>Based out of Dallas Texas, Atlas offers plumbing services, large or small across America</p>
          <button>View Profile</button>
        </div>
        <div>
          <img />
          <h3>Quanta Electrical Services</h3>
          <p>Springfield, MO</p>
          <p>Quanta Services is an American corporation that provides infrastructure services for…electric power, pipeline, industrial and</p>
          <button>View Profile</button>
        </div>
        <div>
          <img />
          <h3>Benjamin Franklin</h3>
          <p>Springfield, MO</p>
          <p>A Greene County based plumbing service</p>
          <button>View Profile</button>
        </div>
        <div>
          <img />
          <h3>Nations Roof</h3>
          <p>Springfield, MO</p>
          <p>National roofing company founded in 2005</p>
          <button>View Profile</button>
        </div>
        <div>
          <img />
          <h3>Atlas Plumbing</h3>
          <p>Dallas, TX</p>
          <p>Based out of Dallas Texas, Atlas offers plumbing services, large or small across America</p>
          <button>View Profile</button>
        </div>
        <div>
          <img />
          <h3>Quanta Electrical Services</h3>
          <p>Springfield, MO</p>
          <p>Quanta Services is an American corporation that provides infrastructure services for…electric power, pipeline, industrial and</p>
          <button>View Profile</button>
        </div>
        <div>
          <img />
          <h3>Benjamin Franklin</h3>
          <p>Springfield, MO</p>
          <p>A Greene County based plumbing service</p>
          <button>View Profile</button>
        </div>
        <div>
          <img />
          <h3>Nations Roof</h3>
          <p>Springfield, MO</p>
          <p>National roofing company founded in 2005</p>
          <button>View Profile</button>
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
          {

          },
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
        let {data, status} = await this.$http.get()
      }
    }
  }
</script>

<style scoped>
  .sphero {
    background: url("./img/construction-645465 copy.jpg");
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

</style>
