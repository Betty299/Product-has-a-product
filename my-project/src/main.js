import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import store from './store'
=======
import store from "./store";

>>>>>>> 7b6746d4f1fbe860223f13f7de0cf9f63b78eb7d
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store=store;
const app = new Vue(App)
app.$mount()
