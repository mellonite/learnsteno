import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Buefy from 'buefy'
import PouchDB from 'pouchdb-browser'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Buefy)
Vue.use(VueResource)

Vue.config.productionTip = false
// add pouchdb to vue
Vue.prototype.$pouch = PouchDB('learnsteno')
// add fontawesome
library.add(faCheck, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
