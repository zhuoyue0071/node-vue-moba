import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import http from './http'

import './style.css'
Vue.config.productionTip = false;

Vue.prototype.$http = http
new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
