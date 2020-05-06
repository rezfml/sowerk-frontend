<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-btn icon @click.stop="toggleMiniVariant">
      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>
    <v-btn icon @click.stop="toggleClipped">
      <v-icon>mdi-application</v-icon>
    </v-btn>
    <v-btn icon @click.stop="toggleFixed">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn icon @click.stop="toggleRightDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Toolbar',
  data() {
    return {
      title: 'Vuetify.js',
    }
  },
  computed: mapFields('app', ['clipped', 'miniVariant']),
  methods: {
    ...mapMutations('app', [
      'toggleFixed',
      'toggleRightDrawer',
      'toggleClipped',
      'toggleDrawer',
      'toggleMiniVariant'
    ])
  }
}
</script>

<style scoped></style>
