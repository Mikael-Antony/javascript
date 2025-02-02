import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/newProject';

import Container from './components/layout/container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        
        <Container customClass="minHeigth">
          <Routes> 
            <Route exact path='/NewProject' element={<NewProject />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/company' element={<Company />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/Projects' element={<Projects />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
