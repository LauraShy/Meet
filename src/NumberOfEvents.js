import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numEvents: 32,
  };

  handleInputChange = (eventCount) => {
    this.setState({
      numEvents: eventCount,
    });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          min="1"
          max="100"
          id="num-events"
          className="num-events"
          value={this.state.numEvents}
          onChange={(event) => this.handleInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;