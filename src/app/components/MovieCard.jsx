import Image from 'next/image';
import React from 'react';
import { Rating } from '@mui/material';

export default function MovieCard({ title, type, rate, run, release, gen, kind }) {
  return (
    <div className="flex flex-col items-center bg-gray-900 p-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-full max-w-xs mx-auto">
      {/* Movie Image */}
      <div className="relative w-full h-72 overflow-hidden rounded-md shadow-lg">
        <Image 
          src={`/mv/${title.split(' ').join('')}.jpeg`} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out" 
        />
      </div>
      
      {/* Movie Details */}
      <div className="text-left mt-4">
        <p>
          <Rating name="half-rating-read " defaultValue={rate} precision={0.5} max={5} readOnly />
        </p>
        <h1 className="text-lg font-semibold text-gray-500 hover:text-blue-700 mt-2">{title}</h1>
        <p className="text-gray-500 text-sm mt-1">{type}</p>
        <p className="text-gray-500 text-sm">{kind}</p>
        <p className="text-gray-500 text-sm mt-1">{release}</p>
        <p className="text-gray-500 hover:text-blue-700 mt-1 cursor-pointer">{gen}</p>
        <p className="text-gray-500 hover:text-blue-700 mt-2">
          {parseInt(run / 60)}hr{parseInt(run / 60) > 1 ? 's ' : ' '}
          {run % 60}min
        </p>
      </div>
    </div>
  );
}
