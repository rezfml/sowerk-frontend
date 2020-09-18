<template>
  <v-app>
    <v-row style="background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg'); height: 80vh; max-height: 1080px;" align-content="center">
      <v-col class="d-flex flex-column justify-center align-center">
        <h1 class="white--text text-h2 font-weight-bold">Property & Facility Managers</h1>
        <p class="white--text text-h4 my-6">Find, Vet, and Manage Approved Vendors</p>
        <v-btn outlined color="white" x-large rounded class="px-12">Get Started - It's Free</v-btn>
      </v-col>
    </v-row>
    <v-flex class="primary pb-12" style="height: 500px;">
      <v-container class="mx-auto mb-12" style="position: relative;">
        <v-row style="width: 100%; margin-top: -100px;">
          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-checkbox-marked-circle-outline</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Simple & Fast</p>
                <p class="text-center text-subtitle-1 font-weight-regular">Our simple design makes connecting with other companies quick and painless while using either the desktop or mobile app.</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-application-cog</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Powerful Tools</p>
                <p class="text-center text-subtitle-1 font-weight-regular">SOWerk is designed from it’s core to solve for property and facility management by providing the tools to vet & communicate grow service providers.</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-account-group</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Automated</p>
                <p class="text-center text-subtitle-1 font-weight-regular">SOWerk has many automated features that help make everyone’s life easy, like automatically requiring service providers to requalify or automatically updating a service provider’s profile every time they achieve approved vendor status. </p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-monitor-cellphone-star</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Simple & Fast</p>
                <p class="text-center text-subtitle-1 font-weight-regular">Our simple design makes connecting with other companies quick and painless while using either the desktop or mobile app.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    <v-flex class="grey darken-4 pb-12">
      <v-container class="mx-auto my-12">
        <v-row>
          <v-col cols="12" class="d-flex flex-column align-center">
            <p class="white--text text-center text-h6">SOWerk is built from the ground up as a software for businesses that own/manage properties & facilities.</p>
            <p class="white--text text-center text-h6">We specifically designed our platform to help you identifying, qualify and manage just about any type of service provider, local or national. If you oversee one facility or own thousands of properties, SOWerk empowers you to easily establish approved vendors at each of your locations, request quotes from approved providers, and much more.</p>
            <p class="white--text text-center text-h6">A team at your headquarters or designated local manager can use a computer to access SOWerk or the SOWerk mobile app.</p>
            <v-btn width="60%" color="primary" class="mt-6 rounded-lg" x-large>REGISTER NOW</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    <v-row style="background-image: linear-gradient(rgba(43,43,43,1) 0%, rgba(68,68,68,0.93) 100%), url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'); background-position: bottom; background-size: 75%; background-repeat: repeat-x;" align-content="center" justify="center" class="py-12">
      <v-container style="max-width: 1200px;" class="d-flex flex-column align-center">
        <v-card class="px-8">
          <v-card-text>
            <v-row class="my-8">
              <v-col cols="12" md="4">
                <v-img src="/step-1.png" style="position: relative;" class="step__image step__image--left"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <p class="text-h4 font-weight-bold">Step 1 - <span class="primary--text">Company Account & Location</span></p>
                <p>After setting up your account and properties, SOWerk makes it easy to filter approved service providers quickly and easily for any location across the country.</p>
              </v-col>
            </v-row>
            <v-row class="my-8">
              <v-col cols="12" md="8">
                <p class="text-h4 font-weight-bold">Step 2 - <span class="primary--text">Approve Service Providers</span></p>
                <p>Use one of SOWerk’s pre-made vendor application or customize your own questions. This allows you to acquire adequate information from them during the application process to ensure they will represent your brand well no matter how close or far away.</p>
              </v-col>
              <v-col cols="12" md="4">
                <v-img src="/step-2.png" style="position: relative;" class="step__image step__image--right"></v-img>
              </v-col>
            </v-row>
            <v-row class="my-8">
              <v-col cols="12" md="4">
                <v-img src="/step-3.png" style="position: relative;" class="step__image step__image--left"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <p class="text-h4 font-weight-bold">Step 3 - <span class="primary--text">Super Simple Management</span></p>
                <p>What’s the point of great power if you can’t manage it? SOWerk’s simple to use interface allows you to stay up to date and manage all of your properties quickly and efficiently from a desktop or mobile platform. Manage staff, vet vendors, or even be one click away from your approved service providers… that’s the power of SOWerk.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-btn width="60%" color="primary" class="my-6 rounded-lg mx-auto" x-large>REGISTER NOW</v-btn>
      </v-container>
    </v-row>
    <v-flex class="my-12 py-12">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex flex-column">
            <p class="text-h3 font-weight-bold primary--text text-center">Property and Facility Managers Often Ask</p>
            <v-list width="70%" class="mx-auto">
              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon><v-icon color="primary" size="40">mdi-check-circle-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize text-h5 font-weight-bold mb-3">Is this going to create more work for me?</v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">Actually, we designed SOWerk to be less work for you. Think of SOWerk like connecting with service providers on social media, except they have to meet your approved provider requirements. From here you can easily manage and communicate with your approved service providers.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon><v-icon color="primary" size="40">mdi-check-circle-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize text-h5 font-weight-bold mb-3">Will SOWerk Save Us Money? Will It Protect Our Investments?</v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">If time is money and quality is everything then yes SOWerk can help. SOWerk makes it efficent for any staff member to vet & manage local/national service providers, such as getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make service providers requalify annualy on things like insurance coverage and licenses so you don’t have to.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon><v-icon color="primary" size="40">mdi-check-circle-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize text-h5 font-weight-bold mb-3">Will SOWerk Help Shield Me From Cold Calls?</v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">Sales is part of any business but sometimes you just need place to send the salesman where they can apply for your approved service program. SOWerk is your solution. </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn class="text-uppercase primary mx-auto" x-large width="30%">Learn More</v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-flex>
  </v-app>
</template>

<script>
  export default {
    name: "propertyAndFacilityManagers"
  };
</script>

<style scoped>
  .step__image {
    position: relative;
    overflow: visible;
  }

  .step__image--left >>> .v-image__image {
    left: -35%;
    position: absolute;
  }

  .step__image--right >>> .v-image__image {
    left: 35%;
    position: absolute;
  }
</style>
