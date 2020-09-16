import React from "react"

function Movie(props) {

    return (
        <div className='movie'>
            <h3>Title: {props.title}</h3>
            <h3>Genre: {props.genre}</h3>
            <h3>Year: {props.year}</h3>
        </div>
    )
}
export default Movie