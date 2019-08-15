<template>
    <div>
      <h3>富锦</h3>
        生成图片
        <div>点击生成图片</div>
<canvas style="width: 372px;height: 600px;" canvas-id="canvas"></canvas>
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
var context=wx.createCanvasContext("canvas");
console.log(context);
context.rect(0,0,320,520);
context.drawImage("/static/images/1.png",0,0,40,40,20,12,40,40);
context.save();
context.fillText("分享",60,60);
context.fillText("邀请码",60,46);
context.restore();
context.save();
context.setFontSize(12);
wx.getImageInfo({
    src:"/static/images/1.png",
    complete:res=>{
        console.log(res);
        let rx,ry,rw,rh;
        if(res.width/res.height>220/260){
            ry=0;
            rh=res.height;
            rw=res.height/260*220;
            rx=(res.width-rw)/2;
        }else{
            rx=0;
            rw=res.width;
            rh=res.height/220*260;
            ry=(res.height-rh)/2;
        }
        context.drawImage("/static/images/1.png",0,0,res.width,res.height,50,80,220,260);
        context.draw(true,()=>{
            wx.canvasToTempFilePath({
              canvasId: 'canvas',
              quality: 1,
              fileType: 'jpg',
              complete: res=>{
                console.log('tmpFile...', res);
                // 预览一下
                wx.previewImage({
                  urls: [res.tempFilePath] //需要预览的图片链接列表,
                });
                // 保存到本地
              }
            })
        })
    }
})
const qrCode = 'https://upapi.jinaup.com/static/image/QRCode.png';
context.save();
context.setFontSize(15);
context.fillText("长按识别二维码访问",20,480);
context.restore();
context.drawImage(qrCode,0,0,1000,1000,200,400,90,90);

 // 绘制商品价格
      context.save();
      context.setFontSize(10);
      context.setFillStyle('#ff0000');
      context.fillText('￥', 20, 450);
      context.setFontSize(18);
      context.fillText(80, 30, 450);
      context.setFontSize(10);
      context.setFillStyle('#999');
      context.fillText(80, 155-context.measureText("￥89").width, 450);
      context.restore();
      context.draw();
    }
}
</script>
<style scoped lang="">

</style>
