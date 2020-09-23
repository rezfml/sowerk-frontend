<template>
  <div>
    <section class="searchSection">
      <h1>Search Property & Facility Accounts</h1>
      <div>
        <form>
          <input type="text" placeholder="" value="" />
          <select>
            <option>Property & Facility</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
          </select>
          <select>
            <option>Location</option>
            <option>Service</option>
            <option>Name</option>
          </select>
          <button>Search Now</button>
        </form>
      </div>
    </section>

    <section class="companyList">
      <div class="companyContainer">
        <div class="flexCompanies" v-for="company in pageOfItems" :key="company.id">
          <img :src="company.imgUrl"/>
          <div>
            <h1>{{company.account_name}}</h1>
            <p>{{company.description}}</p>
          </div>
          <a :href="'pf/' + company.id"><button>VIEW ACCOUNT</button></a>
        </div>
        <jw-pagination :items="propertymanagers" @changePage="onChangePage" :pageSize="8" :maxPages="Math.round(propertymanagers.length/8)"></jw-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import JwPagination from 'jw-vue-pagination';

Vue.use(JwPagination);
  export default {
    data() {
      return {
        loading: false,
        propertymanagers: [

        ],
        pageOfItems: []
      }
    },
    components: {
      JwPagination: JwPagination
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
        let {data, status} = await this.$http.get(`http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/type/1`).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.propertymanagers = data;
          console.log(this.propertymanagers);
        })
      },
      onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
      }
    },
  }

</script>

<style scoped>
  .searchSection {
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .searchSection div {
    display: flex;
    justify-content: center;
    width: 80%;
  }
  .searchSection form input {
    background: white;
    padding: 2px 5px 2px 5px;
    border-radius: 35px;
  }
  .searchSection form button {
    background: #A61C00;
    border-radius: 35px;
    padding: 3px 5px 3px 5px;
    margin-left: -25px;
  }
  .companyList{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#444444, #2B2B2B);
    background-size: cover;
  }
  .companyList .companyContainer {
    width: 80%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flexCompanies {
    display: flex;
    justify-content: center;
    width: 90%;
  }
  .flexCompanies:nth-child(even) {
    background: #F8F8F8;
  }
  .flexCompanies:nth-child(odd) {
    background: white;
  }
  .flexCompanies img {
    width: 10%;
    border-radius: 20px;
    margin: 10px 5% 10px 5%;
    height: 100px;
  }
  .flexCompanies div {
    width: 60%;
    text-align: start;
    margin-left: 10px;
  }
  .flexCompanies div h1{
    color: #A61C00;
    font-size: 20px;
  }
  .flexCompanies div p{
    font-size: 18px;
  }
  .flexCompanies a {
    width: 10%;
    height: auto;
    margin: 10px 5% 10px 5%;
    text-align: center;
    color: white;
    font-size: 18px;
  }
  .flexCompanies a button {
    background: #A61C00;
    padding: 6px 12px 6px 12px;
    border-radius: 20px;
  }
</style>
