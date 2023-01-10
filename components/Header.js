import React from 'react';
import Image from 'next/image';

import hero_image from '../assets/images/Fortuna.PNG';
import solsea_logo from '../assets/images/SolSea_Logo1.png';

import { FiInstagram, FiTwitter, FiDisc } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

function Header() {
  return (
    <header className="app__header">
        <div className="app__header-container">
            <div className='app__header-container__image-container'>
                <div className="app__header-container__image">
                    <Image src={hero_image} alt="Fortuna" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className="app__header-container__text">
                <h2> Discover Rare Digital Guardiand & Collect FORTUNA NFT </h2>
            </div>
        </div>
        <div className="app__header-socials">
        </div>
    </header>
  )
}

export default Header;