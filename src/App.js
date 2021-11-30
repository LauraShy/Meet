import React, { Component } from 'react';
import './nprogress.css';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import welcome_logo from './images/welcome_logo.png';
import { ErrorAlert } from './Alert';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { mockData } from './mock-data';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    showWelcomeScreen: undefined,
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, this.state.numberOfEvents);
        if (this.mounted) {
          this.setState({
            events: eventsToShow,
            currentLocation: location,
          });
        }
    });
  }

  async componentDidMount() {
    this.mounted = true;

    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  updateNumberOfEvents = async (e) => {
    const newVal = e.target.value ? parseInt(e.target.value) : 32;
    
    if (newVal < 1 || newVal > 32) {
      await this.setState({
        errorText: 'Please choose a number between 1 and 32',
        numberOfEvents: newVal,
      });
    } else {
      await this.setState({
        errorText: '',
        numberOfEvents: newVal,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) {
      return <div className="App" />;
    }

    return (
      <div className="App">
        <Header />
        <div className="welcome-message">
          <img src={welcome_logo} className="welcome-logo responsive" alt="welcome-message"></img>
        </div>

        { !navigator.onLine ? (<WarningAlert text='You are offline!' />) : (<WarningAlert text=' ' />)}

        <div className="search-numEvents">
          <NumberOfEvents 
           numberOfEvents={this.state.numberOfEvents}
           updateNumberOfEvents={this.updateNumberOfEvents}
           errorText ={this.state.errorText}
          />
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;