import React, { Component } from 'react';
import './nprogress.css';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
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
        <Header />
        <div className="welcome-message">
          <img src={welcome_logo} className="welcome-logo responsive" alt="welcome-message"></img>
        </div>
        <div className="search-numEvents">
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <NumberOfEvents />
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;