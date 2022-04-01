
import React, { useRef } from 'react';

import Navbar from './components/navBar/Navbar';
import HomeSection from './components/homeSect/HomeSection';
import Craft from './components/craftSect/Craft';
import FormComponent from './components/form/FormComponent';
import './App.css';

function App() {
  
  return (
    <div >
      <Navbar />
      <HomeSection/>
      <Craft />
      <FormComponent/>
    </div>
  );
}

export default App;
