
import React, { useState } from "react"
import Button from "./Button"

function MovieForm(props) {
    const initInputs = {
        title: '',
        genre: '',
        year: ''
    }
    const [inputs, setInputs] = useState(initInputs)


    function handleChange(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addMovie(inputs)
        setInputs(initInputs)
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    className='form-input'
                    type="text"
                    value={inputs.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Enter movie title..."
                />
                <br />
                <input
                    className='form-input'
                    type="text"
                    value={inputs.genre}
                    onChange={handleChange}
                    name="genre"
                    placeholder="Enter genre..." />

                <br />
                <input
                    className='form-input'
                    type="number"
                    value={inputs.year}
                    onChange={handleChange}
                    name="year"
                    placeholder="Year"
                />
                <br />
                <Button type="submit" description="Add Movie" />
            </form>
        </div>
    )
}
export default MovieForm