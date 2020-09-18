export function userLogin(user) {
    return {
        type: "USER_LOGIN",
        payload: user
    }
}

function userReducer(user = "Please Log In", action) {
    switch (action.type) {
        case "USER_LOGIN":
            return action.payload
        default:
            return user
    }
}

export default userReducer