import React from "react"
import { connect } from "react-redux"
import { addContact, removeContact } from "./redux/contactComponents/indexStore"
import Header from "./redux/components/Header"
import ContactList from "./redux/contactComponents/ContactList"
import ContactForm from "./redux/contactComponents/ContactForm"
import "./styles.css"

function App(props) {
    return (
        <div className='App'>
            <Header />
            <ContactForm addContact={props.addContact} />
            <ContactList contacts={props.contacts} removeContact={props.removeContact} />
        </div>
    )
}

function mapStateToProps(contacts) {
    return {
        contacts: contacts
    }
}

const mapDispatchToProps = {
    addContact: addContact,
    removeContact: removeContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
