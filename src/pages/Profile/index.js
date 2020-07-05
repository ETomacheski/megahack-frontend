import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiShoppingBag, FiArrowLeft} from 'react-icons/fi'
import './styles.css'

import image from '../../img/lolla.jpg'
import './responsivo.css'
import logo from '../../img/logo.png'

import axios from 'axios'


const Profile = () =>{

  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])

  const [selectedUf, setSelectedUf] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  const history = useHistory()

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(res => {
      const ufInitials = res.data.map(uf => uf.sigla)
      setUfs(ufInitials)
    })
  }, [])

  useEffect(() => {
    if(selectedUf === '0'){
      return
    }

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
          .then(res => {
            const cityNames = res.data.map(city => city.nome )
            setCities(cityNames)
    })

  }, [selectedUf])

  function handleSelectUF(event){
    setSelectedUf(event.target.value)
  }

  function handleSelectCity(event){
    setSelectedCity(event.target.value)
  }


  return(
  <>  
    <header className="header-profile">
			<div className="container">
				<Link to="/" class="grid-4">
					<img src={logo} alt="Logo" />
				</Link>
				<nav className="grid-12 header-profile-menu">
					<ul>
						<li><Link to="/"><FiShoppingBag style={{marginRight: 5}}/>Meus Tickets</Link></li>
						<li><Link to="/"><FiArrowLeft style={{marginRight: 5}}/>Sair</Link></li>
					</ul>
				</nav>
			</div>
		</header>

  <section className="tickets container">
    <div className="form-profile">
      <form action="" method="post" className="form-profile">
      <ul className="pesquisa_lista">
          <div className="form-out">
            <li className="grid-8">
                  <div className="pesquisa_icone">
                    <input type="search" placeholder = "Pesquise..."/>
                  </div>
                </li>
                <li class="grid-4">
                  <select onChange={handleSelectUF} className="select-form">
                    <option value="0">Estado</option>
                    {ufs.map(uf => (
                        <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                  </li>

                <li class="grid-4">
                <select onChange={handleSelectCity} className="select-form">
                    <option value="0">Cidade</option>
                    {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                    ))}
                  </select>  
                </li>
          </div>
     </ul> 
    
          <div class = "btn2 grid-16">
          <div className="btn-filter-out">
            <button class = "btn-primary btn-filter-in">
              Filtrar
            </button>
          </div>
        
          </div>
        </form>
    
   
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
              <p>Data do Evento: 21/10/2020</p>
              <p>Ingressos Disponíveis: 10</p>  
              <div className="btn-register-out grid-10">
	          	<button to = "/item" type="submit" name="Submit" class="btn-primary btn">Mais Informações</button>
	            </div>          
              </li>
          </ul> 
        <div class="call1">
        </div>

        <ul class="tickets_lista">
            <li class="grid-4">
              <div class="tickets_icone">
                <img src={image} alt="Ingresso"/>
              </div>
            </li>
            <li class="grid-12">
              <h1>Ingresso Lollapalooza</h1>
              <h2>R$200,00</h2>
              <p>Data do Evento: 21/10/2020</p>
              <p>Ingressos Disponíveis: 10</p>  
              <div className="btn-register-out grid-10">
	          	<button to = "/item" type="submit" name="Submit" class="btn-primary btn">Mais Informações</button>
	            </div>          
              </li>
          </ul> 
        <div class="call1">
        </div>



       


        </div>

        
    </div>
    </section>
  </>
  )
}

export default Profile