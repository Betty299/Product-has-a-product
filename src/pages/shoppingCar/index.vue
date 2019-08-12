
<template>
  <!-- 购物车页面 -->
  <div class="shoppingCarWrap">
    <div class="shoppingCarMain">
      <!-- 购物车轮播 -->
      <div class="shoppingCarSwiper"></div>
      <!-- 购物车商品介绍 -->
      <div class="shoppingCarCost">
        <div>
          <p>
            <span>￥</span>
            <span>22.9</span>
          </p>
          <p>
            <span>￥</span>
            <span>18.88</span>
            <span></span>
          </p>
          <p>分享赚:$499.00</p>
        </div>
        <div>
          <p>
            <span>市场价</span>
            <span>22.9</span>
          </p>
          <p>
            <span>自提价</span>
            <span>$</span>
            <span>18.88</span>
          </p>
        </div>
        <div>帮宝适啦啦库加大号XL128超薄透气婴儿纸尿裤非纸片</div>
        <div>
          <p>快递包邮</p>
          <p>
            仅剩
            <span>123</span>件
          </p>
        </div>
      </div>
      <!-- 购物车商品规格 -->
      <div class="shoppingCarSpecil">
        <div>
          <p>选择</p>
          <p>
            <span>颜色</span>
            <span class="Ml">尺码</span>
          </p>
          <p>></p>
        </div>
        <div>
          <p>领劵</p>
          <p>
            <span class="pink">每满300减35卷</span>
            <span class="pink Ml">满99减20</span>
            <span class="pink Ml">满199减20</span>
          </p>
          <p>></p>
        </div>
        <div>
          <p>说明</p>
          <p>
            <span>假一赔十 | 7天无忧退回 | 一站式购起</span>
          </p>
        </div>
        <div>
          <p>提示</p>
          <p>地区快递暂停，四川连山,阿坝,杆子地区桑快递暂停发</p>
        </div>
      </div>
      <!-- 购物车商品图片 -->
      <div class="shoppingCarBanner"></div>
      <!-- 购物车商品相关商品-->
      <div class="shoppingCarReferrer"></div>
    </div>
    <!-- 购物车商品添加按钮 -->
    <Button />
  </div>
</template>
<script>
import Button from "../../components/carButton";
export default {
  props: {},
  components: {
    Button
  },
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
.shoppingCarWrap {
  background: rgb(243, 247, 247);
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow-y: auto;
  flex-direction: column;
  .shoppingCarSwiper {
    height: 380rpx;
    background: red;
  }
}
.shoppingCarMain {
  flex: 1;
}
.shoppingCarCost {
  background: #ffffff;
  height: 280rpx;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    display: flex;
    height: 90rpx;
    line-height: 90rpx;
    p:nth-child(1) {
      color: rgb(252, 93, 123);
      padding: 0 10rpx;
      span:nth-child(2) {
        font-size: 23px;
      }
    }
    p:nth-child(2) {
      flex: 1;
      color: rgb(175, 131, 65);
      margin-left: 6rpx;
      height: 50rpx;
      line-height: 100rpx;
      padding: 0 10rpx 0 0;
      span:nth-child(2) {
        font-size: 15px;
        margin-left: -6rpx;
      }
      span:nth-child(1) {
        font-size: 10px;
      }
    }
    p:nth-child(3) {
      margin-top: 30rpx;
      font-size: 12px;
      height: 50rpx;
      line-height: 50rpx;
      border: 1px solid pink;
      color: rgb(248, 97, 122);
      padding: 0 0 0 15rpx;
      border-radius: 30rpx 0 0 30rpx;
    }
  }
  div:nth-child(2) {
    font-size: 11px;
    display: flex;
    color: #999;
    padding: 0 0 0 10rpx;
    p:nth-child(2) {
      margin-left: 20rpx;
    }
  }
  div:nth-child(3) {
    margin-top: 10rpx;
    font-size: 19px;
    padding: 0 0 0 10rpx;
  }
  div:nth-child(4) {
    display: flex;
    padding: 0 0 0 10rpx;
    font-size: 11px;
    justify-content: space-between;
    color: #999;
    margin-top: 8rpx;
  }
}
.shoppingCarSpecil {
  font-size: 15px;
  margin-top: 20rpx;
  background: #ffffff;
  height: 310rpx;
  div {
    flex: 1;
    padding: 0 0 0 10rpx;
    display: flex;
    height: 70rpx;
    line-height: 70rpx;
    font-size: 14px;
    p:nth-child(2) {
      flex: 1;
      padding: 0 0 0 40rpx;
    }
    p:last-child {
      margin-right: 20rpx;
    }
  }
}
.Ml {
  padding: 0 0 0 20rpx;
}
.pink {
  color: pink;
}
</style>