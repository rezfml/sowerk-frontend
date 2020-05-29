import Vue from 'vue';
// Lib imports
import axios from 'axios';
export const Api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});
Vue.prototype.$http = Api;
