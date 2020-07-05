import React, { useState } from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'

import axios from 'axios'

import HeaderFull from '../../components/HeaderFull'

const LoginEmpresa = () => {
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  async function handleLoginCompany(event){
    event.preventDefault()
    const data = {
      email,
      password
    }
    try {
      const response = await axios({
        method: 'post',
        url: 'https://mega-hack-api.herokuapp.com/companyLogin',
        data
      })
      history.push('/profile_ticketsempresa')
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
          <h2>Entre com a sua conta empresarial</h2>
          <form onSubmit={handleLoginCompany}>
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
            
            <Link to="/login" className="btn-secondary">Voltar</Link>
          </form>        
        </div>
			</div>
		</div>
    
  </>  
  )
}

export default LoginEmpresa
