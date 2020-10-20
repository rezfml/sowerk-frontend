<template>
  <div>
    <v-container v-if="this.editStartLoad === false">
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
            <p v-if="item.isVerified===true">Yes</p>
            <p v-else>No</p>
          </template>
          <template v-slot:item.useractions="{item}">
            <div class="d-flex flex-column align-center">
              <v-btn @click="editStart(item)" class="my-1" style="width: 90%;" color="green" v-if="currentUser.is_superuser === true">Edit</v-btn>
              <v-btn @click="deleteStart(item.id)" class="my-1" style="width: 90%;" color="primary" v-if="currentUser.is_superuser === true">Delete</v-btn>
            </div>
          </template>

        </v-data-table>
      </v-card-text>
    </v-container>
    <v-card v-if="this.editStartLoad === true" class="mt-n8 d-flex flex-column align-center">
      <v-card-title style="color: #a61c00">Edit User #{{this.userEdit.id}} - {{userEdit.first_name}} {{userEdit.last_name}}</v-card-title>
      <v-form style="width: 80%;" class="d-flex flex-wrap justify-center">
        <v-text-field :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field :label="'Phone'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
      </v-form>
      <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px;">X</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', 'currentUser'],
  data() {
    return {
      editStartLoad: false,
      userEdit: {},
      userEditForm: {

      }
    }
  },
  mounted() {
    console.log(this.items, 'this.items')
  },
  methods: {
    async editStart(user) {
      this.editStartLoad = true;
      this.userEdit = user;
    },
    async editExit() {
      this.editStartLoad = false;
    },
    async deleteStart(id) {
      let confirmDelete = confirm('Are you sure you want to delete this account? Cannot be undone');
      if(confirmDelete === true) {
        this.$http.delete('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/' + id)
          .then(response => {
            alert('Account successfully deleted');
            this.$router.go()
          })
          .catch(err => {
            console.log(err, 'err', id);
            alert('Error - could not delete account.')
          })
      }
    },
  }
}

</script>

<style>

</style>
