import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'

const HeaderFull = () => {
  return(
    <header className="header-full">
        <img src= {logo} alt=""/>
    </header>
  )
}

export default HeaderFull