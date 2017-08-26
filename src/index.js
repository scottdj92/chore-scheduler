import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./components/dashboard/index";
import Today from "./components/today/index";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Dashboard}/>
          <Route path={'/:person'} component={Today}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
