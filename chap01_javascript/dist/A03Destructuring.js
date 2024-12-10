"use strict";

var user = {
  name: 'NolBu',
  age: 30
};

/*
//spread operator => 배열, 객체 등의 값을 개별 요소로 취급
//destructoring => 배열, 객체 등의 값을 개별적으로 꺼내 각 개별 변수에 대입
const name = user.name;
const age = user.age;
const addr = user.addr;
console.log(name, age, addr); //Nolbu, 30, undefined
*/

//1. 변수명은 객체의 key 이름과 동일해야 한다.
var name = user.name,
  age = user.age;
console.log(name, age);

//2. 이미 선언된 변수가 있으면 별칭을 사용한다.
var nick = user.name,
  num = user.age;
console.log(nick, num);

//3. 없는 요소 참조는 undefined, 기본값이 필요하면 할당 가능(destructuring)
var _user$name = user.name,
  x = _user$name === void 0 ? 'Unknown' : _user$name,
  _user$age = user.age,
  y = _user$age === void 0 ? 0 : _user$age,
  _user$z = user.z,
  z = _user$z === void 0 ? 'Seoul' : _user$z;
console.log(x, y, z);
console.log('');

//배열은 key가 없으므로 중복되지 않는 임의의 변수명으로 선언해서 사용
//정의는 [] 사용
var arr = ['A', 'B', 'C'];
var a = arr[0],
  b = arr[1],
  c = arr[2];
console.log(a, b, c);

//필요한 값만 추출
var c1 = arr[2];
console.log(c1);

//기본값 할당 가능
var a2 = arr[0],
  _arr$ = arr[2],
  c2 = _arr$ === void 0 ? 0 : _arr$,
  _arr$2 = arr[3],
  d2 = _arr$2 === void 0 ? 10 : _arr$2;
console.log(a2, c2, d2);