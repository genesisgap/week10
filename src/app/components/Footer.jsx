import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io5";
import { SiWondersharefilmora } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-950 h-auto text-white flex flex-wrap items-center justify-between px-6 py-8 md:px-12 md:py-16">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2 text-3xl font-bold hover:text-blue-700 transition-all duration-700">
        <SiWondersharefilmora size={34} color="blue" />
        <span>Movie Pop</span>
      </div>

      <div className="mt-8 md:mt-0 capitalize text-gray-400 hover:text-white">
        <p>Copyright &copy; {new Date().getFullYear()} Movie Pop - All rights reserved. Privacy Policy - Terms of Use - Cookie Policy </p>
        {/* <p className="mt-2">
          <a href="#" className="hover:text-white">Privacy Policy</a> - 
          <a href="#" className="hover:text-white"> Terms of Use</a> - 
          <a href="#" className="hover:text-white"> Cookie Policy</a>
        </p> */}
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6 md:mt-0">
        <a href="https://www.facebook.com/" className="text-gray-500 hover:text-blue-700 transition-all">
          <FaFacebookSquare size={30} />
        </a>
        <a href="https://twitter.com/?lang=en" className="text-gray-500 hover:text-blue-400 transition-all">
          <BsTwitterX size={30} />
        </a>
        <a href="https://www.instagram.com/" className="text-gray-500 hover:text-pink-600 transition-all">
          <SlSocialInstagram size={30} />
        </a>
        <a href="https://www.youtube.com/" className="text-gray-500 hover:text-red-600 transition-all">
          <IoLogoYoutube size={30} />
        </a>
      </div>

      {/* Footer Links (Optional) */}
      {/* Uncomment if you want to include links */}
      {/* <nav className="mt-6 md:mt-0 md:flex space-x-6">
        <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
        <a href="/movies" className="text-gray-400 hover:text-white transition-colors">Movies</a>
        <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
        <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        <a href="/more" className="text-gray-400 hover:text-white transition-colors">More..</a>
      </nav> */}

      {/* Copyright and Policies */}
   
    </footer>
  );
}
