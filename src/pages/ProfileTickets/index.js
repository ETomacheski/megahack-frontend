import React, { useState, useEffect } from 'react'
import './styles.css'

import image from '../../img/lolla.jpg'
import axios from 'axios'
import './responsivo.css'
import logo from '../../img/logo.png'
import { Link, useParams } from 'react-router-dom'

import {FiArrowLeft, FiShoppingCart} from 'react-icons/fi'

const ProfileTickets = () =>{
  const route = useParams()
  const routeParams = route.params

  const [tickets, setTickets] = useState([])

  useEffect(() => {
  async function getTickets(){
    try {
      const response = await axios({
        method: 'get',
        url: 'https://mega-hack-api.herokuapp.com/user',
      })
     // console.log(response)
    } catch (error) {
      //console.log(error)
    }
  }  
  getTickets()  
    },[])

  return(
  <>  
    <header className="header-profile">
			<div className="container">
				<Link to="/" class="grid-4">
					<img src={logo} alt="Logo" />
				</Link>
				<nav className="grid-12 header-profile-menu">
					<ul>
						<li><Link to="/"><FiShoppingCart style={{marginRight: 5}}/>Loja de Tickets</Link></li>
						<li><Link to="/"><FiArrowLeft style={{marginRight: 5}}/>Sair</Link></li>
					</ul>
				</nav>
			</div>
		</header>
    <section className="tickets container">
    {/*{tickets.map(ticket => (
      <div className="tickets-container">
      <div className="call1">
        </div>
          <ul key={String(ticket.id)} className="tickets_lista">
            <li className="grid-4">
              <div className="tickets_icone">
                <img src={image} alt="Ingresso"/>
              </div>
            </li>
            <li className="grid-12">
              <h1>{ticket.name}t</h1>
              <h2>R${ticket.price}</h2>
              <p>DATA DO EVENTO: {ticket.date}</p>   
              </li>
          </ul> 
        <div className="call1">
        </div>
        </div>
    ))} */}

    <div className="tickets-container">

    <div className="list-item">
      <ul className="tickets_lista">
          <li className="grid-4">
            <div className="tickets_icone">
              <img src={image} alt="Ingresso"/>
              </div>
          </li>
          <li className="grid-12">
            <h1>nome evento</h1>
            <h2>R$ 999</h2>
            <p>DATA DO EVENTO: 12/12/2000</p>   
          </li>
        </ul> 
        <div className="call1">
      </div>
    </div>  
     

      <div className="list-item">
        <ul className="tickets_lista">
          <li className="grid-4">
            <div className="tickets_icone">
              <img src={image} alt="Ingresso"/>
              </div>
          </li>
          <li className="grid-12">
            <h1>nome evento</h1>
            <h2>R$ 999</h2>
            <p>DATA DO EVENTO: 12/12/2000</p>   
          </li>
        </ul> 
        <div className="call1">
        </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default ProfileTickets