<template>
  <div class="searchPage">
    <form @submit="formSubmit" @reset="formReset">
      <view class="searchInput">
        <img src="/static/images/搜索.svg" alt />
        <input name="input" placeholder="搜索" />
        <button form-type="submit" class="submit"></button>
        <p @click="cancleSearch">取消</p>
      </view>
    </form>
    <div class="Search">
      <div class="searchMain">
        <p>历史搜索</p>
        <p class="delHistory" @click="delHistory">删除</p>
      </div>
      <ul class="searchW">
        <li v-for="(item,index) in historySearch" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="searchList" v-if="flag">
      <ul class="searchNav">
        <li v-for="item in queryType" :key="item.ind" @click="changeType(item.ind)">{{item.tit}}</li>
      </ul>
      <div class="searchs">
        <ul v-for="(item,index) in searchList" :key="index" @click="gotoDetail(item.pid)">
          <li class="pic">
            <img :src="item.mainImgUrl" alt />
          </li>
          <li class="seaName">{{item.title}}</li>
          <li>
            <span class="nowNum">￥{{item.salesPrice}}</span>
            <span class="oldNum">￥{{item.marketPrice}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      word: "",
      flag: false,
      queryType: [
        {
          tit: "综合",
          ind: "0"
        },
        {
          tit: "最新",
          ind: "1"
        },
        {
          tit: "价格",
          ind: "2"
        }
      ],
      queryTypeNum: ""
    };
  },
  computed: {
    // ...mapState({
    //   searchList: state => state.home.searchList,
    //   historySearch: state => state.home.historySearch
    // })
  },
  // methods: {
  //   ...mapActions({
  //     getSearch: "home/getSearch"
  //   }),
  //   formSubmit: function(e) {
  //     this.word = e.mp.detail.value.input;
  //     this.flag = true;
  //     const that = this;
  //     that.getSearch({
  //       queryWord: that.word,
  //       queryType: this.queryTypeNum,
  //       querySort: "asc",
  //       pageIndex: "1"
  //     });
  //   },
  //   cancleSearch() {
  //     this.flag = false;
  //   },
  //   changeType(ind) {
  //     this.queryTypeNum = ind;
  //     this.getSearch({
  //       queryWord: this.word,
  //       queryType: this.queryTypeNum,
  //       querySort: "asc",
  //       pageIndex: "1"
  //     });
  //   },
  //   delHistory() {},
  //   gotoDetail(pid) {
  //     wx.navigateTo({
  //       url: "/pages/homePage/searchDetail/main?pid=" + pid
  //     });
  //   }
  // },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.searchPage {
  width: 100%;
  height: 100%;
}
.searchInput {
  width: 90%;
  height: 100rpx;
  background: rgb(249, 250, 250);
  margin-left: 5%;
  display: flex;
}
.Search {
  display: block;
}
.searchInput > input {
  display: inline-block;
  width: 80%;
  height: 60rpx;
  background: rgb(237, 243, 245);
  margin-top: 20rpx;
  border-radius: 10rpx;
  padding-left: 30rpx;
}
.searchInput > img {
  display: inline-block;
  width: 5%;
  height: 60rpx;
  background: rgb(237, 243, 245);
  margin-top: 20rpx;
  margin-left: 3%;
}
.searchInput > p {
  width: 20%;
  height: 100%;
  line-height: 100rpx;
  text-align: center;
  color: #888;
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
.searchList {
  position: fixed;
  z-index: 999;
  top: 100rpx;
  width: 100%;
  background: white;
  height: 503.2rpx;
}
.searchNav {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  display: flex;
}
.searchNav li {
  flex: 1;
  text-align: center;
  font-size: 28rpx;
  color: #777;
}
.searchs {
  margin-top: 30rpx;
  width: 100%;
  flex: 1;
  background: rgb(237, 243, 245);
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}
.searchs > ul {
  width: 48%;
  margin-left: 2%;
  height: 380rpx;
}
.pic {
  width: 86%;
  height: 270rpx;
  margin-left: 7%;
}
.pic > img {
  width: 100%;
  height: 100%;
}
.seaName {
  width: 96%;
  margin-left: 2%;
  height: 50rpx;
  line-height: 50rpx;
  font-size: 25rpx;
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  white-space: nowrap; /*规定段落中的文本不进行换行 */
}
.nowNum {
  color: red;
}
.oldNum {
  color: #888;
  font-size: 25rpx;
}
.submit {
  width: 100rpx;
  height: 60rpx;
  position: fixed;
  top: 20rpx;
  left: 66%;
  background: rgb(237, 243, 245);
  border: none !important;
  z-index: 999;
}
</style>