import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Autor from './pages/Autor';
import PublicoAlvo from './pages/PublicoAlvo';
import Colega from './pages/Colega';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="menu">
        <Link to="/">Início</Link>
        <Link to="/autor">Autor</Link>
        <Link to="/publico-alvo">Público-Alvo</Link>
        <Link to="/colega">Colega</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autor" element={<Autor />} />
        <Route path="/publico-alvo" element={<PublicoAlvo />} />
        <Route path="/colega" element={<Colega />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
