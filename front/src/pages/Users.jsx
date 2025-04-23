import React from 'react';
import { Link } from "react-router-dom";
import TrashCan from '../assets/trashcan.svg'

const Users = () => {
    return (
        <div className='card'>
        <div>
          <p>Nome: <span></span></p>
          <p>Idade: <span></span></p>
          <p>E-mail: <span></span></p>
        </div>
        <button><img src={TrashCan}/></button>
      </div>
    );
}

export default Users;