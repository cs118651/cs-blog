// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import 'normalize.css/normalize.css'
import '../node_modules/bulma/css/bulma.css'
import '../node_modules/github-markdown-css/github-markdown.css'
import App from './App'
import router from './router'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
