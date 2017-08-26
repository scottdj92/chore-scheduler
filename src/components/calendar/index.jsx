import React, { Component } from "react";
import moment from "moment";

import "./index.scss";
import DOW from "./fixtures/daysOfWeek.json";

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: moment(),
      selectedDay: ""
    }
  }

  createDaysOfWeek() {
    return DOW.map((day, index) => {
      return (
        <div key={index} className='column'>
          <h4 className='is-size-5 has-text-centered is-uppercase'>{day}</h4>
        </div>
      )
    });
  }


  render() {
    console.log(this.state.currentTime);
    return(
      <section className='calendar'>
        <h1 className='title is-2'>Calendar</h1>
        <h2 className='subtitle'>{moment().format('ddd MMMM do YYYY')}</h2>
        <div className='container is-fluid'>
          <div className='columns'>
            {this.createDaysOfWeek()}
          </div>
        </div>
      </section>
    );
  }
}
