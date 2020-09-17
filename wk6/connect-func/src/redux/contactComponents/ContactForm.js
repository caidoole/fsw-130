import React, { useState } from "react"
import Button from "../components/Button"
import uuid from "react-uuid"

function ContactForm(props) {
    const initInputs = {
        id: uuid(),
        firstName:  '',
        lastName:  '',
        phone: '',
        email: ''
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
        props.addContact(inputs)
        setInputs(initInputs)
    }

    return (
        <div>
            <h1 className='formTitle'> ~  Add NEW Contact  ~ </h1>
            <form className='form' onSubmit={handleSubmit}>
                <label className='labels'>
                    First ~
                 </label>
                <input
                    className='form-input'
                    type="text"
                    value={inputs.firstName}
                    onChange={handleChange}
                    name="firstName"
                    placeholder="First Name"
                />
                <br />
                <label className='labels'>
                    Last ~
                 </label>
                <input
                    className='form-input'
                    type="text"
                    value={inputs.lastName}
                    onChange={handleChange}
                    name="lastName"
                    placeholder="Last Name" />
                <br />
                <label className='labels'>
                    Phone:
                 </label>
                <input
                    className='form-input'
                    type="tel"
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    value={inputs.phone}
                    onChange={handleChange}
                    name="phone"
                    placeholder="555-555-5555"
                />
                <br />
                <label className='labels'>
                    Email:
                 </label>
                <input
                    className='form-input'
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="sample@hoots.com"
                />
                <br />
                <Button type="submit" description="Add" />
            </form>
        </div>
    )
}
export default ContactForm