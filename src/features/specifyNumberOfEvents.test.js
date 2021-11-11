import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When a user has not specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the main page has been opened and a list of events is displayed', () => {
      let EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find("ul.EventList-grid")).toHaveLength(1);
    });

    when('the user views the list of events', () => {
      // empty on purpose
    });

    then('the app should display a maximum of 32 events', () => {
      let NumberOfEventsWrapper;
      NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} />)
      expect(NumberOfEventsWrapper.find(".num-events").prop("value")).toEqual(32);
    });
  });

  test('Users can change the number of events they want to view', ({ given, when, then }) => {
    
    let NumberOfEventsWrapper;
    let spy;
    
    given('the main page has been opened and a list of events is displayed', () => {
      let EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find("ul.EventList-grid")).toHaveLength(1);
    });

    when('the user types a number', () => {
      spy = jest.spyOn({mockUpdateNumberOfEvents: ()=>{}}, "mockUpdateNumberOfEvents");
      NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateNumberOfEvents={ spy } />);
    });

    then('the list will update displaying the number of events the user specified', () => {
      const eventObject = { target: { value: 15 } };
      NumberOfEventsWrapper.find(".num-events").simulate("change", eventObject);
      expect(spy).toHaveBeenCalled();
    });
});
});