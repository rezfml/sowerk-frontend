<template>
  <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
    <v-list>
      <v-list-item @click.native="toggle">
        <v-list-item-action>
          <v-icon light>
            mdi-repeat
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'RightDrawer',
  computed: mapFields('app', ['right', 'rightDrawer']),
  methods: {
    ...mapMutations({
      toggle: 'app/toggleRight'
    })
  }
}
</script>

<style scoped></style>
