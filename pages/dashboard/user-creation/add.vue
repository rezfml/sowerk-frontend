<template>
  <v-card class="mt-8 d-flex flex-column align-center">
    <v-skeleton-loader
      v-if="!companyLoad"
      type="card-avatar, article, article, actions"
      min-height="50vh"
      min-width="70vw"
    ></v-skeleton-loader>
<!--    SMALL AND X-SMALL VIEWPORT-->
    <transition name="slide-fade">
      <v-card v-if="this.requiredFieldsFilled === false && ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)" class="mt-n8" style="position:absolute;top:55vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
        <v-card-title style="color:white;padding-top:12%;font-size:1.8rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
        <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
      </v-card>
    </transition>
<!--    MEDIUM AND LARGE VIEWPORT-->
    <transition name="slide-fade">
      <v-card v-if="this.requiredFieldsFilled === false && ($vuetify.breakpoint.md || $vuetify.breakpoint.lg)" class="mt-n8" style="position:absolute;top:45vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
        <v-card-title style="color:white;padding-top:12%;font-size:2.5rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
        <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
      </v-card>
    </transition>
<template>
    <transition name="slide-fade">
      <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10 ">Invite A New User </v-card-title>
    </transition>
      <v-card-title v-if="companyLoad" style="color: #a61c00; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
    <transition name="slide-fade">
      <v-form style="width: 80%;" class="d-flex flex-wrap justify-center" v-if="companyLoad">
        <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.requiredRules" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <div>
<v-select v-model="addUserForm.is_superuser" :label="'Account Level'" :items="selectOptions"></v-select>
          <p>Please Note The Difference Between Account Level Permissions.</p>
          <p><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</p>
          <p><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</p>
        </div>
        <transition name="slide-fade">
          <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
          <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
        </transition>
      </v-form>
    </transition>
<!--    <transition name="slide-fade">-->
<!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
<!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
<!--    </transition>-->
  </template>
  </v-card>
</template>
<script>
  export default {
    name: 'add-user',
    layout: 'app',
    data() {
      return {
        requiredFieldsFilled: null,
        company: {},
        companyLoad: false,
        addModal: false,
        addUserForm: {
          companies_id: Number,
          email: '',
          password: '',
          is_superuser: false,
          first_name: '',
          last_name: '',
          phone: '',
          isVerified: false,
          companyName: "",
          companyImg: "",
          senderFirstName: "",
          senderLastName: "",
        },
        successAddUserForm: false,
        selectOptions: [
          'Super Admin',
          'Staff Account'
        ],
        rules: {
          requiredRules: [(v) => !!v && v === 0 || 'Field is required'],
          // usernameRules: [
          //   (v) => !!v  'Name is required',
          //   (v) =>
          //     (v && v.length <= 100)  'Name must be less than 100 characters',
          // ],
          emailRules: [
            v => !!v || 'E-mail is required',
            (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            // v => /.+@.[A-Z]+/.test(v)  'E-mail must be valid',
            v => (v && v.length <= 100) || 'Email must be less than 100 characters'
          ],
          // emailNotRequiredRules: [
          //   (v) => /.+@.+/.test(v)  'E-mail must be valid',
          //   (v) =>
          //     (v && v.length <= 100)  'Email must be less than 100 characters',
          // ],
          phoneRules: [
            (v) => (v && v.length === 10) || 'Phone Number must be 10 digits',
          ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => /[*@!?#%&()^~{}]+/.test(v) || 'Password must contain 1 special character',
            v => /[A-Z]+/.test(v) || 'Password must contain at least 1 Uppercase character',
            v => /[a-z]+/.test(v) || 'Password must contain at least 1 Lowercase character',
            v => /[0-9]+/.test(v) || 'Password must contain at least 1 Number ',
            v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            v => (v && v.length <= 255) || 'Password must be less than 255 characters'
          ]
          ,
          // urlRules: [
          //   v => !!v  'A website is required',
          //   v => /.+([A-Z0-9a-z]+).([a-z]+)+/.test(v)  'A valid URL is required',/[a-z]://www./
          //   v => (v && v.length >= 4)  'URL must be at least 4 characters',
          //   v => (v && v.length <= 250) || 'URL must be less than 250 characters'
          // ]
        },
        confirmPassword: null,
      }
    },
    async mounted() {
      await this.getCompany();
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
      confirmPasswordRules() {
        return [
          () =>
            this.addUserForm.password === this.confirmPassword || 'Password must match',
          (v) => !!v || 'Confirmation Password is required',
        ]
      },
    },
    methods: {
      async getCompany() {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'company');
            this.company = response.data
          })
          .catch(err => {
            console.log(err, 'error in getting company')
          })

        this.companyLoad = true;
      },
      async submitAddUser() {
        if (this.addUserForm.email === '' || this.addUserForm.password === '' || this.addUserForm.first_name === '' || this.addUserForm.last_name === ''||  this.addUserForm.phone === '') {
          return this.requiredFieldsFilled = false
        } else {
          this.requiredFieldsFilled = true
          this.addUserForm.companies_id = this.company.id;
          if(this.addUserForm.is_superuser === 'Super Admin') {
            this.addUserForm.is_superuser = true;
          } else {
            this.addUserForm.is_superuser = false;
          }
          await this.$http.post('https://www.sowerkbackend.com/api/auth/register', this.addUserForm)
            .then(response => {
              console.log(response, 'SUCCESS IN REGISTERING')
            })
            .catch(err => {
              console.log(err, 'ERROR IN REGISTERING')
            })
          console.log(this.addUserForm);
          this.successAddUserForm = true;
          setTimeout(() => {
            // this.$router.push('../../dashboard/user-creation');
            this.$router.go()
          }, 1500)
        }
      },
      enforcePhoneFormat() {
        let x = this.addUserForm.phone
          .replace(/\D/g, "")
          .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

        this.addUserForm.phone = !x[2]
          ? x[1]
          : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
      },
      editExit() {
        this.requiredFieldsFilled = true
      }
    }
  }
</script>

<style scoped>

  /*  Enter and leave animations can use different */
  /*  durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    .slide-fade-leave-active below version 2.1.8 {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
