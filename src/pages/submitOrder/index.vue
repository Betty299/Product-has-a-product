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
      <div class="mainTime"></div>
      <div class="mainDl"></div>
      <div class="mainFzel"></div>
      <div class="mainSum"></div>
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
    <div class="orderGo">
      <div>
        <span></span>
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
  }
}
// .orderFixed {
//   position: fixed;
//   left: 0;
//   background: rgb(255, 246, 245)
// }
// 244 99 133
</style>