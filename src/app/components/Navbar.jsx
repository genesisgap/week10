import Link from "next/link";
import MobileNav from "./MobileNav";
import React from 'react';
import { RiMovie2Fill } from "react-icons/ri";


export default function Navbar() {
  return (
    <nav className="bg-black text-gray-600 text-lg">
        <ul className="md:flex hidden capitalize justify-around items-center h-36">

            <Link href={'/'}>
            <li className="hover:text-gray-300 ml-[800px] mr-10">home</li>
            </Link>

            <Link href={'/movies'}>
            <li className="hover:text-gray-300 mr-10">movies</li>
            </Link>

            <Link href={'/about'}>
            <li className="hover:text-gray-300 mr-10">about us</li>
            </Link>

            <Link href={'/contact'}>
            <li className="hover:text-gray-300 mr-10">contact us</li>
            </Link>

            <Link href={'/more'}>
            <li className="hover:text-gray-300 mr-10">more</li>
            </Link>

        </ul>
        
        <MobileNav />
    </nav>
  )
}
