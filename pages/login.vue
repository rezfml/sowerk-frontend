<template>
  <v-row
    align="center"
    justify="center"
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
          <v-card-title class="card__title justify-center pa-0 mb-5">Login</v-card-title>
          <v-card-action style="display: flex; justify-content: center;">
            <v-btn icon style="margin: 0 2.5%">
              <v-icon>lock</v-icon>
            </v-btn>
            <v-btn icon style="margin: 0 2.5%">
              <v-icon>lock</v-icon>
            </v-btn>
            <v-btn icon style="margin: 0 2.5%">
              <v-icon>lock</v-icon>
            </v-btn>
          </v-card-action>
        </v-card>
        <v-card-title class="justify-center" style="font-weight: normal;">Or Be Classical</v-card-title>
        <v-card-text class="pb-0 px-6">
          <v-form>
            <v-text-field
              label="Email Address"
              name="email"
              type="text"
              class="card__input"
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
            >
              <template slot="prepend">
                <v-icon color="grey" class="text--darken-2">lock</v-icon>
              </template>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="py-10">
          <v-btn color="primary" text class="mx-auto">Let's Go</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'login.vue',
    data() {
      return {
        loginData: {
          email: '',
          password: '',
          msg: ''
        },
      }
    },
    methods: {
      async login() {
        let {data: {plans, message, errors}, status} = await this.$http.post('https://sowerk-backend.herokuapp.com/api/auth' + '/login', this.loginData).catch(e => e);

        // return axios
        //   .post('https://sowerk-backend.herokuapp.com/api/auth' + '/login', this.loginData)
        //   .then(response => {
        //     console.log(response.data);
        //     localStorage.setItem('token', response.data.token)
        //     const token = response.data.token;
        //     const user = response.data.user;
        //     console.log(response.data, 'line84')
        //     this.$store.dispatch('login', { token, user });
        //     return response.data;
        //   })
        //   .catch(err => {
        //     console.log(err, 'Error logging in')
        //   })
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
    height: 15vh;
    max-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card__input .v-icon {
    color: black;
  }

  .card__title {
  }
</style>
