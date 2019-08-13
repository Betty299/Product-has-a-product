<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 23:44:26
 * @LastEditTime: 2019-08-13 08:28:32
 * @LastEditors: Please set LastEditors
 -->

<template>
  <!-- 优惠卷 -->
  <div class="coupon">
    <div>
      <p>
        <span>￥</span>
        <span class="couponBig">180</span>
      </p>
      <p class="couponSmal">满1000元使用</p>
    </div>
    <div class="couponRight">
      <p>新人礼品满1000元减100元</p>
      <p>2018.12.31到期</p>
    </div>
    <div>领取</div>
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
  mounted() {}
};
</script>
<style scoped lang="scss">
.coupon {
  border-radius: 20rpx;
  margin-top: 20rpx;
  height: 140rpx;
  border: 1px solid red;
  width: 95%;
  display: flex;
  align-items: center;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30%;
  }
  .couponRight {
    padding: 0 0 0 10rpx;
    height: 110rpx;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 40%;
    border-left: 1px dashed pink;
    p:nth-child(1) {
      font-size: 13px;
    }
    p:nth-child(2) {
      font-size: 10px;
    }
  }
  div:nth-child(3) {
    text-align: center;
    background: rgb(253, 93, 123);
    color: #ffffff;
    border-radius: 10rpx;
    height: 50rpx;
    width: 100rpx;
    padding: 0 15rpx;
    margin-left: 20rpx;
  }
}
.couponBig {
  font-size: 20px;
}
.couponSmal {
  font-size: 12px;
}
</style>