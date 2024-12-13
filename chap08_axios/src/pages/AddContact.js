


import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function AddContact() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );
  const navigate = useNavigate();   // 이동 관련 hook

  const changeContact = useCallback((evt) => {
    setContact((contact) => {
      return { ...contact, [evt.target.name]: evt.target.value }
    })
  }, []);

  const addContact = useCallback(async () => {
    try {
      const headers = { 'Contact-Type': 'application/json' }
      const resp = await axios.post(baseURL, contact, { headers });
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' })
      }
      navigate('/contactList')
    } catch (error) {
      console.error(error)
    }
  }, [navigate, contact]);

  return (
    <div>
      <h3>Add Contact</h3>
      Name: <input type="text" className="form-control" name="name"
        value={contact.name} onChange={changeContact} />
      Tel: <input type="text" className="form-control" name="tel"
        value={contact.tel} onChange={changeContact} />
      Address: <input type="text" className="form-control" name="address"
        value={contact.address} onChange={changeContact} />
      <br />
      <button className="btn btn-outline-primary" onClick={addContact}>ADD</button>
    </div>
  );
}

export default AddContact;

