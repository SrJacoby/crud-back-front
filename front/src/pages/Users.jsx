import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from "react-router-dom"
import TrashCan from '../assets/trashcan.svg'
import './Users.css'
import api from '../../services/api'

const Users = () => {

    const [users, setUsers] = useState([])

    async function getUsers() {
      const usersFromApi = await api.get('/person')
      setUsers(usersFromApi.data)
    }

    useEffect(() => {
      console.log("useEffect foi executado")
      getUsers()
    }, [])

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