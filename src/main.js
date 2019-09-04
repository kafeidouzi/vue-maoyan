import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'

//用于页面是否提示
Vue.config.productionTip = false

new Vue({
  router,
  //store,
  el:'#app',
  render: h => h(App)
})
