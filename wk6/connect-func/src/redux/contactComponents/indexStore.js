import {createStore} from "redux"

export function addContact(contact) {
    console.log(contact)
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

export function removeContact(id) {
    return {
        type: "REMOVE_CONTACT",
        payload: id
    }
}

function reducer(contacts = [], action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...contacts, action.payload]
        
        case "REMOVE_CONTACT":
            let updatedArray = contacts.filter(contact => contact.id !== action.payload)
            return updatedArray
        default:
            return contacts
    }
}

const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store