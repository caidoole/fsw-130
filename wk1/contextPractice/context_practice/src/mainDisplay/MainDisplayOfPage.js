import React from 'react'
import '../'
import ThemeButton from '../button/ThemeButton'
import { withTheme } from "../context/ThemeProvider"

const MainDisplayOfPage = ({ theme }) => {
    return (
        <div className={`display-${theme}`}>
            <h1>Welcome To Choice</h1>
            <h3>A place to choose your computer identity:</h3>
            <ThemeButton></ThemeButton>
            <img src='https://i.pinimg.com/originals/f7/19/97/f7199725932766cc3cb2fd45c5e3f7b9.jpg' alt='quote' />
        </div>
    )
}

export default withTheme(MainDisplayOfPage)