/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function A03Event() {
  const [data, setData] = useState({
    name: '',//document.getElementById('name').value
    address: '',
    age: '',
    date: '2024-12-25',
    sports: 'baseball',
    isChecked: true,
    files: {},
    language: ['React'],
    baseball: '',
    four: ['한화'],
  });

  const sendData = (evt) => {
    //HTML 요소가 가지고 있는 자바스크립트를 실행하지 않도록 설정(리로드되지않고, url 변경 없음)
    evt.preventDefault();

    //서버에 변경된 데이터 값을 전송
    console.log(data);
  };

  const changeName = (evt) => {
    const result = evt.target.value;
    //if (result.trim().length >= 5) {
    const newData = { ...data, name: result.trim() };
    setData(newData);


    setTimeout(() => {
      const newData2 = { ...data, name: '' };
      setData(newData2);
    }, 1000)

    //}
  }

  const changeString = (evt) => {
    // data의 요소 이름과 같은 이름으로 input의 name 속성명을 지정한다.
    console.log(evt.target.name, evt.target.value);
    const newData = { ...data, [evt.target.name]: evt.target.value.trim() };
    setData(newData);
  }

  const changeNumber = (evt) => {
    // data의 요소 이름과 같은 이름으로 input의 name 속성명을 지정한다.
    console.log(evt.target.name, evt.target.value);
    let value = Number(evt.target.value);
    if (Number.isNaN(value)) value = '';
    const newData = { ...data, [evt.target.name]: value };
    setData(newData);
  }

  const changeCheck = (evt) => {
    const newData = { ...data, [evt.target.name]: !data[evt.target.name] };//const newData = { ...data, isChecked: !data.isChecked };
    setData(newData);
  }

  //includes => Array, String 객체에 추가됨
  const changeCheckBox = (evt) => {
    const value = evt.target.value;
    //data.language.push(value) -> immer
    if (!data.language.includes(value)) {
      //하위 객체부터 새롭게 생성하여 tree의 모든 객체를 새롭게 생성해야 한다.
      const newArr = data.language.concat(value);
      const newData = { ...data, language: newArr };
      setData(newData);
    } else {
      const newArr = data.language.filter(item => item !== value);
      const newData = { ...data, language: newArr };
      setData(newData);
    }
  }

  const changeFile = (evt) => {
    const files = evt.target.files;
    //console.log(files);
    const newFiles = { name: files[0].name, size: files[0].size, type: files[0].type };
    const newData = { ...data, files: newFiles };
    setData(newData);
  }

  const changeSelectBox = (evt) => {
    const elem = evt.target.selectedOptions;
    //console.log(elem);
    const arr = Array.from(elem);
    const newFour = arr.map(item => item.value);
    const newData = { ...data, four: newFour };
    setData(newData);
  }

  return (
    <div className="mb-5">
      <h3>B02 React Hook Form</h3>

      {/* <form method='GET' action='xx.jsp'> => 디폴트값 */}
      <form>
        <div className="mb-3">
          {/* value 속성을 기술하면 리액트는 반드시 value값을 변경하는 이벤트 핸들러를 기술해서 상태변수를 변경하는 로직을 추가 */}
          {/* defaultValue => 값 참조만 */}
          {/* value => 값 참조와 변경, 따라서 변경하는 이벤트 핸들러가 필요 */}
          <div>{data.name.length < 5 ? '5글자 이상 입력해 주세요' : ''}</div>
          <label htmlFor="name" className="form-label">Name: {data.name}</label>
          <input type="text" id="name" name="name" className="form-control" value={data.name} onChange={changeString} /> {/* defaultValue 또는  readOnly 사용 */}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address: {data.address}</label>
          <input type="text" id="address" name="address" className="form-control" value={data.address} onChange={changeString} />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age: {data.age + 1}</label>
          <input type="number" id="age" name="age" className="form-control" onChange={changeNumber} />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date: {data.date}</label>
          <input type="date" id="date" name="date" className="form-control" onChange={changeString} />
        </div>

        <div className="mb-3">
          RadioButton: {data.sports}<br />
          <div className="form-check">
            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" onChange={changeString} defaultChecked={data.sports === 'baseball'} />
            <label htmlFor="baseball" className="form-check-label">야구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" onChange={changeString} defaultChecked={data.sports === 'soccer'} />
            <label htmlFor="soccer" className="form-check-label">축구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" onChange={changeString} defaultChecked={data.sports === 'basketball'} />
            <label htmlFor="basketball" className="form-check-label">농구</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox One: {data.isChecked ? '동의' : '동의안함'}<br />
          <div className="form-check">
            <input type="checkbox" id="isChecked" name="isChecked" className="form-check-input" onChange={changeCheck} defaultChecked={data.isChecked} />
            <label htmlFor="isChecked" className="form-check-label">동의</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox: {data.language.join(' - ')}<br />
          <div className="form-check">
            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input" defaultChecked={data.language.includes("Angular")} onChange={changeCheckBox} />
            <label htmlFor="angular" className="form-check-label">앵귤러</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="React" id="react" className="form-check-input" defaultChecked={data.language.includes("React")} onChange={changeCheckBox} />
            <label htmlFor="react" className="form-check-label">리엑트</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" defaultChecked={data.language.includes("Vue")} onChange={changeCheckBox} />
            <label htmlFor="vue" className="form-check-label">뷰</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">File: {data.files?.name}</label>
          <input type="file" className="form-control" id="file" name="file" multiple onChange={changeFile} />
        </div>

        <div className="mb-3">
          SelectBox: {data.baseball}<br />
          <select name="baseball" className="form-control mb-2" onChange={changeString} value={data.baseball}>
            <option value=''>선택</option>
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <div className="mb-3">
          SelectBox Multi: {data.four.join(', ')}<br />
          <select name="four" multiple size="5" className="form-control mb-2" onChange={changeSelectBox} value={data.four}>
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <button type="submit" onClick={sendData}>SEND</button>
      </form>
    </div>
  )
}

export default A03Event;
