import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@tabler/icons/iconfont/tabler-icons.min.css'
import VuePageTransition from 'vue-page-transition'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VuePageTransition);
Vue.config.productionTip = false
Vue.use(VueToast, {
  position: 'bottom-left',
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
