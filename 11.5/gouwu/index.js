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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./str/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./str/css/index.css":
/*!***************************!*\
  !*** ./str/css/index.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./str/css/index.css?");

/***/ }),

/***/ "./str/js/index.js":
/*!*************************!*\
  !*** ./str/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./str/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar main = document.querySelector('main ul');\nvar sdiguds = document.querySelector('#sdiguds');\nvar ffud = document.querySelector('.ffud');\nvar jibvds = document.querySelector('.jibvds');\n\nfunction zhong() {\n  fetch('/add').then(function (req) {\n    return req.text();\n  }).then(function (req) {\n    var aaa = JSON.parse(req).msg;\n    ;\n    var str = '';\n\n    for (var i = 0; i < aaa.length; i++) {\n      str += \"\\n\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\"  \".concat(aaa[i].pandui == \"true\" ? \"checked\" : '', \" id=\\\"dsjkfnedf\\\" class='sadsad' >\\n\\t\\t\\t\\t\\t<p><img src=\\\"\").concat(aaa[i].img, \"\\\" alt=\\\"\\\"></p>\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t<p class=\\\"hb_cpl_b_1\\\">\").concat(aaa[i].mamet, \"</p>\\n\\t\\t\\t\\t\\t\\t<p class=\\\"hb_cpl_b_2\\\">\").concat(aaa[i].meiwjn, \"</p>\\n\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\\"gphjfei\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span>\\uFFE5\").concat(aaa[i].mjige, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\\"vigvnid\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"jjj\\\">-</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sss\\\">\").concat(aaa[i].shulia, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"nnn\\\">+</span>\\n\\t\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<p class=\\\"sdsa\\\">\\u5220\\u9664</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\");\n    }\n\n    main.innerHTML = str;\n    var dsjkfnedf = document.querySelectorAll('#dsjkfnedf');\n    var jjj = document.querySelectorAll('.jjj');\n    var nnn = document.querySelectorAll('.nnn');\n    var sdsa = document.querySelectorAll('.sdsa');\n    dsjkfnedf = Array.from(dsjkfnedf);\n    jjj = Array.from(jjj);\n    nnn = Array.from(nnn);\n    sdsa = Array.from(sdsa);\n    chushihua(sdiguds, dsjkfnedf); //初始化\n\n    jiage(dsjkfnedf, aaa); // 计算总价\n\n    dianji(dsjkfnedf, aaa); //全选\n\n    shangpin(dsjkfnedf, aaa); //选中每件商品\n\n    jiajian(jjj, nnn, aaa); //点击加减\n\n    sahnchu(sdsa, aaa); // 删除商品\n  });\n}\n\nzhong(); //初始化\n\nfunction chushihua(sdiguds, dsjkfnedf) {\n  sdiguds.checked = dsjkfnedf.every(function (it) {\n    return it.checked;\n  });\n} //点击全选按钮\n\n\nfunction dianji(dsjkfnedf, aaa) {\n  sdiguds.onchange = function () {\n    dsjkfnedf.forEach(function (i, ind) {\n      i.checked = sdiguds.checked;\n    });\n    jiage(dsjkfnedf, aaa);\n    fetch('/add/aa?checked=' + sdiguds.checked).then(function (text) {\n      return text.text();\n    });\n  };\n} //选中按钮\n\n\nfunction shangpin(dsjkfnedf, aaa) {\n  dsjkfnedf.forEach(function (i, ind) {\n    i.onchange = function () {\n      var flag = dsjkfnedf.every(function (items) {\n        return items.checked;\n      });\n      sdiguds.checked = flag;\n      jiage(dsjkfnedf, aaa);\n      fetch('/add/aa?id=' + aaa[ind].id + '&checked=' + i.checked).then(function (text) {\n        return text.text();\n      });\n    };\n  });\n} //点击加减\n\n\nfunction jiajian(jjj, nnn, aaa) {\n  //减\n  jjj.forEach(function (item, index) {\n    item.onclick = function () {\n      if (aaa[index].shulia > 1) {\n        aaa[index].shulia--;\n        fetch('/add/bb?id=' + aaa[index].id + '&num=' + aaa[index].shulia).then(function (text) {\n          return text.text();\n        }).then(function (res) {\n          res = JSON.parse(res);\n\n          if (res.code) {\n            zhong();\n          }\n        });\n      }\n    };\n  }); //加\n\n  nnn.forEach(function (item, index) {\n    item.onclick = function () {\n      aaa[index].shulia++;\n      fetch('/add/bb?id=' + aaa[index].id + '&num=' + aaa[index].shulia).then(function (text) {\n        return text.text();\n      }).then(function (res) {\n        res = JSON.parse(res);\n\n        if (res.code) {\n          zhong();\n        }\n      });\n    };\n  });\n} //点击删除\n\n\nfunction sahnchu(sdsa, aaa) {\n  sdsa.forEach(function (i, ind) {\n    i.onclick = function () {\n      fetch('/add/cc?id=' + aaa[ind].id).then(function (text) {\n        return text.text();\n      }).then(function (res) {\n        console.log(res);\n        zhong();\n      });\n    };\n  });\n} //计算总价\n\n\nfunction jiage(ipts, data) {\n  var sum = 0;\n  ipts.map(function (its, ind) {\n    if (its.checked) {\n      sum += data[ind].mjige * data[ind].shulia;\n    }\n  });\n  jibvds.innerHTML = sum + '￥';\n  var arr = ipts.filter(function (items) {\n    return items.checked;\n  });\n  ffud.innerHTML = arr.length;\n}\n\n//# sourceURL=webpack:///./str/js/index.js?");

/***/ })

/******/ });