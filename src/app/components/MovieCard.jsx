import Image from 'next/image';
import React from 'react';
import { Rating } from '@mui/material';

export default function MovieCard({ title, type, rate, run, release, gen, kind }) {
  return (
    <div className="flex flex-col items-center h-auto bg-gray-950 gap-0 mx-auto justify-items-start px-2 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-full">
   
      <div className="relative w-full h-72 overflow-hidden bg-black rounded-md shadow-lg">
        <Image 
          src={`/mv/${title.split(' ').join('')}.jpeg`} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out" 
        />
      </div>
      
   
      <div className="text-left mt-4">
        <p><Rating name="half-rating-read hover:text-blue-700" defaultValue={rate} precision={0.5} max={5} readOnly /></p>
        <h1 className="text-lg font-semibold text-blue-700 hover:text-orange-700 mt-4">{title}</h1>
        <p className="text-gray-500 hover:text-blue-700 text-2x1 mt-0">{type}</p>
        <p className="text-gray-500 hover:text-blue-700 text-2x1 mt-0">{kind}</p>
        <p className="text-gray-500 hover:text-blue-700 text-1xl mt-1">{release}</p>
        <p className="text-gray-500 hover:text-blue-700 mt-0 cursor-pointer">{gen}</p>
        <p className="text-gray-500 hover:text-blue-700 mt-0">{parseInt(run / 60)}hr{parseInt(run / 60) > 1 ? 's ' : ' '}{run % 60}min</p>
      </div>
    </div>
  );
}
