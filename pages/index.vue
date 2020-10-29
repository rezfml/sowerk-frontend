<template>
  <div id="joincontainer">
    <!-- HERO SECTION-->
    <v-row
      style="background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/construction-645465copy.jpg') no-repeat center center; -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; height: 80vh; max-height: 1200px; padding-top: 275px; padding-bottom: 100px"
      align-content="center"
      class="pt-md-16 ma-0"
    >
      <v-card
        max-height="400px"
         :height="$vuetify.breakpoint.mdAndUp ? '50vh' : '45vh'"
        :width="$vuetify.breakpoint.lgAndUp ? '60%' : '100%'"
        max-width="1200px"
        style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;"
        class="d-flex flex-column justify-center"
        id="herocorners"
        color="rgba(0,0,0,0.7)"
      >
        <div
          style="width: 100%; display: flex; flex-direction: column; flex-wrap: nowrap;"
        >
          <v-card-title
            ><v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png"
              alt="SOWerk Logo"
              contain
              :height="$vuetify.breakpoint.mdAndUp ? '80px' : '55px'"
            ></v-img
          ></v-card-title>
          <v-card-text class="d-flex flex-column justify-center">
            <p
              style="font-size: 22px; line-height: 1.25em; word-break: break-word"
              class="white--text text-sm-h4 text-md-h3 text-center font-weight-bold"
            >
              The Approved Vendor Platform
            </p>
