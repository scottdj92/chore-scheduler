import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Header = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <div className='navbar-item'>
          <Link to={'/'}>
            <h4 className='title'>Welcome, <b>{props.name}</b></h4>
          </Link>
        </div>
        <div className="navbar-item">
          <span classname='fa fa-sun-o'/>
          <h6 className='title is-6'>
            <Link to={'/' + props.name}>Today</Link>
          </h6>
        </div>
        <div className='navbar-item'>
          <h6 className='title is-6'>
            <Link to={'/calendar'}>Calendar</Link>
          </h6>
        </div>
      </div>
    </nav>
  );
}

export default Header;
