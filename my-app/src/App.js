import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'
import Evento from './components/Evento';
import Form from './components/Form';

function App() {  
  const name = 'kaique'
  return (
    <div className="App">
      <h1>Eae cara</h1>
      <p>Seu nome é {name}, né?</p>
      <Evento />  
      <Form />
      <HelloWorld />
      <Pessoa idade={1} nome="João"/>
      <Pessoa />
      <Pessoa idade='oi' nome="João"/>
    </div>
  );
}

export default App;
