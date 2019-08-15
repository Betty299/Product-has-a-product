import fly from "../utils/request";


//首页横滚
export function shouyeone() {
return fly.post("/api/open/product/category/query/1.0.0")
}
//首页最下边渲染
export let shouyelist = () => {
  return fly.post('https://upapi.jinaup.com/api/open/page/home/products/1.0.0')
}

//首页数据1
export function shouyehaowu() {
    return fly.post("/api/open/page/home/list/category")
}

//首页数据2
export function shouyelist() {
  return fly.post("/api/open/page/home/products/1.0.0")
}