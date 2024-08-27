import React from 'react'

export default function Header() {
  return (
    <div className='grid md:grid-cols-6 md:grid-flow-row-[300px_300px_300px] grid-cols-2 grid-rows-[200px_200px_200px]'>
        <div className='bg-[url(/nathan.jpeg)] bg-cover md:col-span-4 md:row-span-3'></div>
        <div className='bg-[url(/elio.jpeg)] bg-cover md:row-span-2 md:col-span-2'></div>
        <div className='bg-[url(/young.jpeg)] bg-cover'></div>
        <div className='bg-[url(/legend.jpeg)] bg-cover'></div>
    </div>
  )
}
