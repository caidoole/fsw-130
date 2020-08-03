import React from 'react'
import '../Theme.css'
import { withTheme } from "../context/ThemeProvider"

const NavBar = ({ theme }) => {
  return (
    <div className={`navbar-${theme}`}>
      <p className='navButton'>Home</p>
      <p className='navButton'>About</p>
      <p className='navButton'>Contact Us</p>
    </div>
  )
}
export default withTheme(NavBar) 