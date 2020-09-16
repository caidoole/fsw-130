import React, { Component } from "react"
const { Provider, Consumer } = React.createContext()


class MovieContextProvider extends Component {
    state = {
        movies: [
            {
                title: 'Labyrinth',
                genre: 'Fantasy',
                year: 1978
            },
            {
                title: 'Legend',
                genre: 'Fantasy',
                year: 1986
            },

        ]
    }

    addMovie = (newMovie) => {
        this.setState({ movies: [newMovie, ...this.state.movies] })
    }
    render() {
        return (
            <Provider value={{ movies: this.state.movies, addMovie: this.addMovie }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { MovieContextProvider, Consumer as MovieContextConsumer }