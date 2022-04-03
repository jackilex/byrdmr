/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState, useEffect} from 'react';
import { useScreenHook } from '../../hooks';

import './navbar.css';
import { ReactComponent as Logo } from '../../Assets/Images/logoMain.svg';
import { ReactComponent as Menu } from '../../Assets/Images/menu.svg';
export default function Navbar({onHandleModal}) {
  
  const [isNavItemVisible, setIsNavItemVisible] = useState( true );
  
  const {height, stopBodyFromscrolling} = useScreenHook()

  useEffect(() => {
    height> 225? setIsNavItemVisible(true): setIsNavItemVisible(false)
    
  }, [height])
  
  
  return (
    <nav className="nav">
      {!isNavItemVisible && <ul className={`list nav__list `}>
        <li className={`nav__item`}>
          <a target="_blank" href="#">
            Hosting
          </a>
        </li>
        <li className={`nav__item`}>
          <a target="_blank" href="#">
            VPS
          </a>
        </li>
      </ul>}
          <div
             className={'nav--logo_container'} 
          >
        <Logo className={'nav--logo'} />
      </div>
      <Menu onClick={onHandleModal} className={'nav--menu icons'} />
      {isNavItemVisible &&  <Menu onClick={onHandleModal} className={'menu icons'} />}
      {!isNavItemVisible && <ul className="list nav__list">
        <li className={`nav__item`}>
          <a target="_blank" href="#">
            Hosting
          </a>
        </li>
        <li className={`nav__item`}>
          <a target="_blank" href="#">
            VPS
          </a>
        </li>
      </ul>}
    </nav>
  );
}
