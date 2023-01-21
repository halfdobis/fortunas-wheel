import React from 'react';
import Image from 'next/image';

import hero_image from '../assets/images/Fortuna.PNG';

function Header() {
  return (
    <header className="app__header">
        <div className='app__header-overlay' />
        <div className="app__header-container">
            <div className='app__header-container__image-container'>
                {/* <div className="app__header-container__image">
                    <Image src={hero_image} alt="Fortuna" layout="fill" objectFit="cover" />
                </div> */}
            </div>
            <div className="app__header-container__text">
                <h2> WELCOME TO FORTUNA'S REALM </h2>
            </div>
        </div>
        <div className="app__header-socials">
        </div>
    </header>
  )
}

export default Header;