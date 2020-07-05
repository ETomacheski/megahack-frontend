import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiShoppingBag, FiArrowLeft} from 'react-icons/fi'
import './styles.css'

import image from '../../img/lolla.jpg'
import './responsivo.css'
import logo from '../../img/logo.png'

import axios from 'axios'


const Profile = () =>{

  const history = useHistory()

  const [tickets, setTickets] = useState([])

  useEffect(() => {
    async function getTickets(){
      try {
        const response = await axios({
          method: 'get',
          url: 'https://mega-hack-api.herokuapp.com/ticket',
        })
        setTickets(response.data)
        console.log (response.data)
      } catch (error) {
      }
    }  
  getTickets()  
    },[])
  function handleGoToItem (id)
  {
    //history.push (`/item/${id}`)
    history.push('/item/', {id})
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

      <div className="tickets-container">

        {tickets.map(ticket => (
            <div className="list-item">
              <ul className="tickets_lista">
                <li className="grid-4">
                  <div className="tickets_icone">
                    <img src={image} alt="Ingresso"/>
                    </div>
                </li>
                <li className="grid-12">
                  <h1>{ticket.name}</h1>
                  <h2>R$ {ticket.price}</h2>
                  <p>{ticket.description}</p> 
                  <div className="btn-register-out grid-10">
                    <button onClick = {()=>handleGoToItem(ticket.id)} type="submit" name="Submit" class="btn-primary btn">Mais Informações</button>
                  </div>            
                </li>
              </ul> 
              <div className="call1">
            </div>
          </div>  
          ))}
        
        </div>   
    </div>
    </section>
  </>
  )
}

export default Profile