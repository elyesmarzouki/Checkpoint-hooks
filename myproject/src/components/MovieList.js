import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, searchRate, searchTitle }) {
return (
    <div id="list">
    {movies
        .filter(
        (movie) => movie.rate >= searchRate &&
            movie.title.toLowerCase().includes(searchTitle.toLowerCase())
        )
        .map((element, index) => (
                <MovieCard movie={element} key={index} />
        ))}
    </div>
);
}

export default MovieList;