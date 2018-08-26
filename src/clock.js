import React from 'react';

class ClockController extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Clock";
        this.state = {time : new Date().toLocaleTimeString()};
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer() {
        this.setState({time : new Date().toLocaleTimeString()});
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <h1>The time is {this.state.time}</h1>
    }
}

export default ClockController;