import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

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
            <Route  path='/' element={<Home />} />
            <Route  path='/company' element={<Company />} />
            <Route  path='/contact' element={<Contact />} />
            <Route  path='/Projects' element={<Projects />} />
            <Route  path='/Project/:id' element={<Project />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
