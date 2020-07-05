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
import ProfileTicketsEmpresa from './pages/ProfileTicketsEmpresa'
import ProfileEmpresa from './pages/ProfileEmpresa'


const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} exact path="/"/> 
      <Route component={Login} path="/login" />
      <Route component={LoginEmpresa} path="/login_empresa"/>
      <Route component={Register} path="/register" />
      <Route component={RegisterEmpresa} path="/register_empresa"/>
      <Route path="/item/:id" component={SelectedItem}/>
      <Route component={Profile} path="/profile" />
      <Route component={ProfileTickets} path="/profile_tickets" />
      <Route component={ProfileEmpresa} path="/profile_empresa" />
      <Route component={ProfileTicketsEmpresa} path="/profile_ticketsempresa" />
    </BrowserRouter>
  )
}

export default Routes