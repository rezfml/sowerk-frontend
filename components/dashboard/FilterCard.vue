<template>
  <v-card class="white pt-8 my-12" height="88vh" >
    <v-container>
      <v-card-title v-if="!locationApproved" style="color: white; font-size: 18px; position: absolute; top: -25px; left: 25px; width: 30%; min-width: 200px; border-radius: 3px;" class="primary body-2">
        {{ title }}</v-card-title>
      <v-card-title v-else style="text-align: center; color: white; font-size: 18px; position: absolute; top: -25px; left: 0px; width: 100%; min-width: 100px; border-radius: 3px;" class="primary body-2">
        {{ title }}</v-card-title>
      <v-card-text class="pt-0">
        <v-select v-for="(filter, i) in filters" :key="i" :items="filter.items" light :placeholder="filter.name" multiple chips single-line dense v-model="selectedFilters">
          <template v-slot:selection="{ filter, index }">
            <v-chip v-if="index < 2">
              <span>{{ selectedFilters[index] }}</span>
            </v-chip>
            <span
              v-if="index === 2"
              class="grey--text caption"
            >(+{{ selectedFilters.length - 1 }} others)</span>
          </template>
        </v-select>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'FilterCard',
    props: {
      title: {
        type: String,
        required: true
      },
      filters: {
        type: Array,
        required: true
      },
      locationApproved: {
        type: Boolean,
        required: true
      },
      loadModal: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        selectedFilters: []
      }
    }
  }
</script>

<style scoped>

</style>
