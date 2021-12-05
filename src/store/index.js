import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user"
import getters from "./getters"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  },
  getters: getters,
  state: {
    test: 1,
  },
  mutations: {
    setTestMu(state, payload) {
      state.test = payload.test;
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
  }
});
