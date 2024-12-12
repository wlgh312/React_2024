import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <hr />
      <h5>Footer...</h5>
    </>
  )
}

export default Layout