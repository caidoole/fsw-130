import React from 'react'
import { useSelector } from "react-redux"
import { userLogin } from '../reducers/userReducer'
import Form from "../components/Form"

function Home() {
    const user = useSelector(user => user)
    return (
        <div>
            <br/>
            <h1>welcome, {user}
            <Form userLogin={userLogin} />
            </h1>
            <br/>
            <h1> to a place to find more of the who you bring to the world.</h1>
        </div>
    )
}

export default Home