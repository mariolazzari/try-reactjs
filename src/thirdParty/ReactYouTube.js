import React, { Component, Fragment } from "react";
import YouTube from "react-youtube";

// https://www.youtube.com/watch?v=_nBlN9yp9R8
// https://www.youtube.com/watch?v=_nBlN9yp9R8&index=11&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
// https://youtu.be/_nBlN9yp9R8

export default class ReactYouTube extends Component {
  state = {
    player: null
  };

  videoOnReady = event => {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    this.setState({ player: event.target });
    event.target.seekTo(50);
  };

  componentWillUnmount() {
    console.log(this.state.player.getCurrentTime());
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { videoId } = this.props;

    return (
      <Fragment>
        <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
      </Fragment>
    );
  }
}
