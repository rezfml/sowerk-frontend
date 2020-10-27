<template>
  <v-card class="mt-8 d-flex flex-column align-center">
    <v-card-title style="color: #a61c00">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
    <v-form style="width: 80%;" class="d-flex flex-wrap justify-center">
      <v-text-field v-model="addUserForm.email" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
      <v-text-field :type="'password'" v-model="addUserForm.password" :label="'Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
      <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
      <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
      <v-text-field v-model="addUserForm.phone" :label="'Phone'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
      <div>
        <v-select v-model="addUserForm.is_superuser" :label="'Account Level'" :items="selectOptions"></v-select>
        <p>Please Note The Difference Between Account Level Permissions.</p>
        <p>SOWerk Administrator Account(s) can create & manage property locations, add staff accounts, acccess any vendor applicants, or approved vendors.</p>
        <p>SOWerk Staff Accounts offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</p>
      </div>
    </v-form>
    <v-btn @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
    <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
  </v-card>
</template>

<script>
  export default {
    name: 'add-user',
    layout: 'app',
    data() {
      return {
        company: {},
        addModal: false,
        addUserForm: {
          companies_id: Number,
          email: '',
          password: '',
          is_superuser: false,
          first_name: '',
          last_name: '',
          phone: '',
          isVerified: false
        },
        successAddUserForm: false,
        selectOptions: [
          'Super Admin',
          'Staff Account'
        ]
      }
    },
    async mounted() {
      await this.getCompany();
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
    },
    methods: {
      async getCompany() {
        await this.$http.get('http://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'company');
            this.company = response.data
          })
      },
      async submitAddUser() {
        this.addUserForm.companies_id = this.company.id;
        if(this.addUserForm.is_superuser === 'Super Admin') {
          this.addUserForm.is_superuser = true;
        } else {
          this.addUserForm.is_superuser = false;
        }
        await this.$http.post('http://www.sowerkbackend.com/api/auth/register', this.addUserForm)
          .then(response => {
            console.log(response, 'SUCCESS IN REGISTERING')
          })
          .catch(err => {
            console.log(err, 'ERROR IN REGISTERING')
          })
        console.log(this.addUserForm);
        this.successAddUserForm = true;
        setTimeout(() => {
          this.$router.push('../../../dashboard/user-creation');
        }, 1500)
      }
    }
  }

</script>

<style>

</style>
