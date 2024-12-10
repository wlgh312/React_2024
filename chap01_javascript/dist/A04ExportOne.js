"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.name = exports.check = exports.arr = exports.age = exports.add = void 0;
// ESM - ECMAScript Module

// 개별 Export
var name = exports.name = '놀부';
var age = exports.age = 30;
var check = exports.check = true;
var arr = exports.arr = [10, 20];
var user = exports.user = {
  name: '흥부',
  age: 20
};
var onAdd = exports.add = function onAdd(x, y) {
  return "".concat(x, " + ").concat(y, " = ").concat(x + y);
};

// 묶어서 개별 Export
//as로 export 이름 변경 가능

//파일에서 사용도 가능
console.log('Export ONE: ${name} / ${arr[0]}');