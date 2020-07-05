import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import HeaderFull from '../../components/HeaderFull'

const Login = () => {
  return(
  <>  
    <HeaderFull />

    <div class="login">
			<div class="container">
        <div className="container-login grid-7">
          <h2>Entre com a sua conta</h2>
          <form action="link" method="POST">
            <input className="input-login" id="email" placeholder="Email ou Usuário" type="text" />
            <input className="input-login" id="senha" placeholder="Senha" type="password" />

            <input className="input-login" type="submit" name="Submit" class="btn-primary" value="Continuar" />
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
