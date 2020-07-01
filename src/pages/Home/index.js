import React from 'react'
import './styles.css'
import logo from '../../img/logo.png'


const Home = () => {
  return(
    <header class="header">
			<div class="container">
				<nav class="grid-12">
        <img src={logo} alt="Mercado Tickets"/>
				</nav>
			</div>
		</header>
  )
}

export default Home