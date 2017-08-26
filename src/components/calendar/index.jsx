import React, { Component } from "react";
import moment from "moment";

import "./index.scss";

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: moment(),
      selectedDay: ""
    }
  }
  render() {
    console.log(this.state.currentTime);
    return(
      <section className='calendar'>
        <h1 className='title is-2'>Calendar - {moment().format('ddd MMMM do YYYY')}</h1>
      </section>
    );
  }
}
