<template>
  <div class="wrap">
    <div class="search">
      <div class="searchBox">
        <img src="/static/images/搜索.svg" alt="">
        <input type="text" placeholder="搜索">
      </div>
      <p @click="cancleSearch">取消</p>
    </div>
     <div class="searchMain">
        <p>历史搜索</p>
        <p class="delHistory" @click="delHistory">删除</p>
      </div>
      <ul class="searchW">
        <li @click="toSearchList">裙子</li>
        <li>裤子</li>
        <li>鞋子</li>
        <li>童装</li>
        <li>袜子</li>
        <!-- <li v-for="(item,index) in historySearch" :key="index">{{item}}</li> -->
      </ul>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{
   
  },
  methods:{
    ...mapActions({
      getSearchFn:"search/getSearchFn"
    }),
    cancleSearch(){

    },
    toSearchList(){
      wx.navigateTo({
        url:"/pages/searchList/main"
      })
    }
  },
  created(){
    this.getSearchFn('裙子')
  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  .search{
    width: 100%;
    height: 90rpx;
    padding: 10rpx 10rpx;
    box-sizing: border-box;
    display: flex;
    .searchBox{
      flex:1;
      height: 100%;
      border:1rpx solid #ccc;
      border-radius: 5rpx;
      display: flex;
      align-items: center;
      background: #e5e5e5;
      padding: 10rpx 10rpx;
      box-sizing: border-box;
      img{
        width: 30rpx;
        height: 30rpx;
      }
      input{
        flex:1;
      }
    }
  }
  .searchMain {
      width: 90%;
      height: 100rpx;
      margin-left: 5%;
      display: flex;
      line-height: 100rpx;
      color: #777;
      justify-content: space-between;
    }
    .delHistory {
      font-size: 22rpx;
    }
    .searchW {
      width: 90%;
      flex: 1;
      margin-left: 5%;
      display: flex;
      flex-wrap: wrap;
    }
    .searchW li {
      width: 20%;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      background: rgb(243, 243, 243);
      border-radius: 10rpx;
      margin-right: 5%;
      color: #777;
    }
}
</style>