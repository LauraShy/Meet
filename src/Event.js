import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class Event extends Component {
  
  state = {
    collapsed: true,
  };

  handleShowDetails = () => {
    this.setState({
      collapsed: false,
    });
  };

  handleHideDetails = () => {
    this.setState({
      collapsed: true,
    });
  };

  render() {
    const { event } = this.props;
    return (
      <Card>
        <Card.Body>
          <Card.Title>{event.summary}</Card.Title>
          <Card.Subtitle>{event.location}, {event.start.dateTime}</Card.Subtitle>
          <div className="event-details">
            <Button className={`show-details-btn ${this.state.collapsed ? "show" : "hide"}`}
              onClick={this.handleShowDetails}
            >
              Show Details
            </Button>
            <div className={`show-description ${this.state.collapsed ? "hide" : "show"}`}>
              <h3>About the Event:</h3>
              <p className="event-description">{event.description}</p>
              <Button
                className="hide-details-btn"
                onClick={this.handleHideDetails}
              >
                Hide Details
              </Button>
            </div>    
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default Event;