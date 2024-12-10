"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _A04ExportOne = _interopRequireWildcard(require("./A04ExportOne.js"));
var one = _A04ExportOne;
var _A04ExportTwo = _interopRequireWildcard(require("./A04ExportTwo.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// 개별 export 된 요소를 import
//변수 이름은 export된 변수명과 동일해야 한다.
//변수명이 이미 사용되고 있는 경우 as를 이용해 이름 변경 가능

//개별 export 를 하나의 이름으로 묶어서 사용

console.log(one);

//default import
//default는 {} 없이 중복되지 않은 임의의 변수명으로 정의해 사용한다.
//import two from './A04ExportTwo.js';
//import { x, y } from './A04ExportTwo.js';

//한개로 묶어서 사용. 반드시 default가 먼저 정의되어야 한다.

console.log(_A04ExportTwo["default"]);
var name = 'Hello';
var dom = "\n  <div>\n    Name: ".concat(name, "<br>\n    export\uD55C \uC774\uB984\uC774 name\uC774\uBBC0\uB85C one.name\uC774 \uB41C\uB2E4<br>\n    Name(Nick): ").concat(_A04ExportOne.name, "\n    Age: ").concat(_A04ExportOne.age, " / ").concat(one.age, "<br>\n    Check: ").concat(_A04ExportOne.check, "<br>\n    Array: ").concat(_A04ExportOne.arr[0], " / ").concat(one.arr[1], " / ").concat(_A04ExportOne.arr[2], "<br>\n    User: ").concat(_A04ExportOne.user.name, " / ").concat(one.user.age, " / ").concat(_A04ExportOne.user.address, "<br>\n    export\uD55C \uC774\uB984\uC774 add\uC774\uBBC0\uB85C one.add\uAC00 \uB41C\uB2E4<br>\n    onAdd: ").concat((0, _A04ExportOne.add)(10, 20), " / ").concat(one.add(20, 30), "<br>\n\n    <hr>\n\n    Name: ").concat(_A04ExportTwo["default"].name(), "<br>\n    onTotal: ").concat(_A04ExportTwo["default"].total(100, 90), "<br>\n    onAvg: ").concat(_A04ExportTwo["default"].getAvg(190, 2), "<br>\n    X: ").concat(_A04ExportTwo.x, ", Y:").concat(_A04ExportTwo.y, ": \n  </div>\n");
console.log(dom);

//html 출력
document.getElementById("root").innerHTML = dom;