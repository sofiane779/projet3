import React from 'react'
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.css'
import 'popper.js'
import 'bootstrap/js/dist/modal.js'
import Footer from './components/Footer';

import './App.css';
import Accueil from './components/Accueil';



function App() {
  return (
    <div className="App" >
      
      <Menu/>
      
     <Footer/>
    </div>
  );
}

export default App;
