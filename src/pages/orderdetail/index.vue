<template>
    <div class="wrap">
        <section>

<div class="title">
    <h3>待收货</h3>
    <div>
        <span>订单编号：</span>
        <span>19032431584315431</span>
        <span>复制</span>
    </div>
    <div>
        <span>付款时间：</span>
        <span>2019-01-10 16:07:51</span>
    </div>
</div>
<div class="title-bar">
    <div>
        <span>李倩倩</span>
        <span>15278383560</span>
    </div>
    <div>北京市朝阳区骄傲中心A座902室</div>
    <image src="../../static/images/bj.png"></image>
  <div class="dl">
    <div>
    <p>2019-01-17 17:18:50</p>
    <p></p>
    <p></p>
    <p></p>
    </div>
    <dl>
    <dt>
        <image src="../../static/images/1.png"></image>
    </dt>
    <dd>
        <span>邦宝适绿纸尿裤大号L164片超薄透气男女通用婴儿尿片尿不湿</span>
        <p>规格:XL</p>
        <div><span>￥52.50</span><span>x1</span></div>
        <button>申请退款</button>
    </dd>
    </dl>
</div>
   <ul class="uls">
       <li><span>运费</span><span>￥0</span></li>
       <li><span>税</span><span>￥0</span></li>
       <li><span>支付方式</span><span>支付宝支付</span></li>
       <li><span>订单总计</span><span>￥39</span></li>
       <li><span>实付金额</span><span>￥39</span></li>
   </ul>
   <div class="btn">
   <button>联系客服</button>
   <button>确认收货</button>
   </div>
    </div>
    </section>

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
    background:#f3f7f7;
}
section{
    width:100%;
    height:100%;
    padding:0 10px;
    overflow-y: auto;
    box-sizing: border-box;
    .title{
    margin-top:3%;
    width:100%;
    height:auto;
    line-height:30px;
    background:#fff;
    box-sizing: border-box;
    h3{
        font-weight: bold;
    }
    >div{
        font-size:12px;
    }


}
.title-bar{
    width:100%;
    margin-top:3%;
    line-height:30px;
    background:#fff;
    >div{
        span{
        font-size:14px;
        }
        span:nth-child(1){
            font-weight: bold;
        }
        font-size:12px;
    }
    image{
        width:100%;
        height:10px;
    }
    .dl{
    width:100%;
    background:#fff;
}
.dl>div{
    line-height:30px;
    display:flex;
    justify-content: space-around;
    p:nth-child(1){
        font-size:12px;
        color:alpha($color: #000000);
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
            button{
                height:30px;
                line-height:30px;
                float:right;
            }
        }
}
.uls{
    width:100%;
    border-top:1px solid #f3f7f7;
    border-bottom:1px solid #f3f7f7;
    li{
        line-height:30px;
        width:100%;
        display: flex;
        justify-content: space-between;
    }
}
.btn{
       width:100%;
        height:55px;
        display:flex;
      position:absolute;
      background:#fff;
      right:0;
      border:none;
      button:nth-child(1){
       margin-left:30%;
      }
      button{
          width:30%;
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
}

</style>