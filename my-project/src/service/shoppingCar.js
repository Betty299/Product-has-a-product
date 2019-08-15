import fly from '@/utils/request'
// 产品详情列表
export let cartList = params => {
  return fly.post('/api/open/product/info/1', params)
}
export let detailPicture = params => { // 返回两张图
  return fly.post('/api/open/product/detailPicture/1', params)
}
export let productDetailPicture = params => { // 产品详情图
  return fly.post('/api/open/product/detailPicture/1', params)
}
export let recommend = params => { // 商品推荐和猜你喜欢
  return fly.post('/api/open/search/query/recommend/1', params)
}
