<template>
  <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="fill-height d-flex flex-column justify-space-between" style="white-space: pre-wrap !important; background-color: white;">
<!--    <v-card v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="fill-height d-flex flex-column justify-space-between">-->
      <v-card-title>
        <p class="text-center primary--text mx-auto mb-0 font-weight-bold" style="font-size: 18px; white-space: pre-wrap !important; word-break: break-word">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text>
        <p class="text-center primary--text mb-0" style="font-size: 72px; line-height: 104px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-6 pb-6">
        <v-btn outlined rounded block color="primary" class="mx-auto px-16" style="width: 100% !important;" :to="stat.link">View All</v-btn>
      </v-card-actions>
<!--    </v-card>-->
    </v-container>
  <v-container v-else style="white-space: pre-wrap !important;">
    <!--    <v-card v-else class="fill-height d-flex flex-column justify-space-between" style="min-width:135%;margin-left:-17.5%;">-->
    <v-card-title>
      <p class="text-center primary--text mx-auto mb-0 font-weight-bold" style="font-size: 18px; white-space: pre-wrap !important; word-break: break-word">{{ stat.title }}</p>
    </v-card-title>
    <v-card-text>
      <p class="text-center primary--text mb-0" style="font-size: 72px; line-height: 104px;">{{ stat.value }}</p>
    </v-card-text>
    <v-card-actions class="px-6 pb-6">
      <v-btn outlined rounded block color="primary" class="mx-auto px-16" style="width: 100% !important;" :to="stat.link">View All</v-btn>
    </v-card-actions>
    <!--    </v-card>-->
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
