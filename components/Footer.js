import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/logo.png';

import { FaTelegram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { RiArrowRightUpLine } from 'react-icons/ri';


function Footer() {
  return (
    <footer className="app__footer">
        <div className="app__footer-container section__container">
            <div className="app__footer-row">
                <div className="app__footer-logo">
                    <Link href="/">
                        <Image 
                            src={logo} 
                            alt=""
                            />
                    </Link>
                </div>
            </div>
            <div className="app__footer-row -links">
                <div className="escorts__footer-text">
                    <h3> Fortuna's Wheel. <br /> The goddess of luck. </h3>
                </div>
                <div className="app__footer-links_grid">
                    <ul className="app__footer-link">
                        <li> 
                            <h4> Quick Links </h4>
                        </li>
                        <li>
                            <Link href="/">
                                <span> Home </span>
                                <div className="border-line" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span> About Fortuna </span>
                                <div className="border-line" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/rules">
                                <span> Rules  </span>
                                <div className="border-line" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/how-it-works">
                                <span> How it works </span>
                                <div className="border-line" />
                            </Link>
                        </li>
                    </ul>

                    <ul className="app__footer-link">
                        <li>
                            <h4> Play Lottery </h4>
                        </li>
                        <li>
                            <Link href="/guardian">
                                <span> Become A Guardian </span>
                                <div className="border-line" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/divine-draw">
                                <span> Play Now </span>
                                <div className="border-line" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="app__footer-row -socials">
                <h2> Join Our Community </h2>
                <div className="app__footer-icons">
                    <div className="app__footer-icon">
                        <a href="https://twitter.com/Divine_Draw" target='_blank'>
                            <span> Twitter </span>
                            <RiArrowRightUpLine color="#000" />
                        </a>
                    </div>
                    <div className="app__footer-icon">
                        <a href="/" target='_blank'>
                            <span> Discord </span>
                            <RiArrowRightUpLine color="#000" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="app__footer-row">
                <p>Copyright  &copy; {new Date().getFullYear()} Fortuna Wheel Lottery - All rights reserved </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;