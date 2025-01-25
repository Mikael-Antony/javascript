//import HellorWorld from './components/helloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/frase';
import List from './components/list';
import './App.css';

function App() {

  const nome = 'mikael'
  
  return (
    <div className="App">
      <h1>testando css</h1>
      <Frase />
      <Frase />
      <SayMyName nome={nome} />
      <Pessoa
        foto='https://placehold.co/150'
        nome={nome}
        idade='18'
        profissao='estudante'
      />
      <List />
    </div>
  );
}

export default App;
