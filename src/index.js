import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/header/index";
import Dashboard from "./components/dashboard/index";
import Today from "./components/today/index";
import Calendar from "./components/calendar/index";

import "./main.scss";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Header name={'Scott'}/>
          <Route exact path={'/'} component={Dashboard}/>
          <Route path={'/:person'} component={Today}/>
          <Route path={'/calendar'} component={Calendar}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
