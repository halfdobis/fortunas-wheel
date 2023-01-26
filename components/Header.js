import React from 'react';

function Header() {
  return (
    <header className="app__header">
        <div className='app__header-overlay' />
        <div className="app__header-container">
            <div className="app__header-container__text">
                <h2> WELCOME TO FORTUNA'S REALM </h2>
                <p> Play the Divine Draw, become a guardian, and let Fortuna's fortune shine on you. </p>
                <a href="/divine-draw"> Play Now </a>
            </div>
        </div>
        <div className="app__header-socials">
        </div>
    </header>
  )
}

export default Header;