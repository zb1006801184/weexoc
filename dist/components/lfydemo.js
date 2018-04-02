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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
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
__vue_options__.__file = "/Users/zhubiao/work/weexoc/src/components/lfydemo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4085cd3b"
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

/***/ 28:
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "backgroundColor": "#F5F5F5"
  },
  "floor": {
    "marginBottom": "2",
    "backgroundColor": "#FFFFFF"
  },
  "section-wrap": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "headeimage-nickname-wrap": {
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  "headimage": {
    "marginTop": "20",
    "marginLeft": "30",
    "width": "70",
    "height": "70",
    "borderRadius": "35"
  },
  "nicknamewrap": {
    "marginLeft": "20",
    "width": "200"
  },
  "nickname": {
    "fontSize": "28",
    "textAlign": "left",
    "paddingTop": "25",
    "color": "#B98080",
    "lines": 1,
    "fontWeight": "bold"
  },
  "time": {
    "color": "#999999",
    "lines": 1,
    "fontSize": "20",
    "marginTop": "2"
  },
  "actionbtn-wrap": {
    "flexDirection": "row",
    "marginRight": "30",
    "justifyContent": "space-between",
    "width": "264",
    "alignItems": "center"
  },
  "actiontext": {
    "color": "#AAAAAA",
    "fontSize": "24"
  },
  "desc": {
    "lines": 0,
    "color": "#999999",
    "fontSize": "30",
    "marginLeft": "120",
    "marginRight": "34",
    "marginTop": "23"
  },
  "comment": {
    "color": "#BBBBBB",
    "fontSize": "24",
    "paddingRight": "50",
    "marginTop": "22",
    "marginLeft": "120",
    "marginBottom": "25"
  },
  "loadingcom": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "loadingtext": {
    "color": "#888888",
    "fontSize": "24",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#888888",
    "backgroundColor": "#0000FF"
  },
  "refreshcom": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "refreshText": {
    "color": "#888888",
    "fontSize": "24",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 29:
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

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
var POST_URL = 'http://www.jspang.com/DemoApi/newsApi.php';

exports.default = {
	data: function data() {
		return {
			//页面渲染的数据源
			lists: [],
			isLoading: false,
			isShowRefresh: false
		};
	},

	//生命周期方法
	created: function created() {
		var _this = this;

		//			var me = this;
		//			//请求数据
		//			stream.fetch({
		//				method: 'POST',
		//				url: POST_URL,
		//				type: 'json',
		//				// body:'uuid=b2c19b4a288147c6824b9f460cb626bf&phone=15169559644&rows=5&mark=1&source=0&page=1'
		//			}, function(ret) {
		//				if(!ret.ok) {
		//					// me.postResult = "request failed";
		//				} else {
		//					// console.log('get:'+JSON.stringify(ret));
		//					// me.postResult = JSON.stringify(ret.data);
		//					me.lists = ret.data;
		//				}
		//			}, function(response) {
		//				console.log('get in progress:' + response.length);
		//				me.postResult = "bytes received:" + response.length;
		//			});
		modal.toast({ message: '正在创建数据', duration: 0.5 });
		this.reloadData(POST_URL, function (res) {
			_this.lists = res.data;
		});
	},
	methods: {
		//点赞
		prase: function prase(e) {
			modal.toast({
				message: '点赞成功',
				duration: 1
			});
		},
		//举报
		report: function report(e) {

			modal.confirm({
				message: '确定要举报吗?',
				okTitle: '确定',
				cancelTitle: '取消',
				duration: 1
			}, function (value) {
				console.log('返回值:', value);
			});
		}, //采纳
		aopt: function aopt(e) {
			modal.toast({
				message: '采纳成功',
				duration: 1
			});
		},

		//加载数据
		reloadData: function reloadData(url, callback) {
			return stream.fetch({
				method: 'POST',
				url: url,
				type: 'json'
			}, callback);
		},

		//加载更多数据
		loadmore: function loadmore(enent) {
			var _this2 = this;

			this.isLoading = true;
			modal.toast({
				message: 'loading',
				duration: 1
			});
			this.reloadData(POST_URL, function (restult) {
				_this2.lists = _this2.lists.concat(restult.data);
				setTimeout(function () {
					_this2.isLoading = false;
				}, 2000);
			});
		},

		//刷新数据
		refreshData: function refreshData(e) {
			var _this3 = this;

			this.isShowRefresh = true;
			modal.toast({
				message: 'refresh',
				duration: 1
			});
			this.reloadData(POST_URL, function (res) {
				_this3.lists = res.data;
				setTimeout(function () {
					_this3.isShowRefresh = false;
				}, 2000);
			});
		}
	}
};

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('refresh', {
    staticClass: ["refreshcom"],
    attrs: {
      "display": _vm.isShowRefresh ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('text', {
    staticClass: ["refreshText"]
  }, [_vm._v("正在刷新")]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _vm._l((_vm.lists), function(item, i) {
    return _c('cell', {
      key: i,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["floor"]
    }, [_c('div', {
      staticClass: ["section-wrap"]
    }, [_c('div', {
      staticClass: ["headeimage-nickname-wrap"]
    }, [_c('image', {
      staticClass: ["headimage"],
      attrs: {
        "src": "https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg"
      }
    }), _c('div', {
      staticClass: ["nicknamewrap"]
    }, [_c('text', {
      staticClass: ["nickname"]
    }, [_vm._v(_vm._s(item.newsTitle))]), _c('text', {
      staticClass: ["time"]
    }, [_vm._v("22小时前")])])]), _c('div', {
      staticClass: ["actionbtn-wrap"]
    }, [_c('text', {
      staticClass: ["actiontext"],
      on: {
        "click": _vm.prase
      }
    }, [_vm._v("❤️点赞")]), _c('text', {
      staticClass: ["actiontext"],
      on: {
        "click": _vm.report
      }
    }, [_vm._v("举报")]), _c('text', {
      staticClass: ["actiontext"],
      on: {
        "click": _vm.aopt
      }
    }, [_vm._v("采纳")])])]), _c('text', {
      staticClass: ["desc"]
    }, [_vm._v(_vm._s(item.newsContent))]), _c('text', {
      staticClass: ["comment"]
    }, [_vm._v("324评论    2012-12-12")])])])
  }), _c('loading', {
    staticClass: ["loadingcom"],
    attrs: {
      "display": _vm.isLoading ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.loadmore
    }
  }, [_c('text', {
    staticClass: ["loadingtext"]
  }, [_vm._v("加载更多")]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });