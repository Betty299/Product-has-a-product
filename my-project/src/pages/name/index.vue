<template>
  <div class="wrap">
    <div class="name">
      <span>真实姓名</span>
      <span>
        <input type="text" placeholder="请输入身份证姓名" v-model="name" @input="change">
      </span>
    </div>
    <div class="name">
      <span>身份证号</span>
      <span>
        <input type="number" placeholder="请输入身份证号" v-model="phone" @input="change">
      </span>
    </div>
    <div class="username">
      <p>
        上传身份证照片
        <span>(图片png、jpg、大小不超过5M)</span>
      </p>
      <div>
        <dl @click="up" v-if="uploaderList.length">
          <dt  class="dls">
            <img :src="uploaderList[0]" alt="" >
          </dt>
        </dl>
        <dl @click="up" v-else>
          <dt>
            <img src="/static/images/creame.png" alt="" >
          </dt>
           <dd>正面照片</dd>
        </dl>
           <dl @click="reverse" v-if="useImage.length">
          <dt class="dls">
            <img :src="useImage[0]" alt>
          </dt>
        </dl>
        <dl @click="reverse" v-else>
          <dt>
            <img src="/static/images/creame.png" alt>
          </dt>
          <dd>反面照片</dd>
        </dl>
      </div>
    </div>
    <div class="content">
      <h3>为什么需要实名认证?</h3>
      <ul>
        <li>根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看)</li>
        <li>实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。</li>
      </ul>
    </div>
    <button>保存</button>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      name:"",
      phone:"",
      uploaderList:[],
      useImage:[]
    };
  },
  computed: {},
  methods: {
    change(){
      console.log(this.name,this.phone);
    },
    up(){
      wx.chooseImage({
        count:1,
        sizeType:["original","compressed"],
        sourceType:["album","camera"],
        success:(res)=>{
          console.log(res);
          let tempFilePaths=res.tempFilePaths;
         this.uploaderList=tempFilePaths;
        }
      })
     
    },reverse(){
        wx.chooseImage({
        count:1,
        sizeType:["original","compressed"],
        sourceType:["album","camera"],
        success:(res)=>{
          let tempFilePaths=res.tempFilePaths;
         this.useImage=tempFilePaths;
        }
      })
    }
  },
  created() {

  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f3f7f7;
  .name {
    width: 100%;
    line-height: 44px;
    display: flex;
    padding: 0 5px;
    box-sizing: border-box;
    background: #fff;
    span:nth-child(1) {
      height: 44px;
      line-height: 44px;
      font-weight: bold;
    }
    span:nth-child(2) {
      height: 44px;
      width: 75%;
      margin-top: 5px;
      margin-left: 10px;
      input {
        display: inline-block;
        width: 100%;
      }
    }
  }
  .username {
    margin-top: 10px;
    width: 100%;
    height: 150px;
    background: #fff;
    p {
      width: 100%;
      height: 30px;
      line-height: 30px;
      span {
        color: #ccc;
      }
    }
    > div {
      width: 100%;
      display: flex;
        dl {
        width: 40%;
        height: 100px;
        margin-left: 25px;
        border:1px dashed #64e1d3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        dt {
          width: 50px;
          height: 50px;
          > img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
          >.dls{
       flex:1;
       width:100%;
        >img{
           width: 100%;
            height: 100%;
            border-radius: 0;
        }
      }
        dd {
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }
  .content {
    width: 100%;
    h3 {
      line-height: 30px;
      text-align: center;
    }
    ul {
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      li {
        color: #999da2;
        margin-top:10px;
      }
    }
  }
  button{
      width:90%;
      text-align: center;
      color:#fff;
      background:#64e1d3;
      border-radius:17px;
      margin:10% 5%;
  }
}
</style>