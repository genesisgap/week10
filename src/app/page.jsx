import Image from "next/image";

import MovieLists from "./components/MovieLists";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <div className='flex h-36 bg-black'></div>
        <Header />
        <MovieLists />
    </>

   
  )
}
