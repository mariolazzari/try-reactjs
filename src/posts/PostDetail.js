import React, { Component } from "react";

class PostDetail extends Component {
  state = {
    showContent: true
  };

  toggleShowContent = e => {
    e.preventDefault();
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    const { post, onClick } = this.props;
    const { showContent } = this.state;
    return (
      <div>
        <h1 onClick={e => onClick(e.target.innerHTML)}>{post.title}</h1>
        <h2>{post.slug}</h2>
        {showContent && <p>{post.content}</p>}
        <button onClick={this.toggleShowContent}>Toggle {post.title}</button>
      </div>
    );
  }
}

export default PostDetail;
