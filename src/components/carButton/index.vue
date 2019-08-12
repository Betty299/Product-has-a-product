
<template>
  <div class="carButton">
    <div>收藏</div>
    <div>
      <p>加入购物车</p>
      <p>立即购买</p>
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
      title: "商品详情"
    });
  }
};
</script>
<style scoped lang="scss">
.carButton {
  width: 100%;
  display: flex;
  height: 110rpx;
  
  line-height: 110rpx;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 200rpx;
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    p {
      flex: 1;
      text-align: center;
    }
  }
}
</style>