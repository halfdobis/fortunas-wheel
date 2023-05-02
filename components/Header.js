import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import guardian1 from '../assets/images/guardian3.jpeg';

function Header() {
  return (
    <header className="app__header">
        <div className='app__header-overlay' />
        <div className="app__header-container">
          <div className="app__header-row">
            <div className="app__header-col -left">
              <div className="app__header-img">
                <Image src={guardian1} alt="" />
              </div>
            </div>
            <div className="app__header-col -right">
              <div className="app__header-text">
                <h2> FORTUNA'S REALM </h2>
                <p> Welcome to Forutna's Real, The goddess of Luck <br /> Play the Divine Draw, become a guardian, and let Fortuna's fortune shine on you. </p>
                <div className="app__header-btns">
                  <Link href="/divine-draw" className="app__header-btn_alt"> 
                    <span> Divine Draw </span> 
                  </Link>
                  <Link href="/guardian" className="app__header-btn"> 
                    <span> Become A Guardian </span> 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header;