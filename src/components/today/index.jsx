import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Today extends Component {
  render() {
    console.log(this.props);
    return (
      <section className='today'>
        <h1 className='title is-2'>Hi, {this.props.match.params.person}</h1>
        <h2 className='subtitle'>Here's what you need to do today:</h2>
      </section>
    );
  }
}
