<template>
   <section
      class="joinconnection pt-10"
      style="flex-direction: row; padding-bottom: 125px;"
    >
      <div class="joinconnectioncolumn">
        <h1>Business Account</h1>
        <div class="joinconnectioncontainer border1">
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
            />
            <div class="joinconnectiontext">
              <h3>1. Create Account and Vet Vendors</h3>
              <p>
                In less than 15 minutes, you can have multiple locations/channels set up
                with dedicated staff accounts and live questionnaires vetting
                local & national Vendors.
              </p>
            </div>
          </div>

          <!-- RED ARROW -->
          <svg
            width="50%"
            x="0px"
            y="0px"
            viewBox="0 0 600 300"
            style="enable-background:new 0 0 600 300;"
            xml:space="preserve"
          >
            <path
              id="Polygon_24"
              class="st0"
              d="M302.6,185.8c-1.7,0.2-3.5,0.2-5.2,0l-277.3-30c-28.3-3.1-25.9-42.1,2.6-42.1h554.7
	        c28.5,0,31,39.1,2.6,42.1L302.6,185.8z"
            />
          </svg>

          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
            />
            <div class="joinconnectiontext">
              <h3>2. Vendor Management</h3>
              <p>
                Communicate with ease while maintaining internal notes, documents and other Vendor interaction records. Empower staff to work with approved vendors and maintain liability protections.
              </p>
            </div>
          </div>
          <button
            style="margin-top: 15px; font-weight:700 !important"
            @click="$router.push('/landingpage/join-product-landing')"
          >
            See All Features
          </button>
        </div>
      </div>

      <!-- LIKE SYMBOL -->
      <div class="likeSymbol" style="width: 15%;padding: 0; margin: 0; padding-top: 1050px" >
        <v-row align="center" class="ma-0 pa-0">
          <v-col cols="4" class="pr-1">
            <div style="border-bottom: 9px solid white; border-radius: 25px"></div>
          </v-col>
          <v-col cols="4" style="text-align: center" class="pa-0">
            <img width="60px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/like.png" alt="like thumbs up"/>
          </v-col>
          <v-col cols="4" class="pl-1">
            <div style="border-bottom: 9px solid white; border-radius: 25px;"></div>
          </v-col>  
        </v-row>
      </div>

      <div class="joinconnectioncolumn">
        <h1>Vendor Account</h1>
        <div class="joinconnectioncontainer border2">
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_1_copy.png"
            />
            <div class="joinconnectiontext">
              <h3>1. Build A Profile</h3>
              <p>
                SOWerk makes it easy & quick for you to show off your brand and
                company background. SOWerk also promotes all the companies where you are an approved vendor.
                 Your SOWerk profile is both easy and powerful.
              </p>
            </div>
          </div>

          <!-- RED ARROW -->
          <svg
            width="50%"
            x="0px"
            y="0px"
            viewBox="0 0 600 300"
            style="enable-background:new 0 0 600 300;"
            xml:space="preserve"
          >
            <path
              id="Polygon_24"
              class="st0"
              d="M302.6,185.8c-1.7,0.2-3.5,0.2-5.2,0l-277.3-30c-28.3-3.1-25.9-42.1,2.6-42.1h554.7
	        c28.5,0,31,39.1,2.6,42.1L302.6,185.8z"
            />
          </svg>

          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profilecopy.png"
            />
            <div class="joinconnectiontext">
              <h3>2. Approved Vendor Status</h3>
              <p>
                Use your SOWerk account to qualify for approved Vendor status in minutes.
              </p>
            </div>
          </div>

          <!-- RED ARROW -->
          <svg
            width="50%"
            x="0px"
            y="0px"
            viewBox="0 0 600 300"
            style="enable-background:new 0 0 600 300;"
            xml:space="preserve"
          >
            <path
              id="Polygon_24"
              class="st0"
              d="M302.6,185.8c-1.7,0.2-3.5,0.2-5.2,0l-277.3-30c-28.3-3.1-25.9-42.1,2.6-42.1h554.7
	        c28.5,0,31,39.1,2.6,42.1L302.6,185.8z"
            />
          </svg>

          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/appcopy.png"
            />
            <div class="joinconnectiontext">
              <h3>3. Get The Job</h3>
              <p>
                We make it easy and powerful for businesses to communicate their needs to approved Vendors. We also make it easy for you to react quickly.
              </p>
            </div>
          </div>
          <button
            style="margin-top: 15px;font-weight:700 !important"
            @click="$router.push('/landingpage/join-service-landing')"
          >
            See All Features
          </button>
        </div>
      </div>


    </section>
</template>

<script>
export default {
    name: 'PFandVJoinConnection'
}
</script>

<style scoped>
.joinconnection {
  background: linear-gradient(
      180deg,
      rgba(43, 43, 43, 1) 35%,
      rgba(40, 40, 40, 0.9) 100%
    ),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png');
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.joinconnection h1 {
  color: white;
  width: 100%;
  font-size: 50px;
  font-weight: 400;
  line-height: 1.25em;
  text-align: center;
  margin: 0px 0px 20px 0px;
}

.joinconnectiontext {
  width: 100%;
  padding: 10px 20px 10px 30px;
}

.joinconnection .joinconnectioncolumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 20px 10px 20px 10px;
}

.border1 {
  border-top: 5px solid #a61c00;
  border-left: 5px solid #a61c00;
  border-right: none !important;
  border-bottom: 5px solid #a61c00;
  padding: 20px 10px 20px 10px;
}
.border2 {
  border-top: 5px solid #a61c00;
  border-right: 5px solid #a61c00;
  border-bottom: 5px solid #a61c00;
  padding: 20px 10px 20px 10px;
}
.joinconnectioncolumn .joinconnectioncontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox {
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px 0px 10px 0px;
}
.joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox h3 {
  font-size: 23px;
  width: 100%;
  font-weight: 500;
  text-align: left;
  margin: 10px 0px 20px 0px;
}
.joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox p {
  font-size: 20px;
}
.joinconnectioncontainerbox img {
  width: 50%;
}
.joinconnectioncolumn .joinconnectioncontainer button {
  background: #a61c00;
  color: white;
  border-radius: 20px;
  padding: 10px 0px 10px 0px;
  width: 60%;
  font-size: 18px;
}

.st0 {
  fill: #a61c00;
}

@media (max-width: 1280px) {
  .likeSymbol {
    display: none;
  }

  .joinconnection .joinconnectioncolumn{
    width: 38%;
  }
}

@media (max-width: 1060px) {
  .joinconnectioncolumn
    .joinconnectioncontainer
    .joinconnectioncontainerbox
    h3 {
    font-size: 20px;
  }

  .joinconnectioncolumn .joinconnectioncontainer .joinconnectioncontainerbox p {
    font-size: 16px;
  }
}

@media (max-width: 950px) {
  .joinconnection {
    flex-direction: column !important;
  }

  .joinconnection h1 {
    font-size: 43px;
  }

  .joinconnection .joinconnectioncolumn {
    width: 50%;
  }

  .joinconnectioncontainerbox img {
    width: 40%;
  }
}

@media (max-width: 680px) {
  .joinconnection {
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(68, 68, 68, 1) 35%,
      rgba(43, 43, 43, 0.9) 100%
    );
  }

  .joinconnection .joinconnectioncolumn {
    width: 90%;
  }

  .joinconnection h1 {
    font-size: 32px;
    width: 100%;
  }

  .joinconnectiontext {
    padding: 10px 10px 10px 20px;
  }
}


</style>