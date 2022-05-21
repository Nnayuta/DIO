import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        });
    }

    decrement = () => {
        const { count } = this.state;
        this.setState({
            count: count - 1
        });
    }

    render() {
        const { render } = this.props
        const { count } = this.state;

        return (
            <div>
                {
                    render({
                        decrement: this.decrement,
                        increment: this.increment,
                        count
                    })
                }
            </div>
        );
    }
}

                export default Counter;
