
import React, { useState, useEffect } from 'react';

import Navbar from './components/navBar/Navbar';
import HomeSection from './components/homeSect/HomeSection';
import Craft from './components/craftSect/Craft';
import FormComponent from './components/form/FormComponent';
import Modal from './components/modal/Modal';
import { useScreenHook } from './hooks';
import './App.css';

function App() {
  const [onModal, setOnModal] = useState( false )
  const [plusOne, setPlusOne] = useState( false )
  const [plusTwo, setPlusTwo] = useState( false )
  const [plusThree, setPlusThree] = useState( false )
  const [plusFour, setPlusFour] = useState(false)
  const handleModal= ()=>{
    if(!onModal){
      document.body.style.overflow = "hidden"
    }
    setOnModal( !onModal )
    
  }

  const onCloseAllZoom = () =>
  {
    setPlusOne( false );
    setPlusTwo( false );
    setPlusThree( false );
    setPlusFour( false );
  }

  const onCloseOthers = (one, two, three,cbParam, callback)=>{
    one( false )
    two( false )
    three( false )
    console.log(cbParam)
    callback(!cbParam)
  }

  return (
    <>
      <Modal onModal={onModal} onHandleModal={ handleModal}/>
    <div >
        <Navbar onHandleModal={ handleModal}/>
      <HomeSection/>
        <Craft
          plusOne={plusOne}
          plusTwo={plusTwo}
          plusThree={plusThree}
          plusFour={plusFour}
          setPlusOne={() => onCloseOthers(setPlusFour, setPlusTwo, setPlusThree, plusOne,setPlusOne)}
          setPlusTwo={() => onCloseOthers(setPlusOne, setPlusThree, setPlusFour,plusTwo , setPlusTwo)}
          setPlusThree={()=>onCloseOthers(setPlusOne, setPlusTwo, setPlusFour,plusThree, setPlusThree)}
          setPlusFour={() => onCloseOthers(setPlusOne, setPlusTwo, setPlusThree,plusFour , setPlusFour)}
          onClose={onCloseAllZoom}
        />
      <FormComponent/>
      </div>
    </>
  );
}

export default App;
