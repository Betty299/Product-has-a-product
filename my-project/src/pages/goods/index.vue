<template>
  <div class="wrap">
    <div>编辑</div>
    <button @click="add">新增收货地址</button>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      add(){
            wx.navigateTo({
                url: "/pages/address/main"
            }) 
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
  > div {
    text-align: right;
    padding: 0 5px;
    box-sizing: border-box;
    color:#999;
  }
  > button {
    width: 90%;
    padding: 0 5px;
    box-sizing: border-box;
    background: #33d6c5;
    color: #fff;
    margin-top: 50px;
  }
}
</style>