import React from 'react';

class EventController extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Event";
        this.state = {isLit : false};
    }

    render() {
        return (
            <div>
                <center>
                    <img src={this.state.isLit ? "./assets/pic_bulbon.gif" : "./assets/pic_bulboff.gif"} alt = "Bulb" width="150px"/>
                    <br/><br/>
                    <button onClick={this.clickEvent} >Click me</button>
                </center>
            </div>
        );
    }

    clickEvent= () => {
        this.setState(prevState => ({
            isLit : !prevState.isLit
          }));
    }
}

export default EventController;