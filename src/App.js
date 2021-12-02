import React, { Component } from 'react';
import './nprogress.css';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import EventGenre from './EventGenre';
import welcome_logo from './images/welcome_logo.png';
import { ErrorAlert } from './Alert';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockData } from './mock-data';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    warningText: '',
    showWelcomeScreen: undefined,
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

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
            locations: extractLocations(events)
          });
        }
        if (!navigator.onLine) {
          this.setState({ warningText: 'You are currently offline. Some of the apps features may be limited.' });
          console.log("App is offline");
        } else {
          this.setState({ warningText: '' });
        };
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
        
        <div className="landing-grid">
          <div className="search-numEvents">
            <NumberOfEvents 
            numberOfEvents={this.state.numberOfEvents}
            updateNumberOfEvents={this.updateNumberOfEvents}
            errorText ={this.state.errorText}
            />
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          </div>
          <div className="data-vis-wrapper">
            <div className="chart-1">
              <h4>Events by Topic</h4>
              <EventGenre events={this.state.events} />
            </div>
            <div className="chart-2">
              <h4>Events in Each City</h4>
              <ResponsiveContainer height={400} >
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                  <CartesianGrid />
                  <XAxis tick={{ fill: "#000000" }} type="category" dataKey="city" name="city" />
                  <YAxis allowDecimals={false} tick={{ fill: "#000000" }} type="number" dataKey="number" name="number of events" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#1D4355" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;