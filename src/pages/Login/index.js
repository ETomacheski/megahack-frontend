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
      const token = response.headers.auth
      console.log(response)
     // localStorage.setItem('auth', token)

     // history.push('/profile_tickets')
    } catch (error) {
      alert("Email ou senha inválidos.")
    }

   {/* function callBeforeLogin(){
      axios.interceptors.request.use(
        config => {
          const { origin } = new URL(config.url);
          const allowedOrigins = [apiUrl];
          const token = localStorage.getItem('token');
          if (allowedOrigins.includes(origin)) {
            config.headers.authorization = `Bearer ${token}`;
          }
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );

      const getJwt = async () => {
        const { data } = await axios.get(`https://mega-hack-api.herokuapp.com/jwt`);
        localStorage.setItem('token', data.token);
        setJwt(data.token);
      };
    } */}
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
