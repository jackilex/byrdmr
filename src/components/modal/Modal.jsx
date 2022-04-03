import React from 'react';
import Slide from 'react-reveal/Slide';
import { ReactComponent as CloseIcon } from '../../Assets/Images/closeIcon.svg';

import './modal.css';
export default function Modal({ onModal, onHandleModal }) {
 const handleClose = ()=>{
   document.body.style.overflow = "scroll";
   onHandleModal()
 }
 
  return (
    onModal && (
       <Slide bottom>
      <div className="modal--wrapper">
        <div className="modal--header">
          <div className="logo--modal">
            <img src="/Assets/Images/logoallwhite.png" alt="logo" />
          </div>
          <CloseIcon fill="white" className="close--icon_modal icons" onClick={handleClose} />
        </div>
        <div className="modal--body">
          <div className="modal--body_image">
            <img src="/Assets/Images/Drone.png" alt="drone" />
          </div>
          <div className="modal--body_list">
            <ul className="list modal-nav__list">
              <li className="nav__item" >
                <a target="_blank" href>
                  Store
                </a>
              </li>
              <li className="nav__item">
                <a target="_blank" href>
                  Tutorials
                </a>
              </li>
                <li className="nav__item">
                  <a target="_blank" href>
                    Blog
                  </a>
                </li>
                <li className="nav__item">
                  <a target="_blank" href>
                    Contact
                  </a>
                </li>
              </ul>
          </div>
        </div>
        </div>
      </Slide>
    )
  );
}
