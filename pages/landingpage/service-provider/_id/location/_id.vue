<template>
  <div class="pfaccountlocationcontainer mt-16">
    <div class="pfaccountlocation">
      <img class="coverpic"/>
      <img :src="locationVal.imageUrl" class="profilepic"/>
      <button>Share</button>
      <h1>{{locationVal.name}}</h1>
      <p>{{locationVal.description}}</p>
      <p>Address: {{locationVal.address}}, {{locationVal.city}}, {{locationVal.state}} {{locationVal.zipcode}}</p>
      <p>Founded: {{ locationVal.year_founded }}</p>
      <p v-if="locationVal.created">Joined SOWerk: {{ locationVal.created.slice(0,4) }}</p>
      <form>
        <label>Accepting Vendor Applications</label>
        <select>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <button>Apply To This Location</button>
      </form>
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
</template>

<script>

export default {
  layout: 'fullwidth',
  data() {
    return {
      loading: false,
      locationVal: []
    }
  },
  async mounted() {
    this.loading = true;
    await this.getPropertyManagerLocation();
  },
  methods: {
    async getPropertyManagerLocation() {
      await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.$route.params.id)
        .then(res => {
          this.locationVal = res.data;
          console.log(this.locationVal, 'location');
        })
        .catch(e => e);
    }
  }
}

</script>

<style scoped>
.pfaccountlocationcontainer {
  background: #47494E;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
}

.pfaccountlocation {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-right: 10px;
  background: white;
  border: 1px solid white;
  border-radius: 20px;
}

.pfaccountlocation .coverpic {
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.pfaccountlocation .profilepic {
  width: 30%;
  border-radius: 50%;
}

.pfaccountlocation button {
  background: transparent;
  color: red;
  border: 1px solid red;
  border-radius: 20px;
  width: 20%;
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 10px;
}

.pfaccountlocation h1 {
  color: red;
}

.pfaccountlocation p {
  align-self: flex-start;
  margin: 10px 5px 10px 5px;
}

.pfaccountlocation form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 10px 0px 20px 0px;
}

.pfaccountlocation form button {
  background: red;
  color: white;
  border: none;
  width: 90%;
  align-self: center;
}

.pfaccountlocation form select {
  background: #7F828B;
  width: 80%;
}
.featuredbusiness {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
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
