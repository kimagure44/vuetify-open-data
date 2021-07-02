import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import eventBus from './plugins/eventBus';

Vue.config.productionTip = false;

Vue.use(eventBus);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
