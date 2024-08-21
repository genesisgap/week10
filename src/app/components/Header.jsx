import React from 'react'

export default function Header() {
  return (
    <div className='grid md:grid-cols-6 md:grid-flow-row-[300px_300px_300px] grid-cols-1 grid-rows-[200px_200px_200px]'>
        <div className='bg-[url(/quark-studio.jpeg)] bg-cover md:col-span-4 md:row-span-3'></div>
        <div className='bg-[url(/elio.jpeg)] md:grid-flow-row-[100px_100px_100px] bg-cover md:row-span-2 md:col-span-2'></div>
        <div className='bg-[url(/young.jpeg)] bg-cover md:row-span-1 md:col-span-1'></div>
        <div className='bg-[url(/legend.jpeg)] bg-cover md:row-span-1 md:col-span-1'></div>
    </div>
  )
}
