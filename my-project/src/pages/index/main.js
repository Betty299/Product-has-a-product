import Vue from 'vue'
import App from './index'

<<<<<<< HEAD
// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

=======
>>>>>>> 7b6746d4f1fbe860223f13f7de0cf9f63b78eb7d
const app = new Vue(App)
app.$mount()
