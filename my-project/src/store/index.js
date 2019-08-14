import home from "./modules/home.js";
<<<<<<< HEAD
import shouye from "./modules/shouye.js";
=======
>>>>>>> 7b6746d4f1fbe860223f13f7de0cf9f63b78eb7d
import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
<<<<<<< HEAD
      home,
      shouye
    },
    plugins: [CreateLogger()]
 });
=======
      home
    },
    plugins: [CreateLogger()]
 });
>>>>>>> 7b6746d4f1fbe860223f13f7de0cf9f63b78eb7d
