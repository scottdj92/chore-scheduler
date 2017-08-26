import React, { Component } from "react";
import { Link } from "react-router-dom";

import ChoreTile from "../chore-tile/index";
import ChoreStubData from '../chore-tile/fixtures/stub-chore-data.json';

export default class Today extends Component {

  renderChores() {
    //TODO: update this to use props instead of stub data
    return ChoreStubData.map((chore, index) => {
      return (
        <ChoreTile key={index} data={chore}/>
      );
    });
  }


  render() {
    console.log(this.props);
    return (
      <section className='container today'>
        <div className='section'>
          <div className='container'>
            <h1 className='title is-2'>Hi, {this.props.match.params.person}</h1>
            <h2 className='subtitle'>Here's what you need to do today:</h2>
            <div className='tile is-ancestor'>
              {this.renderChores()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
