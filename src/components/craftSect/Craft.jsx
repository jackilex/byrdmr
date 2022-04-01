import React from 'react';

import './craft.css';
import { ReactComponent as Tab } from '../../Assets/Images/crafttab.svg';

export default function craft() {
  return (
    <section className={'craft--section_container'}>
      <div
        className={'craft--section_image'}
        style={{
          backgroundImage: `url("/Assets/Images/Shadow.png")`,
        }}
      >
        <img src="/Assets/Images/Drone.png" alt="" />
      </div>
      <div className={'craft--secondary_container'}>
        <Tab className='tab' />
        <div className={'highligth--container'}>
          <h2 className={'highligth--title'}>Craft and design.</h2>
          <span className={'highligth'}></span>
        </div>
      </div>
    </section>
  );
}
