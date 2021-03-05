import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/index.scss'
import '@/assets/styles/base.scss'
import Element from 'element-ui'

Vue.config.productionTip = false
Vue.use(Element, {
  size: 'small',
  zIndex: 3000
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
