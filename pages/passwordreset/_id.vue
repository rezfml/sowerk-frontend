<template>
  <div class="grey lighten-3">
    <v-container
      class="px-0 fill-height"
      style="max-width: 95%; height: 100vh;"
    >
      <v-row>
        <v-col>
          <v-card class="d-flex flex-column align-center" style="width: 100%">
            <v-card-title
              >Hello! Please change your password below!</v-card-title
            >
            <v-form class="d-flex flex-column align-center" style="width: 50%;">
              <v-text-field
                :placeholder="'Password'"
                v-model="userForm.password"
                style="width: 100%;"
                type="password"
              >
              </v-text-field>
              <v-text-field
                :placeholder="'Confirm Your Password'"
                v-model="userFormConfirm.confirmPassword"
                style="width: 100%;"
                type="password"
              >
              </v-text-field>
              <v-btn
                class="px-10 py-4 mb-4"
                color="primary"
                rounded
                @click="submit"
                >Submit</v-btn
              >
            </v-form>
          </v-card>
        </v-col>
        <!--        <v-col>-->
        <!--          <p v-if="this.verification">Thanks for verifying! You will be redirected to the login page momentarily.</p>-->
        <!--          <p v-else>This confirmation link has expired or the user doesn't exist. Please click here to resend a confirmation email.</p>-->
        <!--        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import HomeCard from '~/components/dashboard/HomeCard'
// import FilterCard from '~/components/dashboard/FilterCard'
// import ProfileCard from "~/components/dashboard/ProfileCard";
// import ProfileEditCard from "~/components/dashboard/ProfileEditCard";
// import CustomFormCard from "~/components/dashboard/CustomFormCard";

export default {
  name: 'passwordreset',
  layout: 'fullwidth',
  components: {},
  data() {
    return {
      user: {},
      userForm: {
        password: ''
      },
      userFormConfirm: {
        confirmPassword: ''
      },
      uuid: ''
    }
  },
  async mounted() {
    this.uuid = this.$route.params.id
    console.log(this.uuid, "USER ID")
    console.log(this.userForm, "USERFORM")
    await this.getUser(this.uuid)
  },
  methods: {
    async getUser(id) {
      await this.$http
        .get('https://www.sowerkbackend.com/api/auth/users/ui/' + id)
        .then((response) => {
          this.user = response.data.user
        })
        .catch((err) => {
          console.log(err, 'err in getting user')
        })
    },
    async submit() {
      if (this.userForm.password === this.userFormConfirm.confirmPassword) {
        await this.$http
          .put(
            'https://www.sowerkbackend.com/api/auth/users/' + this.user.id,
            this.userForm
          )
          .then(async (response) => {
            console.log(response.data, 'user changes')
            this.$router.push('../login')
          })
          .catch((err) => {
            console.log(err, 'err for user password within _id.vue .catch within submit put request')
            alert('Error in updating password, ')
          })
      } else {
        alert('Passwords do not match!!! Please fix this and resubmit')
      }
    }
  }
}
</script>

<style scoped></style>
