import React from 'react'

function A04Table(props) {
  //각 row 데이터를 부모로부터 받아 처리
  const { item } = props;
  return (
    <tr>
      <td>{item?.id}</td>
      <td>{item?.team}</td>
      <td>{item?.value}</td>
    </tr>
  )
}

export default React.memo(A04Table);