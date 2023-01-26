import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '../assets/images/Fortuna-Logo.jpg';

const Menu = () => {
  const { pathname } = useRouter();
  return  (
    <ul>
      <li><Link href="/" className={`${pathname === "/" && "app__navbar-link__active"}`}> Home </Link></li>
      <li><Link href="/about" className={`${pathname === "/about" && "app__navbar-link__active"}`}> About </Link></li>
      <li><Link href="/rules" className={`${pathname === "/rules" && "app__navbar-link__active"}`}> Rules </Link></li>
      <li><Link href="/story" className={`${pathname === "/story" && "app__navbar-link__active"}`}> Story </Link></li>
      <li><Link href="/how-it-works"  className={`${pathname === "/how-it-works" && "app__navbar-link__active"}`}> How It Works </Link></li>
    </ul>
  )
}


export default function Navbar() {

  useEffect(()=> {
    const nav = document.querySelector(".app__navbar");
    window.addEventListener("scroll", (e)=> {
      if(window.scrollY >= 70){
        nav.classList.add("appear");
      } else {
        nav.classList.remove("appear");
      }
    })
  },[])

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
