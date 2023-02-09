import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import './App.css';


function App() {

  return (
  
    <div class="container">

      <div>
        <Header />
      </div>

      <div>
        <Navbar />
      </div>

      <div>
        <AboutMe />
      </div>

      <div>
        <Project />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
      
    </div>
  )

}


export default App