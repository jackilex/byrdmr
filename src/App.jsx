
import React, { useState, useEffect } from 'react';

import Navbar from './components/navBar/Navbar';
import HomeSection from './components/homeSect/HomeSection';
import Craft from './components/craftSect/Craft';
import FormComponent from './components/form/FormComponent';
import Modal from './components/modal/Modal';
import { useScroolHook } from './hooks';
import './App.css';

function App() {
  const [onModal, setOnModal] = useState( false )
  const handleModal= ()=>{
    if(!onModal){
      document.body.style.overflow = "hidden"
    }
    setOnModal( !onModal )
    
  }

  

  return (
    <>
      <Modal onModal={onModal} onHandleModal={ handleModal}/>
    <div >
        <Navbar onHandleModal={ handleModal}/>
      <HomeSection/>
      <Craft />
      <FormComponent/>
      </div>
    </>
  );
}

export default App;
