<template>
  <v-container class="main-container">
    <v-row class="d-flex align-center" style="height: 100%;">
      <v-col cols="12" align="center">
        <p class="text-h5 font-weight-bold text-center">Please verify your invitation to be a service provider</p>
        <p class="text-center">Before you can register as an invitee or pre-approved vendor, you must verify your status. Please check your email for a verification link.</p>
        <v-btn class="primary" to="/register/provider" rounded>Proceed to register</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "inviteverify",
    layout: 'fullwidth'
  }
</script>

<style scoped>
  .main-container {
    height: 100%;
    min-height: calc(100vh - 36px);
  }
</style>
