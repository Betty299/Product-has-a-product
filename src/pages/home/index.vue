<template>
    <div class="wrap">
<ul class="uls">
    <li v-for="(item,index) in list"  :key="index" :class="ind===index?'active':null" @click="tabs(index)">{{item}}</li>
</ul>
<section>
<div class="dl">
    <div>
<<<<<<< HEAD:my-project/src/pages/home/index.vue
    <p>2019-01-17 17:18:50</p>
    <p></p>
    <p></p>
    <p>代付款</p>
    </div>
    <dl>
    <dt>
        <image src="../../static/images/1.png"></image>
    </dt>
    <dd>
        <span>邦宝适绿纸尿裤大号L164片超薄透气男女通用婴儿尿片尿不湿</span>
        <p>规格:XL</p>
        <div><span>￥52.50</span><span>x1</span></div>
    </dd>
    </dl>
</div>
<div class="total">
    <div><span>共2件商品</span><span>合计：￥52.50</span></div>
    <div>
    <button>取消订单</button>
    <button>去付款19:02</button> 
    </div>
</div>
</section>
=======
      home
>>>>>>> whp:src/pages/home/index.vue
    </div>
</template>
<script>
import tabs from "../../components/tabs";
export default {
    props:{

    },
    components:{
        tabs
    },
    data(){
        return {
           list:["全部","代付款","待发货","待收货"],
           ind:0
        }
    },
    computed:{

    },
    methods:{
            tabs(index){
                this.ind=index;
            }
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
    height:44px;
    display:flex;
    line-height:44px;
    justify-content: space-around;
}
.active{
    border-bottom:2px solid #33d6c5;
}
section{
    width:100%;
    height:100%;
    background:#f3f7f7;
}
.dl{
    width:100%;
    background:#fff;
    margin-top:3%;
}
.dl>div{
    line-height:30px;
    display:flex;
    justify-content: space-around;
    p:nth-child(1){
        font-size:14px;
    }
}
.dl>dl{
    width:100%;
    padding:5px 20px;
    box-sizing: border-box;
    display:flex;
    justify-content: space-around;
    dt{
        width:70px;
        height:70px;
        margin-top:5%;
        >image{
            width:100%;
            height:100%;
        }
    }
        dd{
            width:65%;
            height:auto;
            span{
                display:inline-block;
            }
            p{
                color:#9da0a5;
                line-height:30px;
            }
            >div{
                width:100%;
                display:flex;
                line-height:30px;
                justify-content: space-between;
            }
        }
}
.total{
    width:100%;
    border-top:1px solid #ccc;
    background:#fff;
    height:105px;
    div:nth-child(1){
        text-align: right;
        line-height:30px;
    }
    div:nth-child(2){
        width:65%;
        height:55px;
        display:flex;
      position:absolute;
      right:0;
      border:none;
      button{
          height:30px;
          text-align: center;
          line-height:30px;
      }
      button:nth-child(2){
          background:#fc5D78;
          color:#fff;
      }
    }
}
</style>