import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
