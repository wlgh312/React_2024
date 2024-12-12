import React, { useState, useCallback } from "react";
//XMLHttpRequest => fetch(HTML 5)
import axios from 'axios'

function Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState('');

  const getContactList = useCallback((no = 1, size = 5) => {//매개변수 디폴트값 설정 가능
    const params = { pageno: no, pagesize: size };
    const headers = { 'Content-Type': 'application/json' };
    //axios.get(baseURL, { params: { pageno: no, pagesize: size }, headers: {}, timeout: 5000 })
    axios.get(baseURL, { params, headers, timeout: 5000 })
      .then((resp) => {
        //JavaScrip 객체 => JSON 문자열로 변환
        const jsonData = JSON.stringify(resp.data, '', 4);
        //JSON 문자열 => JavaScript 객체
        const jsData = JSON.parse(jsonData);

        setData(jsonData);
      })
      .catch((error) => {
        setData(error);
      })
  }, []);

  //async ~ await => 함수로 정의해야 한다.
  //async가 붙은 함수는 background에서 실행된다.
  const getContactListAsync = useCallback(async (no = 1, size = 5) => {
    const params = { pageno: no, pagesize: size };
    const headers = { 'Content-Type': 'application/json' };
    try {
      //await => 데이터 또는 에러가 도착할때까지 대기
      //await가 함수 내부에 존재하면 가장 가까운 함수가 async를 붙여야 한다.
      const resp = await axios.get(baseURL, { params, headers, timeout: 5000 })
      setData(JSON.stringify(resp.data, '', 4));
    } catch (error) {
      console.log(error);
    }

  }, []);

  const getContact = useCallback((no) => {
    axios({
      method: 'GET',
      url: baseURL + no,
      params: {},     //주소줄에 ?key=value&key=value 값을 객체화
      headers: {},    //서버에 전송되는 데이터 타입 등...
      data: '',       //post(입력), put(수정) 등에서 서버에 전송할 값
      timeout: 5000
    })
      .then((resp) => setData(JSON.stringify(resp.data, '', 4)))
      .catch((error) => setData(error))
  }, []);

  const addContact = useCallback(() => {
    const item = {
      "name": "강감찬",
      "tel": "010-2222-3339",
      "address": "서울시"
    };
    const headers = { 'Content-Type': 'application/json' };
    //두번째 값이 서버에 전송할 값
    axios.post(baseURL, item, { headers, timeout: 3000 })
      .then((resp) => setData(JSON.stringify(resp.data, '', 4)))
      .catch((error) => setData(error))
  }, []);

  const updateContact = useCallback((no) => {
    const item = {
      "name": "이순신",
      "tel": "010-2222-2222",
      "address": "충무시"
    };
    const headers = { 'Content-Type': 'application/json' };
    //두번째 값이 서버에 전송할 값
    axios.put(baseURL + no, item, { headers, timeout: 3000 })
      .then((resp) => setData(JSON.stringify(resp.data, '', 4)))
      .catch((error) => setData(error))
  }, []);

  const deleteContact = useCallback((no) => {
    axios.delete(baseURL + no, { timeout: 3000 })
      .then((resp) => setData(JSON.stringify(resp.data, '', 4)))
      .catch((error) => setData(error))
  }, []);


  return (
    <div>
      <h3>Axios Test</h3>
      <button onClick={() => getContactList()}>DATA LIST</button>
      <button onClick={() => getContactListAsync(2, 10)}>DATA LIST ASYNC</button>
      <button onClick={() => getContact(1)}>GET</button>
      <button onClick={addContact}>ADD</button>
      <button onClick={() => updateContact('1733990156059')}>UPDATE</button>
      <button onClick={() => deleteContact('1733990156059')}>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15" defaultValue={data}></textarea>
    </div >
  );
}
export default Axios;
