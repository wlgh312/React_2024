/* eslint-disable react/prop-types */

const MakeDOM = (props) => {
  const { title, age } = props;
  return (
    <div>
      <h5>MakeDOM 함수: {title} / {age || 0}</h5>
      <p>
        함수의 이름 시작을  대문자로 시작했음..<br />
        외부 파일로 분할함..
      </p>
    </div>
  )
}
export default MakeDOM;