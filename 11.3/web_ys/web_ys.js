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
/******/ 	return __webpack_require__(__webpack_require__.s = "./str/js/str.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./str/css/str.css":
/*!*************************!*\
  !*** ./str/css/str.css ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./str/css/str.css?");

/***/ }),

/***/ "./str/js/str.js":
/*!***********************!*\
  !*** ./str/js/str.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_str_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/str.css */ \"./str/css/str.css\");\n/* harmony import */ var _css_str_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_str_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfetch('/add').then(function (req) {\n  return req.text();\n}).then(function (req) {\n  req = JSON.parse(req);\n  var todo = document.querySelector('#todolist');\n  var srew = '';\n  req.forEach(function (sem, inds) {\n    srew += \"<li draggable=\\\"true\\\" id='\".concat(sem.id, \"'>\\n                   <input type=\\\"checkbox\\\" >\\n                   <p id=\\\"p-1\\\">\").concat(sem.name, \"</p>\\n                   <a href=\\\"javascript:remove(1)\\\">-</a>\\n                </li>\");\n  });\n  todo.innerHTML = srew;\n  bhcnda();\n  ngrmfd();\n});\n\nfunction bhcnda() {\n  var title = document.querySelector('#title'); //点击渲染\n\n  title.onkeydown = function (e) {\n    //判断成立条件\n    if (e.keyCode == 13 && title.value !== '') {\n      var val = title.value;\n      fetch('/tian?val=' + val).then(function (req) {\n        return req.text();\n      }).then(function (req) {\n        req = JSON.parse(req);\n        var todo = document.querySelector('#todolist');\n        var srew = '';\n        req.forEach(function (sem, inds) {\n          srew += \"<li draggable=\\\"true\\\" id='\".concat(sem.id, \"'>\\n                               <input type=\\\"checkbox\\\" >\\n                               <p id=\\\"p-1\\\">\").concat(sem.name, \"</p>\\n                               <a href=\\\"javascript:remove(1)\\\">-</a>\\n                            </li>\");\n        });\n        todo.innerHTML = srew;\n        bhcnda();\n        ngrmfd();\n      }); //点击后input为空\n\n      title.value = '';\n      nfdsf();\n    }\n  };\n\n  function nfdsf() {\n    var todolists = document.querySelector('#todolist');\n    var todolist_li = document.querySelectorAll('#todolist li');\n    var todolist_inp = document.querySelectorAll('#todolist  li  input');\n    var todolist_a = document.querySelectorAll('#todolist a');\n    todolist_a.forEach(function (a, ind) {\n      a.onclick = function () {\n        //点击删除\n        todolists.removeChild(todolist_li[ind]);\n        fetch('/add').then(function (req) {\n          return req.text();\n        }).then(function (req) {\n          req = JSON.parse(req);\n          var ids = todolist_li[ind].getAttribute('id');\n          fetch('/shan?val=' + ids).then(function (req) {\n            return req.text();\n          });\n        });\n        nda();\n      };\n    });\n    todolist_inp.forEach(function (b, ind) {\n      b.onclick = function () {\n        //点击input，下渲染\n        var donelists = document.querySelector('#donelist');\n        var stew = todolist_li[ind].innerHTML;\n        donelists.innerHTML += '<li >' + stew + '</li>'; //点击删除\n\n        todolists.removeChild(todolist_li[ind]);\n        nda();\n      };\n    });\n\n    function nda() {\n      //让input，默认选中\n      var donelist_inp = document.querySelectorAll('#donelist  li  input');\n      donelist_inp.forEach(function (a, ind) {\n        a.checked = true;\n      }); //获取的个数\n\n      var todolist_lix = document.querySelectorAll('#todolist li');\n      var donelist_lix = document.querySelectorAll('#donelist li');\n      var todocount = document.querySelector('#todocount');\n      var donecount = document.querySelector('#donecount');\n      todocount.innerHTML = todolist_lix.length;\n      donecount.innerHTML = donelist_lix.length;\n      mdofm();\n    }\n  }\n\n  nfdsf();\n\n  function mdofm() {\n    var donelists = document.querySelector('#donelist');\n    var todolists = document.querySelector('#todolist');\n    var donelist_li = document.querySelectorAll('#donelist li');\n    var donelist_inp = document.querySelectorAll('#donelist  li  input');\n    var donelist_a = document.querySelectorAll('#donelist a');\n    donelist_a.forEach(function (a, ind) {\n      a.onclick = function () {\n        //点击删除\n        donelists.removeChild(donelist_li[ind]);\n        fetch('/add').then(function (req) {\n          return req.text();\n        }).then(function (req) {\n          req = JSON.parse(req);\n          var ids = donelist_li[ind].getAttribute('id');\n          fetch('/shan?val=' + ids).then(function (req) {\n            return req.text();\n          });\n        });\n        nda();\n      };\n    });\n    donelist_inp.forEach(function (a, ind) {\n      donelist_inp[ind].onclick = function () {\n        //点击input，上渲染\n        var donelists = document.querySelector('#donelist');\n        var stew = donelist_li[ind].innerHTML;\n        todolists.innerHTML += '<li>' + stew + '</li>'; //点击删除\n\n        donelists.removeChild(donelist_li[ind]);\n        nda();\n      };\n    });\n\n    function nda() {\n      //获取的个数\n      var todolist_lix = document.querySelectorAll('#todolist li');\n      var donelist_lix = document.querySelectorAll('#donelist li');\n      var todocount = document.querySelector('#todocount');\n      var donecount = document.querySelector('#donecount');\n      todocount.innerHTML = todolist_lix.length;\n      donecount.innerHTML = donelist_lix.length;\n      nfdsf();\n    }\n  }\n\n  mdofm();\n}\n\nfunction ngrmfd() {\n  //获取的个数\n  var todolist_lix = document.querySelectorAll('#todolist li');\n  var donelist_lix = document.querySelectorAll('#donelist li');\n  var todocount = document.querySelector('#todocount');\n  var donecount = document.querySelector('#donecount');\n  todocount.innerHTML = todolist_lix.length;\n  donecount.innerHTML = donelist_lix.length;\n}\n\n//# sourceURL=webpack:///./str/js/str.js?");

/***/ })

/******/ });