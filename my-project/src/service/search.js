
import fly from '../utils/request'
export let getSearch = (payload) => {
  return fly.post('/api/open/search/query/1', payload)
}
