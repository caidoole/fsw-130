import React from 'react'
import { useSelector } from "react-redux"


function Sexualities() {
    const user = useSelector(user => user)

    return (
        <div>
            <h1>Here you can test out how it would look to see youself identifying with the spectrum of sexualities</h1>
            <br />
            <ul className='list'>
                <li> {user} is Bisexual </li>
                <li> {user} is Gay </li>
                <li> {user} is Lesbian </li>
                <li> {user} is Heterosexual </li>
                <li> {user} is Pansexual </li>
                <li> {user} is Homofelxible </li>
                <li> {user} is Skoliosexual </li>
                <li> {user} is Panromantic </li>
                <li> {user} is Asexual </li>
                <li> {user} is Demisexual </li>
                <li> {user} is Gray-A </li>
                <li> {user} is Androgynsexual </li>
                <li> {user} is Autosexual </li>
            </ul>
            <br />
            <br />
            <h4>*sub-groups to be added</h4>
            <br />
            <h5>pedophilia is not a sexual orientation it is an illegal act of violance against minor children who can not consent to the harm being done to them mentaly and physically</h5>
        </div>
    )
}
export default Sexualities