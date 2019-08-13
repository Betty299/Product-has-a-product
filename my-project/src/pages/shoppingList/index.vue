<template>
  <div class="wrap">
    <div class="scroll-home">
      <scroll-view class="navScroll" scroll-x>
        <li>爆款专区</li>
        <li>衣物清洁</li>
        <li>家庭清洁</li>
        <li>清洁工具</li>
        <li>家庭清洁</li>
        <li>清洁工具</li>
        <li>家庭清洁</li>
        <li>清洁工具</li>
        <li>家庭清洁</li>
      </scroll-view>
    </div>
    <div class="content">
      <div class="spTitle">爆款专区 惊喜热卖</div>
      <div class="special">
        <div class="specialbox">
          <div>
            <img src="" alt />
          </div>
          <div>
            <h4>所规白癜风跟不上东方宾馆定的积分</h4>
            <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
        <div class="specialbox">
          <div>
            <img src="" alt />
          </div>
          <div>
            <h4>所规定的积分</h4>
           <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
        <div class="specialbox">
          <div>
            <img src="" alt />
          </div>
          <div>
            <h4>所规定的积分</h4>
           <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
        <div class="specialbox">
          <div>
            <img src="" alt />
          </div>
          <div>
            <h4>所规定的积分</h4>
           <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
      </div>
      <div class="spTitle">爆款专区 惊喜热卖</div>
      <div class="specialY">
        <div class="specialYbox">
          <div class=""><img src="" alt=""></div>
          <div>
            <h4>二季度是大家介绍的扣税的</h4>
            <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
      </div>
      <div class="spTitle">爆款专区 惊喜热卖</div>
      <div class="specialthree">
        <div class="specialthreebox">
          <div>
            <img src="" alt />
          </div>
          <div>
            <h4>所规白癜风跟不上东方宾馆定的积分</h4>
            <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
        <div class="specialthreebox">
          <div>
            <img src="" alt />
          </div>
          <div>
            <h4>所规白癜风跟不上东方宾馆定的积分</h4>
            <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
        <div class="specialthreebox">
          <div>
            <img src="" alt />
          </div>
          <div>
            <h4>所规白癜风跟不上东方宾馆定的积分</h4>
            <div class="speciaText"><span>￥270</span><span>￥500</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$refs.scrollX);
  },
  components: {},

  methods: {},
  onLoad() {}
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .scroll-home {
    width: 94%;
    padding: 0 20rpx;
    height: 90rpx;
    display: flex;
    .navScroll {
      height: 100%;
      white-space: nowrap;
      display: flex;
      li {
        height: 100%;
        display: inline-block;
        width: 150rpx;
        line-height: 90rpx;
        text-align: center;
        font-size: 16px;
      }
    }
  }
  .content {
    flex: 1;
    width: 100%;
    background: #e6e6e6;
    overflow-y: auto;
    .spTitle{
      width: 100%;
      height:100rpx;
      background: none;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .speciaText{
      span{
        display:inset-block;
        margin:0 10rpx;
        &:nth-child(1){
          color:red;
          font-size: 19px;
        }
        &:nth-child(2){
          font-size: 14px;
          color:#999;
          text-decoration:line-through
        }
      }
    }
    .special {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .specialbox {
        width: 49%;
        height: 550rpx;
        box-sizing: border-box;
        background: #fff;
        border-radius: 10rpx;
        margin: 4rpx 0;
        div {
          &:nth-child(1) {
            padding: 10rpx;
            img {
              width: 100%;
              height: 400rpx;
            }
          }
          &:nth-child(2) {
            h4 {
              font-size: 16px;
              height: 80rpx;
              overflow: hidden;
            }
          }
        }
      }
    }
    .specialY{
      width: 100%;
      height: auto;
      .specialYbox{
        width: 100%;
        height: 260rpx;
        display: flex;
        background: #fff;
        justify-content: space-between;
        border-radius: 10rpx;
        padding: 20rpx 0;
        div{
          &:nth-child(1){
            flex:3;
            height: 100%;
            padding: 0 20rpx;
            img{
              width: 100%;
              height: 200rpx;
            }
          }
          &:nth-child(2){
            flex:7;
            height: 100%;
            font-size: 16px;
          }
        } 
      }
    }
    .specialthree{
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      .specialthreebox{
        width: 33%;
        height:400rpx;
        border-radius: 10rpx;
        div{
          width: 100%;
          padding: 0 3rpx;
          &:nth-child(1){
            width: 100%;
            img{
              width: 100%;
              height: 200rpx;
            }
          }
          &:nth-child(2){
            width: 100%;
            h4{
               font-size: 14px;
            }
            div>span{
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
