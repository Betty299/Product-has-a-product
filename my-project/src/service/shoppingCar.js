import fly from '@/utils/request'
// 产品详情列表
export let cartList = params => {
  return fly.post('/api/open/product/info/1', params)
}

// export let cartList = params => {
//   return fly.post('/api/open/user/shopping/cart/add/1.0.0', { params })
// }

// export let cartList = params => {
//   return fly.post('/api/open/product/sku/attrs/1.0.0', { params })
// }
// pid:50960,
// basePid:42771,
// userIdentity:2
export let detailPicture = params => { // 返回两张图
  return fly.post('/api/open/product/detailPicture/1', params)
}
export let productDetailPicture = params => { // 产品详情图
  return fly.post('/api/open/product/detailPicture/1', params)
}
// chenggong 
// 0:
// createTime: null
// imgHeight: 478
// imgType: null
// imgUrl: "https://h5.jinaup.com/product_img/1.jpg"
// imgWidth: 750
// pid: null
// ppid: null
