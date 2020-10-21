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

              <v-btn text type="submit" value="LET'S GO" style="color: #a61c00; text-align: center;" class="py-10 mx-auto center" v-on:click="login" >LET'S GO</v-btn>
              <!--<v-btn text type="submit" value="Reset" style="color: #a61c00; text-align: center;" class="py-10 mx-auto center" v-on:click="sendReset" >Forgot Password?</v-btn>-->
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
      async login() {
        try {
          await this.$store.dispatch('user/login', {
            email: this.loginData.email.toLowerCase(),
            password: this.loginData.password
          })
          console.log(this.$store.state.user);
        } catch (e) {
          console.log(e);
          alert('Failed to login, please check your username or password to ensure it is correct!')
        }

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
