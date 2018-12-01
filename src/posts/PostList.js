import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "./PostDetail";
class PostList extends Component {
  // onClick event handler
  handleClick = txtMsg => alert(txtMsg);

  render() {
    return (
      <div>
        {PostData.map(post => (
          <PostDetail post={post} onClick={this.handleClick} key={post.id} />
        ))}
      </div>
    );
  }
}

export default PostList;
