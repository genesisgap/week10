"use client"
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useContext } from "react";
import { SidebarContext } from "../providers";
import Image from "next/image";
import { SiWondersharefilmora } from "react-icons/si";
import { GrCart } from "react-icons/gr";


export default function Navbar() {
  const { val } = useContext(SidebarContext)
  return (
    <nav className="bg-gray-950 text-blue-700 text-lg">
             
      <ul className="md:flex h-32 justify-around items-center hidden capitalize">

          
       <div className="flex text-white hover:text-blue-700 gap-2 text-3xl">
       <SiWondersharefilmora size={34} color="blue"/>Movie Pop
       </div>

            <Link href={'/'}>
            <li className="hover:text-gray-300 mr-2">home</li>
            </Link>

            <Link href={'/movies'}>
            <li className="hover:text-gray-300 mr-2">movies</li>
            </Link>

            <Link href={'/about'}>
            <li className="hover:text-gray-300 mr-2">about</li>
            </Link>

            <Link href={'/contact'}>
            <li className="hover:text-gray-300 mr-2">contact</li>
            </Link>

            <Link href={'/more'}>
            <li className="hover:text-gray-300 ">more+</li>
            </Link>

            <Link href={'/wishes'}>
            <li className="hover:text-blue-700 gap-4 flex text-white text-1xl">add to cart<GrCart size={36} color="blue"/> {val}</li>
            </Link>

      </ul>
      

        <MobileNav />
    </nav>
  )
}
