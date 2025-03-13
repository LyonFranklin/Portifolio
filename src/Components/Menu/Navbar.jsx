import React from 'react';
import '../Menu/navbarS.sass'
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png';
import Bandeira from '../../img/Bandeira.png';

export const Navbar = () => {
  return (


    <nav className='Menu container'>
      <div className='Logo'>
      <img src={Logo} alt="Logo" width={100} />
      </div>
      
      <nav className="menu-links">

        <a href="#home"><Link to="/Home">Home</Link></a>
        <a href="#about"><Link to="/Projeto">Projetos</Link></a>
        <a href="#contact"><Link to="/Contato">Contato</Link></a>
      </nav>

      <button className="btn-primary">
        <img src={Bandeira} alt="Bandeira" width={70} />        
      </button>
    </nav>
  );
};
