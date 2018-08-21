import React from "react";
import ReactDOM from 'react-dom';
import Clock from "./main";
import EventTest from "./event";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

function RenderHome() {
  return (<Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clock">Clock</Link>
                </li>
                <li>
                    <Link to="/event">Event</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/clock" component={Clock} />
            <Route path="/event" component={EventTest} />
        </div>
  </Router>);
}

ReactDOM.render(RenderHome(), document.getElementById("root"));