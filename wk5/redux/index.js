const redux = require("redux")
const { combineReducers, createStore } = redux
const {moviesReducer} = require("./movies")
const {tvReducer} = require("./tvshows")

const rootReducer = combineReducers({
    movies: moviesReducer,
    tvshows: tvReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store