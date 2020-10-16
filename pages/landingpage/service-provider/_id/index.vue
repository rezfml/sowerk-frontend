<template>
  <div class="spaccountlocationcontainer mt-16">
    <div class="spaccountlocation" v-if="loading">
      <img :src="serviceproviderVal.imgUrl" class="profilepic"/>
      <h1 class="companyName">{{serviceproviderVal.account_name}}</h1>
      <p class="companyDescription">{{serviceproviderVal.description}}</p>

      <v-row class="d-flex justify-center" style="width: 80%; text-align: center; font-size: 18px;">
        <v-col cols="12" md="6">
          <p><span style="color: #A61C00;">Founded:</span> {{serviceproviderVal.year_founded}}</p>
          <v-btn color="primary" rounded large >Contact Info</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <p>Approved Insurance</p>
          <p>Approved Service License</p>
          <p v-if="serviceproviderVal.created">SOWerk Service Provider Since: {{ serviceproviderVal.created.slice(0,4) }}</p>
        </v-col>
      </v-row>

      <!-- HERE NEEDS TO GO THE SLIDE GROUP FOR APPROVED VENDORS -->

      <v-row class="d-flex flex-column" style="width: 80%; text-align: center; font-size: 18px;">
        <h1>Contact Us</h1>
        <v-form class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              placeholder="Name (First)"></v-text-field>
            <v-text-field
              placeholder="Name (Last)"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              placeholder="Phone"></v-text-field>
            <v-text-field
              placeholder="Email"></v-text-field>
            <v-btn color="white" large rounded>Submit</v-btn>
          </v-col>
        </v-form>
      </v-row>

      <button @click="$router.push('/register/buyer')" class="applyApproval" >Request Vendor Application</button>
    </div>

    <div class="spaccountsecondcolumn">

      <div class="retailLocations">
        <p class="locationNum" v-if="this.serviceproviderVal.locations"><span style="color: #A61C00;">{{serviceproviderVal.locations.length}}</span> Retail Locations</p>

        <div v-for='location in locationSlice2' class="spaccountlocationflexrow2">
          <p v-if="location.address==null">Retail locations unavaiable</p>
          <p v-else>{{ location.address }}, {{ location.city }}, {{ location.state }}, {{ location.zipcode }}<span>
          <a :href="'/landingpage/service-provider/' + serviceproviderVal.id + '/location/' + location.id">></a>
          </span>
          </p>
        </div>
      </div>

      <div class="featuredbusiness">
        <h2>Featured Businesses Near You</h2>
        <!-- this will be added in it currently is not working when it comes to the data. 
        <div>
         <HomeCard></HomeCard>
        </div>-->
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
import HomeCard from '~/components/dashboard/FacilitiesCard'
export default {
  layout: 'fullwidth',
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
      ],
      locationSlice1: [],
      locationSlice2: [],
    }
  },
  components: {
    HomeCard
   // props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug']
  },
  watch: {

  },
  async mounted() {
    this.loading = true;
    await this.getServiceProvider();
  },
  methods: {
    async getServiceProvider() {
      await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + this.$route.params.id)
        .then(res => {
          this.serviceproviderVal = res.data;
          this.locationSlice1 = res.data.locations.slice(0,3);
          this.locationSlice2 = res.data.locations.slice(0,5);
          console.log(this.serviceproviderVal, 'property-manager', this.locationSlice1, 'loc 1', this.locationSlice2, 'loc 2');
        })
        .catch(e => e);
      /*if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.serviceproviderVal = data;
        console.log(this.serviceproviderVal);
      })*/
    }
  }
}
</script>

<style scoped>
.spaccountlocationcontainer{
  background: url("https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png"), linear-gradient(#2B2B2B, #444444);
  background-size: contain;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  overflow: scroll;
}

.spaccountlocation{
  background: white;
  width: 50%;
  margin-right: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spaccountsecondcolumn{
  width: 30%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spaccountlocation .profilepic{
  border-radius: 25px;
}

.spaccountlocation .companyName{
  color: #A61C00;
  font-size: 26px;
  margin-top: 5px;
}

.spaccountlocation .companyDescription {
  font-size: 18px;
  color: #666666;
  width: 90%;
  text-align: center;
}

.spaccountlocation .applyAll {
  background: #A61C00;
  color: white;
  font-size: 18px;
  width: 50%;
  padding: 5px 0px 5px 0px;
  border-radius: 20px;
}

.spaccountlocationlist{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0px 20px 0px;
}
.spaccountlocationlist:nth-child(odd){
  background: #F4F4F4;
}

.spaccountlocation .companyLocationTitle {
  border-top: 1px solid #707070;
  width: 90%;
  text-align: center;
  font-size: 26px;
  color: #A61C00;
  margin: 20px 0px 20px 0px;
  padding-top: 20px;
}

.spaccountlocationflex{
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.applyApproval {
  width: 75%;
  background: #A61C00;
  color: white;
  padding: 10px 0px 10px 0px;
  border-radius: 20px;
  margin: 20px 0px 20px 0px;
}
.spaccountsecondcolumn{
  width: 20%;
}
.spaccountlocationcolumn .locationPic{
  border-radius: 50%;
  width: 4vw;
  height: 7vh;
  margin-left: 20px;
}
.spaccountlocationcolumn .locationShare {
  font-size: 18px;
  width: 70%;
  margin-top: 20px;
  color: #A61C00;
  background: transparent;
  margin-left: 20px;
  padding: 0px;
}
.spaccountlocationcolumn button {
  width: 100%;
  background: #A61C00;
  color: white;
  border: 1px solid #A61C00;
  padding: 10px 0px 10px 0px;
  border-radius: 20px;
}
.spaccountlocationcolumn:first-child{
  width: 15%;
}
.spaccountlocationflexrow{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 25%;
}
.spaccountlocationflexrow p{
  font-size: 18px;
  font-weight: bold;
  color: #7C7C7C;
  padding: 0px 5px 0px 5px;
}
.spaccountlocationflexrow2{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.spaccountlocationflexrow2 p{
  font-size: 18px;
  color: #7C7C7C;
  padding: 12px 0px 0px 0px;
}
.spaccountlocationflexrow2 a {
  font-size: 18px;
  color: #7C7C7C;
  margin-right: 20px;
  text-decoration: none;
}
.spaccountlocationflexrow2:nth-child(even){
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

.v-form button {
  border: 1px solid #A61C00;
}
</style>
