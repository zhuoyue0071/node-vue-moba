import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import http from './http'

import './style.css'
Vue.config.productionTip = false;

Vue.prototype.$http = http

Vue.mixin({
  computed: {
    uploadUrl(){
    return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return localStorage.token ? { Authorization: `Bearer ${localStorage.token}` } : {}
        // Authorization: `Bearer ${localStorage.token}`
      
    },
    uploadFail(res) {
      if (res.message) {
        this.$message.error(JSON.parse(res.message).message);
      }
      if (res.status === 401) {
        this.$router.push("/login");
      }
    }
  }
})
new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
