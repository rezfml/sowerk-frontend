<template>
    <v-card class="fill-height d-flex flex-column justify-space-between">
      <v-card-title>
        <p class="text-center primary--text mx-auto mb-0 font-weight-regular" style="font-size: 18px;">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text>
        <p class="text-center primary--text mb-0" style="font-size: 72px; line-height: 104px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-6 pb-6">
        <v-btn outlined rounded block color="primary" class="mx-auto" :to="stat.link">View All</v-btn>
      </v-card-actions>
    </v-card>
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
