import React, { Component } from "react";

function completeChore() {
  //send action to complete chore and re-render
  console.log('chore completed!');
}

const ChoreTile = (props) => {
  const { title, details, completed } = props.data;
  return (
    <article className='tile is-child box'>
      <h4 className='title is-3'>{title}</h4>
      <h5 className='subtitle is-6'>{details}</h5>
      {completed ? <ChoreCompleteButton/> : <ChoreIncompleteButton/>}
    </article>
  );
}

const ChoreCompleteButton = () => {
  return (
    <a className='button is-success'>
      <span className='icon'>
        <i className='fa fa-check'></i>
      </span>
      <span>Done!</span>
    </a>
  );
}

const ChoreIncompleteButton = () => {
  return (
    <a className='button'>
      <span>Done?</span>
    </a>
  );
}

export default ChoreTile;
