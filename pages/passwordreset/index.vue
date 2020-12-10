<template>
  <div class="grey lighten-3">
    <v-container
      class="px-0 fill-height"
      style="max-width: 95%; height: 100vh;"
    >
      <v-row>
        <v-col>
          <v-card class="d-flex flex-column align-center" style="width: 100%">
            <v-img
              v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
              class="mb-n16 "
              style="position:relative;"
              max-height="350"
              max-width="700"
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png"
            />
            <v-img
              v-else
              class="mb-n16 "
              style="position:relative;"
              max-height="350"
              max-width="300"
              src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png"
            />
            <v-container
              v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
            >
              <v-card-title
                class="mt-n16 d-flex justify-center"
                style="margin:auto;"
                >Forgot Your Keys? We Do It Too.</v-card-title
              >
              <v-card-subtitle
                class="d-flex justify-center"
                style="margin:auto;"
                >Please enter your email account, and we will send an email to
                the address you entered with instructions to reset your
                password!</v-card-subtitle
              >
              <v-form
                class="d-flex flex-column align-center"
                style="width: 50%;margin:auto"
              >
                <v-text-field
                  :placeholder="'Email'"
                  class="d-flex justify-center"
                  v-model="user.email"
                  style="width: 100%;"
                >
                </v-text-field>
                <v-btn
                  class="px-10 py-4 mb-4 d-flex justify-center"
                  color="primary"
                  rounded
                  @click="submit"
                  >Submit</v-btn
                >
              </v-form>
            </v-container>
            <v-container v-else>
              <v-card-title
                class="mt-n16"
                style="width:100%;font-size:1rem;margin:auto;"
                >Forgot Your Keys? We Do It Too.</v-card-title
              >
              <v-card-subtitle style="font-size:.75em;margin:auto;"
                >Please enter your email account, and we will send an email to
                the address you entered with instructions to reset your
                password!</v-card-subtitle
              >
              <v-form
                class="d-flex flex-column align-center"
                style="width: 100%;"
              >
                <v-text-field
                  :placeholder="'Email'"
                  v-model="user.email"
                  style="width: 80%;"
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
            </v-container>
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
      user: {
        email: ''
      }
    }
  },
  mounted() {},
  methods: {
    async submit() {
      await this.$http
        .get(
          'https://www.sowerkbackend.com/api/auth/users/email/' +
            this.user.email
        )
        .then(async (response) => {
          console.log(response.data.users[0], 'user email GGGGGG')
          console.log(response.data.users[0].uuid, 'user UUID HEYYY')

          await this.$http
            .post(
              'https://www.sowerkbackend.com/passwordforgot/' + this.user.email
            )
            .then((response) => {
              console.log(response, 'email')
            })
            .catch((err) => {
              console.log(err, 'err')
            })
        })
        .catch((err) => {
          console.log(err, 'err for user email')
          alert(
            'The email you entered is not associated with any account we have on record. Please try again!'
          )
        })
    }
  }
}
</script>

<style scoped></style>
