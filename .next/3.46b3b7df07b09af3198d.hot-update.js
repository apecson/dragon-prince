webpackHotUpdate(3,{

/***/ "./components/Connect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _jsxFileName = "/Users/aaron/Sites/dragonprince/components/Connect.js";

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var Connect = function Connect() {
    return _react2.default.createElement(
        "section",
        { className: "connect", __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        },
        _react2.default.createElement(
            "h2",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            },
            "Connect With Us"
        )
    );
};
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Connect, "Connect", "/Users/aaron/Sites/dragonprince/components/Connect.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/aaron/Sites/dragonprince/components/MyLayout.js';

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__("./components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__("./components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Connect = __webpack_require__("./components/Connect.js");

var _Connect2 = _interopRequireDefault(_Connect);

__webpack_require__("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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

var _default = Layout;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(layoutStyle, 'layoutStyle', '/Users/aaron/Sites/dragonprince/components/MyLayout.js');
    reactHotLoader.register(Layout, 'Layout', '/Users/aaron/Sites/dragonprince/components/MyLayout.js');
    reactHotLoader.register(_default, 'default', '/Users/aaron/Sites/dragonprince/components/MyLayout.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.46b3b7df07b09af3198d.hot-update.js.map