

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

function AddContact() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );

  // /:no로 넘어온 값
  const { no } = useParams();       // 패스값 추출 hook
  const navigate = useNavigate();   // 이동 관련 hook

  const changeContact = useCallback((evt) => {
    setContact((contact) => {
      return { ...contact, [evt.target.name]: evt.target.value }
    })
  }, []);

  const getContact = useCallback(async () => {
    try {
      const resp = await axios.get(baseURL + no);
      setContact(resp.data);
    } catch (error) {
      console.error(error)
    }
  }, [no]);
  const updateContact = useCallback(async () => {
    try {
      const headers = { 'Contact-Type': 'application/json' }
      const resp = await axios.put(baseURL + no, contact, { headers });
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success' })
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 수정 실패', icon: 'error' })
      }
      navigate('/contactList')
    } catch (error) {
      console.error(error)
    }
  }, [no, navigate, contact]);

  useEffect(() => {
    getContact()
  }, [getContact]);

  return (
    <div>
      <h3>Update Contact</h3>

      <div>
        Name: <input type="text" className="form-control" name="name"
          value={contact.name} onChange={changeContact} />
        Tel: <input type="text" className="form-control" name="tel"
          value={contact.tel} onChange={changeContact} />
        Address: <input type="text" className="form-control" name="address"
          value={contact.address} onChange={changeContact} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={updateContact}>UPDATE</button>
    </div>
  );
}
export default AddContact;

