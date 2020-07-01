import React from 'react'
import './styles.css'

import logo from '../../img/logo.png'

const Login = () => {
  return(
  <>  
    <header className="header">
      <img src={logo} alt="Logo"/>
    </header>

    <div class="login">
			<div class="container">
        <div className="grid-7">
          <h2>Olá! Digite o seu e-mail ou usuário</h2>
          <form action="link" method="POST">
            <input id="assunto" placeholder="Digite o email" type="text" />
            <input id="email" placeholder="Digite a senha" type="password" />

            <input type="submit" name="Submit" class="btn-primary" value="Continuar" />
            <input type="submit" name="Submit" class="btn-secondary" value="Criar conta" />
          </form>        
        </div>
			</div>
		</div>
    
  </>  
  )
}

export default Login
