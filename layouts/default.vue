<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" color="rgba(0,0,0,0.2)" flat absolute>
      <v-container>
        <v-row>
          <v-toolbar-title v-text="title" class="white--text"/>
          <v-spacer></v-spacer>
          <v-btn href="/landinghome" text dark>Home</v-btn>
          <v-btn href="#" text dark>About</v-btn>
          <v-btn href="#" text dark>Features</v-btn>
          <v-btn to="/register" text dark>Register</v-btn>
          <v-btn to="/login" text dark>Login</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content style="padding-top: 0;">
        <nuxt />
    </v-content>
    <v-footer>
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
      title: 'SOWerk'
    }
  }
}
</script>
