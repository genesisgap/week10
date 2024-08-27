import React from 'react'

export default function Footer() {
  return (
   <footer className='h-20 bg-black flex items-center justify-center text-white'>
    <p className='text-gray-500 hover:text-green-500'> Copyrights &copy; Movie Arcade {(new Date().getFullYear())}</p>
   </footer>
  )
}
