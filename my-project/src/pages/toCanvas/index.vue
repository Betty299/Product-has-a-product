<template>
  <div class="wrap">
    <canvas canvas-id="canvas"></canvas>
    <div class="serva"><img src="/static/images/保存图片 copy 2.svg" alt="" @click="serveFn"> <img src="/static/images/分享微信.svg" alt=""></div>
  </div>
</template>
<script>
const userInfo = {
  avatar: 'https://avatars2.githubusercontent.com/u/8192412?s=40&v=4',
  name: '积纳有品小程序'
}
const qrCode = '/static/images/code.png';
const toBase64 = 'https://upapi.jinaup.com/api/open/product/image/to/base64/1.0.0';
const info = {
    result: {
      "pid": 37253,
      "basePid": 37085,
      "cid": 270,
      "cName": null,
      "bid": 15121,
      "bName": null,
      "title": "【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶",
      "shortTitle": "BY-HEALTH 汤臣倍健 牛乳钙片压片糖果 60片/瓶",
      "description": null,
      "importType": 3,
      "origin": "",
      "unitMeasure": null,
      "unitMeasureValue": null,
      "weight": 0,
      "barCode": "",
      "country": "中国",
      "isFreeShipping": 0,
      "isPresell": 0,
      "isFreeTax": 1,
      "mainImgUrl": "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
      "mainImgWidth": null,
      "mainImgHeight": null,
      "isSelf": 1,
      "isNew": 1,
      "isHot": 0,
      "isRecommend": 0,
      "deliveryCode": 0,
      "productType": 0,
      "marketPrice": 98.00,
      "supplyPrice": 44.00,
      "wholesalePrice": 0.00,
      "salesPrice": 59.00,
      "storePrice": 98.00,
      "commissionAmount": 0.00,
      "isSowing": 0,
      "sowingPrice": 0.00,
      "originalPid": 0,
      "productAscription": 1,
      "sstid": null,
      "limitedNumber": -1,
      "state": 1,
      "authState": 1,
      "userIdentity": 2,
      "uid": 51,
      "uName": null,
      "usiid": 0,
      "swid": 51,
      "settlementMethod": 1,
      "deductionPoints": 0,
      "productionDateStr": null,
      "productionDate": null,
      "sortId": 1000,
      "totalSales": 0,
      "customerService": "kefuchannelimid_719280",
      "createTime": 1555563891000,
      "updateTime": 1561459552000,
      "productStatisticsVo": null,
      "productPictureVoList": null,
      "supplierProductPictureVoList": [{
        "ppid": 686204,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 1,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }, {
        "ppid": 686205,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 2,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }, {
        "ppid": 686206,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/76bd5456369c43438655b43e88b6a20e1525954377917jh0hu5ja13299.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 3,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }],
      "estimatedTax": 0,
      "warehouseVo": null,
      "shippingTemplatesVo": null,
      "supplierProductSkuVoList": [{
        "skuKey": "3fc66ce52418393b2b1ba2d81d1ecb56",
        "pid": 37253,
        "uid": 51,
        "supplierSkuId": "20011732490",
        "skuName": "默认",
        "store": 4,
        "marketPrice": 98.00,
        "supplyPrice": 44.00,
        "wholesalePrice": 0.00,
        "salesPrice": 59.00,
        "storePrice": 98.00,
        "commissionAmount": 0.00,
        "attributeValueJson": "[{\"aid\":1,\"aname\":\"规格\",\"pid\":37253,\"valueVo\":{\"aid\":1,\"pid\":37253,\"vid\":1,\"vname\":\"默认\"}}]",
        "swid": 11133,
        "state": 1,
        "barCode": "",
        "createTime": 1555924728000,
        "updateTime": 1562119774000,
        "pids": null,
        "object": null,
        "splitOrder": null,
        "taxRate": 0.0000
      }],
      "productSeckillInfoVoList": null,
      "seckillProductInfoVoList": null,
      "productGroupInfoVoList": null,
      "attributeNameVoList": null,
      "buyNum": null,
      "discountAmount": null,
      "memberDiscountPrice": 7.45,
      "vipPrice": 51.55,
      "earnMoney": 7.45,
      "seckillEarnMoney": null,
      "skuKey": null,
      "seckillStartTime": null,
      "seckillEndTime": null,
      "productSkuVo": null,
      "shareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
      "xcxShareUrl": "/pages/go2detail/main?id=37253&fromInviteCode=2TWHAR5",
      "xcxFriendShareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
      "cooperationType": 1,
      "totalStock": 4,
      "seckillPrice": null,
      "originalPrice": null,
      "periodValue": null,
      "purchaserName": null
    },
    "message": "成功",
    "systemTime": 1562912526734,
    "res_code": 1
  }
  console.log(info.result.title)
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      canvas:null
    }
  },
  computed:{

  },
  created(){
  },
  mounted(){
    const context=wx.createCanvasContext('canvas') 
    context.rect(0,0,320,520)
    context.drawImage(userInfo.avatar,15,30)
    context.save()
    context.setFontSize(12);
    context.fillText(`${userInfo.name}分享给你的一个商品`, 60, 46);
    context.fillText("邀请码D78SACJ", 60, 63);
    context.restore();

    //绘制商品大图
    context.save();
    context.setFontSize(12);
    context.drawImage(info.result.mainImgUrl,0,70,250,225);
    
    //计算文字
    let row=0,pos=0;
    for (let index = 0; index < info.result.title.length; index++) {
      let str=info.result.title.slice(pos,index);
      if(context.measureText(str).width>226 && context.measureText(str).width<280){
        context.fillText(info.result.title.slice(pos,index),20,300+15*row);
        row++;
        pos=index;
      }
    }
    if(pos<info.result.title.length){
      context.fillText(info.result.title.slice(pos,info.result.title.length),20,300+15*row);
    }
    context.setFontSize(14)
    context.setFillStyle('red')
    context.fillText('￥',20,390)

    context.setFontSize(20)
    context.fillText(info.result.supplyPrice,34,390)
    context.setFillStyle('#999')

    context.setFontSize(14)
    context.fillText(`￥${info.result.marketPrice}`,70,390)
    context.moveTo(70,385)
    context.lineTo(100,383)
    context.stroke()
    
    context.save();
    context.setFontSize(15);
    context.fillText("长按识别二维码",20,420);

    // 绘制二维码
    context.restore();
    context.drawImage(qrCode, 160, 350, 100, 100);
    context.draw();
    
  },
   methods:{
    serveFn(){
      wx.canvasToTempFilePath({
        canvasId: 'canvas',
        quality: 1,
        fileType: 'jpg',
        complete: res=>{
          console.log('tmpFile...', res.tempFilePath);
          // 预览一下
          wx.previewImage({
            urls: [res.tempFilePath] //需要预览的图片链接列表,
          });
          // 保存到本地
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              console.log("res...",res)
             }
          })
        }
      })
    }
  },
  onLoad(){

  }
}
</script>
<style scoped lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  box-sizing:border-box;
  canvas {
    width: 320px;
    height: 530px;
    // border: 1rpx solid #fff;
  }
  .serva{
    width: 100%;
    height: 90rpx;
    display: flex;
    justify-content: space-around;
    img{
      width: 100rpx;
      height: 100rpx;
    }
  }
}
</style>