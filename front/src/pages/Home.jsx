import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
        <li>
            <Link to="/users">Usuários</Link>
        </li>
        <form>
        <input placeholder='Nome' name='name' type='text'/>
        <input placeholder='E-mail' name='email' type='email' />
        <input placeholder='Senha' name='password' type='password' />
        <button type='button'>Cadastrar</button>
        </form>
    </div>
  );
}

export default Home;