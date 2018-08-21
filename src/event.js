import React from "react";

class EventTest extends React.Component {
    render() {
        return (
            <button onClick={clickEvent} >Click me</button>
        );
    }
}

function clickEvent(e) {
    console.log("I was clicked");
}

export default EventTest;