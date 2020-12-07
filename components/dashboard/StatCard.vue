<template>
  <v-container>
    <!-- X-SMALL BREAKPOINT -->
    <v-card v-if="$vuetify.breakpoint.xs" class="fill-height d-flex flex-column justify-space-between" style="min-width:25%;">
      <v-card-title>
        <p class="text-center primary--text mx-auto mb-0 font-weight-regular" style="font-size:1.2rem;">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text>
        <p class="text-center primary--text mb-0" style="font-size:4rem; line-height:104px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-6 pb-6">
        <v-btn outlined rounded block color="primary" class="mx-auto" :to="stat.link">View All</v-btn>
      </v-card-actions>
    </v-card>

    <!-- SMALL BREAKPOINT -->
    <v-card v-else-if="$vuetify.breakpoint.sm" class="fill-height d-flex flex-column justify-space-between" style="min-width:50%;">
      <v-card-title>
        <p class="text-center primary--text mx-auto mb-0 font-weight-regular" style="font-size:1.2rem;">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text>
        <p class="text-center primary--text mb-0" style="font-size:4rem; line-height:104px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-6 pb-6">
        <v-btn outlined rounded block color="primary" class="mx-auto" :to="stat.link">View All</v-btn>
      </v-card-actions>
    </v-card>

    <!-- MEDIUM BREAKPOINT -->
    <v-card v-else-if="$vuetify.breakpoint.md" class="fill-height d-flex flex-column justify-space-between" style="min-width:75%;">
      <v-card-title>
        <p class="text-center primary--text mx-auto mb-0 font-weight-regular" style="font-size:1.5rem;">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text>
        <p class="text-center primary--text mb-0" style="font-size:5rem; line-height:104px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-6 pb-6">
        <v-btn outlined rounded block color="primary" class="mx-auto" :to="stat.link">View All</v-btn>
      </v-card-actions>
    </v-card>

    <!-- LARGE BREAKPOINT -->
    <v-card v-else-if="$vuetify.breakpoint.lg" class="fill-height d-flex flex-column justify-space-between">
      <v-card-title>
        <p class="text-center primary--text mx-auto mb-0 font-weight-regular" style="font-size:1.5rem;">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text>
        <p class="text-center primary--text mb-0" style="font-size:5rem; line-height:104px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-6 pb-6">
        <v-btn outlined rounded block color="primary" class="mx-auto" :to="stat.link">View All</v-btn>
      </v-card-actions>
    </v-card>

    <!-- OTHER BREAKPOINT -->
    <v-card v-else class="fill-height d-flex flex-column justify-space-between">
      <v-card-title>
        <p class="text-center primary--text mx-auto mb-0 font-weight-regular" style="font-size:1.5rem;">{{ stat.title }}</p>
      </v-card-title>
      <v-card-text>
        <p class="text-center primary--text mb-0" style="font-size:5rem; line-height:104px;">{{ stat.value }}</p>
      </v-card-text>
      <v-card-actions class="px-6 pb-6">
        <v-btn outlined rounded block color="primary" class="mx-auto" :to="stat.link">View All</v-btn>
      </v-card-actions>
    </v-card>
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
