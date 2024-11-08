import React from 'react';


export default function MorePage() {
  const movies = [
    {
      id: 0,
      title: 'Captain America',
      image: '/CaptainAmerica.jpeg',
      genres: ['Action', 'Adventure'],
      trailer: 'https://www.youtube.com/watch?v=9kUnAzh2KB4'
    },
    {
      id: 1,
      title: 'Elio',
      image: '/elio.jpeg',
      genres: ['Animation', 'Adventure', 'Family'],
      trailer: 'https://www.youtube.com/watch?v=2w_K3CB8PuE'
      
    },
    {
      id: 2,
      title: 'Young Woman And The Sea',
      image: '/young.jpeg',
      genres: ['Adventure', 'Drama'],
      trailer: 'https://www.youtube.com/watch?v=7tNvrYzPUrk'
    },
    {
      id: 3,
      title: 'Solo',
      image: '/solo.jpeg',
      genres: ['Action', 'Adventure', 'Fantasy'],
      trailer: 'https://www.youtube.com/watch?v=jPEYpryMp2s'
    },
    {
      id: 4,
      title: 'Snowwhite',
      image: '/snowwhite.jpeg',
      genres: ['Drama', 'Comedy'],
      trailer: 'https://www.youtube.com/watch?v=TbiPcMCz0Ek'
    },
    {
      id: 5,
      title: 'Luca',
      image: '/luca.jpeg',
      genres: ['Animation', 'Adventure', 'Fantasy'],
      trailer: 'https://www.youtube.com/watch?v=mYfJxlgR2jw'
    },
    {
      id: 7,
      title: 'The Marvels',
      image: '/TheMarvels.jpeg',
      genres: ['Action', 'Adventure'],
      trailer: 'https://www.youtube.com/watch?v=wS_qbDztgVY'
    },
    {
      id: 6,
      title: 'Indiana Jones',
      image: '/jones.jpeg',
      genres: ['Action', 'Adventure'],
      trailer: 'https://www.youtube.com/watch?v=eQfMbSe7F2g'
    },
   
    {
      id: 8,
      title: 'Ant-Man And The Wasp',
      image: '/Ant-ManAndTheWasp.jpeg',
      genres: ['Action', 'Adventure'],
      trailer: 'https://www.youtube.com/watch?v=UUkn-enk2RU'
    }
   
  ];

  return (
    <div className="min-h-screen w-auto bg-black p-8">
      <h1 className="text-6xl font-bold text-center mb-4 text-blue-700">
        More Movies Discovery
      </h1>
      <p className='capitalize font-bold text-2xl text-white text-center mb-8'>Discover some of the greatest movies across various genres, handpicked just for you. <br />  Click on any movie to watch trailers.</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-500">
                Genres: {movie.genres.join(', ')}
              </p>
              <a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-700"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

