"use strict";
(self["webpackChunkcourse_navigator"] = self["webpackChunkcourse_navigator"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/OpenSans-Regular.ttf */ "./src/assets/fonts/OpenSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/OpenSans-Light.ttf */ "./src/assets/fonts/OpenSans-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/OpenSans-Medium.ttf */ "./src/assets/fonts/OpenSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "Open Sans";
  font-style: light;
  font-weight: 300;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "Open Sans";
  font-style: medium;
  font-weight: 500;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
:root {
  --main-bg-color: rgb(126, 48, 48);
  --add-btn-color: rgb(160, 160, 160);
}

body {
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: center;
  padding: 50px;
  font-family: "Open Sans", sans-serif;
}

.content-wrapper {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
  color: white;
}

.add-course-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.add-course-button button {
  display: block;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 2px solid var(--add-btn-color);
  font-size: 3rem;
  text-align: center;
  transition: transform ease-in-out 0.2s;
}

.add-course-button button:hover {
  border: 2px solid var(--add-btn-color);
  font-size: 3rem;
  transform: scale(1.1) perspective(0.5px);
}

@media (max-width: 800px) {
  body {
    padding: 40px 20px 40px 20px;
  }
  h1 {
    font-size: 2rem;
  }
  .add-course-button button {
    height: 3.5rem;
    width: 3.5rem;
    font-size: 2rem;
  }
  .content-wrapper {
    width: calc(100vh - 50px);
  }
}
.courses {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.course {
  padding: 30px;
  border-radius: 40px;
  background-color: rgb(99, 31, 31);
  width: min(800px, 100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
}

.course .header {
  display: flex;
  justify-content: space-between;
}

.course .header button {
  display: block;
  height: 2.3rem;
  width: 2.3rem;
  background-color: transparent;
  border: none;
  outline: none;
}

.course .header button img {
  position: absolute;
}

.course input {
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  width: calc(100% - 80px);
  inline-size: calc(100% - 80px);
  overflow-wrap: break-word;
  hyphens: manual;
}

.course input::placeholder {
  color: rgb(168, 168, 168);
}

.course input:focus {
  border-bottom: 1px solid white;
}

.course-input-name {
  font-size: 2rem;
}

.course-menu-btns {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.course-input-prof {
  font-size: 1.3rem;
}

.course .link-header, .course .todos-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.course .link-header-left, .course .todos-header-left {
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: white;
  margin-top: 20px;
}

.course .link-header-left span, .course .todos-header-left span {
  font-size: 1.5rem;
}

.small-button {
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  font-size: 1rem;
  text-align: center;
  transition: transform ease-in-out 0.2s;
  color: white;
  background-color: transparent;
  border: 1px solid white;
}

.small-button:hover {
  transform: scale(1.1) perspective(0.5px);
}

.link-header-right, .todo-header-right {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
}

.link-header-right-top, .todo-header-right-top {
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: white;
  margin-top: 20px;
}

.link-header-right.hidden, .link-header-right-bottom.hidden, .todo-header-right.hidden, .todo-header-right-bottom.hidden {
  display: none;
}

.course .link-header-right .link-input, .task-input.name {
  border-bottom: 1px solid white;
}

.course .link-header-right .link-input.name {
  width: 150px;
}

.course .link-header-right .link-input.link, .task-input.name {
  width: 300px;
}

.link-header-right-bottom, .todo-header-right-bottom {
  color: white;
  font-size: 0.8rem;
}

.link-container {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.link-bubble {
  background-color: white;
  color: black;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  border-radius: 20px;
  font-size: 1rem;
  align-items: center;
}

.link-bubble:hover {
  background-color: rgb(240, 240, 240);
}

.link-bubble a {
  text-decoration: none;
  color: black;
  padding-left: 5px;
}

.link-bubble button {
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  color: rgb(147, 147, 147);
}

.link-bubble button:hover {
  color: black;
}

.todos {
  margin-top: 30px;
}

.todos-container {
  background-color: white;
  padding: 18px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 18px;
}

.todo-point {
  display: flex;
  justify-content: left;
  gap: 10px;
}

.todo-point span {
  padding-bottom: 3px;
  border-bottom: 1px solid black;
  width: 100%;
}

.todo-check-btn {
  display: block;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  font-size: 1rem;
  text-align: center;
  color: white;
  background-color: transparent;
  border: 1px solid black;
}

.todo-check-btn.checked {
  background-color: rgb(0, 0, 0);
}

@media (max-width: 800px) {
  .courses {
    width: calc(100vw - 40px);
  }
  .course {
    width: auto;
    gap: 5px;
  }
  .content-wrapper {
    gap: 50px;
  }
  .course-input-name {
    font-size: 1.5rem;
  }
  .course-input-prof {
    font-size: 1rem;
  }
  .course .link-header-left span, .course .todos-header-left span {
    font-size: 1.2rem;
  }
  .small-button {
    height: 1.2rem;
    width: 1.2rem;
    font-size: 0.6rem;
  }
  .course .header button {
    height: 2rem;
    width: 2rem;
  }
  .link-bubble {
    padding: 5px;
  }
  .link-bubble a {
    font-size: 0.8rem;
  }
  .todo-point-text {
    font-size: 0.8rem;
  }
  .todo-check-btn {
    height: 0.8rem;
    width: 0.8rem;
  }
  .todos-container {
    padding: 5px;
  }
  .course .link-header, .course .todos-header {
    flex-direction: column;
  }
  .link-header-right-top, .todo-header-right-top {
    flex-direction: column;
  }
  .link-header-right-top .small-button, .todo-header-right-top, .small-button {
    align-self: flex-end;
  }
  .course .link-header-right .link-input.name {
    width: 100%;
  }
  .course .link-header-right .link-input.link, .task-input.name {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/fonts.scss","webpack://./src/styles/base.scss","webpack://./src/styles/course.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(../assets/fonts/OpenSans-Regular.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"Open Sans\";\n  font-style: light;\n  font-weight: 300;\n  font-display: swap;\n  src: url(../assets/fonts/OpenSans-Light.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"Open Sans\";\n  font-style: medium;\n  font-weight: 500;\n  font-display: swap;\n  src: url(../assets/fonts/OpenSans-Medium.ttf) format(\"truetype\");\n}\n:root {\n  --main-bg-color: rgb(126, 48, 48);\n  --add-btn-color: rgb(160, 160, 160);\n}\n\nbody {\n  background-color: var(--main-bg-color);\n  display: flex;\n  justify-content: center;\n  padding: 50px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.content-wrapper {\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 80px;\n}\n\nh1 {\n  font-size: 4rem;\n  font-weight: bold;\n  color: white;\n}\n\n.add-course-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.add-course-button button {\n  display: block;\n  height: 5rem;\n  width: 5rem;\n  border-radius: 50%;\n  border: 2px solid var(--add-btn-color);\n  font-size: 3rem;\n  text-align: center;\n  transition: transform ease-in-out 0.2s;\n}\n\n.add-course-button button:hover {\n  border: 2px solid var(--add-btn-color);\n  font-size: 3rem;\n  transform: scale(1.1) perspective(0.5px);\n}\n\n@media (max-width: 800px) {\n  body {\n    padding: 40px 20px 40px 20px;\n  }\n  h1 {\n    font-size: 2rem;\n  }\n  .add-course-button button {\n    height: 3.5rem;\n    width: 3.5rem;\n    font-size: 2rem;\n  }\n  .content-wrapper {\n    width: calc(100vh - 50px);\n  }\n}\n.courses {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n}\n\n.course {\n  padding: 30px;\n  border-radius: 40px;\n  background-color: rgb(99, 31, 31);\n  width: min(800px, 100vh - 50px);\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  gap: 10px;\n}\n\n.course .header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.course .header button {\n  display: block;\n  height: 2.3rem;\n  width: 2.3rem;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\n.course .header button img {\n  position: absolute;\n}\n\n.course input {\n  color: white;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: calc(100% - 80px);\n  inline-size: calc(100% - 80px);\n  overflow-wrap: break-word;\n  hyphens: manual;\n}\n\n.course input::placeholder {\n  color: rgb(168, 168, 168);\n}\n\n.course input:focus {\n  border-bottom: 1px solid white;\n}\n\n.course-input-name {\n  font-size: 2rem;\n}\n\n.course-menu-btns {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.course-input-prof {\n  font-size: 1.3rem;\n}\n\n.course .link-header, .course .todos-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.course .link-header-left, .course .todos-header-left {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  color: white;\n  margin-top: 20px;\n}\n\n.course .link-header-left span, .course .todos-header-left span {\n  font-size: 1.5rem;\n}\n\n.small-button {\n  display: block;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  font-size: 1rem;\n  text-align: center;\n  transition: transform ease-in-out 0.2s;\n  color: white;\n  background-color: transparent;\n  border: 1px solid white;\n}\n\n.small-button:hover {\n  transform: scale(1.1) perspective(0.5px);\n}\n\n.link-header-right, .todo-header-right {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 5px;\n}\n\n.link-header-right-top, .todo-header-right-top {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  color: white;\n  margin-top: 20px;\n}\n\n.link-header-right.hidden, .link-header-right-bottom.hidden, .todo-header-right.hidden, .todo-header-right-bottom.hidden {\n  display: none;\n}\n\n.course .link-header-right .link-input, .task-input.name {\n  border-bottom: 1px solid white;\n}\n\n.course .link-header-right .link-input.name {\n  width: 150px;\n}\n\n.course .link-header-right .link-input.link, .task-input.name {\n  width: 300px;\n}\n\n.link-header-right-bottom, .todo-header-right-bottom {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.link-container {\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.link-bubble {\n  background-color: white;\n  color: black;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  border-radius: 20px;\n  font-size: 1rem;\n  align-items: center;\n}\n\n.link-bubble:hover {\n  background-color: rgb(240, 240, 240);\n}\n\n.link-bubble a {\n  text-decoration: none;\n  color: black;\n  padding-left: 5px;\n}\n\n.link-bubble button {\n  background-color: transparent;\n  border: none;\n  font-size: 1.1rem;\n  color: rgb(147, 147, 147);\n}\n\n.link-bubble button:hover {\n  color: black;\n}\n\n.todos {\n  margin-top: 30px;\n}\n\n.todos-container {\n  background-color: white;\n  padding: 18px;\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-radius: 18px;\n}\n\n.todo-point {\n  display: flex;\n  justify-content: left;\n  gap: 10px;\n}\n\n.todo-point span {\n  padding-bottom: 3px;\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\n.todo-check-btn {\n  display: block;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  font-size: 1rem;\n  text-align: center;\n  color: white;\n  background-color: transparent;\n  border: 1px solid black;\n}\n\n.todo-check-btn.checked {\n  background-color: rgb(0, 0, 0);\n}\n\n@media (max-width: 800px) {\n  .courses {\n    width: calc(100vw - 40px);\n  }\n  .course {\n    width: auto;\n    gap: 5px;\n  }\n  .content-wrapper {\n    gap: 50px;\n  }\n  .course-input-name {\n    font-size: 1.5rem;\n  }\n  .course-input-prof {\n    font-size: 1rem;\n  }\n  .course .link-header-left span, .course .todos-header-left span {\n    font-size: 1.2rem;\n  }\n  .small-button {\n    height: 1.2rem;\n    width: 1.2rem;\n    font-size: 0.6rem;\n  }\n  .course .header button {\n    height: 2rem;\n    width: 2rem;\n  }\n  .link-bubble {\n    padding: 5px;\n  }\n  .link-bubble a {\n    font-size: 0.8rem;\n  }\n  .todo-point-text {\n    font-size: 0.8rem;\n  }\n  .todo-check-btn {\n    height: 0.8rem;\n    width: 0.8rem;\n  }\n  .todos-container {\n    padding: 5px;\n  }\n  .course .link-header, .course .todos-header {\n    flex-direction: column;\n  }\n  .link-header-right-top, .todo-header-right-top {\n    flex-direction: column;\n  }\n  .link-header-right-top .small-button, .todo-header-right-top, .small-button {\n    align-self: flex-end;\n  }\n  .course .link-header-right .link-input.name {\n    width: 100%;\n  }\n  .course .link-header-right .link-input.link, .task-input.name {\n    width: 100%;\n  }\n}","@font-face {\r\n    font-family: 'Open Sans';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: url(../assets/fonts/OpenSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Open Sans';\r\n    font-style: light;\r\n    font-weight: 300;\r\n    font-display: swap;\r\n    src: url(../assets/fonts/OpenSans-Light.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Open Sans';\r\n    font-style: medium;\r\n    font-weight: 500;\r\n    font-display: swap;\r\n    src: url(../assets/fonts/OpenSans-Medium.ttf) format('truetype');\r\n}",":root {\r\n    --main-bg-color: rgb(126, 48, 48);\r\n    --add-btn-color: rgb(160, 160, 160);\r\n}\r\n\r\nbody {\r\n    background-color: var(--main-bg-color);\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 50px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.content-wrapper {\r\n    max-width: 1200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 80px;\r\n}\r\n\r\nh1 {\r\n    font-size: 4rem;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.add-course-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.add-course-button button {\r\n  display: block;\r\n  height: 5rem;\r\n  width: 5rem;\r\n  border-radius: 50%;\r\n  border: 2px solid var(--add-btn-color);\r\n  font-size: 3rem;\r\n  text-align: center;\r\n  transition: transform ease-in-out 0.2s;\r\n}\r\n\r\n.add-course-button button:hover {\r\n    border: 2px solid var(--add-btn-color);\r\n    font-size: 3rem;\r\n    transform: scale(1.1) perspective(0.5px);\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    body {\r\n        padding: 40px 20px 40px 20px;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .add-course-button button {\r\n        height: 3.5rem;\r\n        width: 3.5rem;\r\n        font-size: 2rem;\r\n      }\r\n\r\n    .content-wrapper {\r\n        width: calc(100vh - 50px);\r\n    }\r\n }\r\n",".courses {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 40px;\n}\n\n.course {\n    padding: 30px;\n    border-radius: 40px;\n    background-color: rgb(99, 31, 31);\n    width: min(800px, calc(100vh - 50px));\n    display: flex;\n    flex-direction: column;\n    justify-content: left;\n    gap: 10px;\n}\n\n.course .header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.course .header button {\n    display: block;\n    height: 2.3rem;\n    width: 2.3rem;\n    background-color: transparent;\n    border: none;\n    outline: none;\n}\n\n.course .header button img {\n    position: absolute;\n}\n\n.course input {\n    color: white;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    width: calc(100% - 80px);\n    inline-size: calc(100% - 80px);\n    overflow-wrap: break-word;\n    hyphens: manual;\n}\n\n.course input::placeholder {\n    color: rgb(168, 168, 168);\n}\n\n.course input:focus {\n    border-bottom: 1px solid white;\n}\n\n.course-input-name {\n    font-size: 2rem;\n}\n\n.course-menu-btns {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n.course-input-prof {\n    font-size: 1.3rem;\n}\n\n.course .link-header, .course .todos-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.course .link-header-left, .course .todos-header-left {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    color: white;\n    margin-top: 20px;\n}\n\n.course .link-header-left span, .course .todos-header-left span {\n    font-size: 1.5rem;\n}\n\n.small-button {\n  display: block;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  font-size: 1rem;\n  text-align: center;\n  transition: transform ease-in-out 0.2s;\n  color: white;\n  background-color: transparent;\n  border: 1px solid white;\n}\n\n.small-button:hover {\n    transform: scale(1.1) perspective(0.5px);\n}\n\n.link-header-right, .todo-header-right {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-bottom: 5px;\n}\n\n.link-header-right-top, .todo-header-right-top {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    color: white;\n    margin-top: 20px;\n}\n\n.link-header-right.hidden, .link-header-right-bottom.hidden, .todo-header-right.hidden, .todo-header-right-bottom.hidden {\n    display: none\n}\n\n.course .link-header-right .link-input, .task-input.name {\n    border-bottom: 1px solid white;\n}\n\n.course .link-header-right .link-input.name {\n    width: 150px;\n}\n\n.course .link-header-right .link-input.link, .task-input.name {\n    width: 300px;\n}\n\n.link-header-right-bottom, .todo-header-right-bottom {\n    color: white;\n    font-size: 0.8rem;\n}\n\n.link-container {\n    margin-top: 15px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.link-bubble {\n    background-color: white;\n    color: black;\n    padding: 10px;\n    display: flex;\n    flex-direction: row;\n    gap: 6px;\n    border-radius: 20px;\n    font-size: 1rem;\n    align-items: center;\n}\n\n.link-bubble:hover {\n    background-color: rgb(240, 240, 240);\n}\n\n.link-bubble a {\n    text-decoration: none;\n    color: black;\n    padding-left: 5px;\n}\n\n.link-bubble button {\n    background-color: transparent;\n    border: none;\n    font-size: 1.1rem;\n    color: rgb(147, 147, 147);\n}\n\n.link-bubble button:hover {\n    color: black;\n}\n\n.todos {\n    margin-top: 30px;\n}\n\n.todos-container {\n    background-color: white;\n    padding: 18px;\n    margin-top: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-radius: 18px;\n}\n\n.todo-point {\n    display: flex;\n    justify-content: left;\n    gap: 10px;\n}\n\n.todo-point span {\n    padding-bottom: 3px;\n    border-bottom: 1px solid black;\n    width: 100%;\n}\n\n.todo-check-btn {\n  display: block;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  font-size: 1rem;\n  text-align: center;\n  color: white;\n  background-color: transparent;\n  border: 1px solid black;\n}\n\n.todo-check-btn.checked {\n    background-color: rgb(0, 0, 0);\n}\n\n\n@media (max-width: 800px) {\n    .courses {\n        width: calc(100vw - 40px);\n    }\n\n    .course {\n        width: auto;\n        gap: 5px;\n    }\n\n    .content-wrapper {\n        gap: 50px;\n    }\n\n    .course-input-name {\n        font-size: 1.5rem;\n    }\n\n    .course-input-prof {\n        font-size: 1rem;\n    }\n\n    .course .link-header-left span, .course .todos-header-left span {\n        font-size: 1.2rem;\n    }\n\n    .small-button {\n        height: 1.2rem;\n        width: 1.2rem;\n        font-size: 0.6rem;\n    }\n\n    .course .header button {\n        height: 2rem;\n        width: 2rem;\n    }\n\n    .link-bubble {\n        padding: 5px;\n    }\n\n    .link-bubble a {\n        font-size: 0.8rem;\n    }\n\n    .todo-point-text {\n        font-size: 0.8rem;\n    }\n\n    .todo-check-btn {\n        height: 0.8rem;\n        width: 0.8rem;\n    }\n\n    .todos-container {\n        padding: 5px;\n    }\n\n    .course .link-header, .course .todos-header {\n        flex-direction: column;\n    }\n\n    .link-header-right-top, .todo-header-right-top {\n        flex-direction: column;\n    }\n\n    .link-header-right-top .small-button, .todo-header-right-top, .small-button {\n        align-self: flex-end;\n    }\n\n    .course .link-header-right .link-input.name {\n        width: 100%;\n    }\n    \n    .course .link-header-right .link-input.link, .task-input.name {\n        width: 100%;\n    }\n }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Course.js":
/*!*******************************!*\
  !*** ./src/modules/Course.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/modules/Todos.js");
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Links */ "./src/modules/Links.js");



const Course = (name, prof = "", linkArray = [], todoArray = []) => ({
  name,
  prof,
  links: linkArray,
  todos: todoArray,
});



// This courses module will host an array of courses and provide operations for them
const courses = (() => {
  let coursesArray = [];

  const addCourse = (name, prof = "", linkArray = [], todoArray = []) => {
    const newCourse = Course(name, prof, linkArray, todoArray);
    coursesArray.push(newCourse);
  };

  const removeCourse = (name) => {
    coursesArray = coursesArray.filter((course) => (course.name !== name));
  };

  const getCourse = (name) => coursesArray.find((course) => course.name === name);

  const setCourseName = (oldName, newName) => {
    const changedCourse = coursesArray.find((course) => course.name === oldName);
    changedCourse.name = newName;
  }

  const setCourseProf = (name, newProf) => {
    const changedCourse = coursesArray.find((course) => course.name === name);
    changedCourse.prof = newProf;
  }

  const addLinkToCourse = (courseName, linkName, linkUrl) => {
    const course = getCourse(courseName);
    if (course) {
      const newLink = (0,_Links__WEBPACK_IMPORTED_MODULE_1__["default"])(linkName, linkUrl);
      course.links.push(newLink);
    }
  };

  const getLinkFromCourse = (courseName, linkName) => {
    const course = getCourse(courseName);
    return course.links.find((link) => link.name === linkName);
  }

  const removeLinkFromCourse = (courseName, linkName) => {
    const course = getCourse(courseName);
    course.links = course.links.filter((link) => link.name !== linkName);
  };

  const addToDoToCourse = (courseName, todoName, isComplete = false) => {
    const course = getCourse(courseName);
    if (course) {
      const newTodo = (0,_Todos__WEBPACK_IMPORTED_MODULE_0__["default"])(todoName, isComplete);
      course.todos.push(newTodo);
    }
  };

  const getToDoFromCourse = (courseName, toDo) => {
    const course = getCourse(courseName);
    return course.todos.find((todo) => todo.name === toDo);
  }

  const toggleToDoFromCourse = (courseName, toDo) => {
    const course = getCourse(courseName);
    course.todos.forEach((todoEntry) => {
      if (todoEntry.name === toDo) {
        // eslint-disable-next-line no-param-reassign
        todoEntry.complete = !todoEntry.complete;
      }
    });
  };

  const filterToDoFromCourse = (courseName) => {
    const course = getCourse(courseName);
    course.todos = course.todos.filter((todo) => (todo.complete !== true));
  }

  const getAllCourses = () => coursesArray;

  return {
    addCourse,
    removeCourse,
    getCourse,
    setCourseName,
    setCourseProf,
    addLinkToCourse,
    getLinkFromCourse,
    removeLinkFromCourse,
    addToDoToCourse,
    getToDoFromCourse,
    toggleToDoFromCourse,
    filterToDoFromCourse,
    getAllCourses,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (courses);


/***/ }),

/***/ "./src/modules/Links.js":
/*!******************************!*\
  !*** ./src/modules/Links.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Link = (name, url) => ({ name, url });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = (() => {
    const saveData = (data) => {
        window.localStorage.setItem("courses", JSON.stringify(data));
    }
    
    const getData = () => {
        const courses = localStorage.getItem("courses");
        return JSON.parse(courses);
    }

    return {saveData, getData}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ "./src/modules/Todos.js":
/*!******************************!*\
  !*** ./src/modules/Todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ToDo = (name, complete) => ({ name, complete });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);

/***/ }),

/***/ "./src/modules/Utilities.js":
/*!**********************************!*\
  !*** ./src/modules/Utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isValidURL(url) {
    const r = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;

    return r.test(url)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValidURL);

/***/ }),

/***/ "./src/modules/View.js":
/*!*****************************!*\
  !*** ./src/modules/View.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Course */ "./src/modules/Course.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities */ "./src/modules/Utilities.js");
/* harmony import */ var _assets_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/trash-can-outline.svg */ "./src/assets/trash-can-outline.svg");
/* eslint-disable no-use-before-define */






const addBtn = document.querySelector('.add-btn');
const courseList = document.querySelector('.courses');



// *****************************
// Generating the Initial Bubble
// ******************************

function initCourse() {
    const courseBubble = document.createElement('div');
    courseBubble.classList.add("course");

    const courseBubbleHeader = document.createElement('div');
    courseBubbleHeader.classList.add("header");

    const courseBubbleHeaderName = document.createElement('input');
    courseBubbleHeaderName.type = "text";
    courseBubbleHeaderName.placeholder = "Course Name";
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    courseBubble.appendChild(courseBubbleHeader);
    courseList.appendChild(courseBubble);

    function processName(name) {
        if (_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getCourse(name) === undefined && name !== "") {
            _Course__WEBPACK_IMPORTED_MODULE_0__["default"].addCourse(name);
            _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
            courseList.removeChild(courseBubbleHeader.parentElement);
            generateCourseBubble(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getCourse(name));
        } else {
             courseList.removeChild(courseBubble);
        }
    }

    courseBubbleHeaderName.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { document.activeElement.blur(); }
    });
    courseBubbleHeaderName.addEventListener("blur", () => {
        processName(courseBubbleHeaderName.value) 
    });

    courseBubbleHeaderName.focus();
}

addBtn.addEventListener("click", () => {
    initCourse();
})





// **************************
// Generating the Full Bubble
// **************************

function generateHeader(course) {
    const courseBubbleHeader = document.createElement('div');
    courseBubbleHeader.classList.add("header");

    const courseBubbleHeaderName = document.createElement('input');
    courseBubbleHeaderName.value = course.name;
    courseBubbleHeaderName.type = "text";
    courseBubbleHeaderName.placeholder = "Course Name";
    courseBubbleHeaderName.prevvalue = course.name;
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    courseBubbleHeaderName.addEventListener("change", () => {
        if (_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getCourse(courseBubbleHeaderName.value) === undefined && courseBubbleHeaderName.value !== "") {
            _Course__WEBPACK_IMPORTED_MODULE_0__["default"].setCourseName(course.name, courseBubbleHeaderName.value);
            _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
            courseBubbleHeaderName.prevvalue = courseBubbleHeaderName.value;
        } else {
            courseBubbleHeaderName.value = courseBubbleHeaderName.prevvalue;
        }
        document.activeElement.blur();
    });

    courseBubbleHeaderName.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { document.activeElement.blur(); }
    });

    const courseBubbleHeaderMenu = document.createElement('div');
    courseBubbleHeaderMenu.classList.add("course-menu-btns");

    const courseBubbleHeaderMenuDelete = document.createElement('button');
    courseBubbleHeaderMenuDelete.type = "button";
    courseBubbleHeaderMenuDelete.classList.add("delete");
    courseBubbleHeaderMenuDelete.style.background = `url(${_assets_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__})`

    courseBubbleHeaderMenuDelete.addEventListener("click", () => {
        _Course__WEBPACK_IMPORTED_MODULE_0__["default"].removeCourse(course.name);
        _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
        courseList.removeChild(courseBubbleHeader.parentElement);
    })

    courseBubbleHeaderMenu.appendChild(courseBubbleHeaderMenuDelete);
    courseBubbleHeader.appendChild(courseBubbleHeaderMenu);


    return courseBubbleHeader;
}


