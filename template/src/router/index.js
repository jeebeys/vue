import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Error404 from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', component: Error404 },
    {
      path: '/abc',
      name: 'index',
      component: Index
    }
  ]
})
