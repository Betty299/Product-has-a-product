import { cartList, detailPicture, productDetailPicture,recommend } from '../../service/index'
const state = {
  productDetails: null, // 商品详情
  productSrc: null, // 产品详情图
  colorPop: false, //  加入购物车选择颜色弹框
  couponPop: false, // 优惠卷弹框
  relaShopping: [] // 相关商品
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
  },
  relaShopping (state, payload) { // 相关商品与热门商品
    state.relaShopping = payload
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
  async productDetail (context, { ...payload }) { // 产品详情图 ok
    let data = await productDetailPicture(payload)
    context.commit('productSrc', data.result)
  },
  async recommend (context, { ...payload }) { // 商品推荐和猜你喜欢
    let data = await recommend(payload)
    context.commit('relaShopping', data.result)
    console.log(data)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
