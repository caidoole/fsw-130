
import React from "react"
import Movie from "./Movie"

function MovieList(props) {

    const movieData = props.movies.map((movie, index) => (
        <Movie
            key={index}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
        />
    ))
    return (
        <div className='movie-list'>
            <h1>Movies</h1>
            {movieData}
        </div>
    )
}
export default MovieList