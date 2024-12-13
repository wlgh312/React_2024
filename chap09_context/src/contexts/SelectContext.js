

// SelectContext.js
import React, { createContext, useState } from 'react'

// Context
const SelectContext = createContext({
  state: {
    contextName: '',
    color: '',
  },
  action: {
    setColor: () => { }
  }
})

// Context의 컨테이너 컴포넌트
function SelectContextProvider(props) {
  const contextName = 'Select Context';
  const [color, setColor] = useState('orange');

  const value = {
    state: { contextName, color },
    action: { setColor }
  }

  return (
    <SelectContext.Provider value={value}>
      {props.children}
    </SelectContext.Provider>
  )
}

export { SelectContextProvider, SelectContext }

