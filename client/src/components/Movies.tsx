import React, { useState, useEffect } from "react";

interface Movie {
  MOVIE_NUM: number;
  MOVIE_TITLE: string;
  MOVIE_YEAR: number;
  MOVIE_COST: number;
  MOVIE_GENRE: string;
  PRICE_CODE: string;
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch("http://localhost:5000");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.MOVIE_NUM}>{movie.MOVIE_TITLE}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
