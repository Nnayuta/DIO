import React, { Component } from "react";

class Twitter extends Component {

    componentDidMount() {
        const { posts } = this.props;
        console.log("componentWillMount", posts);
    }

    render() {
        const { posts } = this.props;
        return (
            <>
                {posts.title}
            </>
        )
    }
}

export default Twitter;