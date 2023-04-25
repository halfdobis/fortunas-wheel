import React from 'react';
import Image from 'next/image';

import guardian1 from '../assets/images/guardian1.jpeg'
import guardian2 from '../assets/images/guardian2.jpeg';
import guardian3 from '../assets/images/guardian3.jpeg';
import guardian4 from '../assets/images/guardian4.png';

export default function Guardian() {
  return (
    <div className="app__guardian section__container">
      <div className="app__guardian-container">
        <div className="app__guardian-header">
          <h1> The Fortuna NFT <br /> Guardian </h1> 
        </div>
        <div className="app__guardian-grid">
          <div className="app__guardian-grid_item -item1">
            <Image src={guardian1} alt="Fortuna Guardian" />
          </div>
          <div className="app__guardian-grid_item -item2">
            <Image src={guardian2} alt="Fortuna Guardian" />
          </div>
          <div className="app__guardian-grid_item -item3">
            <Image src={guardian3} alt="Fortuna Guardian" />
          </div>
          <div className="app__guardian-grid_item -item4">
            <Image src={guardian4} alt="Fortuna Guardian" />
          </div>
        </div>
      </div>
    </div>
  )
}
