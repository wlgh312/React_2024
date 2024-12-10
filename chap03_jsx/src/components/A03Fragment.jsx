import { Fragment } from 'react'

function A03Fragment() {
  return (
    //Fragment는 컴파일(build)될때 삭제된다.
    //따라서 속성 할당은 안된다.
    <Fragment>
      <h3>A03Fragment</h3>
      {/* Fragment대신 빈 태그 사용도 가능 */}
      <>
        This is Content
      </>
    </Fragment>
  )
}

export default A03Fragment