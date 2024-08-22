
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleMovie = ({ fetchMoviesById }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log();
    if(!localStorage.getItem('movie') || (JSON.parse(localStorage.getItem('movie'))).imdbID !== movieId){
      fetchMoviesById(movieId).then((data) => {
        setMovie(data);
        localStorage.setItem('movie',JSON.stringify(data) )
      });
    }
  else
      setMovie(JSON.parse(localStorage.getItem('movie')))
  }, []);
  
  
  return (
    <div>
      <Link to="/">
        <button>Back To Main</button>
      </Link>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <h2>{movie.Plot}</h2>
      </div>
    </div>
  );
};

export default SingleMovie;
