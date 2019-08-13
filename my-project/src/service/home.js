import fly from "@/utils/request";

export function product(){
    return fly.post("/api/open/product/category/query/1.0.0");
}