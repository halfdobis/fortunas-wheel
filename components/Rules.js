import React from 'react';
import Link from 'next/link';

function Rules() {
  return (
    <div className="app__rules section__container">
        <div className="app__rules-container">
            <div className="app__rules-container__header">
                <h2> About the Fortuna Wheel Lottery </h2>
            </div>
            <div className="app__rules-container__field">
                <p> To  participate in the event, players must purchase a lottery ticket for $50 during the sales period. Each ticket will be assigned a unique ticket number and the player's name will be recorded on the ticket. The sales period for tickets will run for one month, giving players ample time to purchase tickets and join the drawing... 
                </p>
                <div className="app__rules-container__link">
                  <Link href="/about"> Read more </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rules;