import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} exact path="/"/> 
      <Route component={Login} path="/login" />
    </BrowserRouter>
  )
}

export default Routes