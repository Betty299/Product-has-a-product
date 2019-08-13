import fly from "../../utils/request";
export let produc=()=>{
    return fly.post("https://upapi.jinaup.com/api/open/microOrder/place/getCMicroOrderList/0");
}