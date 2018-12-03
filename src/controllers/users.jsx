import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import PropTypes from 'prop-types';
class UserController extends React.Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        this.props.userActions.fetchUser().then(res => {
            this.setState({users: res.data});
        });
    }

    render() {
        return (
            <div>
                <center>
                    {this.state.users && this.state.users.length > 0 ? this.populateTable() : 'No User Data'}
                </center>
            </div>
        );
    }

    populateTable = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, i) => {
                        return (<tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>);
                    })}
                </tbody>
            </table >
        );
    }
}

UserController.propTypes = {
    userActions: PropTypes.object,
    users: PropTypes.array
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserController);