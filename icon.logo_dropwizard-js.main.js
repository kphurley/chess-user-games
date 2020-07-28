(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.logo_dropwizard-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/logo_dropwizard.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/logo_dropwizard.js ***!
  \********************************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconLogoDropwizard = function EuiIconLogoDropwizard(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    id: titleId
  }, title) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8 29.61s9.55 4.74 16.856-.893c-1.905-5.114-5.25-19.867-7.226-26.383-.422-1.389-.49-1.527-.663-1.909-.964-2.134-1.978 4.142-3.628 10.459C12.749 13.148 8 29.61 8 29.61",
    fill: "url(#paint0_linear)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.926 28.563s8.17 4.794 14.93.154c-.18-.807-.642-2.103-.955-3.311-1.664-6.416-4.676-17.248-6.144-22.626-1.59-5.822-2.105.986-3.961 8.23-.564 2.204-3.87 17.553-3.87 17.553",
    fill: "url(#paint1_linear)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.14 24.41l.85-1.466.793 1.544-.908 1.99-.735-2.069zm6.934-5.545l.85-1.465.793 1.543-.908 1.99-.735-2.068zm-4.747-5.851l.85-1.465.792 1.543-.908 1.99-.734-2.068",
    fill: "#F9A72B"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.14 24.41l.85-1.716.793 1.794-.907 1.468-.736-1.546zm6.934-5.545l.851-1.716.792 1.794-.906 1.468-.737-1.546zm-4.747-5.851l.85-1.716.792 1.794-.906 1.468-.736-1.546",
    fill: "#FFF200"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.987 28.422s6.082 1.015 10.086-1.549c-.502 1.55-4.991 3.314-10.086 1.55",
    fill: "#24265D"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "paint0_linear",
    x1: 33.473,
    y1: 7.674,
    x2: 7.751,
    y2: 21.331,
    gradientUnits: "userSpaceOnUse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#3871C1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 0.515,
    stopColor: "#2C3792"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 0.865,
    stopColor: "#24265D"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 1,
    stopColor: "#252761"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "paint1_linear",
    x1: 21.028,
    y1: 14.928,
    x2: 6.017,
    y2: 18.844,
    gradientUnits: "userSpaceOnUse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#3871C1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 0.515,
    stopColor: "#2C3792"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 0.865,
    stopColor: "#24265D"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 1,
    stopColor: "#252761"
  }))));
};

