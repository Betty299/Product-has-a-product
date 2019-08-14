import fly from "@/utils/request";

export function product(params){
    return fly.post("/api/open/page/home/products/1.0.0");
}