<!--            S-->

            <div class="text-center">
              <v-btn
                class=" primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                to="/landingpage/join-service-landing"
                >Service Providers</v-btn
              >
              <v-btn
                class=" primary ma-3"
                large
                width="90%"
                max-width="350"
                style="border-radius: 16px"
                to="/landingpage/join-product-landing"
                >Property & Facility Managers</v-btn
              >
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-row>

    <!--NEW SECTION SOWERK LINK SECTION -->
    <v-container
      fluid
      text-center
      pb-8
      style="background: linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(129,22,0,1) 100%);; display: flex; flex-direction: column; justify-content: center; align-items: center; box-sizing: border-box;"
      class="skew-top"
    >
      <v-row align="center" justify="center">
        <v-col cols="11" class="pa-0">
          <p
            class="text-lg-h3 text-sm-h4 font-weight-bold white--text pt-10 pb-2 pb-sm-10"
            style="word-break: break-word; opacity: .8; font-size: 30px; width: 100%;"
          >
            The Business-to-Business Communication Tools Between Vendors Selling Products & Services To Businesses
          </p>
        </v-col>
      </v-row>

      <v-row
        class="justify-space-around"
        style="width: 100%; max-width: 1400px;"
      >
        <!-- CARD 1 -->
        <v-col cols="12" sm="10" md="5" class="d-flex px-0 px-sm-3">
          <v-card
            align="center"
            class="ma-0 flex-grow-1"
            style="border-radius: 20px; width: 100% "
          >
            <v-card-title class="px-0">
              <p style="width: 100%;">Local & National Businesses</p>
            </v-card-title>

            <v-card-text>
              <v-row justify-center>
                <v-col>
                  <v-img
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"
                    style="object-fit: contain; width: 60%;"
                  ></v-img>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="pa-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%"
                    >
                      Find, Vet, & Manage Vendors
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-center"
                    style="max-width: 80%; width: 80%; font-size: 17px; font-weight: 500"
                  >
                    Our business-to-business platform provides companies the tools to efficiently identify, vet,
                    and manage 3rd party providers for each of their locations.<br/>
                    <span style="font-weight: 800"
                      >SOWerk is FREE & Powerful!</span
                    >
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Any Business Type
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12" class="pt-1" style="max-width: 100%;">
                  <ul
                    style="column-count: 2; list-style: none; text-align: left; font-size: 17px; font-weight: 500"
                    class="pl-12 pl-sm-12 list1"
                  >
                    <li>- Retail & Hospitality Chains</li>
                    <li>- Commercial Real Estate</li>
                    <li>- Manufacturing Facilities</li>
                    <li>- Warehouse & Distribution</li>
                    <li>- Governments</li>
                    <li>- Restaurant Groups</li>
                    <li>- School Districts</li>
                    <li>- Residential Investments</li>
                    <li>- Military</li>
                  </ul>
                </v-col>

                <v-col cols="12" class="d-flex">
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px;"
                    block
                    large
                    class="flex-grow-1"
                    to="/landingpage/join-product-landing"
                    >Businesses - Learn More</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- ARROWS - hidden on mobile for now-->
        <v-col
          cols="2"
          md="2"
          class="justify-center pa-sm-0 d-sm-none d-none d-md-flex"
          position="center"
        >
          <v-icon size="16vw" color="white">mdi-swap-horizontal</v-icon>
        </v-col>

        <!-- CARD 2 -->
        <v-col cols="12" sm="10" md="5" class="d-flex px-0 px-sm-3">
          <v-card
            align="center"
            class="ma-0 flex-grow-1"
            style="border-radius: 20px;"
          >
            <v-card-title class="px-0">
              <p style="width: 100%">Service & Product Vendors</p>
            </v-card-title>

            <v-card-text>
              <v-row
                style="display: flex; flex-direction: column; flex-wrap: nowrap"
              >
                <v-col>
                  <v-img
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
                    style="object-fit: contain; width: 60%;"
                  ></v-img>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Approved Local & National Vendors
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-center"
                    style="max-width: 80%; width: 80%; font-size: 17px; font-weight: 500"
                  >
                    SOWerk makes it possible for you to
                    become an approved vendor, receive job/project requests, and
                    communicate with business owners.<br/>
                    <span style="font-weight: 800"
                      >It's FREE To Get Started!</span
                    >
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col cols="12" class="pa-0">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Tools For Every Service Provider
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12" class="pt-1" style="max-width: 100%;">
                  <ul
                    style="column-count: 2; list-style: none; text-align: left; font-weight: 500; font-size: 17px;"
                    class="pl-10 pl-sm-12 list2"
                  >
                    <li>- Electrician</li>
                    <li>- Merchandise</li>
                    <li>- HVAC</li>
                    <li>- Plumber</li>
                    <li>- Landscaper</li>
                    <li>- Printing</li>
                    <li>- Paving</li>
                    <li>- Excavation</li>
                    <li>- Pest Control</li>
                    <li>- Waste</li>
                    <li>- Engineer</li>
                    <li>- Facility Resources</li>
                    <li>- Contractor</li>
                    <li>- Glass & Window</li>
                    <li>- Environmental</li>
                    <li>- Survey</li>
                    <li>- Cleaning</li>
                    <li>- Event</li>
                    <li>- Security</li>
                    <li>- Consultant</li>
                  </ul>
                </v-col>

                <v-col cols="12 mt-4" align-self-end>
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px"
                    block
                    large
                    to="/landingpage/join-service-landing"
                    >Vendors - Learn More</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- NEW SECTION - All Reviews Section -->
    <!-- hidden for now per colin -->
    <!-- <section class="joincaroselreview">
      <AllReviews v-bind:allReviews="allReviews"></AllReviews>
    </section> -->

    <!-- NEW SECTION - Join Traits Section -->
    <v-container
      fluid
      grid-list-md
      text-center
      pb-16
      style="background:#2B2B2B; display: flex; justify-content: center; align-items:center; flex-direction: column"
    >
      <p
        class="text-lg-h3 text-sm-h4 font-weight-bold white--text pl-4 pr-4 pt-10 mb-0 pb-10"
        style="word-break: break-word; opacity: .8; font-size: 30px; width: 100%; line-height: 1.25em"
      >
        Why SOWerk Wins Big
      </p>

      <v-layout row style="max-width: 1280px; flex-wrap: wrap;">
        <!-- CARD 1 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px; "
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/checkmarkcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Simple & Fast</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              Our simple design makes connecting with other companies quick and
              painless while using either the desktop or mobile app.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 2 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Powerful Tools</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              At the very foundation of SOWerk are powerful vendor vetting tools designed to
              empower all staff levels and build stronger vendor relations.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 3 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Automations</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              SOWerk has many automated features that help make everyone’s life
              easy, like automatically requiring service providers to requalify
              or automatically updating a service provider’s profile every time
              they achieve approved vendor status.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 4 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Convenient</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              For the facility manager in the middle of the night that needs to
              contact all your approved plumbers for help or a local service
              provider that powers his business through a smartphone, SOWerk is
              designed to be convenient.
            </div>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>

    <!-- Per Colin hide for now -->
    <!-- <section class="joinvideo">
      <video></video>
    </section> -->

    <!-- NEW SECTION - JOIN CONNECTION -->
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
                In less than 15 minutes, you can have multiple business locations set up
                with dedicated staff accounts and customized questionnaires vetting
                local & national vendors.
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
                SOWerk gives your staff at one location or all locations the communication tools to manage vendor relationships.
              </p>
            </div>
          </div>
          <button
            style="margin-top: 15px"
            @click="$router.push('/landingpage/join-product-landing')"
          >
            See All Features
          </button>
        </div>
      </div>
      <img />
      <div class="joinconnectioncolumn">
        <h1>Vendor Account</h1>
        <div class="joinconnectioncontainer border2">
          <div class="joinconnectioncontainerbox">
            <img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_1_copy.png"
            />
            <div class="joinconnectiontext">
              <h3>1. Build Your Business Profile</h3>
              <p>
                SOWerk makes it easy & quick for you to show off your company background,
                and we promote all the company connections you have on SOWerk so businesses know they can trust you.
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
                Your SOWerk Vendor profile is designed to make applying to approved vendor
                programs a snap. We know you are short on time so we try to make it both easy & rewarding.
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
                Every day, the SOWerk staff is working hard to give Vendors the tools to grow their relationships and business.
              </p>
            </div>
          </div>
          <button
            style="margin-top: 15px"
            @click="$router.push('/landingpage/join-service-landing')"
          >
            See All Features
          </button>
        </div>
      </div>
    </section>

    <!-- per colin hide reviews for now will get reviews in the next couple weeks. 10/18 -->
    <!-- <Reviews v-bind:reviews="reviews"></Reviews> -->

    <!-- PROPERTY FACILITY OFTEN ASK -->
    <v-flex class="pt-16" style="background: #EDEDED">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px"
              class="mb-0 mb-sm-8 text-sm-h4 text-md-h3 font-weight-bold primary--text text-center"
            >
              Common Questions By Businesses
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background: #EDEDED"
            >
            <!-- QUESTION ONE -->
            <v-row class="pt-8 " style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align:center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Is this going to create more work for
                    me?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Actually, we designed SOWerk to be less work for you. Think
                    of SOWerk like connecting with vendors on social
                    media, except they have to meet your approved provider
                    requirements. From here, you can easily manage and
                    communicate with your approved vendors.</p>
                </v-col>
            </v-row>

            <!-- QUESTION TWO -->
              <v-row class="pt-6" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align:center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will SOWerk Save Us Money? Will It Protect Our Investments?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">If time is money and quality is everything, then yes, SOWerk can help. SOWerk makes it efficient for any staff member to vet & manage local/national vendors, including getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make vendors re-qualify annually on things like insurance coverage and licenses so you don’t have to.</p>
                </v-col>
            </v-row>

              <!-- QUESTION THREE -->
               <v-row class="pt-6 pb-8" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will SOWerk Help Shield Me From Cold Calls?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Sales is part of any business but sometimes, you just need a place to send the salesman where they can apply for your approved vendor program. SOWerk is your solution. </p>
                </v-col>
            </v-row>
            </v-list>
            <!-- BUTTON -->
            <v-btn
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              to="/landingpage/join-product-landing"
              >Provider Facility - Learn More</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-flex>

