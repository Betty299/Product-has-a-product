import fly from '@/utils/request'
export let cartList = params => {
  return fly.post('/api/open/user/shopping/cart/add/1.0.0', { params })
}

// export let cartList = params => {
//   return fly.post('/api/open/product/sku/attrs/1.0.0', { params })
// }


// pid:50960,
// basePid:42771,
// userIdentity:2
// export let cartList = params => {   
//   return fly.post('/api/open/product/detailPicture/1.0.0', { params })
// } 
// chenggong 
// 0:
// createTime: null
// imgHeight: 478
// imgType: null
// imgUrl: "https://h5.jinaup.com/product_img/1.jpg"
// imgWidth: 750
// pid: null
// ppid: null






// export let cartList = params => {   未查询到
//   return fly.post('/api/open/product/info/1.0.0', { params })
// }
