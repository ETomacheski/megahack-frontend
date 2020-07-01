import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import HeaderFull from '../../components/HeaderFull'

const Register = () => {
  return(
  <>  
    <HeaderFull />

    <div class="registro">
			<div class="container">
        <div className="grid-10">
          <h2>Cadastre-se</h2>
          <form action="link" method="POST">
            <input className="input-registro" id="name" placeholder="Nome Completo" type="text" />
            <input className="input-registro" id="email" placeholder="Email" type="mail" />
            <input className="input-registro" id="cpf" placeholder="CPF" type="text" />
            <input className="input-registro" id="password" placeholder="Senha" type="password" />

            <button type="submit" name="Submit" class="btn-primary">Continuar</button>
            <Link to="/login" className="btn-secondary">Voltar</Link>
          </form>        
        </div>
			</div>
		</div>
    
  </>  
  )
}

export default Register
