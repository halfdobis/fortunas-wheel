import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import guardian1 from '../assets/images/guardian3.jpeg';

function About() {
  return (
    <div className="app__lp-about section__container">
        <div className="app__lp-about_container">
            <div className="app__lp-about_content">
              <div className="app__lp-about_row">
                <div className="app__lp-about_col -left">
                  <Image src={guardian1} alt="" />
                </div>
                <div className="app__lp-about_col -right">
                  <h2> We are <br /> Fortuna NFT</h2>
                  <p> To  participate in the event, players must purchase a lottery ticket for $50 during the sales period. Each ticket will be assigned a unique ticket number and the player's name will be recorded on the ticket. The sales period for tickets will run for one month, giving players ample time to purchase tickets and join the drawing... 
                </p>
                <div className="app__lp-about_link">
                  <Link href="/about"> Click to Learn More  </Link>
                </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About;