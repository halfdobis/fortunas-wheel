
import React from 'react';
import Acordion from './Acordion';

import { faq } from '../data/faq';

function Faq() {
  return (
    <div className="app__lp-faq">
        <div className="app__lp-faq_container">
            <div className="app__lp-faq_heading">
                <h2> Frequently Asked Questions </h2>
            </div>
            <div className="app__lp-faq_content">
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