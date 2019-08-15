<template>
  <div class="searchPage">
    <form @submit="formSubmit" @reset="formReset">
      <view class="searchInput">
        <img src="/static/images/搜索.svg" alt />
        <input name="input" placeholder="搜索" />
      </view>
    </form>
    <div class="searchList">
      <ul class="searchNav">
        <li v-for="item in queryType" :key="item.ind" @click="changeType(item.ind)">{{item.tit}}<img :src="item.icon" alt=""></li>
      </ul>
      <div class="searchContent">
        <div class="contentBox">
          <div><img src="/static/images/2.png" alt=""></div>
          <div>[放电饭煲上岛咖啡]</div>
          <div><span>包税</span><span>满减299减30</span><span>满299减30</span></div>
          <div><span>￥22.90</span><span>￥18.88</span><img src="/static/images/黑卡.svg" alt=""></div>
        </div>
        <div class="contentBox">
          <div><img src="/static/images/2.png" alt=""></div>
          <div>[放电饭煲上岛咖啡]</div>
          <div><span>包税</span><span>满减299减30</span><span>满299减30</span></div>
          <div><span>￥22.90</span><span>￥18.88</span><img src="/static/images/黑卡.svg" alt=""></div>
        </div>
        <div class="contentBox">
          <div><img src="/static/images/2.png" alt=""></div>
          <div>[放电饭煲上岛咖啡]</div>
          <div><span>包税</span><span>满减299减30</span><span>满299减30</span></div>
          <div><span>￥22.90</span><span>￥18.88</span><img src="/static/images/黑卡.svg" alt=""></div>
        </div>
        <div class="contentBox">
          <div><img src="/static/images/2.png" alt=""></div>
          <div>[放电饭煲上岛咖啡]</div>
          <div><span>包税</span><span>满减299减30</span><span>满299减30</span></div>
          <div><span>￥22.90</span><span>￥18.88</span><img src="/static/images/黑卡.svg" alt=""></div>
        </div>
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
          ind: "1",
          icon:"/static/images/价格排序icon.png",
          icon2:"/static/images/价格排序icon -1.png"
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
    
  },
  methods: {
    ...mapActions({
      getdetail:"search/getdetail"
    })
  },
  created() {
    this.getdetail({'pid':11})
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
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


.searchList {
  position: fixed;
  z-index: 999;
  top: 100rpx;
  width: 100%;
  background: white;
  height: 503.2rpx;
  display: flex;
  flex-direction: column;
  .searchContent{
    width: 100%;
    flex:1;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background:rgb(243, 247, 247);
    .contentBox{
      width: 48%;
      height: 460rpx;
      padding: 3rpx 20rpx;
      box-sizing:border-box;
      flex-shrink: 0;
      background: #fff;
      border-radius: 5rpx;
      margin:5rpx 0;
    }
  }
}
.contentBox div{
  font-size: 16px;
  &:nth-child(1){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 80%;
      height: 300rpx;
    }
  }
  &:nth-child(3){
    display: flex;
    span{
      font-size: 10px;
      border:1rpx solid rgb(253, 100, 129);
      color:rgb(253, 100, 129);
      padding: 1rpx;
      box-sizing: border-box;
      margin:0 3rpx;
    }
  }
  &:nth-child(4){
    display: flex;
    align-items: center;
    span:nth-child(1){
      font-size: 13px;
      color:red;
    }
    span:nth-child(2){
      font-size: 12px;
      color:#777;
      text-decoration:line-through;
      margin:0 10rpx;
    }
    img{
      width: 40rpx;
      height: 40rpx;
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 20rpx;
    height: 20rpx;
  }
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