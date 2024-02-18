import React from 'react';
import './styles/reset.css';
import './styles/main.css';

/* libraries */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* components */
import Navbar from './components/navBar/Navbar';
import Footer from './components/footer/Footer';
/* pages */
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-page/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
