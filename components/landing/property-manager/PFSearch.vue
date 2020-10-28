<template>
  <div>
    <section class="searchSection">
      <h1>Search Property & Facility Accounts</h1>
      <div>
        <form>
          <input type="text" placeholder="" value="" /> <input type="submit"/>

          <select class="select">
            <option>Property & Facility</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
          </select>
          <select class="select">
            <option>Location</option>
            <option>Service</option>
            <option>Name</option>
          </select>

        </form>
      </div>
    </section>

    <section class="companyList">
      <div class="companyContainer">
        <div
          class="flexCompanies"
          v-for="company in pageOfItems"
          :key="company.id"
        >
          <img :src="company.imgUrl" />
          <div>
            <h1>{{ company.account_name }}</h1>
            <p>{{ company.description }}</p>
          </div>
          <a :href="'property-manager/' + company.id"
            ><button>VIEW ACCOUNT</button></a
          >
        </div>
        <jw-pagination
          :items="propertymanagers"
          @changePage="onChangePage"
          :pageSize="8"
          :maxPages="Math.round(propertymanagers.length / 8)"
        ></jw-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import JwPagination from 'jw-vue-pagination'

Vue.use(JwPagination)
export default {
  name: 'PFSearch',
  data() {
    return {
      loading: false,
      propertymanagers: [],
      pageOfItems: [],
    }
  },
  components: {
    JwPagination: JwPagination,
  },
  watch: {
    loading: function () {
      if (this.loading) {
        console.log(document)
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
  },
  mounted() {
    this.getPropertyManagers()
  },
  methods: {
    async getPropertyManagers() {
      let { data, status } = await this.$http
        .get(
          `https://www.sowerkbackend.com/api/companies/type/true`
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.propertymanagers = data
        console.log(this.propertymanagers)
      })
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems
    },
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
  padding: 10px 0;
}
.searchSection div {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 10px 0px 10px 0px;
}
.searchSection h1 {
  font-size: 3.1vw;
}
.searchSection div form {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.searchSection form input[type="text"] {
  background: white;
  padding: 10px 5px 5px 5px;
  border-radius: 35px;
  width: 50%;
}

.searchSection form input[type="submit"] {
  margin-left: -128px;
  background: #a61c00;
  border-radius: 35px;
  padding: 0 15px;

}
.searchSection form button {
  background: #a61c00;
  border-radius: 35px;
  padding: 5px 10px 5px 10px;
  font-size: 18px;
}

.select {
  color: white;
  border: 1px solid #a61c00;
  border-radius: 20px;
  background: #a61c00;
  padding: 0 10px;
}


.companyList {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'),
    linear-gradient(#444444, #2b2b2b);
  background-size: cover;
}
.companyList .companyContainer {
  width: 80%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px 10px 0px;
}

.flexCompanies {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 10px;
}
.flexCompanies:nth-child(even) {
  background: #f8f8f8;
}
.flexCompanies:nth-child(odd) {
  background: white;
}
.flexCompanies img {
  width: 100px;
  border-radius: 20px;
  margin: 10px 5% 10px 10px;
  height: 100px;
  border: 0.2px solid #333;
  border-radius: 50px;
}
.flexCompanies div {
  width: 60%;
  text-align: start;
  margin-left: 10px;
}
.flexCompanies div h1 {
  color: #a61c00;
  font-size: 20px;
}
.flexCompanies div p {
  font-size: 18px;
}
.flexCompanies a {
  height: auto;
  /* margin: 10px 5% 10px 5%; */
  text-align: center;
  color: white;
  font-size: 15px;
}
.flexCompanies a button {
  background: #a61c00;
  padding: 6px 35px 6px 35px;
  border-radius: 20px;
}

@media (max-width: 1280px) {
  .flexCompanies a button {
    font-size: 13px;
    padding: 10px 15px;
  }
}

@media (max-width: 980px) {
  .searchSection h1 {
    font-size: 36px;
  }
  .companyList .companyContainer {
    width: 90%;
  }

  .flexCompanies a button {
    font-size: 12px;
    padding: 8px 10px;
  }
}

@media (max-width: 680px) {
  .searchSection h1 {
    font-size: 32px;
  }
}
</style>
