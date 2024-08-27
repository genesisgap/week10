"use client"
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileNav() {
    const [open, setOpen] = useState(false)
    const [val, setVal] = useState(10)

    function changeVal(){
        setVal(prev => prev + 20)
    }

    function controlNav(){
        setOpen(!open)
}
  return (
    <nav>
        <ul className='flex items-center justify-around md:hidden h-36'>
            <li>Home</li>
            <li onClick={controlNav} className='cursor-pointer'>
                <GiHamburgerMenu />
            </li>
        </ul>

        {open &&
        <ul className="flex flex-col justify-around md:hidden capitalize items-end h-32 pr-24">

            <Link href={'/'}>
            <li className="hover:text-green-500">home</li>
            </Link>

            <Link href={'/movies'}>
            <li className="hover:text-green-500">movies</li>
            </Link>

            <Link href={'/about'}>
            <li className="hover:text-green-500">about us</li>
            </Link>

            <Link href={'/contact'}>
            <li className="hover:text-green-500">contact us</li>
            </Link>

            <Link href={'/more'}>
            <li className="hover:text-green-500">more</li>
            </Link>

            <li>{val}</li>
            <li onClick={changeVal}></li>

        </ul>

}

    </nav>
              
  )
}
