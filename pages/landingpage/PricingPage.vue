<template>
  <v-container fluid class="pa-0">
    <!-- HERO SECTION -->
    <v-container
      fluid
      style="height: 80vh; background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://sowerk-images.s3.us-east-2.amazonaws.com/pricingBg.png'); background-size: cover;object-fit: contain;"
      class="d-flex align-center justify-center"
    >
      <v-card class="transparent elevation-0 text-center">
        <v-card-title
          class="px-0 text-md-h3 text-sm-h4 white--text font-weight-bold justify-center"
          style="font-size: 25px; word-break: break-word;"
          >SOWerk Vendors Start Now For&nbsp;Free</v-card-title
        >
        <v-card-text class="px-1 text-md-h5 text-subtitle-1 white--text"
          >No Credit Card Needed - Get Started in Minutes&nbsp;- It's
          100%&nbsp;Free</v-card-text
        >
        <v-btn
          class="white--text px-18 px-sm-16 my-1 my-sm-4"
          outlined
          rounded
          @click="$router.push('/register/provider')"
          >GET STARTED NOW</v-btn
        >
      </v-card>
    </v-container>

    <!-- FREE & POWERFUL VENDOR TOOLS SECTION -->
    <v-container
      fluid
      text-center
      pb-16
      class="tools-container"
      style="background:#a61c00; display: flex; justify-content: center; align-items:center; flex-direction: column"
    >
      <v-row style="flex-wrap: wrap; max-width: 1400px; margin-top:-120px">
        <v-col cols="12" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <v-card-title
              class="text-h5 text-md-h4 font-weight-bold justify-center"
              style="color: #a61c00; word-break: break-word;"
              >Free & Powerful Vendor&nbsp;Tools</v-card-title
            >

            <!-- FIRST ROw BLURB -->
            <v-row class="pt-6" style="width: 80%">
              <!-- CARD ONE -->
              <v-col cols="12" md="6" class="px-0 px-sm-4">
                <v-card class="elevation-0 text-center">
                  <div
                    class="ma-auto"
                    style="width: 100px; height: auto; padding-top:30px; padding-bottom: 15px;"
                  >
                    <v-img
                      src="https://sowerk-images.s3.us-east-2.amazonaws.com/user.png"
                      style="object-fit: contain;"
                    ></v-img>
                  </div>
                  <v-card-title class="justify-center">
                    Company Profile
                  </v-card-title>
                  <v-card-text class="px-0 px-sm-4">
                    Simply creating a free profile on SOWerk instantly grants
                    you major benefits. The best part is - you don't have to do
                    any extra work. Think of your profile as its own personal
                    salesman that will show off your company to businesses on
                    and off of SOWerk anytime day or night.
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- CARD TWO -->
              <v-col cols="12" md="6" class="px-0 px-sm-4">
                <v-card class="elevation-0 text-center">
                  <div
                    class="ma-auto"
                    style="width: 100px; height: auto; padding-top:30px; padding-bottom: 15px;"
                  >
                    <v-img
                      src="https://sowerk-images.s3.us-east-2.amazonaws.com/portfolio.png"
                      style="object-fit: contain;"
                    ></v-img>
                  </div>
                  <v-card-title class="justify-center">
                    Project Portfolio
                  </v-card-title>
                  <v-card-text class="px-0 px-sm-4">
                    SOWerk knows how important your reputation is, that's why we
                    show your company profile like a resume. We also want
                    businesses to understand your successful work history. We
                    can also take it one step forward and show that your company
                    has all of the required legal documents in place to help
                    build trust from square one.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- SECOND ROw BLURB -->
            <v-row class="pt-6 pb-16" style="width: 80%">
              <!-- CARD ONE -->
              <v-col cols="12" md="6" class="px-0 px-sm-4">
                <v-card class="elevation-0 text-center">
                  <div
                    class="ma-auto"
                    style="width: 100px; height: auto; padding-top:30px; padding-bottom: 15px;"
                  >
                    <v-img
                      src="https://sowerk-images.s3.us-east-2.amazonaws.com/email.png"
                      style="object-fit: contain;"
                    ></v-img>
                  </div>
                  <v-card-title class="justify-center">
                    New Leads
                  </v-card-title>
                  <v-card-text class="px-0 px-sm-4">
                    Even if your company has a website with lead forms, we also
                    want you to receive leads through SOWerk. Simply by creating
                    an account, anyone who comes across your account has the
                    ability to submit a lead and ask for your services.
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- CARD TWO -->
              <v-col cols="12" md="6" class="px-0 px-sm-4">
                <v-card class="elevation-0 text-center">
                  <div
                    class="ma-auto"
                    style="width: 100px; height: auto; padding-top:30px; padding-bottom: 15px;"
                  >
                    <v-img
                      src="https://sowerk-images.s3.us-east-2.amazonaws.com/resume.png"
                      style="object-fit: contain;"
                    ></v-img>
                  </div>
                  <v-card-title class="justify-center">
                    Unlimited Applications
                  </v-card-title>
                  <v-card-text class="px-0 px-sm-4">
                    After creating your SOWerk free account, you have access to
                    apply to any business on SOWerk. Its free and easy, within a
                    few clicks, you have already shook hands with a company your
                    competitors are still trying to cold call.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- <section
      v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
      style="margin-bottom:20%;"
      class="abouthero"
    >
      <h1 style="width:90%;font-size:3.5vw;margin-top:90px;">
        SOWerk Vendors Start Now For Free
      </h1>
      <h2 style="font-size:1.8vw;margin-top:-200px;color:white;">
        No Credit Card Needed - Get Started in Minutes - It's 100% Free
      </h2>
      <v-btn
        @click="$router.push('/register/provider')"
        rounded
        outlined
        color="white"
        class="py-6"
        style="width:20vw;margin-top:20px;margin-bottom:5%; font-size: 18px;"
      >
        Get Started Now</v-btn
      >
    </section> -->

    <!-- <section v-else-if="!$vuetify.breakpoint.xs" class="abouthero">
      <h1 style="width:90%;font-size:3.5vw;margin-top:-50px;">
        SOWerk Vendors Start Now For Free
      </h1>
      <h2 style="font-size:1.8vw;margin-top:-200px;color:white;">
        No Credit Card Needed - Get Started in Minutes - It's 100% Free
      </h2>
      <v-btn
        @click="$router.push('/register/provider')"
        rounded
        outlined
        color="white"
        style="width:25vw;margin-top:20px; font-size:1.8vw"
      >
        Get Started Now</v-btn
      >
    </section> -->

    <!-- <section v-else class="abouthero">
      <h1 style="width:90%;font-size:5vw;margin:0;margin-top:-60%">
        SOWerk Vendors Start Now For Free
      </h1>
      <h2 style="font-size:3.5vw;color:white;">
        No Credit Card Needed - Get Started in Minutes -<br /><span
          class="d-flex justify-center"
        >
          It's 100% Free</span
        >
      </h2>
      <v-btn
        @click="$router.push('/register/provider')"
        rounded
        outlined
        color="white"
        style="width:50vw;margin-top:20px; font-size:3.8vw"
      >
        Get Started Now</v-btn
      >
    </section> -->

    <!-- <section
      style="margin-bottom:30%;"
      v-if="
        !$vuetify.breakpoint.md &&
          !$vuetify.breakpoint.sm &&
          !$vuetify.breakpoint.xs
      "
    >
      <v-container
        fluid
        style="
    background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%);
    transform-origin: top left;
    transform: skewY(-2deg);
    margin-top:-400px;
    height:60vh;"
        class="py-16"
      >
        <v-row
          justify="center"
          class="d-flex"
          style="
    transform: skewY(2deg);margin-top:-10%; "
        >
          <v-flex sm11>
            <v-row>
              <v-card
                height="auto"
                :width="$vuetify.breakpoint.lgAndUp ? '80%' : '10%'"
                class="py-0 my-12 d-flex justify-center"
                style="border-radius: 20px;margin:auto"
                align="center"
              >
                <v-container>
                  <v-card-title
                    class="d-flex justify-center my-6"
                    style="color:#a61c00;font-weight:600;font-size:3.5rem"
                    >Free & Powerful Vendor Tools</v-card-title
                  >
                  <v-row class="d-flex justify-space-around flex-wrap">
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'"
                      class="my-12 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/user.png"
                        alt="sowerk user"
                      />
                      <h1 class="my-4">Company Profile</h1>
                      <p>
                        Simply creating a free profile on SOWerk instantly
                        grants you major benefits. The best part is - you don't
                        have to do any extra work. Think of your profile as its
                        own personal salesman that will show off your company to
                        businesses on and off of SOWerk anytime day or night.
                      </p>
                    </v-card>
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'"
                      class="my-8 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/portfolio.png"
                        alt="sowerk portfolio"
                      />
                      <h1 class="my-4">Project Portfolio</h1>
                      <p>
                        SOWerk knows how important your reputation is, that's
                        why we show your company profile like a resume. We also
                        want businesses to understand your successful work
                        history. We can also take it one step forward and show
                        that your company has all of the required legal
                        documents in place to help build trust from square one.
                      </p>
                    </v-card>
                  </v-row>

                  <v-row class="d-flex justify-space-around flex-wrap">
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'"
                      class="my-8 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/email.png"
                        alt="sowerk email"
                      />
                      <h1 class="my-4">New Leads</h1>
                      <p>
                        Even if your company has a website with lead forms, we
                        also want you to receive leads through SOWerk. Simply by
                        creating an account, anyone who comes across your
                        account has the ability to submit a lead and ask for
                        your services.
                      </p>
                    </v-card>
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'"
                      class=" my-6 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/resume.png"
                        alt="sowerk resume"
                      />
                      <h1 class="my-4">Unlimited Applications</h1>
                      <p>
                        After creating your SOWerk free account, you have access
                        to apply to any business on SOWerk. Its free and easy,
                        within a few clicks, you have already shook hands with a
                        company your competitors are still trying to cold call.
                      </p>
                    </v-card>
                  </v-row>
                </v-container>
              </v-card>
            </v-row>
          </v-flex>
        </v-row>
      </v-container>
    </section> -->
    <!-- <section
      style="margin-bottom:30%;"
      v-else-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
    >
      <v-container
        fluid
        style="
    background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%);
    transform-origin: top left;
    transform: skewY(-2deg);
    margin-top:-40%;
    height:60vh;"
        class="py-16"
      >
        <v-row
          justify="center"
          style="
    transform: skewY(2deg);margin-top:-10%; "
        >
          <v-flex sm11>
            <v-row>
              <v-card
                height="auto"
                :width="$vuetify.breakpoint.mdAndUp ? '100%' : '10%'"
                class="py-16 my-12 d-flex justify-center"
                style="border-radius: 20px;"
                align="center"
              >
                <v-container>
                  <v-card-title
                    class="d-flex justify-center my-6"
                    style="color:#a61c00;font-weight:600;font-size:3.5rem"
                    >Free & Powerful Vendor Tools</v-card-title
                  >
                  <v-row class="d-flex justify-space-around flex-wrap">
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'"
                      class="py-16 my-12 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/user.png"
                        alt="sowerk user"
                      />
                      <h1>Company Profile</h1>
                      <p>
                        Simply creating a free profile on SOWerk instantly
                        grants you major benefits. The best part is - you don't
                        have to do any extra work. Think of your profile as its
                        own personal salesman that will show off your company to
                        businesses on and off of SOWerk anytime day or night.
                      </p>
                    </v-card>
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'"
                      class="py-16 my-12 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/portfolio.png"
                        alt="sowerk portfolio"
                      />
                      <h1>Project Portfolio</h1>
                      <p>
                        SOWerk knows how important your reputation is, that's
                        why we show your company profile like a resume. We also
                        want businesses to understand your successful work
                        history. We can also take it one step forward and show
                        that your company has all of the required legal
                        documents in place to help build trust from square one.
                      </p>
                    </v-card>
                  </v-row>

                  <v-row class="d-flex justify-space-around flex-wrap">
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'"
                      class="py-16 my-12 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/email.png"
                        alt="sowerk email"
                      />
                      <h1>New Leads</h1>
                      <p>
                        Even if your company has a website with lead forms, we
                        also want you to receive leads through SOWerk. Simply by
                        creating an account, anyone who comes across your
                        account has the ability to submit a lead and ask for
                        your services.
                      </p>
                    </v-card>
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'"
                      class="py-16 my-12 px-12"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/resume.png"
                        alt="sowerk resume"
                      />
                      <h1>Unlimited Applications</h1>
                      <p>
                        After creating your SOWerk free account, you have access
                        to apply to any business on SOWerk. Its free and easy,
                        within a few clicks, you have already shook hands with a
                        company your competitors are still trying to cold call.
                      </p>
                    </v-card>
                  </v-row>
                </v-container>
              </v-card>
            </v-row>
          </v-flex>
        </v-row>
      </v-container>
    </section> -->

    <!-- <section style="position:relative;" v-else>
      <v-container
        fluid
        style="
    background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%);
    transform-origin: top left;
    transform: skewY(-2deg);
    margin-top:-70%;
    height:auto"
        class="py-16"
      >
        <v-row
          justify="center"
          style="
    transform: skewY(2deg);margin-top:-5%;margin-left:5%; "
        >
          <v-flex sm11>
            <v-row>
              <v-card
                height="auto"
                :width="$vuetify.breakpoint.mdAndUp ? '100%' : '90%'"
                class="py-1 my-1 d-flex justify-center"
                style="border-radius: 20px;"
                align="center"
              >
                <v-container>
                  <v-card-title
                    class="d-flex justify-center my-6"
                    style="color:#a61c00;font-weight:600;font-size:1.8rem"
                    >Free & Powerful<br />
                    Vendor Tools</v-card-title
                  >
                  <v-row class="d-flex justify-space-around flex-wrap">
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'"
                      class="py-1 my-1 px-1"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/user.png"
                        alt="sowerk user"
                      />
                      <h1 class="my-4">Company Profile</h1>
                      <p>
                        Simply creating a free profile on SOWerk instantly
                        grants you major benefits. The best part is - you don't
                        have to do any extra work. Think of your profile as its
                        own personal salesman that will show off your company to
                        businesses on and off of SOWerk anytime day or night.
                      </p>
                    </v-card>

                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'"
                      class="py-1 my-1 px-4"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/portfolio.png"
                        alt="sowerk portfolio"
                      />
                      <h1 class="my-4">Project Portfolio</h1>
                      <p>
                        SOWerk knows how important your reputation is, that's
                        why we show your company profile like a resume. We also
                        want businesses to understand your successful work
                        history. We can also take it one step forward and show
                        that your company has all of the required legal
                        documents in place to help build trust from square one.
                      </p>
                    </v-card>
                  </v-row>

                  <v-row class="d-flex justify-space-around flex-wrap">
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'"
                      class="py-1 my-1 px-4"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/email.png"
                        alt="sowerk email"
                      />
                      <h1 class="my-4">New Leads</h1>
                      <p>
                        Even if your company has a website with lead forms, we
                        also want you to receive leads through SOWerk. Simply by
                        creating an account, anyone who comes across your
                        account has the ability to submit a lead and ask for
                        your services.
                      </p>
                    </v-card>
                    <v-card
                      height="auto"
                      :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'"
                      class="py-1 my-1 px-4"
                      outlined
                      style="border:none"
                      align="center"
                    >
                      <img
                        src="https://sowerk-images.s3.us-east-2.amazonaws.com/resume.png"
                        alt="sowerk resume"
                      />
                      <h1 class="my-4">Unlimited Applications</h1>
                      <p>
                        After creating your SOWerk free account, you have access
                        to apply to any business on SOWerk. Its free and easy,
                        within a few clicks, you have already shook hands with a
                        company your competitors are still trying to cold call.
                      </p>
                    </v-card>
                  </v-row>
                </v-container>
              </v-card>
            </v-row>
          </v-flex>
        </v-row>
      </v-container>
    </section> -->

    <!-- SOWERK PRICING SECTION -->
    <v-container
      fluid
      class="d-flex align-center justify-center"
      style="background: #EDEDED"
    >
      <v-row style="max-width: 95%;">
        <v-row class="justify-center flex-wrap: wrap">
          <!-- SOWERK BASIC CARD -->
          <v-col
            cols="12"
            lg="2"
            md="12"
            class="d-flex pa-0 mx-auto"
            style="max-height: 100%; width: 20%;"
          >
            <v-card
              class="text-center flex-grow-1"
              style="border-radius: 24px; border-top: 45px solid #707070; border-left: 4px solid #707070; border-right: 4px solid #707070; border-bottom: 4px solid #707070; "
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase"
                style="margin-top:-50px;"
                >Sowerk Basic</v-card-text
              >
              <!-- <v-card-text class="text-h5 black--text font-weight-bold">SOWERK BASIC</v-card-text> -->
              <p
                class="text-h3 font-weight-bold pt-5 pb-4"
                style="color: #707070"
              >
                FREE
              </p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li>1 User License</li>
                  <li>SOWerk Profile</li>
                  <li>SOWerk Leads</li>
                </ul>
              </v-col>
            </v-card>
          </v-col>

          <!-- SOWERK STARTER CARD -->
          <v-col cols="12" lg="2" md="3" class="pa-0 mx-auto">
            <v-card
              class="text-center pa-2"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase"
                style="margin-top:-55px;"
                >Sowerk Starter</v-card-text
              >
              <p
                class="text-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em"
              >
                $8.33<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $100.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">3</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">5</span> Business Connections
                  </li>
                  <li>
                    <span style="color: #a61c00">$1.50</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile</li>
                  <li>SOWerk Leads</li>
                </ul>
              </v-col>
            </v-card>
          </v-col>

          <!-- SOWERK ADVANCED CARD -->
          <v-col cols="12" lg="2" md="3" class="pa-0 mx-auto">
            <v-card
              class="text-center pa-2"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase"
                style="margin-top:-55px;"
                >Sowerk Advanced</v-card-text
              >
              <p
                class="text-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em"
              >
                $20.83<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $250.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">5</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">20</span> Business Connections
                  </li>
                  <li>
                    <span style="color: #a61c00">$1.00</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile</li>
                  <li>SOWerk Leads</li>
                </ul>
              </v-col>
            </v-card>
          </v-col>

          <!-- SOWERK PRO CARD -->
          <v-col cols="12" lg="2" md="3" class="pa-0 mx-auto">
            <v-card
              class="text-center pa-2"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase"
                style="margin-top:-55px;"
                >Sowerk PRO</v-card-text
              >
              <p
                class="text-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em"
              >
                $41.67<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $500.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">10</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">50</span> Business Connections
                  </li>
                  <li>
                    <span style="color: #a61c00">$0.75</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile</li>
                  <li>SOWerk Leads</li>
                </ul>
              </v-col>
            </v-card>
          </v-col>

          <!-- SOWERK NATIONAL CARD -->
          <v-col
            cols="12"
            lg="2"
            md="3"
            class="pa-0 mx-auto"
            style="width: 20%"
          >
            <v-card
              class="text-center pa-2"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase"
                style="margin-top:-55px;"
                >Sowerk National</v-card-text
              >
              <p
                class="text-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em"
              >
                $125.00<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $1,500.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">15</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">250</span> Business Connections
                  </li>
                  <li>
                    <span style="color: #a61c00">$0.50</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile</li>
                  <li>SOWerk Leads</li>
                </ul>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <!-- SOWERK ENTERPRISE -->
        <v-row>
          <v-col cols="12">
            <v-card
              class="text-center"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase"
                style="margin-top:-48px;"
                >Sowerk Enterprise</v-card-text
              >
              <p class="text-h4 font-weight-bold pt-6" style="color: #a61c00">
                CUSTOM RATE
              </p>
              <v-divider></v-divider>
              <v-card-text
                >Does you’re business require a special connection and pricing
                rate? At SOWerk, we are happy to work with you to make sure we
                develop a perfect plan based around your needs.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn class="white--text py-6" style="width: 80%; background-color: #A61C00; border-radius: 20px;">GET STARTED NOW</v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>



    <!-- PROPERTY FACILITY OFTEN ASK -->
    <v-flex class="pt-16" style="background: linear-gradient(180deg, rgba(43,43,43,1) 0%, rgba(68,68,68,1) 100%);">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px;margin:auto"
              class="mb-0 mb-sm-8 text-sm-h4 text-md-h3 font-weight-bold white--text text-center"
            >
              SOWerk Connections
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background: transparent"
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
            v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              to="/landingpage/join-product-landing"
              >Provider Facility - Learn More</v-btn>
            <v-btn
            v-else
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 13px;"
              to="/landingpage/join-product-landing"
              >Provider Facility - Learn More</v-btn>

          </v-col>
        </v-row>
      </v-container>
    </v-flex>


    <section
      style="background-color:#2b2b2b;
    transform-origin: top left;
    transform: skewY(2deg);margin-bottom:-5%"
    >
      <v-card
        v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
        height="auto"
        :width="$vuetify.breakpoint.mdAndUp ? '100%' : '10%'"
        class="py-16 my-12 d-flex justify-center"
        outlined
        style="border:none;background-color:#2b2b2b;"
        align="center"
      >
        <v-container
          style="transform-origin: top left;
    transform: skewY(-2deg); "
        >
          <v-title style="color:white;font-weight:600;font-size:5rem;"
            >SOWerk Connections</v-title
          >
          <v-row class="d-flex justify-space-around flex-wrap">
            <v-card
              height="auto"
              :width="$vuetify.breakpoint.mdAndUp ? '42%' : '42%'"
              class=" my-12 px-12"
              outlined
              style="border:none;background-color:#2b2b2b;color:white;height:110%;"
              align="left"
            >
              <img src="" alt="" />
              <h1 style="">What is a Connection?</h1>
              <p>
                A connection is made when you apply for and have been accepted
                as an approved vendor.
              </p>
              <img src="" alt="" />
              <h1>Where Can I Make A Connection?</h1>
              <p>
                When a connection is made at the location and if a business has
                multiple locations you apply to, the amount of accepted
                locations increase your connection count.
              </p>
              <img src="" alt="" />
              <h1>Why do Connections Matter to other Businesses?</h1>
              <p>
                Your Aprroved vendor connection cound will be displayed as part
                of your profile and may be associated with approved vendor
                applications, wear it proudly as this will tell others how many
                businesses trust you and your services.
              </p>
            </v-card>
            <v-card
              height="auto"
              :width="$vuetify.breakpoint.mdAndUp ? '42%' : '42%'"
              class="my-12 px-12"
              outlined
              style="border:none;background-color:#2b2b2b;color:white;"
              align="left"
            >
              <img src="" alt="" />
              <h1>How do I Manage My Connections?</h1>
              <p>
                You can manage your connections on your SOWerk dashboard.
              </p>
              <img src="" alt="" />
              <h1>After Connecting, What's Next?</h1>
              <p>
                You can send messages with little to no limitations to
                connections, but most importantly, you are now available as an
                approved service provider to that business. Moving forward, they
                can call on you when they are in need of your service.
              </p>
              <img src="" alt="" />
              <h1>After Connecting, Am I Connected Forever?</h1>
              <p>
                Businesses have control over your connection status unless you
                wish to remove yourself as an approved vendor in your dashboard,
                its a mutual conntection.
              </p>
            </v-card>
          </v-row>
        </v-container>
      </v-card>
      <v-card
        v-else
        height="auto"
        :width="$vuetify.breakpoint.smAndUp ? '100%' : '100%'"
        class="py-16 my-0 d-flex justify-center"
        outlined
        style="border:none;background-color:#2b2b2b;"
        align="center"
      >
        <v-container
          style="transform-origin: top left;
          transform: skewY(-2deg); margin-bottom:-20%;"
        >
          <v-title style="color:white;font-weight:600;font-size:3rem;"
            >SOWerk Connections</v-title
          >
          <v-card
            height="auto"
            class="py-1 my-12 px-12"
            outlined
            style="border:none;background-color:#2b2b2b;color:white; width:100%;"
            align="center"
          >
            <img src="" alt="" />
            <h1>What is a Connection?</h1>
            <p>
              A connection is made when you apply for and have been accepted as
              an approved vendor.
            </p>
            <img src="" alt="" />
            <h1>Where Can I Make A Connection?</h1>
            <p>
              When a connection is made at the location and if a business has
              multiple locations you apply to, the amount of accepted locations
              increase your connection count.
            </p>
            <img src="" alt="" />
            <h1>Why do Connections Matter to other Businesses?</h1>
            <p>
              Your Aprroved vendor connection cound will be displayed as part of
              your profile and may be associated with approved vendor
              applications, wear it proudly as this will tell others how many
              businesses trust you and your services.
            </p>
            <img src="" alt="" />
            <h1>How do I Manage My Connections?</h1>
            <p>
              You can manage your connections on your SOWerk dashboard.
            </p>
            <img src="" alt="" />
            <h1>After Connecting, What's Next?</h1>
            <p>
              You can send messages with little to no limitations to
              connections, but most importantly, you are now available as an
              approved service provider to that business. Moving forward, they
              can call on you when they are in need of your service.
            </p>
            <img src="" alt="" />
            <h1>After Connecting, Am I Connected Forever?</h1>
            <p>
              Businesses have control over your connection status unless you
              wish to remove yourself as an approved vendor in your dashboard,
              its a mutual conntection.
            </p>
          </v-card>
        </v-container>
      </v-card>
    </section>
  </v-container>
