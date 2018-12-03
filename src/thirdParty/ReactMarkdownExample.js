import React, { Component, Fragment } from "react";
import ReactMarkdown from "react-markdown";

export default class ReactMarkdownExample extends Component {
  render() {
    const input = "<h1>Visitail mio sito</h1>";
    const link = "[qui](https://mariolazzari.it)";

    return (
      <Fragment>
        <ReactMarkdown source={input} escapeHtml={false} />
        <ReactMarkdown source={link} />
      </Fragment>
    );
  }
}
