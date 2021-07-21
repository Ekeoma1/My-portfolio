import React from 'react'
// css
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar';
import Herobox from './components/Herobox'
import About from './components/About'
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Herobox/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
