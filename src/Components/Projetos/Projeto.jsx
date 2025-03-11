import React from 'react'
import '../Projetos/ProjetoS.sass'
import './Bitweb/bitweb'
import './Ciclone/ciclone'
import './BrasMED/brasmed'
import './Ctech/ctech'

const Projetos = () => {
  return (
    <div className="services-page">
      <h1>Projetos</h1>

      {/* Cards de serviços */}
      <div className="service-cards">

      <div className="card">
          <h2>Ctech</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
          <button>CTECH
            <ctech />
            </button>
        </div>

      <div className="card">
          <h2>Siem Inventário</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
          <button>Siem
         
          </button>
        </div>

        <div className="card">
          <h2>Transportes Ciclone</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
        
        <div className="card">
          <h2>BitWEBjr</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>

        <div className="card">
          <h2>BrasMED</h2>
          <p>Colocar a ligua que o projeto está para facilitar o recrutador</p>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
        
      </div>     
    </div>
  );
};

export default Projetos;