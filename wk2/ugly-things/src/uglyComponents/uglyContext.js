import React, { Component } from "react"
import uuid from "react-uuid"
const { Provider, Consumer } = React.createContext()

class UglyContextProvider extends Component {
    state = {
        uglyThings: [
            {
                id: uuid(),
                title: 'Happy Fish',
                url: "http://4.bp.blogspot.com/-jeIDeGVXuzU/TbJoGJ2LnuI/AAAAAAAAAo0/JZxVsWMSU-k/s1600/ugly%2Bfish.jpg",
                description: 'Eep',
                isEditable: false,
                comments: [
                    {
                        id: uuid(),
                        text: "Scary!"
                    },
                    {
                        id: uuid(),
                        text: "OMG!"
                    }
                ]
            }
        ]
    }

    addUglyThing = (newUgly) => {
        this.setState({ uglyThings: [ newUgly, ...this.state.uglyThings] })
    }

    deleteUglyThing = (uglyCardId) => {
        let tempUglies = this.state.uglyThings
        const index = tempUglies.findIndex(element => element.id === uglyCardId)
        tempUglies.splice(index, 1);
        this.setState({ uglyThings: tempUglies })
    }

    editUglyThing = (updates) => {

        let tempUglies = this.state.uglyThings
        const index = tempUglies.findIndex(element => element.id === updates.id)
        tempUglies[index] = updates
        this.setState({ uglyThings: tempUglies })

    }

    setEditable = (uglyCardId) => {
        let tempUglies = this.state.uglyThings
        const index = tempUglies.findIndex(element => element.id === uglyCardId)
        if (tempUglies[index].isEditable === undefined || tempUglies[index].isEditable === false) {
            tempUglies[index] = { ...tempUglies[index], isEditable: true }
        } else {
            tempUglies[index] = { ...tempUglies[index], isEditable: false }
        }
        this.setState({ uglyThings: tempUglies })
    }

    addComment = (newComment, uglyCardId) => {
        let tempUglies = this.state.uglyThings
        const index = tempUglies.findIndex(element => element.id === uglyCardId)
        tempUglies[index].comments = [...tempUglies[index].comments, newComment]
        this.setState({ uglyThings: tempUglies })
    }

    deleteComment = (commentId, uglyCardId) => {
        let tempUglies = this.state.uglyThings
        const index = tempUglies.findIndex(element => element.id === uglyCardId)
        const commentIndex = tempUglies[index].comments.findIndex(element => element.id === commentId)
        tempUglies[index].comments.splice(commentIndex, 1);
        this.setState({ uglyThings: tempUglies })
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                addUglyThing: this.addUglyThing,
                addComment: this.addComment,
                deleteUglyThing: this.deleteUglyThing,
                editUglyThing: this.editUglyThing,
                setEditable: this.setEditable,
                deleteComment: this.deleteComment
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export { UglyContextProvider, Consumer as UglyContextConsumer }