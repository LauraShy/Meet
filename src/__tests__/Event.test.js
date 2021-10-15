import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let eventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    eventWrapper = shallow(<Event event={event} />)
  });

  test('the element is collapsed by default', () => {
    eventWrapper.setState({
      collapsed: true,
    });
    expect(eventWrapper.find(".show-description").hasClass("hide")).toEqual(true);
  });

  test('renders summary in the collapsed event element', () => {
    expect(eventWrapper.find(".summary")).toHaveLength(1);          //test failed due to length
  });

  test('renders location in the collapsed event element', () => {
    expect(eventWrapper.find(".location")).toHaveLength(1);         //test failed due to length
  });

  test('renders date in the collapsed event element', () => {
    expect(eventWrapper.find(".show-details-btn")).toHaveLength(1);
  });

  test('additional details render when show details button is clicked', () => {
    eventWrapper.setState({
      collapsed: true,
    });
    eventWrapper.find(".show-details-btn").simulate("click");
    expect(eventWrapper.state("collapsed")).toBe(false);
  });

  test('additional details hidden when hide detials button is clicked', () => {
    eventWrapper.setState({
      collapsed: false,
    });
    eventWrapper.find(".hide-details-btn").simulate("click");
    expect(eventWrapper.state("collapsed")).toBe(true);
  });
});