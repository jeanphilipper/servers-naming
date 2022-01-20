import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import AtComponents from "at-ui"
import "at-ui-style"

Vue.config.productionTip = false

Vue.use(AtComponents)

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")
