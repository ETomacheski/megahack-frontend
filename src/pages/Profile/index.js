import React from 'react'
import './styles.css'

import image from '../../img/lolla.jpg'
//import search from './search.png'
import './responsivo.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Profile = () =>{
  return(
  <>  
    <header class = "header-profile">
    	<div class = "grid-8">
      		<img src={logo} alt="Logo"/>
    	</div>
      <div className="grid-4 btn-register-out btn3">
	        <button class="btn-secondary">MEUS TICKETS</button>
	    </div>  
      <div className="grid-4 btn3">
	        <Link to = "/" class="btn-secondary">SAIR</Link>
	    </div>  
	</header>
  <section class="pesquisa container">
  <div className="pesquisa-container">
  <form action=" " method="post">
  <ul class="pesquisa_lista">
            <li class="grid-8">
              <div class="pesquisa_icone">
                <input type="search" placeholder = "Pesquise..."/>
              </div>
            </li>
            <li class="grid-4">
            <select className="select-form">
            <option value="RS">RS</option>
                <option value="RJ">RJ</option>
                <option value="SC">SC</option>
                <option value="PR">RS</option>
                <option value="SP">SP</option>
              </select>
              </li>
              <li class="grid-4">
              <select className="select-form">
                <option value="RS">city</option>
                <option value="RJ">city</option>
                <option value="SC">city</option>
                <option value="PR">city</option>
                <option value="SP">city</option>
              </select>  
              </li>
          </ul> 
  </form>
        <div class = "btn2 grid-16">
        <button class = "btn-primary">
          FILTRAR
        </button>
        </div>
        <div class="call1">
        </div>
        </div>
    </section>
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
              <p>QUANTIDADE DE INGRESSOS DISPONÍVEIS: 10</p>  
              <div className="btn-register-out grid-10">
	          	<button to = "/item" type="submit" name="Submit" class="btn-primary btn">MAIS INFORMAÇÕES</button>
	            </div>          
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
              <p>QUANTIDADE DE INGRESSOS DISPONÍVEIS: 10</p>  
              <div className="btn-register-out grid-10">
	          	<button to = "/item" class="btn-primary btn">MAIS INFORMAÇÕES</button>
	            </div>          
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
              <p>QUANTIDADE DE INGRESSOS DISPONÍVEIS: 10</p>  
              <div className="btn-register-out grid-10">
	          	<button type="submit" name="Submit" class="btn-primary btn">MAIS INFORMAÇÕES</button>
	            </div>          
              </li>
          </ul> 
        <div class="call1">
        </div>
        </div>
    </section>
  </>
  )
}

export default Profile