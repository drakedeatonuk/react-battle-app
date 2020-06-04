import React from 'react'

export default function withHover (Component, propName='hovering') {     //function that , takes in a Component as an argument
    return class WithHover extends React.Component {        // returning another Component
        constructor(props) {
            super(props)

            this.state = {
                hovering: false,
            }

            this.mouseOver = this.mouseOver.bind(this)
            this.mouseOut = this.mouseOut.bind(this)
        }
        mouseOver() {
            this.setState({
                hovering: true
            })
        }
        mouseOut() {
            this.setState({
                hovering: false
            })
        }
        render() {
            const props = {
                [propName] : this.state.hovering,
                ... this.props
            }

            return (
                <div
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                >
                    <Component {...props} />
                </div>
            )
        }
    }
}