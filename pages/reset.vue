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
          </v-card>

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

              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="loginData.password"
                style="width: 100%;"
              >
                <template slot="prepend">
                  <v-icon color="grey" class="text--darken-2">lock</v-icon>
                </template>
              </v-text-field>
              
              <v-text-field
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                v-model="loginData.passwordConfirm"
                style="width: 100%;"
              >
                <template slot="prepend">
                  <v-icon color="grey" class="text--darken-2">lock</v-icon>
                </template>
              </v-text-field>

              <v-btn text type="submit" value="LET'S GO" style="color: #a61c00; text-align: center;" class="py-10 mx-auto center" v-on:click="reset" >Reset Password</v-btn>
            </v-form>
          </v-card-text>
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
      }
    },
    methods: {
      async reset() {
        try {
          await this.$store.put('user/', {
            email: this.loginData.email.toLowerCase(),
            //password: this.loginData.password,
            confirmPassword: this.loginData.password==this.loginData.confirmPassword
          })
          console.log(this.$store.state.user);
        } catch (e) {
          console.log(e);
          alert('Failed to change password, please check your email or password to ensure it is correct!')
        }

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