</template>

<script>
export default {
  layout: 'fullwidth',
}
</script>

<style scoped>
.PricingContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.packages {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.device--mac >>> .v-image__image.v-image__image--cover {
  background-size: 170% !important;
}

.device--iphone {
  position: absolute;
  width: 75%;
  bottom: -20%;
  left: -25%;
}

.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}

.tools-container {
  position: relative;
}

.tools-container:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform: skewY(-2deg);
}

/* .skew-top{
  position: relative;
  z-index: 30;
}

.skew-top:before{
  position: absolute;
  content: '';
  background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -20;
  transform-origin: top left;
  transform: skewY(-2deg);
} */

#aboutcontainer {
  width: 100%;
  padding: 0px !important;
}

.abouthero {
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/pricingBg.png');
  background-size: cover;
  object-fit: contain;
  background-size: 100%;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 5%;
}
.abouthero h1 {
  color: white;
  width: 50%;
  text-align: center;
  margin: 150px 0px 150px 0px;
  margin: 200px 0px 200px 0px;
  font-size: 55px;
}

.aboutdescription {
  background: #a61c00;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  color: white;
  padding-bottom: 100px;
}

.aboutdescription:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform: skewY(-2deg);
}
.aboutdescriptionflex {
  display: flex;
  width: 90%;
  justify-content: center;
  border-radius: 20px;
  margin: -50px 0px 100px 0px;
  z-index: 100;
}

