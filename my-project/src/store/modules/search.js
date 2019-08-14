import { getSearch } from '../../service/index';
const state = {
  list:[]
};

const mutations = {
 
};
const actions = {
  async getSearchFn ({commit}, payload) {
    let data = await getSearch(payload)
    console.log(data)
  }

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};