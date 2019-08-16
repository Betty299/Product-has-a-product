<template>
    <div class="wrap">
   <nav class="_scroll">
      <li 
      v-for="(item,index) in tab"
      :key="index"
      :class="[index===ind?'active':'null']"
      @click="click(item,index)"
      >{{item.cname}}</li>
    </nav>
    <!-- <div class="dls">
        <dl>
            <dt></dt>
            <dd>纸尿裤</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>拉拉裤</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>纸尿片</dd>
        </dl>
    </div> -->
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
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
  ...mapState({
      tab:state => state.shouye.tab,
      ind:state => state.shouye.ind
    })
    },
    methods:{
 ...mapActions({
      getData: 'shouye/getData',
      getNavData:'shouye/getNavData',
      getLData:'shouye/getLData',
      getInd:'shouye/getInd'
    }),
    click(item,index){
      this.getInd({index,item})
    }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.wrap{
    width:100%;
    height:100%;
    background: rgb(247, 243, 243);
     ::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
     ._scroll {
    width: 100%;
    display: flex;
    white-space: nowrap;
    height: 100rpx;
    background: #fff;
    overflow-x: auto;
    ._li {
      font-size: 32rpx;
      display: inline-block;
      height: 100rpx;
      line-height: 94rpx;
      text-align: center;
      color: #484848;
      box-sizing: border-box;
      margin: 0 20rpx;
      background: #fff;
    }
    .active {
      border-bottom: 6rpx solid #56d2bf;
      line-height: 94rpx;
      font-weight: 500;
      color: #56d2bf;
    }
  }
  .dls{
      width:100%;
      display:flex;
      background:#fff;
      dl{
          width:25%;
          height:100px;
          dt{
              width:50px;
              height:50px;
              img{
                  width:100%;
                  height:100%;
              }
          }
          dd{
              text-align: center;
          }
      }
  }
}
</style>