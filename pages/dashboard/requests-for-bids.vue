<template>
  <v-row
    align="stretch"
    justify="center"
    class="mx-auto py-12"
    style="width: 90%;"
    overflow-y-auto
  >
    <v-col cols="12" md="7">
      <v-card class="px-8 py-4 fill-height" style="background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;">
        <v-row align="stretch" class="fill-height">
          <v-col cols="12" md="5">
            <v-img class="card-bg fill-height" src="/sowerk-requests-logo.png" style="background-size: 140%;"></v-img>
          </v-col>
          <v-col cols="12" md="7" class="d-flex flex-column justify-center">
            <p class="mb-8">Use SOWerk Requests to send a request for a bid to any of your approved service providers. A SOWerk Request can be sent for any size job you may have, but SOWerk Requests must be specific to only one service category per request. Try using SOWerk Projects to organize jobs that are slightly larger or more complex. When different categories of service are required for a job (i.e. HVAC & Plumbing) consider using SOWerk Projects.</p>
            <div>
              <v-btn block color="primary" rounded class="my-4" max-height="36px">Start New SOWerk Request</v-btn>
              <v-btn block color="primary" rounded class="my-4" max-height="36px">Start New SOWerk Project</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" md="5">
      <v-card class="fill-height">
        <v-card-title class="primary--text"><p class="mx-auto text-center my-4">Create a New Bid Request</p></v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Title" placeholder="Plumbing Leak - Needs Repair ASAP"></v-text-field>
            <v-textarea label="Job Summary" placeholder="Plumbing leak from a cracked waterline"></v-textarea>
            <v-autocomplete label="Facility" placeholder="Bass Pro Shops (Memphis, TN)"></v-autocomplete>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <HomeCard
        :items="locations"
        title="Active SOWek Requests"
        :tableProperties="headers"
      ></HomeCard>
    </v-col>
    <v-col cols="12">
      <v-card class="red-gradient d-flex align-center justify-space-around">
        <v-card-title class="white--text">Do you have something bigger in mind? Manage large SOWerk Requests on the Projects Page!</v-card-title>
        <v-btn class="px-12" color="white" rounded outlined>View Projects</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import HomeCard from "~/components/dashboard/HomeCard";

  export default {
    layout: 'app',
    name: "requests-for-bids",
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