.aboutdescriptionflex .aboutdescriptionimg {
  width: 40%;
  display: flex;
  margin-bottom: -300px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg1 {
  width: 50%;
  height: 350px;
  z-index: 1;
  position: relative;
  top: 250px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
  width: 150%;
  position: relative;
  left: -200px;
  top: -250px;
}
.aboutdescriptiontext {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 35px;
}
.aboutdescriptionflex h1 {
  font-size: 35px;
  align-self: flex-start;
}
.aboutdescriptionflex p {
  font-size: 18px;
  align-self: flex-start;
}
.aboutdescription svg {
  width: 100%;
  height: 9vh;
  fill: #2b2b2b;
}
.aboutbuttoncontainer {
  display: flex;
  width: 100%;
}
.aboutdescriptionflex button {
  background: transparent;
  color: white;
  border: 1px solid white;
  width: 45%;
  padding: 10px 0px 10px 0px;
  font-size: 18px;
  border-radius: 20px;
  margin: 0px 2.5% 0px 2.5%;
}
@media (max-width: 1350px) {
  .abouthero {
    margin-bottom: -12.5%;
  }
}

@media (max-width: 800px) {
  .abouthero {
    background-size: cover;
    object-fit: contain;
    background-size: 150%;
    margin-top: 0px;
  }
  .abouthero h1 {
    font-size: 50px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    width: 200%;
    position: relative;
    left: -140px;
    top: -200px;
  }

  .aboutdescriptiontext[data-v-75c9003b] {
    width: 90%;
  }

  .aboutdescriptionflex h1[data-v-75c9003b] {
    width: 100%;
    text-align: center;
    font-size: 33px;
    margin: 15px 0px 12px 0px;
  }

  .aboutdescriptionflex p[data-v-75c9003b] {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    line-height: 24px;
  }

  .aboutdescriptionflex[data-v-75c9003b] {
    margin: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .aboutbuttoncontainer[data-v-75c9003b] {
    margin: 15px 0;
    justify-content: center;
  }

  .aboutdescriptionimg {
    width: 500px;
  }

  img.aboutdescriptionimg2 {
    object-fit: contain;
    width: 700px;
    height: 400px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    width: 100%;
    font-size: 16px;
    padding: 5px 10px;
  }
}

@media (max-width: 680px) {
  .abouthero {
    margin-bottom: -30%;
  }
  .abouthero h1 {
    font-size: 42px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 35px;
  }

  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    font-size: 15px;
  }
}

@media (max-width: 580px) {
  .abouthero {
    margin-bottom: -30%;
  }
  .abouthero h1 {
    font-size: 38px;
  }

  .aboutdescriptionflex {
    width: 100%;
  }

  .aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 28px;
  }
  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button {
    font-size: 13px;
  }
}
</style>
