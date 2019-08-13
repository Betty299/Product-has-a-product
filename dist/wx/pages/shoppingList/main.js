require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(14);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_248619ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-248619ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_248619ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shoppingList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-248619ec", Component.options)
  } else {
    hotAPI.reload("data-v-248619ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  created: function created() {
    console.log(this.$refs.scrollX);
  },

  components: {},

  methods: {},
  onLoad: function onLoad() {}
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "scroll-home"
  }, [_c('scroll-view', {
    staticClass: "navScroll",
    attrs: {
      "scroll-x": ""
    }
  }, [_c('li', [_vm._v("爆款专区")]), _vm._v(" "), _c('li', [_vm._v("衣物清洁")]), _vm._v(" "), _c('li', [_vm._v("家庭清洁")]), _vm._v(" "), _c('li', [_vm._v("清洁工具")]), _vm._v(" "), _c('li', [_vm._v("家庭清洁")]), _vm._v(" "), _c('li', [_vm._v("清洁工具")]), _vm._v(" "), _c('li', [_vm._v("家庭清洁")]), _vm._v(" "), _c('li', [_vm._v("清洁工具")]), _vm._v(" "), _c('li', [_vm._v("家庭清洁")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "spTitle"
  }, [_vm._v("爆款专区 惊喜热卖")]), _vm._v(" "), _c('div', {
    staticClass: "special"
  }, [_c('div', {
    staticClass: "specialbox"
  }, [_vm._m(0), _vm._v(" "), _c('div', [_c('h4', [_vm._v("所规白癜风跟不上东方宾馆定的积分")]), _vm._v(" "), _vm._m(1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "specialbox"
  }, [_vm._m(2), _vm._v(" "), _c('div', [_c('h4', [_vm._v("所规定的积分")]), _vm._v(" "), _vm._m(3)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "specialbox"
  }, [_vm._m(4), _vm._v(" "), _c('div', [_c('h4', [_vm._v("所规定的积分")]), _vm._v(" "), _vm._m(5)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "specialbox"
  }, [_vm._m(6), _vm._v(" "), _c('div', [_c('h4', [_vm._v("所规定的积分")]), _vm._v(" "), _vm._m(7)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "spTitle"
  }, [_vm._v("爆款专区 惊喜热卖")]), _vm._v(" "), _c('div', {
    staticClass: "specialY"
  }, [_c('div', {
    staticClass: "specialYbox"
  }, [_vm._m(8), _vm._v(" "), _c('div', [_c('h4', [_vm._v("二季度是大家介绍的扣税的")]), _vm._v(" "), _vm._m(9)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "spTitle"
  }, [_vm._v("爆款专区 惊喜热卖")]), _vm._v(" "), _c('div', {
    staticClass: "specialthree"
  }, [_c('div', {
    staticClass: "specialthreebox"
  }, [_vm._m(10), _vm._v(" "), _c('div', [_c('h4', [_vm._v("所规白癜风跟不上东方宾馆定的积分")]), _vm._v(" "), _vm._m(11)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "specialthreebox"
  }, [_vm._m(12), _vm._v(" "), _c('div', [_c('h4', [_vm._v("所规白癜风跟不上东方宾馆定的积分")]), _vm._v(" "), _vm._m(13)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "specialthreebox"
  }, [_vm._m(14), _vm._v(" "), _c('div', [_c('h4', [_vm._v("所规白癜风跟不上东方宾馆定的积分")]), _vm._v(" "), _vm._m(15)], 1)])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/zt1.PNG",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "speciaText"
  }, [_c('span', [_vm._v("￥270")]), _c('span', [_vm._v("￥500")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-248619ec", esExports)
  }
}

/***/ })
],[13]);