<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1350309 */
  src: url('//at.alicdn.com/t/font_1350309_10tenm9iqbo.eot');
  src: url('//at.alicdn.com/t/font_1350309_10tenm9iqbo.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1350309_10tenm9iqbo.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1350309_10tenm9iqbo.woff') format('woff'),
  url('//at.alicdn.com/t/font_1350309_10tenm9iqbo.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1350309_10tenm9iqbo.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
page{
  width: 100%;
  height: 100%;
}
</style>
