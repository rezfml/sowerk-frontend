<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Navigation',
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcomes',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-login',
          title: 'Login',
          to: '/login'
        }
      ]
    }
  },
  computed: mapFields('app', ['drawer', 'miniVariant', 'clipped'])
}
</script>

<style scoped></style>
