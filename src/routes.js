import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SelectedItem from './pages/SelectedItem'

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} exact path="/"/> 
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={SelectedItem} path="/item" />
    </BrowserRouter>
  )
}

export default Routes