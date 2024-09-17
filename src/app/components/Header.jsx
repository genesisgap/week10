import React from 'react'

export default function Header() {
  return (
    
    <div className="grid bg-black md:grid-cols-6 grid-cols-1 text-blue-700 grid-rows-[300px_300px_300px] gap-4 p-4">
    {/* Main Cover Image */}
      <div className="bg-[url(/coverpicture.jpg)] bg-cover bg-center rounded-lg shadow-lg md:col-span-6 md:row-span-2 relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300  hover:bg-opacity-0"></div>

      <div className='md:w-1/7 md:pt-96'>
        <h1 className='text-3xl md:text-7xl p-2 font-bold bg-black flex-bold capitalize items-center justify-center leading-normal tracking-tighter'>welcome to the world of movie pop..</h1>
        <p className='text-3xl p-2 font-extrabold capitalize text-white tracking-tight'>premium entertainment for your delight.</p>
      </div>

      <button className='bg-orange-700 hover:opacity-85 capitalize hover:scale-105 md:px-4 mx-2 md:py-2 duration-300 mt-0 font-semibold rounded-md text-white'>movie show </button> 
      
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
