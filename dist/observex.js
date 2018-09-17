(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Observex"] = factory();
	else
		root["Observex"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ObserveX = __webpack_require__(1);\n\nvar _ObserveX = ObserveX.default;\n\nObject.keys(ObserveX).forEach(function (m) {\n    if (m === 'default') return;\n    _ObserveX[m] = ObserveX[m];\n});\n\nmodule.exports = _ObserveX;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2pzLmpzP2UwNzIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT2JzZXJ2ZVggPSByZXF1aXJlKCcuLycpO1xuXG5jb25zdCBfT2JzZXJ2ZVggPSBPYnNlcnZlWC5kZWZhdWx0O1xuXG5PYmplY3Qua2V5cyhPYnNlcnZlWCkuZm9yRWFjaChtID0+IHtcbiAgICBpZiAobSA9PT0gJ2RlZmF1bHQnKSByZXR1cm47XG4gICAgX09ic2VydmVYW21dID0gT2JzZXJ2ZVhbbV07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBfT2JzZXJ2ZVg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Nqcy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.cloneDeep = exports.clone = exports.isPlainObject = exports.def = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.defineReactive = defineReactive;\nexports.observe = observe;\n\nvar _util = __webpack_require__(2);\n\nvar _dep = __webpack_require__(3);\n\nvar _dep2 = _interopRequireDefault(_dep);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Observex = function () {\n    function Observex(o, cb) {\n        _classCallCheck(this, Observex);\n\n        if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') throw new Error('argument is expected to be an object');\n        this.value = o;\n        this.cb = cb;\n        (0, _util.def)(o, '__ob__', this);\n        if (Array.isArray(o)) {} else {\n            this.walk();\n        }\n    }\n\n    _createClass(Observex, [{\n        key: 'walk',\n        value: function walk() {\n            var keys = Object.keys(this.value);\n            for (var i = 0; i < keys.length; i++) {\n                defineReactive(this.value, keys[i]);\n            }\n        }\n    }]);\n\n    return Observex;\n}();\n\nfunction defineReactive(obj, key) {\n    var property = Object.getOwnPropertyDescriptor(obj, key);\n    if (property && property.configurable === false) {\n        return;\n    }\n    var val = void 0;\n    var getter = property && property.get;\n    var setter = property && property.set;\n    if (!getter || setter) {\n        val = obj[key];\n    }\n\n    var childOb = observe(val);\n    Object.defineProperty(obj, key, {\n        enumerable: true,\n        configurable: true,\n        get: function get() {\n            var value = getter ? getter.call(obj) : val;\n            return value;\n        },\n        set: function set(newVal) {\n            var value = getter ? getter.call(obj) : val;\n            if (newVal === value || newVal !== newVal && value !== value) {\n                return;\n            }\n            var _oldValue = (0, _util.cloneDeep)(value);\n            if (setter) {\n                setter.call(obj, newVal);\n            } else {\n                val = newVal;\n                childOb = observe(val);\n            }\n        }\n    });\n}\n\nfunction observe(o) {\n    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') {\n        return;\n    }\n    if (o.hasOwnProperty('__ob__') && o.__ob__ instanceof Observex) {\n        return o.__ob__;\n    }\n    return new Observex(o);\n}\n\nexports.default = Observex;\nexports.def = _util.def;\nexports.isPlainObject = _util.isPlainObject;\nexports.clone = _util.clone;\nexports.cloneDeep = _util.cloneDeep;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWYsIGlzUGxhaW5PYmplY3QsIGNsb25lLCBjbG9uZURlZXAgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCc7XG50eXBlIE9ic2VydmV4Q2FsbGJhY2sgPSAoYW55LCBhbnkpID0+IGFueTtcblxuY2xhc3MgT2JzZXJ2ZXgge1xuICAgIHZhbHVlOiBPYmplY3Q7XG4gICAgZGVwczogQXJyYXk8RGVwPjtcbiAgICBjb25zdHJ1Y3RvcihvOiBPYmplY3QsIGNiPzogT2JzZXJ2ZXhDYWxsYmFjaykge1xuICAgICAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT09ICdvYmplY3QnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudCBpcyBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QnKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG87XG4gICAgICAgIHRoaXMuY2IgPSBjYjtcbiAgICAgICAgZGVmKG8sICdfX29iX18nLCB0aGlzKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobykpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2FsaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdhbGsoKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZhbHVlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlKG9iajogT2JqZWN0LCBrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdmFsOiBhbnk7XG4gICAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICAgIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgICBpZiAoIWdldHRlciB8fCBzZXR0ZXIpIHtcbiAgICAgICAgdmFsID0gb2JqW2tleV07XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkT2IgPSBvYnNlcnZlKHZhbCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCAobmV3VmFsICE9PSBuZXdWYWwgJiYgdmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IF9vbGRWYWx1ZSA9IGNsb25lRGVlcCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICAgICAgICAgICAgY2hpbGRPYiA9IG9ic2VydmUodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZShvOiBhbnkpOiBPYnNlcnZleCB8IHZvaWQge1xuICAgIGlmICghbyB8fCB0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eSgnX19vYl9fJykgJiYgby5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZleCkge1xuICAgICAgICByZXR1cm4gby5fX29iX187XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2ZXgobyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmV4O1xuXG5leHBvcnQgeyBkZWYsIGlzUGxhaW5PYmplY3QsIGNsb25lLCBjbG9uZURlZXAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBMEJBO0FBb0NBO0FBQ0E7QUEvREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.def = def;\nexports.isPlainObject = isPlainObject;\nexports.clone = clone;\nexports.cloneDeep = cloneDeep;\nexports.remove = remove;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// flow\n\nfunction def(o, k, v, enumerable) {\n    Object.defineProperty(o, k, {\n        value: v,\n        enumerable: !!enumerable,\n        writable: true,\n        configurable: true\n    });\n}\n\nfunction isPlainObject(o) {\n    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') return false;\n    var proto = o.__proto__;\n    return proto === Object.prototype;\n}\n\nfunction clone(o) {\n    if (isPlainObject(o)) {\n        return _extends({}, o);\n    }\n    if (Array.isArray(o)) {\n        return [].concat(_toConsumableArray(o));\n    }\n    return o;\n}\n\nfunction cloneDeep(o) {\n    o = clone(o);\n    if (isPlainObject(o)) {\n        Object.keys(o).forEach(function (k) {\n            o[k] = cloneDeep(o[k]);\n        });\n    }\n    if (Array.isArray(o)) {\n        o.forEach(function (v, i) {\n            o[i] = cloneDeep(v);\n        });\n    }\n    return o;\n}\n\nfunction remove(arr, item) {\n    var _r = [];\n    for (var i = 0; i < arr.length; i++) {\n        if (arr[i] !== item) _r.push(arr[i]);\n    }\n    arr = _r;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbC5qcz8zNGE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZsb3dcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZihvOiBPYmplY3QsIGs6IHN0cmluZywgdjogYW55LCBlbnVtZXJhYmxlPzogYm9vbGVhbikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrLCB7XG4gICAgICAgIHZhbHVlOiB2LFxuICAgICAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QobzogYW55KSB7XG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHByb3RvID0gby5fX3Byb3RvX187XG4gICAgcmV0dXJuIHByb3RvID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUobzogYW55KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QobykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5vXTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZURlZXAobzogYW55KSB7XG4gICAgbyA9IGNsb25lKG8pO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KG8pKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG8pLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBvW2tdID0gY2xvbmVEZWVwKG9ba10pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykpIHtcbiAgICAgICAgby5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICBvW2ldID0gY2xvbmVEZWVwKHYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmU8VD4oYXJyOiBBcnJheTxUPiwgaXRlbTogVCk6IEFycmF5PFQ+IHtcbiAgICB2YXIgX3IgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldICE9PSBpdGVtKSBfci5wdXNoKGFycltpXSk7XG4gICAgfVxuICAgIGFyciA9IF9yO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFTQTtBQU1BO0FBWUE7QUFlQTtBQUNBOzs7QUE3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _watcher = __webpack_require__(4);\n\nvar _watcher2 = _interopRequireDefault(_watcher);\n\nvar _util = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar count = 0;\nvar depStack = [];\n\nvar Dep = function () {\n    function Dep() {\n        _classCallCheck(this, Dep);\n\n        this.id = ++count;\n        this.subs = [];\n    }\n\n    _createClass(Dep, [{\n        key: \"addSub\",\n        value: function addSub(watcher) {\n            this.subs.push(watcher);\n        }\n    }, {\n        key: \"removeSub\",\n        value: function removeSub(watcher) {\n            (0, _util.remove)(this.subs, watcher);\n        }\n    }]);\n\n    return Dep;\n}();\n\nDep.target = null;\n\nDep.new = function createDep() {\n    var dep = new Dep();\n    if (Dep.target) {\n        Dep.target.addSub(new _watcher2.default(this));\n    }\n    Dep.target = dep;\n    return dep;\n};\n\nexports.default = Dep;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGVwLmpzP2IyZGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmbG93ICovXG5pbXBvcnQgV2F0Y2hlciBmcm9tIFwiLi93YXRjaGVyXCI7XG5pbXBvcnQgeyByZW1vdmUgfSBmcm9tICcuL3V0aWwnO1xuXG5sZXQgY291bnQgPSAwO1xuY29uc3QgZGVwU3RhY2s6IEFycmF5PFdhdGNoZXI+ID0gW107XG5jbGFzcyBEZXAge1xuICAgIHN0YXRpYyB0YXJnZXQ6ID9XYXRjaGVyO1xuICAgIGlkOiBudW1iZXI7XG4gICAgc3ViczogQXJyYXk8V2F0Y2hlcj47XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSArK2NvdW50O1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB9XG4gICAgYWRkU3ViKHdhdGNoZXI6IFdhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2god2F0Y2hlcik7XG4gICAgfVxuICAgIHJlbW92ZVN1Yih3YXRjaGVyOiBXYXRjaGVyKSB7XG4gICAgICAgIHJlbW92ZSh0aGlzLnN1YnMsIHdhdGNoZXIpO1xuICAgIH1cbn1cblxuRGVwLnRhcmdldCA9IG51bGw7XG5cbkRlcC5uZXcgPSBmdW5jdGlvbiBjcmVhdGVEZXAoKSB7XG4gICAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBEZXAudGFyZ2V0LmFkZFN1YihuZXcgV2F0Y2hlcih0aGlzKSk7XG4gICAgfVxuICAgIERlcC50YXJnZXQgPSBkZXA7XG4gICAgcmV0dXJuIGRlcDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRGVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZXAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// flow\n\nvar Watcher = function Watcher() {\n    _classCallCheck(this, Watcher);\n};\n\nexports.default = Watcher;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvd2F0Y2hlci5qcz82MjhhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZsb3dcblxuY2xhc3MgV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0Y2hlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvd2F0Y2hlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);
});