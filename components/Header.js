import React from 'react';

function Header() {
  return (
    <header className="app__header">
        <div className='app__header-overlay' />
        <div className="app__header-container">
            <div className="app__header-container__text">
                <h2> WELCOME TO FORTUNA'S REALM </h2>
                <button type="button"> Play Now </button>
            </div>
        </div>
        <div className="app__header-socials">
        </div>
    </header>
  )
}

export default Header;