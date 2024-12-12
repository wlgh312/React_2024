import React, { useCallback, useRef } from "react";

function TodoForm({ addTodo, text, changeText }) {
  const todoRef = useRef(null);

  //부모의 데이터, 이벤트 핸들러 사용 => 부모까지 전체 리렌더링 됨
  const sendData = useCallback((evt) => {
    if (text.trim() !== '') {
      evt.preventDefault();
      addTodo(text);
      changeText('');
      todoRef.current.focus();
    }
  }, [addTodo, text, changeText]);


  /*
  //비제어 컴포넌트
  const sendData = useCallback((evt) => {
    if (todoRef.current.value.trim() !== '') {
      evt.preventDefault();
      addTodo(todoRef.current.value);
      todoRef.current.value = '';
      todoRef.current.focus();
    }
  }, [addTodo]);
  */



  /*
  //제어 컴포넌트 - state를 이벤트 핸들러 등을 이용해 변경
  const [text, setText] = useState('');
  //이 이벤트 핸들러에 의해 text값은 변경됨. 이 변경된 값을 addTodo로 전달
  const changeText = useCallback((evt) => {
    if (evt.target.value !== '') setText(evt.target.value)
  }, []);

  //hook을 사용한 함수가 내부에서 사용되면 그 함수에 대한 의존관계도 정의해야 한다.
  const sendData = useCallback((evt) => {
    // evt.preventDefault();
    // addTodo('Hello World');
    if (text.trim() !== '') {
      evt.preventDefault();
      addTodo(text);
      setText('');
      //document.querySelector('input[name="todo"]').focus();
      todoRef.current.focus();
    }
  }, [addTodo, text]);
  */


  return (
    <form>
      <div className="input-group">
        {/* <input type="text" name="todo" className="form-control" onChange={changeText} ref={todoRef} value={text} /> */}      {/* 제어컴포넌트 */}
        {/* <input type="text" name="todo" className="form-control" ref={todoRef} /> */}    {/* 비제어컴포넌트 */}
        <input type="text" name="todo" className="form-control" ref={todoRef} value={text} onChange={(evt) => changeText(evt.target.value)} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
