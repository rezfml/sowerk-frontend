<template>
  <div class="pfaccountlocationcontainer">
    <div class="pfaccountlocation">
      <img class="coverpic"/>
      <img class="profilepic"/>
      <h1>Bass Pro Shops</h1>
      <img />
      <p>BPS Direct, LLC is an American privately held retailer of hunting, fishing, camping and other related outdoor recreation merchandise. Bass Pro Shops supports and sells merchandise for the National Audubon Society.</p>
      <button>Apply To All Location</button>
      <div class="pfaccountlocationlist">
        <h2>Locations</h2>
        <div class="pfaccountlocationflex">
          <div class="pfaccountlocationcolumn">
            <img />
            <button>Share</button>
          </div>
          <div class="pfaccountlocationcolumn">
            <h1>Bass Pro Shops (Memphis, TN)</h1>
            <img />
            <p>Address: 1 Bass Pro Dr, Memphis, TN 38105</p>
            <p>Founded: 1989</p>
            <p>Joined SOWerk: 2020</p>
          </div>
          <div class="pfaccountlocationflexrow">
            <p>142</p>
            <p>Approved SOWerk Providers
              At This Location</p>
          </div>
        </div>
        <button>Apply To Become An Approved Service Provider</button>

        <div class="pfaccountlocationflex">
          <div class="pfaccountlocationcolumn">
            <img />
            <button>Share</button>
          </div>
          <div class="pfaccountlocationcolumn">
            <h1>Bass Pro Shops (Springfield, MO)</h1>
            <p>Address: 1935 S Campbell Ave, Springfield, MO 65807</p>
            <p>Founded: 1971</p>
            <p>Joined SOWerk: 2020</p>
          </div>
          <div class="pfaccountlocationflexrow">
            <p>341</p>
            <p>Approved SOWerk Providers
              At This Location</p>
          </div>
        </div>
        <button>Apply To Become An Approved Service Provider</button>

        <div class="pfaccountlocationflex">
          <div class="pfaccountlocationcolumn">
            <img />
            <button>Share</button>
          </div>
          <div class="pfaccountlocationcolumn">
            <h1>Bass Pro Shops (Columbia, MO)</h1>
            <p>Address: 3101 Bass Pro Dr, Columbia, MO 65202</p>
            <p>Founded: 1972</p>
            <p>Joined SOWerk: 2020</p>
          </div>
          <div class="pfaccountlocationflexrow">
            <p>108</p>
            <p>Approved SOWerk Providers
              At This Location</p>
          </div>
        </div>
        <button>Apply To Become An Approved Service Provider</button>
      </div>
    </div>

    <div class="pfaccountsecondcolumn">
      <div>
        <p>169 Retail Locations</p>
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
    name: 'sp-account',
    data() {
      return {
        loading: false,
        serviceprovider: [{

        }]
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
