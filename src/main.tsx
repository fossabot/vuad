import Vue, { VNode } from 'vue'

import './plugins/vuex'
import './plugins/vue-router'

import store from './store'
import router from './router'

import App from './App.vue'
import './styles/vendors/tailwind.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,

  render (h): VNode {
    return h(App)
  }
}).$mount('#app')
