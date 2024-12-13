

import React, { useContext } from 'react'
import ColorContext from './../contexts/ColorContext'
import { SelectContext } from './../contexts/SelectContext'

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  const { contextName, color, setColor } = useContext(ColorContext);
  const { state, action } = useContext(SelectContext);

  return (
    <div>
      <div className="mb-3">
        <h5>{contextName} / {state.contextName}</h5>

        Color: {color} / {state.color}<br />
        <button onClick={() => setColor('blue')}>Color</button>
        <button onClick={() => action.setColor('Green')}>Select</button>
      </div>

      <div style={{ display: 'flex' }}>
        {colors.map(color => <div key={color} style={{ ...style, background: color }}
          onClick={() => action.setColor(color)}>{color}</div>)}
      </div>
    </div>
  )
}
export default SelectColor


