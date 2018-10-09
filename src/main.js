import Vue from 'vue'
import App from './App.vue'
import vueWaterfallSimple from './lib/index'

Vue.use(vueWaterfallSimple)

new Vue({
  el: '#app',
  render: h => h(App)
})
