import React from 'react'
import { Link } from "react-router-dom"
import TrashCan from '../assets/trashcan.svg'
import './Users.css'

const Users = () => {

    const users = [
        {
          id: "123",
          name: "Luiz",
          email: "luiz@email.com"
        },
        {
          id: "245",
          name: "Martin",
          email: "martin@email.com"
        },
        {
          id: "156",
          name: "Steph",
          email: "steph@email.com"
        }
    ]

    return (
      <div className='container-users'>
        <h1>Usuários</h1>
        {users.map( user => (
          <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
          </div>
          <button><img src={TrashCan}/></button>
          </div>
        ))}

        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <button id='back-button'>Voltar</button>
        </Link>
      </div>
    );
}

export default Users;