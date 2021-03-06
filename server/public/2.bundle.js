webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    TAB: 9,
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
    ESCAPE: 27
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome_icons_spinner__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_icons_plus__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_icons_minus__ = __webpack_require__(99);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var listenedKeys = [__WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].UP, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].DOWN, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].LEFT, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].RIGHT, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].ENTER, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].TAB, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].ESCAPE];

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['show', 'suggestions', 'loading', 'include', 'includeOnly'],
    data: function data() {
        return {
            selectedIndex: 0
        };
    },

    methods: {
        increment: function increment() {
            this.selectedIndex = (this.selectedIndex + 1) % this.suggestions.length;
        },
        decrement: function decrement() {
            var m = this.suggestions.length;
            this.selectedIndex = (this.selectedIndex - 1 % m + m) % m;
        },
        listenKeyboard: function listenKeyboard(event) {
            if (listenedKeys.indexOf(event.keyCode) === -1) return;
            switch (event.keyCode) {
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].LEFT:
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].RIGHT:
                    this.$emit('include', !this.include);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].DOWN:
                    this.decrement();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].UP:
                    this.increment();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].TAB:
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].ENTER:
                    this.select(this.suggestions[this.selectedIndex], this.include || this.includeOnly);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__["a" /* default */].ESCAPE:
                    this.$emit('close');
                    break;
            }
            event.preventDefault();
        },
        select: function select(item, include) {
            this.$emit('select', {
                name: item.name,
                include: this.include && include
            });
            this.selectedIndex = 0;
        }
    },
    watch: {
        show: function show(value) {
            if (value) {
                document.addEventListener('keydown', this.listenKeyboard);
            } else {
                document.removeEventListener('keydown', this.listenKeyboard);
            }
        }
    }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value'],
    data: function data() {
        return {
            preview: null
        };
    },

    watch: {
        value: function value(file) {
            var _this = this;

            if (file) {
                var reader = new window.FileReader();
                reader.onload = function (e) {
                    return _this.preview = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.preview = null;
            }
        }
    }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoComplete_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoComplete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AutoComplete_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome_icons_search__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_icons_minus__ = __webpack_require__(99);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        AutoComplete: __WEBPACK_IMPORTED_MODULE_0__AutoComplete_vue___default.a
    },
    props: {
        value: {
            type: Array,
            default: []
        },
        placeholder: {
            type: String,
            default: ''
        },
        fetchSuggestions: {
            type: Function,
            required: true
        },
        submitButton: {
            type: Boolean,
            default: true
        },
        includeOnly: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tags: [],
            include: true,
            activePosition: 0,
            newTag: '',
            showSuggestions: '',
            loadingSuggestions: '',
            suggestions: [],
            focus: false
        };
    },

    methods: {
        findInput: function findInput(index) {
            return this.$el.getElementsByTagName('input')[Math.min(index, this.value.length)];
        },
        focusInput: function focusInput(index) {
            this.findInput(index).focus();
        },
        add: function add(_ref, index) {
            var _this = this;

            var name = _ref.name,
                include = _ref.include;

            if (name && this.value.findIndex(function (tag) {
                return tag.name === name;
            }) === -1) {
                if (index === this.value.length) {
                    this.newTag = '';
                    this.findInput(index).focus();
                } else {
                    this.value[index].input = '';
                    this.$nextTick(function () {
                        return _this.findInput(index + 1).focus();
                    });
                }
                this.$emit('input', [].concat(_toConsumableArray(this.value.slice(0, index)), [{
                    name: name,
                    include: include,
                    input: ''
                }], _toConsumableArray(this.value.slice(index, this.value.length))));
            }
        },
        removeKeyboardBack: function removeKeyboardBack(index) {
            var _this2 = this;

            var input = this.findInput(index);
            if (index > 0 && !input.selectionStart) {
                this.$emit('input', [].concat(_toConsumableArray(this.value.slice(0, index - 1)), _toConsumableArray(this.value.slice(index, this.value.length))));
                this.$nextTick(function () {
                    return _this2.findInput(index - 1).focus();
                });
            }
        },
        removeKeyboardDelete: function removeKeyboardDelete(index) {
            var _this3 = this;

            var input = this.findInput(index);
            if (input.selectionStart === input.value.length) {
                this.$emit('input', [].concat(_toConsumableArray(this.value.slice(0, index)), _toConsumableArray(this.value.slice(index + 1, this.value.length))));
                this.$nextTick(function () {
                    return _this3.findInput(index).focus();
                });
            }
        },
        removeClick: function removeClick(index) {
            var _this4 = this;

            this.$emit('input', [].concat(_toConsumableArray(this.value.slice(0, index)), _toConsumableArray(this.value.slice(index + 1, this.value.length))));
            this.$nextTick(function () {
                return _this4.findInput(index).focus();
            });
        },
        moveCursorLeft: function moveCursorLeft(index) {
            if (index > 0 && !this.findInput(index).selectionStart) {
                this.findInput(index - 1).focus();
            }
        },
        moveCursorRight: function moveCursorRight(index) {
            var input = this.findInput(index);
            if (index < this.value.length && input.selectionEnd === input.value.length) {
                this.findInput(index + 1).focus();
            }
        },
        displaySuggestions: function displaySuggestions(index, input) {
            var _this5 = this;

            this.activePosition = index;
            if (this.includeOnly) {
                input = input.replace(/-/g, '');
            }
            if (input.length > 1 || input.length === 1 && input[0] !== '-') {
                this.include = input[0] !== '-';
                if (!this.include) {
                    input = input.replace('-', '');
                }
                this.showSuggestions = true;
                this.loadingSuggestions = true;
                this.fetchSuggestions(input).then(function (suggestions) {
                    _this5.loadingSuggestions = false;
                    _this5.suggestions = suggestions.filter(function (s) {
                        return _this5.value.findIndex(function (tag) {
                            return tag.name === s.name;
                        }) === -1;
                    });
                });
            } else {
                this.showSuggestions = false;
                this.loadingSuggestions = false;
            }
        },
        onSelect: function onSelect(tag) {
            this.add(tag, this.activePosition);
            this.closeSuggestions();
        },
        closeSuggestions: function closeSuggestions() {
            this.showSuggestions = false;
            this.loadingSuggestions = false;
            this.suggestions = [];
        },
        switchInclude: function switchInclude(include) {
            this.include = include;
        },
        doSubmitIfNoSuggestion: function doSubmitIfNoSuggestion() {
            if (this.showSuggestions) return;
            this.doSubmit();
        },
        doSubmit: function doSubmit() {
            if (!this.value.length) return;
            this.closeSuggestions();
            this.focus = false;
            this.$emit('submit', this.value);
        },
        listenClickOutside: function listenClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.showSuggestions = false;
                this.loadingSuggestions = false;
                this.focus = false;
            } else {
                this.focus = true;
            }
        }
    },
    mounted: function mounted() {
        document.addEventListener('click', this.listenClickOutside);
    },
    destroyed: function destroyed() {
        document.removeEventListener('click', this.listenClickOutside);
    }
});

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)(undefined);
// imports


