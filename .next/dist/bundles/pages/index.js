module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Connect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/aaron/Sites/dragonprince/components/Connect.js";

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connect = function Connect() {
    return _react2.default.createElement(
        "section",
        { className: "connect", __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        },
        _react2.default.createElement(
            "div",
            { className: "connect-inner", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            },
            _react2.default.createElement(
                "h2",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                "Connect With Us"
            )
        )
    );
};
exports.default = Connect;

/***/ }),

/***/ "./components/Countdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/aaron/Sites/dragonprince/components/Countdown.js";

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Countdown = function Countdown() {
    return _react2.default.createElement(
        "div",
        { className: "countdown", __source: {
                fileName: _jsxFileName,
                lineNumber: 2
            }
        },
        "Watch on Netflix in XXXXXXX Days"
    );
};

exports.default = Countdown;

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/aaron/Sites/dragonprince/components/Footer.js";

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        "div",
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 2
            }
        },
        "Copyright Wonderstorm"
    );
};

exports.default = Footer;

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/aaron/Sites/dragonprince/components/Header.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _Navigation = __webpack_require__("./components/Navigation.js");

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStyle = {
    marginRight: 15
};

var Header = function Header() {
    return _react2.default.createElement(
        'header',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        },
        _react2.default.createElement(
            'div',
            { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            _react2.default.createElement(
                'ul',
                { className: 'social-links', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                _react2.default.createElement(
                    'li',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            },
                            'Twitter'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 13
                                }
                            },
                            'Facebook'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            'Tumblr'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    },
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            'Instagram'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'main-logo', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                _react2.default.createElement('img', { className: 'mx-auto d-block', src: '/static/logo.png', alt: 'The Dragon Prince', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                })
            )
        ),
        _react2.default.createElement(_Navigation2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            }
        })
    );
};

exports.default = Header;

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/aaron/Sites/dragonprince/components/MyLayout.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__("./components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__("./components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Connect = __webpack_require__("./components/Connect.js");

var _Connect2 = _interopRequireDefault(_Connect);

__webpack_require__("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layoutStyle = {};

var Layout = function Layout(props) {
    return _react2.default.createElement(
        'div',
        { style: layoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        },
        _react2.default.createElement(_Header2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        }),
        _react2.default.createElement(
            'main',
            { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            },
            props.children,
            _react2.default.createElement(_Connect2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            })
        ),
        _react2.default.createElement(_Footer2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        })
    );
};

exports.default = Layout;

/***/ }),

/***/ "./components/Navigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/aaron/Sites/dragonprince/components/Navigation.js";

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
    return _react2.default.createElement(
        "div",
        { className: "navigation", __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        },
        _react2.default.createElement(
            "ul",
            { className: "navigation-inner", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            },
            _react2.default.createElement(
                "li",
                { className: "nav-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                "Link"
            ),
            _react2.default.createElement(
                "li",
                { className: "nav-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                "Link"
            ),
            _react2.default.createElement(
                "li",
                { className: "nav-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                "Link"
            ),
            _react2.default.createElement(
                "li",
                { className: "nav-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                "Link"
            )
        )
    );
};

exports.default = Navigation;

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/Users/aaron/Sites/dragonprince/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _contentful = __webpack_require__("contentful");

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _MyLayout = __webpack_require__("./components/MyLayout.js");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Countdown = __webpack_require__("./components/Countdown.js");

var _Countdown2 = _interopRequireDefault(_Countdown);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            return _lodash2.default.map(this.props.posts.items, function (post, index) {
                console.log(post);
                return _react2.default.createElement(
                    'li',
                    { key: post.sys.id, className: 'post-thumb post-' + index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        }
                    },
                    _react2.default.createElement('div', { className: 'post-image', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'post-content', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        _react2.default.createElement(
                            'h3',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            post.fields.title
                        ),
                        _react2.default.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            },
                            post.fields.summary
                        )
                    )
                );
            });
        }
    }, {
        key: 'renderAbout',
        value: function renderAbout() {
            var _props = this.props,
                about = _props.about,
                video = _props.video;


            return _react2.default.createElement(
                'section',
                { className: 'home__about', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'home__about-inner', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'home__about-child home__about-left', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                            }
                        },
                        _react2.default.createElement('iframe', { width: '557', height: '340',
                            src: video.fields.youTubeVideo, frameBorder: '0', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'home__about-child home__about-right', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                            }
                        },
                        _react2.default.createElement(
                            'h2',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 59
                                }
                            },
                            about.fields.title
                        ),
                        _react2.default.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60
                                }
                            },
                            about.fields.body
                        ),
                        _react2.default.createElement(
                            _link2.default,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                }
                            },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 62
                                    }
                                },
                                'Explore The World'
                            )
                        ),
                        _react2.default.createElement(
                            _link2.default,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                }
                            },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 65
                                    }
                                },
                                'Meet The Characters'
                            )
                        ),
                        _react2.default.createElement(
                            _link2.default,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 67
                                }
                            },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 68
                                    }
                                },
                                'Discover The Lore'
                            )
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
                            lineNumber: 79
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
                        lineNumber: 83
                    }
                },
                _react2.default.createElement(
                    _MyLayout2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    },
                    _react2.default.createElement(_Countdown2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    }),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'container', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 86
                            }
                        },
                        _react2.default.createElement(
                            'h2',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 87
                                }
                            },
                            'The Latest'
                        ),
                        _react2.default.createElement(
                            'ul',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 88
                                }
                            },
                            this.renderPosts()
                        )
                    ),
                    this.renderAbout()
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var posts, about, video;
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
                                _context.next = 8;
                                return client.getEntry('5w382WBzbO2yowQaIeImaE');

                            case 8:
                                video = _context.sent;
                                return _context.abrupt('return', {
                                    posts: posts,
                                    about: about,
                                    video: video
                                });

                            case 10:
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

exports.default = Index;

/***/ }),

/***/ "./styles.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "contentful":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map