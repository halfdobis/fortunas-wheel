import React from 'react';
import Link from 'next/link';
import Guardian from '../components/Guardian';

// guardians
import { guardians } from '../data/guardian';

function Guardians() {
  return (
    <div className="app__lp-guardians section__container">
        <div className="app__lp-guardians_container">
            <div className="app__lp-guardians_header">
                <h2> The Fortuna NFT Guardian Collections </h2>
            </div>
            <div className="app__lp-guardians_image">
                { guardians.slice(0, 4).map((guardian, index) => (
                    <Guardian 
                        key={index} guardian={guardian}
                        item={`-item${index+1}`} 
                    />
                ))}
            </div>
            <div className="app__lp-guardians_btns">
                <div className="app__lp-guardians_btn">
                    <Link href="/guardian"> 
                        <span> Become A Guardian </span> 
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guardians