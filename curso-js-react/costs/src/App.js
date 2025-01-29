import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newProject';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/company'>Contato</Link>
          <Link to='/contact'>Empresa</Link>
          <Link to='/newProject'>Novo Projeto</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newProject' element={<NewProject />} />
        </Routes>
        <footer>footer</footer>
      </Router>
    </div>
  );
}

export default App;
