import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import LoginEmpresa from './pages/LoginEmpresa'
import Register from './pages/Register'
import RegisterEmpresa from './pages/RegisterEmpresa'
import SelectedItem from './pages/SelectedItem'
import Profile from './pages/Profile'
import ProfileTickets from './pages/ProfileTickets'


const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} exact path="/"/> 
      <Route component={Login} path="/login" />
      <Route component={LoginEmpresa} path="/login_empresa"/>
      <Route component={Register} path="/register" />
      <Route component={RegisterEmpresa} path="/register_empresa"/>
      <Route component={SelectedItem} path="/item"/>
      <Route component={Profile} path="/profile" />
      <Route component={ProfileTickets} path="/profile_tickets" />
    </BrowserRouter>
  )
}

export default Routes