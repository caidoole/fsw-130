const redux = require("redux")

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {
    contacts: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case "REMOVE_CONTACT":
            let updatedArray = state.contacts.filter(contact => contact._id !== action.payload._id)
            return {
                ...state,
                contacts: updatedArray
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({"_id":"0001","firstname": "Kara", "lastname":"Danvers", "phone": "555.555.5525", "email":"supergirl@supernerds.com"}))
store.dispatch(addContact({"_id":"0002","firstname": "Alex", "lastname":"Danvers", "phone": "555.555.5535", "email":"alex@supernerds.com"}))
store.dispatch(addContact({"_id":"0003","firstname": "Hank", "lastname":"Henshaw", "phone": "555.555.5545", "email":"jonnjonzz@supernerds.com"}))
store.dispatch(addContact({"_id":"0004","firstname": "Mike", "lastname":"Matthews", "phone": "555.555.5555", "email":"mon-el@supernerds.com"}))
store.dispatch(addContact({"_id":"0005","firstname": "James", "lastname":"Olsen", "phone": "555.555.5565", "email":"guardian@supernerds.com"}))

store.dispatch(removeContact({"_id":"0002"}))
store.dispatch(removeContact({"_id":"0003"}))

store.dispatch(addContact({"_id":"0006","firstname": "Lena", "lastname":"Luthor", "phone": "555.555.5565", "email":"lena@supernerds.com"}))




