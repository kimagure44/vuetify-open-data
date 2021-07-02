import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gasStations: [],
    beaches: [],
  },
  getters: {
    getGasStations(state) {
      return state.gasStations;
    },
    getBeaches(state) {
      return state.beaches;
    },
  },
  mutations: {
    setGasStations(state, payload) {
      state.gasStations.push(payload);
    },
    setBeaches(state, payload) {
      state.beaches.push(payload);
    },
  },
  actions: {

  },
});
