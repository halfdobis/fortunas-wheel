
import React from 'react';
import Acordion from './Acordion';

import { faq } from '../data/faq';

function Faq() {
  return (
    <div className="app__faq">
        <div className="app__faq-container">
            <div className="app__faq-container__heading">
                <h1> Frequently Asked Questions </h1>
                <p> All you need to know about Fortuna NFT. </p>
            </div>
            <div className="app__faq-container__content">
                { faq.map(faq => (
                    <Acordion 
                        faq={faq}
                        key={faq.id}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq;