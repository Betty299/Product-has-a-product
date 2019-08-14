import { cartList, detailPicture } from '../../service/index'
const state = {
  productDetails: null // 商品详情
}
const mutations = {
  productDetails (state, payload) {
    state.productDetails = payload
  }
}
// 模块内的异步改变
const actions = {
  async cartList (context, { ...payload }) { // 请求商品详情
    return new Promise(async (resolve, reject) => {
      let data = await cartList(payload)
      context.commit('productDetails', data.result)
      console.log(data)
    })
  },
  async detailPicture (context, { ...payload }) { // 只有两张图片
    let data = await detailPicture(payload)
    console.log('dier', data)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}