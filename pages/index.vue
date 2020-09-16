<template>
  <v-app>
    <v-row style="background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg'); height: 80vh; max-height: 1080px;" align-content="center">
      <v-card max-height="400px" height="50vh" width="60%" max-width="1200px" class="d-flex flex-column justify-center align-center" color="rgba(0,0,0,0.7)">
        <v-card-title><v-img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153.png" height="150" contain></v-img></v-card-title>
        <v-card-text class="d-flex flex-column justify-center">
          <p class="white--text text-h3 text-center font-weight-bold">The Approved Vendor Platform</p>
          <p class="white--text text-center text-h5">The Link Between Service Providers & Businesses</p>
          <v-btn class="mx-auto primary mt-5" x-large width="100%" max-width="300">Learn More</v-btn>
        </v-card-text>
      </v-card>
    </v-row>
    <PreviewSliderSection
      :slider="propertyAccounts"
    ></PreviewSliderSection>
    <v-row style="background-image: linear-gradient(rgba(43,43,43,1) 0%, rgba(68,68,68,0.93) 100%), url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'); background-position: bottom; background-size: 75%; background-repeat: repeat-x; height: 90vh; max-height: 1200px;" align-content="center" justify="center">
      <v-card max-height="800" height="80%" width="70%" class="py-4">
        <v-card-title><p class="primary--text font-weight-bold text-h5 text-center mx-auto" style="width: 80%; word-break: normal;">SOWerk is the link between Service Providers and Property & Facility Managers</p></v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="4" class="d-flex flex-column justify-center" position="center">
              <v-img src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork3copy.png" ></v-img>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center" position="center">
              <v-icon size="20vw" color="primary">mdi-swap-horizontal</v-icon>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center" position="center">
              <v-img src="https://sowerk-images.s3.us-east-2.amazonaws.com/Untitled_Artwork2copy2.png"></v-img>
            </v-col>
          </v-row>
          <v-row style="width: 80%;" class="mx-auto">
            <p class="text-center text-md-h6 text-body-1">Our business to business platform provides companies and property managers the tools to efficiently identify, vet, and manage service providers for each of their locations. For service providers, SOWerk makes it possible for you to become an approved vendor, receive job request, and communicate with business owners.</p>
            <v-btn color="primary" class="mx-auto mt-8" width="30%" rounded>Learn More</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    <PreviewSliderSection
      :slider="providerAccounts"
    ></PreviewSliderSection>
    <v-flex class="primary">
      <v-container>
        <v-row class="py-12">
          <v-col cols="12">
            <p class="text-h3 font-weight-bold white--text text-center">Sowerk Reviews</p>
            <p class="white--text text-center text-body-1 font-weight-normal">See what current users think about SOWerk</p>
          </v-col>
        </v-row>
        <v-row class="py-12">
          <v-col cols="12" md="6">
            <v-card color="white" style="border-radius: 20px;" class="py-6 fill-height">
              <v-card-title><p class="mx-auto text-h5 mb-0">Amazing Application!!!</p></v-card-title>
              <v-card-text>
                <p class="text-center">“SOWerk nailed it… An all in one mobile app for facility managers and service companies. It’s like a Job board + LinkedIn”
                </p>
                <p class="text-center">- Cathy M.</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="white" style="border-radius: 20px;" class="py-6 fill-height">
              <v-card-title><p class="mx-auto text-h5 mb-0">Secured My Trust!!!</p></v-card-title>
              <v-card-text>
                <p class="text-center">“No more just googling a service company near one of our properties and hoping they work out, not to mention aking them for proof of insurance. I wish I had thought of SOWerk”</p>
                <p class="text-center">- Joe B.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import PreviewSliderSection from "~/components/website/PreviewSliderSection";

export default {
  name: 'index',
  components: {
    Logo,
    VuetifyLogo,
    PreviewSliderSection
  },
  data() {
    return {
      propertyAccounts: {
        title: 'SOwerk Property & Facility Accounts',
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
        secondLineAfter: 'Properties'
      },
      providerAccounts: {
        title: 'SOwerk Service Provider Accounts',
        type: 'provider',
        items: [
          {
            name: 'Atlas Plumbing',
            locations: '1,253',
            range: 'Nationwide'
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
        secondLineAfter: 'Provider'
      }
    }
  }
}
</script>
