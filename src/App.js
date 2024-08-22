import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Routes,
  json,
} from "react-router-dom";
import "./App.css";

import Header from "./features/layout/Header";

// import UserList from './features/user/UserList';
// import users from './users';
import MovieList from "./features/movie/MovieList";
// import Counter from './features/counter/Counter';

import SingleMovie from "./features/movie/SingleMovie";
import axios from "axios";

const App = () => {
  const [moviesArr, setMoviesArr] = useState([]);

  const searchMovie = (movieToSearch) => {
    console.log(movieToSearch);

    fetchMovies(movieToSearch).then((movies) => {
      setMoviesArr(movies);
      localStorage.setItem("movies", JSON.stringify(movies));
    });
  };

  const fetchMovies = async (movieToSearch = "red") => {
    const url = `https://omdbapi.com/?s=${movieToSearch}&apikey=30e38776`;
    const { data } = await axios.get(url);
    return data.Search;
  };
  const fetchMoviesById = async (movieId) => {
    const url = `https://omdbapi.com/?i=${movieId}&apikey=30e38776`;
    const { data } = await axios.get(url);
    return data;
  };

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setMoviesArr(movies);
    } else fetchMovies().then((data) => setMoviesArr(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header searchMovie={searchMovie} />
        <main className="container">
          <Routes>
            <Route path="/" element={<MovieList moviesArr={moviesArr} />} />
            <Route
              path="/:movieId"
              element={
                <SingleMovie
                  moviesArr={moviesArr}
                  fetchMoviesById={fetchMoviesById}
                />
              }
            />
          </Routes>
          {/* <MovieList moviesArr={moviesArr} /> */}
          {/* <SingleMovie /> */}

          {/* <UserList users={users} /> */}
          {/* <Counter /> */}
        </main>
      </div>
    </BrowserRouter>
  );
};

// {
//   "Title": "The Monkey King",
//   "Year": "2023",
//   "imdbID": "tt8637498",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNWZhZjUxZGUtMzM1OC00MjdmLWIzZjUtZTUzODc2ZTI2YzQzXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg"
// }
export default App;
