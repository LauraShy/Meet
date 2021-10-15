import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numEvents: 32,
  };

  handleInputChange = (event) => {
    const newValue = event.target.newValue;
    this.setState({
      numEvents: newValue,
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
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;