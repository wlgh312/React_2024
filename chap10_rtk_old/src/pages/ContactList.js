import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getContactListAction } from '@store/contextStore'
import { NavLink, useNavigate } from 'react-router-dom';

const GetContactList = () => {
  const navigate = useNavigate();

  const { loading, error, contactList } = useSelector(store => store.contextStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactListAction({ no: 1, size: 5 }))
  }, [dispatch])


  if (loading) return <h1>Loading.....</h1>
  if (error) return <h1>잠시 후 다시 방문해 주세요. {error.message}</h1>

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
          {contactList.contacts.map(contact => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td><NavLink to={`/contact/${contact.no}`}>{contact.name}</NavLink></td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
            </tr>
          ))}

        </tbody>
      </table>

      <button className="btn btn-outline-primary btn-sm"
        onClick={() => navigate('/add')}>ADD</button>
    </div>
  )
}

export default GetContactList
