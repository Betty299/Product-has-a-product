<template>
  <!-- 收藏加入购物车 -->
  <div class="carButton">
    <div>
      <p>♡</p>
      <p>收藏</p>
    </div>
    <div>
      <p @click="colorPop()">加入购物车</p>
      <p>立即购买</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations("shoppingCar", ["colorPop"])
  },
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
    }
    p:nth-child(1) {
      line-height: 110rpx;
      background: linear-gradient(); /* 标准的语法 */
      text-align: center;
      background: linear-gradient(
        to right,
        rgb(216, 114, 190),
        rgb(223, 155, 208)
      ); /* 标准的语法 */
    }
    p:nth-child(2) {
      line-height: 110rpx;
      background: linear-gradient(); /* 标准的语法 */
      text-align: center;
      background: linear-gradient(
        to right,
        rgb(255, 0, 212),
        rgb(167, 40, 139)
      ); /* 标准的语法 */
    }
  }
}
</style>