import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: 1,
  },
  mutations: {
    setTestMu(state, payload) {
      state.test = payload.test;
    },
  },
  getters: {
    test(state) {
      return state.test;
    },
  },
  actions: {
    setTestAc(content) {
      return new Promise((resolve) => {
        setTimeout(() => {
          content.commit("setTest", { test: 10 });
          resolve();
        }, 1000);
      });
    },
  },
  modules: {},
});
