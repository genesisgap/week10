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
    <h1 className="text-2xl justify-center text-center font-bold text-blue-700">Sorry, the search item does not exist..</h1>
  ) : filterLists.map((card,index) => (
    <section key={index}>
    <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer'>
    <MovieCard title={card.Title} kind={card.Kind} type={card.Type} run={card.Runtime} gen={card.Genre} release={card.ReleaseDate} rate ={card.Rating}/>
    </Link>

  </section>
  ))
    return (
      <>
    <div className="flex items-center justify-between p-2 border-2 w-4/12 rounded-full mt-2 border-blue-700 m-auto">
    <input type="text" name="search" id="search" className="outline-none w-full text-red-700 text-1xl" defaultValue={searchMovie} placeholder="Search here.."
    onChange={(e)=>filterSearch(e)}/>
    <IoMdSearch className="text-2xl text-red-700"/>
  </div>
  <div className="h-auto bg-black grid grid-cols-5 gap-4 mt-2 px-16 py-32 capitalize">
    {cards}
  </div>
  </>
  )
}
