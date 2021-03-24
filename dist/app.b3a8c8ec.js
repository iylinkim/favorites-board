// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/components/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseComponent = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(htmlString) {
    _classCallCheck(this, BaseComponent);

    var template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild;
  }

  _createClass(BaseComponent, [{
    key: "attachTo",
    value: function attachTo(parent) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "afterbegin";
      parent.insertAdjacentElement(position, this.element);
    }
  }, {
    key: "removeFrom",
    value: function removeFrom(parent) {
      if (parent !== this.element.parentElement) {
        throw new Error("Parent mismatch!");
      }

      parent.removeChild(this.element);
    }
  }, {
    key: "attach",
    value: function attach(component) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "afterbegin";
      component.attachTo(this.element, position);
    }
  }]);

  return BaseComponent;
}();

exports.BaseComponent = BaseComponent;
},{}],"dist/components/input/select-input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectSectionInput = void 0;

var _component = require("./../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SelectSectionInput = /*#__PURE__*/function (_BaseComponent) {
  _inherits(SelectSectionInput, _BaseComponent);

  var _super = _createSuper(SelectSectionInput);

  function SelectSectionInput() {
    _classCallCheck(this, SelectSectionInput);

    return _super.call(this, "\n        <div class=\"form_container\">\n            <label for=\"title\">Category</label>\n            <select id=\"select\">\n                <option value=\"daily\">daily</option>\n                <option value=\"important\">important</option>\n                <option value=\"todo\">todo</option>\n            </select>\n        </div>\n        ");
  }

  _createClass(SelectSectionInput, [{
    key: "category",
    get: function get() {
      var element = this.element.querySelector("#select");
      return element.value;
    }
  }]);

  return SelectSectionInput;
}(_component.BaseComponent);

exports.SelectSectionInput = SelectSectionInput;
},{"./../component.js":"dist/components/component.js"}],"dist/components/input/url-input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlSectionInput = void 0;

var _component = require("./../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UrlSectionInput = /*#__PURE__*/function (_BaseComponent) {
  _inherits(UrlSectionInput, _BaseComponent);

  var _super = _createSuper(UrlSectionInput);

  function UrlSectionInput() {
    _classCallCheck(this, UrlSectionInput);

    return _super.call(this, "\n        <div class=\"form_container\">\n            <label for=\"title\">Url</label>\n            <input type=\"text\" id=\"url\" required/>\n        </div>\n        ");
  }

  _createClass(UrlSectionInput, [{
    key: "url",
    get: function get() {
      var element = this.element.querySelector("#url");
      return element.value;
    }
  }]);

  return UrlSectionInput;
}(_component.BaseComponent);

exports.UrlSectionInput = UrlSectionInput;
},{"./../component.js":"dist/components/component.js"}],"dist/components/page/dialog/dialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDialog = void 0;

var _component = require("./../../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InputDialog = /*#__PURE__*/function (_BaseComponent) {
  _inherits(InputDialog, _BaseComponent);

  var _super = _createSuper(InputDialog);

  function InputDialog(title) {
    var _this;

    _classCallCheck(this, InputDialog);

    _this = _super.call(this, "\n        <section class=\"dialog\">\n            <div id=\"dialog_body\">\n            <h4 class=\"category_title\"></h4>\n              <div class=\"form_container\">\n                <label for=\"title\">Title</label>\n                <input type=\"text\" id=\"title\">\n              </div>\n              <div class=\"form_container\">\n                  <label for=\"title\">Comment</label>\n                  <input type=\"text\" id=\"comment\">\n              </div>\n              <button class=\"close\"><i class=\"fas fa-times\"></i></button>\n              <button class=\"dialog_submit\">ADD</button>\n            </div>\n        </section>\n        ");

    var titleElement = _this.element.querySelector(".category_title");

    titleElement.textContent = title;

    var closeBtn = _this.element.querySelector(".close");

    closeBtn.onclick = function () {
      _this.closeListener && _this.closeListener();
    };

    _this.element.onclick = function (e) {
      var target = e.target;

      if (target.matches("section.dialog")) {
        _this.closeListener && _this.closeListener();
      }
    };

    var submitBtn = _this.element.querySelector(".dialog_submit");

    submitBtn.onclick = function () {
      _this.submitListener && _this.submitListener();
    };

    return _this;
  }

  _createClass(InputDialog, [{
    key: "title",
    get: function get() {
      var element = document.querySelector("#title");
      return element.value;
    }
  }, {
    key: "comment",
    get: function get() {
      var element = document.querySelector("#comment");
      return element.value;
    }
  }, {
    key: "setOnCloseListener",
    value: function setOnCloseListener(listener) {
      this.closeListener = listener;
    }
  }, {
    key: "setOnSubmitListener",
    value: function setOnSubmitListener(listener) {
      this.submitListener = listener;
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var body = this.element.querySelector("#dialog_body");
      child.attachTo(body, "beforeend");
    }
  }]);

  return InputDialog;
}(_component.BaseComponent);

