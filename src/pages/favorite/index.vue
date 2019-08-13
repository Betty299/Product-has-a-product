<template>
    <div class="wrap">
<dl class="dl">
     <dt>
        <image src="../../static/images/1.png"></image>
    </dt>
    <dd>
        <span>邦宝适绿纸尿裤大号L164片超薄透气男女通用婴儿尿片尿不湿</span>
        <span>￥52.50</span>
    </dd>
</dl>
<dl class="dl">
     <dt>
        <image src="../../static/images/1.png"></image>
    </dt>
    <dd>
        <span>邦宝适绿纸尿裤大号L164片超薄透气男女通用婴儿尿片尿不湿</span>
        <span>￥52.50</span>
    </dd>
</dl>
<dl class="dl">
     <dt>
        <image src="../../static/images/1.png"></image>
    </dt>
    <dd>
        <span>邦宝适绿纸尿裤大号L164片超薄透气男女通用婴儿尿片尿不湿</span>
        <span>￥52.50</span>
    </dd>
</dl>
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
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
     background:#f3f7f7;
}
.dl{
    width:100%;
    padding:5px 10px;
    box-sizing: border-box;
    display:flex;
    justify-content: space-around;
    background:#fff;
    dt{
        width:70px;
        height:70px;
        text-align: center;
        margin-top:5px;
        >image{
            width:100%;
            height:100%;
        }
    }
        dd{
            width:60%;
            span{
                display:inline-block;
            }
            span:nth-child(1){
                color:#757575;
            }
            span:nth-child(2){
                color:red;
            }
          
        }
}
</style>