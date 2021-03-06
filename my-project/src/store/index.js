import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'
import shoppingCar from './modules/shoppingCar'
import home from './modules/home.js'
import shouye from './modules/shouye.js'
import search from './modules/search'
Vue.use(Vuex)
export default new Vuex.Store({
  // 模块
  modules: {
    shoppingCar,
    home,
    shouye,
    search
  },
  //  插件
  plugins: [CreateLogger()]
})
