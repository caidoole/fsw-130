import React from 'react'
import { useSelector } from "react-redux"

function Pronouns() {
    const user = useSelector(user => user)
    return (
        <div>
            <h1>While you owe no one an explanation as to why you choose your pronouns,<br/>
            it does help others to know how you prefer to be addressed & refered too
             </h1>
             <br />
            <ul className='list'>
                <li> {user} prefers the pronouns She/her </li>
                <li> {user} prefers the pronouns He/him </li>
                <li> {user} prefers the pronouns They/them </li>
                <li> {user} prefers the pronouns e/ey </li>
                <li> {user} prefers the pronouns per/per</li>
                <li> {user} prefers the pronouns ve/ver </li>
                <li> {user} prefers the pronouns xe/xem</li>
                <li> {user} prefers the pronouns ze/zie</li>
                <li> {user} perfers you use {user} to identify {user}</li>
            </ul>
            <br />
            <h4>*While slightly comprehensive this is in no way a complete list of pronouns that are used* </h4>
        </div>
    )
}
export default Pronouns 