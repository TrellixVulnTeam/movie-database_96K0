import React from "react";
import { useState, useEffect } from "react";
import { Container, Movie, MovieList } from "./styles";
import { APIKey } from "../../config/key";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const poster_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={`${poster_path}${movie.poster_path}`} alt="up" />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
