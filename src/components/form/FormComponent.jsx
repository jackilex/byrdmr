import React, { useRef } from 'react';

import { ReactComponent as Arrow } from '../../Assets/Images/arrow.svg';
import './form.css';

export default function FormComponent() {


  return (
    <section
  
      className="form--contact_container fh-vwp">
      <form className="form--contact">
        <label htmlFor="name">FULL NAME</label>
        <input type="text" name="name" />
        <label htmlFor="email">EMAIL</label>
        <input type="text" name="email" />
        <label htmlFor="message">MESSAGE</label>
        <textarea className="text--area" type="text" name=",essage" />
      </form>
      <button className="form--contact_btn">
        <Arrow />
      </button>
    </section>
  );
}
