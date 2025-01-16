import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export default App
