import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
        this.setState({ hasError: true });
    }

    render() {
        if (this.props.hasError) {
            return <h1>Algo deu errado.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
