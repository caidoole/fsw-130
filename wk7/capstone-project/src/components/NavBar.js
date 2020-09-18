import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/pronouns'> Pronouns</Link>
            <Link className='link' to='/sexualities'>Sexualities</Link>
            <Link className='link' to='/genderIdentities'>Gender Identities</Link>
        </div>
    )
}

export default NavBar