import React, { useState } from "react";
import "./MovieList.css";

const MovieList = () => {
  const movies = [
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { title: "Forrest Gump", genre: "Drama", releaseYear: 1994 },
    { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
    { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  const uniqueGenres = [
    "All Genres",
    ...new Set(movies.map((movie) => movie.genre)),
  ];

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <select onChange={handleGenreChange} value={selectedGenre}>
        {uniqueGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
