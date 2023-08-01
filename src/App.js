import './App.css';
import React from 'react';
import Navbar from './Components/NavBar'
import About from './Components/introduction'
import Skills from './Components/skills'
import Projects from './Components/projects'
import Contact from './Components/contact'
import ContactForm from './Components/contactform'

function App() {
  return (
     <div>
    <Navbar/>
    <About/>
   <Skills/> 
   <Projects/>
   <Contact/>
   <ContactForm/>
    </div>

  );
}

export default App;
