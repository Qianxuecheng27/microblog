import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global-components.js'
import VueAxios from './plugins/axios'

Vue.config.productionTip = false
Vue.use(VueAxios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
