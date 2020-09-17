import React from "react"
import Contact from "./Contact"

function ContactList(props) {
    const contactData = props.contacts.map(contact => (
        <Contact
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            email={contact.email}
            removeContact={props.removeContact}
        />
    ))
    return (
        <div className='contactList'>
            <h1>Contacts:</h1>
           {contactData} 
        </div>
    )
}
export default ContactList