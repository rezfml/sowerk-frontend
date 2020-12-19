<template>
  <v-card class="d-flex flex-column align-center">
    <v-card-title
      style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
      class="primary white--text font-weight-regular red-gradient"
    >{{title}}</v-card-title>
    <v-autocomplete
      style="width: 95%;"
      :items="items"
      item-text="account_name"
      item-value="account_name"
      label="Search Company And Select To Send Message:"
      solo
      clearable
      hint="This is generated from the list of companies SOWerk has."
      class="mt-12"
    >
      <template slot="selection" slot-scope="data">
        <p @click="selectCompany(data.item)">{{ data.item.account_name }}</p>
      </template>
      <template slot="item" slot-scope="data">
        <p @click="selectCompany(data.item)">{{ data.item.account_name }}</p>
      </template>
    </v-autocomplete>
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
