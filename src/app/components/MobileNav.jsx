"use client"
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(10);

  function changeVal() {
    setVal((prev) => prev + 20);
  }

  function controlNav() {
    setOpen(!open);
  }

  return (
    <nav>
     
      <ul className="flex items-center justify-around md:hidden h-36 text-white">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li onClick={controlNav} className="flex items-end cursor-pointer text-2xl" aria-label="Toggle Menu">
          <GiHamburgerMenu />
        </li>
      </ul>

      
      {open && (
        <ul className="flex flex-col justify-around md:hidden items-end h-72 pr-32">
          <Link href={'/'}>
            <li className="hover:text-green-500">home</li>
          </Link>

          <Link href={'/movies'}>
            <li className="hover:text-green-500">movies</li>
          </Link>

          <Link href={'/about'}>
            <li className="hover:text-green-500">about</li>
          </Link>

          <Link href={'/contact'}>
            <li className="hover:text-green-500">contact</li>
          </Link>

          <Link href={'/more'}>
            <li className="hover:text-green-500">more+</li>
          </Link>

          <li className="text-fuchsia-500"> {val}</li>
          <li onClick={changeVal} className="cursor-pointer text-blue-500 hover:text-blue-300">Increase       
          </li>
        </ul>
      )}
    </nav>
  );
}
