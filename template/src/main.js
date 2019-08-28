import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import xhttp from '@jeebey/vue-request'
import cache from '@jeebey/vue-vcached'

Vue.use(cache, { prefix: 'vue' })

Vue.use(xhttp, {
  interceptor (response) {
    console.log('----')
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
