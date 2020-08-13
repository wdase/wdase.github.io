import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
vuetify,
  router,
  render: h => h(App)
})
