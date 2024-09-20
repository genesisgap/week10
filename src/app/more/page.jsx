import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function MorePage() {
  const movies = [
    {
      id: 1,
      title: 'Elio',
      genre: 'Sci-Fi',
      slug: 'elio',
      width: 300,
      height: 450,
      youtubeUrl: 'https://www.youtube.com/watch?v=trailer_elio', 
      image: '/elio.jpeg', // Add this line
    },
    {
      id: 2,
      title: 'Young Woman And The Sea',
      genre: 'Crime',
      slug: 'young-woman-and-the-sea',
      image: '/young.jpeg',
      width: 300,
      height: 450,
      youtubeUrl: 'https://www.youtube.com/watch?v=trailer_young',
    },
    {
      id: 3,
      title: 'The Marvels',
      genre: 'Drama',
      slug: 'the-marvels',
      image: '/TheMarvels.jpeg',
      width: 300,
      height: 450,
      youtubeUrl: 'https://www.youtube.com/watch?v=trailer_marvels',
    },
    {
      id: 4,
      title: 'Snow White',
      genre: 'Action',
      slug: 'snow-white',
      image: '/showwhite.jpeg',
      width: 300,
      height: 450,
      youtubeUrl: 'https://www.youtube.com/watch?v=trailer_snowwhite',
    },
    {
      id: 5,
      title: 'Indiana Jones',
      genre: 'Sci-Fi',
      slug: 'indiana-jones',
      image: '/jones.jpeg',
      width: 300,
      height: 450,
      youtubeUrl: 'https://www.youtube.com/watch?v=trailer_jones',
    },
    {
      id: 6,
      title: 'Solo',
      genre: 'Sci-Fi',
      slug: 'solo',
      image: '/solo.jpeg',
      width: 300,
      height: 450,
      youtubeUrl: 'https://www.youtube.com/watch?v=trailer_solo',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-lightblue to-blue-500 min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
        More Reviews by Author Favorites or Genre
      </h1>
      <p className="text-lg md:text-xl text-white max-w-3xl text-center leading-relaxed mb-12">
        Discover some of the greatest movies across various genres, handpicked just for you. Click on any movie to dive deeper into the review.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.slug}`}>
            <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
              {movie.image ? (
                <Image
                  src={movie.image}
                  alt={`${movie.title} Poster`}
                  width={movie.width} 
                  height={movie.height}
                  className="w-full h-auto object-cover rounded-lg mb-4"  
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/300x450`}
                  alt={`${movie.title} Poster`}
                  width={movie.width} 
                  height={movie.height}
                  className="w-full h-auto object-cover rounded-lg mb-4"  
                />
              )}
              <h2 className="text-2xl text-white font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-300">Genre: {movie.genre}</p>

              <a
                href={movie.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2 block text-sm hover:underline"
              >
                Watch Trailer on YouTube
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}