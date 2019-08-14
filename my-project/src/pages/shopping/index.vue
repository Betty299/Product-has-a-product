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
    <!-- <div class="shoppingMainNot">
      <img src="../../../static/images/购物车.png" alt />
    </div>
    <div class="shoppingNot">
      <div>
        <img src="../../../static/images/猜你喜欢.png" alt />
      </div>
      <div></div>
    </div>-->
    <div class="shoppingMain">
      <!-- //购物车有数据时显示这个 -->
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
      <div></div>
      <div>全选</div>
      <div>
        总计:
        <span>$119</span>
      </div>
      <div>编辑</div>
      <div>去结算</div>
    </div>
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
    ...mapState({})
  },
  methods: {
    ...mapActions({})
  },
  created() {},
  mounted() {},
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
  height: 270rpx;
  width: 95%;
  display: flex;
  flex: 1;
  background: #fff;
  margin-top: 20rpx;
  & > div:nth-child(1) {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 15%;
  }
  & > div:nth-child(2) {
    display: flex;
    height: 80%;
    width: 25%;
    margin-top: 25rpx;
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
    background: red;
    flex-wrap: wrap;
  }
}
.shoppingBtn {
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
}
</style>