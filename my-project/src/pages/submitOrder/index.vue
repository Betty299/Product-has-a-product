<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 10:53:57
 * @LastEditTime: 2019-08-13 16:45:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <!-- 提交订单 -->
  <div class="orderWrap">
    <!-- <div class="orderFixed">
      <div></div>
      <div>阿斯奥术大师多按时打卡送到哪书籍的哈所打击爱神的箭爱是点击</div>
    </div>-->
    <div class="orderAddress">
      <p>+</p>
      <p>新增收获地址</p>
    </div>
    <div class="orderUser"></div>
    <div class="orderMain">
      <div class="mainTime">2019-01-01 12:54:07</div>
      <div class="mainDl">
        <dl>
          <dt></dt>
          <dd>
            <p>帮上报是暗示的奥斯迪爱啥代收点嘉实多欧艾斯大声道教师</p>
            <p>规格:XL</p>
            <p>
              <span>$52.50</span>
              <span>*1</span>
            </p>
          </dd>
        </dl>
      </div>
      <div class="mainFzel">
        <p>发货方式</p>
        <p>快递(包邮):0元</p>
      </div>
      <div class="mainSum">
        <p>订单总计</p>
        <p>
          <span>$</span>
          <span>83.50</span>
        </p>
      </div>
    </div>
    <div class="orderCoupon">
      <p>优惠卷</p>
      <p>></p>
    </div>
    <div class="oriderWx">
      <div>
        <p></p>
        <p>微信支付</p>
      </div>
      <div></div>
    </div>
    <div id="orderGo">
      <div>
        <span>总计 $</span>
        <span>78.3</span>
      </div>
      <div>
        <span>微信支付</span>
        <span>去付款</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },

  computed: {},
  methods: {},
  created() {},
  mounted() {},
  onLoad() {
    wx.setNavigationBarTitle({
      title: "提交订单"
    });
  }
};
</script>
<style scoped lang="scss">
.orderWrap {
  background: rgb(242, 246, 247);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    border-radius: 10rpx;

    margin-top: 18rpx;
    background: #ffffff;
  }
}
.orderAddress {
  width: 96%;
  margin-left: 2%;
  color: rgb(244, 99, 133);
  height: 130rpx;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  p:nth-child(1) {
    font-size: 30px;
  }
  p:nth-child(2) {
    margin-top: 15rpx;
  }
}
.orderMain {
  margin-left: 2%;
  width: 96%;
  margin-top: 10rpx;
  height: 400rpx;
  display: flex;
  flex-direction: column;
  div {
    padding: 0 0 0 8rpx;
  }
  .mainTime {
    font-size: 11px;
  }
}
.mainDl {
  width: 96%;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  dl {
    display: flex;
    dt {
      width: 30%;
      border: 1px solid red;
    }
    dd {
      padding: 0 0 0 20rpx;
      flex: 1;
      display: flex;
      flex-direction: column;

      p:nth-child(2) {
        color: #999;
        margin-top: 8rpx;
        font-size: 13px;
      }
      p:nth-child(3) {
        justify-content: space-between;
        display: flex;
        font-size: 13px;
        margin-top: 8rpx;
      }
    }
  }
}
.mainFzel {
  width: 96%;
  margin-left: 2%;
  font-size: 14px;
  border-top: 1px solid #ccc;
  height: 60rpx;
  align-items: center;
  justify-content: space-between;
}
.mainSum {
  width: 96%;
  margin-left: 2%;
  justify-content: space-between;
  font-size: 14px;
  line-height: 60rpx;
  border-top: 1px solid #ccc;
  flex: 1;
  p {
    span:nth-child(1) {
      color: rgb(244, 99, 133);
    }
    span:nth-child(2) {
      color: rgb(244, 99, 133);
      font-size: 20px;
      padding: 6rpx;
    }
  }
}
.orderCoupon {
  width: 96%;

  height: 90rpx;
  justify-content: space-between;
  padding: 0 10rpx;
  p {
    line-height: 90rpx;
  }
}
.oriderWx {
  height: 90rpx;
  justify-content: space-between;
  padding: 0 10rpx;
  display: flex;
  div:nth-child(2) {
    border-radius: 50%;
    height: 50rpx;
    width: 50rpx;
    border: 1px solid red;
  }
  div:nth-child(1) {
    flex: 1;
  }
}
.orderFixed {
  display: none;
  background: rgb(255, 246, 246);
  padding: 8rpx;
  div:nth-child(1) {
    width: 10%;
  }
  div:nth-child(2) {
    font-size: 12px;
    padding: 0 10rpx;
  }
}
#orderGo {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 0 !important;
  height: 130rpx;
  line-height: 100rpx;
  div:nth-child(1) {
    width: 50%;
    text-align: center;
    line-height: 85rpx;
    color: rgb(244, 99, 133);
    padding: 0 0 0 20rpx;
  }
  div:nth-child(2) {
    flex: 1;
    span:nth-child(1) {
      padding: 0 8rpx;
      text-align: center;
    }
    span:nth-child(2) {
      width: 210rpx;
      background: rgb(244, 99, 133);
      padding: 0 8rpx;
      color: #fff;
      text-align: center;
    }
  }
}
// 244 99 133
</style>