import React from 'react'
import './styles.css'
import logo from '../../img/logo.png'
import imghome from './imghome.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import './responsivo.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return(
	  <>
	<header class = "header">
    	<div>
      		<img src={logo} alt="Logo"/>
    	</div>	
	</header>
		 <section class="box container">
      <div className="box-container">
          <ul class="box_lista">
            <li class="grid-8">
              <div class="box_icone">
                <img src={imghome} alt="Bikcraft Passeio" />
              </div>
            </li>
            <li class="grid-8">
              <h1>Mercado Tickets</h1>
              <p>Com o Mercado Tickets a distância entre você e seu evento preferido são de poucos cliques!</p>
			  <p>Aqui você encontra de tudo: cinema, teatro, jogo de futebol, tem para todos os gostos!</p>
			  <p>Cadastre-se ou entre! para não perder nada!</p>
            </li>
			<div class = "grid-16">
			<div className="btn-selected-item-out">
                <Link to = "/register" type="submit" name="Submit" class="btn-secondary btn-selected-item">CADASTRAR-SE</Link>
              </div>
			  <div className="btn-selected-item-out">
                <Link to = "/login" type="submit" name="Submit" class="btn-secondary btn-selected-item">ENTRAR</Link>
              </div>
			</div>
		
          </ul> 
        <div class="call">
         
        </div>
      </div>  
    </section>

  		<section class="tokens">
			<div class = "container">
				<ul class="iconslist">
					<li class="grid-1-4">
						<div class="icon">
							<img src={icon1} alt="Fácil utilização"/>
						</div>
						<h3>FÁCIL UTILIZAÇÃO</h3>
					</li>
					<li class="grid-1-4">
						<div class="icon">
						<img src={icon2} alt="Compre rapidamente"/>
						</div>
						<h3>DINHEIRO SEGURO</h3>
					</li>
	
					<li class="grid-1-4">
						<div class="icon">
						<img src={icon3} alt="Compra rápida"/>
						</div>
						<h3>COMPRA RÁPIDA</h3>
					</li>
					<li class="grid-1-4">
						<div class="icon">
						<img src={icon4} alt="Não perca nada"/>
						</div>
						<h3>NÃO PERCA NADA</h3>
					</li>
				</ul>
			</div>
		</section>
	

	</>
  )
}

export default Home