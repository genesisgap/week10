"use client";

import { useContext } from 'react';
import { SidebarContext } from '../providers';
import Image from 'next/image';

export default function WishesPage() {
  const { movieItem, setMovieItem } = useContext(SidebarContext);

  // Function to remove a movie from the wishlist
  const handleDelete = (title) => {
    const updatedMovies = movieItem.filter((movie) => movie.title !== title);
    setMovieItem(updatedMovies);
  };

  return (
    <div className="capitalize px-6 py-10">
      {movieItem.length === 0 ? (
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-500">Your Wishlist is empty</h2>
          <p className="text-4x1 text-gray-900 font-bold mt-4">Add movies to your wishlist to see them here..</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl m-auto text-left bg-gray-900 text-white rounded-md shadow-lg">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Epilogue</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {movieItem.map((movie, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="p-4">
                    <Image
                      src={`/mv/${movie.title.split(' ').join('')}.jpeg`}
                      alt={movie.title}
                      title={movie.title}
                      width={150}
                      height={200}
                      className="rounded-md"
                    />
                  </td>
                  <td className="p-4">{movie.title}</td>
                  <td className="p-4">{movie.epi}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(movie.title)}
                      className="text-blue-700 bg-black rounded-md w-fit p-2 hover:text-red-700 font-bold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
