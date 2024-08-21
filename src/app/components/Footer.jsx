import React from 'react'

export default function Footer() {
  return (
   <footer className='h-20 bg-slate-950 flex items-center justify-center text-white'>
    <p className='text-gray-500 hover:text-green-500'> Copyrights &copy; Movie Planets {(new Date().getFullYear())}</p>
   </footer>
  )
}
