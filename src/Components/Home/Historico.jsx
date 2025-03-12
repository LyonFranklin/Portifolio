import React from 'react';
import './HistoricoS.sass'

const Historico = () => {
  return (
    <div className="Historico">
      <h1>Historico </h1>

      <div className='Trabalho'>
        <h1>Trabalho </h1>
        <p>Sea1 Offshore</p>
      </div>

      <div className='Educacao'>
        <h1>Educaçao </h1>

        <div className='Senac'>
          <h1>IBM</h1>
          <p>Desenvolvimento Full Stack</p>
        </div>

        <div className='Senac'>
          <h1>Calarts</h1>
          <p>Desing Gráfico</p>
        </div>

        <div className='Senac'>
          <h1>Google</h1>
          <p>UX Design</p>
        </div>        

        <div className='UERJ'>
          <h1>UERJ</h1>
          <p>Ciencia da computação</p>
        </div>

        <div className='Senac'>
          <h1>Senac</h1>
          <p>Técnico de Informática</p>
        </div>

      </div>

    </div>
  );
};

export default Historico;