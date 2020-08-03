import React, { Component } from "react"
const ThemeContext = React.createContext()

class ThemeProvider extends Component {
    constructor() {
        super()
        this.state = {
            theme: 'light',
        }
    }

    toggleTheme = (newTheme) => {
        this.setState({
            theme: newTheme,
        })
    }
    render() {
        return (
            <ThemeContext.Provider
                value={{
                    ...this.state,
                    toggleTheme: this.toggleTheme,
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider

export const withTheme = C => props => (
    <ThemeContext.Consumer>
        {value => <C{...props}{...value} />}
    </ThemeContext.Consumer>
)
