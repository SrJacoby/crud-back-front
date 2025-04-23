import React from 'react';
import { Link } from "react-router-dom";
import TrashCan from '../assets/trashcan.svg'

const Users = () => {

    const users = [
        {
            name: "Luiz",
            email: "luiz@email.com"
        }
    ]

    return (
        <div className='card'>
        <div>
          <p>Nome: <span>{users[0].name}</span></p>
          <p>E-mail: <span>{users[0].email}</span></p>

        </div>
        <button><img src={TrashCan}/></button>
      </div>
    );
}

export default Users;