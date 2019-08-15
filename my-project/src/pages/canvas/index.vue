<template>
  <div class="wrap">
    <h3>富锦臻心礼月饼 12个/盒</h3>
    <span>[在售价]139元</span>
    <canvas style="width: 372px;height: 450px;" canvas-id="canvas"></canvas>
    <footer>
      <dl @click="photo">
        <dt>
          <img src="/static/images/6.png" alt>
        </dt>
        <dd>保存到相册</dd>
      </dl>
      <dl>
        <dt>
          <img src="/static/images/7.png" alt>
        </dt>
        <dd>微信好友</dd>
      </dl>
    </footer>
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
      photo(){
            wx.showLoading({
                title: '分享图片生成中',
            })
            setTimeout(()=>{
            wx.canvasToTempFilePath({
                fileType:"jpg",
                width:375,
                height:600,
                x:0,
                y:0,
                canvasId:"canvas",
                success:res=>{
                    wx.saveImageToPhotosAlbum({
                        filePath:res.tempFilePath,
                        success:(res)=>{
                        console.log(res);
                        wx.hideLoading();
                        }
                    })
                }
            })
            },5000)
           
      }
  },
  created() {},
  mounted() {
    const userInfo = {
      avatar: "https://avatars2.githubusercontent.com/u/8192412?s=40&v=4",
      name: "积纳有品小程序"
    };
    var context = wx.createCanvasContext("canvas");
    context.rect(0, 0, 372, 450);
    context.drawImage(userInfo.avatar, 0, 0, 40, 40, 20, 12, 40, 40);
    context.save();
    context.setFontSize(14);
    context.setFillStyle("#76a9fd");
    context.fillText("默默许愿…", 60, 30);
    context.setFontSize(14);
    context.setFillStyle("#000");
    context.fillText("分享给你一个商品", context.measureText("默默许愿…").width+60, 30);
    context.setFontSize(12);
    context.setFillStyle("#000");
    context.fillText(`邀请码:dasfa`, 60, 46);
    context.restore();
    wx.getImageInfo({
      src: "/static/images/1.png",
      complete: res => {
        console.log(res);
        context.drawImage(
          "/static/images/1.png",
          0,
          0,
          100,
          100,
          50,
          80,
          220,
          260
        );
        context.draw(true, () => {
          wx.canvasToTempFilePath({
            canvasId: "canvas",
            quality: 1,
            fileType: "jpg",
            complete: res => {
              console.log("tmpFile...", res);
              // 预览一下
              wx.previewImage({
                urls: [res.tempFilePath] //需要预览的图片链接列表,
              });
              // 保存到本地
            }
          });
        });
      }
    });
    //  const qrCode = "https://upapi.jinaup.com/static/image/QRCode.png";
    context.save();
    context.setFontSize(15);
    context.restore();
    context.drawImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565880615640&di=4e0903399c9ee15c39b3547ae1422fa9&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp127466046.jpg", 0, 0, 500, 500, 200, 330, 100, 100);
    context.save();
    context.setFontSize(16);
    context.setFillStyle("#000");
    //context.fillText("雅诗兰黛口红420钦慕唇膏 保湿滋润玫瑰豆沙", 20, 300);
    const text="雅诗兰黛口红420钦慕唇膏 保湿滋润玫瑰豆沙色顺丰免邮";
      let row = 0, pos = 0;
      for (let i=0; i<text.length; i++){
        let str = text.slice(pos, i);
        if (context.measureText(str).width > 266 && context.measureText(str).width < 280){
          context.fillText(text.slice(pos, i), 20, 300+15*row);
          row++;
          pos = i;
        }
      }
      if (pos < text.length){
        context.fillText(text.slice(pos,text.length), 20, 310+15*row);
      }
    context.restore();
    // 绘制商品价格
    context.save();
    context.setFontSize(10);
    context.setFillStyle("#ff0000");
    context.fillText("￥", 20, 380);
    context.setFontSize(18);
    context.fillText(80, 30, 380);
    context.setFontSize(10);
    context.setFillStyle("#999");
    context.fillText(80, 100 - context.measureText("￥80").width, 380);
    context.setFontSize(16);
    context.setFillStyle("#999");
    context.fillText("长按识别二维码", 20, 420);
    context.restore();
    context.draw();
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  h3 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    padding: 0 20px;
    box-sizing: border-box;
  }
  span {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  footer {
    width: 100%;
    height: 100px;
    line-height: 44px;
    display: flex;
    justify-content: space-around;
    dl {
      width: 50%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      dt {
        width: 50px;
        height: 50px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>