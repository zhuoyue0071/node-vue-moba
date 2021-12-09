import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/scss/style.scss'

Vue.config.productionTip = false
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
