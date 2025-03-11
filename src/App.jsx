import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Projeto from './Components/Projetos/Projeto.jsx';
import Contato from './Components/Contato/Contato.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Projeto" element={<Projeto />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default App;