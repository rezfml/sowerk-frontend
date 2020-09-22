<template>
  <v-carousel show-arrows id="carousel">
    <v-carousel-item v-for="(review, i) in allReviews" :key='i'>
       <div class="starflex">
         <img v-for="star in review.stars" src="https://sowerk-images.s3.us-east-2.amazonaws.com/rcjrRG65i.png" />
       </div>
      <h1>{{review.reviewTitle}}</h1>
      <p>{{review.reviewDescription}} - {{review.reviewerName}}, {{review.reviewerAccountType}}</p>
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
  props: ['allReviews'],
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
    console.log(this.$props.allReviews, 'PROPS');
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
  margin: 0px 0px 0px 0px;
}
#carousel div {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
#carousel div h1, #carousel div p{
  text-align: center;
}
#carousel div h1 {
  margin: 50px 0px 20px 0px;
}
.starflex {
  display: flex;
  flex-direction: row !important;
  margin: 150px 0px 0px 0px;
}
</style>
