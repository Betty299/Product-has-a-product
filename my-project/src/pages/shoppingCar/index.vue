<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 15:38:39
 * @LastEditTime: 2019-08-13 08:30:11
 * @LastEditors: Please set LastEditors
 -->

<template>
  <!-- 购物车商品页面 -->

  <div v-if="productDetails" class="shoppingCarWrap">
    <div class="shoppingCarMain">
      <!-- 购物车轮播 -->
      <div class="shoppingCarSwiper">
        <img :src="productDetails.mainImgUrl" alt />
        <!-- <Swiper :images="images"></Swiper> -->
      </div>
      <!-- 购物车商品介绍 -->
      <div class="shoppingCarCost">
        <div>
          <p>
            <span>￥</span>
            <span>{{productDetails.salesPrice}}</span>
          </p>
          <p>
            <span>￥</span>
            <span>{{productDetails.vipPrice}}</span>
            <span>
              <img src="../../../static/images/vip.png" alt />
            </span>
          </p>
          <p @click="canvasToimg">分享赚:$499.00</p>
        </div>
        <div>
          <p>
            <span>市场价</span>
            <span class="shoppingDel">{{productDetails.marketPrice}}</span>
          </p>
          <p>
            <span>自提价</span>
            <span>$</span>
            <span>{{productDetails.supplyPrice}}</span>
          </p>
        </div>
        <div>{{productDetails.title}}</div>
        <div>
          <p>快递包邮</p>
          <p>
            仅剩
            <span>123</span>
            {{productDetails.unitMeasureValue?productDetails.unitMeasureValue:'件'}}
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
          <p @click="couponPop()">></p>
        </div>
        <div>
          <p>说明</p>
          <p>
            <span>假一赔十 | 7天无忧退回 | 一站式购起</span>
          </p>
        </div>
        <div id="shoppingText">
          <p>提示</p>
          <p>{{productDetails.description?productDetails.description:'24小时之内发货'}}</p>
        </div>
      </div>
      <!-- 购物车商品图片 -->
      <div class="shoppingCarBanner" v-for="item in productSrc" :key="item.id">
        <img :src="item.imgUrl" alt />
      </div>
      <!-- 购物车商品相关商品-->
      <div class="shoppingCarReferrer">
        <div>
          <img src="../../../static/images/text_1.png" alt />
        </div>
        <div class="shoppingCarList">
          <dl v-for="item in relaShopping" :key="item.id">
            <dt>
              <img :src="item.mainImgUrl" alt />
            </dt>
            <dd>
              <span>{{item.description?item.description:item.title}}</span>
              <span>￥{{item.marketPrice}}</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 购物车商品添加按钮 -->
    <Button />
    <!-- 选择颜色尺寸弹框 -->
    <div v-if="colorPops" class="shoppingSize">
      <div class="citySize">
        <div>
          <p>颜色,尺寸</p>
          <p @click="colorPop()">X</p>
        </div>
        <div>
          <dl>
            <dt>
              <img :src="productDetails.mainImgUrl" alt />
            </dt>
            <dd>
              <p>￥{{productDetails.salesPrice}}</p>
              <p>
                库存:
                <span>399</span>
              </p>
            </dd>
          </dl>
        </div>
        <div>
          <p>颜色</p>
          <p>
            <span>灰色</span>
            <span>灰色</span>
            <span>灰色</span>
            <span>灰色</span>
            <span>灰色</span>
            <span>灰色</span>
            <span>灰色</span>
            <span>灰色</span>
          </p>
        </div>
        <div>
          <p>尺码</p>
          <p>
            <span>l(170/92A)</span>
            <span class="lengthSize">l(170/92A)</span>
            <span>l(170/92A)</span>
            <span>l(170/92A)</span>
            <span>l(170/92A)</span>
          </p>
        </div>
        <div>
          <p>数量</p>
          <p>
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </p>
        </div>
        <div @click="colorPop()">确定</div>
      </div>
    </div>
    <!-- 优惠卷弹框 -->
    <div v-if="couponPops" class="shoppingCoupon">
      <div class="cityCoupon">
        <h5>优惠卷</h5>
        <div>可领取优惠卷</div>
        <div>
          <Coupon></Coupon>
          <Coupon></Coupon>
        </div>
        <div @click="couponPop()">完成</div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../../components/carButton";
