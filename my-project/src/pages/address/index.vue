<template>
  <form @submit="submit" report-submit="true">
    <ul>
      <li>
        <input type="name" name="name" v-model="name" placeholder="收货人" />
        <span>></span>
      </li>
      <li>
        <input type="phone" name="phone" v-model="phone" placeholder="手机号" />
        <span>+86></span>
      </li>
      <li>
        <picker mode="region" :value="region" :custom-item="customItem" @change="RegionChange">
          <h6>
            <input type="address"  name="region" v-model="region" placeholder="所在地址" />
            <span>></span>
          </h6>
        </picker>
      </li>
      <li>
        <textarea name="textarea" v-model="textarea" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等">...</textarea>
        <span>></span>
      </li>
      <p>
        <b>标签</b>
        <span
          @click="addressTag=index"
          :class="index===addressTag?'active':''"
          v-for="(item,index) in typeData"
          :key="index"
        >{{item}}</span>
      </p>
      <h3>
        <b>设为默认样式</b>
        <switch name="switch"  @click="state= ++ state %2" :checked='state===0'></switch>
      </h3>
    </ul>
    <button form-type="submit">保存</button>
  </form>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
      region: ["北京市", "北京", "海淀区"],
      typeData: ["家", "公司", "学校", "其它"],
      customItem: "全部",
      provinceId: "", //省的Id
      cityId: "", //市的Id
      areaId: "", //区的Id
      flags: false,
      uaid: 0,
      name: "",
      phone: "",
      textarea: "",
      oldminute: "",
      addressTag:'',
      state: 1,
    };
  },
  computed: {},
  methods: {
    //城市选择器
    RegionChange(e) {
      let arrRegion = e.mp.detail.value;
      if(arrRegion[0]==='全部'){
          wx.showToast({
              title:"请重新选择",
              icon:"none"
          })
          
      }else{
          this.region = arrRegion
          this.provinceId = e.mp.detail.code[0]
          this.cityId = e.mp.detail.code[1]
          this.areaId = e.mp.detail.code[2]
          this.provinceName = arrRegion[0]
          this.cityName = arrRegion[1]
          this.areaName = arrRegion[2]
      }
    },
    ...mapActions({
      addAddress:'address/addAddress'
    }),
    //保存按钮
   async submit(e) {
      // let reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
      // if (!this.name) {
      //   wx.showToast({
      //     title: "请输入收货人", //提示的内容,
      //     icon: "none" //图标,
      //   });
      //   return;
      // }
      // if (!this.phone) {
      //   wx.showToast({
      //     title: "请输入手机号码", //提示的内容,
      //     icon: "none" //图标,
      //   });
      //   return;
      // }
      // if(!reg.test(this.phone)){
      //   wx.showToast({
      //     title: "请输入正确的手机号码", //提示的内容,
      //     icon: "none" //图标,
      //   });
      //   return;
      //   return
      // }
      // if (!this.textarea) {
      //   wx.showToast({
      //     title: "请输入详细地址", //提示的内容,
      //     icon: "none" //图标,
      //   });
      //   return;
      // }
      let addressData= {
        provinceId: this.provinceId, //省id           provinceId: 120000
        provinceName: this.region[0], //省名称this.provinceName   provinceName: 天津市
        cityId: this.cityId, //市id cityId: 120100
        cityName: this.region[1], //市名称this.cityName   cityName: 天津市
        areaId: this.areaId, //区域idthis.areaId     areaId: 120103
        areaName: this.region[2], //区名称this.areaName    areaName: 河西区
        address:e.mp.detail.value.textarea, //具体地址    address: 撒旦
        consignee: e.mp.detail.value.name, //收货人    consignee: zhen郑豪
        consigneePhone: e.mp.detail.value.phone, //收货人手机号  consigneePhone: 18501255505
        addressTag: this.addressTag + 1 + "", //地址标签 1.家 2.公司 3.学校 4.其他  addressTag: 1
        state: this.state //0默认地址 1非默认地址   state: 1
      };
      this.addAddress(addressData)
      console.log('1111111',data)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
h6 {
  width: 200%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    color: #ccc;
  }
}
form {
  background: rgb(228, 227, 227);
}
ul {
  width: 100%;
  background: #fff;
  li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(231, 217, 217);
    font-size: 30rpx;

    > input {
    }
    > textarea {
      width: 616rpx;
      height: 100rpx;
      margin: 26rpx 10rpx;
    }
    > span {
      color: #ccc;
    }
  }
  p {
    margin-top: 60rpx;
    color: rgb(133, 131, 131);
    font-size: 30rpx;
    padding: 20rpx;
    b {
    }
    > span {
      color: #000;
      margin-top: 20rpx;
      display: inline-block;
      width: 20%;
      height: 50rpx;
      margin-right: 34rpx;
      text-align-last: center;
      line-height: 50rpx;
      border: 1px solid #ccc;
      border-radius: 300rpx;
    }
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx;
    box-sizing: border-box;
    font-size: 28rpx;
  }
}

button {
  margin-top: 60rpx;
  width: 90%;
  height: 100rpx;
  background: #33d6c5;
  border-radius: 14rpx;
  color: #fff;
  font-size: 36rpx;
  margin-left: 5%;
  margin-top: 120rpx;
}
.active {
  background: #33d6c5;
  color: #fff;
}
</style>