import { getField, updateField } from 'vuex-map-fields'
import { toggle } from '~/utils/vuex'

export const state = () => ({
  drawer: false,
  fixed: false,
  miniVariant: false,
  right: true,
  fluid: false,
  rightDrawer: false
})

export const getters = {
  getField
}

export const mutations = {
  updateField,
  toggleDrawer: toggle('drawer'),
  toggleFixed: toggle('fixed'),
  toggleMiniVariant: toggle('miniVariant'),
  toggleRight: toggle('right'),
  toggleFluid: toggle('fluid'),
  toggleRightDrawer: toggle('rightDrawer'),
  toggleClipped: toggle('clipped')
}
