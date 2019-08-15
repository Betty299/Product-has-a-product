<template>
  <div class="wrap">
    <div class="header">
      <img src="/static/images/header.png" alt="">
    </div>
    <div class="submitCode">
      <div><input type="text" placeholder="请输入邀请码"><div class="submit">提交</div></div>
    </div>
    <div>

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

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .header{
    width: 100%;
    height: 300rpx;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .submitCode{
    width: 100%;
    height: 90rpx;
   
    padding:0 20rpx;
    box-sizing: border-box;
    >div{
      width: 100%;
      height: 90rpx;
      display: flex;
      align-items: center;
      border:1rpx solid #ccc;
      border-radius: 10rpx;
      input{
        flex:1;
        text-align: center;
      }
      .submit{
        width: 160rpx;
        height: 100%;
        border-left: 1rpx solid #ccc;
        text-align: center;
        background: rgb(147,230,222);
        border:0;
        color:#fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
  }
}
</style>