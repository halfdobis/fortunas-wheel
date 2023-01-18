import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../assets/images/Fortuna-Logo.jpg';

const Menu = () => {
  return  (
    <ul>
      <li><Link href="/about"> About </Link></li>
      <li><Link href="/rules"> Rules </Link></li>
      <li><Link href="/how-it-works"> How It Works </Link></li>
    </ul>
  )
}


export default function Navbar() {
  
  useEffect(()=> {
    const nav = document.querySelector(".app__navbar");
    const header = document.querySelector(".app__header");

    const observer = new IntersectionObserver((entries)=>{
    const entry = entries[0];

        window.addEventListener("scroll", ()=>{
            if(entry.isIntersecting){
                if(header.getBoundingClientRect().top < nav.offsetHeight) {
                  nav.classList.remove("appear")
                }
            }
            else {
              nav.classList.add('appear')
            }
        });
    });  

    observer.observe(header);
  }, []);

  return (
    <navbar className="app__navbar">
      <div className="app__navbar-container section__container">
        <div className="app__navbar-container__logo">
          <Link href="/">
            <Image src={logo} alt="Fortuna NFT" width={48} height={48} />
          </Link>
        </div>
        <div className="app__navbar-container__links">
          <Menu />
        </div>
      </div>
    </navbar>
  )
}
