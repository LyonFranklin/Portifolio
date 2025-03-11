import React from 'react';
import '../Menu/navbarS.sass'
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png';
import Bandeira from '../../img/Bandeira.png';

export const Navbar = () => {
  return (
    <nav className='Menu'>
      <img src={Logo} alt="Logo" width={100} />
        <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Projeto">Serviços</Link></li>
        <li><Link to="/Contato">Contato</Link></li>
      </ul> 

      <button className="btn-primary">
        <img src={Bandeira} alt="Bandeira" width={70} />        
      </button>
    </nav>
  );
};
