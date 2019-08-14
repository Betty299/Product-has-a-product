import home from "./modules/home.js";
import shouye from "./modules/shouye.js";
import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      home,
      shouye
    },
    plugins: [CreateLogger()]
 });
