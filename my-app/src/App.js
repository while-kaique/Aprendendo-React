import { useState } from 'react';
import './App.css';
import BemVindos from './components/BemVindos'
import Saudacao from './components/Saudacao';

function App() {  

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <BemVindos setNome={setNome}/>
      <Saudacao nome={nome} />
      <h1>eae</h1>
    </div>
  );
}

export default App;
