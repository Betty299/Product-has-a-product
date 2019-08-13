<template>
    <div class="wrap">
  <ul class="uls">
      <li>
          <span>个人信息</span>
          <span>&gt;</span>
      </li>
      <li> 
          <span>实名认证</span>
          <span>&gt;</span>
      </li>
      <li>
          <span>收货地址</span>
          <span>&gt;</span>
      </li>
      <li>
          <span>清除缓存</span>
          <span>&gt;</span>
      </li>
  </ul>
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
page>.wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
}
.uls{
    width:100%;
    line-height:44px;
    li{
        display:flex;
        justify-content: space-between;
        padding:0 15px;
        box-sizing: border-box;
    }
}
</style>