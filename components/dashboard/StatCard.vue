<template>

  <!-- BREAKPOINT - EXTRA-LARGE - BREAK @ 1904+ pixels ------------------------------------------------------------>
  <div v-if="$vuetify.breakpoint.xl" style="width:100%">
    <v-container style="white-space: pre-wrap !important; height: 40vh;padding-top:70px;" class="d-flex flex-column align-center">
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
  </div>

  <!-- BREAKPOINT - LARGE - BREAK @ 1904-1264 pixels (1264 sidebar vanishes) -------------------------------------->
  <div v-else-if="$vuetify.breakpoint.lg" style="width: 100%;padding:0%;margin:0%;">
    <v-container style="white-space: pre-wrap !important; height: 40vh;width:100%;padding-top:70px" class="d-flex flex-column align-center">
      <v-card-title style="width:100%;padding:0%;margin:0%;">
        <p class="text-center primary--text font-weight-bold" style="width: 100%; font-size: .8rem; white-space: pre-wrap !important; word-break: break-word;padding:0%;">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text style="width:100%;padding:0%;margin:0%;">
        <p class="text-center primary--text" style="font-size: 1rem; line-height: 40px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-2 pb-2" style="width:100%;padding:0%;margin:0%;">
        <v-btn outlined rounded block color="primary" class="px-12" style="width: 100% !important;" :to="stat.link">View All</v-btn>
      </v-card-actions>
    </v-container>
  </div>

  <!-- BREAKPOINT - MEDIUM - BREAK @ 1264-960 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.md" style="width:100%">
    <v-container class="d-flex flex-column align-center" style="white-space: pre-wrap !important; background-color: white;">
        <v-card-title class="text-center primary--text font-weight-bold" style="position: absolute; top: 30px;margin-right:6%;margin-left:6%;">{{ stat.title }}</v-card-title>

        <v-card-text class="text-center primary--text" style="font-size:4rem;margin-top:10%;">{{ stat.value }}</v-card-text>

        <v-card-actions style="position: absolute; bottom: 10px;">
          <v-btn outlined rounded block color="primary" class="px-16 py-6" style="width: 100% !important; font-size: .8rem;" :to="stat.link">View All</v-btn>
        </v-card-actions>
    </v-container>
  </div>

  <!-- BREAKPOINT - SMALL - BREAK @ 960-600 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.sm" style="width:100%">
    <v-container class="d-flex flex-column align-center" style="white-space: pre-wrap !important; background-color: white;">
        <v-card-title class="text-center primary--text font-weight-bold" style="position: absolute; top: 30px;margin-right:6%;margin-left:6%;">{{ stat.title }}</v-card-title>

        <v-card-text class="text-center primary--text" style="font-size:4rem;margin-top:10%;">{{ stat.value }}</v-card-text>

        <v-card-actions style="position: absolute; bottom: 10px;">
          <v-btn outlined rounded block color="primary" class="px-16 py-6" style="width: 100% !important; font-size: .8rem;" :to="stat.link">View All</v-btn>
        </v-card-actions>
    </v-container>
  </div>

  <!-- BREAKPOINT - EXTRA-SMALL - BREAK @ 600- pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.xs" style="width:100%">
    <v-container class="d-flex flex-column align-center" style="white-space: pre-wrap !important; background-color: white;">
        <v-card-title class="text-center primary--text font-weight-bold" style="position: absolute; top: 30px;margin-right:6%;margin-left:6%;">{{ stat.title }}</v-card-title>

        <v-card-text class="text-center primary--text" style="font-size:4rem;margin-top:10%;">{{ stat.value }}</v-card-text>

        <v-card-actions style="position: absolute; bottom: 10px;">
          <v-btn outlined rounded block color="primary" class="px-16 py-6" style="width: 100% !important; font-size: .8rem;" :to="stat.link">View All</v-btn>
        </v-card-actions>
    </v-container>
  </div>

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
