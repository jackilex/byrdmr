import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../Assets/Images/closeIcon.svg';

import './modal.css';
export default function Modal({ onModal, onHandleModal }) {
 const handleClose = ()=>{
   document.body.style.overflow = "scroll";
   onHandleModal()
 }
 
  return (
    onModal && (
      <div className="modal--wrapper">
        <div className="modal--header">
          <div className="logo--modal">
            <img src="/Assets/Images/logoallwhite.png" alt="logo" />
          </div>
          <CloseIcon className="icons" onClick={handleClose} />
        </div>
        <div className="modal--body">
          <div className="modal--body_image">
            <img src="/Assets/Images/Drone.png" alt="drone" />
          </div>
          <div className="modal--body_list">
            <ul className="list modal-nav__list">
              <li className="nav__item" >
                <a target="_blank">
                  Store
                </a>
              </li>
              <li className="nav__item">
                <a target="_blank" >
                  Tutorials
                </a>
              </li>
                <li className="nav__item">
                  <a target="_blank">
                    Blog
                  </a>
                </li>
                <li className="nav__item">
                  <a target="_blank">
                    Contact
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    )
  );
}
