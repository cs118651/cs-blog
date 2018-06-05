import Vue from 'vue'
import Router from 'vue-router'
import csBody from '@/components/csBody'
import Article from '@/components/base/article'
import About from '@/components/base/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'body',
      component: csBody
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
