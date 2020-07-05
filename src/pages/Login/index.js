import React, { useState } from 'react'
import './styles.css'
import { Link, useHistory} from 'react-router-dom'

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
      const response = await axios({
        method: 'post',
        url: 'https://mega-hack-api.herokuapp.com/userLogin',
        data
      })
      history.push('/profile_tickets')
    } catch (error) {
      alert("Email ou senha inválidos.")
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
