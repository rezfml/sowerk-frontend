<template>
  <div class="pfaccountlocationcontainer mt-16">
    <v-skeleton-loader
      v-if="!loading"
      type="card-avatar, article, article, actions"
      min-height="50vh"
      min-width="50vw"
    ></v-skeleton-loader>
    <v-card class="pfaccountlocation d-flex flex-column align-center mb-8" v-if="loading">
      <v-row style="width: 100%;" class="d-flex justify-center">
        <h1>Not a member?</h1>
      </v-row>
      <v-row style="width: 90%; border-bottom: 1px outset #A61c00" class="d-flex justify-space-between pb-4">
        <v-btn :to="'../../../login'" color="primary" style="width: 45%;">Login</v-btn>
        <v-btn :to="'../../../register'" style="color: white; background-color: #7C7C7C; width: 45%;">Signup</v-btn>
      </v-row>
      <v-row style="width: 100%;" class="d-flex">
        <v-col cols="5">
          <v-img :src="propertymanagerVal.imgUrl" class="profilepic"/>
        </v-col>
        <v-col cols="7" class="d-flex flex-column align-center justify-center">
          <h1 class="companyName">{{propertymanagerVal.account_name}}</h1>
          <p class="companyDescription">{{propertymanagerVal.description}}</p>
          <p>{{propertymanagerVal.website}}</p>
        </v-col>
      </v-row>
      <h1 class="companyLocationTitle">Channels</h1>
      <v-data-table
        :items="propertymanagerVal.locations"
        :headers="headers"
        :items-per-page="5"
        style="width: 95%;"
        v-if="loadLocations"
      >
        <template v-slot:item.name="{item}">
          <v-row class="d-flex" cols="12" md="6">
            <v-col>
              <v-img :src="item.imgUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
              <v-card-text>{{item.name}}</v-card-text>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.full_address="{item}">
          <v-row class="d-flex" cols="12" md="6">
            <v-col>
              <v-card-text>{{item.address}}</v-card-text>
              <v-card-text>{{item.city}}, {{item.state}}  {{item.zipcode}}</v-card-text>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.created="{item}">
          <v-row class="d-flex" cols="12" md="6">
            <v-col>
              <v-card-text v-if="item.created">{{item.created.slice(0,4)}}</v-card-text>
              <v-card-text v-else>0</v-card-text>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.approvedCount="{item}">
          <v-row class="d-flex" cols="12" md="6">
            <v-col>
              <v-card-text v-if="item.approvedCount > 0">{{item.approvedCount}}</v-card-text>
              <v-card-text v-else>0</v-card-text>
            </v-col>
          </v-row>
        </template>
      </v-data-table>
    </v-card>

