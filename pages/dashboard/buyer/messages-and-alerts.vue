<template>
  <v-row
    align="stretch"
    justify="center"
    class="mx-auto py-12"
    style="width: 90%;"
  >
    <v-col cols="12">
      <h1 class="font-weight-regular">Messages & Alerts</h1>
    </v-col>
    <v-col cols="12">
      <HomeCard
        :items="locations"
        title="Messages & Alerts"
        :tableProperties="headers"
      ></HomeCard>
    </v-col>
  </v-row>
</template>

<script>
  import HomeCard from "~/components/dashboard/HomeCard";

  export default {
    layout: 'app',
    name: "messages-and-alerts",
    components: {
      HomeCard
    }
  };
</script>

<style scoped>
  .card-bg >>> .v-image__image {
    background-size: 140%;
  }

  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
</style>
