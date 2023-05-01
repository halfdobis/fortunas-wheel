import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import guardian1 from '../assets/images/guardian1.jpeg'
import guardian2 from '../assets/images/guardian2.jpeg';
import guardian3 from '../assets/images/guardian3.jpeg';
import guardian4 from '../assets/images/guardian4.png';

export default function Guardian() {
  return (
    <div className="app__guardian section__container">
      <div className="app__guardian-container">
        <div className="app__guardian-header">
          <h1> The Fortuna NFT Guardian Collections </h1> 
          <p> Get ready for the most exciting NFT drop this year! The lottery has 100 NFT holders, known as guardians, who are entitled to 20% of the funds from the ticket sales at the end of the drawing. The guardians are represented as unique NFTs that can be purchased on the Abitrum chain and traded with ETH. </p>
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

        <div className="app__guardian-btns">
          <div className="app__guardian-btn">
            <Link href="/about">
              <span> About Fortuna Guardian </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
