"use client"
import { useContext, useMemo } from "react";
import { movies } from "@/app/data";
import { Roboto } from "next/font/google";
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import { SidebarContext } from "@/app/providers";

const robo = Roboto({ subsets: ["latin"], weight: ['400'] });

export default function MovieDetails({ params }) {
  const { setVal, movieItem, setMovieItem } = useContext(SidebarContext);


  const details = movies.find(movie => movie.Title.split(' ').join('-') === params.id);

 
  const relatedMovies = useMemo(() => 
    movies.filter(card => card.Type === details.Type && details.Title !== card.Title), 
    [details.Type, details.Title]
  );

  const relatedCard = useMemo(() => relatedMovies.map((card, index) => (
      <Link 
        href={`/movies/${card.Title.split(' ').join('-')}`} 
        title={card.Title} 
        className="cursor-pointer" 
        key={index}
      >
        <MovieCard 
          title={card.Title} 
          kind={card.Kind} 
          type={card.Type} 
          run={card.Runtime} 
          gen={card.Genre} 
          release={card.ReleaseDate} 
          epi={card.Epilogue} 
          rate={card.Rating} 
        />
      </Link>
    )), 
    [relatedMovies]
  );

 
  if (!details) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl text-red-500">Movie not found.</p>
        <Link href="/movies">
          <button className="bg-slate-800 text-white p-3 rounded-md mt-4 hover:bg-slate-700">
            Go Back to Movies
          </button>
        </Link>
      </div>
    );
  }

  function handleMovieAdd() {
    setVal(prev => prev + 1);
    setMovieItem([...movieItem, { title: details.Title, epi: details.Epilogue, type: details.Type }]);
  }

  return (
    <div className="px-6 md:px-16 py-8">
  
      <h1 className={`${robo.className} text-center font-extrabold text-4xl md:text-6xl bg-gray-800 text-white py-4 rounded-md`}>
        {details.Title}
      </h1>

   
      <div className="text-center text-lg md:text-2xl py-4">
        <p className="text-gray-800 italic py-1">{details.Epilogue}</p>
        <div className="py-2 text-gray-800">
          <p><strong>Type:</strong> {details.Type}</p>
          <p><strong>Kind:</strong> {details.Kind}</p>
          <p><strong>Rating:</strong> {details.Rating}/5</p>
          <p><strong>Runtime:</strong> {Math.floor(details.Runtime / 60)} hr {details.Runtime % 60} min</p>
          <p><strong>Release Date:</strong> {details.ReleaseDate}</p>
          <p><strong>Genre:</strong> {details.Genre}</p>
          <p><strong>Cast:</strong> {details.Cast.join(", ")}</p>
        </div>
      </div>

   
      <div className="text-center py-6">
        <button 
          onClick={handleMovieAdd} 
          className="bg-slate-900 text-slate-50 p-3 rounded-md hover:bg-slate-700 transition-all">
          Add Movie
        </button>
      </div>


      <div>
        <h2 className="text-center bg-gray-700 text-white text-2xl py-2 font-bold rounded-md">
          Related Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-6">
          {relatedCard}
        </div>
      </div>
    </div>
  );
}
