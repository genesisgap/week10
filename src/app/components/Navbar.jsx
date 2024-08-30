"use client"
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useContext } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { SidebarContext } from "../providers";


export default function Navbar() {
  const {val} = useContext(SidebarContext)
  return (
    <nav className="bg-gray-950 text-gray-600 text-lg">
           
        <ul className="md:flex hidden capitalize ml-[800px] gap-8 items-center h-24">

        <li><img src="/Logo1.png" alt="Movie Arcade" className="w-8 h-8 flex flex-col items-right" /></li>

            <Link href={'/'}>
            <li className="hover:text-gray-300 ">home</li>
            </Link>

            <Link href={'/movies'}>
            <li className="hover:text-gray-300 ">movies</li>
            </Link>

            <Link href={'/about'}>
            <li className="hover:text-gray-300 ">about</li>
            </Link>

            <Link href={'/contact'}>
            <li className="hover:text-gray-300 ">contact</li>
            </Link>

            <Link href={'/more'}>
            <li className="hover:text-gray-300 ">more</li>
            </Link>

            <Link href={'/cart'}>
            <li className="hover:text-gray-300 ">{val}</li>
            </Link>

        </ul>
        
        <MobileNav />
    </nav>
  )
}
