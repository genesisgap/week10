import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";


export default function Footer() {
  return (
<footer className="h-auto bg-gray-950 flex flex-col items-center justify-center text-white px-4 md:px-8">


  <div className="flex mt-8 space-x-8" >
    <a href="https://www.facebook.com/" className=" hover:text-blue-700 mx-2 text-gray-700 text-4xl"><FaFacebookSquare /></a>
    <a href="https://twitter.com/?lang=en" className="text-gray-700 hover:text-white mx-2 text-4xl"><BsTwitterX /></a>
    <a href="https://www.instagram.com/" className="text-gray-700 hover:text-white mx-2 text-4xl"><SlSocialInstagram /></a>
    <a href="https://www.youtube.com/" className="text-gray-700 hover:text-red-600 mx-2 text-4xl"><IoLogoYoutube /></a>
    <a href="https://web.whatsapp.com/" className="text-gray-700 hover:text-green-500 mx-2 text-4xl"><BsWhatsapp /></a>
  </div>
{/* 
  <nav className="flex flex-col md:flex-row bg-opacity-10 bg-blue-900 font-family p-4 rounded-lg shadow-lg mt-4 items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-8">
  <a href="/" className="text-gray-600 hover:text-gray-300  py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-orange-950 hover:underline">Home</a>
  <a href="/movies" className="text-gray-600 hover:text-gray-300  py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-orange-950 hover:underline">Movies</a>
  <a href="/about" className="text-gray-600 hover:text-gray-300  py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-orange-950 hover:underline">About</a>
  <a href="/contact" className="text-gray-600 hover:text-gray-300  py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-orange-950 hover:underline">Contact</a>
  <a href="/more" className="text-gray-600 hover:text-gray-300 py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-orange-950 hover:underline">More..</a>
  </nav> */}

     <p className="text-gray-400 p-12 px-4 py-8 items-end hover:text-white capitalize">
    Copyrights &copy; movie pop {new Date().getFullYear()}  -  private policy.  -  terms of use. - Cookie Policy. - all rights reserved.
      </p>
  
</footer>

  )
}
