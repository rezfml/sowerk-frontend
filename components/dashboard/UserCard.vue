<template>
  <div>
    <v-container>
      <v-card-title
        style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;"
        class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="4" class="py-0">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-text class="pt-0 pb-2">
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :items-per-page="10"
        >
          <template v-slot:item.userfull_name="{item}">
            <p><v-icon color="primary">mdi-account</v-icon> {{item.first_name}} {{item.last_name}}</p>
          </template>
          <template v-slot:item.useremail="{item}">
            <p>{{item.email}}</p>
          </template>
          <template v-slot:item.userphone="{item}">
            <p>{{item.phone}}</p>
          </template>
          <template v-slot:item.usercreated="{item}">
            <p>{{item.created}}</p>
          </template>
          <template v-slot:item.useradmin="{item}">
            <p v-if="item.is_superuser === true">Super Admin</p>
            <p v-else>Staff Account</p>
          </template>
          <template v-slot:item.userverify="{item}">
            <p>{{item.isVerified}}</p>
          </template>
          <template v-slot:item.useractions="{item}">
            <div class="d-flex flex-column align-center">
              <v-btn @click="editStart" class="my-1" style="width: 90%;" color="green" v-if="currentUser.is_superuser === true">Edit</v-btn>
              <v-btn @click="deleteStart" class="my-1" style="width: 90%;" color="primary" v-if="currentUser.is_superuser === true">Delete</v-btn>
            </div>
          </template>

        </v-data-table>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', 'currentUser'],
  mounted() {
    console.log(this.items, 'this.items')
  },
}

</script>

<style>

</style>
