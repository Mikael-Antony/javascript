import HellorWorld from './components/helloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {

  const nome = 'mikael'
  
  return (
    <div className="App">
      <SayMyName nome={nome} />
      <Pessoa
        foto='https://yt3.ggpht.com/2VojoWLHU5NqXtK2CImSSPgd1G4mckeB04BXKNqttRCuqRnq8_7EF-s6cw1Hpu17FB3KgnivYA=s88-c-k-c0x00ffffff-no-rj'
        nome={nome}
        idade='18'
        profissao='estudante'
      />
    </div>
  );
}

export default App;
