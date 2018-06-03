import Vue from 'vue'
import Router from 'vue-router'
import csBody from '@/components/csBody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'body',
      component: csBody
    }
  ]
})