<!-- SERVICE PROVIDER OFTEN ASK -->
 <v-flex class="pt-16 pb-16" style="background: #EDEDED url('https://sowerk-images.s3.us-east-2.amazonaws.com/asset1.png') no-repeat; background-position: 1100px 50px;">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px;"
              class="mb-0 mb-sm-8 text-sm-h4 text-md-h3 font-weight-bold primary--text text-center"
            >
              Vendors Generally Ask
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background: transparent"
            >
            <!-- QUESTION ONE -->
            <v-row class="pt-8 " style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Do I Seriously Get More Jobs?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Yes, businesses of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet vendors' request bids.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">SOWerk helps you look good when applying for approved
                      vendor programs within SOWerk, and we also make it easy to share those
                      good looks with others. Next time you're bidding a job or working a potential customer who is not on SOWerk, show
                      off your resume by emailing or texting your SOWerk
                      profile.</p>
                </v-col>
            </v-row>

            <!-- QUESTION TWO -->
              <v-row class="pt-6" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Is SOWerk Time Consuming and Hard To
                    Use?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Not at all, a SOWerk profile only takes 10 minutes to
                      set up.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">With only a click or two on your computer or mobile device,
                      you can use your SOWerk profile to apply for approved
                      vendor programs.</p>
                </v-col>
            </v-row>

              <!-- QUESTION THREE -->
               <v-row class="pt-6 pb-8" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will I Get Charged All The Time & Get Junk
                    Leads?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">SOWwerk is your business tool, kind of like an account software which is why we try to keep it distraction-free. We know you don't have time for junk mail or poor leads. Unlike other websites, SOWerk vendors receive communications from their approved vendor programs, specific inbound leads, or new businesses inviting them to apply for approved vendor programs. </p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Being on SOWerk and promoting your business is free. If you wish to apply for an approved vendor program or utilize other SOWerk features, we offer different packages. Details can be found on our Approved Provider Pricing page.</p>
                </v-col>
            </v-row>
            </v-list>
            <!-- BUTTON -->
            <v-btn
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              to="/landingpage/join-service-landing"
              >Service Provider - Learn More</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-flex>

    <!-- <OftenAskPF></OftenAskPF>
    <OftenAskSP></OftenAskSP> -->
     <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
          >
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
  </div>
