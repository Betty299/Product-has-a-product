<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 15:38:39
 * @LastEditTime: 2019-08-13 08:30:11
 * @LastEditors: Please set LastEditors
 -->

<template>
  <!-- 购物车页面 -->
  <div class="shoppingWrap">
    <!--购物车有无数据时 -->
    <div class="shoppingMainNot">
      <img src="../../../static/images/购物车.png" alt />
    </div>
    <div class="shoppingNot">
      <div>
        <img src="../../../static/images/猜你喜欢.png" alt />
      </div>
      <div>
        <div class="contentBox" v-for="item in relaShopping" :key="item.id" @click="goShop(item)">
          <div>
            <img :src="item.mainImgUrl" alt />
          </div>
          <div>{{item.description?item.description:item.title}}</div>
          <div>
            <span>包税</span>
            <span>{{item.country?item.country:item.origin}}</span>
            <span>满299减30</span>
          </div>
          <div>
            <span>￥{{item.earnMoney}}</span>
            <span>￥{{item.vipPrice}}</span>
            <!-- <img src="/static/images/黑卡.svg" alt /> -->
          </div>
        </div>
      </div>
    </div>

    <!-- //购物车有数据时显示这个 -->
    <!-- <div class="shoppingMain">
      <div class="shoppingBlock">
        <div>
          <p class="shoppingRadio"></p>
        </div>
        <div>
          <img src alt />
        </div>
        <div>
          <div>爱上的话术啊速度和多少速哈苏的哈速度话说刈啊实打实啊撒大声地</div>
          <div>规格</div>
          <div>
            <p>￥52.23</p>
            <p class="shoppingAdd">
              <span>-</span>
              <span>0</span>
              <span>+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="shoppingBtn">
      <div class="active"></div>
      <div>全选</div>
      <div>
        总计:
        <span>$119</span>
      </div>
      <div>编辑</div>
      <div>去结算</div>
    </div>-->
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      colorPop: false,
      couponPop: false
    };
  },

  computed: {
    ...mapState({
      relaShopping: state => state.shoppingCar.relaShopping
    })
  },
  methods: {
    ...mapActions({
      recommend: "shoppingCar/recommend"
    }),
    goShop(item) {
      //点击商品跳转购物车
      wx.navigateTo({
        url: "/pages/shoppingCar/main?item=" + JSON.stringify(item)
      });
    }
  },
  created() {},
  mounted() {
    //热门商品
    this.recommend({
      title: ""
    });
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "购物车"
    });
  }
};
</script>
<style scoped lang="scss">
.shoppingWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: rgb(243, 247, 247);
}
.shoppingMain {
  flex: 1;
}
.shoppingBlock {
  margin: 0 auto;
  box-sizing: border-box;
  height: 230rpx;
  width: 95%;
  display: flex;
  flex: 1;
  background: #fff;
  margin-top: 20rpx;
  & > div:nth-child(1) {
    align-items: center;
    justify-content: center;
    display: flex;
        margin-top: 15rpx;
    width: 15%;
  }
  & > div:nth-child(2) {
    display: flex;
    height: 80%;
    width: 25%;
    margin-top: 32rpx;
    img {
      height: 100%;
    }
  }
  & > div:nth-child(3) {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
      padding: 10rpx;
      font-size: 14px;
      flex: 1;
    }
    div:nth-child(2) {
      padding: 10rpx;
      font-size: 12px;
      height: 20%;
    }
    div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      height: 25%;
    }
  }
}
.shoppingAdd {
  width: 25%;
  border: 1px solid #ccc;
  margin-right: 5%;
  height: 70%;
  display: flex;
  span {
    flex: 1;
    text-align: center;
    line-height: 40rpx;
  }
  span:nth-child(2) {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
}
.shoppingRadio {
  border-radius: 50%;
  border: 1px solid rgb(180, 241, 235);
  width: 50rpx;
  height: 50rpx;
}
.shoppingMainNot {
  height: 55%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.shoppingNot {
  flex: 1;
  flex-direction: column;
  & > div:nth-child(1) {
    height: 100rpx;
    width: 300rpx;
    background: red;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
}
.shoppingBtn {
  background: #ffffff;
  height: 150rpx;
  display: flex;
  line-height: 150rpx;
  align-items: center;
  & > div:nth-child(1) {
    margin-left: 20rpx;
    border-radius: 50%;
    border: 1px solid rgb(180, 241, 235);
    width: 50rpx;
    height: 50rpx;
  }
  & > div:nth-child(2) {
    margin-left: 20rpx;
    width: 210rpx;
  }
  & > div:nth-child(3) {
    padding: 0 10rpx;
    font-size: 13px;
    span {
      color: rgb(251, 37, 121);
    }
  }
  div:nth-child(4) {
    background: rgb(71, 211, 208);
    padding: 0 43rpx;
    color: #ffffff;
  }
  div:nth-child(5) {
    padding: 0 10rpx;
    text-align: center;
    padding: 0 5rpx;
    flex: 1;
    color: #ffffff;
    background: linear-gradient(to right, rgb(251, 37, 121), rgb(248, 99, 103));
  }
}
.contentBox {
  width: 48%;
  height: 540rpx;
  padding: 3rpx 20rpx;
  box-sizing: border-box;
  flex-shrink: 0;
  background: #fff;
  border-radius: 5rpx;
  margin: 5rpx 0;
  margin-left: 8rpx;
  div:nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    width: 100%;
    margin-top:16rpx; 
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.contentBox div {
  font-size: 16px;
  &:nth-child(1) {
    margin-top: 10rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
      height: 300rpx;
    }
  }
  &:nth-child(3) {
    margin-top: 20rpx;
    display: flex;
    span {
      font-size: 10px;
      border: 1rpx solid rgb(253, 100, 129);
      color: rgb(253, 100, 129);
      padding: 1rpx;
      box-sizing: border-box;
      margin: 0 3rpx;
    }
  }
  &:nth-child(4) {
    display: flex;
    margin-top: 20rpx;
    align-items: center;
    span:nth-child(1) {
      font-size: 13px;
      color: red;
    }
    span:nth-child(2) {
      font-size: 12px;
      color: #777;
      text-decoration: line-through;
      margin: 0 10rpx;
    }
    img {
      width: 40rpx;
      height: 40rpx;
    }
  }
}
.active {
  background: rgb(71, 211, 208);
}
</style>