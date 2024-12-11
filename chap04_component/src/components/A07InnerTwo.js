import { useCallback, useState } from "react";

const A07InnerTwo = (Comp) => {

  // 매개변수로 넘어오는 컴포넌트의 부모 컴포넌트가 된다
  const InnerComp = (props) => {
    const [tel, setTel] = useState('010-0000-0000');
    const changeTel = useCallback((x) => {
      setTel(x)
    }, []);

    return (
      // 전달된 모든 속성을 key=value 형태로 변환해 준다
      <Comp {...props} tel={tel} changeTel={changeTel} />
    )
  }
  // return Comp;
  return InnerComp;
}
export default A07InnerTwo;
