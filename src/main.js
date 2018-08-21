import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
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

function App() {
    return (<div>
        <Clock/>
    </div>);
}

export default App;