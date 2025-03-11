import React from 'react';
import '../Home/HomeS.sass';
import Skills from './Skills';
import Servico from './Servico';
import Historico from './Historico';

const Home = () => {
  return (
    <div className="home">
      <h1>UX DESIGN * MOTION * WEB DEVELOPER</h1>

      <div className="home-buttons">
        <button className="btn-primary">Currículo</button>
      </div>

      <div className="ola">
        <h1 className="oi">
          Os skils fazer com nome também da tecnologia para facilitar o recrutamento
          I'm a freelance Illustrator, creative director, and Graphic Designer
        </h1>
        <h2 className="oi">
          I have been working for 15 years creating and directing graphic
          projects for the most diverse areas; Design and direction of
          magazines, Visual identity, Branding, direction and creation of
          editorial illustrations, production, creation, direction and
          photographic post-production, financial management of projects and
          people, graphic production, etc. Check out:{" "}
          <a href="https://linktr.ee/fala_feu" target="_blank" rel="noopener noreferrer">
            https://linktr.ee/fala_feu
          </a>
        </h2>
      </div>


      <Skills />
      <Servico />
      <Historico />
    </div>
  );
};

export default Home;

