import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

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
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
        <ErrorAlert text={this.props.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;