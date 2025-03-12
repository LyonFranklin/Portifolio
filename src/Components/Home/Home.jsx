import React from 'react';
import '../Home/HomeS.sass';
import Hello from './Hello';
import Skills from './Skills';
import Servico from './Servico';
import Historico from './Historico';

const Home = () => {
  return (
    <div className="home">
      <h1>* VISUAL DESIGN * UX/UI DESIGN * MOTION DESIGN * FRONT-END DEV *  PRODUC DESIGN * </h1>

      <div className="home-buttons">
        <button className="btn-primary">Currículo</button>
      </div>

      <Servico />   
      <Hello />    
      <Historico />
      <Skills />
    </div>
  );
};

export default Home;

