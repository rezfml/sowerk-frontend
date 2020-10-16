<template>
  <div class="pfaccountlocationcontainer mt-16">
    <div class="pfaccountlocation" v-if="loading">
      <img :src="propertymanagerVal.imgUrl" class="profilepic"/>
      <h1 class="companyName">{{propertymanagerVal.account_name}}</h1>
      <p class="companyDescription">{{propertymanagerVal.description}}</p>
      <button class="applyAll">Apply To All Locations</button>
      <h2 class="companyLocationTitle">Locations</h2>
      <div v-for='(location, index) in locationSlice1' class="pfaccountlocationlist">
        <div class="pfaccountlocationflex">
          <div class="pfaccountlocationcolumn">
            <img class="locationPic" :src="location.imageUrl"/>
            <button class="locationShare">Share</button>
          </div>
          <div class="pfaccountlocationcolumn">
            <h1 class="locationName">{{location.name}}</h1>
            <p class="locationAddress">Address: {{ location.address }}, {{ location.city }}, {{ location.state }}, {{ location.zipcode }}</p>
            <p class="locationFounding">Founded: {{ location.year_founded }}</p>
            <p class="locationJoined">Joined SOWerk: 2020</p>
          </div>
          <!-- BELOW NEEDS TO CHANGE WHEN UPDATE NUMBER OF APPROVED PROVIDERS IS LISTED-->
          <div class="pfaccountlocationflexrow">
            <p style="color: #A61C00;">142</p>
            <p>Approved SOWerk Providers At This Location</p>
          </div>
        </div>
        <button @click="$router.push('/register/provider')" class="applyApproval">Apply To Become An Approved Service Provider</button>
      </div>
    </div>

    <div class="pfaccountsecondcolumn">
      <div class="retailLocations">
        <p class="locationNum" v-if="this.propertymanagerVal.locations"><span style="color: #A61C00;">{{propertymanagerVal.locations.length}}</span> Retail Locations</p>
        <div v-for='location in locationSlice2' class="pfaccountlocationflexrow2">
          <p v-if="location.address==null">Retail locations unavaiable</p>
          <p v-else>{{ location.address }}, {{ location.city }}, {{ location.state }}, {{ location.zipcode }}<span>
          <a :href="'/landingpage/property-manager/' + propertymanagerVal.id + '/location/' + location.id">></a>
          </span>
          </p>
        </div>
      </div>
      <div class="featuredbusiness">
        <h2>Featured Businesses Near You</h2>
        <div>
          <img alt="Cabela's"/>
          <h3>Cabela’s</h3>
          <a>View Account</a>
        </div>
        <div>
          <img alt="Walmart"/>
          <h3>Walmart</h3>
          <a>View Account</a>
        </div>
        <div>
          <img alt="Chipotle"/>
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
  layout: 'fullwidth',
  data() {
    return {
      loading: false,
      propertymanagerVal: [
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
      ],
      locationSlice1: [],
      locationSlice2: [],
    }
  },
  watch: {

  },
  async mounted() {
    this.loading = true;
    await this.getPropertyManager();
  },
  methods: {
    async getPropertyManager() {
      await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + this.$route.params.id)
        .then(res => {
          this.propertymanagerVal = res.data;
          this.locationSlice1 = res.data.locations.slice(0,3);
          this.locationSlice2 = res.data.locations.slice(0,5);
          console.log(this.propertymanagerVal, 'property-manager', this.locationSlice1, 'loc 1', this.locationSlice2, 'loc 2');
        })
        .catch(e => e);
      /*if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.propertymanagerVal = data;
        console.log(this.propertymanagerVal);
      })*/
    }
  }
}
</script>

<style scoped>
.pfaccountlocationcontainer{
  background: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#2B2B2B, #444444);
  background-size: contain;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  overflow: scroll;
}

.pfaccountlocation{
  background: white;
  width: 50%;
  margin-right: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pfaccountsecondcolumn{
  width: 30%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pfaccountlocation .profilepic{
  border-radius: 25px;
}

.pfaccountlocation .companyName{
  color: #A61C00;
  font-size: 26px;
  margin-top: 5px;
}

.pfaccountlocation .companyDescription {
  font-size: 18px;
  color: #666666;
  width: 90%;
  text-align: center;
}

.pfaccountlocation .applyAll {
  background: #A61C00;
  color: white;
  font-size: 18px;
  width: 50%;
  padding: 5px 0px 5px 0px;
  border-radius: 20px;
}

.pfaccountlocationlist{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0px 20px 0px;
}
.pfaccountlocationlist:nth-child(odd){
  background: #F4F4F4;
}

.pfaccountlocation .companyLocationTitle {
  border-top: 1px solid #707070;
  width: 90%;
  text-align: center;
  font-size: 26px;
  color: #A61C00;
  margin: 20px 0px 20px 0px;
  padding-top: 20px;
}

.pfaccountlocationflex{
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.pfaccountlocationlist .applyApproval {
  width: 75%;
  background: #A61C00;
  color: white;
  padding: 10px 0px 10px 0px;
  border-radius: 20px;
  margin: 20px 0px 20px 0px;
}
.pfaccountsecondcolumn{
  width: 20%;
}
.pfaccountlocationcolumn .locationPic{
  border-radius: 50%;
  width: 4vw;
  height: 7vh;
  margin-left: 20px;
}
.pfaccountlocationcolumn .locationShare {
  font-size: 18px;
  width: 70%;
  margin-top: 20px;
  color: #A61C00;
  background: transparent;
  margin-left: 20px;
  padding: 0px;
}
.pfaccountlocationcolumn button {
  width: 100%;
  background: #A61C00;
  color: white;
  border: 1px solid #A61C00;
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
.pfaccountlocationflexrow p{
  font-size: 18px;
  font-weight: bold;
  color: #7C7C7C;
  padding: 0px 5px 0px 5px;
}
.pfaccountlocationflexrow2{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pfaccountlocationflexrow2 p{
  font-size: 18px;
  color: #7C7C7C;
  padding: 12px 0px 0px 0px;
}
.pfaccountlocationflexrow2 a {
  font-size: 18px;
  color: #7C7C7C;
  margin-right: 20px;
  text-decoration: none;
}
.pfaccountlocationflexrow2:nth-child(even){
  background:#F8F8F8;
}
.locationNum {
  text-align: center;
  font-size: 26px;
  color: #7C7C7C;
}
.retailLocations {
  background: white;
  border-radius: 30px;
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-weight: bold;
}
.locationName {
  color: #A61C00;
  font-size: 18px;
  font-weight: bold;
  align-self: start;
  margin-left: -50px;
}
.locationAddress, .locationFounding, .locationJoined {
  color: #666666;
  font-size: 18px;
  align-self: start;
  margin-left: -50px;
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
  font-size: 26px;
  font-weight: bold;
}

.featuredbusiness div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  color: white;
  padding: 20px 0px 20px 0px;
}
.featuredbusiness div h3{
  font-size: 20px;
  font-weight: bold;
}

.featuredbusiness div a {
  color: #9A9A9A;
  text-decoration-style: solid;
  text-decoration-color: #9A9A9A;
  font-size: 20px;
  font-weight: normal;
}

.featuredbusiness button {
  background: #A61C00;
  width: 60%;
  border-radius: 20px;
  color: white;
  margin: 20px 0px 0px 0px;
  padding: 10px 0px 10px 0px;
}

</style>
