import React from 'react';
import {Link} from "react-router-dom"

const MovieItem = ({movie})=>{ 
return(<Link to={`/${movie.imdbID}`} className="card">
        <div  >
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <h3>{movie.Year}</h3>
          </div>
          </Link>
          )
          }

export default MovieItem