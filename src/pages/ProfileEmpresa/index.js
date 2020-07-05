import React from 'react'
import './styles.css'

import './responsivo.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

import {FiArrowLeft, FiShoppingCart} from 'react-icons/fi'

const ProfileEmpresa = () =>{
  return(
  <>  
    <header className="header-profile">
			<div className="container">
				<Link to="/" class="grid-4">
					<img src={logo} alt="Logo" />
				</Link>
				<nav className="grid-12 header-profile-menu">
					<ul>
						<li><Link to="/"><FiShoppingCart style={{marginRight: 5}}/>Meus Itens</Link></li>
						<li><Link to="/"><FiArrowLeft style={{marginRight: 5}}/>Sair</Link></li>
					</ul>
				</nav>
			</div>
		</header>
  <div class="vender">
			<div class="container">
        <div className="container-vender grid-16">
          <h2>Venda seu ingresso</h2>
          <form action="link" method="POST">
            <input className="input-vender" id="email" placeholder="Nome do evento" type="text" />
            <input className="input-vender" id="senha" placeholder="Nome do ingresso" type="text" />
            <input className="input-vender" id="senha" placeholder="Quantidade" type="number" />
            <input className="input-vender" id="senha" placeholder="Preço" type="number" />
            <div className="btn-vender-out">
              <input className="input-vender" type="submit"
              name="Submit" class="btn-primary btn-vender"
              value="Vender"/>
            </div>
           
          </form>        
        </div>
			</div>
		</div>

  </>
  )
}

export default ProfileEmpresa