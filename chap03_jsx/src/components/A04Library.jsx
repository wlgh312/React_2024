//npm i jquery
//npmjs.com에서 각 라이브러리 사용법을 숙지해야 한다.
import $ from 'jquery'

$(document).ready(function () {
  $('#btn').click(function () {
    const qty = $('[name=qty]').val();
    const cost = $('[name=cost]').val();

    $('#jquery').html('<b>' + (qty * cost) + '</b>');
  })
})

function A04Library() {
  const clickHandler = () => {
    const qty = $('[name=qty]').val();
    const cost = $('[name=cost]').val();

    $('#react').html('<br>' + (qty * cost) + '</b>');
  }
  return (
    <div>
      <h3>A04 Library</h3>
      QTY: <input type="text" className="form-control" name="qty" />
      COST: <input type="text" className="form-control" name="cost" />

      <div className="mb-2">
        <button id="btn">JQeury</button>
        <button onClick={clickHandler}>React</button>
      </div>

      <div className="mb-2">
        <div>JQeury: <span id="jquery"></span></div>
        <div>React: <span id="react"></span></div>
      </div>

    </div>
  )
}

export default A04Library