exports.InputDialog = InputDialog;
},{"./../../component.js":"dist/components/component.js"}],"dist/components/page/item/note.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteComponent = void 0;

var _component = require("./../../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NoteComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(NoteComponent, _BaseComponent);

  var _super = _createSuper(NoteComponent);

  function NoteComponent(title, info, note_category) {
    var _this;

    _classCallCheck(this, NoteComponent);

    _this = _super.call(this, "\n        <section class=\"item note\">\n            <div class=\"text note_info\">\n                <span class=\"item_category\"></span>\n                <h3 class=\"title\"></h3>\n                <div class=\"info\"></div>\n                <span class=\"note_category\"></span>\n            </div>\n        </section>\n        ");

    var titleElement = _this.element.querySelector(".title");

    titleElement.textContent = title;

    var infoElement = _this.element.querySelector(".info");

    infoElement.textContent = info;

    var noteCategoryElement = _this.element.querySelector(".note_category");

    noteCategoryElement.classList.add(note_category);
    noteCategoryElement.textContent = note_category;
    return _this;
  }

  return NoteComponent;
}(_component.BaseComponent);

exports.NoteComponent = NoteComponent;
},{"./../../component.js":"dist/components/component.js"}],"dist/components/page/item/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageComponent = void 0;

var _component = require("./../../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ImageComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(ImageComponent, _BaseComponent);

  var _super = _createSuper(ImageComponent);

  function ImageComponent(title, info, src) {
    var _this;

    _classCallCheck(this, ImageComponent);

    _this = _super.call(this, "\n        <section class=\"item place\">\n            <div class=\"holder place_holder\"><img class=\"image\"/></div>\n            <div class=\"text image_info\">\n                <h3 class=\"title\">Image Title</h3>\n                <div class=\"info\">Image info area</div>\n            </div>\n        </section>\n        ");

    var titleElement = _this.element.querySelector(".title");

    titleElement.textContent = title;

    var infoElement = _this.element.querySelector(".info");

    infoElement.textContent = info;

    var imageElement = _this.element.querySelector(".image");

    imageElement.src = src;
    return _this;
  }

  return ImageComponent;
}(_component.BaseComponent);

exports.ImageComponent = ImageComponent;
},{"./../../component.js":"dist/components/component.js"}],"dist/components/page/item/video.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoComponent = void 0;

var _component = require("./../../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VideoComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(VideoComponent, _BaseComponent);

  var _super = _createSuper(VideoComponent);

  function VideoComponent(title, info, url) {
    var _this;

    _classCallCheck(this, VideoComponent);

    _this = _super.call(this, "\n        <section class=\"item video\">\n            <div class=\"holder video_holder\">\n                <iframe class=\"video_iframe\"></iframe>\n            </div>\n            <div class=\"text video_info\">\n                <h3 class=\"title\">Video Title</h3>\n                <div class=\"info\">place info area</div>\n            </div>\n        </section>\n        ");

    var iframe = _this.element.querySelector(".video_iframe");

    iframe.src = _this.convertToEmbeddedURL(url);

    var titleElement = _this.element.querySelector(".title");

    titleElement.textContent = title;

    var infoElement = _this.element.querySelector(".info");

    infoElement.textContent = info;
    return _this;
  }

  _createClass(VideoComponent, [{
    key: "convertToEmbeddedURL",
    value: function convertToEmbeddedURL(url) {
      var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
      var match = url.match(regExp);
      var videoId = match ? match[1] || match[2] : undefined;

      if (videoId) {
        return "https://www.youtube.com/embed/".concat(videoId);
      }

      return url;
    }
  }]);

  return VideoComponent;
}(_component.BaseComponent);

exports.VideoComponent = VideoComponent;
},{"./../../component.js":"dist/components/component.js"}],"dist/components/page/page.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageComponent = exports.PageItemComponent = void 0;

