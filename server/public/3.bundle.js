webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"spinner":{"width":1792,"height":1792,"paths":[{"d":"M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1024 1600q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM320 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1522 1394q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM558 398q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zM1728 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1088 192q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1618 398q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"}]}})


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"minus":{"width":1408,"height":1792,"paths":[{"d":"M1408 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"}]}})


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_awesome_icons_spinner__ = __webpack_require__(101);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['loading', 'block'],
    mounted() {
        window.addEventListener('scroll', this.listen);
        window.addEventListener('wheel', this.listen);
    },
    destroyed() {
        window.removeEventListener('scroll', this.listen);
        window.addEventListener('wheel', this.listen);
    },
    methods: {
        reachBottom() {
            return window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 10;
        },
        listen(event) {
            if (!this.loading && !this.block && this.reachBottom()) {
                this.$emit('reach');
            }
        }
    }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugins_key_codes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome_icons_spinner__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_icons_plus__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_icons_minus__ = __webpack_require__(103);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const listenedKeys = [__WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.UP, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.DOWN, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.LEFT, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.RIGHT, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.ENTER, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.TAB, __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.ESCAPE];

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['show', 'suggestions', 'loading', 'include', 'includeOnly'],
    data() {
        return {
            selectedIndex: 0
        };
    },
    methods: {
        increment() {
            this.selectedIndex = (this.selectedIndex + 1) % this.suggestions.length;
        },
        decrement() {
            const m = this.suggestions.length;
            this.selectedIndex = (this.selectedIndex - 1 % m + m) % m;
        },
        listenKeyboard(event) {
            if (listenedKeys.indexOf(event.keyCode) === -1) return;
            switch (event.keyCode) {
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.LEFT:
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.RIGHT:
                    this.$emit('include', !this.include);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.DOWN:
                    this.decrement();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.UP:
                    this.increment();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.TAB:
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.ENTER:
                    this.select(this.suggestions[this.selectedIndex], this.include || this.includeOnly);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__plugins_key_codes___default.a.ESCAPE:
                    this.$emit('close');
                    break;
            }
            event.preventDefault();
        },
        select(item, include) {
            this.$emit('select', {
                name: item.name,
                include: this.include && include
            });
            this.selectedIndex = 0;
        }
    },
    watch: {
        show(value) {
            if (value) {
                document.addEventListener('keydown', this.listenKeyboard);
            } else {
                document.removeEventListener('keydown', this.listenKeyboard);
            }
        }
    }
});

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoComplete_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoComplete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AutoComplete_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome_icons_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_icons_minus__ = __webpack_require__(103);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data() {
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
        findInput(index) {
            return this.$el.getElementsByTagName('input')[Math.min(index, this.value.length)];
        },
        focusInput(index) {
            this.findInput(index).focus();
        },
        add({ name, include }, index) {
            if (name && this.value.findIndex(tag => tag.name === name) === -1) {
                if (index === this.value.length) {
                    this.newTag = '';
                    this.findInput(index).focus();
                } else {
                    this.value[index].input = '';
                    this.$nextTick(() => this.findInput(index + 1).focus());
                }
                this.$emit('input', [...this.value.slice(0, index), {
                    name,
                    include,
                    input: ''
                }, ...this.value.slice(index, this.value.length)]);
            }
        },
        removeKeyboardBack(index) {
            const input = this.findInput(index);
            if (index > 0 && !input.selectionStart) {
                this.$emit('input', [...this.value.slice(0, index - 1), ...this.value.slice(index, this.value.length)]);
                this.$nextTick(() => this.findInput(index - 1).focus());
            }
        },
        removeKeyboardDelete(index) {
            const input = this.findInput(index);
            if (input.selectionStart === input.value.length) {
                this.$emit('input', [...this.value.slice(0, index), ...this.value.slice(index + 1, this.value.length)]);
                this.$nextTick(() => this.findInput(index).focus());
            }
        },
        removeClick(index) {
            this.$emit('input', [...this.value.slice(0, index), ...this.value.slice(index + 1, this.value.length)]);
            this.$nextTick(() => this.findInput(index).focus());
        },
        moveCursorLeft(index) {
            if (index > 0 && !this.findInput(index).selectionStart) {
                this.findInput(index - 1).focus();
            }
        },
        moveCursorRight(index) {
            const input = this.findInput(index);
            if (index < this.value.length && input.selectionEnd === input.value.length) {
                this.findInput(index + 1).focus();
            }
        },
        displaySuggestions(index, input) {
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
                this.fetchSuggestions(input).then(suggestions => {
                    this.loadingSuggestions = false;
                    this.suggestions = suggestions.filter(s => {
                        return this.value.findIndex(tag => tag.name === s.name) === -1;
                    });
                });
            } else {
                this.showSuggestions = false;
                this.loadingSuggestions = false;
            }
        },
        onSelect(tag) {
            this.add(tag, this.activePosition);
            this.closeSuggestions();
        },
        closeSuggestions() {
            this.showSuggestions = false;
            this.loadingSuggestions = false;
            this.suggestions = [];
        },
        switchInclude(include) {
            this.include = include;
        },
        doSubmitIfNoSuggestion() {
            if (this.showSuggestions) return;
            this.doSubmit();
        },
        doSubmit() {
            if (!this.value.length) return;
            this.closeSuggestions();
            this.focus = false;
            this.$emit('submit', this.value);
        },
        listenClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.showSuggestions = false;
                this.loadingSuggestions = false;
                this.focus = false;
            } else {
                this.focus = true;
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.listenClickOutside);
    },
    destroyed() {
        document.removeEventListener('click', this.listenClickOutside);
    }
});

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    TAB: 9,
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
    ESCAPE: 27
};

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.vue-input-tag-wrapper[data-v-28bb08f0] {\n  cursor: text;\n}\n.new-tag[data-v-28bb08f0], .cursor-only[data-v-28bb08f0] {\n  border: none;\n  background-color: transparent;\n}\n.unbreakable[data-v-28bb08f0] {\n  display: flex;\n  align-items: stretch;\n}\n.cursor-only[data-v-28bb08f0] {\n  min-width: 2px;\n}\n.tag[data-v-28bb08f0] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.tag-button[data-v-28bb08f0] {\n  border-radius: 50% !important;\n  margin-right: 5px;\n}\n.tag-button[data-v-28bb08f0]:focus {\n    border-color: inherit;\n    box-shadow: none;\n}\n.vue-input-tag-wrapper.read-only[data-v-28bb08f0] {\n  cursor: default;\n}\n.input[data-v-28bb08f0] {\n  flex-flow: wrap;\n  height: auto;\n  min-height: 2.25em;\n}\ninput[data-v-28bb08f0]:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\nul[data-v-6e87b6b0] {\n  margin-left: 0;\n  position: absolute;\n  margin-top: -1px;\n  width: 100%;\n  border: 1px solid #b5b5b5;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  z-index: 2;\n  background-color: white;\n  overflow: hidden;\n}\nli[data-v-6e87b6b0] {\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  margin: 0 !important;\n  padding-left: 30px;\n  padding-right: 30px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-out;\n}\nli.selected[data-v-6e87b6b0], li[data-v-6e87b6b0]:hover {\n    background-color: #dbdbdb;\n}\n.button[data-v-6e87b6b0] {\n  margin-top: 2px;\n  border-radius: 5px !important;\n}\n.button.is-outlined[data-v-6e87b6b0] {\n    opacity: 0.8;\n}\n", ""]);

// exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(129),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\components\\ScrollBottom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ScrollBottom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-149c7418", Component.options)
  } else {
    hotAPI.reload("data-v-149c7418", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(134),
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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(130),
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "has-text-centered"
  }, [(_vm.loading) ? _c('aw-icon', {
    attrs: {
      "name": "spinner",
      "scale": "2",
      "spin": ""
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-149c7418", module.exports)
  }
}

/***/ }),

/***/ 130:
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

/***/ 134:
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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1888aacd", content, false);
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

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4d4ecb66", content, false);
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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ScrollBottom_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ScrollBottom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ScrollBottom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__api___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_unwrapTags__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_unwrapTags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__libs_unwrapTags__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        TagInput: __WEBPACK_IMPORTED_MODULE_2__components_forms_TagInput_vue___default.a,
        ScrollBottom: __WEBPACK_IMPORTED_MODULE_1__components_ScrollBottom_vue___default.a
    },
    data() {
        return {
            loadingBottom: false,
            tags: [],
            searchDidOnce: false
        };
    },
    computed: {
        results() {
            return this.$store.state.posts.posts;
        },
        blockBottom() {
            return this.$store.state.posts.blockBottom;
        },
        include() {
            return this.$route.query.include || [];
        },
        exclude() {
            return this.$route.query.exclude || [];
        },
        noMorePost() {
            return this.blockBottom || !this.results.length && this.searchDidOnce;
        }
    },
    methods: {
        fetchSuggestions(input) {
            return __WEBPACK_IMPORTED_MODULE_3__api____default()({
                path: 'GET_tags-suggestion-$input',
                params: { input }
            });
        },
        searchPosts(tags) {
            this.loadingBottom = true;
            const query = { include: this.tags.filter(t => t.include).map(t => t.name).join(',') };
            const exclude = this.tags.filter(t => !t.include).map(t => t.name).join(',');
            if (exclude.length) query.exclude = exclude;
            this.$router.replace({
                name: 'search',
                query
            });
            this.$store.dispatch('posts/SEARCH_POSTS', {
                tags: this.tags,
                replace: true,
                pageSize: 20
            }).then(posts => {
                if (posts.length) __WEBPACK_IMPORTED_MODULE_0_vue__["default"].redrawVueMasonry();
                this.searchDidOnce = true;
                this.$nextTick(() => this.loadingBottom = false);
            });
        },
        loadBottom() {
            this.loadingBottom = true;
            return this.$store.dispatch('posts/SEARCH_POSTS', {
                tags: this.tags,
                reference: this.results[this.results.length - 1].posted_at,
                excludeID: this.results[this.results.length - 1].slug,
                pageSize: 20
            }).then(posts => {
                if (posts.length) __WEBPACK_IMPORTED_MODULE_0_vue__["default"].redrawVueMasonry();
                this.$nextTick(() => this.loadingBottom = false);
            });
        }
    },
    mounted() {
        this.tags = __WEBPACK_IMPORTED_MODULE_4__libs_unwrapTags___default()(this.$route.query.include, this.$route.query.exclude);
        this.searchDidOnce = !!this.tags.length;
    },
    asyncData({ store, route: { query: { include, exclude } } }) {
        store.commit('posts/RESET_POSTS');
        const tags = __WEBPACK_IMPORTED_MODULE_4__libs_unwrapTags___default()(include, exclude);
        if (tags.length) {
            return store.dispatch('posts/SEARCH_POSTS', {
                tags,
                replace: true
            });
        }
    }
});

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var include = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return [].concat(_toConsumableArray(include.split(',').map(function (t) {
        return { name: t, include: true, input: '' };
    })), _toConsumableArray(exclude.split(',').map(function (t) {
        return { name: t, include: false, input: '' };
    }))).filter(function (t) {
        return t.name;
    });
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.limit-width[data-v-34c34abc] {\n  max-width: 600px;\n  display: inline-block;\n}\n.result[data-v-34c34abc] {\n  text-align: center;\n  width: 150px;\n  margin: 5px;\n}\n.result a img[data-v-34c34abc] {\n    display: inline-block;\n    max-width: 100%;\n    max-height: 300px;\n}\n.section[data-v-34c34abc] {\n  position: relative;\n  padding-top: 70px;\n}\n.fixed[data-v-34c34abc] {\n  position: fixed;\n  top: 16px;\n  width: 92%;\n  z-index: 1;\n}\n.results[data-v-34c34abc] {\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section"
  }, [_c('section', {
    class: {
      'hero is-large': !_vm.results.length && !_vm.noMorePost, 'fixed': _vm.results.length || _vm.noMorePost
    }
  }, [_c('div', {
    staticClass: "hero-body has-text-centered"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('tag-input', {
    attrs: {
      "fetchSuggestions": _vm.fetchSuggestions
    },
    on: {
      "submit": _vm.searchPosts
    },
    model: {
      value: (_vm.tags),
      callback: function($$v) {
        _vm.tags = $$v
      },
      expression: "tags"
    }
  })], 1)])]), _vm._v(" "), (_vm.results.length) ? _c('div', {
    directives: [{
      name: "masonry",
      rawName: "v-masonry"
    }],
    staticClass: "results",
    attrs: {
      "transition-duration": "0.1s",
      "item-selector": ".result",
      "fitWidth": true
    }
  }, _vm._l((_vm.results), function(result) {
    return _c('div', {
      directives: [{
        name: "masonry-tile",
        rawName: "v-masonry-tile"
      }],
      staticClass: "result"
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'singlePost',
          params: {
            postID: result.slug
          }
        }
      }
    }, [_c('img', {
      attrs: {
        "src": result.image
      }
    })])], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.noMorePost) ? _c('div', {
    staticClass: "has-text-centered"
  }, [_vm._v("\n        Pas d'autres images à afficher.\n    ")]) : _vm._e(), _vm._v(" "), _c('scroll-bottom', {
    attrs: {
      "block": _vm.blockBottom || !_vm.results.length,
      "loading": _vm.loadingBottom
    },
    on: {
      "reach": _vm.loadBottom
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-34c34abc", module.exports)
  }
}

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("59d068e8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34c34abc\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34c34abc\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(175)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(168),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-34c34abc",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\Cobalt\\Documents\\PersonnalCode\\nivose\\client\\pages\\Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34c34abc", Component.options)
  } else {
    hotAPI.reload("data-v-34c34abc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});