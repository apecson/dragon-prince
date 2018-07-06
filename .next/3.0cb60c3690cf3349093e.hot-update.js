webpackHotUpdate(3,{

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/Users/aaron/Sites/dragonprince/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _contentful = __webpack_require__("./node_modules/contentful/dist/contentful.browser.js");

var _lodash = __webpack_require__("./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _MyLayout = __webpack_require__("./components/MyLayout.js");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Countdown = __webpack_require__("./components/Countdown.js");

var _Countdown2 = _interopRequireDefault(_Countdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var client = (0, _contentful.createClient)({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'renderPosts',
        value: function renderPosts() {
            return _lodash2.default.map(this.props.posts.items, function (post) {
                return _react2.default.createElement(
                    'li',
                    { key: post.sys.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    },
                    post.fields.title
                );
            });
        }
    }, {
        key: 'renderAbout',
        value: function renderAbout() {
            var about = this.props.about;

            return _react2.default.createElement(
                'section',
                { className: 'home__about', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'home__about-inner', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'home__about-child home__about-left', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            }
                        },
                        'Video'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'home__about-child home__about-right', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                            }
                        },
                        _react2.default.createElement(
                            'h2',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 41
                                }
                            },
                            about.fields.title
                        ),
                        _react2.default.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 42
                                }
                            },
                            about.fields.body
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var posts = this.props.posts;

            if (!posts) {
                return _react2.default.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    'Loading...'
                );
            }

            return _react2.default.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                },
                _react2.default.createElement(
                    _MyLayout2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    },
                    _react2.default.createElement(_Countdown2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    }),
                    _react2.default.createElement(
                        'h2',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            }
                        },
                        'The Latest'
                    ),
                    this.renderPosts(),
                    this.renderAbout()
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var posts, about;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return client.getEntries({
                                    limit: 6,
                                    order: 'sys.createdAt'
                                });

                            case 2:
                                posts = _context.sent;
                                _context.next = 5;
                                return client.getEntry('2Y0bGanLnGYMKUocyMUA88');

                            case 5:
                                about = _context.sent;
                                return _context.abrupt('return', {
                                    posts: posts,
                                    about: about
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Index;
}(_react.Component);

var _default = Index;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(client, 'client', '/Users/aaron/Sites/dragonprince/pages/index.js');
    reactHotLoader.register(Index, 'Index', '/Users/aaron/Sites/dragonprince/pages/index.js');
    reactHotLoader.register(_default, 'default', '/Users/aaron/Sites/dragonprince/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.0cb60c3690cf3349093e.hot-update.js.map