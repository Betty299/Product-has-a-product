<template>
  <div class="wrapper">
      <div class="top">
        <image src="/static/images/logBg.png"></image>
      </div>
      <div class="nav">
        <div class="txt">
            <h1>我的订单</h1>
            <div class="dl">
              <dl v-for="(item,index) in list" data-index='ind'
              :key="index" @click="bindClick(item.id)">
                    <dt> <image :src='item.img'></image></dt>
                    <dd>{{item.txt}}</dd>
                </dl>
            </div>
        </div>
      </div>
      <div class="botton">
        <p v-for="(item,index) in listData" :key="index" @click="bindP(item.id)">
           <span>
                <image :src="item.img"></image>
                <b>{{item.tent}}</b>
           </span>
            <span class="span"> > </span>
        </p>
      </div>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
        list:[
          {
            img:"/static/images/dfk.png",
            txt:"待付款",
            id:1
          }, {
            img:"/static/images/daifahuo.svg",
            txt:"待发货",
            id:2
          }, {
            img:"/static/images/daishouhuo.svg",
            txt:"待收货",
            id:3
          }, {
            img:"/static/images/tuikuan.svg",
            txt:"退款退货",
            id:4
          }
        ],
        listData:[
          {
            img:"/static/images/yhj.png",
            tent:"我的优惠券",
            id:1
          },
          {
            img:"/static/images/dz.png",
            tent:"收货地址",
            id:2
          },{
            img:"/static/images/kf.png",
            tent:"联系客服",
            id:3
          },{
            img:"/static/images/sm.png",
            tent:"实名认证",
            id:4
          }
        ]
    }

  },
  computed:{

  },
  methods:{
      bindClick(id){
        wx.navigateTo({
          url:"/pages/home/main?id="+id
        })
      },
      bindP(id){
        if(id===1){
            wx.navigateTo({
              url:"/pages/discounts/main"
            })
        }else if(id===2){
            wx.navigateTo({
              url:"/pages/goods/main"
            })
        }
        else if(id===3){
            wx.navigateTo({
                url: "/pages/relation/main"
            })
        }
        else{
          wx.navigateTo({
            url:"/pages/name/main"
          })
        }
      }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: 100%;
  background: rgb(247, 243, 243);
}
.top{
  width: 100%;
  // height: 260rpx; 
  image{
    width: 100%;
    height:250rpx;
  }
}
.nav{
   width: 90%;
   padding:5px 5px;
   box-sizing: border-box;
  .txt{
    background: #fff;
    margin-top:-60rpx;
    position: absolute;
    top:220rpx;
    width: 97%;
    height:230rpx;
  >h1{
    font-size: 35rpx;
    margin-left:30rpx;
    padding-top:20rpx;
  }
}
  .dl{
      padding-top:10rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    dl{
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      dt{
        width: 80rpx;
        height: 80rpx;
        >image{
          width: 100%;
          height: 100%;
        }
      }
      dd{
        font-size: 28rpx;
        color:rgb(143, 142, 142);
      }
    }
  }
}
.botton{
  background: #fff;
  margin-top:160rpx;
  padding:0 50rpx; 

  p{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:100rpx;
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      >image{
      width: 40rpx;
      height: 40rpx;
      margin-right:30rpx;
    }
}
    span{
     
      font-size: 28rpx;
    }
  }
  .span{
    font-size: 150rpx;
    color: #ccc;
  }
}

</style>