function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

function deleteMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

function getMovies() {
    return {
        type: "GET_MOVIES"
    }
}

function moviesReducer(movies = [], action) {
    switch (action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload]

        case "REMOVE_MOVIE":
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr

        case "GET_MOVIES":
            return movies

        default:
            return movies
    }
}

module.exports.addMovie = addMovie
module.exports.deleteMovie = deleteMovie
module.exports.getMovies = getMovies
module.exports.moviesReducer = moviesReducer