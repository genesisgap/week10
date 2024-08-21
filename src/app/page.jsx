import Image from "next/image";

import MovieLists from "./components/MovieLists";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <div className='flex justify-around capitalize hover:text-green-500 font-bold items-center h-36 bg-slate-900 text-9xl text-fuchsia-700'>
      The Movie Planet
    </div>
        <Header />
        <MovieLists />
    </>

   
  )
}
