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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentful = __webpack_require__(8);

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _MyLayout = __webpack_require__(10);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Countdown = __webpack_require__(16);

var _Countdown2 = _interopRequireDefault(_Countdown);

var _link = __webpack_require__(1);

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
                    { key: post.sys.id, className: 'post-thumb post-' + index },
                    _react2.default.createElement('div', { className: 'post-image' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'post-content' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            post.fields.title
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
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
                { className: 'home__about' },
                _react2.default.createElement(
                    'div',
                    { className: 'home__about-inner' },
                    _react2.default.createElement(
                        'div',
                        { className: 'home__about-child home__about-left' },
                        _react2.default.createElement('iframe', { width: '557', height: '340',
                            src: video.fields.youTubeVideo, frameBorder: '0' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'home__about-child home__about-right' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            about.fields.title
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            about.fields.body
                        ),
                        _react2.default.createElement(
                            _link2.default,
                            null,
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary' },
                                'Explore The World'
                            )
                        ),
                        _react2.default.createElement(
                            _link2.default,
                            null,
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary' },
                                'Meet The Characters'
                            )
                        ),
                        _react2.default.createElement(
                            _link2.default,
                            null,
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary' },
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
                    null,
                    'Loading...'
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _MyLayout2.default,
                    null,
                    _react2.default.createElement(_Countdown2.default, null),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'container' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'The Latest'
                        ),
                        _react2.default.createElement(
                            'ul',
                            null,
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(13);

var _Footer2 = _interopRequireDefault(_Footer);

var _Connect = __webpack_require__(14);

var _Connect2 = _interopRequireDefault(_Connect);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layoutStyle = {};

var Layout = function Layout(props) {
    return _react2.default.createElement(
        'div',
        { style: layoutStyle },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
            'main',
            { className: 'content' },
            props.children,
            _react2.default.createElement(_Connect2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = Layout;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(1);

var _link2 = _interopRequireDefault(_link);

var _Navigation = __webpack_require__(12);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStyle = {
    marginRight: 15
};

var Header = function Header() {
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                'ul',
                { className: 'social-links' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/' },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle },
                            'Twitter'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/' },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle },
                            'Facebook'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/' },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle },
                            'Tumblr'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/' },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyle },
                            'Instagram'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'main-logo' },
                _react2.default.createElement('img', { className: 'mx-auto d-block', src: '/static/logo.png', alt: 'The Dragon Prince' })
            )
        ),
        _react2.default.createElement(_Navigation2.default, null)
    );
};

exports.default = Header;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
    return _react2.default.createElement(
        "div",
        { className: "navigation" },
        _react2.default.createElement(
            "ul",
            { className: "navigation-inner" },
            _react2.default.createElement(
                "li",
                { className: "nav-item" },
                "Link"
            ),
            _react2.default.createElement(
                "li",
                { className: "nav-item" },
                "Link"
            ),
            _react2.default.createElement(
                "li",
                { className: "nav-item" },
                "Link"
            ),
            _react2.default.createElement(
                "li",
                { className: "nav-item" },
                "Link"
            )
        )
    );
};

exports.default = Navigation;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        "div",
        null,
        "Copyright Wonderstorm"
    );
};

exports.default = Footer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connect = function Connect() {
    return _react2.default.createElement(
        "section",
        { className: "connect" },
        _react2.default.createElement(
            "div",
            { className: "connect-inner" },
            _react2.default.createElement(
                "h2",
                null,
                "Connect With Us"
            )
        )
    );
};
exports.default = Connect;

/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Countdown = function Countdown() {
    return _react2.default.createElement(
        "div",
        { className: "countdown" },
        "Watch on Netflix in XXXXXXX Days"
    );
};

exports.default = Countdown;

/***/ })
/******/ ]);