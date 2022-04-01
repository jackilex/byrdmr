/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './navbar.css';
import { ReactComponent as Logo } from '../../Assets/Images/logoMain.svg';
import { ReactComponent as Menu } from '../../Assets/Images/menu.svg';
export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="list nav__list">
        <li className="nav__item">
          <a target="_blank" href="#">
            Hosting
          </a>
        </li>
        <li className="nav__item">
          <a target="_blank" href="#">
            VPS
          </a>
        </li>
      </ul>
          <div
             className={'nav--logo_container'} 
          >
        <Logo className={'nav--logo'} />
      </div>
      <Menu className={'nav--menu icons'} />
      <ul className="list nav__list">
        <li className="nav__item">
          <a target="_blank" href="#">
            Hosting
          </a>
        </li>
        <li className="nav__item">
          <a target="_blank" href="#">
            VPS
          </a>
        </li>
      </ul>
    </nav>
  );
}
