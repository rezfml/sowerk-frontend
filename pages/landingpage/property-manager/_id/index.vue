<template>
  <div class="pfaccountlocationcontainer">
    <div class="pfaccountlocation" v-if="loading">
      <img :src="propertymanagerVal.imgUrl" class="profilepic" />
      <h1 class="companyName">{{ propertymanagerVal.account_name }}</h1>
      <p class="companyDescription">{{ propertymanagerVal.description }}</p>
      <button class="applyAll">Apply To All Locations</button>
      <h2 class="companyLocationTitle">Locations</h2>
      <div
        v-for="(location, index) in locationSlice1"
        class="pfaccountlocationlist"
      >
        <div class="pfaccountlocationflex">
          <div class="pfaccountlocationcolumn">
            <img class="locationPic" :src="location.imageUrl" />
            <button class="locationShare">Share</button>
          </div>
          <div class="pfaccountlocationcolumn">
            <h1 class="locationName">{{ location.name }}</h1>
            <p class="locationAddress">
              Address: {{ location.address }}, {{ location.city }},
              {{ location.state }}, {{ location.zipcode }}
            </p>
            <p class="locationFounding">Founded: {{ location.year_founded }}</p>
            <p class="locationJoined">Joined SOWerk: 2020</p>
          </div>
          <!-- BELOW NEEDS TO CHANGE WHEN UPDATE NUMBER OF APPROVED PROVIDERS IS LISTED-->
          <div class="pfaccountlocationflexrow">
            <p style="color: #A61C00;">142</p>
            <p>Approved SOWerk Providers At This Location</p>
          </div>
        </div>
        <button class="applyApproval">
          Apply To Become An Approved Service Provider
        </button>
      </div>
    </div>

    <div class="pfaccountsecondcolumn">
      <div class="retailLocations">
        <p class="locationNum" v-if="this.propertymanagerVal.locations">
          <span style="color: #A61C00;">{{
            propertymanagerVal.locations.length
          }}</span>
          Retail Locations
        </p>
        <div
          v-for="location in locationSlice2"
          class="pfaccountlocationflexrow2"
        >
          <p>
            {{ location.address }}, {{ location.city }}, {{ location.state }},
            {{ location.zipcode }}
          </p>
          <a
            :href="
              '/landingpage/property-manager/' +
                propertymanagerVal.id +
                '/location/' +
                location.id
            "
            >></a
          >
        </div>
      </div>
      <div class="featuredbusiness">
        <h2>Featured Businesses Near You</h2>
        <div>
          <img alt="Cabela's" />
          <h3>Cabela’s</h3>
          <a>View Account</a>
        </div>
        <div>
          <img alt="Walmart" />
          <h3>Walmart</h3>
          <a>View Account</a>
        </div>
        <div>
          <img alt="Chipotle" />
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
          zipcode: Number,
        },
      ],
      locationSlice1: [],
      locationSlice2: [],
    }
  },
  watch: {},
  async mounted() {
    this.loading = true
    await this.getPropertyManager()
  },
  methods: {
    async getPropertyManager() {
      await this.$http
        .get(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' +
            this.$route.params.id
        )
        .then((res) => {
          this.propertymanagerVal = res.data
          this.locationSlice1 = res.data.locations.slice(0, 3)
          this.locationSlice2 = res.data.locations.slice(0, 5)
          console.log(
            this.propertymanagerVal,
            'property-manager',
            this.locationSlice1,
            'loc 1',
            this.locationSlice2,
            'loc 2'
          )
        })
        .catch((e) => e)
      /*if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.propertymanagerVal = data;
        console.log(this.propertymanagerVal);
      })*/
    },
  },
}
</script>