function generateProf(course) {
    const courseBubbleProf = document.createElement('input');

    courseBubbleProf.value = course.prof;
    courseBubbleProf.type = "text";
    courseBubbleProf.placeholder = "Course Prof";
    courseBubbleProf.classList.add("course-input-prof");

    courseBubbleProf.addEventListener("change", () => {
        _Course__WEBPACK_IMPORTED_MODULE_0__["default"].setCourseProf(course.name, courseBubbleProf.value);
        _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
        document.activeElement.blur();
    });

    courseBubbleProf.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { document.activeElement.blur(); }
    });

    return courseBubbleProf;
}


function generateLinks(course) {
    const courseBubbleLinks = document.createElement('div');
    courseBubbleLinks.classList.add("links");

    const courseBubbleLinksHeader = document.createElement('div');
    courseBubbleLinksHeader.classList.add("link-header");


    // Link Title and Add Button
    const courseBubbleLinksHeaderLeft = document.createElement('div');
    courseBubbleLinksHeaderLeft.classList.add("link-header-left");

    const courseBubbleLinksHeaderText = document.createElement('span');
    courseBubbleLinksHeaderText.innerText = "Links";

    const courseBubbleLinksHeaderButton = document.createElement('button');
    courseBubbleLinksHeaderButton.classList.add("small-button");
    courseBubbleLinksHeaderButton.type = "button";
    courseBubbleLinksHeaderButton.innerText = "+";

    courseBubbleLinksHeaderLeft.appendChild(courseBubbleLinksHeaderText);
    courseBubbleLinksHeaderLeft.appendChild(courseBubbleLinksHeaderButton);


    // Link Input
    const courseBubbleLinksHeaderRight = document.createElement('div');
    courseBubbleLinksHeaderRight.classList.add("link-header-right", "hidden");
    const courseBubbleLinksHeaderRightTop = document.createElement('div');
    courseBubbleLinksHeaderRightTop.classList.add("link-header-right-top", "hidden");

    const courseBubbleLinksNameInput = document.createElement('input');
    courseBubbleLinksNameInput.classList.add("link-input", "name");
    courseBubbleLinksNameInput.type = "text";
    courseBubbleLinksNameInput.placeholder = "Name";
    const courseBubbleLinksURLInput = document.createElement('input');
    courseBubbleLinksURLInput.classList.add("link-input", "link");
    courseBubbleLinksURLInput.type = "url";
    courseBubbleLinksURLInput.placeholder = "URL";

    const courseBubbleLinksAddInput = document.createElement('button');
    courseBubbleLinksAddInput.classList.add("small-button");
    courseBubbleLinksAddInput.type = "button";
    courseBubbleLinksAddInput.innerText = ">";

    const courseBubbleLinksHeaderRightBottom = document.createElement('span');
    courseBubbleLinksHeaderRightBottom.classList.add("link-header-right-bottom", "hidden");
    courseBubbleLinksHeaderRightBottom.innerText = "Please input a name (50 characters or less) and a valid URL";

    function generateURL() {
        const linkName = courseBubbleLinksNameInput.value;
        const linkURL = courseBubbleLinksURLInput.value;

        if ((0,_Utilities__WEBPACK_IMPORTED_MODULE_2__["default"])(linkURL) && linkName !== "" && linkName.length <= 50) {
            _Course__WEBPACK_IMPORTED_MODULE_0__["default"].addLinkToCourse(course.name, linkName, linkURL);
            generateLinkBubble(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getLinkFromCourse(course.name, linkName));
            _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
            document.activeElement.blur();
            courseBubbleLinksHeaderRight.classList.add("hidden");
            courseBubbleLinksHeaderRightBottom.classList.add("hidden");
            courseBubbleLinksNameInput.value = "";
            courseBubbleLinksURLInput.value = "";
        } else {
            courseBubbleLinksHeaderRightBottom.classList.remove("hidden");
        }
    }


    // Event Listeners
    courseBubbleLinksAddInput.addEventListener("click", generateURL);

    courseBubbleLinksURLInput.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { generateURL() }
    });

    courseBubbleLinksNameInput.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { generateURL() }
    });

    courseBubbleLinksHeaderButton.addEventListener("click", () => {
        courseBubbleLinksHeaderRight.classList.remove("hidden");
        courseBubbleLinksNameInput.focus();
    });


    // Piece together
    courseBubbleLinksHeaderRightTop.appendChild(courseBubbleLinksNameInput);
    courseBubbleLinksHeaderRightTop.appendChild(courseBubbleLinksURLInput);
    courseBubbleLinksHeaderRightTop.appendChild(courseBubbleLinksAddInput);
    courseBubbleLinksHeaderRight.appendChild(courseBubbleLinksHeaderRightTop);
    courseBubbleLinksHeaderRight.appendChild(courseBubbleLinksHeaderRightBottom);


    // Link Container
    const courseBubbleLinksContainer = document.createElement('div');
    courseBubbleLinksContainer.classList.add("link-container");

    course.links.forEach((link) => {
        generateLinkBubble(link);
    });

    function generateLinkBubble(link) {
        const LinkBubble = document.createElement('div');
        LinkBubble.classList.add("link-bubble");

        const LinkBubbleText = document.createElement('a');
        LinkBubbleText.classList.add("link-bubble-anchor");
        LinkBubbleText.innerText = link.name;
        LinkBubbleText.href = link.url;
        LinkBubbleText.target = "new";

        const LinkBubbleDeleteBtn = document.createElement('button');
        LinkBubbleDeleteBtn.type = "button";
        LinkBubbleDeleteBtn.innerText = "×";

        LinkBubble.appendChild(LinkBubbleText);
        LinkBubble.appendChild(LinkBubbleDeleteBtn);
        courseBubbleLinksContainer.appendChild(LinkBubble);

        LinkBubbleDeleteBtn.addEventListener("click", () => {
            _Course__WEBPACK_IMPORTED_MODULE_0__["default"].removeLinkFromCourse(course.name, link.name);
            _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
            courseBubbleLinksContainer.removeChild(LinkBubble);
        })
    }


    // Piece things together
    courseBubbleLinksHeader.appendChild(courseBubbleLinksHeaderLeft);
    courseBubbleLinksHeader.appendChild(courseBubbleLinksHeaderRight);
    courseBubbleLinks.appendChild(courseBubbleLinksHeader);
    courseBubbleLinks.appendChild(courseBubbleLinksContainer);

    return courseBubbleLinks;
}







