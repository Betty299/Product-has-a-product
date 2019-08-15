<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 10:44:35
 * @LastEditTime: 2019-08-15 14:14:26
 * @LastEditors: Please set LastEditors
 -->
<template>
  <!-- 绘制canvas -->
  <div class="canvasWrap">
    <!-- 必须有canvas-id -->
    <canvas canvas-id="share" style="width: 414px; height: 736px;"></canvas>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      info: {
        pid: 37253,
        basePid: 37085,
        cid: 270,
        cName: null,
        bid: 15121,
        bName: null,
        title:
          "【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶",
        shortTitle: "BY-HEALTH 汤臣倍健 牛乳钙片压片糖果 60片/瓶",
        description: null,
        importType: 3,
        origin: "",
        unitMeasure: null,
        unitMeasureValue: null,
        weight: 0,
        barCode: "",
        country: "中国",
        isFreeShipping: 0,
        isPresell: 0,
        isFreeTax: 1,
        mainImgUrl:
          "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
        mainImgWidth: null,
        mainImgHeight: null,
        isSelf: 1,
        isNew: 1,
        isHot: 0,
        isRecommend: 0,
        deliveryCode: 0,
        productType: 0,
        marketPrice: 98.0,
        supplyPrice: 44.0,
        wholesalePrice: 0.0,
        salesPrice: 59.0,
        storePrice: 98.0,
        commissionAmount: 0.0,
        isSowing: 0,
        sowingPrice: 0.0,
        originalPid: 0,
        productAscription: 1,
        sstid: null,
        limitedNumber: -1,
        state: 1,
        authState: 1,
        userIdentity: 2,
        uid: 51,
        uName: null,
        usiid: 0,
        swid: 51,
        settlementMethod: 1,
        deductionPoints: 0,
        productionDateStr: null,
        productionDate: null,
        sortId: 1000,
        totalSales: 0,
        customerService: "kefuchannelimid_719280",
        createTime: 1555563891000,
        updateTime: 1561459552000,
        productStatisticsVo: null,
        productPictureVoList: null,
        supplierProductPictureVoList: [
          {
            ppid: 686204,
            pid: 37253,
            imgType: 1,
            imgUrl:
              "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
            imgWidth: null,
            imgHeight: null,
            sortId: 1,
            state: 1,
            createTime: 1555563892000,
            updateTime: 1555583277000
          },
          {
            ppid: 686205,
            pid: 37253,
            imgType: 1,
            imgUrl:
              "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
            imgWidth: null,
            imgHeight: null,
            sortId: 2,
            state: 1,
            createTime: 1555563892000,
            updateTime: 1555583277000
          },
          {
            ppid: 686206,
            pid: 37253,
            imgType: 1,
            imgUrl:
              "http://haitao.nos.netease.com/76bd5456369c43438655b43e88b6a20e1525954377917jh0hu5ja13299.jpg",
            imgWidth: null,
            imgHeight: null,
            sortId: 3,
            state: 1,
            createTime: 1555563892000,
            updateTime: 1555583277000
          }
        ],
        estimatedTax: 0,
        warehouseVo: null,
        shippingTemplatesVo: null,
        supplierProductSkuVoList: [
          {
            skuKey: "3fc66ce52418393b2b1ba2d81d1ecb56",
            pid: 37253,
            uid: 51,
            supplierSkuId: "20011732490",
            skuName: "默认",
            store: 4,
            marketPrice: 98.0,
            supplyPrice: 44.0,
            wholesalePrice: 0.0,
            salesPrice: 59.0,
            storePrice: 98.0,
            commissionAmount: 0.0,
            attributeValueJson:
              '[{"aid":1,"aname":"规格","pid":37253,"valueVo":{"aid":1,"pid":37253,"vid":1,"vname":"默认"}}]',
            swid: 11133,
            state: 1,
            barCode: "",
            createTime: 1555924728000,
            updateTime: 1562119774000,
            pids: null,
            object: null,
            splitOrder: null,
            taxRate: 0.0
          }
        ],
        productSeckillInfoVoList: null,
        seckillProductInfoVoList: null,
        productGroupInfoVoList: null,
        attributeNameVoList: null,
        buyNum: null,
        discountAmount: null,
        memberDiscountPrice: 7.45,
        vipPrice: 51.55,
        earnMoney: 7.45,
        seckillEarnMoney: null,
        skuKey: null,
        seckillStartTime: null,
        seckillEndTime: null,
        productSkuVo: null,
        shareUrl:
          "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
        xcxShareUrl: "/pages/go2detail/main?id=37253&fromInviteCode=2TWHAR5",
        xcxFriendShareUrl:
          "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
        cooperationType: 1,
        totalStock: 4,
        seckillPrice: null,
        originalPrice: null,
        periodValue: null,
        purchaserName: null
      },
      userInfo: {
        avtar:
          "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
        nickName: "小奶粉......",
        code: "C5JSKWUU2888"
      }
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},

  onLoad: function(options) {
    // 开始绘制分享图片
    // 1.获取实例
    var context = wx.createCanvasContext("share");

    // 2.绘制头像和昵称
    context.drawImage(this.userInfo.avtar, 0, 0, 800, 800, 20, 33, 37.5, 37.5);
    context.save();

    context.setFillStyle("#5D9AFC");
    context.setFontSize(14);
    context.fillText(this.userInfo.nickName, 72, 43);

    context.setFillStyle("#000");
    context.fillText(
      "分享给你一个商品",
      72 + context.measureText(this.userInfo.nickName).width,
      43
    );

    context.fillText(`邀请码: ${this.userInfo.code}`, 72, 66);

    // 3.绘制商品详情
    context.restore();
    context.drawImage(this.info.mainImgUrl, 0, 0, 800, 800, 20, 100, 352, 318);

    context.save();
    context.setFillStyle("black");
    context.setFontSize(18);
    // context.fillText(this.info.title, 16, 520);
    // 计算多行文本，自动换行
    let row = 0,
      pos = 0;
    for (let i = 0; i < this.info.title.length; i++) {
      let str = this.info.title.slice(pos, i);
      if (
        context.measureText(str).width > 266 &&
        context.measureText(str).width < 280
      ) {
        context.fillText(this.info.title.slice(pos, i), 16, 420 + 15 * row);
        row++;
        pos = i;
      }
    }
    if (pos < this.info.title.length) {
      context.fillText(
        this.info.title.slice(pos, this.info.title.length),
        16,
        420 + 15 * row
      );
    }
    context.restore();
    // 4.绘制二维码
    context.save();
    context.setFillStyle("#ccc");
    context.setFontSize(17);
    context.fillText("长按识别二维码访问", 20, 552);
    context.restore();
    context.drawImage(
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2657633889,1522162978&fm=26&gp=0.jpg",
      0,
      0,
      1000,
      1000,
      323,
      500,
      124,
      111
    );

    // 绘制商品价格
    context.save();
    context.setFontSize(13);
    context.setFillStyle("#ff0000");
    context.fillText("￥", 20, 510);
    context.setFontSize(22);
    context.fillText(this.info.salesPrice, 30, 510);
    context.setFontSize(13);
    context.setFillStyle("#999");
    // info.result.marketPrice = '88888.888888';
    context.fillText(`￥${this.info.marketPrice}`,40+context.measureText(`￥${this.info.marketPrice}`).width, 510);
    context.restore();
    context.draw();
  }
};
</script>
<style scoped lang="scss">
.canvasWrap {
  width: 100%;
  height: 100%;
}
</style>