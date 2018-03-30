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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
__vue_options__.__file = "/Users/zhubiao/work/weexoc/src/components/zydemo1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6bf0e4e8"
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

/***/ 18:
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "width": "600",
    "marginLeft": "75",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#BBBBBB",
    "paddingTop": "15",
    "paddingBottom": "15",
    "paddingLeft": "50",
    "paddingRight": "15",
    "marginBottom": "30"
  },
  "panel1": {
    "width": "600",
    "marginLeft": "75",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#286090",
    "marginBottom": "30"
  },
  "text1": {
    "color": "#666666",
    "fontSize": "32"
  },
  "lefttext": {
    "color": "#286090",
    "fontSize": "50",
    "fontStyle": "italic",
    "textAlign": "left"
  },
  "contertext": {
    "color": "rgb(238,162,54)",
    "fontSize": "50",
    "fontWeight": "bold",
    "textDecoration": "line-through",
    "textAlign": "center"
  },
  "righttext": {
    "color": "rgba(238,62,154,0.5)",
    "fontSize": "50",
    "textDecoration": "underline",
    "textAlign": "right"
  },
  "click": {
    "color": "rgb(238,162,54)",
    "fontSize": "50",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 19:
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


// 提示框
var modal = weex.requireModule('modal');
exports.default = {

  // 处理数据的地方
  data: function data() {
    return {
      // 动态获取数据
      message: '          首尾有空格（使用数据绑定）  '
    };
  },


  // 处理点击事件
  methods: {
    onclick: function onclick(event) {
      console.log('onclick:', event);
      modal.toast({
        message: '单击',
        duration: 1
      });
    },
    onlongpress: function onlongpress(event) {
      console.log('onlongpress:', event);
      modal.toast({
        message: '长按',
        duration: 1
      });
    },
    onappear: function onappear(event) {
      console.log('onappear:', event);
      modal.toast({
        message: 'text出现',
        duration: 1
      });
    },
    ondisappear: function ondisappear(event) {
      console.log('ondisappear:', event);
      modal.toast({
        message: 'text消失',
        duration: 1
      });
    }
  }
};

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _c('div', {
    staticClass: ["panel1"]
  }, [_c('text', {
    staticClass: ["datatext"]
  }, [_vm._v(_vm._s(_vm.message))])]), _c('div', {
    staticClass: ["panel1"]
  }, [_c('text', {
    staticClass: ["click"],
    on: {
      "click": _vm.onclick,
      "longpress": _vm.onlongpress,
      "appear": _vm.onappear,
      "disappear": _vm.ondisappear
    }
  }, [_vm._v(" 可以点击的text ")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("Weex 是一套简单易用的跨平台开发方案，能以 Web 的开发体验构建高性能、可扩展的原生应用。Vue 是一个轻量并且功能强大的渐进式前端框架。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["panel1"]
  }, [_c('text', {
    staticClass: ["lefttext"]
  }, [_vm._v(" 居左边 ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["panel1"]
  }, [_c('text', {
    staticClass: ["contertext"]
  }, [_vm._v(" 居中间 ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["panel1"]
  }, [_c('text', {
    staticClass: ["righttext"]
  }, [_vm._v(" 居右边 ")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });