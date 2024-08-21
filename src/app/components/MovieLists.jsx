import React from 'react'
import MovieCard from './MovieCard'
import { movies } from '../data'
import Link from 'next/link'

export default function MovieLists() {

    const cards = movies.sort((x,y) =>y.Rating - x.Rating).map((card,index) => (
        <section key={index}>
          <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer'>
          <MovieCard title={card.Title} type={card.Type} run={card.Runtime} gen={card.Genre} release={card.ReleaseDate} rate ={card.Rating}/>
          </Link>

        </section>
    )).slice(0,30)

  return (
    <>
    <div className='grid grid-cols-5 gap-4 px-16 py-32 capitalize items-right bg-slate-900 text-white'>
      {cards}
       
    </div>
    </>
  )
}
