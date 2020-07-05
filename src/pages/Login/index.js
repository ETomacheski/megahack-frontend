import React, { useState } from 'react'
import './styles.css'
import { Link, useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie'

import axios from 'axios'

import HeaderFull from '../../components/HeaderFull'

const Login = () => {
  const history = useHistory()
  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  async function handleLogin(event){
    event.preventDefault()
    const data = {
      email,
      password
    }
    try {
      axios.defaults.withCredentials = true
      const response = await axios({
        method: 'post',
        url: 'https://mega-hack-api.herokuapp.com/userLogin',
        data
      })
      const cookies = new Cookies();
      cookies.set('auth', response.data.token, { path: '/' });
      cookies.set('userEmail', response.data.email, { path: '/' });

      history.push('/profile_tickets')
    } catch (error) {
      alert("Falha no login.")
    }
  }
  return(
  <>  
    <HeaderFull />

    <div class="login">
			<div class="container">
        <div className="container-login grid-7">
          <h2>Entre com a sua conta</h2>
          <form onSubmit={handleLogin}>
            <input className="input-login"
            placeholder="Digite seu Email"
            type="text"
            onChange={event => setEmail(event.target.value)}
            value={email}/>

            <input className="input-login"
            placeholder="Digite sua Senha"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)} />

            <input className="input-login"
            type="submit" name="Submit" 
            class="btn-primary" value="Continuar" />
            
            <Link to="/login_empresa" className="btn-secondary">Entrar como empresa</Link>
            <Link to="/" className="btn-secondary">Voltar</Link>
          </form>        
        </div>
			</div>
		</div>
    
  </>  
  )
}

export default Login
