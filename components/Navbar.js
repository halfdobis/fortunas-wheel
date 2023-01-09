import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  return  (
    <ul>
      <li><Link href="/"> Home </Link></li>
      <li><Link href="/about"> About </Link></li>
      <li><Link href="/rules"> Rules </Link></li>
      <li><Link href="/guardian"> Guaridan </Link></li>
      <li><Link href="/how-it-works"> How It Works </Link></li>
      <li><Link href="/divine-draw"> Divine Draw </Link></li>
    </ul>
  )
}

export default function Navbar() {
  const [ toggle_menu, set_toggle_menu ] = useState(false);
  return (
    <navbar className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-container__logo">
          <Link href="/"> LOGO </Link>
        </div>
        <div className="app__navbar-container__links">
          <Menu />
        </div>
        <div className="app__navbar-container__button">
          <Link href="/"> Play now </Link>
        </div>
      </div>
    </navbar>
  )
}
