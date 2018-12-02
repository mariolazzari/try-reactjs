import React, { Component } from "react";
import PostList from "./posts/PostList";
import ReactYouTube from "./thirdParty/ReactYouTube";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactYouTube videoId={"_nBlN9yp9R8"} />
        <PostList />
      </div>
    );
  }
}

export default App;
