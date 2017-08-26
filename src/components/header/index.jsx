import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Header = (props) => {
  return (
    <nav className='navbar header'>
      <div className='navbar-brand'>
        <div className='navbar-item'>
          <Link to={'/'}>
            <h4 className='title'>Chore Scheduler</h4>
          </Link>
        </div>
        <div className="navbar-item">
          <span className='fa fa-sun-o'/>
          <h6 className='title is-6'>
            <Link to={'/' + props.name + '/today'}>Today</Link>
          </h6>
        </div>
        <div className='navbar-item'>
          <span className='fa fa-calendar'/>
          <h6 className='title is-6'>
            <Link to={'/calendar'}>Calendar</Link>
          </h6>
        </div>
      </div>
    </nav>
  );
}

export default Header;
