// npm i styled-components
// https://styled-components.com/
import styled from 'styled-components'

// CSS가 적용된 사용자 정의 태그(컴포넌트)를 생성한다
export const MYBOX = styled.div`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  padding: 5px;
  margin-bottom: 10px
`
export const MYBOXTWO = styled(MYBOX)`
  font-weight: bold;
`
export const MYBTN = styled.button`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  padding: 5px;

  &:hover {
    background-color: white;
    color: gray;
  }
`