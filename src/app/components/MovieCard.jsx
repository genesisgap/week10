import Image from 'next/image'
import React from 'react'

export default function MovieCard({title,type,rate,run,release,gen}) {
  return (
    <div className='flex flex-col items-center '>
        <Image src={`/mv/${title.split(' ').join('')}.jpeg`} alt={title} width={'300'} height={'500'} className='rounded-md' />
        <p className='text-red-500'>{rate}</p>
        <h1 className='text-lg text-fuchsia-600'>{title}</h1>
        <p className='text-yellow-500'>{type}</p>
        <p className='text-green-600'>{release}</p>
        <p className='text-gray-500 hover:text-fuchsia-500 justify-center items-center'>{gen}</p>
        <p className='text-blue-700 hover:text-yellow-500'>{parseInt(run/60)}hr{parseInt(run/60)>1?"s" : ""}{run%60}min</p>
    </div>
  )
}
