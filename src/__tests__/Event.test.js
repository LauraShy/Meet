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
    expect(eventWrapper.find(".card-text")).toHaveLength(0);
  });

  test('renders summary in the collapsed event element', () => {
    expect(eventWrapper.find(".summary")).toHaveLength(1);         
  });

  test('renders location in the collapsed event element', () => {
    expect(eventWrapper.find(".location")).toHaveLength(1);        
  });

  test('renders date in the collapsed event element', () => {
    expect(eventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test('additional details render when show details button is clicked', () => {
    eventWrapper.find(".details-btn").simulate("click");
    expect(eventWrapper.state("showDetails")).toBe(true);
  });

  test('additional details hidden when hide detials button is clicked', () => {
    eventWrapper.setState({
      collapsed: true,
    });
    eventWrapper.find(".details-btn").simulate("click");
    expect(eventWrapper.state("showDetails")).toBe(false);
  });
});