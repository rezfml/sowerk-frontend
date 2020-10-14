import Vue from 'vue';
import * as VueGoogleMaps from '~/node_modules/gmap-vue'

Vue.use(VueGoogleMaps, {
  // load: {
  //   key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
  // },
  installComponents: true
})

Vue.component('gmap-vue', VueGoogleMaps);

export default {
  name: 'gmap-vue'
}
