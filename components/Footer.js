import React from 'react';


import { FaTelegram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

function Footer() {
  return (
    <footer className="app__footer">
        <div className="app__footer-container">
            <div className="app__footer-container__social">
                <ul className="app__footer-container__social-links">
                    <li className="app__icons">
                        <a href=""> 
                            <FaTelegram />
                        </a>
                    </li>
                    <li className="app__icons">
                        <a href=""> 
                            <FiTwitter />
                        </a>
                    </li>
                    <li className="app__icons">
                        <a href=""> 
                            <SiDiscord />
                        </a>
                    </li>
                </ul>
            </div>
            <p> Copyright  &copy; {new Date().getFullYear()} Fortuna Wheel Lottery - All rights reserved </p>
        </div>
    </footer>
  )
}

export default Footer;