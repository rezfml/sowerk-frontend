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
    <v-card v-if="editStartLoad === true" class="mt-n8 d-flex flex-column align-center">
      <v-card-title style="color: #a61c00">Edit User #{{userEdit.id}} - {{userEdit.first_name}} {{userEdit.last_name}}</v-card-title>
      <v-form style="width: 80%;" class="d-flex flex-wrap justify-center">
        <v-text-field v-model="userEditForm.first_name" :placeholder="userEdit.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="userEditForm.last_name" :placeholder="userEdit.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="userEditForm.phone" :placeholder="userEdit.phone" :label="'Phone'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="userEditForm.email" :placeholder="userEdit.email" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field :type="'password'" v-model="userEditForm.password" :label="'Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-select v-model="userEditForm.is_superuser" :label="'Account Level'" :items="selectOptions"></v-select>
      </v-form>
      <v-btn @click="submitEditUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
      <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px;">X</v-btn>
      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successUserEditForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
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
        email: "",
        is_superuser: false,
        first_name: "",
        last_name: "",
        phone: "",
        password: ""
      },
      selectOptions: [
        'Super Admin',
        'Staff Account'
      ],
      successUserEditForm: false,
    }
  },
  mounted() {
    console.log(this.items, 'this.items')
  },
  methods: {
    async editStart(user) {
      this.userEdit = user;
      this.userEditForm.email = user.email
      this.userEditForm.is_superuser = user.is_superuser
      this.userEditForm.first_name = user.first_name
      this.userEditForm.last_name = user.last_name
      this.userEditForm.phone = user.phone
      this.editStartLoad = true;
    },
    async editExit() {
      this.editStartLoad = false;
    },
    async submitEditUser() {
      if(this.userEditForm.is_superuser === 'Super Admin') {
        this.userEditForm.is_superuser = true;
      } else {
        this.userEditForm.is_superuser = false;
      }
      await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/' + this.userEdit.id, this.userEditForm)
        .then(response => {
          console.log(response, 'SUCCESS IN EDITING')
          this.successUserEditForm = true;
        })
        .catch(err => {
          console.log(err, 'ERROR IN EDITING')
        })
      console.log(this.userEditForm);
      setTimeout(() => {
        this.$router.go();
      }, 1500)
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
