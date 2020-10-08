<template>
  <v-app>
    <v-row
      style="background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg'); height: 80vh; max-height: 1200px;"
      align-content="center"
      class="pt-12"
    >
      <v-card
        max-height="400px"
        height="50vh"
        width="60%"
        max-width="1200px"
        class="d-flex flex-column justify-center align-center"
        color="rgba(0,0,0,0.7)"
      >
        <v-card-title style="width: 100%;"
          ><v-img
            src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png"
            alt="SOWerk Logo"
            contain
            height="80"
          ></v-img
        ></v-card-title>
        <v-card-text class="d-flex flex-column justify-center">
          <p class="white--text text-h3 text-center font-weight-bold">
            The Approved Vendor Platform
          </p>
          <p class="white--text text-center text-h5">
            The Link Between Service Providers & Businesses
          </p>
          <v-btn
            class="mx-auto primary mt-5"
            x-large
            width="100%"
            max-width="300"
            >Learn More</v-btn
          >
        </v-card-text>
      </v-card>
    </v-row>
    <PreviewSliderSection :slider="propertyAccounts"></PreviewSliderSection>
    <v-row
      style="background-image: linear-gradient(rgba(43,43,43,1) 0%, rgba(68,68,68,0.93) 100%), url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'); background-position: bottom; background-size: 75%; background-repeat: repeat-x;"
      align-content="center"
      justify="center"
      class="py-12"
    >
      <v-card height="auto" width="70%" class="py-4 my-12">
        <v-card-title
          ><p
            class="primary--text font-weight-bold text-h5 text-center mx-auto"
            style="width: 80%; word-break: normal;"
          >
            SOWerk is the link between Service Providers and Property & Facility
            Managers
          </p></v-card-title
        >
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
          <v-row style="width: 80%;" class="mx-auto">
            <p class="text-center text-md-h6 text-body-1">
              Our business to business platform provides companies and property
              managers the tools to efficiently identify, vet, and manage
              service providers for each of their locations. For service
              providers, SOWerk makes it possible for you to become an approved
              vendor, receive job request, and communicate with business owners.
            </p>
            <v-btn color="primary" class="mx-auto mt-8" width="30%" rounded
              >Learn More</v-btn
            >
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    <PreviewSliderSection :slider="providerAccounts"></PreviewSliderSection>
    <v-flex class="primary">
      <v-container>
        <v-row class="py-12">
          <v-col cols="12">
            <p class="text-h3 font-weight-bold white--text text-center">
              SOWerk Reviews
            </p>
            <p class="white--text text-center text-body-1 font-weight-normal">
              See what current users think about SOWerk
            </p>
          </v-col>
        </v-row>
        <v-row class="py-12">
          <v-col cols="12" md="6">
            <v-card
              color="white"
              style="border-radius: 20px;"
              class="py-6 fill-height"
            >
              <v-card-title
                ><p class="mx-auto text-h5 mb-0">
                  Amazing Application!!!
                </p></v-card-title
              >
              <v-card-text>
                <p class="text-center">
                  “SOWerk nailed it… An all in one mobile app for facility
                  managers and service companies. It’s like a Job board +
                  LinkedIn”
                </p>
                <p class="text-center">- Cathy M.</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              color="white"
              style="border-radius: 20px;"
              class="py-6 fill-height"
            >
              <v-card-title
                ><p class="mx-auto text-h5 mb-0">
                  Secured My Trust!!!
                </p></v-card-title
              >
              <v-card-text>
                <p class="text-center">
                  “No more just googling a service company near one of our
                  properties and hoping they work out, not to mention aking them
                  for proof of insurance. I wish I had thought of SOWerk”
                </p>
                <p class="text-center">- Joe B.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    <v-flex>
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
          <v-col cols="12" md="6" align-self="center">
            <p class="text-h5 primary--text font-weight-bold">
              JOIN SOWERK NOW
            </p>
            <p class="">
              Register now and start making connections today. Our simple three
              step registration process makes it simple and easy to build your
              account and connect property & facility managers and service
              providers.
            </p>
            <v-row>
              <v-col cols="12" md="5">
                <v-btn class="primary py-5" rounded
                  >Learn More - Service Provider</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" md="5">
                <v-btn class="primary py-5" rounded
                  >Learn More - Property & Facility</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
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
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import PreviewSliderSection from '~/components/website/PreviewSliderSection'

export default {
  name: 'index',
  layout: 'fullwidth',
  components: {
    Logo,
    VuetifyLogo,
    PreviewSliderSection,
  },
  data() {
    return {
      propertyAccounts: {
        title: 'SOWerk Property & Facility Accounts',
        type: 'manager',
        items: [
          {
            name: 'Bass Pro Shops',
            providers: '2,438',
            properties: '169',
          },
          {
            name: 'Walmart',
            providers: '34,438',
            properties: '4,756',
          },
          {
            name: 'Hilton',
            providers: '29,004',
            properties: '4,129',
          },
          {
            name: 'Chipotle',
            providers: '15,654',
            properties: '2,622',
          },
          {
            name: 'Bass Pro Shops',
            providers: '2,438',
            properties: '169',
          },
          {
            name: 'Walmart',
            providers: '34,438',
            properties: '4,756',
          },
          {
            name: 'Hilton',
            providers: '29,004',
            properties: '4,129',
          },
          {
            name: 'Chipotle',
            providers: '15,654',
            properties: '2,622',
          },
        ],
        firstLineAfter: 'Approved Providers',
        secondLineAfter: 'Properties',
      },
      providerAccounts: {
        title: 'SOWerk Service Provider Accounts',
        type: 'provider',
        items: [
          {
            name: 'Atlas Plumbing',
            locations: '1,253',
            range: 'Nationwide',
          },
          {
            name: 'Quanta Electric Services',
            locations: '3,003',
            range: 'Nationwide',
          },
          {
            name: 'Benjamin Franklin',
            locations: '2,349',
            range: 'State Provider',
          },
          {
            name: 'Nations Roof',
            locations: '1,654',
            range: 'Nationwide',
          },
          {
            name: 'Atlas Plumbing',
            locations: '1,253',
            range: '',
          },
          {
            name: 'Quanta Electric Services',
            locations: '34,438',
            range: 'Nationwide',
          },
          {
            name: 'Benjamin Franklin',
            locations: '2,349',
            range: 'State Provider',
          },
          {
            name: 'Nations Roof',
            locations: '1,654',
            range: 'Nationwide',
          },
        ],
        firstLineAfter: 'Approved Locations',
        secondLineAfter: 'Provider',
      },
    }
  },
}
</script>

<style scoped>
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
</style>
