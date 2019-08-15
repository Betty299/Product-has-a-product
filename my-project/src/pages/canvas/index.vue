<template>
  <!-- 绘制canvas -->
  <div class="canvasWrap">
    <!-- 必须有canvas-id -->
    <canvas canvas-id="canvas" :style="{width: width + 'px', height: height+'px'}"></canvas>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      width: 500,
      height: 500
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(e) {
        //获取并操作canvas
        var context = wx.createCanvasContext("canvas");
        //图片地址 x轴 y轴 图片宽 图片高
        context.drawImage(
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1938482571,2420691429&fm=26&gp=0.jpg",
          0,
          0,
          e.windowWidth,
          e.windowHeight
        );
        //字体大小
        context.setFontSize(16);
        //字体颜色
        context.fillStyle = "red";
        //什么字 x轴 y轴
        context.fillText("耿增的画图", 40, 40);
        //开始绘制
        context.draw();
      }
    });
  }
};
</script>
<style scoped lang="scss">
.canvasWrap {
  width: 100%;
  height: 100%;
}
</style>