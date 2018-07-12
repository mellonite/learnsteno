import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Buefy from 'buefy'
import PouchDB from 'pouchdb-browser'

Vue.use(Buefy)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.prototype.$pouch = PouchDB('learnsteno')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
