<template>
  <v-row>
    <v-col>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Buyer',
  auth: false,
  mounted() {
    var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

  },
  head() {
    return {
      script: ['https://js.stripe.com/v3/']
    }
  }
}
</script>

<style scoped></style>
