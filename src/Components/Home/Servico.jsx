import React from 'react'
import './ServicoS.sass'

const Servico = () => {
  return (
    <div className='ola'>      
      {/* Cards de serviços */}
      <div className="service-cards">
        <div className="card">
          <h2>UX/UI Design</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
        <div className="card">
          <h2>Dev. Front-End</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
        <div className="card">
          <h2>Motion Design</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
      </div>
    </div>    
  )
}

export default Servico