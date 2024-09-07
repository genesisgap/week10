import React from 'react'

export default function Header() {
  return (
    
    <div className="grid bg-slate-950 md:grid-cols-6 grid-cols-1 grid-rows-[300px_300px_300px] gap-4 p-4">
    {/* Main Cover Image */}
      <div className="bg-[url(/coverpicture.jpg)] bg-cover bg-center rounded-lg shadow-lg md:col-span-6 md:row-span-2 relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:bg-opacity-0"></div>
      <p className='text-blue-700 capitalize my-80 bg-black text-left w-fit font-extrabold py-4 text-7xl'>welcome to the world of movies..</p>
    </div>
  
    {/* Other Images in the Grid */}
    <div className="bg-[url(/elio.jpeg)] bg-cover bg-center rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:bg-opacity-0"></div>
    </div>
  
    <div className="bg-[url(/young.jpeg)] bg-cover bg-center rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:bg-opacity-0"></div>
    </div>
  
    <div className="bg-[url(/legend.jpeg)] bg-cover bg-center rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:bg-opacity-0"></div>
    </div>
  
    <div className="bg-[url(/showwhite.jpeg)] bg-cover bg-center rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:bg-opacity-0"></div>
    </div>
  
    <div className="bg-[url(/jones.jpeg)] bg-cover bg-center rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:bg-opacity-0"></div>
    </div>
  
    <div className="bg-[url(/solo.jpeg)] bg-cover bg-center rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:bg-opacity-0"></div>
    </div>
  </div>
  
    
  )
}
