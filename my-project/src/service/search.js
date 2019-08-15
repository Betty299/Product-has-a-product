
import fly from '../utils/request'
export const getSearch = (payload) => {
  console.log("payload...",payload)
  return fly.post('/api/open/search/query/0.0.1', payload)
}
export const getDetail = (payload) => {
  return fly.post('/api/open/product/newInfo/0.0.1', payload)
}