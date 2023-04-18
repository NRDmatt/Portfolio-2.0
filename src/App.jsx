import React, { useState } from 'react';
import './App.scss';
import Topbar from "./comps/Nav/Navbar";
import About from "./comps/About/About";
import Resume from './comps/Resume/Resume';
import Portfolio from './comps/Portfolios/Portfolio';
import Contact from './comps/Contact/Contact';
import Footer from './comps/Footer/Footer';

function App() {


    return (
      <div className="app">
        <Topbar></Topbar>
        <div className="sections">
          <About></About>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Resume></Resume>
          <Footer></Footer>  
        </div>
        <div className="footer">
        <Footer></Footer>  
        </div>
        </div>  
    )
  }
  
  
  export default App;
  
