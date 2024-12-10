"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console, _console2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//배열, Object 변수는 존재. 그 요소값이 존재하지 않은 경우 참조는
//에러가 아닌 undefined.
//React에서는 undefined, null은 화면에 표시하지 않는다.
console.log([10, 11, 100]);
console.log([10, 11, 100][0], [10, 11, 100][1], [10, 11, 100][2], [10, 11, 100][3]);

//배열, Objec의 요소값을 개별 값으로 취급
(_console = console).log.apply(_console, [10, 11, 100]); //[]를 삭제하고, 10, 20, 30 형태로 출력
console.log('');
console.log('NolBu');
(_console2 = console).log.apply(_console2, _toConsumableArray('NolBu')); //한 문자씩 출력
console.log('');

//Arrow 함수는 arguments 객체가 존재하지 않는다. 
//함수의 매개변수가 ...을 가지면 나머지 연산자(spread와 다르다)
// ...rest는 나머지 매개변수를 의미(항상 매개변수의 맨 뒤에 위치해야 함). 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e) {
  console.log("a => ".concat(a));
  console.log("b => ".concat(b));
  console.log("c => ".concat(c));
  console.log("d => ".concat(d));
  console.log("e => ".concat(e));
  for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    rest[_key - 5] = arguments[_key];
  }
  console.log("rest => ".concat(rest, " / ").concat(rest.length));
}
spreadFun.apply(void 0, [0].concat([10, 20, 30], [40], [50, 60, 70]));
console.log('');

// 배열 합치기.
var arrOne = [10, 20, 30];

//주의
// const one = ...arrOne;       //Error => const one = 10, 20, 30; 
var one = [].concat(arrOne); // Ok => const one = [10, 20, 30];
console.log(arrOne === one); //false, 값을 복사해 새로운 배열을 생성
console.log('');

//arrTwo에 추가
var arrTwo = [1, 2, 3].concat(arrOne); // [1, 2, 3, 10, 20, 30]
console.log(arrTwo);

//복사해서 새로운 배열 생성
var arrThree = [].concat(_toConsumableArray(one), _toConsumableArray(arrTwo));
console.log(arrThree);
console.log(arrTwo);
console.log('');

// Object
//리액트에서 Object의 값 추가, 변경은 모두 spread operator를 이용
var objOne = {
  id: 1,
  name: 'NolBu'
};

//const two = ...objOne;    //Error => const two = id : 1, name:'NolBu';
var two = _objectSpread({}, objOne); //Ok => const two = { id : 1, name:'NolBu' };
console.log(objOne === two); //fasle => 요소 복사

//복사 후 요소 추가
two.address = 'Seoul';
console.log(two);

//변경, 추가와 동일, 객체는 요소값이 없으면 추가, 있으면 변경
two.address = 'Busan';
console.log(two);

//spread를 이용하는 경우 중첩된 요소는 뒤의 값으로 덮어쓴다.
var objTwo = _objectSpread({
  id: 2,
  address: 'Seoul'
}, objOne);
console.log(objTwo);

//원래 값을 유지하려면 먼저 풀어놓는다.
var objThree = _objectSpread(_objectSpread({}, objOne), {}, {
  id: 3,
  address: 'InChen'
});
console.log(objThree);