import React from 'react';

import './craft.css';
import { ReactComponent as Tab } from '../../Assets/Images/crafttab.svg';
import { ReactComponent as PlusOne } from '../../Assets/Images/plus.svg';
import { ReactComponent as PlusTwo } from '../../Assets/Images/plus.svg';
import { ReactComponent as PlusThree } from '../../Assets/Images/plus.svg';
import { ReactComponent as PlusFour } from '../../Assets/Images/plus.svg';

export default function craft() {
  return (
    <section className={'craft--section_container fh-vwp'}>
      <div
        className={'craft--section_image'}
        style={{
          backgroundImage: `url("/Assets/Images/Shadow.png")`,
        }}
      >
        <img src="/Assets/Images/Drone.png" alt="drone" />
        <PlusOne className="plus--one icons" width={40} height={40} />
        <PlusTwo className="plus--two icons" width={40} height={40} />
        <PlusThree className="plus--three icons" width={40} height={40} />
        <PlusFour className="plus--four icons" width={40} height={40} />
      </div>
      <div className={'craft--secondary_container'}>
        <Tab className="tab" />
        <div className={'highligth--container'}>
          <h2 className={'highligth--title'}>Craft and design.</h2>
          <span className={'highligth'}></span>
        </div>
      </div>
    </section>
  );
}
