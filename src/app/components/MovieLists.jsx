import React from 'react'
import MovieCard from './MovieCard'
import { movies } from '../data'
import Link from 'next/link'

export default function MovieLists() {

    const cards = movies.map((card,index) => (
        <section key={index}>
          <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer'>
          <MovieCard title={card.Title} type={card.Type} kind={card.Kind} run={card.Runtime} gen={card.Genre} release={card.ReleaseDate} rate ={card.Rating}/>
          </Link>

        </section>
    )).slice(0,4)

  return (
    <>
    <div className='grid grid-cols-4  gap-4 px-16 py-24 capitalize items-right bg-black text-white'>
      {cards}
       
    </div>
    <Link href={'/movies'} className='flex items-center w-fit rounded-md bg-black justify-center my-0'>
    <span className='bg-orange-950 text-white capitalize p-2'>see more..</span>
      </Link>
    </>
  )
}
