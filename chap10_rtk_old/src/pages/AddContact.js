import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { changeContextAction, clearContextAction, addContactAction } from '@store/contextStore'

function AddContact() {
  const navigate = useNavigate();

  const { loading, error, contact, etc } = useSelector(store => store.contextStore)
  const dispatch = useDispatch();

  useEffect(() => {
    if (etc.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
      navigate('/contactList')
    } else if (etc.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' });
      navigate('/contactList')
    }
  }, [etc.status, navigate])

  useEffect(() => {
    dispatch(clearContextAction())
  }, [dispatch])

  if (loading) return <h1>Loading.....</h1>
  if (error) return <h1>잠시 후 다시 방문해 주세요. {error.message}</h1>

  return (
    <div>
      <h3>Add Contact</h3>

      Name: <input type="text" className="form-control" name="name"
        value={contact.name} onChange={(evt) => dispatch(changeContextAction(evt.target))} />
      Tel: <input type="text" className="form-control" name="tel"
        value={contact.tel} onChange={(evt) => dispatch(changeContextAction(evt.target))} />
      Address: <input type="text" className="form-control" name="address"
        value={contact.address} onChange={(evt) => dispatch(changeContextAction(evt.target))} />
      <br />
      <button className="btn btn-outline-primary" onClick={() => dispatch(addContactAction(contact))}>ADD</button>
    </div>
  )
}
export default AddContact
