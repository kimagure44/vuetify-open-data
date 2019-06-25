import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import GasStations from './views/GasStations.vue';
import Beaches from './views/Beaches.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/buscar-gasolineras',
      name: 'buscar-gasolineras',
      component: GasStations,
    },
    {
      path: '/buscar-playas',
      name: 'buscar-playas',
      component: Beaches,
    },
  ],
});
