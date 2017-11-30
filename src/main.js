// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'
// import axios from 'axios'
// import qs from 'qs'
import http from './utils/http'
// import * as api from './api/data'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './mock'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

// Vue.prototype.$axios = axios;
// Vue.prototype.$qs = qs;
Vue.prototype.$http = http
// Vue.prototype.$api = api;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
