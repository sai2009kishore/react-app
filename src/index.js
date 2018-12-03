import React from "react";
import ReactDOM from 'react-dom';
import Clock from "./controllers/clock";
import EventTest from "./controllers/event";
import LoginController from "./controllers/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrimeCalculator from "./controllers/prime";
import UserController from './controllers/users';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const links = ["Home", "Clock", "Event", "Login", "Prime", "Persons"];
const store = configureStore()

class RenderHome extends React.Component {
    render() {
        return (<Provider store={store}>
            <Router>
                <div>
                    <ul>
                        {links.map(link => <li key={link}><Link to={link.toLowerCase()}>{link}</Link></li>)}
                    </ul>
                    <hr />
                    <Route path="/clock" component={Clock} />
                    <Route path="/event" component={EventTest} />
                    <Route path="/login" component={LoginController} />
                    <Route path="/prime" component={PrimeCalculator} />
                    <Route path="/persons" component={UserController} />
                </div>
            </Router>
        </Provider>);
    }
}

ReactDOM.render(<RenderHome />, document.getElementById("root"));