import React, { Component, Fragment } from "react";

class PostDetail extends Component {
  state = {
    showContent: true,
    postItem: null
  };

  toggleShowContent = e => {
    e.preventDefault();
    this.setState({ showContent: !this.state.showContent });
  };

  handleRemoveContent = () => {
    if (this.props.didHandleRemove) {
      this.props.didHandleRemove(this.state.postItem);
    }
  };

  titleWasClciked = () => {
    let newPost = this.state.postItem;
    newPost.title = "New title";
    this.setState({ postItem: newPost });

    if (this.props.onClick !== undefined) {
      this.props.onClick(newPost);
    }
  };

  componentDidMount = () => this.setState({ postItem: this.props.post });

  render() {
    const { showContent, postItem } = this.state;

    return (
      <Fragment>
        {postItem && (
          <Fragment>
            <h1 onClick={() => this.titleWasClciked()}>{postItem.title}</h1>
            <h2>{postItem.slug}</h2>
            {showContent && <p>{postItem.content}</p>}
            <button onClick={this.toggleShowContent}>
              Toggle {postItem.title}
            </button>
            <button onClick={this.handleRemoveContent}>Remove</button>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default PostDetail;
