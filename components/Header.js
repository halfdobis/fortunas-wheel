import React from 'react';
import Image from 'next/image';

import hero_image from '../assets/images/Fortuna.PNG';
import solsea_logo from '../assets/images/SolSea_Logo1/png'

import { FiInstagram, FiTwitter, FiDisc } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

function Header() {
  return (
    <header className="app__header">
        <div className="app__header-container">
            <div className="app__header-container__text">
                <h2> FORTUNA NFT </h2>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam commodi fugiat quod, quia aliquid consequuntur. Explicabo voluptates vel harum, officiis sapiente assumenda ullam corrupti, modi error, repellat cum vitae. </p>
            </div>
            <div className='app__header-container__image-container'>
                <div className="app__header-container__image">
                    <Image src={hero_image} alt="Fortuna" layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>
        <div className="app__header-socials">
            {/* <a href=""> <div className="app__header-socials__icon"> <Image src={solsea_logo} alt="solsea" /> </div></a> */}
        </div>
    </header>
  )
}

export default Header;