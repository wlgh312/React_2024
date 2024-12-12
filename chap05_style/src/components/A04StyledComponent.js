
import React, { useState } from "react";
import { MYBOX, MYBOXTWO, MYBTN } from "./css/A04Style";
//npm i reactstrap
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Alert } from 'reactstrap'

//https://react-icons.github.io/react-icons/
import { IoAccessibilityOutline } from "react-icons/io5";

/*
// npm i styled-components
// https://styled-components.com/
import styled from 'styled-components'

// CSS가 적용된 사용자 정의 태그(컴포넌트)를 생성한다
const MYBOX = styled.div`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  padding: 5px;
  margin-bottom: 10px
`
const MYBOXTWO = styled(MYBOX)`
  font-weight: bold;
`
const MYBTN = styled.button`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  padding: 5px;

  &:hover {
    background-color: white;
    color: gray;
  }
`
*/

function A04StyledComponent() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="mb-5">
      <h3><IoAccessibilityOutline style={{ color: 'orange', fontSize: '24pt' }} />A04 Styled Component</h3>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Alert color="primary">Hey! Pay attention.</Alert>

      <MYBOX>
        미국 최대 건강보험사 CEO 살해한 용의자에 대한 지지 여론이 SNS를 중심으로 퍼지고 있습니다.
        트럼프 정부에서 중책을 맡은 일론 머스크도 용의자가 쓴 선언문을 공유하며 의료시스템 비판에 나섰습니다.

        <MYBTN onClick={() => alert('Hello World')}>CLICK</MYBTN>
      </MYBOX>

      <MYBOX color="green">
        미국 최대 건강보험사 CEO 살해한 용의자에 대한 지지 여론이 SNS를 중심으로 퍼지고 있습니다.
        트럼프 정부에서 중책을 맡은 일론 머스크도 용의자가 쓴 선언문을 공유하며 의료시스템 비판에 나섰습니다.
      </MYBOX>

      <MYBOXTWO>
        미국 최대 건강보험사 CEO 살해한 용의자에 대한 지지 여론이 SNS를 중심으로 퍼지고 있습니다.
        트럼프 정부에서 중책을 맡은 일론 머스크도 용의자가 쓴 선언문을 공유하며 의료시스템 비판에 나섰습니다.
      </MYBOXTWO>
    </div>
  );
}

export default A04StyledComponent;

