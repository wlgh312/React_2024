const user = {
  name: 'NolBu',
  age: 30,
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
const { name, age } = user;
console.log(name, age);

//2. 이미 선언된 변수가 있으면 별칭을 사용한다.
const { name: nick, age: num } = user;
console.log(nick, num);

//3. 없는 요소 참조는 undefined, 기본값이 필요하면 할당 가능(destructuring)
const { name: x = 'Unknown', age: y = 0, z = 'Seoul' } = user;
console.log(x, y, z);
console.log('');

//배열은 key가 없으므로 중복되지 않는 임의의 변수명으로 선언해서 사용
//정의는 [] 사용
const arr = ['A', 'B', 'C'];
const [a, b, c] = arr;
console.log(a, b, c);

//필요한 값만 추출
const [, , c1] = arr;
console.log(c1);

//기본값 할당 가능
const [a2, , c2 = 0, d2 = 10] = arr;
console.log(a2, c2, d2);
