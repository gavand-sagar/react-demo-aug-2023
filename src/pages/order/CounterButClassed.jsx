import React, { Component } from 'react'

export default class CounterButClassed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    increment = () => {
        if (this.state.value < this.props.limit) {
            this.setState({ value: this.state.value + 1 })
        }
    }

    decrement = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 })
        }
    }

    render() {
        return (
            <fieldset>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.value}</span>
                <button onClick={this.increment}>+</button>
            </fieldset>
        )
    }
}


