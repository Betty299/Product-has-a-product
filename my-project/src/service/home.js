import fly from "@/utils/request";

export function product(params){
    console.log(params);
    return fly.post("/api/open/microOrder/place/getCMicroOrderList/0.0.1",params);
}
