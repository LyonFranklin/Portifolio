import React from 'react'
import './ServicoS.sass'

const Servico = () => {
  return (
    <div className='ola'>      
      {/* Cards de serviços */}
      <div className="service-cards">
        <div className="card">
          <h2>UX/UI Design</h2>
          <p>De wireframes a jornadas do usuário, 
            utilizo diversas técnicas de UX para oferecer experiências que atendam tanto às necessidades 
            do negócio quanto às expectativas do usuário. Realizo  pesquisas interativas, entrevistas com usuários e análise de 
            dados para identificar pontos de melhoria. Além disso, construo protótipos funcionais que permitem feedback rápido e eficiente durante o desenvolvimento.</p>
        </div>
        <div className="card">
          <h2>Dev. Front-End</h2>
          <p>Desenvolvo aplicações e interfaces com foco na funcionalidade e na experiência do usuário, utilizando linguagens modernas como HTML, CSS, JavaScript, ReactJS e NodeJS. Meu trabalho é transformar ideias em soluções práticas e escaláveis, 
            garantindo alta performance e acessibilidade.</p>
        </div>
        <div className="card">
          <h2>Motion Design</h2>
          <p>Crio animações envolventes e visuais impactantes para dar vida às ideias. Utilizo ferramentas como After Effects e Premiere para desenvolver vídeos, efeitos visuais e protótipos animados que aprimoram a comunicação e engajam o público.
             e diferenciais.</p>
        </div>
      </div>

      <h1>Let’s work together!  to say hi, feel free to send me mail.</h1>
    </div>    
  )
}

export default Servico