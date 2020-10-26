<template>
   <v-carousel show-arrows id="carousel">
     <v-carousel-item :key='i' v-for="(company, i) in carouselPropertyManagers">
         <img :src="company.imgUrl" />
         <h1>{{company.account_name}}</h1>
     </v-carousel-item>
   </v-carousel>
</template>

<script>
  export default {
    name: 'CaroselPF',
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
    props: ['carouselPropertyManagers'],
    watch: {
      loading: function() {
        if(this.loading) {
          console.log(document);
          return;
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    mounted() {
      console.log(this.$props.carouselPropertyManagers, 'PROPS');
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
