import fly from "../utils/request.js";
export let product=()=>{
    return fly.post("https://upapi.jinaup.com/api/open/microOrder/place/getCMicroOrderList/0");
}
