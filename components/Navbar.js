import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar-container">
        <ul>
            <li><Link href="/"> Home </Link></li>
            <li><Link href="/about"> About </Link></li>
            <li><Link href="/rules"> Rules </Link></li>
            <li><Link href="/guardian"> Guaridan </Link></li>
            <li><Link href="/how-it-works"> How It Works </Link></li>
            <li><Link href="/divine-draw"> Divine Draw </Link></li>
        </ul>
    </div>
  )
}
