import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import './App.css';


function App() {

  return (
  
    <div className='background'>

      <Router>
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