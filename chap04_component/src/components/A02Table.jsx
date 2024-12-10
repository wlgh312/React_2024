

function A01Table(props) {
  const { todoList } = props;

  return (
    <div>
      <h3>A01Table</h3>

      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>TODO</th>
            <th>DONE</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item, i) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.text}</td>
              <td>{item.done ? '완료' : '미 완료'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default A01Table