var icon = EuiIconLogoDropwizard;
EuiIconLogoDropwizard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoDropwizard"
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVsYXN0aWMvZXVpL2VzL2NvbXBvbmVudHMvaWNvbi9hc3NldHMvbG9nb19kcm9wd2l6YXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxQixnREFBZ0QsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlLEdBQUcsd0NBQXdDOztBQUUzVCxxREFBcUQsK0JBQStCLDhEQUE4RCxZQUFZLG9DQUFvQyw2REFBNkQsWUFBWSw2QkFBNkIsT0FBTywyQkFBMkIsMENBQTBDLHdFQUF3RSwyQkFBMkIsRUFBRSxFQUFFLGVBQWU7O0FBRTFlLDBEQUEwRCwrQkFBK0IsaUJBQWlCLHNDQUFzQyxZQUFZLFlBQVksdUJBQXVCLE9BQU8scUJBQXFCLDBDQUEwQywyQkFBMkIsRUFBRSxlQUFlOztBQUV2Ujs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyw0Q0FBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsa0JBQWtCLDRDQUFLO0FBQzFCO0FBQ0EsR0FBRyxpQkFBaUIsNENBQUs7QUFDekI7QUFDQTtBQUNBLEdBQUcsR0FBRyw0Q0FBSztBQUNYO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNENBQUs7QUFDWDtBQUNBO0FBQ0EsR0FBRyxHQUFHLDRDQUFLO0FBQ1g7QUFDQTtBQUNBLEdBQUcsR0FBRyw0Q0FBSztBQUNYO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNENBQUssNkJBQTZCLDRDQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRSw0Q0FBSztBQUNWO0FBQ0EsR0FBRyxHQUFHLDRDQUFLO0FBQ1g7QUFDQTtBQUNBLEdBQUcsR0FBRyw0Q0FBSztBQUNYO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNENBQUs7QUFDWDtBQUNBO0FBQ0EsR0FBRyxJQUFJLDRDQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFLDRDQUFLO0FBQ1Y7QUFDQSxHQUFHLEdBQUcsNENBQUs7QUFDWDtBQUNBO0FBQ0EsR0FBRyxHQUFHLDRDQUFLO0FBQ1g7QUFDQTtBQUNBLEdBQUcsR0FBRyw0Q0FBSztBQUNYO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiaWNvbi5sb2dvX2Ryb3B3aXphcmQtanMubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBFdWlJY29uTG9nb0Ryb3B3aXphcmQgPSBmdW5jdGlvbiBFdWlJY29uTG9nb0Ryb3B3aXphcmQoX3JlZikge1xuICB2YXIgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgdGl0bGVJZCA9IF9yZWYudGl0bGVJZCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInRpdGxlXCIsIFwidGl0bGVJZFwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiB0aXRsZUlkXG4gIH0sIHByb3BzKSwgdGl0bGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwge1xuICAgIGlkOiB0aXRsZUlkXG4gIH0sIHRpdGxlKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk04IDI5LjYxczkuNTUgNC43NCAxNi44NTYtLjg5M2MtMS45MDUtNS4xMTQtNS4yNS0xOS44NjctNy4yMjYtMjYuMzgzLS40MjItMS4zODktLjQ5LTEuNTI3LS42NjMtMS45MDktLjk2NC0yLjEzNC0xLjk3OCA0LjE0Mi0zLjYyOCAxMC40NTlDMTIuNzQ5IDEzLjE0OCA4IDI5LjYxIDggMjkuNjFcIixcbiAgICBmaWxsOiBcInVybCgjcGFpbnQwX2xpbmVhcilcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTkuOTI2IDI4LjU2M3M4LjE3IDQuNzk0IDE0LjkzLjE1NGMtLjE4LS44MDctLjY0Mi0yLjEwMy0uOTU1LTMuMzExLTEuNjY0LTYuNDE2LTQuNjc2LTE3LjI0OC02LjE0NC0yMi42MjYtMS41OS01LjgyMi0yLjEwNS45ODYtMy45NjEgOC4yMy0uNTY0IDIuMjA0LTMuODcgMTcuNTUzLTMuODcgMTcuNTUzXCIsXG4gICAgZmlsbDogXCJ1cmwoI3BhaW50MV9saW5lYXIpXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMi4xNCAyNC40MWwuODUtMS40NjYuNzkzIDEuNTQ0LS45MDggMS45OS0uNzM1LTIuMDY5em02LjkzNC01LjU0NWwuODUtMS40NjUuNzkzIDEuNTQzLS45MDggMS45OS0uNzM1LTIuMDY4em0tNC43NDctNS44NTFsLjg1LTEuNDY1Ljc5MiAxLjU0My0uOTA4IDEuOTktLjczNC0yLjA2OFwiLFxuICAgIGZpbGw6IFwiI0Y5QTcyQlwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIuMTQgMjQuNDFsLjg1LTEuNzE2Ljc5MyAxLjc5NC0uOTA3IDEuNDY4LS43MzYtMS41NDZ6bTYuOTM0LTUuNTQ1bC44NTEtMS43MTYuNzkyIDEuNzk0LS45MDYgMS40NjgtLjczNy0xLjU0NnptLTQuNzQ3LTUuODUxbC44NS0xLjcxNi43OTIgMS43OTQtLjkwNiAxLjQ2OC0uNzM2LTEuNTQ2XCIsXG4gICAgZmlsbDogXCIjRkZGMjAwXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMi45ODcgMjguNDIyczYuMDgyIDEuMDE1IDEwLjA4Ni0xLjU0OWMtLjUwMiAxLjU1LTQuOTkxIDMuMzE0LTEwLjA4NiAxLjU1XCIsXG4gICAgZmlsbDogXCIjMjQyNjVEXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lYXJHcmFkaWVudFwiLCB7XG4gICAgaWQ6IFwicGFpbnQwX2xpbmVhclwiLFxuICAgIHgxOiAzMy40NzMsXG4gICAgeTE6IDcuNjc0LFxuICAgIHgyOiA3Ljc1MSxcbiAgICB5MjogMjEuMzMxLFxuICAgIGdyYWRpZW50VW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7XG4gICAgc3RvcENvbG9yOiBcIiMzODcxQzFcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogMC41MTUsXG4gICAgc3RvcENvbG9yOiBcIiMyQzM3OTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogMC44NjUsXG4gICAgc3RvcENvbG9yOiBcIiMyNDI2NURcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogMSxcbiAgICBzdG9wQ29sb3I6IFwiIzI1Mjc2MVwiXG4gIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVhckdyYWRpZW50XCIsIHtcbiAgICBpZDogXCJwYWludDFfbGluZWFyXCIsXG4gICAgeDE6IDIxLjAyOCxcbiAgICB5MTogMTQuOTI4LFxuICAgIHgyOiA2LjAxNyxcbiAgICB5MjogMTguODQ0LFxuICAgIGdyYWRpZW50VW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7XG4gICAgc3RvcENvbG9yOiBcIiMzODcxQzFcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogMC41MTUsXG4gICAgc3RvcENvbG9yOiBcIiMyQzM3OTJcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogMC44NjUsXG4gICAgc3RvcENvbG9yOiBcIiMyNDI2NURcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogMSxcbiAgICBzdG9wQ29sb3I6IFwiIzI1Mjc2MVwiXG4gIH0pKSkpO1xufTtcblxuZXhwb3J0IHZhciBpY29uID0gRXVpSWNvbkxvZ29Ecm9wd2l6YXJkO1xuRXVpSWNvbkxvZ29Ecm9wd2l6YXJkLl9fZG9jZ2VuSW5mbyA9IHtcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICBcIm1ldGhvZHNcIjogW10sXG4gIFwiZGlzcGxheU5hbWVcIjogXCJFdWlJY29uTG9nb0Ryb3B3aXphcmRcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9