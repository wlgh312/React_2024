import React, { useRef, useState } from "react";
import A04Table from './A04Table';

//let cnt = 4;
//const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

function A04CreateDOM() {
  //값을 유지하는 변수, useState와 동일하게 최초 1번만 실행됨
  //useSate와는 다르게 값 변경되도 화면 갱신 작업은 하지 않는다.
  const count = useRef(4);
  console.log(count, count.current);

  const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  const changeValue = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }
  const addTeam = () => {
    setBaseObject(baseObject.concat({ id: count.current++, team: "삼성", value: "Samsung" }));
  }
  const showHide = () => {
    setData({ ...data, isChecked: !data.isChecked });
  }

  const changeTeam = (evt) => {
    setData({ ...data, team: evt.target.value });
  }
  const addBaseArray = () => {
    baseArray.push(data.team);
    console.log(baseArray);
  }

  const MakeTable = () => {
    return baseObject.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.team}</td>
        <td>{item.value}</td>
      </tr>
    ))
  }

  return (
    <div className="mb-5">
      <h3>A04 Make DOM</h3>

      <div className="mb-3">
        SelectBox: {data.teamOne}
        <br />
        <select name="teamOne" className="form-control" onChange={changeValue}>
          <option>선택해주세요</option>
          {/* JSX로 요소만 반환하면 된다. 보편적으로 map으로 순환하면서 DOM을 반환. key 속성은 필수. 중첩되지 않는 값으로 선언한다. */}
          {baseArray.map((item, i) => <option key={item + i}>{item}</option>)}
        </select>
      </div>

      <div className="mb-3">
        SelectBox: {data.teamTwo}
        <select name="teamTwo" className="form-control" onChange={changeValue}>
          <option value="">선택해주세요</option>
          {baseObject.map((item) => <option key={item.id} value={item.value}>{item.team}</option>)}
        </select>
      </div>

      <div className="mb-3">
        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Team</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {baseObject.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.team}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            {/* {MakeTable()} */}
            <MakeTable></MakeTable>
          </tbody>
          <tbody>
            {/* 재사용하는 뷰는 컴포넌트로 분리한다. 필요에 따라 memo화 */}
            {baseObject.map(item => <A04Table key={item.id} item={item} />)}
          </tbody>
        </table>
        <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
      </div>

      {/* View에서 삭제, 추가가 반복된다. 따라서 CSS 적용 등에 주의 */}
      {data.isChecked &&
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>ADD</button>
        </div>
      }
      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        {/* HIDE */}
        {data.isChecked ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
}
export default A04CreateDOM;
