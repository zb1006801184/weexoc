// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 258);
/******/ })
/************************************************************************/
/******/ ({

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(259)
)

/* script */
__vue_exports__ = __webpack_require__(260)

/* template */
var __vue_template__ = __webpack_require__(261)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhubiao/work/weexoc/src/components/zbtaskdetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-19f54716"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = {
  "firstCell": {
    "height": "800"
  },
  "titleStyle": {
    "height": "98",
    "color": "#222222",
    "fontSize": "38",
    "lines": 2,
    "marginLeft": "30",
    "marginTop": "40",
    "marginRight": "30"
  },
  "userInfoStyle": {
    "height": "88"
  },
  "topDiv1": {
    "flexDirection": "row",
    "height": "88",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "30"
  },
  "headLeft1": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginLeft": "30"
  },
  "headName1": {
    "height": "88",
    "width": "160",
    "justifyContent": "center",
    "alignContent": "center",
    "marginLeft": "20"
  },
  "nameStyle1": {
    "fontSize": "28",
    "color": "#B98080"
  },
  "timeStyle1": {
    "fontSize": "20",
    "color": "#999999"
  },
  "headImage1": {
    "backgroundColor": "#0000FF",
    "marginLeft": "30",
    "borderRadius": 44
  },
  "rightButton": {
    "width": "118",
    "height": "56",
    "fontSize": "24",
    "backgroundColor": "#FB3C3C",
    "borderRadius": "6",
    "textAlign": "center",
    "justifyContent": "center",
    "color": "#FFFFFF"
  },
  "rightDivStyle": {
    "justifyContent": "center",
    "alignItems": "center",
    "maxWidth": "118",
    "height": "58",
    "marginRight": "30"
  },
  "contentTextStyle": {
    "color": "#666666",
    "fontSize": "28",
    "left": "30",
    "top": "30",
    "marginRight": "30"
  },
  "moneyStyle": {
    "color": "#ffae00",
    "fontSize": "28",
    "top": "30",
    "left": "30"
  },
  "contentMoreImageStyle": {
    "height": "152",
    "top": "50",
    "flexDirection": "row"
  },
  "MoreImageCell": {
    "width": "224",
    "height": "152",
    "backgroundColor": "#8B4513"
  },
  "bottomDivStyle": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "bottomButtonStyle": {
    "backgroundColor": "#8B4513",
    "top": "94",
    "width": "224",
    "height": "78",
    "borderRadius": "39"
  },
  "panel": {
    "width": "750",
    "height": "264",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#eeeeee",
    "backgroundColor": "#FFFFFF"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  },
  "topDiv": {
    "flexDirection": "row",
    "height": "90",
    "justifyContent": "space-between"
  },
  "headImage": {
    "backgroundColor": "#FF6347",
    "marginLeft": "30",
    "marginTop": "30",
    "borderRadius": 35
  },
  "headLeft": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "headName": {
    "height": "90",
    "width": "160",
    "justifyContent": "center",
    "alignContent": "center",
    "marginLeft": "20",
    "marginTop": "20"
  },
  "contentText": {
    "marginLeft": "120",
    "marginTop": "30",
    "fontSize": 26,
    "color": "#444444"
  },
  "nameStyle": {
    "fontSize": "28",
    "color": "#B98080"
  },
  "timeStyle": {
    "fontSize": "20",
    "color": "#999999"
  },
  "rightStyle": {
    "width": "200",
    "height": "40",
    "flexDirection": "row",
    "marginTop": "50"
  },
  "numberStyle": {
    "fontSize": "26",
    "color": "#bbbbbb",
    "marginRight": "20"
  },
  "buttonStyle": {
    "marginRight": "10",
    "backgroundColor": "#41B883"
  },
  "bottomStyle": {
    "marginLeft": "120",
    "flexDirection": "row",
    "marginTop": 20
  },
  "bottomCommentStyle": {
    "color": "#999999",
    "fontSize": "20"
  },
  "bottomeTimeStyle": {
    "color": "#999999",
    "fontSize": "20",
    "marginLeft": "40"
  }
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  data: function data() {
    return {
      zan: 'assets:zan',
      lists: ['1', '2', '3', '4', '5', '6', '7']
    };
  }
};

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', [_vm._m(0), _vm._l((_vm.lists), function(index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('div', {
      staticClass: ["topDiv"]
    }, [_vm._m(1, true), _c('div', {
      staticClass: ["rightStyle"]
    }, [_c('image', {
      staticStyle: {
        width: "32px",
        height: "32px",
        marginRight: "10px"
      },
      attrs: {
        "src": _vm.zan
      }
    }), _c('text', {
      staticClass: ["numberStyle"]
    }, [_vm._v("999")]), _c('text', {
      staticClass: ["numberStyle"]
    }, [_vm._v("举报")])])]), _vm._m(2, true), _vm._m(3, true)])])
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["firstCell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["titleStyle"]
  }, [_vm._v("怎么样用手机拍出丁达尔光的效果怎么样用手机拍出丁达尔光的效果？")]), _c('div', {
    staticClass: ["topDiv1"]
  }, [_c('div', {
    staticClass: ["headLeft1"]
  }, [_c('image', {
    staticClass: ["headImage1"],
    staticStyle: {
      width: "88px",
      height: "88px"
    }
  }), _c('div', {
    staticClass: ["headName"]
  }, [_c('text', {
    staticClass: ["nameStyle"]
  }, [_vm._v("浅浅最爱笑")]), _c('text', {
    staticClass: ["timeStyle"]
  }, [_vm._v("22小时前")])])]), _c('div', {
    staticClass: ["rightDivStyle"]
  }, [_c('text', {
    staticStyle: {
      width: "118px",
      height: "56px",
      fontSize: "24px",
      backgroundColor: "#FB3C3C",
      borderRadius: "6px",
      textAlign: "center",
      justifyContent: "center",
      color: "white"
    }
  }, [_vm._v("关注")])])]), _c('text', {
    staticClass: ["contentTextStyle"]
  }, [_vm._v("给手机充电是我们每天必须要做的事情，也许你觉得拿起充电器随便冲一下就搞定了，@马云 真的是这样吗?其实不然，很多朋友的充电方式")]), _c('text', {
    staticClass: ["moneyStyle"]
  }, [_vm._v("悬赏：4个长城币")]), _c('div', {
    staticClass: ["contentMoreImageStyle"]
  }, [_c('image', {
    staticClass: ["MoreImageCell"],
    staticStyle: {
      marginLeft: "30px"
    }
  }), _c('image', {
    staticClass: ["MoreImageCell"],
    staticStyle: {
      marginLeft: "10px"
    }
  }), _c('image', {
    staticClass: ["MoreImageCell"],
    staticStyle: {
      marginLeft: "10px"
    }
  })]), _c('div', {
    staticClass: ["bottomDivStyle"]
  }, [_c('image', {
    staticClass: ["bottomButtonStyle"]
  }), _c('image', {
    staticClass: ["bottomButtonStyle"]
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["headLeft"]
  }, [_c('image', {
    staticClass: ["headImage"],
    staticStyle: {
      width: "70px",
      height: "70px"
    }
  }), _c('div', {
    staticClass: ["headName"]
  }, [_c('text', {
    staticClass: ["nameStyle"]
  }, [_vm._v("浅浅最爱笑")]), _c('text', {
    staticClass: ["timeStyle"]
  }, [_vm._v("22小时前")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["contentText"]
  }, [_c('text', [_vm._v("这篇文章对我很有用，我希望有更多的优秀方法可以展示给大家，供大家学习")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bottomStyle"]
  }, [_c('text', {
    staticClass: ["bottomCommentStyle"]
  }, [_vm._v("324评论")]), _c('text', {
    staticClass: ["bottomeTimeStyle"]
  }, [_vm._v("2012-12-12")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });