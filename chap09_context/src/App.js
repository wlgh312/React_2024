import { useState } from 'react';
import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColor'
import TodoTemplate from './components/TodoTemplate'

//Context
//Context는 값을 제공하는 Provider와 값을 수신하는 Consumer가 존재
//Provider는 컨테이너 컴포넌트의 역할 및 데이터 제공
import ColorContext from './contexts/ColorContext'
import { SelectContextProvider } from './contexts/SelectContext';
import { TodoContextProvider } from './contexts/TodoContext';

function App() {
  const contextName = 'Color context';
  const [color, setColor] = useState('red');
  const value = { contextName, color, setColor };

  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      <ColorContext.Provider value={value}>
        <SelectContextProvider>
          <ColorBox></ColorBox>
          <SelectColor></SelectColor>
        </SelectContextProvider>
      </ColorContext.Provider>

      <hr />

      <TodoContextProvider>
        <TodoTemplate></TodoTemplate>
      </TodoContextProvider>
    </div>
  );
}

export default App;
