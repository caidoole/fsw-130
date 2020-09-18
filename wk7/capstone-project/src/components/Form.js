import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = ({ userLogin }) => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState("")

    function handleChange(e) {
        const { value } = e.target
        setUsername(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(userLogin(username))
        setUsername("")
    }

    return (
        <div className="main">
           
            <form className="mainForm" name="form" onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                    required />
                <br />
                <div>
                    <button type="submit"> Login </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
