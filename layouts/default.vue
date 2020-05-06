<template>
  <v-app dark>
    <navigation></navigation>
    <toolbar></toolbar>
    <v-content>
      <v-container :fluid="fluid">
        <nuxt />
      </v-container>
    </v-content>
    <right-drawer></right-drawer>
    <footer></footer>
  </v-app>
</template>

<script>
import Navigation from '../components/app/core/navigation'
import Toolbar from '../components/app/core/toolbar'
import RightDrawer from '../components/app/core/rightDrawer'
export default {
  components: { RightDrawer, Toolbar, Navigation },
  computed: {
    fluid() {
      return this.$store.state.app.fluid
    }
  }
}
</script>
