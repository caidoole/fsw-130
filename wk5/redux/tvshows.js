function addTvShow(tvshow) {
    return {
        type: "ADD_TV_SHOW",
        payload: tvshow
    }
}

function deleteTvShow(tvshow) {
    return {
        type: "REMOVE_TV_SHOW",
        payload: tvshow
    }
}

function getTvShows() {
    return {
        type: "GET_TV_SHOWS"
    }
}

function tvReducer(tvshows = [], action) {
    switch (action.type) {
        case "ADD_TV_SHOW":
            return [...tvshows, action.payload]

        case "REMOVE_TV_SHOW":
            const updatedArr = tvshows.filter(tvshow => tvshow.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr

        case "GET_TV_SHOWS":
            return tvshows

        default:
            return tvshows
    }
}

module.exports.addTvShow = addTvShow
module.exports.deleteTvShow = deleteTvShow
module.exports.getTvShows = getTvShows
module.exports.tvReducer = tvReducer