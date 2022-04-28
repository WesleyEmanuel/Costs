import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contacts from './components/pages/Contacts';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/newproject' element={<NewProject/>} />
          <Route path='/project/:id' element={<Project/>} />
        </Routes>
      </Container>
      
      <Footer/>

    </Router>
  );
}

export default App;
