<template>
    <div class="wrap">
<ul class="uls">
    <li v-for="(item,index) in list"  :key="index" :class="ind===index?'active':null" @click="tabs(index)">{{item}}</li>
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
            list:["未使用","已使用","已过期"],
            ind:0
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
</style>