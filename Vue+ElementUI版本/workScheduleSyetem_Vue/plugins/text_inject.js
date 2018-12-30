import Vue from 'vue'

Vue.prototype.$testInject = (string) => {
  console.log(`this is a inject test ${string}`)
}
