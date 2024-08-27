import { movies } from "@/app/data"

export default function MovieDetails({params}) {
  const details = movies.find(movie => movie.Title.split(' ').join('-') == params.id)
  return (
    <div>
        <h1>{details.Title}</h1>
        <p>{details.Epilogue}</p>
    </div>
  )
}
