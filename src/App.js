import './App.css';
import React from 'react';
import Navbar from './Components/NavBar'
import About from './Components/introduction'
import Skills from './Components/skills'
function App() {
  return (
     <div>
    <Navbar/>
    <About/>
   <Skills/>
    </div>

  );
}

export default App;
