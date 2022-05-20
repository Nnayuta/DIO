import React, { Component } from "react";
import Twitter from "./Twitter";

class App extends Component {
  render() {
    const posts = [
      {
        id: 1,
        title: "Post 1",
        body: "This is the body of post 1"
      },
      {
        id: 2,
        title: "Post 2",
        body: "This is the body of post 2"
      },
    ];

    return (
      <Twitter posts={posts} />
    )
  }
}

export default App;