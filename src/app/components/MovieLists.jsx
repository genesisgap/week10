import React from 'react'
import MovieCard from './MovieCard'
import { movies } from '../data'
import Link from 'next/link'

export default function MovieLists() {

    const cards = movies.map((card,index) => (
        <section key={index}>
          <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer'>
          <MovieCard title={card.Title} run={card.Runtime} rate ={card.Rating}/>
          </Link>

        </section>
    )).slice(0,4)

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-0 bg-black text-white">
 
  {cards}

    <div className='flex items-center justify-center ml-96 pl-36 w-full'>
    <Link href={'/movies'} className="flex items-center py-4 mt-0 justify-center col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4">
    <span className="bg-gray-900 hover:bg-blue-700 mt-0 text-white rounded-md px-4 py-2 text-center capitalize transition-colors duration-300 ease-in-out">
      See more movies.</span></Link>

    </div>
  

</div>

    </>
  )
}
