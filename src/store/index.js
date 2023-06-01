import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerItems: false,
  },
  getters: {
    drawerItems: (state) => state.drawerItems,
  },
  mutations: {
    setDrawerItems(state, drawer) {
      state.drawerItems = drawer;
    },
  },
  actions: {
    setDrawerItems({ commit }, drawer) {
      commit("setDrawerItems", drawer);
    },
  },
  modules: {},
});
