import { cartList, detailPicture, productDetailPicture } from '../../service/index'
const state = {
  productDetails: null, // 商品详情
  productSrc: null, // 产品详情图
  colorPop: false, //  加入购物车选择颜色弹框
  couponPop: false // 优惠卷弹框

}
const mutations = {
  productDetails (state, payload) {
    state.productDetails = payload
  },
  productSrc (state, payload) { // 类似与产品详情图接口参数不一样
    state.productSrc = payload
    // console.log(state.productSrc)
  },
  colorPop (state) { // 加入购物车选择颜色弹框
    state.colorPop = !state.colorPop
  },
  couponPop (state) { // 优惠卷弹框
    state.couponPop = !state.couponPop
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
  async detailPicture (context, { ...payload }) { // 类似与产品详情图接口参数不一样
    let data = await detailPicture(payload)
    console.log('dier', data)
  },
  async productDetail (context, { ...payload }) { // 产品详情图
    let data = await productDetailPicture(payload)
    context.commit('productSrc', data.result)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
