import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () =>{
  return (
    <div>
        <div className='container'>
          <h1>Criar Conta</h1>
          <form>
          <input placeholder='Nome' name='name' type='text'/>
          <input placeholder='E-mail' name='email' type='email' />
          <input placeholder='Senha' name='password' type='password' />
          <button type='button'>Cadastrar</button>
          </form>
          <li>
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <span>Usuários</span>
            </Link>
          </li>
        </div>
    </div>
  );
}

export default Home;