function generateToDos(course) {
    const courseBubbleToDos = document.createElement('div');
    courseBubbleToDos.classList.add("todos");

    const courseBubbleToDosHeader = document.createElement('div');
    courseBubbleToDosHeader.classList.add("todos-header");


    // Link Title and Add Button
    const courseBubbleToDosHeaderLeft = document.createElement('div');
    courseBubbleToDosHeaderLeft.classList.add("todos-header-left");

    const courseBubbleToDosHeaderText = document.createElement('span');
    courseBubbleToDosHeaderText.innerText = "To Do List";

    const courseBubbleToDosHeaderButton = document.createElement('button');
    courseBubbleToDosHeaderButton.classList.add("small-button");
    courseBubbleToDosHeaderButton.type = "button";
    courseBubbleToDosHeaderButton.innerText = "+";

    courseBubbleToDosHeaderLeft.appendChild(courseBubbleToDosHeaderText);
    courseBubbleToDosHeaderLeft.appendChild(courseBubbleToDosHeaderButton);


    // To Do Input
    const courseBubbleToDosHeaderRight = document.createElement('div');
    courseBubbleToDosHeaderRight.classList.add("todo-header-right", "hidden");
    const courseBubbleToDosHeaderRightTop = document.createElement('div');
    courseBubbleToDosHeaderRightTop.classList.add("todo-header-right-top", "hidden");

    const courseBubbleToDosTaskInput = document.createElement('input');
    courseBubbleToDosTaskInput.classList.add("task-input", "name");
    courseBubbleToDosTaskInput.type = "text";
    courseBubbleToDosTaskInput.placeholder = "Task";

    const courseBubbleToDosAddInput = document.createElement('button');
    courseBubbleToDosAddInput.classList.add("small-button");
    courseBubbleToDosAddInput.type = "button";
    courseBubbleToDosAddInput.innerText = ">";

    const courseBubbleToDosHeaderRightBottom = document.createElement('span');
    courseBubbleToDosHeaderRightBottom.classList.add("todo-header-right-bottom", "hidden");
    courseBubbleToDosHeaderRightBottom.innerText = "Please input a non-empty task";


    function generateTask() {
        const task = courseBubbleToDosTaskInput.value;

        if (task !== "") {
            _Course__WEBPACK_IMPORTED_MODULE_0__["default"].addToDoToCourse(course.name, task, false);
            generateToDoPoint(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getToDoFromCourse(course.name, task));
            adjustEmptyContainer();
            _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
            document.activeElement.blur();
            courseBubbleToDosHeaderRight.classList.add("hidden");
            courseBubbleToDosHeaderRightBottom.classList.add("hidden");
            courseBubbleToDosTaskInput.value = "";
        } else {
            courseBubbleToDosHeaderRightBottom.classList.remove("hidden");
        }
    }


    // Event Listeners
    courseBubbleToDosAddInput.addEventListener("click", generateTask);

    courseBubbleToDosTaskInput.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { generateTask() }
    });

    courseBubbleToDosHeaderButton.addEventListener("click", () => {
        courseBubbleToDosHeaderRight.classList.remove("hidden");
        courseBubbleToDosTaskInput.focus();
    });


    // Piece together Header
    courseBubbleToDosHeaderRightTop.appendChild(courseBubbleToDosTaskInput);
    courseBubbleToDosHeaderRightTop.appendChild(courseBubbleToDosAddInput);
    courseBubbleToDosHeaderRight.appendChild(courseBubbleToDosHeaderRightTop);
    courseBubbleToDosHeaderRight.appendChild(courseBubbleToDosHeaderRightBottom);




    // ToDos Container
    const courseBubbleToDosContainer = document.createElement('div');
    courseBubbleToDosContainer.classList.add("todos-container");
    adjustEmptyContainer();
    course.todos.forEach((todo) => {
        generateToDoPoint(todo);
    });

    function adjustEmptyContainer() {
        if (course.todos.length !== 0) {
            courseBubbleToDosContainer.style.padding = "18px";
        } else {
            courseBubbleToDosContainer.style.padding = "0px";
        }
    }

    function generateToDoPoint(todo) {
        const ToDoPoint = document.createElement('div');
        ToDoPoint.classList.add("todo-point");

        const ToDoPointCheck = document.createElement('button');
        ToDoPointCheck.classList.add("todo-check-btn");
        ToDoPointCheck.type = "button";

        const ToDoPointText = document.createElement('span');
        ToDoPointText.classList.add("todo-point-text");
        ToDoPointText.innerText = todo.name;

        ToDoPointCheck.addEventListener("click", () => {
            _Course__WEBPACK_IMPORTED_MODULE_0__["default"].toggleToDoFromCourse(course.name, todo.name);
            _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
            const {complete} = _Course__WEBPACK_IMPORTED_MODULE_0__["default"].getToDoFromCourse(course.name, todo.name);
            if (complete === true) {
                ToDoPointText.style.textDecoration = "line-through";
                ToDoPointCheck.classList.add("checked");
            } else {
                ToDoPointText.style.textDecoration = "none";
                ToDoPointCheck.classList.remove("checked");
            }
        })

        ToDoPoint.appendChild(ToDoPointCheck);
        ToDoPoint.appendChild(ToDoPointText);
        courseBubbleToDosContainer.appendChild(ToDoPoint);
    }


    // Piece things together
    courseBubbleToDosHeader.appendChild(courseBubbleToDosHeaderLeft);
    courseBubbleToDosHeader.appendChild(courseBubbleToDosHeaderRight);
    courseBubbleToDos.appendChild(courseBubbleToDosHeader);
    courseBubbleToDos.appendChild(courseBubbleToDosContainer);

    return courseBubbleToDos;
}



// *************************
// Loading Data into Bubbles
// *************************

function generateCourseBubble(course) {
    // Course Container
    const courseBubble = document.createElement('div');
    courseBubble.classList.add("course");

    // Add Header
    courseBubble.appendChild(generateHeader(course));

    // Add Prof
    courseBubble.appendChild(generateProf(course));

    // Add Links
    courseBubble.appendChild(generateLinks(course));

    // Add ToDos
    courseBubble.appendChild(generateToDos(course));

    // Add to Course Bubbles
    courseList.appendChild(courseBubble);
}

function filterToDos(courseName) {
    _Course__WEBPACK_IMPORTED_MODULE_0__["default"].filterToDoFromCourse(courseName);
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCourses());
}

function loadCourses() {
    const data = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getData();
    if (data !== null) {
        data.forEach((course) => {
            _Course__WEBPACK_IMPORTED_MODULE_0__["default"].addCourse(course.name, course.prof, course.links, course.todos);
            filterToDos(course.name);
            generateCourseBubble(_Course__WEBPACK_IMPORTED_MODULE_0__["default"].getCourse(course.name));
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCourses);


/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/modules/View.js");



(0,_View__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/assets/fonts/OpenSans-Light.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Light.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba19b360bc99b580b45b.ttf";

/***/ }),

/***/ "./src/assets/fonts/OpenSans-Medium.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Medium.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b0a682fe3717764627e.ttf";

/***/ }),

/***/ "./src/assets/fonts/OpenSans-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a6cfa5890d7f3eef585.ttf";

/***/ }),

