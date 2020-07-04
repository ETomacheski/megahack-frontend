import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SelectedItem from './pages/SelectedItem'
import Profile from './pages/Profile'

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} exact path="/"/> 
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={SelectedItem} path="/item" />
      <Route component={Profile} path="/profile" />
    </BrowserRouter>
  )
}

export default Routes