var _component = require("./../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PageItemComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(PageItemComponent, _BaseComponent);

  var _super = _createSuper(PageItemComponent);

  function PageItemComponent() {
    var _this;

    _classCallCheck(this, PageItemComponent);

    _this = _super.call(this, "\n      <li draggable=\"true\" class=\"page_item\">\n        <section class=\"page_item_body\"></section>\n        <div class=\"page_item_controls\">\n          <button class=\"close\"><i class=\"fas fa-times\"></i></button>\n        </div>\n      </li>\n    ");

    var closeBtn = _this.element.querySelector(".close");

    closeBtn.onclick = function () {
      _this.closeListener && _this.closeListener();
    };

    _this.element.addEventListener("dragstart", function (event) {
      _this.onDragStart(event);
    });

    _this.element.addEventListener("dragend", function (event) {
      _this.onDragEnd(event);
    });

    _this.element.addEventListener("dragenter", function (event) {
      _this.onDragEnter(event);
    });

    _this.element.addEventListener("dragleave", function (event) {
      _this.onDragLeave(event);
    });

    return _this;
  }

  _createClass(PageItemComponent, [{
    key: "onDragStart",
    value: function onDragStart(_) {
      this.notifyDragObservers("start");
      this.element.classList.add("lifted");
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(_) {
      this.notifyDragObservers("stop");
      this.element.classList.remove("lifted");
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(_) {
      this.notifyDragObservers("enter");
      this.element.classList.add("drop-area");
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(_) {
      this.notifyDragObservers("leave");
      this.element.classList.remove("drop-area");
    }
  }, {
    key: "onDropped",
    value: function onDropped() {
      this.element.classList.remove("drop-area");
    }
  }, {
    key: "notifyDragObservers",
    value: function notifyDragObservers(state) {
      this.dragStateListener && this.dragStateListener(this, state);
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var container = this.element.querySelector(".page_item_body");
      child.attachTo(container);
    }
  }, {
    key: "setOnCloseListener",
    value: function setOnCloseListener(listener) {
      this.closeListener = listener;
    }
  }, {
    key: "setOnDragStateListener",
    value: function setOnDragStateListener(listener) {
      this.dragStateListener = listener;
    }
  }, {
    key: "muteChildren",
    value: function muteChildren(state) {
      if (state === "mute") {
        this.element.classList.add("mute-children");
      } else {
        this.element.classList.remove("mute-children");
      }
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      return this.element.getBoundingClientRect();
    }
  }]);

  return PageItemComponent;
}(_component.BaseComponent);

exports.PageItemComponent = PageItemComponent;

var PageComponent = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(PageComponent, _BaseComponent2);

  var _super2 = _createSuper(PageComponent);

  function PageComponent(pageItemConstructor) {
    var _this2;

    _classCallCheck(this, PageComponent);

    _this2 = _super2.call(this, "<ul class=\"page\"></ul>");
    _this2.pageItemConstructor = pageItemConstructor;
    _this2.children = new Set();

    _this2.element.addEventListener("dragover", function (event) {
      _this2.onDragOver(event);
    });

    _this2.element.addEventListener("drop", function (event) {
      _this2.onDrop(event);
    });

    return _this2;
  }

  _createClass(PageComponent, [{
    key: "onDragOver",
    value: function onDragOver(event) {
      event.preventDefault();
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      event.preventDefault();

      if (!this.dropTarget) {
        return;
      }

      if (this.dragTarget && this.dragTarget !== this.dropTarget) {
        var dropY = event.clientY;
        var srcElement = this.dragTarget.getBoundingRect();
        this.dragTarget.removeFrom(this.element);
        this.dropTarget.attach(this.dragTarget, dropY < srcElement.y ? "beforebegin" : "afterend");
        this.dropTarget.onDropped();
      }
    }
  }, {
    key: "addChild",
    value: function addChild(section) {
      var _this3 = this;

      var item = new this.pageItemConstructor();
      item.addChild(section);
      item.attachTo(this.element, "beforeend");
      item.setOnCloseListener(function () {
        item.removeFrom(_this3.element);

        _this3.children.delete(item);
      });
      this.children.add(item);
      item.setOnDragStateListener(function (target, state) {
        switch (state) {
          case "start":
            _this3.dragTarget = target;

            _this3.updateSections("mute");

            break;

          case "stop":
            _this3.dragTarget = undefined;

            _this3.updateSections("unmute");

            break;

          case "enter":
            _this3.dropTarget = target;
            break;

          case "leave":
            _this3.dropTarget = undefined;
            break;

          default:
            throw new Error("unsupported state: ".concat(state));
        }
      });
    }
  }, {
    key: "updateSections",
    value: function updateSections(state) {
      this.children.forEach(function (section) {
        section.muteChildren(state);
      });
    }
  }]);

  return PageComponent;
}(_component.BaseComponent);

exports.PageComponent = PageComponent;
},{"./../component.js":"dist/components/component.js"}],"dist/components/input/file-input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileSectionInput = void 0;