/***/ "./src/assets/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/assets/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b33d523ef43b53d4753c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzL21haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLG9KQUF1RDtBQUNuRyw0Q0FBNEMsZ0pBQXFEO0FBQ2pHLDRDQUE0QyxrSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5T0FBeU8sS0FBSyxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sZ3FCQUFncUIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwrQkFBK0IsS0FBSyxzSkFBc0oscUJBQXFCLEtBQUssVUFBVSxxQkFBcUIsS0FBSyxZQUFZLHVCQUF1QixLQUFLLG1CQUFtQixtQkFBbUIsS0FBSywrREFBK0Qsa0JBQWtCLG9CQUFvQixLQUFLLFdBQVcsZ0NBQWdDLHdCQUF3QixLQUFLLG9tQkFBb21CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsaUpBQWlKLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1CLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxXQUFXLDhCQUE4QixzQkFBc0IsR0FBRyxnQkFBZ0IsK0JBQStCLHVCQUF1QixxQkFBcUIsdUJBQXVCLHdFQUF3RSxHQUFHLGNBQWMsK0JBQStCLHNCQUFzQixxQkFBcUIsdUJBQXVCLHNFQUFzRSxHQUFHLGNBQWMsK0JBQStCLHVCQUF1QixxQkFBcUIsdUJBQXVCLHVFQUF1RSxHQUFHLFNBQVMsc0NBQXNDLHdDQUF3QyxHQUFHLFVBQVUsMkNBQTJDLGtCQUFrQiw0QkFBNEIsa0JBQWtCLDJDQUEyQyxHQUFHLHNCQUFzQixzQkFBc0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRyxRQUFRLG9CQUFvQixzQkFBc0IsaUJBQWlCLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRywrQkFBK0IsbUJBQW1CLGlCQUFpQixnQkFBZ0IsdUJBQXVCLDJDQUEyQyxvQkFBb0IsdUJBQXVCLDJDQUEyQyxHQUFHLHFDQUFxQywyQ0FBMkMsb0JBQW9CLDZDQUE2QyxHQUFHLCtCQUErQixVQUFVLG1DQUFtQyxLQUFLLFFBQVEsc0JBQXNCLEtBQUssK0JBQStCLHFCQUFxQixvQkFBb0Isc0JBQXNCLEtBQUssc0JBQXNCLGdDQUFnQyxLQUFLLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLDRCQUE0QixjQUFjLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLHNDQUFzQyxvQ0FBb0Msa0JBQWtCLDJCQUEyQiwwQkFBMEIsY0FBYyxHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLEdBQUcsNEJBQTRCLG1CQUFtQixtQkFBbUIsa0JBQWtCLGtDQUFrQyxpQkFBaUIsa0JBQWtCLEdBQUcsZ0NBQWdDLHVCQUF1QixHQUFHLG1CQUFtQixpQkFBaUIsa0NBQWtDLGlCQUFpQixrQkFBa0IsNkJBQTZCLG1DQUFtQyw4QkFBOEIsb0JBQW9CLEdBQUcsZ0NBQWdDLDhCQUE4QixHQUFHLHlCQUF5QixtQ0FBbUMsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyxpREFBaUQsa0JBQWtCLHdCQUF3QixtQ0FBbUMsR0FBRywyREFBMkQsa0JBQWtCLHdCQUF3QixjQUFjLGlCQUFpQixxQkFBcUIsR0FBRyxxRUFBcUUsc0JBQXNCLEdBQUcsbUJBQW1CLG1CQUFtQixtQkFBbUIsa0JBQWtCLHVCQUF1QixvQkFBb0IsdUJBQXVCLDJDQUEyQyxpQkFBaUIsa0NBQWtDLDRCQUE0QixHQUFHLHlCQUF5Qiw2Q0FBNkMsR0FBRyw0Q0FBNEMsa0JBQWtCLDJCQUEyQixhQUFhLHVCQUF1QixHQUFHLG9EQUFvRCxrQkFBa0Isd0JBQXdCLGNBQWMsaUJBQWlCLHFCQUFxQixHQUFHLDhIQUE4SCxrQkFBa0IsR0FBRyw4REFBOEQsbUNBQW1DLEdBQUcsaURBQWlELGlCQUFpQixHQUFHLG1FQUFtRSxpQkFBaUIsR0FBRywwREFBMEQsaUJBQWlCLHNCQUFzQixHQUFHLHFCQUFxQixxQkFBcUIsa0JBQWtCLG9CQUFvQixjQUFjLEdBQUcsa0JBQWtCLDRCQUE0QixpQkFBaUIsa0JBQWtCLGtCQUFrQix3QkFBd0IsYUFBYSx3QkFBd0Isb0JBQW9CLHdCQUF3QixHQUFHLHdCQUF3Qix5Q0FBeUMsR0FBRyxvQkFBb0IsMEJBQTBCLGlCQUFpQixzQkFBc0IsR0FBRyx5QkFBeUIsa0NBQWtDLGlCQUFpQixzQkFBc0IsOEJBQThCLEdBQUcsK0JBQStCLGlCQUFpQixHQUFHLFlBQVkscUJBQXFCLEdBQUcsc0JBQXNCLDRCQUE0QixrQkFBa0IscUJBQXFCLGtCQUFrQiwyQkFBMkIsY0FBYyx3QkFBd0IsR0FBRyxpQkFBaUIsa0JBQWtCLDBCQUEwQixjQUFjLEdBQUcsc0JBQXNCLHdCQUF3QixtQ0FBbUMsZ0JBQWdCLEdBQUcscUJBQXFCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixvQkFBb0IsdUJBQXVCLGlCQUFpQixrQ0FBa0MsNEJBQTRCLEdBQUcsNkJBQTZCLG1DQUFtQyxHQUFHLCtCQUErQixjQUFjLGdDQUFnQyxLQUFLLGFBQWEsa0JBQWtCLGVBQWUsS0FBSyxzQkFBc0IsZ0JBQWdCLEtBQUssd0JBQXdCLHdCQUF3QixLQUFLLHdCQUF3QixzQkFBc0IsS0FBSyxxRUFBcUUsd0JBQXdCLEtBQUssbUJBQW1CLHFCQUFxQixvQkFBb0Isd0JBQXdCLEtBQUssNEJBQTRCLG1CQUFtQixrQkFBa0IsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssb0JBQW9CLHdCQUF3QixLQUFLLHNCQUFzQix3QkFBd0IsS0FBSyxxQkFBcUIscUJBQXFCLG9CQUFvQixLQUFLLHNCQUFzQixtQkFBbUIsS0FBSyxpREFBaUQsNkJBQTZCLEtBQUssb0RBQW9ELDZCQUE2QixLQUFLLGlGQUFpRiwyQkFBMkIsS0FBSyxpREFBaUQsa0JBQWtCLEtBQUssbUVBQW1FLGtCQUFrQixLQUFLLEdBQUcsZUFBZSxpQ0FBaUMsMkJBQTJCLHlCQUF5QiwyQkFBMkIsMEVBQTBFLEtBQUssb0JBQW9CLGlDQUFpQywwQkFBMEIseUJBQXlCLDJCQUEyQix3RUFBd0UsS0FBSyxvQkFBb0IsaUNBQWlDLDJCQUEyQix5QkFBeUIsMkJBQTJCLHlFQUF5RSxLQUFLLFVBQVUsMENBQTBDLDRDQUE0QyxLQUFLLGNBQWMsK0NBQStDLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLDZDQUE2QyxLQUFLLDBCQUEwQiwwQkFBMEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsZ0NBQWdDLGtCQUFrQixLQUFLLFlBQVksd0JBQXdCLDBCQUEwQixxQkFBcUIsS0FBSyw0QkFBNEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsa0JBQWtCLEtBQUssbUNBQW1DLHFCQUFxQixtQkFBbUIsa0JBQWtCLHlCQUF5Qiw2Q0FBNkMsc0JBQXNCLHlCQUF5Qiw2Q0FBNkMsS0FBSyx5Q0FBeUMsK0NBQStDLHdCQUF3QixpREFBaUQsS0FBSyxtQ0FBbUMsY0FBYyx5Q0FBeUMsU0FBUyxnQkFBZ0IsNEJBQTRCLFNBQVMsdUNBQXVDLDJCQUEyQiwwQkFBMEIsNEJBQTRCLFdBQVcsOEJBQThCLHNDQUFzQyxTQUFTLE1BQU0saUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLGdCQUFnQixHQUFHLGFBQWEsb0JBQW9CLDBCQUEwQix3Q0FBd0MsNENBQTRDLG9CQUFvQiw2QkFBNkIsNEJBQTRCLGdCQUFnQixHQUFHLHFCQUFxQixvQkFBb0IscUNBQXFDLEdBQUcsNEJBQTRCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9DQUFvQyxtQkFBbUIsb0JBQW9CLEdBQUcsZ0NBQWdDLHlCQUF5QixHQUFHLG1CQUFtQixtQkFBbUIsb0NBQW9DLG1CQUFtQixvQkFBb0IsK0JBQStCLHFDQUFxQyxnQ0FBZ0Msc0JBQXNCLEdBQUcsZ0NBQWdDLGdDQUFnQyxHQUFHLHlCQUF5QixxQ0FBcUMsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLGlEQUFpRCxvQkFBb0IsMEJBQTBCLHFDQUFxQyxHQUFHLDJEQUEyRCxvQkFBb0IsMEJBQTBCLGdCQUFnQixtQkFBbUIsdUJBQXVCLEdBQUcscUVBQXFFLHdCQUF3QixHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQix1QkFBdUIsb0JBQW9CLHVCQUF1QiwyQ0FBMkMsaUJBQWlCLGtDQUFrQyw0QkFBNEIsR0FBRyx5QkFBeUIsK0NBQStDLEdBQUcsNENBQTRDLG9CQUFvQiw2QkFBNkIsZUFBZSx5QkFBeUIsR0FBRyxvREFBb0Qsb0JBQW9CLDBCQUEwQixnQkFBZ0IsbUJBQW1CLHVCQUF1QixHQUFHLDhIQUE4SCxzQkFBc0IsOERBQThELHFDQUFxQyxHQUFHLGlEQUFpRCxtQkFBbUIsR0FBRyxtRUFBbUUsbUJBQW1CLEdBQUcsMERBQTBELG1CQUFtQix3QkFBd0IsR0FBRyxxQkFBcUIsdUJBQXVCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsa0JBQWtCLDhCQUE4QixtQkFBbUIsb0JBQW9CLG9CQUFvQiwwQkFBMEIsZUFBZSwwQkFBMEIsc0JBQXNCLDBCQUEwQixHQUFHLHdCQUF3QiwyQ0FBMkMsR0FBRyxvQkFBb0IsNEJBQTRCLG1CQUFtQix3QkFBd0IsR0FBRyx5QkFBeUIsb0NBQW9DLG1CQUFtQix3QkFBd0IsZ0NBQWdDLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsc0JBQXNCLDhCQUE4QixvQkFBb0IsdUJBQXVCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDBCQUEwQixHQUFHLGlCQUFpQixvQkFBb0IsNEJBQTRCLGdCQUFnQixHQUFHLHNCQUFzQiwwQkFBMEIscUNBQXFDLGtCQUFrQixHQUFHLHFCQUFxQixtQkFBbUIsaUJBQWlCLGdCQUFnQix1QkFBdUIsb0JBQW9CLHVCQUF1QixpQkFBaUIsa0NBQWtDLDRCQUE0QixHQUFHLDZCQUE2QixxQ0FBcUMsR0FBRyxpQ0FBaUMsZ0JBQWdCLG9DQUFvQyxPQUFPLGlCQUFpQixzQkFBc0IsbUJBQW1CLE9BQU8sMEJBQTBCLG9CQUFvQixPQUFPLDRCQUE0Qiw0QkFBNEIsT0FBTyw0QkFBNEIsMEJBQTBCLE9BQU8seUVBQXlFLDRCQUE0QixPQUFPLHVCQUF1Qix5QkFBeUIsd0JBQXdCLDRCQUE0QixPQUFPLGdDQUFnQyx1QkFBdUIsc0JBQXNCLE9BQU8sc0JBQXNCLHVCQUF1QixPQUFPLHdCQUF3Qiw0QkFBNEIsT0FBTywwQkFBMEIsNEJBQTRCLE9BQU8seUJBQXlCLHlCQUF5Qix3QkFBd0IsT0FBTywwQkFBMEIsdUJBQXVCLE9BQU8scURBQXFELGlDQUFpQyxPQUFPLHdEQUF3RCxpQ0FBaUMsT0FBTyxxRkFBcUYsK0JBQStCLE9BQU8scURBQXFELHNCQUFzQixPQUFPLDJFQUEyRSxzQkFBc0IsT0FBTyxJQUFJLHFCQUFxQjtBQUM5a29CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdmIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFpSjtBQUNqSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJIQUFPOzs7O0FBSTJGO0FBQ25ILE9BQU8saUVBQWUsMkhBQU8sSUFBSSwySEFBTyxVQUFVLDJIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjJCO0FBQ0E7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQUk7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrREFBSTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RHdkIsK0JBQStCLFdBQVc7O0FBRTFDLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDRnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2J2QixvQ0FBb0MsZ0JBQWdCOztBQUVwRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ0ZuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnpCO0FBQytCO0FBQ0M7QUFDSzs7QUFFb0I7O0FBRXpEO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrQ0FBTztBQUNuQixZQUFZLCtDQUFPO0FBQ25CLFlBQVksZ0RBQU8sVUFBVSwrQ0FBTztBQUNwQztBQUNBLGlDQUFpQywrQ0FBTztBQUN4QyxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrQ0FBTztBQUNuQixZQUFZLCtDQUFPO0FBQ25CLFlBQVksZ0RBQU8sVUFBVSwrQ0FBTztBQUNwQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0Esa0NBQWtDO0FBQ2xDLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsMERBQVUsQ0FBQzs7QUFFdEU7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsUUFBUSxnREFBTyxVQUFVLCtDQUFPO0FBQ2hDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmLFFBQVEsZ0RBQU8sVUFBVSwrQ0FBTztBQUNoQztBQUNBLEtBQUs7O0FBRUw7QUFDQSxrQ0FBa0M7QUFDbEMsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxzREFBVTtBQUN0QixZQUFZLCtDQUFPO0FBQ25CLCtCQUErQiwrQ0FBTztBQUN0QyxZQUFZLGdEQUFPLFVBQVUsK0NBQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEMsS0FBSzs7QUFFTDtBQUNBLGtDQUFrQztBQUNsQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFPO0FBQ25CLFlBQVksZ0RBQU8sVUFBVSwrQ0FBTztBQUNwQztBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0NBQU87QUFDbkIsOEJBQThCLCtDQUFPO0FBQ3JDO0FBQ0EsWUFBWSxnREFBTyxVQUFVLCtDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrQ0FBTztBQUNuQixZQUFZLGdEQUFPLFVBQVUsK0NBQU87QUFDcEMsbUJBQW1CLFVBQVUsRUFBRSwrQ0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBTztBQUNYLElBQUksZ0RBQU8sVUFBVSwrQ0FBTztBQUM1Qjs7QUFFQTtBQUNBLGlCQUFpQixnREFBTztBQUN4QjtBQUNBO0FBQ0EsWUFBWSwrQ0FBTztBQUNuQjtBQUNBLGlDQUFpQywrQ0FBTztBQUN4QyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDN2NFO0FBQ0k7O0FBRWpDLGlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLW5hdmlnYXRvci8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2UtbmF2aWdhdG9yLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly9jb3Vyc2UtbmF2aWdhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY291cnNlLW5hdmlnYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2UtbmF2aWdhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY291cnNlLW5hdmlnYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9zcmMvbW9kdWxlcy9Db3Vyc2UuanMiLCJ3ZWJwYWNrOi8vY291cnNlLW5hdmlnYXRvci8uL3NyYy9tb2R1bGVzL0xpbmtzLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9zcmMvbW9kdWxlcy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2UtbmF2aWdhdG9yLy4vc3JjL21vZHVsZXMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9zcmMvbW9kdWxlcy9WaWV3LmpzIiwid2VicGFjazovL2NvdXJzZS1uYXZpZ2F0b3IvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9PcGVuU2Fucy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG46cm9vdCB7XG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDEyNiwgNDgsIDQ4KTtcbiAgLS1hZGQtYnRuLWNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDgwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkLWNvdXJzZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5hZGQtY291cnNlLWJ1dHRvbiBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hZGQtYnRuLWNvbG9yKTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xufVxuXG4uYWRkLWNvdXJzZS1idXR0b24gYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWRkLWJ0bi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHBlcnNwZWN0aXZlKDAuNXB4KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDIwcHg7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuYWRkLWNvdXJzZS1idXR0b24gYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICB3aWR0aDogMy41cmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICB9XG59XG4uY291cnNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDQwcHg7XG59XG5cbi5jb3Vyc2Uge1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDMxLCAzMSk7XG4gIHdpZHRoOiBtaW4oODAwcHgsIDEwMHZoIC0gNTBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY291cnNlIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb3Vyc2UgLmhlYWRlciBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyLjNyZW07XG4gIHdpZHRoOiAyLjNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb3Vyc2UgLmhlYWRlciBidXR0b24gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY291cnNlIGlucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIGlubGluZS1zaXplOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgaHlwaGVuczogbWFudWFsO1xufVxuXG4uY291cnNlIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XG59XG5cbi5jb3Vyc2UgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5jb3Vyc2UtaW5wdXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNvdXJzZS1tZW51LWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb3Vyc2UtaW5wdXQtcHJvZiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uY291cnNlIC5saW5rLWhlYWRlciwgLmNvdXJzZSAudG9kb3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY291cnNlIC5saW5rLWhlYWRlci1sZWZ0LCAuY291cnNlIC50b2Rvcy1oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY291cnNlIC5saW5rLWhlYWRlci1sZWZ0IHNwYW4sIC5jb3Vyc2UgLnRvZG9zLWhlYWRlci1sZWZ0IHNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDAuMnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uc21hbGwtYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHBlcnNwZWN0aXZlKDAuNXB4KTtcbn1cblxuLmxpbmstaGVhZGVyLXJpZ2h0LCAudG9kby1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubGluay1oZWFkZXItcmlnaHQtdG9wLCAudG9kby1oZWFkZXItcmlnaHQtdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5saW5rLWhlYWRlci1yaWdodC5oaWRkZW4sIC5saW5rLWhlYWRlci1yaWdodC1ib3R0b20uaGlkZGVuLCAudG9kby1oZWFkZXItcmlnaHQuaGlkZGVuLCAudG9kby1oZWFkZXItcmlnaHQtYm90dG9tLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb3Vyc2UgLmxpbmstaGVhZGVyLXJpZ2h0IC5saW5rLWlucHV0LCAudGFzay1pbnB1dC5uYW1lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uY291cnNlIC5saW5rLWhlYWRlci1yaWdodCAubGluay1pbnB1dC5uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uY291cnNlIC5saW5rLWhlYWRlci1yaWdodCAubGluay1pbnB1dC5saW5rLCAudGFzay1pbnB1dC5uYW1lIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubGluay1oZWFkZXItcmlnaHQtYm90dG9tLCAudG9kby1oZWFkZXItcmlnaHQtYm90dG9tIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmxpbmstY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG59XG5cbi5saW5rLWJ1YmJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saW5rLWJ1YmJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbn1cblxuLmxpbmstYnViYmxlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5saW5rLWJ1YmJsZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHJnYigxNDcsIDE0NywgMTQ3KTtcbn1cblxuLmxpbmstYnViYmxlIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRvZG9zIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRvZG9zLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbi50b2RvLXBvaW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBnYXA6IDEwcHg7XG59XG5cbi50b2RvLXBvaW50IHNwYW4ge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kby1jaGVjay1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi50b2RvLWNoZWNrLWJ0bi5jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvdXJzZXMge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XG4gIH1cbiAgLmNvdXJzZSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZ2FwOiA1cHg7XG4gIH1cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgZ2FwOiA1MHB4O1xuICB9XG4gIC5jb3Vyc2UtaW5wdXQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmNvdXJzZS1pbnB1dC1wcm9mIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmNvdXJzZSAubGluay1oZWFkZXItbGVmdCBzcGFuLCAuY291cnNlIC50b2Rvcy1oZWFkZXItbGVmdCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuc21hbGwtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICB3aWR0aDogMS4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICB9XG4gIC5jb3Vyc2UgLmhlYWRlciBidXR0b24ge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgfVxuICAubGluay1idWJibGUge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAubGluay1idWJibGUgYSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLnRvZG8tcG9pbnQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLnRvZG8tY2hlY2stYnRuIHtcbiAgICBoZWlnaHQ6IDAuOHJlbTtcbiAgICB3aWR0aDogMC44cmVtO1xuICB9XG4gIC50b2Rvcy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuY291cnNlIC5saW5rLWhlYWRlciwgLmNvdXJzZSAudG9kb3MtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5saW5rLWhlYWRlci1yaWdodC10b3AsIC50b2RvLWhlYWRlci1yaWdodC10b3Age1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmxpbmstaGVhZGVyLXJpZ2h0LXRvcCAuc21hbGwtYnV0dG9uLCAudG9kby1oZWFkZXItcmlnaHQtdG9wLCAuc21hbGwtYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuICAuY291cnNlIC5saW5rLWhlYWRlci1yaWdodCAubGluay1pbnB1dC5uYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY291cnNlIC5saW5rLWhlYWRlci1yaWdodCAubGluay1pbnB1dC5saW5rLCAudGFzay1pbnB1dC5uYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxl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Rjs7QUc3SUE7RUFDSSw4QkFBQTtBSGdKSjs7QUc1SUE7RUFDSTtJQUNJLHlCQUFBO0VIK0lOO0VHNUlFO0lBQ0ksV0FBQTtJQUNBLFFBQUE7RUg4SU47RUczSUU7SUFDSSxTQUFBO0VINklOO0VHMUlFO0lBQ0ksaUJBQUE7RUg0SU47RUd6SUU7SUFDSSxlQUFBO0VIMklOO0VHeElFO0lBQ0ksaUJBQUE7RUgwSU47RUd2SUU7SUFDSSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VIeUlOO0VHdElFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUh3SU47RUdySUU7SUFDSSxZQUFBO0VIdUlOO0VHcElFO0lBQ0ksaUJBQUE7RUhzSU47RUduSUU7SUFDSSxpQkFBQTtFSHFJTjtFR2xJRTtJQUNJLGNBQUE7SUFDQSxhQUFBO0VIb0lOO0VHaklFO0lBQ0ksWUFBQTtFSG1JTjtFR2hJRTtJQUNJLHNCQUFBO0VIa0lOO0VHL0hFO0lBQ0ksc0JBQUE7RUhpSU47RUc5SEU7SUFDSSxvQkFBQTtFSGdJTjtFRzdIRTtJQUNJLFdBQUE7RUgrSE47RUc1SEU7SUFDSSxXQUFBO0VIOEhOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9PcGVuU2Fucy1MaWdodC50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLU1lZGl1bS50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuOnJvb3Qge1xcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoMTI2LCA0OCwgNDgpO1xcbiAgLS1hZGQtYnRuLWNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDgwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkLWNvdXJzZS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWRkLWNvdXJzZS1idXR0b24gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgd2lkdGg6IDVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hZGQtYnRuLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4uYWRkLWNvdXJzZS1idXR0b24gYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFkZC1idG4tY29sb3IpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHBlcnNwZWN0aXZlKDAuNXB4KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMjBweDtcXG4gIH1cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLmFkZC1jb3Vyc2UtYnV0dG9uIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogMy41cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAuY29udGVudC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIH1cXG59XFxuLmNvdXJzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMzEsIDMxKTtcXG4gIHdpZHRoOiBtaW4oODAwcHgsIDEwMHZoIC0gNTBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvdXJzZSAuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb3Vyc2UgLmhlYWRlciBidXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDIuM3JlbTtcXG4gIHdpZHRoOiAyLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb3Vyc2UgLmhlYWRlciBidXR0b24gaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNvdXJzZSBpbnB1dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxuICBpbmxpbmUtc2l6ZTogY2FsYygxMDAlIC0gODBweCk7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgaHlwaGVuczogbWFudWFsO1xcbn1cXG5cXG4uY291cnNlIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbn1cXG5cXG4uY291cnNlIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNvdXJzZS1pbnB1dC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvdXJzZS1tZW51LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb3Vyc2UtaW5wdXQtcHJvZiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmNvdXJzZSAubGluay1oZWFkZXIsIC5jb3Vyc2UgLnRvZG9zLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvdXJzZSAubGluay1oZWFkZXItbGVmdCwgLmNvdXJzZSAudG9kb3MtaGVhZGVyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uY291cnNlIC5saW5rLWhlYWRlci1sZWZ0IHNwYW4sIC5jb3Vyc2UgLnRvZG9zLWhlYWRlci1sZWZ0IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zbWFsbC1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMC4ycztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zbWFsbC1idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHBlcnNwZWN0aXZlKDAuNXB4KTtcXG59XFxuXFxuLmxpbmstaGVhZGVyLXJpZ2h0LCAudG9kby1oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmxpbmstaGVhZGVyLXJpZ2h0LXRvcCwgLnRvZG8taGVhZGVyLXJpZ2h0LXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5saW5rLWhlYWRlci1yaWdodC5oaWRkZW4sIC5saW5rLWhlYWRlci1yaWdodC1ib3R0b20uaGlkZGVuLCAudG9kby1oZWFkZXItcmlnaHQuaGlkZGVuLCAudG9kby1oZWFkZXItcmlnaHQtYm90dG9tLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY291cnNlIC5saW5rLWhlYWRlci1yaWdodCAubGluay1pbnB1dCwgLnRhc2staW5wdXQubmFtZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jb3Vyc2UgLmxpbmstaGVhZGVyLXJpZ2h0IC5saW5rLWlucHV0Lm5hbWUge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uY291cnNlIC5saW5rLWhlYWRlci1yaWdodCAubGluay1pbnB1dC5saW5rLCAudGFzay1pbnB1dC5uYW1lIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmxpbmstaGVhZGVyLXJpZ2h0LWJvdHRvbSwgLnRvZG8taGVhZGVyLXJpZ2h0LWJvdHRvbSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmxpbmstY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGluay1idWJibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGluay1idWJibGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4ubGluay1idWJibGUgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmxpbmstYnViYmxlIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHJnYigxNDcsIDE0NywgMTQ3KTtcXG59XFxuXFxuLmxpbmstYnViYmxlIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2RvcyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4udG9kb3MtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMThweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxufVxcblxcbi50b2RvLXBvaW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvLXBvaW50IHNwYW4ge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1jaGVjay1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvLWNoZWNrLWJ0bi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY291cnNlcyB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XFxuICB9XFxuICAuY291cnNlIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbiAgfVxcbiAgLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgIGdhcDogNTBweDtcXG4gIH1cXG4gIC5jb3Vyc2UtaW5wdXQtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmNvdXJzZS1pbnB1dC1wcm9mIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmNvdXJzZSAubGluay1oZWFkZXItbGVmdCBzcGFuLCAuY291cnNlIC50b2Rvcy1oZWFkZXItbGVmdCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICAuc21hbGwtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcbiAgLmNvdXJzZSAuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICB9XFxuICAubGluay1idWJibGUge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAubGluay1idWJibGUgYSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbiAgLnRvZG8tcG9pbnQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbiAgLnRvZG8tY2hlY2stYnRuIHtcXG4gICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIHdpZHRoOiAwLjhyZW07XFxuICB9XFxuICAudG9kb3MtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLmNvdXJzZSAubGluay1oZWFkZXIsIC5jb3Vyc2UgLnRvZG9zLWhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubGluay1oZWFkZXItcmlnaHQtdG9wLCAudG9kby1oZWFkZXItcmlnaHQtdG9wIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5saW5rLWhlYWRlci1yaWdodC10b3AgLnNtYWxsLWJ1dHRvbiwgLnRvZG8taGVhZGVyLXJpZ2h0LXRvcCwgLnNtYWxsLWJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcbiAgLmNvdXJzZSAubGluay1oZWFkZXItcmlnaHQgLmxpbmstaW5wdXQubmFtZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmNvdXJzZSAubGluay1oZWFkZXItcmlnaHQgLmxpbmstaW5wdXQubGluaywgLnRhc2staW5wdXQubmFtZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIixcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvT3BlblNhbnMtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcXHJcXG4gICAgZm9udC1zdHlsZTogbGlnaHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLUxpZ2h0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBtZWRpdW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLU1lZGl1bS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XCIsXCI6cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1iZy1jb2xvcjogcmdiKDEyNiwgNDgsIDQ4KTtcXHJcXG4gICAgLS1hZGQtYnRuLWNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb3Vyc2UtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvdXJzZS1idXR0b24gYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hZGQtYnRuLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvdXJzZS1idXR0b24gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWRkLWJ0bi1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHBlcnNwZWN0aXZlKDAuNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZC1jb3Vyc2UtYnV0dG9uIGJ1dHRvbiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzLjVyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAuY29udGVudC13cmFwcGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZoIC0gNTBweCk7XFxyXFxuICAgIH1cXHJcXG4gfVxcclxcblwiLFwiLmNvdXJzZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uY291cnNlIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAzMSwgMzEpO1xcbiAgICB3aWR0aDogbWluKDgwMHB4LCBjYWxjKDEwMHZoIC0gNTBweCkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvdXJzZSAuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY291cnNlIC5oZWFkZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMi4zcmVtO1xcbiAgICB3aWR0aDogMi4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY291cnNlIC5oZWFkZXIgYnV0dG9uIGltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNvdXJzZSBpbnB1dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbiAgICBpbmxpbmUtc2l6ZTogY2FsYygxMDAlIC0gODBweCk7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGh5cGhlbnM6IG1hbnVhbDtcXG59XFxuXFxuLmNvdXJzZSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbn1cXG5cXG4uY291cnNlIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY291cnNlLWlucHV0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb3Vyc2UtbWVudS1idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY291cnNlLWlucHV0LXByb2Yge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmNvdXJzZSAubGluay1oZWFkZXIsIC5jb3Vyc2UgLnRvZG9zLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvdXJzZSAubGluay1oZWFkZXItbGVmdCwgLmNvdXJzZSAudG9kb3MtaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmNvdXJzZSAubGluay1oZWFkZXItbGVmdCBzcGFuLCAuY291cnNlIC50b2Rvcy1oZWFkZXItbGVmdCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zbWFsbC1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMC4ycztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zbWFsbC1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcGVyc3BlY3RpdmUoMC41cHgpO1xcbn1cXG5cXG4ubGluay1oZWFkZXItcmlnaHQsIC50b2RvLWhlYWRlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5saW5rLWhlYWRlci1yaWdodC10b3AsIC50b2RvLWhlYWRlci1yaWdodC10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmxpbmstaGVhZGVyLXJpZ2h0LmhpZGRlbiwgLmxpbmstaGVhZGVyLXJpZ2h0LWJvdHRvbS5oaWRkZW4sIC50b2RvLWhlYWRlci1yaWdodC5oaWRkZW4sIC50b2RvLWhlYWRlci1yaWdodC1ib3R0b20uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4uY291cnNlIC5saW5rLWhlYWRlci1yaWdodCAubGluay1pbnB1dCwgLnRhc2staW5wdXQubmFtZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNvdXJzZSAubGluay1oZWFkZXItcmlnaHQgLmxpbmstaW5wdXQubmFtZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmNvdXJzZSAubGluay1oZWFkZXItcmlnaHQgLmxpbmstaW5wdXQubGluaywgLnRhc2staW5wdXQubmFtZSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmxpbmstaGVhZGVyLXJpZ2h0LWJvdHRvbSwgLnRvZG8taGVhZGVyLXJpZ2h0LWJvdHRvbSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5saW5rLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGluay1idWJibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGluay1idWJibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5saW5rLWJ1YmJsZSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4ubGluay1idWJibGUgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiByZ2IoMTQ3LCAxNDcsIDE0Nyk7XFxufVxcblxcbi5saW5rLWJ1YmJsZSBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi50b2Rvcy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbn1cXG5cXG4udG9kby1wb2ludCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kby1wb2ludCBzcGFuIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tY2hlY2stYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kby1jaGVjay1idG4uY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5jb3Vyc2VzIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZSB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2UtaW5wdXQtbmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuY291cnNlLWlucHV0LXByb2Yge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2UgLmxpbmstaGVhZGVyLWxlZnQgc3BhbiwgLmNvdXJzZSAudG9kb3MtaGVhZGVyLWxlZnQgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcblxcbiAgICAuc21hbGwtYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICAgICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2UgLmhlYWRlciBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLmxpbmstYnViYmxlIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAubGluay1idWJibGUgYSB7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcblxcbiAgICAudG9kby1wb2ludC10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWNoZWNrLWJ0biB7XFxuICAgICAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLnRvZG9zLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZSAubGluay1oZWFkZXIsIC5jb3Vyc2UgLnRvZG9zLWhlYWRlciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5saW5rLWhlYWRlci1yaWdodC10b3AsIC50b2RvLWhlYWRlci1yaWdodC10b3Age1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubGluay1oZWFkZXItcmlnaHQtdG9wIC5zbWFsbC1idXR0b24sIC50b2RvLWhlYWRlci1yaWdodC10b3AsIC5zbWFsbC1idXR0b24ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZSAubGluay1oZWFkZXItcmlnaHQgLmxpbmstaW5wdXQubmFtZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNvdXJzZSAubGluay1oZWFkZXItcmlnaHQgLmxpbmstaW5wdXQubGluaywgLnRhc2staW5wdXQubmFtZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUb0RvIGZyb20gJy4vVG9kb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rcyc7XG5cbmNvbnN0IENvdXJzZSA9IChuYW1lLCBwcm9mID0gXCJcIiwgbGlua0FycmF5ID0gW10sIHRvZG9BcnJheSA9IFtdKSA9PiAoe1xuICBuYW1lLFxuICBwcm9mLFxuICBsaW5rczogbGlua0FycmF5LFxuICB0b2RvczogdG9kb0FycmF5LFxufSk7XG5cblxuXG4vLyBUaGlzIGNvdXJzZXMgbW9kdWxlIHdpbGwgaG9zdCBhbiBhcnJheSBvZiBjb3Vyc2VzIGFuZCBwcm92aWRlIG9wZXJhdGlvbnMgZm9yIHRoZW1cbmNvbnN0IGNvdXJzZXMgPSAoKCkgPT4ge1xuICBsZXQgY291cnNlc0FycmF5ID0gW107XG5cbiAgY29uc3QgYWRkQ291cnNlID0gKG5hbWUsIHByb2YgPSBcIlwiLCBsaW5rQXJyYXkgPSBbXSwgdG9kb0FycmF5ID0gW10pID0+IHtcbiAgICBjb25zdCBuZXdDb3Vyc2UgPSBDb3Vyc2UobmFtZSwgcHJvZiwgbGlua0FycmF5LCB0b2RvQXJyYXkpO1xuICAgIGNvdXJzZXNBcnJheS5wdXNoKG5ld0NvdXJzZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ291cnNlID0gKG5hbWUpID0+IHtcbiAgICBjb3Vyc2VzQXJyYXkgPSBjb3Vyc2VzQXJyYXkuZmlsdGVyKChjb3Vyc2UpID0+IChjb3Vyc2UubmFtZSAhPT0gbmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGdldENvdXJzZSA9IChuYW1lKSA9PiBjb3Vyc2VzQXJyYXkuZmluZCgoY291cnNlKSA9PiBjb3Vyc2UubmFtZSA9PT0gbmFtZSk7XG5cbiAgY29uc3Qgc2V0Q291cnNlTmFtZSA9IChvbGROYW1lLCBuZXdOYW1lKSA9PiB7XG4gICAgY29uc3QgY2hhbmdlZENvdXJzZSA9IGNvdXJzZXNBcnJheS5maW5kKChjb3Vyc2UpID0+IGNvdXJzZS5uYW1lID09PSBvbGROYW1lKTtcbiAgICBjaGFuZ2VkQ291cnNlLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgY29uc3Qgc2V0Q291cnNlUHJvZiA9IChuYW1lLCBuZXdQcm9mKSA9PiB7XG4gICAgY29uc3QgY2hhbmdlZENvdXJzZSA9IGNvdXJzZXNBcnJheS5maW5kKChjb3Vyc2UpID0+IGNvdXJzZS5uYW1lID09PSBuYW1lKTtcbiAgICBjaGFuZ2VkQ291cnNlLnByb2YgPSBuZXdQcm9mO1xuICB9XG5cbiAgY29uc3QgYWRkTGlua1RvQ291cnNlID0gKGNvdXJzZU5hbWUsIGxpbmtOYW1lLCBsaW5rVXJsKSA9PiB7XG4gICAgY29uc3QgY291cnNlID0gZ2V0Q291cnNlKGNvdXJzZU5hbWUpO1xuICAgIGlmIChjb3Vyc2UpIHtcbiAgICAgIGNvbnN0IG5ld0xpbmsgPSBMaW5rKGxpbmtOYW1lLCBsaW5rVXJsKTtcbiAgICAgIGNvdXJzZS5saW5rcy5wdXNoKG5ld0xpbmspO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRMaW5rRnJvbUNvdXJzZSA9IChjb3Vyc2VOYW1lLCBsaW5rTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvdXJzZSA9IGdldENvdXJzZShjb3Vyc2VOYW1lKTtcbiAgICByZXR1cm4gY291cnNlLmxpbmtzLmZpbmQoKGxpbmspID0+IGxpbmsubmFtZSA9PT0gbGlua05hbWUpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGlua0Zyb21Db3Vyc2UgPSAoY291cnNlTmFtZSwgbGlua05hbWUpID0+IHtcbiAgICBjb25zdCBjb3Vyc2UgPSBnZXRDb3Vyc2UoY291cnNlTmFtZSk7XG4gICAgY291cnNlLmxpbmtzID0gY291cnNlLmxpbmtzLmZpbHRlcigobGluaykgPT4gbGluay5uYW1lICE9PSBsaW5rTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9Eb1RvQ291cnNlID0gKGNvdXJzZU5hbWUsIHRvZG9OYW1lLCBpc0NvbXBsZXRlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBjb3Vyc2UgPSBnZXRDb3Vyc2UoY291cnNlTmFtZSk7XG4gICAgaWYgKGNvdXJzZSkge1xuICAgICAgY29uc3QgbmV3VG9kbyA9IFRvRG8odG9kb05hbWUsIGlzQ29tcGxldGUpO1xuICAgICAgY291cnNlLnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRvRG9Gcm9tQ291cnNlID0gKGNvdXJzZU5hbWUsIHRvRG8pID0+IHtcbiAgICBjb25zdCBjb3Vyc2UgPSBnZXRDb3Vyc2UoY291cnNlTmFtZSk7XG4gICAgcmV0dXJuIGNvdXJzZS50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLm5hbWUgPT09IHRvRG8pO1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlVG9Eb0Zyb21Db3Vyc2UgPSAoY291cnNlTmFtZSwgdG9EbykgPT4ge1xuICAgIGNvbnN0IGNvdXJzZSA9IGdldENvdXJzZShjb3Vyc2VOYW1lKTtcbiAgICBjb3Vyc2UudG9kb3MuZm9yRWFjaCgodG9kb0VudHJ5KSA9PiB7XG4gICAgICBpZiAodG9kb0VudHJ5Lm5hbWUgPT09IHRvRG8pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHRvZG9FbnRyeS5jb21wbGV0ZSA9ICF0b2RvRW50cnkuY29tcGxldGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyVG9Eb0Zyb21Db3Vyc2UgPSAoY291cnNlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvdXJzZSA9IGdldENvdXJzZShjb3Vyc2VOYW1lKTtcbiAgICBjb3Vyc2UudG9kb3MgPSBjb3Vyc2UudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiAodG9kby5jb21wbGV0ZSAhPT0gdHJ1ZSkpO1xuICB9XG5cbiAgY29uc3QgZ2V0QWxsQ291cnNlcyA9ICgpID0+IGNvdXJzZXNBcnJheTtcblxuICByZXR1cm4ge1xuICAgIGFkZENvdXJzZSxcbiAgICByZW1vdmVDb3Vyc2UsXG4gICAgZ2V0Q291cnNlLFxuICAgIHNldENvdXJzZU5hbWUsXG4gICAgc2V0Q291cnNlUHJvZixcbiAgICBhZGRMaW5rVG9Db3Vyc2UsXG4gICAgZ2V0TGlua0Zyb21Db3Vyc2UsXG4gICAgcmVtb3ZlTGlua0Zyb21Db3Vyc2UsXG4gICAgYWRkVG9Eb1RvQ291cnNlLFxuICAgIGdldFRvRG9Gcm9tQ291cnNlLFxuICAgIHRvZ2dsZVRvRG9Gcm9tQ291cnNlLFxuICAgIGZpbHRlclRvRG9Gcm9tQ291cnNlLFxuICAgIGdldEFsbENvdXJzZXMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3Vyc2VzO1xuIiwiY29uc3QgTGluayA9IChuYW1lLCB1cmwpID0+ICh7IG5hbWUsIHVybCB9KTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsImNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVEYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291cnNlc1wiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdXJzZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdXJzZXNcIik7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNvdXJzZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB7c2F2ZURhdGEsIGdldERhdGF9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlO1xuIiwiY29uc3QgVG9EbyA9IChuYW1lLCBjb21wbGV0ZSkgPT4gKHsgbmFtZSwgY29tcGxldGUgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87IiwiZnVuY3Rpb24gaXNWYWxpZFVSTCh1cmwpIHtcbiAgICBjb25zdCByID0gLyg/Omh0dHBzPyk6XFwvXFwvKFxcdys6P1xcdyopPyhcXFMrKSg6XFxkKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJSFcXC0vXSkpPy87XG5cbiAgICByZXR1cm4gci50ZXN0KHVybClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZFVSTDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IGNvdXJzZXMgZnJvbSAnLi9Db3Vyc2UnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcbmltcG9ydCBpc1ZhbGlkVVJMIGZyb20gJy4vVXRpbGl0aWVzJztcblxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Zyc7XG5cbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuJyk7XG5jb25zdCBjb3Vyc2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdXJzZXMnKTtcblxuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBHZW5lcmF0aW5nIHRoZSBJbml0aWFsIEJ1YmJsZVxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmZ1bmN0aW9uIGluaXRDb3Vyc2UoKSB7XG4gICAgY29uc3QgY291cnNlQnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlLmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VcIik7XG5cbiAgICBjb25zdCBjb3Vyc2VCdWJibGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3Vyc2VCdWJibGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUucGxhY2Vob2xkZXIgPSBcIkNvdXJzZSBOYW1lXCI7XG4gICAgY291cnNlQnViYmxlSGVhZGVyTmFtZS5jbGFzc0xpc3QuYWRkKFwiY291cnNlLWlucHV0LW5hbWVcIik7XG4gICAgY291cnNlQnViYmxlSGVhZGVyLmFwcGVuZENoaWxkKGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUpO1xuXG4gICAgY291cnNlQnViYmxlLmFwcGVuZENoaWxkKGNvdXJzZUJ1YmJsZUhlYWRlcik7XG4gICAgY291cnNlTGlzdC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGUpO1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc05hbWUobmFtZSkge1xuICAgICAgICBpZiAoY291cnNlcy5nZXRDb3Vyc2UobmFtZSkgPT09IHVuZGVmaW5lZCAmJiBuYW1lICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb3Vyc2VzLmFkZENvdXJzZShuYW1lKTtcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEoY291cnNlcy5nZXRBbGxDb3Vyc2VzKCkpO1xuICAgICAgICAgICAgY291cnNlTGlzdC5yZW1vdmVDaGlsZChjb3Vyc2VCdWJibGVIZWFkZXIucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvdXJzZUJ1YmJsZShjb3Vyc2VzLmdldENvdXJzZShuYW1lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgY291cnNlTGlzdC5yZW1vdmVDaGlsZChjb3Vyc2VCdWJibGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY291cnNlQnViYmxlSGVhZGVyTmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpOyB9XG4gICAgfSk7XG4gICAgY291cnNlQnViYmxlSGVhZGVyTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIHByb2Nlc3NOYW1lKGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUudmFsdWUpIFxuICAgIH0pO1xuXG4gICAgY291cnNlQnViYmxlSGVhZGVyTmFtZS5mb2N1cygpO1xufVxuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbml0Q291cnNlKCk7XG59KVxuXG5cblxuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBHZW5lcmF0aW5nIHRoZSBGdWxsIEJ1YmJsZVxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoY291cnNlKSB7XG4gICAgY29uc3QgY291cnNlQnViYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBjb3Vyc2VCdWJibGVIZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb3Vyc2VCdWJibGVIZWFkZXJOYW1lLnZhbHVlID0gY291cnNlLm5hbWU7XG4gICAgY291cnNlQnViYmxlSGVhZGVyTmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgY291cnNlQnViYmxlSGVhZGVyTmFtZS5wbGFjZWhvbGRlciA9IFwiQ291cnNlIE5hbWVcIjtcbiAgICBjb3Vyc2VCdWJibGVIZWFkZXJOYW1lLnByZXZ2YWx1ZSA9IGNvdXJzZS5uYW1lO1xuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUuY2xhc3NMaXN0LmFkZChcImNvdXJzZS1pbnB1dC1uYW1lXCIpO1xuICAgIGNvdXJzZUJ1YmJsZUhlYWRlci5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVIZWFkZXJOYW1lKTtcblxuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb3Vyc2VzLmdldENvdXJzZShjb3Vyc2VCdWJibGVIZWFkZXJOYW1lLnZhbHVlKSA9PT0gdW5kZWZpbmVkICYmIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvdXJzZXMuc2V0Q291cnNlTmFtZShjb3Vyc2UubmFtZSwgY291cnNlQnViYmxlSGVhZGVyTmFtZS52YWx1ZSk7XG4gICAgICAgICAgICBzdG9yYWdlLnNhdmVEYXRhKGNvdXJzZXMuZ2V0QWxsQ291cnNlcygpKTtcbiAgICAgICAgICAgIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUucHJldnZhbHVlID0gY291cnNlQnViYmxlSGVhZGVyTmFtZS52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUudmFsdWUgPSBjb3Vyc2VCdWJibGVIZWFkZXJOYW1lLnByZXZ2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9KTtcblxuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikgeyBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTsgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY291cnNlQnViYmxlSGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZChcImNvdXJzZS1tZW51LWJ0bnNcIik7XG5cbiAgICBjb25zdCBjb3Vyc2VCdWJibGVIZWFkZXJNZW51RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY291cnNlQnViYmxlSGVhZGVyTWVudURlbGV0ZS50eXBlID0gXCJidXR0b25cIjtcbiAgICBjb3Vyc2VCdWJibGVIZWFkZXJNZW51RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgY291cnNlQnViYmxlSGVhZGVyTWVudURlbGV0ZS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0RlbGV0ZUljb259KWBcblxuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck1lbnVEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY291cnNlcy5yZW1vdmVDb3Vyc2UoY291cnNlLm5hbWUpO1xuICAgICAgICBzdG9yYWdlLnNhdmVEYXRhKGNvdXJzZXMuZ2V0QWxsQ291cnNlcygpKTtcbiAgICAgICAgY291cnNlTGlzdC5yZW1vdmVDaGlsZChjb3Vyc2VCdWJibGVIZWFkZXIucGFyZW50RWxlbWVudCk7XG4gICAgfSlcblxuICAgIGNvdXJzZUJ1YmJsZUhlYWRlck1lbnUuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlSGVhZGVyTWVudURlbGV0ZSk7XG4gICAgY291cnNlQnViYmxlSGVhZGVyLmFwcGVuZENoaWxkKGNvdXJzZUJ1YmJsZUhlYWRlck1lbnUpO1xuXG5cbiAgICByZXR1cm4gY291cnNlQnViYmxlSGVhZGVyO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvZihjb3Vyc2UpIHtcbiAgICBjb25zdCBjb3Vyc2VCdWJibGVQcm9mID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvdXJzZUJ1YmJsZVByb2YudmFsdWUgPSBjb3Vyc2UucHJvZjtcbiAgICBjb3Vyc2VCdWJibGVQcm9mLnR5cGUgPSBcInRleHRcIjtcbiAgICBjb3Vyc2VCdWJibGVQcm9mLnBsYWNlaG9sZGVyID0gXCJDb3Vyc2UgUHJvZlwiO1xuICAgIGNvdXJzZUJ1YmJsZVByb2YuY2xhc3NMaXN0LmFkZChcImNvdXJzZS1pbnB1dC1wcm9mXCIpO1xuXG4gICAgY291cnNlQnViYmxlUHJvZi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgY291cnNlcy5zZXRDb3Vyc2VQcm9mKGNvdXJzZS5uYW1lLCBjb3Vyc2VCdWJibGVQcm9mLnZhbHVlKTtcbiAgICAgICAgc3RvcmFnZS5zYXZlRGF0YShjb3Vyc2VzLmdldEFsbENvdXJzZXMoKSk7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH0pO1xuXG4gICAgY291cnNlQnViYmxlUHJvZi5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpOyB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY291cnNlQnViYmxlUHJvZjtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxpbmtzKGNvdXJzZSkge1xuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZUxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlTGlua3MuY2xhc3NMaXN0LmFkZChcImxpbmtzXCIpO1xuXG4gICAgY29uc3QgY291cnNlQnViYmxlTGlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwibGluay1oZWFkZXJcIik7XG5cblxuICAgIC8vIExpbmsgVGl0bGUgYW5kIEFkZCBCdXR0b25cbiAgICBjb25zdCBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlckxlZnQuY2xhc3NMaXN0LmFkZChcImxpbmstaGVhZGVyLWxlZnRcIik7XG5cbiAgICBjb25zdCBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJUZXh0LmlubmVyVGV4dCA9IFwiTGlua3NcIjtcblxuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZUxpbmtzSGVhZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcInNtYWxsLWJ1dHRvblwiKTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlckJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlckJ1dHRvbi5pbm5lclRleHQgPSBcIitcIjtcblxuICAgIGNvdXJzZUJ1YmJsZUxpbmtzSGVhZGVyTGVmdC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclRleHQpO1xuICAgIGNvdXJzZUJ1YmJsZUxpbmtzSGVhZGVyTGVmdC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVMaW5rc0hlYWRlckJ1dHRvbik7XG5cblxuICAgIC8vIExpbmsgSW5wdXRcbiAgICBjb25zdCBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodC5jbGFzc0xpc3QuYWRkKFwibGluay1oZWFkZXItcmlnaHRcIiwgXCJoaWRkZW5cIik7XG4gICAgY29uc3QgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdXJzZUJ1YmJsZUxpbmtzSGVhZGVyUmlnaHRUb3AuY2xhc3NMaXN0LmFkZChcImxpbmstaGVhZGVyLXJpZ2h0LXRvcFwiLCBcImhpZGRlblwiKTtcblxuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZUxpbmtzTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibGluay1pbnB1dFwiLCBcIm5hbWVcIik7XG4gICAgY291cnNlQnViYmxlTGlua3NOYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGNvdXJzZUJ1YmJsZUxpbmtzTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOYW1lXCI7XG4gICAgY29uc3QgY291cnNlQnViYmxlTGlua3NVUkxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY291cnNlQnViYmxlTGlua3NVUkxJbnB1dC5jbGFzc0xpc3QuYWRkKFwibGluay1pbnB1dFwiLCBcImxpbmtcIik7XG4gICAgY291cnNlQnViYmxlTGlua3NVUkxJbnB1dC50eXBlID0gXCJ1cmxcIjtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc1VSTElucHV0LnBsYWNlaG9sZGVyID0gXCJVUkxcIjtcblxuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZUxpbmtzQWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0FkZElucHV0LmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1idXR0b25cIik7XG4gICAgY291cnNlQnViYmxlTGlua3NBZGRJbnB1dC50eXBlID0gXCJidXR0b25cIjtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0FkZElucHV0LmlubmVyVGV4dCA9IFwiPlwiO1xuXG4gICAgY29uc3QgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodEJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclJpZ2h0Qm90dG9tLmNsYXNzTGlzdC5hZGQoXCJsaW5rLWhlYWRlci1yaWdodC1ib3R0b21cIiwgXCJoaWRkZW5cIik7XG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodEJvdHRvbS5pbm5lclRleHQgPSBcIlBsZWFzZSBpbnB1dCBhIG5hbWUgKDUwIGNoYXJhY3RlcnMgb3IgbGVzcykgYW5kIGEgdmFsaWQgVVJMXCI7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVVSTCgpIHtcbiAgICAgICAgY29uc3QgbGlua05hbWUgPSBjb3Vyc2VCdWJibGVMaW5rc05hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgbGlua1VSTCA9IGNvdXJzZUJ1YmJsZUxpbmtzVVJMSW5wdXQudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzVmFsaWRVUkwobGlua1VSTCkgJiYgbGlua05hbWUgIT09IFwiXCIgJiYgbGlua05hbWUubGVuZ3RoIDw9IDUwKSB7XG4gICAgICAgICAgICBjb3Vyc2VzLmFkZExpbmtUb0NvdXJzZShjb3Vyc2UubmFtZSwgbGlua05hbWUsIGxpbmtVUkwpO1xuICAgICAgICAgICAgZ2VuZXJhdGVMaW5rQnViYmxlKGNvdXJzZXMuZ2V0TGlua0Zyb21Db3Vyc2UoY291cnNlLm5hbWUsIGxpbmtOYW1lKSk7XG4gICAgICAgICAgICBzdG9yYWdlLnNhdmVEYXRhKGNvdXJzZXMuZ2V0QWxsQ291cnNlcygpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodEJvdHRvbS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgY291cnNlQnViYmxlTGlua3NOYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgY291cnNlQnViYmxlTGlua3NVUkxJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclJpZ2h0Qm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIGNvdXJzZUJ1YmJsZUxpbmtzQWRkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlVVJMKTtcblxuICAgIGNvdXJzZUJ1YmJsZUxpbmtzVVJMSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikgeyBnZW5lcmF0ZVVSTCgpIH1cbiAgICB9KTtcblxuICAgIGNvdXJzZUJ1YmJsZUxpbmtzTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHsgZ2VuZXJhdGVVUkwoKSB9XG4gICAgfSk7XG5cbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvdXJzZUJ1YmJsZUxpbmtzTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfSk7XG5cblxuICAgIC8vIFBpZWNlIHRvZ2V0aGVyXG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodFRvcC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVMaW5rc05hbWVJbnB1dCk7XG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodFRvcC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVMaW5rc1VSTElucHV0KTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclJpZ2h0VG9wLmFwcGVuZENoaWxkKGNvdXJzZUJ1YmJsZUxpbmtzQWRkSW5wdXQpO1xuICAgIGNvdXJzZUJ1YmJsZUxpbmtzSGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodFRvcCk7XG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXJSaWdodC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclJpZ2h0Qm90dG9tKTtcblxuXG4gICAgLy8gTGluayBDb250YWluZXJcbiAgICBjb25zdCBjb3Vyc2VCdWJibGVMaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdXJzZUJ1YmJsZUxpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaW5rLWNvbnRhaW5lclwiKTtcblxuICAgIGNvdXJzZS5saW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGdlbmVyYXRlTGlua0J1YmJsZShsaW5rKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTGlua0J1YmJsZShsaW5rKSB7XG4gICAgICAgIGNvbnN0IExpbmtCdWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgTGlua0J1YmJsZS5jbGFzc0xpc3QuYWRkKFwibGluay1idWJibGVcIik7XG5cbiAgICAgICAgY29uc3QgTGlua0J1YmJsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIExpbmtCdWJibGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJsaW5rLWJ1YmJsZS1hbmNob3JcIik7XG4gICAgICAgIExpbmtCdWJibGVUZXh0LmlubmVyVGV4dCA9IGxpbmsubmFtZTtcbiAgICAgICAgTGlua0J1YmJsZVRleHQuaHJlZiA9IGxpbmsudXJsO1xuICAgICAgICBMaW5rQnViYmxlVGV4dC50YXJnZXQgPSBcIm5ld1wiO1xuXG4gICAgICAgIGNvbnN0IExpbmtCdWJibGVEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgTGlua0J1YmJsZURlbGV0ZUJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgTGlua0J1YmJsZURlbGV0ZUJ0bi5pbm5lclRleHQgPSBcIsOXXCI7XG5cbiAgICAgICAgTGlua0J1YmJsZS5hcHBlbmRDaGlsZChMaW5rQnViYmxlVGV4dCk7XG4gICAgICAgIExpbmtCdWJibGUuYXBwZW5kQ2hpbGQoTGlua0J1YmJsZURlbGV0ZUJ0bik7XG4gICAgICAgIGNvdXJzZUJ1YmJsZUxpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKExpbmtCdWJibGUpO1xuXG4gICAgICAgIExpbmtCdWJibGVEZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvdXJzZXMucmVtb3ZlTGlua0Zyb21Db3Vyc2UoY291cnNlLm5hbWUsIGxpbmsubmFtZSk7XG4gICAgICAgICAgICBzdG9yYWdlLnNhdmVEYXRhKGNvdXJzZXMuZ2V0QWxsQ291cnNlcygpKTtcbiAgICAgICAgICAgIGNvdXJzZUJ1YmJsZUxpbmtzQ29udGFpbmVyLnJlbW92ZUNoaWxkKExpbmtCdWJibGUpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgLy8gUGllY2UgdGhpbmdzIHRvZ2V0aGVyXG4gICAgY291cnNlQnViYmxlTGlua3NIZWFkZXIuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlTGlua3NIZWFkZXJMZWZ0KTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rc0hlYWRlci5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVMaW5rc0hlYWRlclJpZ2h0KTtcbiAgICBjb3Vyc2VCdWJibGVMaW5rcy5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVMaW5rc0hlYWRlcik7XG4gICAgY291cnNlQnViYmxlTGlua3MuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlTGlua3NDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvdXJzZUJ1YmJsZUxpbmtzO1xufVxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvRG9zKGNvdXJzZSkge1xuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZVRvRG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlVG9Eb3MuY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xuXG4gICAgY29uc3QgY291cnNlQnViYmxlVG9Eb3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidG9kb3MtaGVhZGVyXCIpO1xuXG5cbiAgICAvLyBMaW5rIFRpdGxlIGFuZCBBZGQgQnV0dG9uXG4gICAgY29uc3QgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJMZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b2Rvcy1oZWFkZXItbGVmdFwiKTtcblxuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZVRvRG9zSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclRleHQuaW5uZXJUZXh0ID0gXCJUbyBEbyBMaXN0XCI7XG5cbiAgICBjb25zdCBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvdXJzZUJ1YmJsZVRvRG9zSGVhZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1idXR0b25cIik7XG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJCdXR0b24uaW5uZXJUZXh0ID0gXCIrXCI7XG5cbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlckxlZnQuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlVG9Eb3NIZWFkZXJUZXh0KTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlckxlZnQuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlVG9Eb3NIZWFkZXJCdXR0b24pO1xuXG5cbiAgICAvLyBUbyBEbyBJbnB1dFxuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZVRvRG9zSGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWhlYWRlci1yaWdodFwiLCBcImhpZGRlblwiKTtcbiAgICBjb25zdCBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJSaWdodFRvcC5jbGFzc0xpc3QuYWRkKFwidG9kby1oZWFkZXItcmlnaHQtdG9wXCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgY29uc3QgY291cnNlQnViYmxlVG9Eb3NUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvdXJzZUJ1YmJsZVRvRG9zVGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIsIFwibmFtZVwiKTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc1Rhc2tJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgY291cnNlQnViYmxlVG9Eb3NUYXNrSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2tcIjtcblxuICAgIGNvbnN0IGNvdXJzZUJ1YmJsZVRvRG9zQWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0FkZElucHV0LmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1idXR0b25cIik7XG4gICAgY291cnNlQnViYmxlVG9Eb3NBZGRJbnB1dC50eXBlID0gXCJidXR0b25cIjtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0FkZElucHV0LmlubmVyVGV4dCA9IFwiPlwiO1xuXG4gICAgY29uc3QgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJSaWdodEJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0Qm90dG9tLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWhlYWRlci1yaWdodC1ib3R0b21cIiwgXCJoaWRkZW5cIik7XG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJSaWdodEJvdHRvbS5pbm5lclRleHQgPSBcIlBsZWFzZSBpbnB1dCBhIG5vbi1lbXB0eSB0YXNrXCI7XG5cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFzaygpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGNvdXJzZUJ1YmJsZVRvRG9zVGFza0lucHV0LnZhbHVlO1xuXG4gICAgICAgIGlmICh0YXNrICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb3Vyc2VzLmFkZFRvRG9Ub0NvdXJzZShjb3Vyc2UubmFtZSwgdGFzaywgZmFsc2UpO1xuICAgICAgICAgICAgZ2VuZXJhdGVUb0RvUG9pbnQoY291cnNlcy5nZXRUb0RvRnJvbUNvdXJzZShjb3Vyc2UubmFtZSwgdGFzaykpO1xuICAgICAgICAgICAgYWRqdXN0RW1wdHlDb250YWluZXIoKTtcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEoY291cnNlcy5nZXRBbGxDb3Vyc2VzKCkpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0Qm90dG9tLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjb3Vyc2VCdWJibGVUb0Rvc1Rhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0Qm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIGNvdXJzZUJ1YmJsZVRvRG9zQWRkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlVGFzayk7XG5cbiAgICBjb3Vyc2VCdWJibGVUb0Rvc1Rhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7IGdlbmVyYXRlVGFzaygpIH1cbiAgICB9KTtcblxuICAgIGNvdXJzZUJ1YmJsZVRvRG9zSGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvdXJzZUJ1YmJsZVRvRG9zSGVhZGVyUmlnaHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgY291cnNlQnViYmxlVG9Eb3NUYXNrSW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcblxuXG4gICAgLy8gUGllY2UgdG9nZXRoZXIgSGVhZGVyXG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJSaWdodFRvcC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVUb0Rvc1Rhc2tJbnB1dCk7XG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXJSaWdodFRvcC5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVUb0Rvc0FkZElucHV0KTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGNvdXJzZUJ1YmJsZVRvRG9zSGVhZGVyUmlnaHRUb3ApO1xuICAgIGNvdXJzZUJ1YmJsZVRvRG9zSGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlVG9Eb3NIZWFkZXJSaWdodEJvdHRvbSk7XG5cblxuXG5cbiAgICAvLyBUb0RvcyBDb250YWluZXJcbiAgICBjb25zdCBjb3Vyc2VCdWJibGVUb0Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdXJzZUJ1YmJsZVRvRG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2Rvcy1jb250YWluZXJcIik7XG4gICAgYWRqdXN0RW1wdHlDb250YWluZXIoKTtcbiAgICBjb3Vyc2UudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBnZW5lcmF0ZVRvRG9Qb2ludCh0b2RvKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFkanVzdEVtcHR5Q29udGFpbmVyKCkge1xuICAgICAgICBpZiAoY291cnNlLnRvZG9zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY291cnNlQnViYmxlVG9Eb3NDb250YWluZXIuc3R5bGUucGFkZGluZyA9IFwiMThweFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291cnNlQnViYmxlVG9Eb3NDb250YWluZXIuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRvRG9Qb2ludCh0b2RvKSB7XG4gICAgICAgIGNvbnN0IFRvRG9Qb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBUb0RvUG9pbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9pbnRcIik7XG5cbiAgICAgICAgY29uc3QgVG9Eb1BvaW50Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgVG9Eb1BvaW50Q2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2stYnRuXCIpO1xuICAgICAgICBUb0RvUG9pbnRDaGVjay50eXBlID0gXCJidXR0b25cIjtcblxuICAgICAgICBjb25zdCBUb0RvUG9pbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBUb0RvUG9pbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvaW50LXRleHRcIik7XG4gICAgICAgIFRvRG9Qb2ludFRleHQuaW5uZXJUZXh0ID0gdG9kby5uYW1lO1xuXG4gICAgICAgIFRvRG9Qb2ludENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb3Vyc2VzLnRvZ2dsZVRvRG9Gcm9tQ291cnNlKGNvdXJzZS5uYW1lLCB0b2RvLm5hbWUpO1xuICAgICAgICAgICAgc3RvcmFnZS5zYXZlRGF0YShjb3Vyc2VzLmdldEFsbENvdXJzZXMoKSk7XG4gICAgICAgICAgICBjb25zdCB7Y29tcGxldGV9ID0gY291cnNlcy5nZXRUb0RvRnJvbUNvdXJzZShjb3Vyc2UubmFtZSwgdG9kby5uYW1lKTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIFRvRG9Qb2ludFRleHQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgICAgICAgIFRvRG9Qb2ludENoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb0RvUG9pbnRUZXh0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgVG9Eb1BvaW50Q2hlY2suY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgVG9Eb1BvaW50LmFwcGVuZENoaWxkKFRvRG9Qb2ludENoZWNrKTtcbiAgICAgICAgVG9Eb1BvaW50LmFwcGVuZENoaWxkKFRvRG9Qb2ludFRleHQpO1xuICAgICAgICBjb3Vyc2VCdWJibGVUb0Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChUb0RvUG9pbnQpO1xuICAgIH1cblxuXG4gICAgLy8gUGllY2UgdGhpbmdzIHRvZ2V0aGVyXG4gICAgY291cnNlQnViYmxlVG9Eb3NIZWFkZXIuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlVG9Eb3NIZWFkZXJMZWZ0KTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlci5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlclJpZ2h0KTtcbiAgICBjb3Vyc2VCdWJibGVUb0Rvcy5hcHBlbmRDaGlsZChjb3Vyc2VCdWJibGVUb0Rvc0hlYWRlcik7XG4gICAgY291cnNlQnViYmxlVG9Eb3MuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlVG9Eb3NDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvdXJzZUJ1YmJsZVRvRG9zO1xufVxuXG5cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gTG9hZGluZyBEYXRhIGludG8gQnViYmxlc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvdXJzZUJ1YmJsZShjb3Vyc2UpIHtcbiAgICAvLyBDb3Vyc2UgQ29udGFpbmVyXG4gICAgY29uc3QgY291cnNlQnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY291cnNlQnViYmxlLmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VcIik7XG5cbiAgICAvLyBBZGQgSGVhZGVyXG4gICAgY291cnNlQnViYmxlLmFwcGVuZENoaWxkKGdlbmVyYXRlSGVhZGVyKGNvdXJzZSkpO1xuXG4gICAgLy8gQWRkIFByb2ZcbiAgICBjb3Vyc2VCdWJibGUuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9mKGNvdXJzZSkpO1xuXG4gICAgLy8gQWRkIExpbmtzXG4gICAgY291cnNlQnViYmxlLmFwcGVuZENoaWxkKGdlbmVyYXRlTGlua3MoY291cnNlKSk7XG5cbiAgICAvLyBBZGQgVG9Eb3NcbiAgICBjb3Vyc2VCdWJibGUuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUb0Rvcyhjb3Vyc2UpKTtcblxuICAgIC8vIEFkZCB0byBDb3Vyc2UgQnViYmxlc1xuICAgIGNvdXJzZUxpc3QuYXBwZW5kQ2hpbGQoY291cnNlQnViYmxlKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyVG9Eb3MoY291cnNlTmFtZSkge1xuICAgIGNvdXJzZXMuZmlsdGVyVG9Eb0Zyb21Db3Vyc2UoY291cnNlTmFtZSk7XG4gICAgc3RvcmFnZS5zYXZlRGF0YShjb3Vyc2VzLmdldEFsbENvdXJzZXMoKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb3Vyc2VzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBzdG9yYWdlLmdldERhdGEoKTtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLmZvckVhY2goKGNvdXJzZSkgPT4ge1xuICAgICAgICAgICAgY291cnNlcy5hZGRDb3Vyc2UoY291cnNlLm5hbWUsIGNvdXJzZS5wcm9mLCBjb3Vyc2UubGlua3MsIGNvdXJzZS50b2Rvcyk7XG4gICAgICAgICAgICBmaWx0ZXJUb0Rvcyhjb3Vyc2UubmFtZSk7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvdXJzZUJ1YmJsZShjb3Vyc2VzLmdldENvdXJzZShjb3Vyc2UubmFtZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb3Vyc2VzO1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBsb2FkQ291cnNlcyBmcm9tICcuL1ZpZXcnO1xuXG5sb2FkQ291cnNlcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9