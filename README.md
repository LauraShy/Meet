# Meet App

A serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Key Features 

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

---

# User Stories

### Feature 1: Filter Events by City

***User Story:*** As a user, I should be able to filter events by city so that I can see the list of events that take place in that city

*Scenario #1:* When a user hasn’t searched for a city, show upcoming events from all cities.
- *Given*: the user has not searched for any city
- *When:* the user opens the app
- *Then:* the user should see a list of all upcoming events

*Scenario #2:* Users should see a list of suggestions when they search for a city.
- *Given*: the main page has been opened
- *When:* user starts typing in the city textbox/search bar
- *Then:* the user should see a list of cities (suggestions) that match what they have typed

*Scenario #3:* Users can select a city from the suggested list.
- *Given*: the user typed “Richmond” in the city textbox/search bar, which showed s a list of suggested cities
- *When:* the user selects a city (i.e. “Richmond, VA”) from the list
- *Then:* the city should be changed to the city selected, and the user should receive a list of upcoming events in said city

---

### Feature 2: Show/Hide an Event’s Details

***User Story:*** As a user, I should be able to show/hide an event’s details so that I can view more or less details for events

*Scenario #1:* An event element is collapsed by default
- *Given*: the main page has been opened and a list of events is displayed
- *When:* the user sees that the event information is hidden
- *Then:* the user should be able to click the event (or toggle button) and show/hide the event details

*Scenario #2:* Users can expand an event to see its details
- *Given*: the main page has been opened and a list of events is displayed
- *When:* the user clicks on the event (or toggle button)
- *Then:* the user should be able to expand the element and show the event details

*Scenario #3:* Users can collapse an event to hide its details.
- *Given*: the user has clicked on an event to show event details
- *When:* the user clicks on the event (or toggle button)
- *Then:* the user should be able to collapse the element and hide the event details

---

### Feature 3: Specify the Number of Events

***User Story:*** As a user, I should be able to specify the number of events listed so that I can view more or less events 

*Scenario #1:* When a user hasn’t specified a number, 32 is the default number
- *Given*: the main page has been opened and a list of events is displayed
- *When:* the user views the list of events
- *Then:* the app should display a maximum of 32 events

*Scenario #2:* Users can change the number of events they want to see
- *Given*: the main page has been opened and a list of events is displayed
- *When:* the user clicks on the event (or toggle button)
- *Then:* the user should be able to show/hide the event details

---

### Feature 4: Use the Application Offline 

***User Story:*** As a user, I should be able to use the app offline so that I can utilize the app with or without internet

*Scenario #1:* Show cached data when there’s no internet connection
- *Given*: the user didn’t have internet connection
- *When:* the user opens the app
- *Then:* the user should be able to see the last events viewed when it had an internet connection

*Scenario #2:* Show error when user changes the settings (city, time range)
- *Given*: the user didn’t have internet connection
- *When:* the user changes the app settings 
- *Then:* the app should be able to display an error message

---

### Feature 5: Data Visualization 

***User Story:*** As a user, I should be able to see a chart that displays the number of upcoming events by city so that I can view events happening in any city in an organized way

*Scenario #1:* Show a chart with the number of upcoming events in each city
- *Given*: the user opened the app and is looking for events
- *When:* the user clicks on the chart of events by city
- *Then:* the user should be able to see a chart showing upcoming events in each city, organized by city 