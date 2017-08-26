import React, { Component } from "react";

const Day = (props) => {
  return (
    <div className='day'>
      <h4 className={props.isToday ? '.has-text-primary' : '.has-text-grey'}>{props.day}</h4>
      <div className='data'>{props.chore}</div>
      <h4 className='assigned-to'>{props.assignment}</h4>
    </div>
  );
}

export default Day;
