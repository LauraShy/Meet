import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment';

class Event extends Component {
  
  state = {
    showDetails: false
  }

  handleDetails = () => {
    if (this.state.showDetails === true) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  };

  render() {

    const { event } = this.props;
    const eventStart = moment(event.start.dateTime).format('MMMM Do YYYY, h:mm a');

    return (
      
          <Card className="event-card">
            <Card.Body>
              <Card.Title className="summary"><b>Event: </b>{event.summary}</Card.Title>
              <Card.Subtitle className="location">
                <p><b>Location: </b>{event.location}</p>
                <p><b>Time: </b>{`${eventStart}`}</p>
              </Card.Subtitle>
              
              {
                this.state.showDetails && (
                  <Card.Text>
                    <p><b>About the Event: </b></p>
                    <p className="event-description"><i>Description: </i>{event.description}</p>
                    <p className="organizerEmail"><i>Organizer Email: </i>{event.organizer.email}</p>
                    <p className="status"><i>Event Status: </i>{event.status}</p>  
                  </Card.Text>
                )
              }
              <div className="event-button">
                  <Button
                    className='details-btn'
                    variant="dark"
                    onClick={() => this.handleDetails()}>
                    {!this.state.showDetails ? 'Show Details' : 'Hide Details'}
                  </Button>
              </div>
            </Card.Body>
          </Card>
        
    )
  }
}

export default Event;