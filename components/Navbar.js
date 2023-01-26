import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../assets/images/Fortuna-Logo.jpg';

const Menu = ({ handle_click}) => {
  const { pathname } = useRouter();
  return  (
    <ul>
      <li onClick={handle_click}><Link href="/" className={`${pathname === "/" && "app__navbar-link__active"}`}> Home </Link></li>
      <li onClick={handle_click}><Link href="/story" className={`${pathname === "/story" && "app__navbar-link__active"}`}> Story </Link></li>
      <li onClick={handle_click}><Link href="/about" className={`${pathname === "/about" && "app__navbar-link__active"}`}> About </Link></li>
      <li onClick={handle_click}><Link href="/rules" className={`${pathname === "/rules" && "app__navbar-link__active"}`}> Rules </Link></li>
      <li onClick={handle_click}><Link href="/how-it-works"  className={`${pathname === "/how-it-works" && "app__navbar-link__active"}`}> How It Works </Link></li>
    </ul>
  )
}


export default function Navbar() {
  const [ toggle_menu, set_toggle_menu ] = useState(false);
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
    <nav className="app__navbar">
      <div className="app__navbar-container section__container">
        <div className="app__navbar-container__logo">
          <Link href="/">
            <Image src={logo} alt="Fortuna NFT" width={48} height={48} />
          </Link>
        </div>
        <div className="app__navbar-container__links">
          <Menu />
        </div>

        <div className="app__navbar-container__btns">
          { toggle_menu ? <RiCloseLine 
              color='#fff'
              size={27}
              onClick={()=> set_toggle_menu(false)}
          /> : <RiMenu3Line 
              color='#fff'
              size={27}
              onClick={()=> set_toggle_menu(true)}
          />}

          { toggle_menu && (
            <div className="app__navbar-mobile__menu scale-up-center">
                <div className="app__navbar-mobile__menu-container">
                  <Menu handle_click={()=> set_toggle_menu(false)} />
                </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
