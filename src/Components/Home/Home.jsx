import React from 'react';
import '../Home/HomeS.sass';
import Hello from './Hello';
import Skills from './Skills';
import Servico from './Servico';
import Historico from './Historico';

const Home = () => {
  return (
      <div className="home container">
        {/* Vídeo de fundo */}
        <video className="home-bg-video" autoPlay loop muted>
          <source src="video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
  
        {/* Conteúdo centralizado */}
        <div className="home-content">
          <h1 className="home-title">
            * VISUAL DESIGN * UX/UI DESIGN * MOTION DESIGN * FRONT-END DEV * PRODUC DESIGN *
          </h1>
  
          <div className="home-buttons">
            <button className="btn-primary">Currículo</button>
          </div>
        </div>

      <Hello />     
      <Historico />
      <Skills />
      <Servico />   
    </div>
  );
};

export default Home;

