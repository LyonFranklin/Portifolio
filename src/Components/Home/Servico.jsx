import React from 'react'
import './ServicoS.sass'

const Servico = () => {
  return (
    <div className='ola'>      
      {/* Cards de serviços */}
      <div className="service-cards">
        <div className="card">
          <h2>Serviço 1</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
        <div className="card">
          <h2>Serviço 2</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
        <div className="card">
          <h2>Serviço 3</h2>
          <p>Descrição genérica sobre o serviço oferecido, destacando benefícios e diferenciais.</p>
        </div>
      </div>
    </div>    
  )
}

export default Servico