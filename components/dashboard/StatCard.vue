<template>

  <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.md && this.$vuetify.breakpoint.height > 925" class="d-flex flex-column align-center" style="white-space: pre-wrap !important; background-color: white;">
      <v-card-title class="text-center primary--text font-weight-bold" style="position: absolute; top: 30px; word-break: break-word; white-space: pre-wrap;">{{ stat.title }}</v-card-title>

      <v-card-text class="text-center primary--text" style="font-size:4rem;margin-top:10%;">{{ stat.value }}</v-card-text>

      <v-card-actions style="position: absolute; bottom: 10px;">
        <v-btn outlined rounded block color="primary" class="px-16 py-6" style="width: 100% !important; font-size: .8rem;" :to="stat.link">View All</v-btn>
      </v-card-actions>
  </v-container>

  <v-container v-else-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.md && this.$vuetify.breakpoint.height < 925" class="d-flex flex-column align-center mt-n16" style="white-space: pre-wrap !important; background-color: white;">
    <v-card-title class="text-center primary--text font-weight-bold" style="white-space: pre-wrap; word-break: break-word">{{ stat.title }}</v-card-title>

    <v-card-text class="text-center primary--text my-6" style="font-size:4rem;">{{ stat.value }}</v-card-text>

    <v-card-actions style="">
      <v-btn outlined rounded block color="primary" class="px-16 py-6" style="width: 100% !important; font-size: .8rem;" :to="stat.link">View All</v-btn>
    </v-card-actions>
  </v-container>

  <v-container v-else style="white-space: pre-wrap !important; height: 50vh;" class="d-flex flex-column align-center">
    <v-card-title style="width: 100%;">
      <p class="text-center primary--text mx-auto mb-0 font-weight-bold" style="width: 100%; font-size: 18px; white-space: pre-wrap !important; word-break: break-word;">{{ stat.title }}</p>
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
