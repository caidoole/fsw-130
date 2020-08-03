import React, { useState } from 'react'
import { withTheme } from "../context/ThemeProvider"
import '../Theme.css';

const ThemeButton = ({ theme, toggleTheme }) => {
    const [currentTheme, setCurrentTheme] = useState(theme);

    const handleChange = (event) => {
        setCurrentTheme(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        toggleTheme(currentTheme)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                <h2> Pick your theme: </h2>
                <select value={currentTheme} onChange={handleChange} >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="neon">Neon</option>
                    <option value='pastel'>Pastel</option>
                    <option value='knight'>Knight</option>
                </select>
            </label>
            <button className='submitButton'>Submit</button>
        </form>
    )
}

export default withTheme(ThemeButton)