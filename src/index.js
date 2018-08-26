import React from "react";
import ReactDOM from 'react-dom';
import Clock from "./clock";
import EventTest from "./event";
import LoginController from "./login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrimeCalculator from "./prime";

import "./styles.css";

const links = ["Home", "Clock", "Event", "Login", "Prime"];

class RenderHome extends React.Component {
    render() {
        return (<Router>
            <div>
                <ul>
                    {links.map(link => <li key={link}><Link to={link.toLowerCase()}>{link}</Link></li>)}
                </ul>
                <hr />
                <Route path="/clock" component={Clock} />
                <Route path="/event" component={EventTest} />
                <Route path="/login" component={LoginController} />
                <Route path="/prime" component={PrimeCalculator} />
            </div>
        </Router>);
    }
}

ReactDOM.render(<RenderHome />, document.getElementById("root"));