/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useScreenHook } from '../../hooks';

import './navbar.css';
import { ReactComponent as Menu } from '../../Assets/Images/menu.svg';
import { ReactComponent as Fb } from '../../Assets/Images/fb.svg';
import { ReactComponent as Ig } from '../../Assets/Images/ig.svg';
import logo from '../../Assets/Images/Logo.png'
export default function Navbar( { onHandleModal } )
{

  const [isNavItemVisible, setIsNavItemVisible] = useState( true );

  const { height } = useScreenHook()

  useEffect( () =>
  {
    height > 225 ? setIsNavItemVisible( true ) : setIsNavItemVisible( false )

  }, [height] )


  return (
    <nav className="nav">
      {!isNavItemVisible && <ul className={`list nav__list `}>
        <li className={`nav__item`}>
          <a className={`nav--tag`} target="_blank" href>
            Store
          </a>
        </li>
        <li className={`nav__item`}>
          <a className={`nav--tag`} target="_blank" href>
            Tutorials
          </a>
        </li>
      </ul>}
    {isNavItemVisible && <span className='scoial--icons'><Ig className='icons'/> <Fb className='icons'/></span>}
      <div
        className={'nav--logo_container'}
      >
        <img className={'nav--logo'} src={logo} alt="logo" />
      </div>
      <Menu onClick={onHandleModal} className={'nav--menu icons'} />
      {isNavItemVisible && <Menu onClick={onHandleModal} className={'menu icons'} />}
      {!isNavItemVisible && <ul className="list nav__list">
        <li className={`nav__item`}>
          <a className={`nav--tag`} target="_blank" href>
            Blog
          </a>
        </li>
        <li className={`nav__item`}>
          <a className={`nav--tag`} target="_blank" href >
            Contact
          </a>
        </li>
      </ul>}
    </nav>
  );
}
