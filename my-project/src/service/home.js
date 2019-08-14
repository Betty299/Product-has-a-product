import fly from "@/utils/request";

export function product(params){
    return fly.post("/api/open/microOrder/place/getCMicroOrderList/1.0.0");
}