<template>
  <v-row style="background-color: #151515;" class="py-12 ">
    <v-col class="d-flex flex-column align-center">
      <p class="white--text text-h5">SOWerk Property & Facility Accounts</p>
      <v-slide-group style="width: 90vw;" class="mx-auto my-12" dark :show-arrows="showArrows">
        <v-slide-item :key="i" v-for="(company, i) in carouselPropertyManagers" style="width: 22.5vw">
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <img :src="company.imgUrl" />
              <h1 class="font-weight-bold white--text text-h5">{{company.account_name}}</h1>
            </v-col>
          </v-row>
        </v-slide-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "PreviewSliderSection",
    data: () => ({
      prevIcon: true,
      nextIcon: true,
      showArrows: true
    }),
    props: {
      carouselPropertyManagers: {

      }
    }
  }
</script>

<style scoped>

</style>
