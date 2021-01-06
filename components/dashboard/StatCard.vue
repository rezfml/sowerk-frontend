<template>

  <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="d-flex flex-column align-center" style="white-space: pre-wrap !important; background-color: white;">
      <v-card-title class="text-center primary--text font-weight-bold" style="position: absolute; top: 30px;margin-right:6%;margin-left:6%;">{{ stat.title }}</v-card-title>
      
      <v-card-text class="text-center primary--text" style="font-size:4rem;margin-top:10%;">{{ stat.value }}</v-card-text>
      
      <v-card-actions style="position: absolute; bottom: 10px;">
        <v-btn outlined rounded block color="primary" class="px-16 py-6" style="width: 100% !important; font-size: .8rem;" :to="stat.link">View All</v-btn>
      </v-card-actions>
  </v-container>


  <v-container v-else style="white-space: pre-wrap !important;">
    <v-card-title>
      <p class="text-center primary--text mx-auto mb-0 font-weight-bold" style="font-size: 18px; white-space: pre-wrap !important; word-break: break-word;">{{ stat.title }}</p>
    </v-card-title>
    <v-card-text>
      <p class="text-center primary--text mb-0" style="font-size: 72px; line-height: 104px;">{{ stat.value }}</p>
    </v-card-text>
    <v-card-actions class="px-6 pb-6">
      <v-btn outlined rounded block color="primary" class="mx-auto px-16" style="width: 100% !important;" :to="stat.link">View All</v-btn>
    </v-card-actions>
  </v-container>

</template>

<script>
  export default {
    name: "StatCard",
    props: {
      stat: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>
