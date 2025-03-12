import React from 'react'
import './HomeS.sass'

const hello = () => {
  return (
    <div>        
    <div className="ola">
    <h1 className="prazer">Prazer, Sou Lyon : )</h1>
    <h2 className="boasp">Iniciei prestando suporte técnico, 
        atendimento a usuários e programação para a área marítima. 
        Alem de projetos de design para lojas e universidades
    </h2>

    <h2 className="boasp">Em 2023, me formei em UX Design pelo Google e, 
        desde então, venho aprimorando meus projetos, 
        unindo minhas habilidades para projetos e soluções intuitivas e eficazes.
    </h2> 

    <button>Curriculo</button>    
  </div>

  <div className='foto'>
    <h1>Foto</h1>    
    </div>

    <div className='redes'>
    <h1 className="redeslink">Redes Sociais</h1>
    </div> 
    </div>
  )
}

export default hello