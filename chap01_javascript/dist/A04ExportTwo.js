"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.y = exports.x = exports["default"] = void 0;
//JavaScript의 이전 Module 방식
var jumsu = function () {
  var progName = '점수 프로그램';
  var name = '놀부';
  var getName = function getName() {
    return name + ' ' + progName;
  };
  var getTotal = function getTotal(x, y) {
    return x + y;
  };
  var getAvg = function getAvg(total, num) {
    return total / num;
  };

  //키와 value가 동일하면 생략할 수 있다(getAvg)
  return {
    name: getName,
    total: getTotal,
    getAvg: getAvg
  };
}();
console.log(jumsu);
//const jumsu = {name: getName, total:getTotal, getAvg:getAvg};
// console.log(jumsu);

//export해야 할 요소가 단 1개(보통 객체)
// default는 한 파일에서 1개의 요소에만 지정 할 수 있다. default가 두번 오면 에러
var _default = exports["default"] = jumsu; // 개별 export는 따로 얼마든지 사용 가능하다.
var x = exports.x = 10;
var y = exports.y = 20;