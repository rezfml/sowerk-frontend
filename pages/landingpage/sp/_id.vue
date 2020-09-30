<template>
  <div class="pfaccountlocationcontainer">
    <div class="pfaccountlocation">
      <img class="coverpic"/>
      <img :src="serviceproviderVal.imgUrl" class="profilepic"/>
      <h1>{{serviceproviderVal.company_name}}</h1>
      <img />
      <p>{{serviceproviderVal.description}}</p>
      <button>Apply To All Location</button>
      <div v-for='location in serviceproviderVal.locations' class="pfaccountlocationlist">
        <h2>Locations</h2>
        <div class="pfaccountlocationflex">
          <div class="pfaccountlocationcolumn">
            <img />
            <button>Share</button>
          </div>
          <div class="pfaccountlocationcolumn">
            <h1>{{location.name}}}</h1>
            <img />
            <p>Address: {{ location.address }}, {{ location.city }}, {{ location.state }}, {{ location.zipcode }}</p>
            <p>Founded: {{ location.year_founded }}</p>
            <p>Joined SOWerk: 2020</p>
          </div>
          <div class="pfaccountlocationflexrow">
            <p>142</p>
            <p>Approved SOWerk Providers At This Location</p>
          </div>
        </div>
        <button>Apply To Become An Approved Service Provider</button>
      </div>
    </div>

    <div class="pfaccountsecondcolumn">
      <div>
        <p v-if="this.serviceproviderVal.locations">{{serviceproviderVal.locations.length}} Retail Locations</p>
        <div  class="pfaccountlocationflexrow2">
          <p> Springfield, MO 65810</p>
          <a>></a>
        </div>
        <div class="pfaccountlocationflexrow2">
          <p> Springfield, MO 65810</p>
          <a>></a>
        </div>
        <div class="pfaccountlocationflexrow2">
          <p> Springfield, MO 65810</p>
          <a>></a>
        </div>
        <div class="pfaccountlocationflexrow2">
          <p> Springfield, MO 65810</p>
          <a>></a>
        </div>
        <div class="pfaccountlocationflexrow2">
          <p> Springfield, MO 65810</p>
          <a>></a>
        </div>
      </div>
      <div class="featuredbusiness">
        <h2>Featured Businesses Near You</h2>
        <div>
          <img />
          <h3>Cabela’s</h3>
          <a>View Account</a>
        </div>
        <div>
          <img />
          <h3>Walmart</h3>
          <a>View Account</a>
        </div>
        <div>
          <img />
          <h3>Chipotle</h3>
          <a>View Account</a>
        </div>
        <button>View More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      serviceproviderVal: [
        {
          address: '',
          city: '',
          company_name: '',
          company_type: '',
          description: '',
          email: '',
          id: Number,
          imgUrl: '',
          locations: [],
          phone: Number,
          state: '',
          year_founded: Number,
          zipcode: Number
        }
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
    this.getServiceProvider();
  },
  methods: {
    async getServiceProvider() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + this.$route.params.id)
        .then(res => {
          this.serviceproviderVal= res.data;
          console.log(this.serviceproviderVal);
        })
        .catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.serviceproviderVal = data;
        console.log(this.serviceproviderVal);
        console.log(this.currentUser);
      })
    }
  }
}
</script>

<style scoped>
.pfaccountlocationcontainer{
  background: gray;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
}

.pfaccountlocation{
  background: white;
  width: 40%;
  margin-right: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pfaccountlocationlist{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.pfaccountlocationflex{
  display: flex;
  width: 100%;
}
.pfaccountlocationlist button {
  width: 75%;
  background: red;
  color: white;
  padding: 10px 0px 10px 0px;
  border-radius: 20px;
}
.pfaccountlocationcolumn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pfaccountlocationcolumn button {
  width: 100%;
  background: transparent;
  color: red;
  border: 1px solid red;
  padding: 10px 0px 10px 0px;
  border-radius: 20px;
}
.pfaccountlocationcolumn:first-child{
  width: 15%;
}
.pfaccountlocationflexrow{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 25%;
}
.pfaccountlocationflexrow2{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 80%;
}
.featuredbusiness {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.featuredbusiness h2 {
  text-align: center;
  color: white;
  border-bottom: 1px solid lightgrey;
  padding: 0px 0px 10px 0px;
  width: 100%;
}

.featuredbusiness div {
  display: flex;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  color: white;
}

.featuredbusiness div a {
  color: lightgrey;
  text-decoration-style: solid;
  text-decoration-color: lightgrey;
}

.featuredbusiness button {
  background: red;
  width: 60%;
  border-radius: 20px;
  color: white;
  margin: 20px 0px 0px 0px;
}

</style>
