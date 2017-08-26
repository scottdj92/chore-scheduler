import React, { Component } from "react";

function createDays(days) {
  // for each "week", we use moment to see
  // if the day matches up with the specfied number
  // if not, do not render anything
  // TODO: add logic for day
};

const Week = (props) => {
  console.log(props);
  return (
    <div className={'week-' + props.numOfWeek}>
      {createDays(props.days)}
      <h4>Day</h4>
    </div>
  );
}

export default Week;
