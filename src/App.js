import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberofEvents';
import { extractLocations } from './api';
import { mockData } from './mock-data';

class App extends Component {
  render() {
    const locations = extractLocations(mockData);
    return (
      <div className="App">
        <CitySearch locations={locations}/>
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}

export default App;