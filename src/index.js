import React from "react";
import ReactDOM from 'react-dom';
import Clock from "./main";
import EventTest from "./event";
import LoginController from "./login";
import "./styles.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

const links = ["Home", "Clock", "Event", "Login"];

function RenderHome() {
  return (<Router>
        <div>
            <ul>
                {links.map(link => <li key={link}><Link to={link.toLowerCase()}>{link}</Link></li>)}
            </ul>
            <hr/>
            <Route path="/clock" component={Clock} />
            <Route path="/event" component={EventTest} />
            <Route path="/login" component={LoginController} />
        </div>
  </Router>);
}

ReactDOM.render(RenderHome(), document.getElementById("root"));