<template>
  <div class="lists" >
    <div class="content"  @click="bindtoshoopcar(index)" v-for="(item,index) in list"  :key="index">
      <div class="img">
        <img
          :src="item.productVo.mainImgUrl"
        />
      </div>
      <div class="details" >

        <div class="title">{{item.productVo.title}}</div>
        <div class="free">
          <label class="_span">包邮</label>
          <label class="_span">包税</label>
        </div>
        <div class="pics">
          <label class="p">￥</label>
          <label class="pi">{{item.productVo.vipPrice}}</label>
          <label class="ppp">￥{{item.productVo.supplyPrice}}</label>
          <img src="/static/images/vip.svg" />
          <label class="zp">赚￥77</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions } from "vuex"
export default {
  props: {},
  components: {},
  data() {
    return {
address:[]
    };
  },
  computed: {
    ...mapState({
      list:state=>state.shouye.list
    })
  },
  methods: {
    
    ...mapActions({
      getshouyelist:"shouye/shouyelist"
    }),
       bindtoshoopcar(index){
         console.log(index)
         this.address=index
      
        wx.navigateTo({
          url:"/pages/shoppingCar/main?lists="+this.address
        })
      },
  },
  created() {
   
    this.getshouyelist()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.lists {
  width: 100%;
  .content {
    display: flex;
    padding-right: 20rpx;
    box-sizing: border-box;
    margin: 20rpx 0;
    img {
      width: 200rpx;
      height: 216rpx;
      margin: 0 20rpx;
      display: inline-block;
      overflow: hidden;
    }
    .details {
      .title {
        display: -webkit-box;
        font-size: 28rpx;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 20rpx;
        line-height: 2;
      }
      .free {
        margin-bottom: 10rpx;
        ._span {
          border: 2rpx solid #fc5d7b;
          color: #fc5d7b;
          font-size: 20rpx;
          padding: 2rpx 6rpx;
          box-sizing: border-box;
          margin: 0 10rpx;
        }
      }
      .pics {
        color: #fc5d7b;
        line-height: 2;
        .p {
          font-size: 28rpx;
        }
        .pi {
          font-size: 44rpx;
        }
        .ppp {
          margin-left: 10rpx;
          color: #a87831;
          font-size: 20rpx;
        }
        img {
          width: 42rpx;
          height: 20rpx;
          margin: 0 6rpx;
          display: inline-block;
          overflow: hidden;
        }
        .zp {
          font-size: 20rpx;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fc5d7b;
          line-height: 24rpx;
          background: #ffe8ed;
          margin-left: 10rpx;
          padding: 4rpx 0;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>