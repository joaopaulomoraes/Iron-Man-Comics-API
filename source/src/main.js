import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'
import VueLazyload from 'vue-lazyload'

Vue.use(Meta)
Vue.use(VueLazyload, {
  lazyComponent: true,
  loading: './assets/img/loading.gif',
  attempt: 3
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
