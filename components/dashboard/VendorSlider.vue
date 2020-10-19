<template>
  <v-row style="" class="py-12 ">
    <v-col class="d-flex flex-column align-center">
      <!-- phone view-->
      <v-slide-group  style="width: 50vw;" class="mx-auto my-12" multiple show-arrows v-if="$vuetify.breakpoint.mobile" >
        <v-slide-item :key="i" v-for="(company, i) in companies" style="width: 35vw; margin: auto;">
          <v-row class="mobileSlider">
            <v-col class="d-flex flex-column align-center">
              <img style="width: 100%; padding:0 2%" :src="company.imgUrl" />
              <h1 class="font-weight-bold text-body-2 text-md-h6" >{{company.account_name}}</h1>
            </v-col>
          </v-row>
        </v-slide-item>
      </v-slide-group>
      <!-- tablet-mobile view-->
      <v-slide-group style="width: 40vw;" class="mx-auto my-12" multiple show-arrows prev-icon="true" next-icon="true" v-else-if="$vuetify.breakpoint.sm"  >
        <v-slide-item :key="i" v-for="(company, i) in companies" style="width: 30vw; margin: auto;">
          <v-row class="tabletSlider">
            <v-col class="d-flex flex-column align-center">
              <img style="width: 100%; padding:0 2%" :src="company.imgUrl"  />
              <h1 class="font-weight-bold text-h6"> {{company.account_name}}</h1>
            </v-col>
          </v-row>
        </v-slide-item>
      </v-slide-group>
      <!-- computer and above view-->
      <v-slide-group style="width: 35vw;" class="mx-auto my-6" multiple :show-arrows="showArrows" :prev-icon="prevIcon" :next-icon="nextIcon" v-else>
        <v-slide-item :key="i" v-for="(company, i) in companies" style="width: 10vw">
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <img style="width: 100%; padding:0 2%" :src="company.imgUrl" />
              <h1 class="font-weight-bold text-h5">{{company.account_name}}</h1>
            </v-col>
          </v-row>
        </v-slide-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>

<script>
  export default{
    name: 'VendorSlider',
    props: ['connections', 'companies'],
    data() {
      return {
        prevIcon: true,
        nextIcon: true,
        showArrows: true,
      }
    },
    async mounted() {
      console.log('connections prop', this.connections);
    },
    methods: {
    }
  }

</script>

<style scoped>

</style>
