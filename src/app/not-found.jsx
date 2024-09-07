import React from 'react'

export default function NotFound() {
  return (
    <div className='bg-slate-950 h-screen flex flex-col items-center justify-center text-white uppercase font-bold'>
    <h1 className='mb-4 text-cyan-500'>404:</h1>
    <h1 className='text-5xl capitalize'>oh sorry... page not available!</h1>
    <p className='text-2xl text-cyan-500 mt-4'>The page you are looking for does not exist.</p>
    <a href="/" className="text-gray-400 hover:text-gray-300 mx-2">
    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-8'>
      Go Back Home
    </button>
    </a>
  </div>
  )
}