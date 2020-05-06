<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="login.username"
              label="Username"
              type="text"
            ></v-text-field>
            <v-text-field
              v-model="login.password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="userLogin">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      const login = await this.$auth
        .loginWith('local', { data: this.login })
        .catch((e) => e)
      console.log(login);
      console.log(JSON.parse(login))
      const {message, status, errors, data} = login;
      console.log(status, message, errors, data)
      this.$error(status, message, errors)
    }
  }
}
</script>

<style scoped></style>
