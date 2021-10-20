import React, { Component } from 'react';
import './nprogress.css';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import meet_logo from './images/meet_logo.png';
import welcome_logo from './images/welcome_logo.png';

import { extractLocations, getEvents } from './api';
import { mockData } from './mock-data';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    
    return (
      <div className="App">
        <div className="search-number-grid">
          <div className="search">
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          </div>
          <div className="logo">
            <img src={meet_logo} className="meet-logo" alt="meet-logo"></img>
          </div>
          <div className="number-events"><NumberOfEvents /></div>
        </div>
        <div className="welcome-message">
          <img src={welcome_logo} className="welcome-logo responsive" alt="welcome-message"></img>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;