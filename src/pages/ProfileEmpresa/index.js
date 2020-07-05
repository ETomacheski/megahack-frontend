import React from 'react'
import './styles.css'

//import image from '../../img/lolla.jpg'
//import search from './search.png'
import './responsivo.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const ProfileEmpresa = () =>{
  return(
  <>  
    <header class = "header-profile">
    	<div class = "grid-8">
      		<img src={logo} alt="Logo"/>
    	</div>
      <div className="grid-4 btn-register-out btn3">
	        <Link to = "/profile_ticketsempresa" class="btn-secondary">MINHAS VENDAS</Link>
	    </div>  
      <div className="grid-4 btn3">
	        <Link to = "/" class="btn-secondary">SAIR</Link>
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
            <input className="input-vender" type="submit" name="Submit" class="btn-primary" value="VENDER"/>
          </form>        
        </div>
			</div>
		</div>

  </>
  )
}

export default ProfileEmpresa