import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    
    given('the main page has been opened and a list of events is displayed', () => {
      let EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find("ul.EventList-grid")).toHaveLength(1);
    });

    when('the user does not perform any actions', () => {
      // empty on purpose
    });

    then('the user sees that the event information is hidden', () => {
      let EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find(Event, '.details-btn')).toEqual({});
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    
    let eventWrapper;
    let event = mockData[0];
    given('the main page has been opened and a list of events is displayed', () => {
      let EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find(Event, '.details-btn')).toEqual({});
    });

    when('the user clicks on the Show Details button', () => {
      eventWrapper = shallow(<Event event={event} />);
      eventWrapper.find('.details-btn').simulate('click');
    });

    then('the event element expands, showing the event details', () => {
      expect(eventWrapper.state('showDetails')).toEqual(true);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    
    let eventWrapper;
    let event = mockData[0];
    given('the event element is expanded from clicking the Show Details button', () => {     
      eventWrapper = shallow(<Event event={event} />);
      eventWrapper.find('.details-btn').simulate('click');
      expect(eventWrapper.state('showDetails')).toEqual(true);
    });

    when('the user clicks on the Hide Details button', () => {
      eventWrapper.find('.details-btn').simulate('click');
    });

    then('the event element collapses, hiding the event details', () => {
      expect(eventWrapper.state('showDetails')).toEqual(false);
    });
  });
});