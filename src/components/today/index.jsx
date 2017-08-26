import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Today extends Component {
  render() {
    console.log(this.props);
    return (
      <section>
        <Link to={"/"}>go back</Link>
        <h1>Today view</h1>
      </section>
    );
  }
}
