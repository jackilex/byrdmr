import React from 'react';
import Fade from 'react-reveal/Fade';
import './homeSection.css';
import drone from "../../Assets/Images/Drone.png"
export default function HomeSection() {
  return (
    <section className={'home--section_container fh-vwp'}>
      <div
        className={'home--section_image'}
        style={{
          backgroundImage: `url("/Assets/Images/Shadow.png")`,
        }}
      >
        <Fade right>
          <img src={drone} alt="" />
        </Fade>
      </div>
      <div className={'home--section_secondary'}>
        <Fade left>
          <h1>F-210</h1>
          <h3>“The Fastest Drone on the Planet”</h3>
          <p>“The– The Wirecutter</p>
        </Fade>
      </div>
    </section>
  );
}
