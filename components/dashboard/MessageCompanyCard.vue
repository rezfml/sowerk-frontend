<template>
  <v-card class="d-flex flex-column align-center">
    <v-card-title
      style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
      class="primary white--text font-weight-regular red-gradient"
    >{{title}}</v-card-title>
    <v-data-table
      :headers="tableProperties"
      :items="items"
      :items-per-page="10"
      style="width: 100%;"
      class="mt-10"
    >
      <template v-slot:item.service="{item}">
        <td @click="selectCompany(item)">{{item.servicesOffered}}</td>
      </template>

      <template v-slot:item.company="{item}">
        <td @click="selectCompany(item)">{{item.account_name}}</td>
      </template>

      <template v-slot:item.full_address="{item}">
        <td @click="selectCompany(item)">{{item.address}} {{item.city}}, {{item.state}} {{item.zipcode}}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    name: 'MessageCompanyCard',
    props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'selectCompany']
  }

</script>

<style>

</style>
