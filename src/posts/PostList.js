import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "./PostDetail";
class PostList extends Component {
  state = {
    postList: []
  };

  // onClick event handler
  handleDataCallback = postItem => {
    let currentPostList = this.state.postList;
    currentPostList.push(postItem);
    this.setState({ postList: currentPostList });
  };

  handleRemoveContent = postItem => {
    this.setState({ postList: this.state.postList.pop(postItem) });
  };

  componentDidMount = () => {
    this.setState({ postList: PostData });
  };

  render() {
    const { postList } = this.state;

    return (
      <div>
        {postList.map(post => (
          <PostDetail
            post={post}
            onClick={this.handleDataCallback}
            didHandleRemoveContent={this.handleRemoveContent}
            key={post.id}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
