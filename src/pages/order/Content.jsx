import React, { Component } from 'react'

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "Sagar"
        }
    }

    myClick = () => {
        this.setState({ value: "Praveen" })
    }

    componentDidMount() {
        // useEffect()
        //onload
    }

    componentWillUnmount(){
        // before destroy
    }

    componentDidUpdate(){
        // after every state changed
    }

    render() {
        return (
            <div>
                Content- {this.state.value}
                <div>
                    <button onClick={this.myClick}>Click me</button>
                </div>
            </div>
        )
    }
}


