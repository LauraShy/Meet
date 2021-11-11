Feature: Specify Number of Events

Scenario: When a user has not specified a number, 32 is the default number
Given the main page has been opened and a list of events is displayed
When the user views the list of events
Then the app should display a maximum of 32 events

Scenario: Users can change the number of events they want to view
Given the main page has been opened and a list of events is displayed
When the user types a number
Then the list will update displaying the number of events the user specified
