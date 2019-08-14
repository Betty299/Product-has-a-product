import fly from '../utils/request'
//首页最下边渲染
export let shouyelist = () => {
  return fly.post('https://upapi.jinaup.com/api/open/page/home/products/1.0.0')
}
