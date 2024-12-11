import { useCallback, useState } from "react";

const A07InnerOne = (Comp) => {

  // 매개변수로 넘어오는 컴포넌트의 부모 컴포넌트가 된다
  const InnerComp = (props) => {
    const [age, setAge] = useState(10);
    const address = 'Seoul';
    const changeAge = useCallback((x) => {
      setAge(x)
    }, []);

    return (
      // 전달된 모든 속성을 key=value 형태로 변환해 준다
      <Comp {...props} address={address} age={age} changeAge={changeAge} />
    )
  }
  // return Comp;
  return InnerComp;
}
export default A07InnerOne;