import React,{useEffect} from 'react';

import { useScreenHook } from '../../hooks';
import './craft.css';
import { ReactComponent as Tab } from '../../Assets/Images/crafttab.svg';
import { ReactComponent as PlusOne } from '../../Assets/Images/plus.svg';
import { ReactComponent as PlusTwo } from '../../Assets/Images/plus.svg';
import { ReactComponent as PlusThree } from '../../Assets/Images/plus.svg';
import { ReactComponent as PlusFour } from '../../Assets/Images/plus.svg';
import { ReactComponent as CloseIcon } from '../../Assets/Images/closeIcon.svg';
import drone from '../../Assets/Images/Drone.png'
import shadow from "../../Assets/Images/Shadow.png"
export default function Craft( {
  plusOne,
  plusTwo,
  plusThree,
  plusFour,
  setPlusOne,
  setPlusTwo,
  setPlusThree,
  setPlusFour,
  onClose
} )
{
  const {isDesktop, isMobileDevice, isTabletDevice} = useScreenHook()
  
  useEffect(() => {
    console.log(isDesktop, isMobileDevice, isTabletDevice)
  }, [isDesktop, isMobileDevice, isTabletDevice])
  
  return (
    <section className={'Craft--section_container fh-vwp'}>
      <div
        className={`Craft--section_image ${((plusOne || plusTwo || plusFour || plusThree) && (!isDesktop)) && 'hide'}`}
        style={{
          backgroundImage: `url(${shadow})`,
        }}
      >
        
          <img src={drone} alt="drone" />
        <PlusOne
          className={`plus plus--one icons ${ plusOne && "activated" }`}
          width={40}
          height={40}
          onClick={setPlusOne}

        />
        <PlusTwo
          className={`plus plus--two icons ${ plusTwo && "activated" }`}
          width={40}
          height={40} 
          onClick={setPlusTwo}
          />
        <PlusThree
          className={`plus plus--three icons ${ plusThree && "activated" }`}
          width={40}
          height={40}
          onClick={setPlusThree}
        />
        <PlusFour
          className={`plus plus--four icons ${ plusFour && "activated" }`}
          width={40}
          height={40} 
          onClick={setPlusFour}
          />
        </div>

      {((plusOne || plusTwo || plusFour || plusThree) && (!isDesktop)) &&  <div className="zoom--feature">
          <CloseIcon
            className="zoom--close icons"
            width={40}
            height={40}
            fill="gray"
            onClick={onClose}
          />
        { plusOne && <img src="/Assets/Images/zoom1.png" alt="dronepad" />}
        { plusTwo && <img src="/Assets/Images/zoom2.png" alt="dronepad" />}
        { plusThree && <img src="/Assets/Images/zoom3.png" alt="dronepad" />}
        { plusFour && <img src="/Assets/Images/f210_032.png" alt="dronepad" />}
        </div>}
     { <div className={`Craft--secondary_container ${(plusOne || plusTwo || plusFour || plusThree) && "zoom-activated"}`}>
        <Tab className="tab" />
        <div className={'highligth--container'}>
          <h2 className={'highligth--title'}>Craft and design.</h2>
          <span className={'highligth'}></span>
        </div>
      </div>}
      {((plusOne || plusTwo || plusFour || plusThree) && (isDesktop)) &&  <div className="zoom--feature">
          <CloseIcon
            className="zoom--close icons"
            width={40}
            height={40}
            fill="gray"
            onClick={onClose}
          />
        { plusOne && <img src="/Assets/Images/zoom1.png" alt="dronepad" />}
        { plusTwo && <img src="/Assets/Images/zoom2.png" alt="dronepad" />}
        { plusThree && <img src="/Assets/Images/zoom3.png" alt="dronepad" />}
        { plusFour && <img src="/Assets/Images/f210_032.png" alt="dronepad" />}
        </div>}
    </section>
  );
}