</template>

<script>
import Reviews from '../components/landing/general/Reviews'
import AllReviews from '../components/landing/general/AllReviews'
import OftenAskPF from '../components/landing/property-manager/OftenAskPF'
import OftenAskSP from '../components/landing/service-provider/OftenAskSP'

export default {
  layout: 'fullwidth',
  data: () => ({
    allReviews: [],
    reviews: [],
    fab:false,
  }),
  components: {
    Reviews,
    AllReviews,
    OftenAskPF,
    OftenAskSP,
  },
  mounted() {
    this.getReviews()
    this.getAllReviews()
  },
  methods: {
    async getAllReviews() {
      let { data, status } = await this.$http
        .get(
          'https://www.sowerkbackend.com/api/reviewsLimit?limit=20&offset=0'
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.allReviews = data
        console.log(this.allReviews, 'allReviews')
      })
    },
    async getReviews() {
      let { data, status } = await this.$http
        .get(
          'https://www.sowerkbackend.com/api/reviewsLimitDesc?limit=2&offset=0'
        )
        .catch((e) => e)
      if (this.$error(status, data.message, data.errors)) return
      this.$nextTick(function () {
        this.reviews = data
        console.log(this.reviews, 'reviews')
      })
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
}
</script>

<style scoped>
.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}

#joincontainer {
  width: 100%;
  padding: 0px !important;
  font-family: Roboto;
}

.skew-top {
  position: relative;
  z-index: 30;
}

.skew-top:before {
  position: absolute;
  content: '';
  background: linear-gradient(
    180deg,
    rgba(166, 28, 0, 1) 35%,
    rgba(129, 22, 0, 1) 100%
  );
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -20;
  transform-origin: top left;
  transform: skewY(-2deg);
}

.joincaroselreview {
  background: #151515;
  height: auto;
  width: 100%;
  padding: 0px 0px 100px 0px;
}

.joinvideo {
  background: #151515;
  height: 30vh;
}

.joinconnection {
  background: linear-gradient(
      180deg,
      rgba(68, 68, 68, 1) 35%,
      rgba(43, 43, 43, 0.9) 100%
    ),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png');
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
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
  fill: #a52022;
}

.landinghomereview {
  background: #a61c00;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.landinghomereview h1 {
  font-size: 55px;
}
.landinghomereview p {
  font-size: 18px;
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
  /* #herocorners {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  } */

  .list1 {
    column-count: 1 !important;
  }

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


