"use strict";

// 함수 리터럴. 함수 표현식
var onAdd = function onAdd(x, y) {
  console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
};
var onMin = function onMin(x, y) {
  return "".concat(x, " - ").concat(y, " = ").concat(x - y);
};
onAdd(10, 20);
console.log(onMin(10, 20));
console.log(" ");

// ES2015.
// 함수 리터럴 방식만 변경 가능
// 1. function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
var one = function one(x, y) {
  console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
};
var two = function two(x, y) {
  return "".concat(x, " - ").concat(y, " = ").concat(x - y);
};
one(10, 20);
console.log(onMin(10, 20));
console.log(" ");

// 2. { } 내부의 구문이 1줄만 존재하는 경우 { }와 return 생략 가능 (한 줄에 기술)
// => 뒤가 구문이면 실행
// => 뒤가 값이면 리턴 값으로 취급한다

var three = function three(x, y) {
  return console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
};
var four = function four(x, y) {
  return "".concat(x, " - ").concat(y, " = ").concat(x - y);
};
three(30, 20);
console.log(onMin(30, 20));
console.log(" ");

// 3. 매개변수가 1개인 경우 () 생략 가능
// 2 * 2 * 2 => 2 ** 3
var five = function five(x) {
  return Math.pow(2, x);
};
console.log("2 ** 3 => ${five(3)}");
console.log("");

// 4. this가 존재하지 않는다 => React 에서는 의미 없음
var obj = {
  name: "HungBu",
  age: 25,
  child: ["one", "two"],
  info: {
    tel: "010-1234-5678",
    add: "Seoul"
  },
  view: function view() {
    console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC138 \uC785\uB2C8\uB2E4"));
  }
};
obj.view();
console.log("");
var arr = [10, 11, 100, 101, 1000];

/* // immer 방식
//불변성 > React는 값이 아닌 주소가 바뀌어야 함(배열, 객체)
//값을 변경하고 싶으면 새로운 값을 만들어야 함
const changeArrValue = function (idx, value) {
  //arr[idx] = value;//기존의 배열 변경(주소값이 동일해서 변경이 안됨)
  const newArr = [...arr];//spread operator 배열 복사
  newArr[idx] = value;
  return newArr;
}
  */

//[10, 11, 100, 101, 1000];
//순수함수(data 매개변수 사용)
//1. 외부 리소스를 참조하지 않는다.
//2. 외부 값을 변경하지 않는다.
//3. 매개변수가 동일하면 항상 동일한 값을 리턴한다.
var changeArrValue = function changeArrValue(data, idx, value) {
  return data.map(function (item, i) {
    return i === idx ? value : item;
  });
};
var newArr = changeArrValue(arr, 1, 2000);
console.log(newArr);
console.log(arr);