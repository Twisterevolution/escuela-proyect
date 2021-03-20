import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMask from 'v-mask'
import VueTilt from 'vue-tilt.js'



Vue.use(VueTilt)

Vue.use(VueMask)


Vue.config.productionTip = false;

store.dispatch('GETANIOACADEMICODATA')
store.dispatch('GETNIVELESDATA')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
