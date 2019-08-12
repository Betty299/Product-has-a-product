
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
  margin-top: 10rpx;
  height: 110rpx;
  border: 1px solid red;
  width: 95%;
  display: flex;
  // align-items: center;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    text-align: center;
    // height: 100%;
    width: 40%;
  }
  .couponRight {
    height: 110rpx;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 90%;
    border-left: 1px dashed pink;
  }
}
.couponBig {
  font-size: 20px;
}
.couponSmal {
  font-size: 12px;
}
</style>