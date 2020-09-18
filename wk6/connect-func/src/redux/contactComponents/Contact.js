import React from "react"
import Button from '../components/Button'

function Contact(props) {
    return (
        <div className='contactDisplay'>
            <h2> Name:  {props.firstName} {props.lastName}</h2> 
            <h2> Phone: {props.phone}</h2>
            <h2 className='emailDisplay'>Email: {props.email}</h2>
            <Button onClick={() => props.removeContact(props.id)} description="Remove" />
        </div>
    )
}
export default Contact