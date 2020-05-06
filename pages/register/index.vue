<template>
  <v-layout>
    <v-row>
      <v-btn color="primary" to="/register/provider">Provider Registration</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" to="/register/buyer">Buyer Registration</v-btn>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
export default {
  name: 'Index',
  auth: false
}
</script>

<style scoped></style>
