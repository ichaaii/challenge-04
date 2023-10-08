import React from 'react'
import { Link } from "react-router-dom";

const PopularMovieCard = ({movie}) => {
  return (
    <div
          className="ml-4 my-2 border border-slate-400 rounded-xl shadow-md shadow-gray-700 relative"
          key={movie.id}
        >
          <Link to={`/movie/${movie.id}`}>
          <img
            className="w-60 rounded-xl"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          </Link>
          <div className="text-white absolute bottom-0 left-0 w-full text-center py-2 bg-gray-900 bg-opacity-50 rounded-b-xl">
            {movie.title}
          </div>
        </div>
  )
}

export default PopularMovieCard