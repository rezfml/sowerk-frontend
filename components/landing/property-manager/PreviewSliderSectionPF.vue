<template>
  <v-row style="background-color: #151515;" class="py-12 ">
    <v-col class="d-flex flex-column align-center">
      <p class="white--text text-h5">SOWerk Property & Facility Accounts</p>
      <!-- phone view-->
      <v-slide-group  style="width: 90vw;" class="mx-auto my-12" dark :show-arrows="showArrows" v-if="$vuetify.breakpoint.mobile" >
        <v-slide-item :key="i" v-for="(company, i) in carouselPropertyManagers" style="width: 50vw;">
          <v-row class="mobileSlider">
            <v-col class="d-flex flex-column align-center">
              <div class="imgContainer">
                <img style="width: 100%; padding:0 2%" :src="company.imgUrl" />
              </div>
              <h1 class="font-weight-bold white--text text-body-2 text-md-h6" >{{company.account_name}}</h1>
            </v-col>
          </v-row>
        </v-slide-item>
      </v-slide-group>
      <!-- tablet-mobile view-->
      <v-slide-group style="width: 90vw;" class="mx-auto my-12" dark :show-arrows="showArrows" v-else-if="$vuetify.breakpoint.sm"  >
        <v-slide-item :key="i" v-for="(company, i) in carouselPropertyManagers" style="width: 25vw">
          <v-row class="tabletSlider">
            <v-col class="d-flex flex-column align-center">
              <div class="imgContainer">
                <img style="width: 100%; padding:0px 10px 0px 10px" :src="company.imgUrl" />
              </div>
              <h1 class="font-weight-bold white--text text-h6"> {{company.account_name}}</h1>
            </v-col>
          </v-row>
        </v-slide-item>
      </v-slide-group>
      <!-- computer and above view-->
      <v-slide-group style="width: 90vw;" class="mx-auto my-12" dark :show-arrows="showArrows" v-else>
        <v-slide-item :key="i" v-for="(company, i) in carouselPropertyManagers" style="width: 22.5vw">
          <v-row>
            <v-col class="d-flex flex-column align-center">
               <div class="imgContainer">
                <img :src="company.imgUrl" />
              </div>
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
.imgContainer{
  max-width:300px ;
  max-height:300px  ;
}

.imgContainerPh{
  max-width:32px ;
  max-height:32px  ;
}

.imgContainerTb{
  max-width:100px ;
  max-height:100px  ;
}
.imgContainer img{
  max-width:100% ;
  max-height:100%  ;
}

.imgContainerPh img{
  max-width:100% ;
  max-height:100%  ;
}

.imgContainerTb img{
  max-width:100% ;
  max-height:100%  ;
}
</style>
