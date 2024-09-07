"use client"
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState();

  function changeVal() {
    setVal((prev) => prev + 30);
  }

  function controlNav() {
    setOpen(!open);
  }

  return (
    <nav className="relative">
      {/* Hamburger Icon */}
      <ul className="flex items-center justify-around md:hidden h-20 bg-black text-white">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li onClick={controlNav} className="cursor-pointer text-2xl" aria-label="Toggle Menu">
          <GiHamburgerMenu />
        </li>
      </ul>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 right-0 bg-black text-white w-auto rounded-lg shadow-lg py-4 px-6 flex flex-col gap-2 capitalize items-end">
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
          <li onClick={changeVal} className="cursor-pointer text-blue-500 hover:text-blue-300">
            {/* Increase Value */}
          </li>
        </ul>
      )}
    </nav>
  );
}
