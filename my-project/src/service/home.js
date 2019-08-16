import fly from '../utils/request.js';
export let product = (params) => {
  console.log("res",params);
  return fly.post('/api/open/order/query/1.0.0');
}
