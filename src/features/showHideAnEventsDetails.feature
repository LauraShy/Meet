Feature: Show/Hide an Event Details

Scenario: An event element is collapsed by default
Given the main page has been opened and a list of events is displayed
When the user does not perform any actions
Then the user sees that the event information is hidden

Scenario: User can expand an event to see its details
Given the main page has been opened and a list of events is displayed
When the user clicks on the Show Details button
Then the event element expands, showing the event details

Scenario: User can collapse an event to hide its details
Given the event element is expanded from clicking the Show Details button
When the user clicks on the Hide Details button
Then the event element collapses, hiding the event details
