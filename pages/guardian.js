import React from 'react';
import Image from 'next/image';

import guardian1 from '../assets/images/guardian1.jpeg'
import guardian2 from '../assets/images/guardian2.jpeg';

export default function Guardian() {
  return (
    <div className="app__guardian section__container">
      <div className="app__guardian-container">
        <div className="app__guardian-row">
          <div className="app__guardian-row__left">
            <h1> The Fortuna NFT <br /> Guardian </h1>
            <button className="app__guardian-btn"> Become A Guardian </button>
          </div>
          <div className="app__guardian-row__right">
            <div className='card'>
              <Image src={guardian1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
