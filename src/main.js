import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  render: h => h(App),
  components: { App }
})