<!--    <div class="pfaccountsecondcolumn">-->
<!--      <div class="retailLocations">-->
<!--        <p class="locationNum" v-if="this.propertymanagerVal.locations"><span style="color: #A61C00;">{{propertymanagerVal.locations.length}}</span> Retail Locations</p>-->
<!--        <div v-for='location in locationSlice2' class="pfaccountlocationflexrow2">-->
<!--          <p v-if="location.address==null">Retail locations unavaiable</p>-->
<!--          <p v-else>{{ location.address }}, {{ location.city }}, {{ location.state }}, {{ location.zipcode }}<span>-->
<!--          <a :href="'/landingpage/property-manager/' + propertymanagerVal.id + '/location/' + location.id">></a>-->
<!--          </span>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="featuredbusiness">-->
<!--        <h2>Featured Businesses Near You</h2>-->
<!--        <div>-->
<!--          <img alt="Cabela's"/>-->
<!--          <h3>Cabela’s</h3>-->
<!--          <a>View Account</a>-->
<!--        </div>-->
<!--        <div>-->
<!--          <img alt="Walmart"/>-->
<!--          <h3>Walmart</h3>-->
<!--          <a>View Account</a>-->
<!--        </div>-->
<!--        <div>-->
<!--          <img alt="Chipotle"/>-->
<!--          <h3>Chipotle</h3>-->
<!--          <a>View Account</a>-->
<!--        </div>-->
<!--        <button>View More</button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  layout: 'fullwidth',
  data() {
    return {
      loadLocations: false,
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
      headers: [
        { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
        { text: 'Address', value: 'full_address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Founded', value: 'year_founded', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Joined', value: 'created', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Approved Providers', value: 'approvedCount', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
      ]
    }
  },
  watch: {

  },
  async mounted() {
    console.log(this.$route.params.id, 'ROUTE PARAMS')
    let routeArr = this.$route.params.id.split('');
    let newRouteArr = [];
    for(let i=0; i<routeArr.length; i++) {
      if(routeArr[i] !== '/') {
        newRouteArr.push(routeArr[i])
      } else {
        newRouteArr.push('%2F')
      }
    }
    let newRouteStr = newRouteArr.join('');
    console.log(newRouteStr)
    //window.location.href = 'https://www.sowerk.com/landingpage/property-manager/' + newRouteStr
    await this.getPropertyManager(newRouteStr);
  },
  methods: {
    async getPropertyManager(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/name/' + id)
        .then(res => {
          this.propertymanagerVal = res.data;
          this.locationSlice1 = res.data.locations.slice(0,3);
          this.locationSlice2 = res.data.locations.slice(0,5);
          console.log(this.propertymanagerVal, 'property-manager', this.locationSlice1, 'loc 1', this.locationSlice2, 'loc 2');
          this.loading = true;
        })
        .catch(e => e);
      /*if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.propertymanagerVal = data;
        console.log(this.propertymanagerVal);
      })*/
      for(let i=0; i<this.propertymanagerVal.locations.length; i++) {
        this.propertymanagerVal.locations[i] = {
          address: this.propertymanagerVal.locations[i].address,
          adminLevel: this.propertymanagerVal.locations[i].adminLevel,
          approvedCount: 0,
          city: this.propertymanagerVal.locations[i].city,
          contact_first_name: this.propertymanagerVal.locations[i].contact_first_name,
          contact_last_name: this.propertymanagerVal.locations[i].contact_last_name,
          description: this.propertymanagerVal.locations[i].description,
          email: this.propertymanagerVal.locations[i].email,
          id: this.propertymanagerVal.locations[i].id,
          imageUrl: this.propertymanagerVal.locations[i].imageUrl,
          latitude: this.propertymanagerVal.locations[i].latitude,
          locationtags: this.propertymanagerVal.locations[i].locationtags,
          longitude: this.propertymanagerVal.locations[i].longitude,
          name: this.propertymanagerVal.locations[i].name,
          phone: this.propertymanagerVal.locations[i].phone,
          radius: this.propertymanagerVal.locations[i].radius,
          services: this.propertymanagerVal.locations[i].services,
          state: this.propertymanagerVal.locations[i].state,
          userforms: this.propertymanagerVal.locations[i].userforms,
          year_founded: this.propertymanagerVal.locations[i].year_founded,
          zipcode: this.propertymanagerVal.locations[i].zipcode,
          created: this.propertymanagerVal.locations[i].created,
        }
        await this.getPmApproved(this.propertymanagerVal.locations[i].id, i);
      }
      setTimeout(() => {
        this.loadLocations = true
        this.loading = true;
        console.log(this.propertymanagerVal.locations, 'WOW')
      }, 2000)
    },
    async getPmApproved(id, index) {
      await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmLocationType/' + id + '/1')
        .then(response => {
          console.log('LOCATION SP APPROVED FILTER', response);
          this.propertymanagerVal.locations[index].approvedCount = response.data.length
          console.log(this.propertymanagerVal.locations[index], 'LOCATION AFTER ADD APPROVED COUNT')
        })
        .catch(err => {
          console.log('err location sp approved', err)
        })
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
  padding: 20px 0px 0px 0px;
}

.pfaccountlocation{
  background: white;
  width: 60%;
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
