<template>
  <v-container style="height: 100%; max-width: none!important; background-image:url('https://sowerk-images.s3.us-east-2.amazonaws.com/test+photo-1530124566582-a618bc2615dc.jpeg');background-size: cover; background-position: center;">
    <v-row
      align="center"
      justify="center"
      style="height: 100%; width: 100%;"
    >
      <v-col
        cols="12"
        sm="12"
        md="5"
        style="max-width: 450px;"
      >
        <v-card class="elevation-12 card--has-floating" light>
          <v-card
            color="primary"
            dark
            flat
            class="card--floating"
            elevation="8"
          >
            <v-card-title class="card__title justify-center pa-0 mb-3"><img width="120px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png" alt="SOWerk"> Login</v-card-title>

            <!--
            <v-card-actions style="display: flex; justify-content: center;">
              <v-btn icon style="margin: 0 2.5%">
                <v-icon>lock</v-icon>
              </v-btn>
              <v-btn icon style="margin: 0 2.5%">
                <v-icon>lock</v-icon>
              </v-btn>
              <v-btn icon style="margin: 0 2.5%">
                <v-icon>lock</v-icon>
              </v-btn>
            </v-card-actions>
            -->
          </v-card>
          <!--<v-card-title class="justify-center" style="font-weight: normal;">Or Be Classical</v-card-title>-->
          <v-card-text class="pb-0 px-6">
            <v-form v-on:submit="login" class="d-flex flex-column align-center" style="width: 100%;" v-on:keydown.enter="login" onSubmit="return false;">
              <v-text-field
                label="Email Address"
                name="email"
                type="text"
                class="card__input"
                v-model="loginData.email"
                style="width: 100%;"
              >
                <template slot="prepend">
                  <v-icon color="grey" class="text--darken-2">mail</v-icon>
                </template>
              </v-text-field>

              <v-btn to="../passwordreset" class="mb-n2" style="align-self: flex-end;" text>Forgot Password?</v-btn>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                style="width: 100%;"
                v-model="loginData.password"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"

              >
                <template slot="prepend">
                  <v-icon color="grey" class="text--darken-2">lock</v-icon>
                </template>
              </v-text-field>

              <v-btn rounded color="primary" type="submit" value="LET'S GO" style="text-align: center;" class="px-10 mb-4 mx-auto center" v-on:click="login" >LET'S GO</v-btn>

              <a href="https://www.sowerk.com/register" class="mb-4" style="text-decoration: none; color: #707070; word-break: break-word; white-space: pre-wrap;" >Not On SOWerk? Set Up Your Business Here</a>
              <!--<v-btn text type="submit" value="Reset" style="color: #a61c00; text-align: center;" class="py-10 mx-auto center" v-on:click="sendReset" >Forgot Password?</v-btn>-->
              <p style="font-weight: 700; text-align: center;" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">Already registered? Check your email for verification!</p>

              <p style="font-weight: 700" v-else>Already registered? Check your email for verification!</p>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card class="d-flex flex-column align-center justify-center px-12" v-if="errorLoad" style="width: 50vw; height: 50vh; position:fixed; top: 25vh; left: 25vw; z-index: 100;">
          <v-card-title class="primary--text text-h3 font-weight-regular">Failed to login</v-card-title>
          <v-card-subtitle class="mt-6" v-if="!unverified && !badPassword">Please check your username to ensure it is correct!</v-card-subtitle>
          <v-card-subtitle class="my-4 text-center" v-if="unverified && !badPassword">User is not verified. Please check your email that you provided upon signup for a verification link.</v-card-subtitle>
          <v-card-subtitle class="my-4 text-center" v-if="!unverified && badPassword">User entered the wrong password. Please try again!</v-card-subtitle>
          <v-btn @click="errorLoad = false" color="primary" rounded class="px-10 py-4">Try Again</v-btn>
          <v-btn @click="errorLoad = false" text style="position: absolute; top: 10px; right: 10px; font-size: 30px;">X</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'login',
    layout: 'fullwidth',
    data() {
      return {
        loginData: {
          email: '',
          password: '',
        },
        errorLoad: false,
        unverified: false,
        badPassword: false,
        show1: false,
      }
    },
    methods: {
      async login() {
          await this.$store.dispatch('user/login', {
            email: this.loginData.email.toLowerCase(),
            password: this.loginData.password
          })
            .then(response => {
              console.log(this.$store.state.user, 'store state user!!!!', 'responseVal', response);

            })
            .catch (err => {
              console.log(err, 'RESPONSE ERROR!!!!!');
              console.log(err.data, 'err.data', err.response, 'err.response')
              this.errorLoad = true;
              if(err.response.data.message === "User is not verified. Please check your email that you provided upon signup for a verification link so you can be verified and login") {
                this.unverified = true;
                this.badPassword = false;
              } else if(err.response.data.message === "Invalid Credentials") {
                this.badPassword = true;
                this.unverified = false;
              }
            })

        //requests id for user based off email

        //send email with id and link to email in DB

        // let {data, status} = await this.$http.post('https://sowerk-backend.herokuapp.com/api/auth/login', this.loginData).catch(e => e);
        // console.log(data);
        // if(!data.token) return;

      }
    }
  }
</script>

<style scoped>

  .card--has-floating {
    padding-top: 100px;
    margin-top: 10vh;
  }

  .card--floating {
    position: absolute;
    width: 90%;
    top: -5vh; left: 5%;
    height: 12vh;
    max-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card__input .v-icon {
    color: black;
  }
</style>
