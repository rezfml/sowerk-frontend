// Lib imports
import Vue from 'vue'
const vue = new Vue()
export const errorHandler = (
  status,
  message = 'Unknown Error',
  errors = []
) => {
  console.log(status);
  if (status !== 200) {
    if (message === 'Route Changed') return true
    if (status === 422) {
      errors.map((error) => {
        vue.$noty.error(`${error.title} - ${error.detail}`)
      })
    } else if (errors) {
      errors.map((error) => {
        vue.$noty.error(`${error.title} - ${error.detail}`)
      })
    } else {
      vue.$noty.error(message)
    }
    return true
  }
  return false
}

Vue.prototype.$error = errorHandler
