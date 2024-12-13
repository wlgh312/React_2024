import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getContactAction, deleteContactAction } from '@store/contextStore'
import Swal from 'sweetalert2'

function Contact() {
  const { no } = useParams();
  const navigate = useNavigate();

  const { loading, error, contact, etc } = useSelector(store => store.contextStore)
  const dispatch = useDispatch();

  const deleteContact = useCallback(() => {
    dispatch(deleteContactAction(no))
  }, [dispatch, no])

  useEffect(() => {
    dispatch(getContactAction(no))
  }, [dispatch, no])

  useEffect(() => {
    if (etc.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
      navigate('/contactList')
    } else if (etc.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' });
      navigate('/contactList')
    }
  }, [etc.status, navigate])

  if (loading) return <h1>Loading.....</h1>
  if (error) return <h1>잠시 후 다시 방문해 주세요. {error.message}</h1>

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary">수정</button>
      <button className="btn btn-outline-primary" onClick={deleteContact}>삭제</button>
    </div>
  )
}

export default Contact;
