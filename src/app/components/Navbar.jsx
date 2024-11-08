"use client"
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useContext } from "react";
import { SidebarContext } from "../providers";
import { SiWondersharefilmora } from "react-icons/si";
import { MdFavorite } from "react-icons/md";


export default function Navbar() {
  const { val } = useContext(SidebarContext)
  return (
    <nav className="md:flex flex-wrap justify-between md:items-center bg-gray-950 md:px-8 text-blue-700 text-lg">
      
        <span className="flex font-bold text-white hover:text-blue-700 transition-all duration-700 gap-2 tracking-wide text-3xl md:bg-transparent">
       <SiWondersharefilmora size={34} color="blue"/>Movie Pop
       </span>
             
      <ul className="md:flex ml-64 h-32 justify-items-center items-center md:border-none hidden gap-2 rounded-xl capitalize">
          
            <Link href={'/'}>
            <li className="hover:text-gray-300 text-md w-auto rounded-md hover:bg-orange-700 transition-all duration-700 p-1">home</li>
            </Link>

            <Link href={'/movies'}>
            <li className="hover:text-gray-300 text-md w-auto rounded-md hover:bg-orange-700 transition-all duration-700 p-1">movies</li>
            </Link>

            <Link href={'/about'}>
            <li className="hover:text-gray-300 text-md w-auto rounded-md hover:bg-orange-700 transition-all duration-700 p-1">about</li>
            </Link>

            <Link href={'/contact'}>
            <li className="hover:text-gray-300 text-md w-auto rounded-md hover:bg-orange-700 transition-all duration-700 p-1">contact</li>
            </Link>

            <Link href={'/more'}>
            <li className="hover:text-gray-300 text-blue-950 text-md transition-all bg-blue-700 duration-700 md:rounded-md p-1">more+</li>
            </Link>

          </ul>

          <Link href={'/wishes'}>
            <li className="flex capitalize justify-items-end md:items-center hover:text-red-600 ml-80 text-white gap-1 text-xs">My Favourites<MdFavorite size={30} color="Red"/> {val}</li>
            </Link>
      

        <MobileNav />
    </nav>
  )
}
