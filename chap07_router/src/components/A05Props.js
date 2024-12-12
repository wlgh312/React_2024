import React from 'react'

function PropsComp(props) {
  const { name, age, arr, user, onAdd } = props;

  return (
    <div>
      <h3>Props</h3>

      <div>
        Name: {name}<br />
        Age: {age + 100}<br />
        Array: {arr?.[0]} / {arr?.[1]} / {arr?.[2]}<br />
        Object: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}<br />
      </div>
    </div>
  )
}
export default PropsComp;
