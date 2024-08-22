import React from 'react';
import "./movie.css";
import MovieItem from './MovieItem';
const MovieList = ({moviesArr}) => {
  return (
    <div className="row">
      {
        moviesArr?.map(movie=> (
            <MovieItem key={movie.imdbID}  movie={movie}/>
        ))}
    </div>
  )
}
export default MovieList