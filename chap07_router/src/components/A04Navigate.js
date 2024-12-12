
import React from 'react'

// View에서 태그 형태로 사용해야 하는 경우
import { Navigate } from 'react-router-dom'

function NavigateTag() {
  const isChecked = false;

  if (!isChecked) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div>
      <h3>Navigate Tag</h3>
    </div>
  )
}

export default NavigateTag
