<template>
  <div id="aboutcontainer">
    <!-- Hero Section -->
    <v-row
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg'); background-size: cover; background-repeat: no-repeat; height: 60vh; max-height: 1080px;margin: 0;"
      align-content="center"
    >
      <v-card
        elevation="0"
        style="background: transparent; width: 100%;"
        class="justify-center"
      >
        <v-card-text>
          <p class="white--text text-h3 text-center font-weight-bold">
            About SOWerk
          </p>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- What If Section.... -->
    <v-flex
      class="skew-top"
      style="background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%); padding-bottom: 200px;"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="6" style="position: relative;">
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/Cropthispiccopy.png"
              class="device--mac"
            ></v-img>
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/IphoneMockupcopy.png"
              class="device--iphone"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center" class="white--text">
            <p class="text-h5 font-weight-bold">
              It all started with “What If…”
            </p>
            <p>
              What if we could simplify the business connection between service
              providers and property & facility managers?
            </p>
            <p>
              Could we make it easier for both parties to manage relationships
              and do business?
            </p>
            <p>
              Today, SOWerk is proud to empower relationships, make life easier
              and complete the link between property/facility owners and
              approved vendors.
            </p>
            <p>More work and better work get done through SOWerk.</p>
            <v-row>
              <v-col cols="12" md="5">
                <v-btn
                  class="py-5 white--text"
                  style="border-radius: 20px; background: transparent; border: 1px solid white"
                  >LEARN MORE - SERVICE PROVIDER</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  class="py-5 white--text"
                  style="border-radius: 20px; background: transparent; border: 1px solid white"
                  >LEARN MORE - PROPERTY & FACILITY</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>

    <!-- Approved Vendor Platform Section -->
    <v-row
      style="background: rgb(43, 43, 43) 0%; background-position: bottom; background-size: 75%; background-repeat: repeat-x;"
      align-content="center"
      justify="center"
      class="skew-top-2 ml-0 mr-0"
    >
      <v-card
        style="border-radius: 20px; height: auto; width: 70%; top: -180px; z-index: 5"
        class="py-md-16 pt-sm-16 pb-sm-10 pt-16 pb-8 my-12"
      >
        <v-card-title
          style="width: 80%; word-break: normal; position: absolute; top: -30px; left: 10%; background-color: #414141; border-radius: 20px"
          class="text-h5 text-center mx-auto"
          dark
          height="5rem"
        >
          <p class="text-center mx-auto mb-0" style=" color: white">
            The Approved Vendor Platform
          </p>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col
              cols="4"
              class="d-flex flex-column justify-center"
              position="center"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork3copy.png"
              ></v-img>
            </v-col>
            <v-col
              cols="4"
              class="d-flex flex-column justify-center"
              position="center"
            >
              <v-icon size="20vw" color="primary">mdi-swap-horizontal</v-icon>
            </v-col>
            <v-col
              cols="4"
              class="d-flex flex-column justify-center"
              position="center"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork2copy2.png"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-flex xs12 class="mx-sm-13 mx-4">
              <p class="text-center text-md-h6 text-body-1 mb-0">
                SOWerk is the link between service providers (local or national)
                and property & facility managers. Our business to business
                platform provides companies and property managers the tools to
                effiecently identify, vet, and manage service providers for each
                of their locations. For service providers, SOWerk makes it
                possible for you to become an approved vendor, recieve job
                request, and communicate with business owners.
              </p>
              <div style="width: 100%; text-align: center">
                <v-btn
                  color="primary"
                  class="mx-auto mt-8 pt-3 pb-3"
                  width="35%"
                  rounded
                  >JOIN SOWERK</v-btn
                >
              </div>
            </v-flex>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- About FAQ's -->
    <v-flex class="my-12 py-12">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex flex-column">
            <p class="text-h3 font-weight-bold primary--text text-center">
              Property and Facility Managers Often Ask
            </p>
            <v-list width="70%" class="mx-auto">
              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon
                  ><v-icon color="primary" size="40"
                    >mdi-check-circle-outline</v-icon
                  ></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title
                    class="text-capitalize text-h5 font-weight-bold mb-3"
                    >Is this going to create more work for
                    me?</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text"
                    >Actually, we designed SOWerk to be less work for you. Think
                    of SOWerk like connecting with service providers on social
                    media, except they have to meet your approved provider
                    requirements. From here you can easily manage and
                    communicate with your approved service
                    providers.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon
                  ><v-icon color="primary" size="40"
                    >mdi-check-circle-outline</v-icon
                  ></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title
                    class="text-capitalize text-h5 font-weight-bold mb-3"
                    >Will SOWerk Save Us Money? Will It Protect Our
                    Investments?</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text"
                    >If time is money and quality is everything then yes SOWerk
                    can help. SOWerk makes it efficent for any staff member to
                    vet & manage local/national service providers, such as
                    getting bids for projects and communicating details. If it’s
                    easy to get bids from multiple vetted providers then it
                    might just save you both time and money. Additionally, we
                    make service providers requalify annualy on things like
                    insurance coverage and licenses so you don’t have
                    to.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon
                  ><v-icon color="primary" size="40"
                    >mdi-check-circle-outline</v-icon
                  ></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title
                    class="text-capitalize text-h5 font-weight-bold mb-3"
                    >Will SOWerk Help Shield Me From Cold
                    Calls?</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text"
                    >Sales is part of any business but sometimes you just need
                    place to send the salesman where they can apply for your
                    approved service program. SOWerk is your solution.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn class="text-uppercase primary mx-auto" x-large width="30%"
              >Learn More</v-btn
            >
          </v-col>
        </v-row>

        <!-- Service Providers FAQ -->
        <v-row class="mt-12">
          <v-col cols="12" class="d-flex flex-column">
            <p class="text-h3 font-weight-bold primary--text text-center">
              Service Provideres Often Ask
            </p>
            <v-list width="70%" class="mx-auto">
              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon
                  ><v-icon color="primary" size="40"
                    >mdi-check-circle-outline</v-icon
                  ></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title
                    class="text-capitalize text-h5 font-weight-bold mb-3"
                    >Do I Seriously Get More Jobs?</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">
                    <p>
                      Yes, Property & Facility managers of all sizes use SOWerk
                      to manage their approved vendor program. We make it easy
                      for them to vet service providers request bids.
                    </p>
                    <p class="mb-0">
                      SOWerk also helps you look good when applying for approved
                      vendor programs, but we also make it easy to share those
                      good looks with others. Next time your bidding a job show
                      off your resume by emailing or texting your SOWerk
                      profile.
                    </p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon
                  ><v-icon color="primary" size="40"
                    >mdi-check-circle-outline</v-icon
                  ></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title
                    class="text-capitalize text-h5 font-weight-bold mb-3"
                    >Will SOWerk Save Us Money? Will It Protect Our
                    Investments?</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">
                    <p>
                      Not at all, a SOWerk profile only takes 10 minuets to
                      setup.
                    </p>
                    <p>
                      With only a click or two on your computer or mobile device
                      you can use your SOWerk Profile to apply for approved
                      vendor programs
                    </p>
                    <p class="mb-0">
                      Automatic Updates: When you become an approved vendor for
                      a company we automaticly display it on your profile.
                    </p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon
                  ><v-icon color="primary" size="40"
                    >mdi-check-circle-outline</v-icon
                  ></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title
                    class="text-capitalize text-h5 font-weight-bold mb-3"
                    >Will SOWerk Help Shield Me From Cold
                    Calls?</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">
                    <p>
                      Unlike other websites, SOWerk service providers receive
                      communications from their approved vendor programs, direct
                      leads, or new businesses inviting them to apply for
                      approved vendor program.
                    </p>
                    <p class="mb-0">
                      Being on SOWerk and promoting your business is free. If
                      you wish to apply for an approved vendor program or
                      utilize other SOWerk features we offer a few packages.
                      Details can be found on our Approved Provider Pricing
                      page.
                    </p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn class="text-uppercase primary mx-auto" x-large width="30%"
              >Learn More</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </div>
</template>

<script></script>

<style scoped>
#aboutcontainer {
  width: 100%;
  padding: 0px !important;
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

/* slant edge */
.skew-top {
  position: relative;
  z-index: 10;
}

.skew-top:before {
  position: absolute;
  content: '';
  background: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transform-origin: top left;
  transform: skewY(-2deg);
}

.skew-top-2 {
  position: relative;
  z-index: 1000 !important;
}
.skew-top-2:before {
  position: absolute;
  background: rgb(43, 43, 43) 0%;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: initial;
  transform-origin: top left;
  transform: skewY(-2deg);
}
</style>