var _component = require("./../component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FileSectionInput = /*#__PURE__*/function (_BaseComponent) {
  _inherits(FileSectionInput, _BaseComponent);

  var _super = _createSuper(FileSectionInput);

  function FileSectionInput() {
    var _this;

    _classCallCheck(this, FileSectionInput);

    _this = _super.call(this, "\n        <div class=\"form_container\">\n            <label for=\"title\">File</label>\n            <input type=\"file\" accept=\"image/*\" id=\"file\"/>\n        </div>\n        ");
    _this.file_result = "";

    var element = _this.element.querySelector("#file");

    element.onchange = function () {
      var files = element.files;
      var reader = new FileReader();

      reader.onloadend = function (finishedEvent) {
        var fileReader = finishedEvent.currentTarget;
        _this.file_result = fileReader.result;
      };

      reader.readAsDataURL(files[0]);
    };

    return _this;
  }

  _createClass(FileSectionInput, [{
    key: "file",
    get: function get() {
      return this.file_result;
    }
  }]);

  return FileSectionInput;
}(_component.BaseComponent);

exports.FileSectionInput = FileSectionInput;
},{"./../component.js":"dist/components/component.js"}],"dist/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _selectInput = require("./components/input/select-input.js");

var _urlInput = require("./components/input/url-input.js");

var _dialog = require("./components/page/dialog/dialog.js");

var _note = require("./components/page/item/note.js");

var _image = require("./components/page/item/image.js");

var _video = require("./components/page/item/video.js");

var _page = require("./components/page/page.js");

var _fileInput = require("./components/input/file-input.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(appRoot, dialogRoot) {
    _classCallCheck(this, App);

    this.dialogRoot = dialogRoot;
    this.page = new _page.PageComponent(_page.PageItemComponent);
    this.page.attachTo(appRoot);
    this.bindElementToDialog("#new_video", _urlInput.UrlSectionInput, function (input, title, comment) {
      return new _video.VideoComponent(title, comment, input.url);
    });
    this.bindElementToDialog("#new_image", _fileInput.FileSectionInput, function (input, title, comment) {
      return new _image.ImageComponent(title, comment, input.file);
    });
    this.bindElementToDialog("#new_note", _selectInput.SelectSectionInput, function (input, title, comment) {
      return new _note.NoteComponent(title, comment, input.category);
    });
  }

  _createClass(App, [{
    key: "bindElementToDialog",
    value: function bindElementToDialog(selector, InputComponent, makeSection) {
      var _this = this;

      var element = document.querySelector(selector);
      element.addEventListener("click", function (e) {
        var target = e.currentTarget;
        var dialog = new _dialog.InputDialog(target.innerText);
        var input = new InputComponent();
        dialog.addChild(input);
        dialog.attachTo(_this.dialogRoot);
        dialog.setOnCloseListener(function () {
          dialog.removeFrom(_this.dialogRoot);
        });
        dialog.setOnSubmitListener(function () {
          if (dialog.title === "" || dialog.comment === "") {
            alert("Please enter contents!");
          } else {
            var image = makeSection(input, dialog.title, dialog.comment);

            _this.page.addChild(image);

            dialog.removeFrom(_this.dialogRoot);
          }
        });
      });
    }
  }]);

  return App;
}();

exports.App = App;
new App(document.querySelector(".document"), document.body);
},{"./components/input/select-input.js":"dist/components/input/select-input.js","./components/input/url-input.js":"dist/components/input/url-input.js","./components/page/dialog/dialog.js":"dist/components/page/dialog/dialog.js","./components/page/item/note.js":"dist/components/page/item/note.js","./components/page/item/image.js":"dist/components/page/item/image.js","./components/page/item/video.js":"dist/components/page/item/video.js","./components/page/page.js":"dist/components/page/page.js","./components/input/file-input.js":"dist/components/input/file-input.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56424" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/app.js"], null)
//# sourceMappingURL=/app.b3a8c8ec.js.map