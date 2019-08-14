<template>
  <div class="wrap">
    <div @click="toMore">查看更多</div>
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
    toMore(){
      wx.navigateTo({
        url:"/pages/home/main"
      })
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
  width: 100%;
  height: 100%;
}
</style>