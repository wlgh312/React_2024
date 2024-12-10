// 개별 export 된 요소를 import
//변수 이름은 export된 변수명과 동일해야 한다.
//변수명이 이미 사용되고 있는 경우 as를 이용해 이름 변경 가능
import { name as nick, age, check, arr, user, add } from './A04ExportOne.js'

//개별 export 를 하나의 이름으로 묶어서 사용
import * as one from './A04ExportOne.js'
console.log(one);

//default import
//default는 {} 없이 중복되지 않은 임의의 변수명으로 정의해 사용한다.
//import two from './A04ExportTwo.js';
//import { x, y } from './A04ExportTwo.js';

//한개로 묶어서 사용. 반드시 default가 먼저 정의되어야 한다.
import two, { x, y } from './A04ExportTwo.js';
console.log(two);

const name = 'Hello';
const dom = `
  <div>
    Name: ${name}<br>
    export한 이름이 name이므로 one.name이 된다<br>
    Name(Nick): ${nick}
    Age: ${age} / ${one.age}<br>
    Check: ${check}<br>
    Array: ${arr[0]} / ${one.arr[1]} / ${arr[2]}<br>
    User: ${user.name} / ${one.user.age} / ${user.address}<br>
    export한 이름이 add이므로 one.add가 된다<br>
    onAdd: ${add(10, 20)} / ${one.add(20, 30)}<br>

    <hr>

    Name: ${two.name()}<br>
    onTotal: ${two.total(100, 90)}<br>
    onAvg: ${two.getAvg(190, 2)}<br>
    X: ${x}, Y:${y}: 
  </div>
`;

console.log(dom);

//html 출력
document.getElementById("root").innerHTML = dom;