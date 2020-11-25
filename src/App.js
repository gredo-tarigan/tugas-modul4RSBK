import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Counter from "./learn-useState/counter";
import Effect from "./learn-useEffect/index";
import Context from "./learn-useContext/index";
import Memo from "./tugas-memo/index";
import Reducer from "./tugas-Reducer/index";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State</Link>
            </li>
            <li className="li">
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className="li">
              <Link to="/reducer">Use Reducer</Link>
            </li>
            <li className="li">
              <Link to="/context">Use Context</Link>
            </li>
            <li className="li">
              <Link to="/memo">Use Memo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/effect" exact component={Effect} />
          <Route path="/context" exact component={Context} />
          <Route path="/memo" exact component={Memo} />
          <Route path="/reducer" exact component={Reducer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
