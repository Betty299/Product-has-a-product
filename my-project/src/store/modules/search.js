import { getSearch, getDetail } from '../../service/index';
const state = {
  searchFalg: false,
  list: []
};

const mutations = {
  giveList (state, res) {
    state.list = res.result
  },
  changeflag (state,res) {
    state.searchFalg = res.data
    console.log('res...', res.data)
  }
};
const actions = {
  async getSearchFn ({commit}, payload) {
    let data = await getSearch(payload)
    console.log(data)
  },
  async getdetail ({commit}, payload) {
    let data = await getDetail(payload) 
    commit("giveList", data)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};