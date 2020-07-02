import React from 'react'
import './styles.css'
import './responsivo.css'
import { Link } from 'react-router-dom'

import HeaderFull from '../../components/HeaderFull'

const Register = () => {
  return(
  <>  
    <HeaderFull />

    <div class="registro">
			<div class="container">
        <div className="container-registro grid-16">
          <h2>Cadastre-se</h2>
          <form className="form-register" action="link" method="POST">
            <div className="grid-7">
              <input className="input-registro" id="name" placeholder="Nome Completo" type="text" />
            </div>

            <div className="grid-7">
              <input className="input-registro" id="cpf" placeholder="CPF" type="text" />
            </div>

            <div className="grid-7">
              <input className="input-registro" id="email" placeholder="Email" type="mail" />
            </div>

            <div className="grid-7">
              <input className="input-registro" id="password" placeholder="Senha" type="password" />
            </div>

            <div className="btn-register-out grid-14">
              <button type="submit" name="Submit" class="btn-primary btn-register">Continuar</button>
            </div>
            
            <div className="btn-register-out grid-14">
              <Link to="/login" className="btn-secondary btn-register">Voltar</Link>
            </div>
            
          </form>        
        </div>
			</div>
		</div>
    
  </>  
  )
}

export default Register
