<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app color="transparent" flat>
      <v-container>
        <v-row>
          <v-toolbar-title v-text="title" />
          <v-spacer></v-spacer>
          <v-btn href="#" text>Home</v-btn>
          <v-btn href="#" text>About</v-btn>
          <v-btn href="#" text>Features</v-btn>
          <v-btn to="/register" text>Register</v-btn>
          <v-btn to="/login" text>Login</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Market49'
    }
  }
}
</script>
