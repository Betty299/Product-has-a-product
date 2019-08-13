import { product } from "../../service/index";
const state = {
  list:[]
};

const mutations = {
  pushAdd(state, payload) {
    state.list = payload;
  }
};
const actions = {
  //添加试题
  async addData({ commit }, payload) {
    let data = await product(payload);
    console.log(data);
    commit("pushAdd", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
