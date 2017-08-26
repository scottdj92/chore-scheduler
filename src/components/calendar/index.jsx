import React, { Component } from "react";
import moment from "moment";

import Day from "../day/index";
import Week from "../week/index";

import "./index.scss";
import DOW from "./fixtures/daysOfWeek.json";

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: moment()
    }
  }

  createDaysOfWeek() {
    return DOW.map((day, index) => {
      return (
        <div key={index} className='column'>
          <h4 className='is-size-5 has-text-centered is-uppercase'>{day}</h4>
          {this.createAllDays()}
        </div>
      )
    });
  }

  createAllDays() {
    let month = [];
    for(let i = 0; i < 4; i++) {
      //4 months in a week, use moment to specify numDay
      // TODO: fix week up
      month.push(<Week key={i} numOfWeek={i}/>);
    }
    return month;
  }


  render() {
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
