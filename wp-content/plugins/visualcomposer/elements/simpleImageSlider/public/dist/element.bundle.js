/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["vcvWebpackJsonp4x"] = self["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./simpleImageSlider/component.js":
/*!****************************************!*\
  !*** ./simpleImageSlider/component.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleImageSlider; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.browser.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar vcvAPI = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getService)('api');\n\nvar SimpleImageSlider = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SimpleImageSlider, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(SimpleImageSlider);\n\n  function SimpleImageSlider() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, SimpleImageSlider);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SimpleImageSlider, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var clickableOptions = atts.clickableOptions,\n          showCaption = atts.showCaption,\n          images = atts.images,\n          aspectRatio = atts.aspectRatio,\n          customAspectRatio = atts.customAspectRatio,\n          scaleImage = atts.scaleImage,\n          shape = atts.shape,\n          autoplay = atts.autoplay,\n          autoplayDelay = atts.autoplayDelay,\n          effect = atts.effect,\n          pointers = atts.pointers,\n          arrows = atts.arrows,\n          metaCustomId = atts.metaCustomId,\n          customClass = atts.customClass,\n          backgroundImagePosition = atts.backgroundImagePosition,\n          arrowColor = atts.arrowColor,\n          arrowColorHover = atts.arrowColorHover,\n          pointerColor = atts.pointerColor,\n          pointerColorHover = atts.pointerColorHover;\n      var containerClasses = 'vce-simple-image-slider';\n      var wrapperClasses = 'vce-simple-image-slider-wrapper vce';\n      var aspectClasses = 'vce-simple-image-slider-helper';\n      var dotsClasses = 'vce-simple-image-slider-dots';\n      var stylesVariables = {};\n      var containerProps = {};\n      var aspectProps = {};\n      var aspectPercentage = 133;\n\n      if (aspectRatio.indexOf(':') >= 0) {\n        var _aspectRatio$split = aspectRatio.split(':'),\n            _aspectRatio$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_aspectRatio$split, 2),\n            aspectX = _aspectRatio$split2[0],\n            aspectY = _aspectRatio$split2[1];\n\n        aspectClasses += \" vce-simple-image-slider-aspect-ratio--\".concat(aspectX, \"-\").concat(aspectY);\n      } else if (aspectRatio === 'custom') {\n        if (customAspectRatio.indexOf(':') >= 0) {\n          var _customAspectRatio$sp = customAspectRatio.split(':'),\n              _customAspectRatio$sp2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_customAspectRatio$sp, 2),\n              _aspectX = _customAspectRatio$sp2[0],\n              _aspectY = _customAspectRatio$sp2[1];\n\n          _aspectX = parseInt(_aspectX);\n          _aspectY = parseInt(_aspectY);\n\n          if (_aspectX > 0 && _aspectY > 0) {\n            aspectPercentage = 100 / (_aspectX / _aspectY);\n          }\n\n          aspectClasses += ' vce-simple-image-slider-aspect-ratio--custom';\n          aspectProps.style = {\n            paddingTop: \"\".concat(aspectPercentage, \"%\")\n          };\n        }\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        containerClasses += \" \".concat(customClass);\n      }\n\n      if (shape === 'rounded') {\n        wrapperClasses += ' vce-simple-image-slider-shape--rounded';\n      }\n\n      if (metaCustomId) {\n        containerProps.id = metaCustomId;\n      }\n\n      var Slides = images.map(function (image, index) {\n        var customProps = {};\n        var CustomTag = 'div';\n        var imgClasses = 'vce-simple-image-slider-img';\n        var imgTagClasses = '';\n\n        var imgSrc = _this.getImageUrl(image);\n\n        var itemProps = {};\n\n        if (scaleImage) {\n          imgClasses += ' vce-simple-image-slider-img--scale';\n        }\n\n        if (backgroundImagePosition) {\n          stylesVariables['--backgroundPosition'] = backgroundImagePosition;\n        }\n\n        if (clickableOptions === 'url' && image.link && image.link.url) {\n          CustomTag = 'a';\n          var _image$link = image.link,\n              url = _image$link.url,\n              title = _image$link.title,\n              targetBlank = _image$link.targetBlank,\n              relNofollow = _image$link.relNofollow;\n          customProps = {\n            href: url,\n            title: title,\n            target: targetBlank ? '_blank' : undefined,\n            rel: relNofollow ? 'nofollow' : undefined\n          };\n        } else if (clickableOptions === 'imageNewTab') {\n          CustomTag = 'a';\n          customProps = {\n            href: imgSrc,\n            target: '_blank'\n          };\n        } else if (clickableOptions === 'lightbox') {\n          CustomTag = 'a';\n          customProps = {\n            href: imgSrc,\n            'data-lightbox': \"lightbox-\".concat(id)\n          };\n        } else if (clickableOptions === 'photoswipe') {\n          CustomTag = 'a';\n          customProps = {\n            href: imgSrc,\n            'data-photoswipe-image': id,\n            'data-photoswipe-index': index\n          };\n\n          if (showCaption) {\n            customProps['data-photoswipe-caption'] = image && image.caption;\n          }\n\n          containerProps['data-photoswipe-gallery'] = id;\n          itemProps['data-photoswipe-item'] = \"photoswipe-\".concat(id);\n        }\n\n        customProps.style = {\n          backgroundImage: \"url(\".concat(imgSrc, \")\")\n        };\n\n        if (image.filter && image.filter !== 'normal') {\n          imgClasses += \" vce-image-filter--\".concat(image.filter);\n        }\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          className: \"vce-simple-image-slider-item vc-slick-item\",\n          key: \"vce-simple-image-slider-item-\".concat(index, \"-\").concat(id)\n        }, itemProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(CustomTag, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, customProps, {\n          className: imgClasses\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"img\", {\n          className: imgTagClasses,\n          src: imgSrc,\n          style: {\n            display: 'none'\n          },\n          alt: image && image.alt || ''\n        })));\n      });\n      var doAll = this.applyDO('all');\n\n      if (pointerColor) {\n        stylesVariables['--pointerColor'] = pointerColor;\n      }\n\n      if (pointerColorHover) {\n        stylesVariables['--pointerColorHover'] = pointerColorHover;\n      }\n\n      autoplayDelay *= 1000;\n      var prevArrow = '';\n      var nextArrow = '';\n\n      if (arrows) {\n        var arrowClasses = 'vce-simple-image-slider-arrow';\n\n        if (arrowColor) {\n          stylesVariables['--arrowColor'] = arrowColor;\n        }\n\n        if (arrowColorHover) {\n          stylesVariables['--arrowColorHover'] = arrowColorHover;\n        }\n\n        prevArrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n          className: \"\".concat(arrowClasses, \" vce-simple-image-slider-prev-arrow\")\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"svg\", {\n          width: \"16px\",\n          height: \"25px\",\n          viewBox: \"0 0 16 25\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"polygon\", {\n          id: \"Prev-Arrow\",\n          points: \"12.3743687 5.68434189e-14 0 12.3743687 12.0208153 24.395184 14.1421356 22.2738636 4.31790889 12.4496369 14.5709572 2.19658855\"\n        })));\n        nextArrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n          className: \"\".concat(arrowClasses, \" vce-simple-image-slider-next-arrow\")\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"svg\", {\n          width: \"16px\",\n          height: \"25px\",\n          viewBox: \"0 0 16 25\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"polygon\", {\n          id: \"Next-Arrow\",\n          points: \"3.02081528 24.395184 15.395184 12.0208153 3.37436867 1.13686838e-13 1.25304833 2.12132034 11.0772751 11.9455471 0.824226734 22.1985954\"\n        })));\n      }\n\n      var listHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"vce-simple-image-slider-list\",\n        \"data-slick-autoplay\": autoplay ? 'on' : 'off',\n        \"data-slick-autoplay-delay\": \"\".concat(autoplayDelay),\n        \"data-slick-effect\": effect,\n        \"data-slick-dots\": pointers ? 'on' : 'off',\n        \"data-slick-arrows\": arrows ? 'on' : 'off'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"slick-list\"\n      }, prevArrow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"slick-track\"\n      }, Slides), nextArrow));\n      var htmlString = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_8__.renderToStaticMarkup)(listHTML);\n      htmlString += (0,react_dom_server__WEBPACK_IMPORTED_MODULE_8__.renderToStaticMarkup)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: dotsClasses\n      }));\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: containerClasses\n      }, editor, containerProps, {\n        style: stylesVariables\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: wrapperClasses,\n        id: 'el-' + id\n      }, doAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: aspectClasses\n      }, aspectProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"vcvhelper\",\n        \"data-vcvs-html\": htmlString\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"vce-simple-image-slider-list\",\n        \"data-slick-autoplay\": autoplay ? 'on' : 'off',\n        \"data-slick-autoplay-delay\": autoplayDelay,\n        \"data-slick-effect\": effect,\n        \"data-slick-disable-swipe\": \"off\",\n        \"data-slick-dots\": pointers ? 'on' : 'off',\n        \"data-slick-arrows\": arrows ? 'on' : 'off'\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"slick-list\"\n      }, prevArrow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"slick-track\"\n      }, Slides), nextArrow)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: dotsClasses\n      })))));\n    }\n  }]);\n\n  return SimpleImageSlider;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./simpleImageSlider/component.js?");

/***/ }),

