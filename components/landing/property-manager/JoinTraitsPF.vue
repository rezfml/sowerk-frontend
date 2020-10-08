<template>
  <v-container
    fluid
    grid-list-md
    text-center
    pb-8
    style="background:#a61c00; display: flex; justify-content: center"
    class="skew-top"
  >
    <v-layout row style="max-width: 1280px; margin-top: -125px;">
      <!-- CARD 1 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Vet Vendors</v-card-text
          >
          <div
            class="my-4"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            We make it easy and powerful for you to vet any service provider,
            and re-qualify them annually. SOWerk prebuilt vendor applications
            are easy and powerful, or customize your own to better fit.
          </div>
        </v-card>
      </v-col>

      <!-- CARD 2 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Powerful Tools</v-card-text
          >
          <div
            class="my-6"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            One facility or 1,000’s of properties, SOWerk has you covered.
            Assign staff and set approved vendors by location. Manage bids and
            completed jobs all in one clean powerful interface.
          </div>
        </v-card>
      </v-col>

      <!-- CARD 3 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Cold Call Shield</v-card-text
          >
          <div
            class="my-4"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            With your SOWerk account you have the perfect place to direct any
            salesman calling to become your approved vendor.
          </div>
        </v-card>
      </v-col>

      <!-- CARD 4 -->
      <v-col cols="12" lg="3" sm="6">
        <v-card
          align="center"
          class="mx-1"
          style="border-radius: 20px; height: 480px"
        >
          <div
            style="width: 150px; height: auto; padding-top:15px; padding-bottom: 15px;"
          >
            <v-img
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
              style="object-fit: contain;"
            ></v-img>
          </div>
          <v-card-text
            style="font-size: 17px; font-weight:bold; color: black; letter-spacing: 1px;"
            >Convenient</v-card-text
          >
          <div
            class="my-4"
            style="width: 80%; font-size: 1rem; text-align: justify"
          >
            For the facility manager in the middle of the night that needs to
            contact all your approved plumbers for help or a local service
            provider that powers his business through a smart phone, SOWerk is
            design to be convenient.
          </div>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'JoinTraitsPF',
}
</script>

<style scoped>
.skew-top {
  position: relative;
  z-index: 7;
}

.skew-top:before {
  position: absolute;
  content: '';
  background: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
  transform-origin: top left;
  transform: skewY(-2deg);
}
</style>