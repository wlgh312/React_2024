//배열, Object 변수는 존재. 그 요소값이 존재하지 않은 경우 참조는
//에러가 아닌 undefined.
//React에서는 undefined, null은 화면에 표시하지 않는다.
console.log([10, 11, 100]);
console.log([10, 11, 100][0], [10, 11, 100][1], [10, 11, 100][2], [10, 11, 100][3]);


//배열, Objec의 요소값을 개별 값으로 취급
console.log(...[10, 11, 100]);//[]를 삭제하고, 10, 20, 30 형태로 출력
console.log('');

console.log('NolBu');
console.log(...'NolBu');//한 문자씩 출력
console.log('');


//Arrow 함수는 arguments 객체가 존재하지 않는다. 
//함수의 매개변수가 ...을 가지면 나머지 연산자(spread와 다르다)
// ...rest는 나머지 매개변수를 의미(항상 매개변수의 맨 뒤에 위치해야 함). 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e, ...rest) {
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
  console.log(`d => ${d}`);
  console.log(`e => ${e}`);
  console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
console.log('');

// 배열 합치기.
const arrOne = [10, 20, 30];

//주의
// const one = ...arrOne;       //Error => const one = 10, 20, 30; 
const one = [...arrOne];        // Ok => const one = [10, 20, 30];
console.log(arrOne === one);    //false, 값을 복사해 새로운 배열을 생성
console.log('');

//arrTwo에 추가
const arrTwo = [1, 2, 3, ...arrOne]; // [1, 2, 3, 10, 20, 30]
console.log(arrTwo);


//복사해서 새로운 배열 생성
const arrThree = [...one, ...arrTwo];
console.log(arrThree);
console.log(arrTwo);
console.log('');

// Object
//리액트에서 Object의 값 추가, 변경은 모두 spread operator를 이용
const objOne = {
  id: 1,
  name: 'NolBu',
};

//const two = ...objOne;    //Error => const two = id : 1, name:'NolBu';
const two = { ...objOne };    //Ok => const two = { id : 1, name:'NolBu' };
console.log(objOne === two); //fasle => 요소 복사


//복사 후 요소 추가
two.address = 'Seoul';
console.log(two);

//변경, 추가와 동일, 객체는 요소값이 없으면 추가, 있으면 변경
two.address = 'Busan';
console.log(two);

//spread를 이용하는 경우 중첩된 요소는 뒤의 값으로 덮어쓴다.
const objTwo = {
  id: 2,
  address: 'Seoul',
  ...objOne, //id : 1
};
console.log(objTwo);

//원래 값을 유지하려면 먼저 풀어놓는다.
const objThree = {
  ...objOne,
  id: 3,
  address: 'InChen',
};
console.log(objThree);
