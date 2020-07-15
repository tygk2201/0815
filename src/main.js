import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@babel/polyfill'//兼容ie

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
