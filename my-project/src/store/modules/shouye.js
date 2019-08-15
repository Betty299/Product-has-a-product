import { shouyelist ,shouyeone,shouyehaowu } from "../../service/index";
const state = {
  
  listone:[],
  listhaowus:[],
  list:[]
};

const mutations = {
       //首页横滚
    addshouyeone(state, payload) {
        state.listone = payload;
      },
       //精选好物数据
    listhaowu(state, payload) {
        state.listhaowus = payload.items;
      },
        //最下边数据
  addshouyelist(state, payload) {
    state.list = payload;
  }
};
const actions = {
    //首页横滚
  async shouyeone({ commit }) {
    let data = await shouyeone();
    console.log("res.................",data); 
    commit("addshouyeone", data);
  },
   //精选好物数据
   async shouyehaowu({ commit }, ) {
    let data = await shouyehaowu();
    let li=data.result[7]
  console.log("res.................",li); 
    commit("listhaowu", li );
  },
  //最下边数据
  async shouyelist({ commit }, ) {
    let data = await shouyelist();
    let lisi=data.result;
    console.log("res.................",lisi); 
    commit("addshouyelist", lisi);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
