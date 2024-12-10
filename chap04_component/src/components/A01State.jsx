import React, { useState } from 'react'

//이 View(컴포넌트)에서만 사용할 상태 변수가 필요함
function A01State() {
  //상태변수가 아닌 일반변수 => 값이 변경되도 리액트는 관여안함
  let name = '놀부';

  //상태변수 => 값이 변경되면 리액트는 즉시 변경된 값으로 리렌더링
  //userState(기본값) => 함수 기반에서 상태변수를 정의하는 Hook(16.8 버전부터 사용가능)
  // const [getter, setter] = useState(기본값);
  const [address, setAddress] = useState('Seoul');
  const [num, setNumber] = useState(10);
  const [check, setCheck] = useState(true);
  const [arr, setArray] = useState([10, 11]);
  const [user, setUser] = useState({ name: 'A', age: 20 });


  const changeName = () => name = '변경 안됨';

  const changeAddress = () => setAddress('Busan');
  //x는 현재 num의 값이 주입된다.
  const changeNumber = () => setNumber((x) => x + 10)//callback 함수 
  const changeCheck = () => setCheck(!check);

  // 객체 타입은 반드시 불변성을 지켜야 한다. 기존 객체를 사용하면 안됨
  const addArray = () => {
    const random = Math.ceil(Math.random() * 50);

    //setArray(arr.push(random));  //Error

    /*
    const newArr = [...arr];
    newArr.push(random);
    setArray(newArr);
    */

    //맨 뒤에 값을 추가 후 새로운 배열을 리턴해 준다.
    /*
    const newArr = arr.concat(random);
    setArray(newArr);
    */

    setArray(arr.concat(random));
  }

  const updateArray = (idx, value) => {
    //setArray(arr[idx] = value); //Error

    /*
    const newArr = [...arr];
    newArr[idx] = value;
    */

    /*
    const newArr = arr.map((item, i) => (idx !== i) ? item : value)
    setArray(newArr);
    */

    setArray(arr.map((item, i) => (idx !== i) ? item : value));
  }
  const deleteArray = (idx) => {
    //arr.splice(idx, 1);   //Error

    /*
    const newArr = [...arr];
    newArr.splice(idx, 1);
    */

    //return이 true인 요소의 값(item)만 반환되어 새로운 배열을 생성한다.
    /*
    const newArr = arr.filter((item, i)=> {
      if(idx !== i) return true;
      else return false;
    });
    */

    setArray(arr.filter((item, i) => (idx !== i)));
  }

  //Object
  const addObject = (key, value) => {
    //user[key] = value; // Error

    /*const newUser = { ...user };
    newUser[key] = value;
    setUser(newUser);
    */

    setUser({ ...user, [key]: value })
  }

  const updateObject = (key, value) => {
    //user[key] = value; // Error

    /*const newUser = { ...user };
    newUser[key] = value;
    setUser(newUser);
    */

    setUser({ ...user, [key]: value })
  }

  const deleteObject = (key) => {
    delete user[key];
    //const newUser = { ...user };
    setUser({ ...user });
  }
  return (
    <div>
      <h3>A01State</h3>
      <div className='mb-3'>
        Name: {name}<br />
        Address: {address}<br />
        Number: {num}<br />
        Check: {check ? 'T' : 'F'} <br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        Object: {user.name} / {user.age} / {user.address}<br />
      </div>

      <div className='mb-3'>
        <button onClick={changeName}>Name</button>
        <button onClick={changeAddress}>Address</button>
        <button onClick={changeNumber}>Number</button>
        <button onClick={changeCheck}>Check</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(1, 2000)}>Update Array</button>
        <button onClick={() => deleteArray(1)}>Delete Array</button>

        <button onClick={() => addObject('address', 'Seoul')}>Add Object</button>
        <button onClick={() => updateObject('address', 'Busan')}>Update Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>
      </div>

    </div>
  )
}

export default A01State;