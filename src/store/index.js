import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    serialList: [{ serial: "040f5TC200584" }],
  },
  mutations: {
    addSerial(state, serial) {
      console.log("from addSerial", { serial: serial });
      state.serialList.push({ serial: serial });
    },
  },
  actions: {
    ADD_SERIAL({ commit }, serial) {
      commit("addSerial", serial);
    },
  },
  getters: {
    getSerialList: (state) => {
      return state.serialList;
    },
  },
});
