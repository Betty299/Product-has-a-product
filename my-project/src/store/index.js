import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'
import shoppingCar from './modules/shoppingCar'
Vue.use(Vuex)
export default new Vuex.Store({
  // 模块
  modules: {
    shoppingCar
  },
  //  插件
  plugins: [CreateLogger()]
})
