<template>
  <v-carousel show-arrows id="carousel">
    <v-carousel-item v-for="(company, i) in carouselServiceProviders" :key='i'>
      <img :src="company.imgUrl" />
      <h1>{{company.account_name}}</h1>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'CaroselSP',
  data: () => ({
    showArrows: true,
    loading: false,
    model: null,
    multiple: false,
    mandatory: false,
    prevIcon: false,
    nextIcon: false,
    centerActive: false,
  }),
  props: ['carouselServiceProviders'],
  watch: {
    loading: function() {
      if(this.loading) {
        console.log(document);
        document.documentElement.style.overflow = 'hidden'
        return;
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  mounted() {
    console.log(this.$props.carouselServiceProviders, 'PROPS');
  }
}
</script>

<style scoped>
#carousel {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 0px 0px;
}
#carousel div {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
