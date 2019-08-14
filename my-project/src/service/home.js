<<<<<<< HEAD
import fly from "../../utils/request";
export let produc=()=>{
    return fly.post("https://upapi.jinaup.com/api/open/microOrder/place/getCMicroOrderList/0");
}
=======
import fly from "@/utils/request";

export function product(params){
    return fly.post("/api/open/product/category/query/1.0.0");
}
>>>>>>> 7b6746d4f1fbe860223f13f7de0cf9f63b78eb7d
