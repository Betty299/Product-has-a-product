import fly from "../../utils/request";
export let produc=()=>{
    return fly.post("/api/open/product/category/query");
}