import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
function GetContactList() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contactList, setContactList] = useState(
    { pageno: '', pagesize: '', totalcount: '', contacts: [] }
  );

  const getContactList = useCallback(async (no = 1, size = 5) => {
    try {
      const params = { pageno: no, pagesize: size };
      const resp = await axios.get(baseURL, { params });
      setContactList(resp.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getContactList(1, 5);
  }, [getContactList]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {/* 자식컴포넌트로 분리해야 한다. */}
          {contactList.contacts?.map(contact => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td><Link to={`/contact/${contact.no}`}>{contact.name}</Link></td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
              <td><img src={contact.photo} alt="사진" width={70} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};
export default GetContactList;
