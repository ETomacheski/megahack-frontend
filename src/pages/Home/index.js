import React from 'react'
import './styles.css'
import logo from '../../img/logo.png'
import imghome from './imghome.png'
import teste from './teste.png'
import './responsivo.css'


const Home = () => {
  return(
	  <>
	<header class = "header">
    	<div>
      		<img src={logo} alt="Logo"/>
    	</div>	
	</header>
<section class="box">
<div class="container">
  <div className="container-ml grid-16">
	<h2>Mercado tickets</h2>
	<div className="text">
	  <div className="grid-7">
	 	<p>
	 	 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</p>
		<p>
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
		</p>
	  </div>
	  <div className="grid-7">
		<img src= { imghome } alt="imghome"/>
	  </div>
	  <div className="btn-register-out grid-14">
		<button type="submit" name="Submit" class="btn-primary btn-register">CADASTRE-SE</button>
	  </div>
		</div>        
  		</div>
	  </div>
  </section>
  		<section class="tokens">
			<div class = "container">
				<ul class="iconslist">
					<li class="grid-1-4">
						<div class="icon">
							<img src={teste} alt="teste"/>
						</div>
						<h3>ENTREGA RAPIDA</h3>
					</li>
					<li class="grid-1-4">
						<div class="icon">
						<img src={teste} alt="teste"/>
						</div>
						<h3>ENTREGA RAPIDA</h3>
					</li>
	
					<li class="grid-1-4">
						<div class="icon">
						<img src={teste} alt="teste"/>
						</div>
						<h3>ENTREGA RAPIDA</h3>
					</li>
					<li class="grid-1-4">
						<div class="icon">
						<img src={teste} alt="teste"/>
						</div>
						<h3>ENTREGA RAPIDA</h3>
					</li>
				</ul>
			</div>
		</section>
	

	</>
  )
}

export default Home