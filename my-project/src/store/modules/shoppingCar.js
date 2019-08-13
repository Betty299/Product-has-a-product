import { cartList } from '../../service/index'
const state = {
}
const mutations = {

}
// 模块内的异步改变
const actions = {
  async cartList (state, { ...payload }) {
    return new Promise(async (resolve, reject) => {
      let result = await cartList(payload)
      console.log(result)
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}