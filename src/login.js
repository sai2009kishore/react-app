import React from 'react';

class LoginController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.login}>
                {this.state.isLoggedIn ? "User Logged in." : <center>
                    <input id="uname" name="username" type="text" placeholder="Username" autoFocus onChange={this.handleChange}></input><br /><br />
                    <input id="password" name="password" type="password" placeholder="Password" onChange={this.handleChange}></input><br /><br />
                    <button onClick={this.login}>Login</button>
                </center>
                }
            </form>
        );
    }

    login = (event) => {
        if (this.state.username === "Kishore"
            && this.state.password === "Kishore") {
            this.setState({ isLoggedIn: true });
        } else {
            alert("Invalid Credentials");
        }
        event.preventDefault();
    }
}

export default LoginController;