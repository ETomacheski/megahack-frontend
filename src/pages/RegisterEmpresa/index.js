import React, {useState, useEffect} from 'react'
import './styles.css'
import './responsivo.css'
import { Link, useHistory } from 'react-router-dom'

import HeaderFull from '../../components/HeaderFull'

import axios from 'axios'

const RegisterEmpresa = () => {

  const history = useHistory()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [cnpj, setCnpj] = useState('')

  async function handleCreateCompanyAccount(event){
    event.preventDefault()
    const data = {
      name,
      email,
      password,
      cnpj,
    }
    try {
      const response = await axios({
        method: 'post',
        url: 'https://mega-hack-api.herokuapp.com/user',
        data
      })
      alert('Conta criada com sucesso.')
      history.push('/login_empresa')
    } catch (error) {
      console.log(error)
      console.log(data)
      alert("Houve um erro ao criar a conta, tente novamente.")
    }

  }


  return(
  <>  
    <HeaderFull />

    <div class="registro">
			<div class="container">
        <div className="container-registro grid-16">
          <h2>Cadastre-se</h2>
          <form className="form-register-empresa" onSubmit={handleCreateCompanyAccount}>
          <div className="grid-7">
              <input className="input-registro"
              placeholder="Digite seu Nome Completo"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}/>
            </div>

            <div className="grid-7">
              <input className="input-registro"
              placeholder="Digite seu CNPJ"
              type="text"
              value={cnpj}
              onChange={event => setCnpj(event.target.value)} />
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
              <button type="submit" name="Submit" class="btn-primary btn-register">Continuar</button>
            </div>
            <div className="btn-register-out grid-14">
              <Link to="/register" className="btn-secondary btn-register">Voltar</Link>
            </div>
          </form>        
        </div>
			</div>
		</div>
    
  </>  
  )
}

export default RegisterEmpresa