import Coupon from "../../components/coupon";
import Swiper from "../../components/Swiper";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  props: {},
  components: {
    Button,
    Coupon,
    Swiper
  },
  data() {
    return {
      merchandise: null //商品信息（需要传入接口）
    };
  },
  
  computed: {
    ...mapState({
      productDetails: state => state.shoppingCar.productDetails,
      productSrc: state => state.shoppingCar.productSrc,
      couponPops: state => state.shoppingCar.couponPop,
      colorPops: state => state.shoppingCar.colorPop,
      relaShopping: state => state.shoppingCar.relaShopping
    })
  },

  methods: {
    ...mapMutations("shoppingCar", ["couponPop", "colorPop"]), //调用同步的显示隐藏
    ...mapActions({
      cartList: "shoppingCar/cartList",
      detailPicture: "shoppingCar/detailPicture",
      productDetail: "shoppingCar/productDetail"
    }),
    canvasToimg(){
      wx.navigateTo({
        url:"/pages/toCanvas/main"
      })
    }
  },
  created() {},
  mounted() {
    this.cartList({
      //商品详情
      pid: this.merchandise.pid
    });
    this.detailPicture({
      // 只有两张图片
      pid: 18,
      bid: 13053,
      uid: 20,
      usiid: null
    }),
      this.productDetail({
        // 产品详情图 分为0用户 1店主 2供货商
        pid: this.merchandise.pid,
        basePid: this.merchandise.basePid,
        userIdentity: 0
      }),
      this.recommend({
        //热商品
        title: this.merchandise.title
      });
  },

  onLoad(options) {
    this.merchandise = JSON.parse(options.item); //传入商品参数
    console.log(this.merchandise);
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
}
.shoppingCarMain {
  flex: 1;
  overflow-y: auto;
}
.shoppingCarSwiper {
  height: 380rpx;
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
      height: 100%;
      line-height: 100rpx;
      padding: 0 10rpx 0 0;
      display: flex;
      span:nth-child(2) {
        font-size: 15px;
        margin-left: -6rpx;
      }
      span:nth-child(1) {
        font-size: 10px;
      }
      span:nth-child(3) {
        width: 60rpx;
        height: 40rpx;
        margin-top: 12rpx;
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
    font-size: 16px;
    padding: 8rpx 8rpx 0 8rpx;
    flex: 1;
  }
  div:nth-child(4) {
    height: 60rpx;
    line-height: 20rpx;
    display: flex;
    padding: 0 0 0 10rpx;
    font-size: 11px;
    justify-content: space-between;
    color: #999;
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
.shoppingCarList {
  display: flex;
  flex-wrap: wrap;
  dl {
    width: 45%;
    height: 360rpx;
    display: flex;
    flex-direction: column;
    padding: 0 10rpx;
    margin-top: 15rpx;
    dt {
      height: 70%;
    }
    dd {
      flex: 1;
      span:nth-child(1) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      span:nth-child(2) {
        color: rgb(255, 87, 131);
      }
    }
  }
}

.Ml {
  padding: 0 0 0 20rpx;
}
.pink {
  color: pink;
}
#shoppingText {
  height: 100rpx;
  line-height: 40rpx;
}
.shoppingCarBanner {
  display: flex;
  flex-direction: column;
  flex: 1;
  img {
    height: 450rpx;
  }
}
.shoppingCarReferrer {
  display: flex;
  background: #ffffff;
  flex-direction: column;
  flex: 1;
  div:nth-child(1) {
    width: 280rpx;
    height: 110rpx;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.shoppingDel {
  text-decoration: line-through;
  margin-left: 6rpx;
}
img {
  width: 100%;
  height: 100%;
}
//  选择颜色尺寸弹框
.shoppingSize {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
.citySize {
  width: 100%;
  height: 76%;
  background: #ffff;
  position: absolute;
  z-index: 199;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    padding: 0 20rpx;
    justify-content: space-between;
    margin-top: 6rpx;
    p:nth-child(1) {
      color: rgb(154, 168, 153);
    }
  }
  div:nth-child(1) {
    height: 80rpx;
    line-height: 80rpx;
    p:nth-child(1) {
      color: #000;
    }
  }
  div:nth-child(2) {
    height: 250rpx;
    dl {
      width: 100%;
      display: flex;
      dt {
        width: 30%;
      }
      dd {
        padding: 0 20rpx;
        p:nth-child(1) {
          color: #000;
        }
        p:nth-child(2) {
          color: #ccc;
        }
      }
    }
  }
  div:nth-child(3) {
    margin-top: 20rpx;
    flex-direction: column;
    height: 250rpx;
    p:nth-child(2) {
      flex: 1;
      flex-wrap: wrap;
      margin-top: 10rpx;
      display: flex;
      span {
        height: 50rpx;
        line-height: 50rpx;
        margin-left: 15rpx;
        flex-shrink: 0;
        padding: 0rpx 30rpx;
        border-radius: 30rpx;
        border: 1px solid #ccc;
      }
    }
  }
  div:nth-child(4) {
    height: 250rpx;
    flex-direction: column;
    p:nth-child(2) {
      flex: 1;
      flex-wrap: wrap;
      margin-top: 10rpx;
      display: flex;
      span {
        font-size: 14px;
        height: 60rpx;
        line-height: 60rpx;
        margin: 15rpx 10rpx 0 0;
        flex-shrink: 0;
        padding: 0rpx 30rpx;
        border-radius: 30rpx;
        border: 1px solid #ccc;
      }
    }
  }
  div:nth-child(5) {
    height: 130rpx;
    line-height: 130rpx;
    align-items: center;
    p:nth-child(2) {
      border: 1px solid #ccc;
      width: 180rpx;
      display: flex;
      height: 60rpx;
      span {
        display: block;
        flex: 1;
        border-right: 1px solid #ccc;
        text-align: center;
        line-height: 60rpx;
      }
    }
  }
  div:last-child {
    flex: 1;
    display: block;
    margin-top: 20rpx;
    line-height: 120rpx;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background: linear-gradient(
      to right,
      rgb(255, 0, 212),
      rgb(167, 40, 139)
    ); /* 标准的语法 */
  }
}
// 优惠卷
.shoppingCoupon {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  .cityCoupon {
    width: 100%;
    height: 45%;
    background: #ffff;
    position: absolute;
    z-index: 199;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    h5 {
      width: 100%;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
    }
    div {
      padding: 0 0 0 10rpx;
    }
    div:nth-child(3) {
      margin-top: 8rpx;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
    }
    div:last-child {
      height: 110rpx;
      line-height: 110rpx;
      color: #fff;
      margin: 20rpx 0 0 0;
      font-size: 20px;
      text-align: center;
      background: linear-gradient(
        to right,
        rgb(251, 37, 211),
        rgb(248, 99, 103)
      ); /* 标准的语法 */
    }
  }
}
.lengthSize {
  color: #fff;
  background: rgb(51, 214, 197);
  border: none;
}
</style>