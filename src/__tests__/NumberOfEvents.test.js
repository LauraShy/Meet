import { shallow } from "enzyme";
import React from "react";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  let spy;
  
  beforeAll(() => {
    spy = jest.spyOn({mockUpdateNumberOfEvents: ()=>{}}, "mockUpdateNumberOfEvents");
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateNumberOfEvents={ spy } />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".num-events")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    expect(NumberOfEventsWrapper.find(".num-events").prop("value")).toBe(32);
  });

  test("the default number of events should be 32", () => {
    expect(NumberOfEventsWrapper.find(".num-events").prop("value")).toEqual(32);
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 15 } };
    NumberOfEventsWrapper.find(".num-events").simulate("change", eventObject);
    expect(spy).toHaveBeenCalled();
  });
});
