import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import './App.css';
import Background from '../src/images/Background.jpg';


function App() {

  return (
  
    <div style={{backgroundImage:`url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 1050}} >

        <Router basename={process.env.PUBLIC_URL}>
          <>
            <Routes>
              <Route exact path='/' element={<Home />} />

              <Route exact path='/aboutme' element={<AboutMe />} />

              <Route path='/contact' element={<Contact />} />

            </Routes>
          </>
        </Router>
      
    </div>
  )

}


export default App