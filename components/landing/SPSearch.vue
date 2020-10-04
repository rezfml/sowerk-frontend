<template>
  <div>
    <section class="searchSection">
      <h1>Search Service Provider Accounts</h1>
    </section>

    <section class="companyList">
      <div class="companyContainer">
        <div class="flexCompanies" v-for="company in pageOfItems" :key="company.id">
          <img :src="company.imgUrl"/>
          <div>
            <h1>{{company.account_name}}</h1>
            <p>{{company.description}}</p>
          </div>
          <a :href="'service-provider/' + company.id"><button>VIEW ACCOUNT</button></a>
        </div>
        <jw-pagination :items="serviceproviders" @changePage="onChangePage" :pageSize="8" :maxPages="Math.round(serviceproviders.length/8)"></jw-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import JwPagination from 'jw-vue-pagination';

Vue.use(JwPagination);
export default {
  name: "SPSearch",
  data() {
    return {
      loading: false,
      serviceproviders: [

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
      let {data, status} = await this.$http.get(`http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/type/0`).catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.serviceproviders = data;
        console.log(this.serviceproviders);
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
  width: 100%;
}
.searchSection h1{
  font-size: 3.1vw;
  margin: 10px 0px 10px 0px;
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
  margin: 10px 0px 10px 0px;
  border-radius: 20px;
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

@media (max-width: 980px) {
  .searchSection h1{
  font-size: 36px;
}
}

@media (max-width: 680px) {
  .searchSection h1{
  font-size: 32px;
}
}
</style>
