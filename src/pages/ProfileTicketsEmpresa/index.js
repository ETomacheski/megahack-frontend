import React from 'react'
import './styles.css'

import image from '../../img/lolla.jpg'
//import search from './search.png'
import './responsivo.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const ProfileTicketsEmpresa = () =>{
  return(
  <>  
    <header class = "header-profile">
    	<div class = "grid-8">
      		<img src={logo} alt="Logo"/>
    	</div>
      <div className="grid-4 btn-register-out btn3">
	        <button class="btn-secondary">VENDER</button>
	    </div>  
      <div className="grid-4 btn3">
	        <Link to = "/" class="btn-secondary">SAIR</Link>
	    </div>  
	</header>
    <section class="tickets container">
      <div className="tickets-container">
          <ul class="tickets_lista">
            <li class="grid-4">
              <div class="tickets_icone">
                <img src={image} alt="Ingresso"/>
              </div>
            </li>
            <li class="grid-12">
              <h1>Ingresso Lollapalooza</h1>
              <h2>R$200,00</h2>
              <p>DATA DO EVENTO: 21/10/2020</p> 
              <p>QUANTIDADE DE INGRESSOS DISPONÍVEIS: 41</p>   
              </li>
          </ul> 
        <div class="call1">
        </div>
        </div>
        <div className="tickets-container">
          <ul class="tickets_lista">
            <li class="grid-4">
              <div class="tickets_icone">
                <img src={image} alt="Ingresso"/>
              </div>
            </li>
            <li class="grid-12">
              <h1>Ingresso Lollapalooza</h1>
              <h2>R$200,00</h2>
              <p>DATA DO EVENTO: 21/10/2020</p> 
              <p>QUANTIDADE DE INGRESSOS DISPONÍVEIS: 41</p>  
              </li>
          </ul> 
        <div class="call1">
        </div>
        </div>
        <div className="tickets-container">
          <ul class="tickets_lista">
            <li class="grid-4">
              <div class="tickets_icone">
                <img src={image} alt="Ingresso"/>
              </div>
            </li>
            <li class="grid-12">
              <h1>Ingresso Lollapalooza</h1>
              <h2>R$200,00</h2>
              <p>DATA DO EVENTO: 21/10/2020</p>  
              <p>QUANTIDADE DE INGRESSOS DISPONÍVEIS: 41</p> 
              </li>
          </ul> 
        <div class="call1">
        </div>
        </div>
    </section>
  </>
  )
}

export default ProfileTicketsEmpresa