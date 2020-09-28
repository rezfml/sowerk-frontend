<template>
  <section class="landinghomereview">
    <h1>SOWerk Reviews</h1>
    <p>See what current users think about SOWerk!</p>
    <div class="landinghomereviewflex">
      <div v-for="(review, i) in reviews" :key='i'>
        <h4>{{ review.reviewTitle }}</h4>
        <p>{{ review.reviewDescription }}</p>
        <p>- {{ review.reviewerName }}.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reviews',
  props: ['reviews'],
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
    console.log(this.$props.reviews, 'PROPS');
  }
}
</script>

<style scoped>
  .landinghomereviewflex {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .landinghomereview h1{
    font-size: 55px;
  }
  .landinghomereview p{
    font-size: 18px;
  }
  .landinghomereviewflex div {
    background: white;
    color: black;
    width: 45%;
    height: 30vh;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .landinghomereviewflex div p {
    font-size: 18px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    line-height: 1.5em;
  }
  .landinghomereviewflex div h4 {
    font-size: 30px;
    margin: 0px 0px 20px 0px;
  }
</style>
