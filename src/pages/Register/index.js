import React, { useState } from 'react'
import './styles.css'
import './responsivo.css'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import HeaderFull from '../../components/HeaderFull'

const Register = () => {
  
  const history = useHistory()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')

  async function handleCreateAccount(event){
    event.preventDefault()
    const data = {
      name,
      email,
      password,
      cpf
    }
    try {
      const response = await api.post('users', {data})
      
      alert('Conta criada com sucesso.')
      history.push('/login')
    } catch (error) {
      console.log(error)
      console.log(data)
      alert("Houve um erro ao criar a conta, tente novamente.")
    }

  }



  return(
  <>  
    <HeaderFull />

    <div className="registro">
			<div className="container">
        <div className="container-registro grid-16">
          <h2>Cadastre-se</h2>
          <form className="form-register" onSubmit={handleCreateAccount}>
            <div className="grid-7">
              <input className="input-registro"
              placeholder="Digite seu Nome Completo"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}/>
            </div>

            <div className="grid-7">
              <input className="input-registro"
              placeholder="Digite seu CPF"
              type="text"
              value={cpf}
              onChange={event => setCpf(event.target.value)} />
            </div>

            <div className="grid-7">
              <input className="input-registro"
              placeholder="Digite seu Email"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)} />
            </div>

            <div className="grid-7">
              <input className="input-registro"
              placeholder="Digite sua Senha"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}/>
            </div>

            <div className="btn-register-out grid-14">
              <button type="submit" name="Submit" className="btn-primary btn-register">Continuar</button>
            </div>
             
            <div className="btn-register-out grid-14">
              <Link to="/register_empresa" className="btn-secondary btn-register">Cadastre sua empresa</Link>
            </div>
            <div className="btn-register-out grid-14">
              <Link to="/" className="btn-secondary btn-register">Voltar</Link>
            </div>
          </form>        
        </div>
			</div>
		</div>
    
  </>  
  )
}

export default Register
