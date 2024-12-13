

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

function GetContact() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );

  // /:no로 넘어온 값
  const { no } = useParams();       // 패스값 추출 hook
  const navigate = useNavigate();   // 이동 관련 hook

  const getContact = useCallback(async () => {
    try {
      const resp = await axios.get(baseURL + no);
      setContact(resp.data);
    } catch (error) {
      console.error(error)
    }
  }, [no]);
  const deleteContact = useCallback(async () => {
    try {
      const resp = await axios.delete(baseURL + no);
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' })
      }
      navigate('/contactList')
    } catch (error) {
      console.error(error)
    }
  }, [no, navigate]);

  useEffect(() => {
    getContact()
  }, [getContact]);

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled defaultValue={contact.name} />
        Tel: <input type="text" className="form-control" disabled defaultValue={contact.tel} />
        Address: <input type="text" className="form-control" disabled defaultValue={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary"
        // Route에 패스명/:no 형태로 지정할 필요가 있다
        onClick={() => navigate(`/updateContact/${contact.no}`)}>수정</button>
      <button className="btn btn-outline-primary" onClick={deleteContact}>삭제</button>
    </div>
  );
}
export default GetContact;