/***/ "./simpleImageSlider/index.js":
/*!************************************!*\
  !*** ./simpleImageSlider/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./simpleImageSlider/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = (0,vc_cake__WEBPACK_IMPORTED_MODULE_0__.getService)('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./simpleImageSlider/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./simpleImageSlider/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./simpleImageSlider/editor.css\")\n});\n\n//# sourceURL=webpack:///./simpleImageSlider/index.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./simpleImageSlider/editor.css":
/*!*****************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./simpleImageSlider/editor.css ***!
  \*****************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-simple-image-slider {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./simpleImageSlider/editor.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./simpleImageSlider/styles.css":
/*!*****************************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./simpleImageSlider/styles.css ***!
  \*****************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-simple-image-slider {\\n  width: 100%;\\n  max-width: 100%;\\n  box-sizing: border-box;\\n  direction: ltr;\\n  --backgroundPosition: center center;\\n  --arrowColor: rgba(255, 255, 255, 0.5);\\n  --arrowColorHover: #fff;\\n  --pointerColor: #fff;\\n  --pointerColorHover: #fd9a00;\\n}\\n\\n.vce-simple-image-slider-wrapper {\\n  position: relative;\\n  overflow: hidden;\\n  color: transparent;\\n}\\n\\n/* aspect ratio */\\n.vce-simple-image-slider-helper {\\n  position: relative;\\n  padding-top: 133%;\\n  z-index: 0;\\n}\\n\\n.vce-simple-image-slider-helper.vce-simple-image-slider-aspect-ratio--1-1 {\\n  padding-top: 100%;\\n}\\n\\n.vce-simple-image-slider-helper.vce-simple-image-slider-aspect-ratio--16-9 {\\n  padding-top: 56.25%;\\n}\\n\\n.vce-simple-image-slider-helper.vce-simple-image-slider-aspect-ratio--9-16 {\\n  padding-top: 177.77%;\\n}\\n\\n.vce-simple-image-slider-helper.vce-simple-image-slider-aspect-ratio--4-3 {\\n  padding-top: 75%;\\n}\\n\\n.vce-simple-image-slider-helper.vce-simple-image-slider-aspect-ratio--3-4 {\\n  padding-top: 133%;\\n}\\n\\n.vce-simple-image-slider-helper.vce-simple-image-slider-aspect-ratio--5-3 {\\n  padding-top: 60%;\\n}\\n\\n.vce-simple-image-slider-helper.vce-simple-image-slider-aspect-ratio--3-5 {\\n  padding-top: 166.66%;\\n}\\n\\n.vce-simple-image-slider .vce-simple-image-slider-list {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 1;\\n  height: 100%;\\n}\\n\\n.vce-simple-image-slider .vce-simple-image-slider-list *:focus {\\n  outline: none;\\n}\\n\\n.vce-simple-image-slider-list .slick-list {\\n  overflow: hidden;\\n  height: 100%;\\n}\\n\\n.vce-simple-image-slider-list .slick-track,\\n.vce-simple-image-slider-list .slick-slide,\\n.vce-simple-image-slider-list .vce-simple-image-slider-img {\\n  height: 100%;\\n}\\n\\n.vce-simple-image-slider-list .vce-simple-image-slider-img {\\n  display: block;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n.vce-simple-image-slider-list .vce-simple-image-slider-img.vce-simple-image-slider-img--scale {\\n  background-size: cover;\\n}\\n\\n.vce-simple-image-slider-arrow {\\n  display: block;\\n  position: absolute;\\n  z-index: 9;\\n  top: 0;\\n  bottom: 0;\\n  width: 35px;\\n  cursor: pointer;\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: opacity .3s ease, visibility .3s ease;\\n}\\n\\n.vce-simple-image-slider-list:hover .vce-simple-image-slider-arrow {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n\\n.vce-simple-image-slider-arrow.vce-simple-image-slider-prev-arrow {\\n  left: 0;\\n}\\n\\n.vce-simple-image-slider-arrow.vce-simple-image-slider-next-arrow {\\n  right: 0;\\n}\\n\\n.vce-simple-image-slider-arrow svg {\\n  display: block;\\n  position: absolute;\\n  top: 50%;\\n  -webkit-transform: translateY(-50%);\\n  transform: translateY(-50%);\\n  left: 0;\\n  right: 0;\\n  margin: 0 auto;\\n}\\n\\n.vce-simple-image-slider-arrow svg polygon {\\n  fill: rgba(255, 255, 255, .5);\\n  transition: fill .3s ease;\\n}\\n\\n.vce-simple-image-slider-arrow svg:hover polygon {\\n  fill: #fff;\\n}\\n\\n.vce-simple-image-slider-dots {\\n  position: absolute;\\n  bottom: 20px;\\n  left: 0;\\n  right: 0;\\n  text-align: center;\\n  z-index: 2;\\n}\\n\\n.vce-simple-image-slider-dots .slick-dots {\\n  list-style: none;\\n  margin: 0 auto;\\n  padding: 0;\\n}\\n\\n.vce-simple-image-slider-dots .slick-dots li {\\n  list-style: none;\\n  display: inline-block;\\n  padding: 7px;\\n}\\n\\n.vce-simple-image-slider-dots .slick-dots li:before,\\n.vce-simple-image-slider-dots .slick-dots li:after {\\n  content: none;\\n}\\n\\n.vce-simple-image-slider-dots .slick-dots button {\\n  background: #fff;\\n  font-size: 0px;\\n  display: block;\\n  width: 10px;\\n  height: 10px;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  border: 0;\\n  outline: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.vce-simple-image-slider-dots .slick-dots button:not(:hover):not(:active) {\\n  background: #fff;\\n}\\n\\n.vce-simple-image-slider-dots .slick-dots button:hover,\\n.vce-simple-image-slider-dots .slick-dots .slick-active button,\\n.vce-simple-image-slider-dots .slick-dots .slick-active button:not(:hover):not(:active) {\\n  background: #fd9a00;\\n}\\n\\n.vce-simple-image-slider-wrapper.vce-simple-image-slider-shape--rounded {\\n  border-radius: 5px;\\n  -webkit-transform: translateZ(0);\\n}\\n\\na.vce-simple-image-slider-img {\\n  border-bottom: 0;\\n  text-decoration: none;\\n  box-shadow: none;\\n}\\n\\na.vce-simple-image-slider-img:hover,\\na.vce-simple-image-slider-img:focus {\\n  text-decoration: none;\\n  box-shadow: none;\\n  border-bottom: 0;\\n}\\n\\n.vce-simple-image-slider .vce-simple-image-slider-img img {\\n  box-shadow: none;\\n}\\n\\n/* slick css */\\n.vce-simple-image-slider .slick-slider {\\n  display: block;\\n  box-sizing: border-box;\\n  -webkit-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  -webkit-touch-callout: none;\\n  -khtml-user-select: none;\\n  -ms-touch-action: pan-y;\\n  touch-action: pan-y;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n\\n.vce-simple-image-slider .slick-list {\\n  position: relative;\\n  display: block;\\n  overflow: hidden;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.vce-simple-image-slider .slick-list:focus {\\n  outline: none;\\n}\\n\\n.vce-simple-image-slider .slick-list.dragging {\\n  cursor: pointer;\\n  cursor: hand;\\n}\\n\\n.vce-simple-image-slider .slick-slider .slick-track,\\n.vce-simple-image-slider .slick-slider .slick-list {\\n  -webkit-transform: translate3d(0, 0, 0);\\n  transform: translate3d(0, 0, 0);\\n}\\n\\n.vce-simple-image-slider .slick-track {\\n  position: relative;\\n  top: 0;\\n  left: 0;\\n  display: block;\\n}\\n\\n.vce-simple-image-slider .slick-track:before,\\n.vce-simple-image-slider .slick-track:after {\\n  display: table;\\n  content: '';\\n}\\n\\n.vce-simple-image-slider .slick-track:after {\\n  clear: both;\\n}\\n\\n.vce-simple-image-slider .slick-loading .slick-track {\\n  visibility: hidden;\\n}\\n\\n.vce-simple-image-slider .slick-slide {\\n  display: none;\\n  float: left;\\n  height: 100%;\\n  min-height: 1px;\\n}\\n\\n.vce-simple-image-slider .slick-slide img {\\n  display: block;\\n}\\n\\n.vce-simple-image-slider .slick-slide.slick-loading img {\\n  display: none;\\n}\\n\\n.vce-simple-image-slider .slick-slide.dragging img {\\n  pointer-events: none;\\n}\\n\\n.vce-simple-image-slider .slick-initialized .slick-slide {\\n  display: block;\\n}\\n\\n.vce-simple-image-slider .slick-loading .slick-slide {\\n  visibility: hidden;\\n}\\n\\n.vce-simple-image-slider .slick-arrow.slick-hidden {\\n  display: none;\\n}\\n\\n.vce-simple-image-slider-list .vce-simple-image-slider-img {\\n  background-position: var(--backgroundPosition);\\n}\\n\\n.vce-simple-image-slider .vce-simple-image-slider-arrow svg polygon {\\n  fill: var(--arrowColor);\\n}\\n\\n.vce-simple-image-slider .vce-simple-image-slider-arrow:hover svg polygon {\\n  fill: var(--arrowColorHover);\\n}\\n\\n.vce-simple-image-slider .slick-dots button,\\n.vce-simple-image-slider .slick-dots button:not(:hover):not(:active) {\\n  background: var(--pointerColor);\\n}\\n\\n.vce-simple-image-slider .slick-dots button:hover,\\n.vce-simple-image-slider .slick-dots .slick-active button,\\n.vce-simple-image-slider .slick-dots .slick-active button:not(:hover):not(:active) {\\n  background: var(--pointerColorHover);\\n}\\n\"\n\n//# sourceURL=webpack:///./simpleImageSlider/styles.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./simpleImageSlider/settings.json":
/*!*****************************************!*\
  !*** ./simpleImageSlider/settings.json ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"clickableOptions\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"OnClick action\",\"description\":\"Choose an event performed when clicking on the image.\",\"values\":[{\"label\":\"None\",\"value\":\"\"},{\"label\":\"Lightbox\",\"value\":\"lightbox\"},{\"label\":\"PhotoSwipe\",\"value\":\"photoswipe\"},{\"label\":\"Open the image in a new tab\",\"value\":\"imageNewTab\"},{\"label\":\"Link selector\",\"value\":\"url\"}]}},\"showCaption\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Show the image caption in gallery view\",\"onChange\":{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"photoswipe\"}}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"images\":{\"type\":\"attachimage\",\"access\":\"public\",\"value\":[\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/simpleImageSlider/image-slide-1.png\",\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/simpleImageSlider/image-slide-2.png\",\"https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/simpleImageSlider/image-slide-3.png\"],\"options\":{\"multiple\":true,\"onChange\":{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"url\"}}},\"actions\":[{\"action\":\"attachImageUrls\"}]},\"url\":false,\"imageFilter\":true}},\"backgroundImagePosition\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"center center\",\"options\":{\"label\":\"Image position\",\"values\":[{\"label\":\"Left top\",\"value\":\"left top\",\"icon\":\"vcv-ui-icon-attribute-background-position-left-top\"},{\"label\":\"Center top\",\"value\":\"center top\",\"icon\":\"vcv-ui-icon-attribute-background-position-center-top\"},{\"label\":\"Right top\",\"value\":\"right top\",\"icon\":\"vcv-ui-icon-attribute-background-position-right-top\"},{\"label\":\"Left center\",\"value\":\"left center\",\"icon\":\"vcv-ui-icon-attribute-background-position-left-center\"},{\"label\":\"Center center\",\"value\":\"center center\",\"icon\":\"vcv-ui-icon-attribute-background-position-center-center\"},{\"label\":\"Right center\",\"value\":\"right center\",\"icon\":\"vcv-ui-icon-attribute-background-position-right-center\"},{\"label\":\"Left bottom\",\"value\":\"left bottom\",\"icon\":\"vcv-ui-icon-attribute-background-position-left-bottom\"},{\"label\":\"Center bottom\",\"value\":\"center bottom\",\"icon\":\"vcv-ui-icon-attribute-background-position-center-bottom\"},{\"label\":\"Right bottom\",\"value\":\"right bottom\",\"icon\":\"vcv-ui-icon-attribute-background-position-right-bottom\"}]}},\"aspectRatio\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"3:4\",\"options\":{\"label\":\"Aspect ratio\",\"values\":[{\"label\":\"1:1\",\"value\":\"1:1\"},{\"label\":\"16:9\",\"value\":\"16:9\"},{\"label\":\"9:16\",\"value\":\"9:16\"},{\"label\":\"4:3\",\"value\":\"4:3\"},{\"label\":\"3:4\",\"value\":\"3:4\"},{\"label\":\"5:3\",\"value\":\"5:3\"},{\"label\":\"3:5\",\"value\":\"3:5\"},{\"label\":\"Custom\",\"value\":\"custom\"}]}},\"customAspectRatio\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"2:3\",\"options\":{\"label\":\"Custom aspect ratio (example: \\\\\"2:3\\\\\")\",\"onChange\":{\"rules\":{\"aspectRatio\":{\"rule\":\"value\",\"options\":{\"value\":\"custom\"}}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"scaleImage\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":true,\"options\":{\"label\":\"Scale image\",\"description\":\"Smaller images will scale to fit into the chosen ratio.\"}},\"shape\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"square\",\"options\":{\"label\":\"Shape\",\"values\":[{\"label\":\"Square\",\"value\":\"square\",\"icon\":\"vcv-ui-icon-attribute-shape-square\"},{\"label\":\"Rounded\",\"value\":\"rounded\",\"icon\":\"vcv-ui-icon-attribute-shape-rounded\"}]}},\"autoplay\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":true,\"options\":{\"label\":\"Autoplay\"}},\"autoplayDelay\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"5\",\"options\":{\"label\":\"Autoplay delay in seconds\",\"onChange\":{\"rules\":{\"autoplay\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"effect\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"slideIn\",\"options\":{\"label\":\"Slide effect\",\"values\":[{\"label\":\"Slide In\",\"value\":\"slideIn\"},{\"label\":\"Fade\",\"value\":\"fade\"}]}},\"pointers\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":true,\"options\":{\"label\":\"Show pointers\"}},\"pointerColor\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#fff\",\"options\":{\"label\":\"Pointer color\",\"onChange\":{\"rules\":{\"pointers\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"pointerColorHover\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#fd9a00\",\"options\":{\"label\":\"Pointer hover color\",\"onChange\":{\"rules\":{\"pointers\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"arrows\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Show arrows\"}},\"arrowColor\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"rgba(255, 255, 255, 0.5)\",\"options\":{\"label\":\"Arrow color\",\"onChange\":{\"rules\":{\"arrows\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"arrowColorHover\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#fff\",\"options\":{\"label\":\"Arrow hover color\",\"onChange\":{\"rules\":{\"arrows\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"clickableOptions\",\"showCaption\",\"images\",\"backgroundImagePosition\",\"aspectRatio\",\"customAspectRatio\",\"scaleImage\",\"shape\",\"autoplay\",\"autoplayDelay\",\"effect\",\"pointers\",\"pointerColor\",\"pointerColorHover\",\"arrows\",\"arrowColor\",\"arrowColorHover\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from the custom CSS option.\"}},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"simpleImageSlider\"},\"sharedAssetsLibrary\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"libsNames\":[\"slickSlider\"]},{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"lightbox\"}}},\"libsNames\":[\"lightbox\"]},{\"rules\":{\"clickableOptions\":{\"rule\":\"value\",\"options\":{\"value\":\"photoswipe\"}}},\"libsNames\":[\"photoswipe\"]}]}},\"metaPublicJs\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"libPaths\":[\"public/dist/simpleImageSlider.min.js\"]}]}}}');\n\n//# sourceURL=webpack:///./simpleImageSlider/settings.json?");

/***/ })

},[['./simpleImageSlider/index.js']]]);