<style scoped>
.pfaccountlocationcontainer {
  background: url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'),
    linear-gradient(#2b2b2b, #444444);
  background-size: contain;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  overflow: scroll;
}

.pfaccountlocation {
  background: white;
  width: 50%;
  margin-right: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pfaccountsecondcolumn {
  width: 30%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pfaccountlocation .profilepic {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-top: 25px;
}

.pfaccountlocation .companyName {
  color: #a61c00;
  font-size: 26px;
  margin-top: 10px;
}

.pfaccountlocation .companyDescription {
  font-size: 18px;
  color: #666666;
  width: 90%;
  text-align: center;
}

.pfaccountlocation .applyAll {
  background: #a61c00;
  color: white;
  font-size: 18px;
  width: 60%;
  padding: 5px 0px 5px 0px;
  border-radius: 20px;
}

.pfaccountlocationlist {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0px 20px 0px;
}
.pfaccountlocationlist:nth-child(odd) {
  background: #f4f4f4;
}

.pfaccountlocation .companyLocationTitle {
  border-top: 1px solid #707070;
  width: 90%;
  text-align: center;
  font-size: 26px;
  color: #a61c00;
  margin: 20px 0px 20px 0px;
  padding-top: 20px;
}

.pfaccountlocationflex {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.pfaccountlocationlist .applyApproval {
  width: 60%;
  background: #a61c00;
  color: white;
  padding: 10px 0px 10px 0px;
  border-radius: 20px;
  margin: 20px 0px 20px 0px;
}
.pfaccountsecondcolumn {
  width: 20%;
}
.pfaccountlocationcolumn .locationPic {
  border-radius: 50%;
  width: 4vw;
  height: 7vh;
  margin-left: 20px;
}
.pfaccountlocationcolumn .locationShare {
  font-size: 18px;
  width: 70%;
  margin-top: 20px;
  color: #a61c00;
  background: transparent;
  margin-left: 10px;
  padding: 0px;
}
.pfaccountlocationcolumn button {
  width: 100%;
  background: #a61c00;
  color: white;
  border: 1px solid #a61c00;
  padding: 10px 0px 10px 0px;
  border-radius: 20px;
}
.pfaccountlocationcolumn:first-child {
  width: 15%;
}
.pfaccountlocationflexrow {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 25%;
}
.pfaccountlocationflexrow p {
  font-size: 18px;
  font-weight: bold;
  color: #7c7c7c;
  padding: 0px 5px 0px 5px;
}
.pfaccountlocationflexrow2 {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pfaccountlocationflexrow2 p {
  font-size: 18px;
  color: #7c7c7c;
  padding: 12px 0px 0px 0px;
}
.pfaccountlocationflexrow2 a {
  font-size: 18px;
  color: #7c7c7c;
  margin-right: 20px;
  text-decoration: none;
}
.pfaccountlocationflexrow2:nth-child(even) {
  background: #f8f8f8;
}
.locationNum {
  text-align: center;
  font-size: 26px;
  color: #7c7c7c;
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
  color: #a61c00;
  font-size: 18px;
  font-weight: bold;
  align-self: start;
  margin-left: -50px;
}
.locationAddress,
.locationFounding,
.locationJoined {
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
.featuredbusiness div h3 {
  font-size: 20px;
  font-weight: bold;
}

.featuredbusiness div a {
  color: #9a9a9a;
  text-decoration-style: solid;
  text-decoration-color: #9a9a9a;
  font-size: 20px;
  font-weight: normal;
}

.featuredbusiness button {
  background: #a61c00;
  width: 60%;
  border-radius: 20px;
  color: white;
  margin: 20px 0px 0px 0px;
  padding: 10px 0px 10px 0px;
}

@media (max-width: 1280px) {
  .pfaccountlocation .companyLocationTitle {
    margin-bottom: 0;
  }
  .pfaccountlocationcolumn {
    width: 70%;
  }

  .pfaccountlocationflex {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .locationAddress,
  .locationFounding,
  .locationJoined,
  .locationName {
    margin-left: 0;
    font-size: 15px;
  }

  .locationName {
    padding-bottom: 10px;
    font-size: 18px;
  }

  .pfaccountlocationflexrow {
    width: 70%;
    align-items: center;
    justify-content: left;
  }

  .pfaccountlocationflexrow p {
    padding: 0;
  }
  .pfaccountlocationflexrow p:nth-child(1) {
    padding-right: 5px;
  }

  .pfaccountlocationflexrow p:nth-child(2) {
    font-size: 14px;
  }

  .pfaccountlocationcolumn:nth-child(1) {
    width: 60%;
    padding: 15px 0 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pfaccountlocationcolumn .locationPic {
    margin-left: 0;
  }

  .pfaccountlocationcolumn .locationShare {
    margin: 0 0 0 20px;
    width: 20%;
  }

  .pfaccountlocationlist .applyApproval {
    font-size: 13px;
    width: 70%;
  }
}
</style>
