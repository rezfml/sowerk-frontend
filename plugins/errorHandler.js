// Lib imports
import Vue from 'vue';
let vue = new Vue();
export const errorHandler = (status, message = 'Unknown Error', errors = []) => {
  if (status !== 200) {
    if (message === 'Route Changed') return true;
    // console.trace(message);
    if (status === 422) {
      errors.map((error) => {
        vue.$noty.error(`${error.title} - ${error.detail}`);
      });
    } else if (errors) {
      errors.map((error) => {
        vue.$noty.error(`${error.title} - ${error.detail}`);
      });
    } else {
      vue.$noty.error(message);
    }
    return true;
  }
  return false;
};

Vue.prototype.$error = errorHandler;
