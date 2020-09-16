import React from "react"
import "./styles.css"
import Header from "./Header"
import MovieForm from "./MovieForm"
import MovieList from "./MovieList"
import { MovieContextConsumer } from "./movieContext"

function App() {
    return (
        <MovieContextConsumer>
            {context => (
                <div className="dark-theme">
                    <Header />
                    <MovieForm
                        addMovie={context.addMovie}
                    />
                    <MovieList
                        movies={context.movies}
                    />
                </div>
            )}
        </MovieContextConsumer>
    )
}

export default App
