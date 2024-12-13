

import React, { useContext } from "react";
import ColorContext from './../contexts/ColorContext'
import { SelectContext } from './../contexts/SelectContext'

function ColorBox() {
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
    </div>
  );
}
export default ColorBox;


