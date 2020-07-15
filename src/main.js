import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'
import http from './service/http'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$baseUrl = process.env.VUE_APP_API_URL

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
