"use client"
import { movies } from "../data"
import Link from "next/link"
import MovieCard from "../components/MovieCard"
import {IoMdSearch} from 'react-icons/io'
import { useState } from "react"

export default function MoviePage() {
  const [searchMovie, setSearchMovie] = useState('')
  
  function filterSearch(e){
    setSearchMovie(e.target.value)
  }

  const filterLists = movies.filter(movie => String(movie.Title).toLowerCase().includes
  (searchMovie.toLowerCase()) || String(movies.Type).toLowerCase().includes
  (searchMovie.toLowerCase() ))
  
  const cards = filterLists.length == 0 ?(
    <h1>Sorry, search item does not exist</h1>
  ) : filterLists.map((card,index) => (
    <section key={index}>
    <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer'>
    <MovieCard title={card.Title} kind={card.Kind} type={card.Type} run={card.Runtime} gen={card.Genre} release={card.ReleaseDate} rate ={card.Rating}/>
    </Link>

  </section>
  ))
    return (
      <>
    <div className="flex items-center justify-between p-2 border-2 w-full rounded-full mt-2 border-slate-950 m-auto">
    <input type="text" name="search" id="search" className="outline-none block mt-2 w-1/2 text-red-700 text-1xl" placeholder="    Search For More Movies Here.." defaultValue={searchMovie}
    onChange={(e)=>filterSearch(e)}/>
    <IoMdSearch className="text-2xl text-red-700"/>
  </div>
  <div className=" bg-black h-auto grid grid-cols-5 bg gap-4 mt-2 px-16 py-32 capitalize">
    {cards}
  </div>
  </>
  )
}
