"use client"
import { movies } from "@/app/data";
import { Roboto } from "next/font/google";
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import { SidebarContext } from "@/app/providers";
import { useContext } from "react";

const robo = Roboto({ subsets: ["latin"] , weight: ['400']});

export default function MovieDetails({params}) {
  const {setVal} = useContext(SidebarContext)

  function handleMovieAdd(){
    setVal(prev => prev + 1)
  }

  const details = movies.find(movie => movie.Title.split(' ').join('-') == params.id)

  const relatedMovies = movies.filter((card => card.Type == details.Type && details.Title !== card.Title))

  const relatedCard = relatedMovies.map((card,index) =>
    <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer' key={index}>
    <MovieCard title={card.Title} kind={card.Kind} type={card.Type} run={card.Runtime} gen={card.Genre} release={card.ReleaseDate} rate ={card.Rating}/>
    </Link>
  )

  return (
    <div className="px-16">
        <h1 className={`${robo.className} text-center font-extrabold text-6xl`} style={{paddingBlock: '8px', backgroundColor: 'gray'}}>{details.Title}</h1>
        <p className="text-center text-2xl py-1 ">{details.Epilogue}</p>
        <p>{details.Genre }</p>
        <p>{details.Kind}</p>
        <p>{details.Rating}</p>
        <p>{details.ReleaseDate}</p>
        <p>{details.Type}</p>
        <p>{details.Cast}</p>
        <p>{details.Keywords}</p>
        <p>{details.Runtime}</p>
        <button  
        onClick={handleMovieAdd} className="bg-slate-900 text-slate-50 p-3 rounded-md">add movie      
        </button>

        <div>
          <h2 className="text-center bg-gray-700 text-white text-2xl justify-center font-bold">Related Movies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 py-2 gap-4">

          {relatedCard}
          </div>

        </div>
    </div>
  )
}
