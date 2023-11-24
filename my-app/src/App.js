import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {  

  return (
    <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/empresa'>Empresa</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>
        </ul>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/empresa" element={<Empresa />} />

          <Route path="/contato" element={<Contato />} />

        </Routes> 
    </Router>

  );
}

export default App;
