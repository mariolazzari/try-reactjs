import React, { Component } from "react";
import PostData from "../data/posts.json";

class App extends Component {
  render() {
    return (
      <div>
        {PostData.map(post => (
          <div>
            <h1 key={post.id}>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