// module
exports.push([module.i, "\n.vue-input-tag-wrapper[data-v-28bb08f0] {\n  cursor: text;\n}\n.new-tag[data-v-28bb08f0], .cursor-only[data-v-28bb08f0] {\n  border: none;\n  background-color: transparent;\n}\n.unbreakable[data-v-28bb08f0] {\n  display: flex;\n  align-items: stretch;\n}\n.cursor-only[data-v-28bb08f0] {\n  min-width: 2px;\n}\n.tag[data-v-28bb08f0] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.tag-button[data-v-28bb08f0] {\n  border-radius: 50% !important;\n  margin-right: 5px;\n}\n.tag-button[data-v-28bb08f0]:focus {\n    border-color: inherit;\n    box-shadow: none;\n}\n.vue-input-tag-wrapper.read-only[data-v-28bb08f0] {\n  cursor: default;\n}\n.input[data-v-28bb08f0] {\n  flex-flow: wrap;\n  height: auto;\n  min-height: 2.25em;\n}\ninput[data-v-28bb08f0]:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)(undefined);
// imports


// module
exports.push([module.i, "\nul[data-v-6e87b6b0] {\n  margin-left: 0;\n  position: absolute;\n  margin-top: -1px;\n  width: 100%;\n  border: 1px solid #b5b5b5;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  z-index: 2;\n  background-color: white;\n  overflow: hidden;\n}\nli[data-v-6e87b6b0] {\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  margin: 0 !important;\n  padding-left: 30px;\n  padding-right: 30px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-out;\n}\nli.selected[data-v-6e87b6b0], li[data-v-6e87b6b0]:hover {\n    background-color: #dbdbdb;\n}\n.button[data-v-6e87b6b0] {\n  margin-top: 2px;\n  border-radius: 5px !important;\n}\n.button.is-outlined[data-v-6e87b6b0] {\n    opacity: 0.8;\n}\n", ""]);

// exports


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)(undefined);
// imports


// module
exports.push([module.i, "\nlabel[data-v-fe5c7384] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 400px;\n  max-height: 50vh;\n  color: #b5b5b5;\n  text-align: center;\n  border: 1px dashed #b5b5b5;\n  border-radius: 3px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n  transition: border-color 0.3s ease-out, color 0.3s ease-out;\n}\nlabel[data-v-fe5c7384]:hover {\n    color: #4a4a4a;\n    border-color: #4a4a4a;\n}\nlabel div[data-v-fe5c7384] {\n    height: 100%;\n}\ninput[data-v-fe5c7384] {\n  position: absolute;\n  width: 0;\n  visibility: hidden;\n}\nimg[data-v-fe5c7384] {\n  object-fit: contain;\n  height: 100%;\n  width: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("1888aacd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28bb08f0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TagInput.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28bb08f0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TagInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("4d4ecb66", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e87b6b0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutoComplete.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e87b6b0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutoComplete.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("d0549688", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fe5c7384\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileInput.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fe5c7384\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(138),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6e87b6b0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\forms\\AutoComplete.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AutoComplete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e87b6b0", Component.options)
  } else {
    hotAPI.reload("data-v-6e87b6b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-fe5c7384",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\forms\\FileInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FileInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe5c7384", Component.options)
  } else {
    hotAPI.reload("data-v-fe5c7384", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(134),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-28bb08f0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\forms\\TagInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TagInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28bb08f0", Component.options)
  } else {
    hotAPI.reload("data-v-28bb08f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field has-addons has-addons-centered"
  }, [_c('div', {
    staticClass: "control is-expanded",
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.doSubmitIfNoSuggestion($event)
      }
    }
  }, [_c('div', {
    staticClass: "input is-large vue-input-tag-wrapper",
    class: {
      'is-focused': _vm.focus
    },
    on: {
      "click": function($event) {
        _vm.focusInput(_vm.value.length);
        _vm.displaySuggestions(_vm.value.length, _vm.newTag);
      }
    }
  }, [_vm._l((_vm.value), function(tag, index) {
    return _c('span', {
      staticClass: "unbreakable",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.focusInput(index)
        }
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (tag.input),
        expression: "tag.input"
      }],
      staticClass: "cursor-only",
      style: ({
        width: tag.input.length + 'ch'
      }),
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (tag.input)
      },
      on: {
        "click": function($event) {
          _vm.displaySuggestions(index, tag.input)
        },
        "input": [function($event) {
          if ($event.target.composing) { return; }
          tag.input = $event.target.value
        }, function($event) {
          _vm.displaySuggestions(index, tag.input)
        }],
        "keydown": [function($event) {
          if (!('button' in $event) && $event.keyCode !== 8) { return null; }
          $event.stopPropagation();
          _vm.removeKeyboardBack(index)
        }, function($event) {
          if (!('button' in $event) && $event.keyCode !== 46) { return null; }
          $event.stopPropagation();
          _vm.removeKeyboardDelete(index)
        }, function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) { return null; }
          if ('button' in $event && $event.button !== 0) { return null; }
          _vm.moveCursorLeft(index)
        }, function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) { return null; }
          if ('button' in $event && $event.button !== 2) { return null; }
          _vm.moveCursorRight(index)
        }]
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "tag is-medium"
    }, [(!_vm.includeOnly) ? _c('button', {
      staticClass: "button is-small tag-button is-outlined",
      class: {
        'is-danger': !tag.include
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          tag.include = !tag.include
        }
      }
    }, [_c('span', {
      staticClass: "icon"
    }, [_c('aw-icon', {
      attrs: {
        "name": tag.include ? 'plus' : 'minus'
      }
    })], 1)]) : _vm._e(), _vm._v(" "), _vm._v("\n                    " + _vm._s(tag.name) + "\n                    "), _c('button', {
      staticClass: "delete",
      on: {
        "click": function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          _vm.removeClick(index)
        }
      }
    })])])
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newTag),
      expression: "newTag"
    }],
    staticClass: "new-tag",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.newTag)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.newTag = $event.target.value
      }, function($event) {
        _vm.displaySuggestions(_vm.value.length, _vm.newTag)
      }],
      "click": function($event) {
        _vm.displaySuggestions(_vm.value.length, _vm.newTag)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && $event.keyCode !== 8) { return null; }
        $event.stopPropagation();
        _vm.removeKeyboardBack(_vm.value.length)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) { return null; }
        if ('button' in $event && $event.button !== 0) { return null; }
        _vm.moveCursorLeft(_vm.value.length)
      }]
    }
  })], 2), _vm._v(" "), _c('auto-complete', {
    attrs: {
      "show": _vm.showSuggestions,
      "suggestions": _vm.suggestions,
      "loading": _vm.loadingSuggestions,
      "include": _vm.include,
      "includeOnly": _vm.includeOnly
    },
    on: {
      "include": _vm.switchInclude,
      "close": function($event) {
        _vm.showSuggestions = false
      },
      "select": _vm.onSelect
    }
  })], 1), _vm._v(" "), (_vm.submitButton) ? _c('div', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary is-large",
    on: {
      "click": _vm.doSubmit
    }
  }, [_c('span', {
    staticClass: "icon is-small is-right"
  }, [_c('aw-icon', {
    attrs: {
      "name": "search",
      "scale": "1.5"
    }
  })], 1)])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28bb08f0", module.exports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "autocomplete field"
  }, [(_vm.loading) ? _c('li', {
    staticClass: "is-loading has-text-centered"
  }, [_c('aw-icon', {
    attrs: {
      "name": "spinner",
      "spin": ""
    }
  })], 1) : (!_vm.suggestions.length) ? _c('li', [_vm._v(" Aucun tag trouvé. ")]) : _vm._l((_vm.suggestions), function(item, index) {
    return _c('li', {
      class: {
        selected: index === _vm.selectedIndex
      },
      on: {
        "click": function($event) {
          _vm.select(item, true)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.name) + "\n        "), (!_vm.includeOnly) ? _c('button', {
      staticClass: "button is-pulled-right is-danger",
      class: {
        'is-outlined': (index !== _vm.selectedIndex) || _vm.include
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select(item, false)
        }
      }
    }, [_c('span', {
      staticClass: "icon"
    }, [_c('aw-icon', {
      attrs: {
        "name": "minus"
      }
    })], 1)]) : _vm._e()])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e87b6b0", module.exports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-item"
  }, [(!_vm.preview) ? [_vm._v("\n            Cliquer ou déposer une image ici\n        ")] : _c('img', {
    staticClass: "image",
    attrs: {
      "src": _vm.preview
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "accept": "image/*"
    },
    on: {
      "change": function($event) {
        _vm.$emit('input', $event.target.files[0])
      }
    }
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fe5c7384", module.exports)
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_forms_FileInput_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_forms_FileInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_forms_FileInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        FileInput: __WEBPACK_IMPORTED_MODULE_1__components_forms_FileInput_vue___default.a,
        TagInput: __WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue___default.a
    },
    data: function data() {
        return {
            loading: false,
            error: null,
            tags: [],
            description: '',
            image: null
        };
    },

    computed: {
        isAuth: function isAuth() {
            return this.$store.state.auth.isAuth;
        },
        activeUser: function activeUser() {
            return this.$store.state.auth.activeUser;
        }
    },
    methods: {
        fetchSuggestions: function fetchSuggestions(input) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api___["a" /* default */])({
                path: 'GET_tags-suggestion-$input',
                params: { input: input }
            });
        },
        submitPost: function submitPost() {
            var _this = this;

            this.loading = true;
            this.error = null;
            var image = this.image;
            if (Array.isArray(image)) image = image[0];
            this.$store.dispatch('posts/SUBMIT_POST', {
                tags: this.tags,
                description: this.description,
                image: image
            }).then(function () {
                return _this.$router.push('/tag/' + _this.tags[0].name);
            }).catch(function (err) {
                return _this.error = err;
            }).then(function () {
                return _this.loading = false;
            });
        }
    }
});

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("b2cb3574", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ada9e98\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ada9e98\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n            Ajouter une image\n        ")]), _vm._v(" "), _c('form', {
    staticClass: "columns",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submitPost($event)
      }
    }
  }, [_c('div', {
    staticClass: "column"
  }, [_c('file-input', {
    model: {
      value: (_vm.image),
      callback: function($$v) {
        _vm.image = $$v
      },
      expression: "image"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v(" Tags (minimum 1) ")]), _vm._v(" "), _c('tag-input', {
    attrs: {
      "fetchSuggestions": _vm.fetchSuggestions,
      "includeOnly": true,
      "submitButton": false
    },
    model: {
      value: (_vm.tags),
      callback: function($$v) {
        _vm.tags = $$v
      },
      expression: "tags"
    }
  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "has-text-centered"
  }, [_c('button', {
    staticClass: "button is-primary is-large",
    class: {
      'is-loading': _vm.loading
    },
    attrs: {
      "type": "submit",
      "disabled": !this.tags.length || !_vm.image
    }
  }, [_vm._v("\n                            Ajouter\n                        ")])])]), _vm._v(" "), (_vm.error) ? _c('div', {
    staticClass: "notification is-danger"
  }, [_vm._v("\n                    Quelque-chose s'est mal passé. Réessayez.\n                ")]) : _vm._e()])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v(" Description (optionnel) ")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('textarea', {
    staticClass: "textarea"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ada9e98", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(172),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4ada9e98",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\pages\\Post.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Post.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ada9e98", Component.options)
  } else {
    hotAPI.reload("data-v-4ada9e98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"spinner":{"width":1792,"height":1792,"paths":[{"d":"M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1024 1600q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM320 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1522 1394q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM558 398q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zM1728 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1088 192q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1618 398q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"}]}})


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"minus":{"width":1408,"height":1792,"paths":[{"d":"M1408 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"}]}})


/***/ })

});