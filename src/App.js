import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';


function App() {

  return (

    <div class="container">
        <Header />

        <Navigation />

        <Project />

        <Contact />

        <Footer />
    </div>
  )

}


export default App